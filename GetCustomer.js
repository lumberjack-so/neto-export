// Edge Function: GetCustomer -> upserts to 'customer' table
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { initSupabase, syncEntitySince } from "./utils.js";

const endpoint = "GetCustomer";
const table = "customer";
const conflictColumn = "username";
const entityType = "customers";

const outputSelector = [
	"Username",
	"ID",
	"EmailAddress",
	"Active",
	"DateAdded",
	"DateUpdated",
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
	} catch (err) {
		console.error(`${endpoint} error:`, err);
		return new Response(
			JSON.stringify({ success: false, error: err.message }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
});
