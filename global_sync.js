// Edge Function: SyncAll -> triggers all Neto endpoint functions sequentially
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Get environment variables
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const FUNCTIONS_URL = `${SUPABASE_URL}/functions/v1`;

// List of functions with their entity types
const functions = [
	{ slug: "GetItem", entity_type: "items" },
	{ slug: "GetCustomer", entity_type: "customers" },
	{ slug: "GetOrder", entity_type: "orders" },
	{ slug: "GetPayment", entity_type: "payments" },
	{ slug: "GetWarehouse", entity_type: "warehouses" },
	{ slug: "GetRma", entity_type: "rmas" },
	{ slug: "GetContent", entity_type: "contents" },
	{ slug: "GetCategory", entity_type: "categories" },
	{ slug: "GetVoucher", entity_type: "vouchers" },
	{ slug: "GetSupplier", entity_type: "suppliers" },
];

async function triggerFunction(fn) {
	console.log(`Starting sync for ${fn.slug}...`);

	try {
		const res = await fetch(`${FUNCTIONS_URL}/${fn.slug}`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${SERVICE_KEY}`,
				"Content-Type": "application/json",
			},
		});

		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		const result = await res.json().catch(() => ({}));
		console.log(`[${fn.slug}] Result:`, result);

		if (!result.success) {
			throw new Error(`Failed to sync ${fn.slug}: ${result.error}`);
		}

		return result;
	} catch (error) {
		console.error(`Error syncing ${fn.slug}:`, error);
		throw error;
	}
}

serve(async (req) => {
	try {
		// Get the entity type from query params
		const url = new URL(req.url);
		const entityType = url.searchParams.get("entity_type");

		if (entityType) {
			// Sync single entity
			const fn = functions.find((f) => f.entity_type === entityType);
			if (!fn) {
				throw new Error(`Invalid entity type: ${entityType}`);
			}

			const result = await triggerFunction(fn);

			return new Response(
				JSON.stringify({
					success: true,
					result,
					timestamp: new Date().toISOString(),
				}),
				{ headers: { "Content-Type": "application/json" } }
			);
		} else {
			// Sync all entities (one page each)
			const results = {};
			const errors = {};

			for (const fn of functions) {
				try {
					results[fn.slug] = await triggerFunction(fn);
				} catch (error) {
					console.error(`Failed to sync ${fn.slug}:`, error);
					errors[fn.slug] = error.message;
				}
			}

			return new Response(
				JSON.stringify({
					success: true,
					results,
					errors: Object.keys(errors).length > 0 ? errors : undefined,
					timestamp: new Date().toISOString(),
				}),
				{ headers: { "Content-Type": "application/json" } }
			);
		}
	} catch (error) {
		console.error("SyncAll error:", error);
		return new Response(
			JSON.stringify({
				success: false,
				error: error.message,
				timestamp: new Date().toISOString(),
			}),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
});
