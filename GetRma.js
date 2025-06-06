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
const PAGE_SIZE = 1000;

const filterOptions = {
	DateIssuedFrom: "2012-01-01 00:00:00",
	DateIssuedTo: new Date().toISOString().split("T")[0] + " 23:59:59",
	OutputSelector: ["RmaID", "RmaStatus", "DateIssued", "OrderID"],
};

serve(async () => {
	const supabase = initSupabase();
	try {
		// Get current sync state
		const { data: syncState, error: syncError } = await supabase
			.from("sync_state")
			.select("*")
			.eq("entity_type", "rmas")
			.single();

		if (syncError) {
			throw new Error(`Failed to get sync state: ${syncError.message}`);
		}

		let page = syncState?.last_synced_page || 0;
		let totalInserted = 0;
		const rmas = [];

		// Fetch one page of RMAs
		console.log(`Fetching RMAs page ${page} (limit ${PAGE_SIZE})`);
		const { Rma = [] } = await callNetoAPI(endpoint, {
			Filter: { ...filterOptions, Page: page, Limit: PAGE_SIZE },
		});
		console.log(`Received ${Rma.length} RMAs on page ${page}`);

		if (Rma.length > 0) {
			const rows = transformData(endpoint, { Rma });
			console.log(`Transform yielded ${rows.length} rows on page ${page}`);

			const { count } = await upsertData(supabase, table, conflictColumn, rows);
			console.log(`Upserted ${count ?? 0} RMAs on page ${page}`);
			totalInserted += count ?? 0;
			rmas.push(...Rma);

			// Update sync state
			const isComplete = Rma.length < PAGE_SIZE;
			const { error: updateError } = await supabase
				.from("sync_state")
				.update({
					last_synced_page: page + 1,
					last_synced_date: new Date().toISOString(),
					is_complete: isComplete,
					total_records: (syncState?.total_records || 0) + Rma.length,
				})
				.eq("entity_type", "rmas");

			if (updateError) {
				throw new Error(`Failed to update sync state: ${updateError.message}`);
			}
		}

		return new Response(
			JSON.stringify({
				success: true,
				inserted: totalInserted,
				current_page: page,
				has_more: Rma.length === PAGE_SIZE,
				is_complete: Rma.length < PAGE_SIZE,
				rmas_fetched: rmas.length,
			}),
			{ headers: { "Content-Type": "application/json" } }
		);
	} catch (err) {
		console.error(`${endpoint} error:`, err);
		return new Response(
			JSON.stringify({ success: false, error: err.message }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
});
