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

const filterOptions = {
	Limit: 1000,
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
		const PAGE_SIZE = 1000;
		let page = 0;
		let totalInserted = 0;
		const warehouses = [];

		while (true) {
			const { Warehouse = [] } = await callNetoAPI(endpoint, {
				Filter: { ...filterOptions, Page: page, Limit: PAGE_SIZE },
			});
			warehouses.push(...Warehouse);
			if (Warehouse.length === 0) break;

			const rows = transformData(endpoint, { Warehouse });
			const { count } = await upsertData(supabase, table, conflictColumn, rows);
			totalInserted += count ?? 0;

			if (Warehouse.length < PAGE_SIZE) break;
			page++;
		}

		console.log("all warehouses fetched-->>>>: ", warehouses);
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
