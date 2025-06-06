// Edge Function: GetSupplier -> upserts to 'supplier' table
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import {
	initSupabase,
	callNetoAPI,
	transformData,
	upsertData,
} from "./utils.js";

const endpoint = "GetSupplier";
const table = "supplier";
const conflictColumn = "supplier_id";
const PAGE_SIZE = 1000;

const filterData = {
	Filter: {
		Limit: PAGE_SIZE,
		OutputSelector: [
			"ID",
			"SupplierID",
			"SupplierReference",
			"LeadTime1",
			"LeadTime2",
			"SupplierCompany",
			"SupplierStreet1",
			"SupplierStreet2",
			"SupplierCity",
			"SupplierState",
			"SupplierPostcode",
			"SupplierCountry",
			"SupplierEmail",
			"SupplierPhone",
			"SupplierFax",
			"SupplierURL",
			"ExportTemplate",
			"SupplierCurrencyCode",
			"AccountCode",
			"FactoryStreet1",
			"FactoryStreet2",
			"FactoryCity",
			"FactoryState",
			"FactoryPostcode",
			"FactoryCountry",
			"SupplierNotes",
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
			.eq("entity_type", "suppliers")
			.single();

		if (syncError) {
			throw new Error(`Failed to get sync state: ${syncError.message}`);
		}

		let page = syncState?.last_synced_page || 0;
		let totalInserted = 0;
		const suppliers = [];

		// Fetch one page of suppliers
		console.log(`Fetching suppliers page ${page} (limit ${PAGE_SIZE})`);
		const { Supplier = [] } = await callNetoAPI(endpoint, {
			Filter: { ...filterData.Filter, Page: page, Limit: PAGE_SIZE },
		});
		console.log(`Received ${Supplier.length} suppliers on page ${page}`);

		if (Supplier.length > 0) {
			const rows = transformData(endpoint, { Supplier });
			console.log(`Transform yielded ${rows.length} rows on page ${page}`);

			// Deduplicate on supplier_id
			const unique = rows.filter(
				(row, index, self) =>
					index === self.findIndex((r) => r.supplier_id === row.supplier_id)
			);

			const { count } = await upsertData(
				supabase,
				table,
				conflictColumn,
				unique
			);
			console.log(`Upserted ${count ?? 0} suppliers on page ${page}`);
			totalInserted += count ?? 0;
			suppliers.push(...Supplier);

			// Update sync state
			const isComplete = Supplier.length < PAGE_SIZE;
			const { error: updateError } = await supabase
				.from("sync_state")
				.update({
					last_synced_page: page + 1,
					last_synced_date: new Date().toISOString(),
					is_complete: isComplete,
					total_records: (syncState?.total_records || 0) + Supplier.length,
				})
				.eq("entity_type", "suppliers");

			if (updateError) {
				throw new Error(`Failed to update sync state: ${updateError.message}`);
			}
		}

		return new Response(
			JSON.stringify({
				success: true,
				inserted: totalInserted,
				current_page: page,
				has_more: Supplier.length === PAGE_SIZE,
				is_complete: Supplier.length < PAGE_SIZE,
				suppliers_fetched: suppliers.length,
			}),
			{ headers: { "Content-Type": "application/json" } }
		);
	} catch (error) {
		console.error(`${endpoint} error:`, error);
		return new Response(
			JSON.stringify({ success: false, error: error.message }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
});
