// Edge Function: GetCategory -> upserts to 'category' table
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { syncEntitySince } from "./utils.js";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const supabase = createClient(supabaseUrl, supabaseKey);

const entityType = "categories";
const endpoint = "GetCategory";
const table = "category";
const conflictColumn = "category_id";

const outputSelector = [
	"CategoryID",
	"CategoryName",
	"ParentCategoryID",
	"DatePosted",
	"DateUpdated",
];

serve(async () => {
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
});
