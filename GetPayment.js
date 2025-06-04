// Edge Function: GetPayment -> upserts to 'payment' table
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { initSupabase, callNetoAPI, transformData } from "./utils.js";

const endpoint = "GetPayment";
const table = "payment";
const conflictColumn = "payment_id";

const baseFilter = {
	DatePaidFrom: "1900-01-01 00:00:00",
	DatePaidTo: "2100-01-01 00:00:00",
	Limit: 10000,
	OutputSelector: ["ID", "AmountPaid", "PaymentMethod", "DatePaid"],
};

serve(async () => {
	const supabase = initSupabase();
	try {
		const PAGE_SIZE = 1000;
		let page = 0;
		let totalInserted = 0;
		const payments = [];

		while (true) {
			const { Payment = [] } = await callNetoAPI(endpoint, {
				Filter: { ...baseFilter, Page: page, Limit: PAGE_SIZE },
			});
			payments.push(...Payment);
			if (Payment.length === 0) break;

			// deduplicate by payment_id to avoid ON CONFLICT double-update
			const uniqueMap = new Map();
			for (const p of Payment) uniqueMap.set(p.ID, p);
			const rows = transformData(endpoint, {
				Payment: [...uniqueMap.values()],
			});

			const { error, count } = await supabase
				.from(table)
				.upsert(rows, { onConflict: conflictColumn });
			if (error) throw error;
			totalInserted += count ?? 0;

			if (Payment.length < PAGE_SIZE) break;
			page++;
		}

		console.log("all payments fetched-->>>>: ", payments);
		return new Response(
			JSON.stringify({ success: true, inserted: totalInserted }),
			{
				headers: { "Content-Type": "application/json" },
			}
		);
	} catch (err) {
		return new Response(
			JSON.stringify({ success: false, error: err?.message || String(err) }),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
});
