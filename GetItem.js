// Edge Function: GetItem -> upserts to 'item' table
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { initSupabase, syncEntitySince } from "./utils.js";

const endpoint = "GetItem";
const table = "item";
const conflictColumn = "parent_sku";
const entityType = "items";

const outputSelector = [
	"ParentSKU",
	"ID",
	"Brand",
	"Model",
	"Name",
	"IsActive",
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
