// Edge Function: GetSupplier -> upserts to 'supplier' table
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { initSupabase, syncEntitySince } from "./utils.js";

const endpoint = "GetSupplier";
const table = "supplier";
const conflictColumn = "supplier_id";
const entityType = "suppliers";

const outputSelector = [
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
];

serve(async () => {
	const supabase = initSupabase();

	try {
		const result = await syncEntitySince(
			supabase,
			entityType,
			endpoint,
			table,
			conflictColumn,
			outputSelector
		);

		return new Response(JSON.stringify(result), {
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error(`${endpoint} error:`, error);
		return new Response(
			JSON.stringify({ success: false, error: error.message }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
});
