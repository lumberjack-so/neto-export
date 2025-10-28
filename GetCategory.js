// Edge Function: GetCategory -> upserts to 'category' table
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import {
	initSupabase,
	getNextSyncParams,
	updateSyncProgress,
	buildApiFilter,
	callNetoAPI,
	transformData,
	upsertData,
	hasMoreDates,
} from "./sync_utils.js";

const endpoint = "GetCategory";
const table = "category";
const conflictColumn = "category_id";
const entityType = "categories";

serve(async () => {
	const supabase = initSupabase();

	try {
		console.log(`[${entityType}] Starting flexible sync process`);

		// Get next sync parameters based on current state
		const syncParams = await getNextSyncParams(supabase, entityType);
		console.log(`[${entityType}] Sync parameters:`, syncParams);

		// Build API filter based on sync strategy
		const filterData = buildApiFilter(syncParams, endpoint);
		console.log(
			`[${entityType}] API filter:`,
			JSON.stringify(filterData, null, 2)
		);

		// Call API
		const response = await callNetoAPI(endpoint, filterData);
		const categories = response.Category || [];

		console.log(`[${entityType}] Received ${categories.length} records`);

		let recordsInserted = 0;

		if (categories.length > 0) {
			// Transform and upsert data
			const transformedData = transformData(endpoint, { Category: categories });
			const { count } = await upsertData(
				supabase,
				table,
				conflictColumn,
				transformedData
			);
			recordsInserted = count || 0;

			console.log(`[${entityType}] Inserted ${recordsInserted} records`);
		}

		// Determine if there are more pages or dates to process
		const hasMorePages = categories.length === syncParams.page_size;
		const hasMoreDatesFlag = !hasMorePages && hasMoreDates(syncParams);

		console.log(
			`[${entityType}] Has more pages: ${hasMorePages}, Has more dates: ${hasMoreDatesFlag}`
		);

		// Update sync progress
		await updateSyncProgress(
			supabase,
			entityType,
			categories.length,
			recordsInserted,
			hasMorePages,
			hasMoreDatesFlag
		);

		// Prepare response
		const response_data = {
			success: true,
			strategy: syncParams.strategy,
			current_page: syncParams.page,
			page_size: syncParams.page_size,
			records_fetched: categories.length,
			records_inserted: recordsInserted,
			has_more_pages: hasMorePages,
			has_more_dates: hasMoreDatesFlag,
			is_complete: !hasMorePages && !hasMoreDatesFlag,
			timestamp: new Date().toISOString(),
		};

		// Add date range info if applicable
		if (syncParams.date_from && syncParams.date_to) {
			response_data.date_range = {
				from: syncParams.date_from,
				to: syncParams.date_to,
			};
		}

		console.log(`[${entityType}] Sync completed successfully`);

		return new Response(JSON.stringify(response_data), {
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error(`[${entityType}] Sync error:`, error);

		// Update sync state with error
		try {
			await updateSyncProgress(
				supabase,
				entityType,
				0,
				0,
				false,
				false,
				error.message
			);
		} catch (updateError) {
			console.error(
				`[${entityType}] Failed to update error state:`,
				updateError
			);
		}

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
