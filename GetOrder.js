// Edge Function: GetOrder -> upserts to 'orders' table
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import {
	initSupabase,
	callNetoAPI,
	transformData,
	upsertData,
} from "./utils.js";

const endpoint = "GetOrder";
const table = "orders";
const conflictColumn = "order_id";
const PAGE_SIZE = 1000;

const filterData = {
	Filter: {
		DatePlacedFrom: "2012-01-01 00:00:00",
		DatePlacedTo: new Date().toISOString().split("T")[0] + " 23:59:59",
		Page: 0,
		Limit: PAGE_SIZE,
		OutputSelector: [
			"OrderID",
			"Username",
			"GrandTotal",
			"OrderStatus",
			"DatePlaced",
			"LastUpdated",
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
			.eq("entity_type", "orders")
			.single();

		if (syncError) {
			throw new Error(`Failed to get sync state: ${syncError.message}`);
		}

		let page = syncState?.last_synced_page || 0;
		let totalInserted = 0;
		const orders = [];

		// Fetch one page of orders
		console.log(`Fetching orders page ${page} (limit ${PAGE_SIZE})`);
		const { Order = [] } = await callNetoAPI(endpoint, {
			Filter: { ...filterData.Filter, Page: page, Limit: PAGE_SIZE },
		});
		console.log(`Received ${Order.length} orders on page ${page}`);

		if (Order.length > 0) {
			const rows = transformData(endpoint, { Order });
			console.log(`Transform yielded ${rows.length} rows on page ${page}`);
			const { count } = await upsertData(supabase, table, conflictColumn, rows);
			console.log(`Upserted ${count ?? 0} orders on page ${page}`);
			totalInserted += count ?? 0;
			orders.push(...Order);

			// Update sync state
			const isComplete = Order.length < PAGE_SIZE;
			const { error: updateError } = await supabase
				.from("sync_state")
				.update({
					last_synced_page: page + 1,
					last_synced_date: new Date().toISOString(),
					is_complete: isComplete,
					total_records: (syncState?.total_records || 0) + Order.length,
				})
				.eq("entity_type", "orders");

			if (updateError) {
				throw new Error(`Failed to update sync state: ${updateError.message}`);
			}
		}

		return new Response(
			JSON.stringify({
				success: true,
				inserted: totalInserted,
				current_page: page,
				has_more: Order.length === PAGE_SIZE,
				is_complete: Order.length < PAGE_SIZE,
				orders_fetched: orders.length,
			}),
			{ headers: { "Content-Type": "application/json" } }
		);
	} catch (err) {
		return new Response(
			JSON.stringify({ success: false, error: err.message }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
});
