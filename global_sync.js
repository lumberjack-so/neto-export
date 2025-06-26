// Edge Function: SyncAll -> triggers all Neto endpoint functions sequentially
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// List of all edge functions to sync
const EDGE_FUNCTIONS = [
	"GetSupplier",
	"GetItem",
	"GetCustomer",
	"GetOrder",
	"GetPayment",
	"GetRma",
	"GetVoucher",
	"GetCategory",
	"GetContent",
	"GetWarehouse",
];

serve(async () => {
	console.log("🚀 Starting global sync process...");

	const results = [];
	const startTime = Date.now();

	try {
		// Call all edge functions in parallel
		const promises = EDGE_FUNCTIONS.map(async (functionName) => {
			const url = `${Deno.env.get(
				"SUPABASE_URL"
			)}/functions/v1/${functionName}`;

			console.log(`📡 Calling ${functionName}...`);

			try {
				const response = await fetch(url, {
					method: "POST",
					headers: {
						Authorization: `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`,
						"Content-Type": "application/json",
					},
				});

				const data = await response.json();

				return {
					function: functionName,
					success: true,
					...data,
				};
			} catch (error) {
				console.error(`❌ Error calling ${functionName}:`, error);
				return {
					function: functionName,
					success: false,
					error: error.message,
				};
			}
		});

		// Wait for all functions to complete
		const syncResults = await Promise.all(promises);
		results.push(...syncResults);

		const endTime = Date.now();
		const totalTime = (endTime - startTime) / 1000;

		// Calculate summary stats
		const successful = results.filter((r) => r.success).length;
		const failed = results.filter((r) => !r.success).length;
		const totalRecords = results
			.filter((r) => r.success && r.records_synced)
			.reduce((sum, r) => sum + r.records_synced, 0);

		console.log(`✅ Global sync completed in ${totalTime}s`);
		console.log(
			`📊 Summary: ${successful} successful, ${failed} failed, ${totalRecords} total records`
		);

		return new Response(
			JSON.stringify({
				success: true,
				summary: {
					total_functions: EDGE_FUNCTIONS.length,
					successful,
					failed,
					total_records: totalRecords,
					execution_time_seconds: totalTime,
				},
				results,
			}),
			{
				headers: { "Content-Type": "application/json" },
			}
		);
	} catch (error) {
		console.error("❌ Global sync failed:", error);

		return new Response(
			JSON.stringify({
				success: false,
				error: error.message,
				results,
			}),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
});
