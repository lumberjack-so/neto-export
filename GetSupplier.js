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

const filterData = {
	Filter: {
		Limit: 10000,
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

	const apiKey = Deno.env.get("NETO_API_KEY");
	console.log("NETO_API_KEY is set:", !!apiKey);
	console.log("NETO_API_KEY length:", apiKey ? apiKey.length : 0);

	if (!apiKey) {
		return new Response(
			JSON.stringify({
				success: false,
				error: "NETO_API_KEY environment variable is not set",
				hint: "Set it in Supabase Dashboard > Settings > Edge Functions > Secrets",
			}),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}

	try {
		// Check if supplier table exists
		const { error: tableCheckError } = await supabase
			.from("supplier")
			.select("supplier_id")
			.limit(1);

		if (tableCheckError && tableCheckError.code === "42P01") {
			// Table doesn't exist
			return new Response(
				JSON.stringify({
					success: false,
					error:
						"Supplier table does not exist. Please create it first by running the SQL script in sql/create_supplier_table.sql",
					hint: "Go to Supabase Dashboard > SQL Editor and run the create table script",
				}),
				{ status: 500, headers: { "Content-Type": "application/json" } }
			);
		}

		const PAGE_SIZE = 1000;
		let page = 1;
		let totalInserted = 0;

		// Note: GetSupplier API doesn't support Page parameter properly
		// We'll fetch all suppliers in one request
		console.log("Fetching all suppliers...");
		console.log("Request payload:", JSON.stringify(filterData));

		const response = await callNetoAPI(endpoint, filterData);

		console.log(
			"Raw API response:",
			JSON.stringify(response).substring(0, 500)
		);
		console.log("Response type:", typeof response);
		console.log("Response has Supplier?", "Supplier" in response);
		console.log("Supplier type:", typeof response.Supplier);
		console.log("Supplier is array?", Array.isArray(response.Supplier));

		const { Supplier = [] } = response;

		// Handle case where Supplier might be an empty string
		let suppliers = [];
		if (Array.isArray(Supplier)) {
			suppliers = Supplier;
		} else if (Supplier === "" || !Supplier) {
			console.log("Supplier is empty string or falsy, no suppliers found");
			suppliers = [];
		} else {
			console.log("Unexpected Supplier format:", Supplier);
			suppliers = [];
		}

		console.log(`Found ${suppliers.length} suppliers total`);

		if (suppliers.length === 0) {
			console.log("No suppliers found");
			return new Response(
				JSON.stringify({
					success: true,
					inserted: 0,
					message: "No suppliers found in Neto",
				}),
				{ headers: { "Content-Type": "application/json" } }
			);
		}

		// Log first supplier as sample
		if (suppliers.length > 0) {
			console.log("Sample supplier:", JSON.stringify(suppliers[0]));
		}

		// Transform data
		const rows = transformData(endpoint, { Supplier: suppliers });
		console.log(`Transformed ${rows.length} rows`);

		// Deduplicate on supplier_id
		const unique = rows.filter(
			(row, index, self) =>
				index === self.findIndex((r) => r.supplier_id === row.supplier_id)
		);
		console.log("all unique suppliers rows-->>>>: ", unique);
		console.log(`After deduplication: ${unique.length} unique rows`);

		// Upsert to database
		const { count } = await upsertData(supabase, table, conflictColumn, unique);
		totalInserted = count || 0;

		console.log(
			`Processed ${suppliers.length} suppliers, inserted ${totalInserted}`
		);

		return new Response(
			JSON.stringify({ success: true, inserted: totalInserted }),
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
