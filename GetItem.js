// Edge Function: GetItem -> upserts to 'item' table
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import {
	initSupabase,
	callNetoAPI,
	transformData,
	upsertData,
} from "./utils.js";

const endpoint = "GetItem";
const table = "item";
const conflictColumn = "parent_sku";
const PAGE_SIZE = 1000;

const filterData = {
	Filter: {
		DateAddedFrom: "2012-01-01 00:00:00",
		DateAddedTo: new Date().toISOString().split("T")[0] + " 23:59:59",
		DateUpdatedFrom: "2012-01-01 00:00:00",
		DateUpdatedTo: new Date().toISOString().split("T")[0] + " 23:59:59",
		Page: 0,
		Limit: PAGE_SIZE,
		OutputSelector: [
			"ParentSKU",
			"ID",
			"Brand",
			"Model",
			"Name",
			"IsActive",
			"DateAdded",
			"DateUpdated",
		],
	},
};

serve(async () => {
	const supabase = initSupabase();
	try {
		// Get current sync state
		const { data: syncState, error: syncError } = await supabase
			.from("sync_state")
			.select("*")
			.eq("entity_type", "items")
			.single();

		if (syncError) {
			throw new Error(`Failed to get sync state: ${syncError.message}`);
		}

		let page = syncState?.last_synced_page || 0;
		let totalInserted = 0;
		const items = [];

		// Fetch one page of items
		console.log(`Fetching items page ${page} (limit ${PAGE_SIZE})`);
		const { Item = [] } = await callNetoAPI(endpoint, {
			Filter: { ...filterData.Filter, Page: page, Limit: PAGE_SIZE },
		});
		console.log(`Received ${Item.length} items on page ${page}`);

		if (Item.length > 0) {
			const rowsRaw = transformData(endpoint, { Item });
			console.log(`Transform yielded ${rowsRaw.length} rows on page ${page}`);

			// Deduplicate items by parent_sku
			const unique = Object.values(
				rowsRaw.reduce((acc, r) => ({ ...acc, [r.parent_sku]: r }), {})
			);
			console.log(`After deduplication: ${unique.length} unique items`);

			const { error, count } = await supabase
				.from(table)
				.upsert(unique, { onConflict: conflictColumn });

			if (error) throw error;
			console.log(`Upserted ${count ?? 0} items on page ${page}`);
			totalInserted += count ?? 0;
			items.push(...Item);

			// Update sync state
			const isComplete = Item.length < PAGE_SIZE;
			const { error: updateError } = await supabase
				.from("sync_state")
				.update({
					last_synced_page: page + 1,
					last_synced_date: new Date().toISOString(),
					is_complete: isComplete,
					total_records: (syncState?.total_records || 0) + Item.length,
				})
				.eq("entity_type", "items");

			if (updateError) {
				throw new Error(`Failed to update sync state: ${updateError.message}`);
			}
		}

		return new Response(
			JSON.stringify({
				success: true,
				inserted: totalInserted,
				current_page: page,
				has_more: Item.length === PAGE_SIZE,
				is_complete: Item.length < PAGE_SIZE,
				items_fetched: items.length,
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
