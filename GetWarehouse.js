// Edge Function: GetWarehouse -> upserts to 'warehouse' table
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import {
	initSupabase,
	callNetoAPI,
	transformData,
	upsertData,
} from "./utils.js";

const endpoint = "GetWarehouse";
const table = "warehouse";
const conflictColumn = "warehouse_id";
const PAGE_SIZE = 1000;

const filterOptions = {
	Limit: PAGE_SIZE,
	OutputSelector: [
		"WarehouseID",
		"WarehouseName",
		"DefaultWarehouse",
		"City",
		"State",
		"Country",
	],
};

serve(async () => {
	const supabase = initSupabase();
	try {
		// Get current sync state
		const { data: syncState, error: syncError } = await supabase
			.from("sync_state")
			.select("*")
			.eq("entity_type", "warehouses")
			.single();

		if (syncError) {
			throw new Error(`Failed to get sync state: ${syncError.message}`);
		}

		let page = syncState?.last_synced_page || 0;
		let totalInserted = 0;
		const warehouses = [];

		// Fetch one page of warehouses
		console.log(`Fetching warehouses page ${page} (limit ${PAGE_SIZE})`);
		const { Warehouse = [] } = await callNetoAPI(endpoint, {
			Filter: { ...filterOptions, Page: page, Limit: PAGE_SIZE },
		});
		console.log(`Received ${Warehouse.length} warehouses on page ${page}`);

		if (Warehouse.length > 0) {
			const rows = transformData(endpoint, { Warehouse });
			console.log(`Transform yielded ${rows.length} rows on page ${page}`);

			const { count } = await upsertData(supabase, table, conflictColumn, rows);
			console.log(`Upserted ${count ?? 0} warehouses on page ${page}`);
			totalInserted += count ?? 0;
			warehouses.push(...Warehouse);

			// Update sync state
			const isComplete = Warehouse.length < PAGE_SIZE;
			const { error: updateError } = await supabase
				.from("sync_state")
				.update({
					last_synced_page: page + 1,
					last_synced_date: new Date().toISOString(),
					is_complete: isComplete,
					total_records: (syncState?.total_records || 0) + Warehouse.length,
				})
				.eq("entity_type", "warehouses");

			if (updateError) {
				throw new Error(`Failed to update sync state: ${updateError.message}`);
			}
		}

		return new Response(
			JSON.stringify({
				success: true,
				inserted: totalInserted,
				current_page: page,
				has_more: Warehouse.length === PAGE_SIZE,
				is_complete: Warehouse.length < PAGE_SIZE,
				warehouses_fetched: warehouses.length,
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
