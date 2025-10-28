// Edge Function: SyncAll -> orchestrates all entity synchronization
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

// Define all entity types and their configurations
const ENTITY_CONFIGS = [
	{
		entityType: "suppliers",
		endpoint: "GetSupplier",
		table: "supplier",
		conflictColumn: "supplier_id",
	},
	{
		entityType: "categories",
		endpoint: "GetCategory",
		table: "category",
		conflictColumn: "category_id",
	},
	{
		entityType: "warehouses",
		endpoint: "GetWarehouse",
		table: "warehouse",
		conflictColumn: "warehouse_id",
	},
	{
		entityType: "orders",
		endpoint: "GetOrder",
		table: "orders",
		conflictColumn: "order_id",
	},
	{
		entityType: "items",
		endpoint: "GetItem",
		table: "item",
		conflictColumn: "parent_sku",
	},
	{
		entityType: "customers",
		endpoint: "GetCustomer",
		table: "customer",
		conflictColumn: "username",
	},
	{
		entityType: "payments",
		endpoint: "GetPayment",
		table: "payment",
		conflictColumn: "payment_id",
	},
	{
		entityType: "rmas",
		endpoint: "GetRma",
		table: "rma",
		conflictColumn: "rma_id",
	},
	{
		entityType: "vouchers",
		endpoint: "GetVoucher",
		table: "voucher",
		conflictColumn: "voucher_id",
	},
	{
		entityType: "contents",
		endpoint: "GetContent",
		table: "content",
		conflictColumn: "content_id",
	},
];

async function syncEntity(supabase: any, config: any) {
	const { entityType, endpoint, table, conflictColumn } = config;

	try {
		console.log(`[${entityType}] Starting sync process`);

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
		const records = response[endpoint.replace("Get", "")] || [];

		console.log(`[${entityType}] Received ${records.length} records`);

		let recordsInserted = 0;

		if (records.length > 0) {
			// Transform and upsert data
			const transformedData = transformData(endpoint, {
				[endpoint.replace("Get", "")]: records,
			});

			// Handle deduplication for specific entities
			let dataToInsert = transformedData;
			if (entityType === "suppliers") {
				dataToInsert = transformedData.filter(
					(row, index, self) =>
						index === self.findIndex((r) => r.supplier_id === row.supplier_id)
				);
			} else if (entityType === "items") {
				dataToInsert = Object.values(
					transformedData.reduce(
						(acc, r) => ({ ...acc, [r.parent_sku]: r }),
						{}
					)
				);
			} else if (entityType === "vouchers") {
				dataToInsert = transformedData.filter(
					(row, index, self) =>
						index === self.findIndex((r) => r.voucher_id === row.voucher_id)
				);
			}

			const { count } = await upsertData(
				supabase,
				table,
				conflictColumn,
				dataToInsert
			);
			recordsInserted = count || 0;

			console.log(`[${entityType}] Inserted ${recordsInserted} records`);
		}

		// Determine if there are more pages or dates to process
		const hasMorePages = records.length === syncParams.page_size;
		const hasMoreDatesFlag = !hasMorePages && hasMoreDates(syncParams);

		console.log(
			`[${entityType}] Has more pages: ${hasMorePages}, Has more dates: ${hasMoreDatesFlag}`
		);

		// Update sync progress
		await updateSyncProgress(
			supabase,
			entityType,
			records.length,
			recordsInserted,
			hasMorePages,
			hasMoreDatesFlag
		);

		return {
			success: true,
			entityType,
			strategy: syncParams.strategy,
			current_page: syncParams.page,
			page_size: syncParams.page_size,
			records_fetched: records.length,
			records_inserted: recordsInserted,
			has_more_pages: hasMorePages,
			has_more_dates: hasMoreDatesFlag,
			is_complete: !hasMorePages && !hasMoreDatesFlag,
			date_range:
				syncParams.date_from && syncParams.date_to
					? {
							from: syncParams.date_from,
							to: syncParams.date_to,
					  }
					: undefined,
		};
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

		return {
			success: false,
			entityType,
			error: error.message,
		};
	}
}

serve(async (req) => {
	const supabase = initSupabase();

	try {
		const url = new URL(req.url);
		const entityParam = url.searchParams.get("entity");
		const maxEntitiesParam = url.searchParams.get("max_entities");
		const maxEntities = maxEntitiesParam ? parseInt(maxEntitiesParam) : 3;

		console.log(
			`[SyncAll] Starting sync process - entity: ${entityParam}, max_entities: ${maxEntities}`
		);

		let entitiesToSync = ENTITY_CONFIGS;

		// Filter to specific entity if requested
		if (entityParam) {
			entitiesToSync = ENTITY_CONFIGS.filter(
				(config) => config.entityType === entityParam
			);
			if (entitiesToSync.length === 0) {
				throw new Error(`Unknown entity type: ${entityParam}`);
			}
		}

		// Limit number of entities to sync in one run
		entitiesToSync = entitiesToSync.slice(0, maxEntities);

		const results = [];
		let totalRecordsFetched = 0;
		let totalRecordsInserted = 0;

		// Sync entities sequentially to avoid overwhelming the API
		for (const config of entitiesToSync) {
			const result = await syncEntity(supabase, config);
			results.push(result);

			if (result.success) {
				totalRecordsFetched += result.records_fetched;
				totalRecordsInserted += result.records_inserted;
			}

			// Small delay between entity syncs to be respectful to API
			await new Promise((resolve) => setTimeout(resolve, 100));
		}

		const summary = {
			success: true,
			timestamp: new Date().toISOString(),
			entities_synced: results.length,
			total_records_fetched: totalRecordsFetched,
			total_records_inserted: totalRecordsInserted,
			results: results,
			has_more_work: results.some(
				(r) => r.success && (r.has_more_pages || r.has_more_dates)
			),
		};

		console.log(`[SyncAll] Completed sync process:`, summary);

		return new Response(JSON.stringify(summary), {
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error(`[SyncAll] Sync error:`, error);

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
