// Edge Function: GetCustomer -> upserts to 'customer' table
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { initSupabase, callNetoAPI, transformData } from "./utils.js";

const endpoint = "GetCustomer";
const table = "customer";
const conflictColumn = "username";
const PAGE_SIZE = 500;

const baseFilter = {
	DateAddedFrom: "2012-01-01 00:00:00",
	DateAddedTo: new Date().toISOString().split("T")[0] + " 23:59:59",
	Limit: PAGE_SIZE,
	OutputSelector: [
		"Username",
		"ID",
		"EmailAddress",
		"Active",
		"DateAdded",
		"DateUpdated",
	],
};

serve(async () => {
	const supabase = initSupabase();

	try {
		// Get current sync state
		const { data: syncState, error: syncError } = await supabase
			.from("sync_state")
			.select("*")
			.eq("entity_type", "customers")
			.single();

		if (syncError) {
			throw new Error(`Failed to get sync state: ${syncError.message}`);
		}

		let page = syncState?.last_synced_page || 0;
		let totalInserted = 0;
		const customers = [];

		// Fetch one page of customers
		console.log(`Fetching customers page ${page} (limit ${PAGE_SIZE})`);
		const payload = { Filter: { ...baseFilter, Page: page } };
		const { Customer = [] } = await callNetoAPI(endpoint, payload);
		console.log(`Received ${Customer.length} customers on page ${page}`);

		if (Customer.length > 0) {
			const rows = transformData(endpoint, { Customer });
			console.log(`Transform yielded ${rows.length} rows on page ${page}`);

			const { error, count } = await supabase
				.from(table)
				.upsert(rows, { onConflict: conflictColumn });

			if (error) throw error;
			console.log(`Upserted ${count ?? 0} customers on page ${page}`);
			totalInserted += count ?? 0;
			customers.push(...Customer);

			// Update sync state
			const isComplete = Customer.length < PAGE_SIZE;
			const { error: updateError } = await supabase
				.from("sync_state")
				.update({
					last_synced_page: page + 1,
					last_synced_date: new Date().toISOString(),
					is_complete: isComplete,
					total_records: (syncState?.total_records || 0) + Customer.length,
				})
				.eq("entity_type", "customers");

			if (updateError) {
				throw new Error(`Failed to update sync state: ${updateError.message}`);
			}
		}

		return new Response(
			JSON.stringify({
				success: true,
				inserted: totalInserted,
				current_page: page,
				has_more: Customer.length === PAGE_SIZE,
				is_complete: Customer.length < PAGE_SIZE,
				customers_fetched: customers.length,
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
