// Edge Function: GetPayment -> upserts to 'payment' table
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { initSupabase, callNetoAPI, transformData } from "./utils.js";

const endpoint = "GetPayment";
const table = "payment";
const conflictColumn = "payment_id";
const PAGE_SIZE = 1000;

const baseFilter = {
	DatePaidFrom: "2012-01-01 00:00:00",
	DatePaidTo: new Date().toISOString().split("T")[0] + " 23:59:59",
	Limit: PAGE_SIZE,
	OutputSelector: ["ID", "AmountPaid", "PaymentMethod", "DatePaid"],
};

serve(async () => {
	const supabase = initSupabase();
	try {
		// Get current sync state
		const { data: syncState, error: syncError } = await supabase
			.from("sync_state")
			.select("*")
			.eq("entity_type", "payments")
			.single();

		if (syncError) {
			throw new Error(`Failed to get sync state: ${syncError.message}`);
		}

		let page = syncState?.last_synced_page || 0;
		let totalInserted = 0;
		const payments = [];

		// Fetch one page of payments
		console.log(`Fetching payments page ${page} (limit ${PAGE_SIZE})`);
		const { Payment = [] } = await callNetoAPI(endpoint, {
			Filter: { ...baseFilter, Page: page, Limit: PAGE_SIZE },
		});
		console.log(`Received ${Payment.length} payments on page ${page}`);

		if (Payment.length > 0) {
			// Deduplicate by payment_id to avoid ON CONFLICT double-update
			const uniqueMap = new Map();
			for (const p of Payment) uniqueMap.set(p.ID, p);
			const rows = transformData(endpoint, {
				Payment: [...uniqueMap.values()],
			});
			console.log(`Transform yielded ${rows.length} rows on page ${page}`);

			const { error, count } = await supabase
				.from(table)
				.upsert(rows, { onConflict: conflictColumn });

			if (error) throw error;
			console.log(`Upserted ${count ?? 0} payments on page ${page}`);
			totalInserted += count ?? 0;
			payments.push(...Payment);

			// Update sync state
			const isComplete = Payment.length < PAGE_SIZE;
			const { error: updateError } = await supabase
				.from("sync_state")
				.update({
					last_synced_page: page + 1,
					last_synced_date: new Date().toISOString(),
					is_complete: isComplete,
					total_records: (syncState?.total_records || 0) + Payment.length,
				})
				.eq("entity_type", "payments");

			if (updateError) {
				throw new Error(`Failed to update sync state: ${updateError.message}`);
			}
		}

		return new Response(
			JSON.stringify({
				success: true,
				inserted: totalInserted,
				current_page: page,
				has_more: Payment.length === PAGE_SIZE,
				is_complete: Payment.length < PAGE_SIZE,
				payments_fetched: payments.length,
			}),
			{ headers: { "Content-Type": "application/json" } }
		);
	} catch (err) {
		console.error(`${endpoint} error:`, err);
		return new Response(
			JSON.stringify({ success: false, error: err?.message || String(err) }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
});
