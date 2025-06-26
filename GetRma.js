// Edge Function: GetRma -> upserts to 'rma' table
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { syncEntitySince } from "./utils.js";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const supabase = createClient(supabaseUrl, supabaseKey);

const entityType = "rmas";
const endpoint = "GetRma";
const table = "rma";
const conflictColumn = "rma_id";

const outputSelector = ["RmaID", "RmaStatus", "DateIssued", "OrderID"];

serve(async () => {
	const result = await syncEntitySince(
		supabase,
		entityType,
		endpoint,
		table,
		conflictColumn,
		outputSelector
	);

	return new Response(JSON.stringify(result));
});
