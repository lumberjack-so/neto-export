// Edge Function: GetWarehouse -> upserts to 'warehouse' table
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { syncEntitySince } from "./utils.js";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const supabase = createClient(supabaseUrl, supabaseKey);

const entityType = "warehouses";
const endpoint = "GetWarehouse";
const table = "warehouse";
const conflictColumn = "warehouse_id";

const outputSelector = [
	"WarehouseID",
	"IsPrimary",
	"IsActive",
	"ShowQuantity",
	"WarehouseReference",
	"WarehouseName",
	"WarehouseStreet1",
	"WarehouseStreet2",
	"WarehouseCity",
	"WarehouseState",
	"WarehousePostcode",
	"WarehouseCountry",
	"WarehouseContact",
	"WarehousePhone",
	"WarehouseNotes",
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
	return new Response(JSON.stringify(result));
});
