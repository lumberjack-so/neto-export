// Edge Function: GetRma -> upserts to 'rma' table
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import {
	initSupabase,
	callNetoAPI,
	transformData,
	upsertData,
} from "./utils.js";

const endpoint = "GetRma";
const table = "rma";
const conflictColumn = "rma_id";

const filterOptions = {
	DateIssuedFrom: "1900-01-01 00:00:00",
	DateIssuedTo: "2100-01-01 00:00:00",
	OutputSelector: ["RmaID", "RmaStatus", "DateIssued", "OrderID"],
};

serve(async () => {
	const supabase = initSupabase();
	try {
		const PAGE_SIZE = 1000;
		let page = 0;
		let totalInserted = 0;
		const rmas = [];

		while (true) {
			const { Rma = [] } = await callNetoAPI(endpoint, {
				Filter: { ...filterOptions, Page: page, Limit: PAGE_SIZE },
			});
			rmas.push(...Rma);
			if (Rma.length === 0) break;

			const rows = transformData(endpoint, { Rma });
			const { count } = await upsertData(supabase, table, conflictColumn, rows);
			totalInserted += count ?? 0;

			if (Rma.length < PAGE_SIZE) break;
			page++;
		}

		console.log("all rmas fetched-->>>>: ", rmas);
		return new Response(
			JSON.stringify({ success: true, inserted: totalInserted }),
			{ headers: { "Content-Type": "application/json" } }
		);
	} catch (err) {
		return new Response(
			JSON.stringify({ success: false, error: err.message }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
});
