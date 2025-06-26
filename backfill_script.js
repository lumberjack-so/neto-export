import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://adyupvqosuekexchqgqt.supabase.co";
const SUPABASE_SERVICE_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkeXVwdnFvc3Vla2V4Y2hxZ3F0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzM3MjQ5MiwiZXhwIjoyMDYyOTQ4NDkyfQ.Dak8H65v37MhZdEnpD1PhLQtu4lF_qDxjjqUyAcKwtY";
const NETO_API_KEY = "ihU9BbJ2uoZXAhKYCnnyeEuAMXb9Jdir";
const NETO_API_URL = "https://timberbits.com/do/WS/NetoAPI";
// const SUPABASE_URL = process.env.SUPABASE_URL;
// const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
// const NETO_API_KEY = process.env.NETO_API_KEY;
// const NETO_API_URL = process.env.NETO_API_URL;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY || !NETO_API_KEY) {
	console.error("❌ Missing required environment variables:");
	console.error("   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, NETO_API_KEY");
	process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// Node.js compatible utility functions
async function callNetoAPI(action, filterData) {
	console.log(`Calling Neto API: ${action}`);

	const response = await fetch(NETO_API_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			NETOAPI_KEY: NETO_API_KEY,
			NETOAPI_ACTION: action,
			Accept: "application/json",
		},
		body: JSON.stringify(filterData),
	});

	if (!response.ok) {
		const text = await response.text();
		throw new Error(`API call failed (${response.status}): ${text}`);
	}

	return await response.json();
}

function transformData(endpoint, data) {
	console.log(`[${endpoint}] Starting data transformation`);

	switch (endpoint) {
		case "GetItem":
			return (
				data.Item?.map((item) => ({
					parent_sku: item.ParentSKU,
					item_id: item.ID,
					brand: item.Brand,
					model: item.Model,
					virtual: item.Virtual === "True",
					name: item.Name,
					primary_supplier: item.PrimarySupplier,
					approved: item.Approved === "True",
					is_active: item.IsActive === "True",
					price_groups: item.PriceGroups
						? JSON.stringify(item.PriceGroups)
						: null,
					date_added: item.DateAdded,
					date_updated: item.DateUpdated,
				})) || []
			);

		case "GetCustomer":
			return (
				data.Customer?.map((c) => ({
					username: c.Username,
					customer_id: c.ID,
					type: c.Type,
					email_address: c.EmailAddress,
					active: c.Active === "True",
					date_added: c.DateAdded,
					date_updated: c.DateUpdated,
				})) || []
			);

		case "GetOrder":
			return (
				data.Order?.map((o) => ({
					order_id: o.OrderID,
					username: o.Username,
					order_total: o.GrandTotal,
					order_status: o.OrderStatus,
					order_date: o.DatePlaced,
					last_updated: o.LastUpdated,
				})) || []
			);

		case "GetPayment":
			return (
				data.Payment?.map((p) => ({
					payment_id: p.ID,
					payment_amount: p.AmountPaid,
					payment_method: p.PaymentMethod,
					date_payment: p.DatePaid,
				})) || []
			);

		case "GetWarehouse":
			return (
				data.Warehouse?.map((w) => ({
					warehouse_id: w.WarehouseID,
					warehouse_name: w.WarehouseName,
					is_default: w.DefaultWarehouse === "True",
					city: w.City,
					state: w.State,
					country: w.Country,
				})) || []
			);

		case "GetRma":
			return (
				data.Rma?.map((r) => ({
					rma_id: r.RmaID,
					rma_status: r.RmaStatus,
					rma_date: r.DateIssued,
					order_id: r.OrderID,
				})) || []
			);

		case "GetContent": {
			const normalizeDate = (str) => {
				if (!str || str === "0000-00-00 00:00:00") return null;
				return str;
			};
			return (
				data.Content?.map((c) => ({
					content_id: c.ContentID,
					content_name: c.ContentName,
					content_type: c.ContentType,
					date_added: normalizeDate(c.DatePosted),
					date_updated: normalizeDate(c.DateUpdated),
				})) || []
			);
		}

		case "GetCategory": {
			const normalizeDate = (str) => {
				if (!str || str === "0000-00-00 00:00:00") return null;
				return str;
			};
			return (
				data.Category?.map((cat) => ({
					category_id: cat.CategoryID,
					category_name: cat.CategoryName,
					parent_category_id: cat.ParentCategoryID,
					date_added: normalizeDate(cat.DatePosted),
					date_updated: normalizeDate(cat.DateUpdated),
				})) || []
			);
		}

		case "GetVoucher":
			if (!data?.Voucher) return [];
			const vouchers = Array.isArray(data.Voucher)
				? data.Voucher
				: [data.Voucher];
			return vouchers.map((v) => ({
				voucher_id: v.VoucherID,
				voucher_code: v.VoucherCode,
				balance: v.Balance,
				date_added: v.DateAdded,
			}));

		case "GetSupplier":
			return (
				data.Supplier?.map((s) => {
					const nullIfEmpty = (val) => (val === "" ? null : val);

					return {
						id: nullIfEmpty(s.ID),
						supplier_id: nullIfEmpty(s.SupplierID),
						supplier_reference: s.SupplierReference
							? parseInt(s.SupplierReference)
							: null,
						lead_time_1: s.LeadTime1 ? parseInt(s.LeadTime1) : null,
						lead_time_2: s.LeadTime2 ? parseInt(s.LeadTime2) : null,
						supplier_name: nullIfEmpty(s.SupplierCompany),
						contact_street1: nullIfEmpty(s.SupplierStreet1),
						contact_street2: nullIfEmpty(s.SupplierStreet2),
						contact_city: nullIfEmpty(s.SupplierCity),
						contact_state: nullIfEmpty(s.SupplierState),
						contact_postcode: nullIfEmpty(s.SupplierPostcode),
						contact_country: nullIfEmpty(s.SupplierCountry),
						email: nullIfEmpty(s.SupplierEmail),
						phone: nullIfEmpty(s.SupplierPhone),
						fax: nullIfEmpty(s.SupplierFax),
						website: nullIfEmpty(s.SupplierURL),
						export_template: nullIfEmpty(s.ExportTemplate),
						currency_code: nullIfEmpty(s.SupplierCurrencyCode),
						account_code: nullIfEmpty(s.AccountCode),
						factory_street1: nullIfEmpty(s.FactoryStreet1),
						factory_street2: nullIfEmpty(s.FactoryStreet2),
						factory_city: nullIfEmpty(s.FactoryCity),
						factory_state: nullIfEmpty(s.FactoryState),
						factory_postcode: nullIfEmpty(s.FactoryPostcode),
						factory_country: nullIfEmpty(s.FactoryCountry),
						notes: nullIfEmpty(s.SupplierNotes),
						date_added: s.DateAdded || null,
						date_updated: s.DateUpdated || null,
					};
				}) || []
			);

		default:
			return [];
	}
}

async function upsertData(supabase, table, conflictColumn, rows) {
	console.log(`[${table}] Upserting ${rows.length} rows`);

	if (!rows.length) {
		return { count: 0 };
	}

	const { error, count } = await supabase
		.from(table)
		.upsert(rows, { onConflict: conflictColumn })
		.select("*", { count: "exact" });

	if (error) {
		console.error(`[${table}] Upsert error:`, error);
		throw error;
	}

	return { count };
}

const ENTITIES = [
	{
		name: "suppliers",
		endpoint: "GetSupplier",
		table: "supplier",
		conflictColumn: "supplier_id",
		outputSelector: [
			"ID",
			"SupplierID",
			"SupplierReference",
			"SupplierCompany",
			"SupplierEmail",
			"DateAdded",
			"DateUpdated",
		],
	},
	{
		name: "items",
		endpoint: "GetItem",
		table: "item",
		conflictColumn: "parent_sku",
		outputSelector: [
			"ID",
			"ParentSKU",
			"Brand",
			"Model",
			"Name",
			"PrimarySupplier",
			"DateAdded",
			"DateUpdated",
		],
	},
	{
		name: "customers",
		endpoint: "GetCustomer",
		table: "customer",
		conflictColumn: "username",
		outputSelector: [
			"ID",
			"Username",
			"Type",
			"EmailAddress",
			"Active",
			"DateAdded",
			"DateUpdated",
		],
	},
	{
		name: "orders",
		endpoint: "GetOrder",
		table: "orders",
		conflictColumn: "order_id",
		outputSelector: [
			"OrderID",
			"Username",
			"GrandTotal",
			"OrderStatus",
			"DatePlaced",
			"LastUpdated",
		],
	},
	{
		name: "payments",
		endpoint: "GetPayment",
		table: "payment",
		conflictColumn: "payment_id",
		outputSelector: ["ID", "AmountPaid", "PaymentMethod", "DatePaid"],
	},
	{
		name: "rmas",
		endpoint: "GetRma",
		table: "rma",
		conflictColumn: "rma_id",
		outputSelector: ["RmaID", "RmaStatus", "DateIssued", "OrderID"],
	},
	{
		name: "vouchers",
		endpoint: "GetVoucher",
		table: "voucher",
		conflictColumn: "voucher_id",
		outputSelector: ["VoucherID", "VoucherCode", "Balance", "DateAdded"],
	},
	{
		name: "categories",
		endpoint: "GetCategory",
		table: "category",
		conflictColumn: "category_id",
		outputSelector: [
			"CategoryID",
			"CategoryName",
			"ParentCategoryID",
			"DatePosted",
			"DateUpdated",
		],
	},
	{
		name: "contents",
		endpoint: "GetContent",
		table: "content",
		conflictColumn: "content_id",
		outputSelector: [
			"ContentID",
			"ContentName",
			"ContentType",
			"DatePosted",
			"DateUpdated",
		],
	},
	{
		name: "warehouses",
		endpoint: "GetWarehouse",
		table: "warehouse",
		conflictColumn: "warehouse_id",
		outputSelector: [
			"WarehouseID",
			"WarehouseName",
			"DefaultWarehouse",
			"City",
			"State",
			"Country",
		],
	},
];

async function setupBackfillMode() {
	console.log("🔄 Setting up historical backfill mode...");

	const { error } = await supabase.from("sync_log").upsert(
		ENTITIES.map((entity) => ({
			entity_type: entity.name,
			last_sync_date: "2012-01-01 00:00:00+00",
		})),
		{ onConflict: "entity_type" }
	);

	if (error) {
		throw new Error(`Failed to setup backfill mode: ${error.message}`);
	}

	console.log("✅ All entities configured for historical backfill from 2012");
}

async function getTableCounts() {
	const counts = {};

	for (const entity of ENTITIES) {
		try {
			const { count, error } = await supabase
				.from(entity.table)
				.select("*", { count: "exact", head: true });

			counts[entity.table] = error ? "error" : count || 0;
		} catch (err) {
			counts[entity.table] = "error";
		}
	}

	return counts;
}

function createHistoricalFilter(endpoint, outputSelector) {
	const filter = {
		Page: 0,
		Limit: 1000,
		DateAddedFrom: "2012-01-01 00:00:00",
		DateAddedTo: new Date().toISOString().replace("T", " ").split(".")[0],
		DateUpdatedFrom: "2012-01-01 00:00:00",
		DateUpdatedTo: new Date().toISOString().replace("T", " ").split(".")[0],
	};

	if (outputSelector && outputSelector.length > 0) {
		filter.OutputSelector = outputSelector;
	}

	// Entity-specific date filters
	switch (endpoint) {
		case "GetOrder":
			filter.DatePlacedFrom = filter.DateAddedFrom;
			filter.DatePlacedTo = filter.DateAddedTo;
			delete filter.DateAddedFrom;
			delete filter.DateAddedTo;
			break;
		case "GetPayment":
			filter.DatePaidFrom = filter.DateAddedFrom;
			filter.DatePaidTo = filter.DateAddedTo;
			delete filter.DateAddedFrom;
			delete filter.DateAddedTo;
			delete filter.DateUpdatedFrom;
			delete filter.DateUpdatedTo;
			break;
		case "GetRma":
			filter.DateIssuedFrom = filter.DateAddedFrom;
			filter.DateIssuedTo = filter.DateAddedTo;
			delete filter.DateAddedFrom;
			delete filter.DateAddedTo;
			delete filter.DateUpdatedFrom;
			delete filter.DateUpdatedTo;
			break;
		case "GetSupplier":
			delete filter.DateAddedFrom;
			delete filter.DateAddedTo;
			break;
		case "GetCategory":
		case "GetContent":
		case "GetWarehouse":
			// These don't support date filters reliably
			delete filter.DateAddedFrom;
			delete filter.DateAddedTo;
			delete filter.DateUpdatedFrom;
			delete filter.DateUpdatedTo;
			break;
	}

	return filter;
}

async function backfillEntity(entity) {
	console.log(`🚀 Starting backfill for ${entity.name}...`);

	let totalRecords = 0;
	let page = 0;
	let hasMoreData = true;

	while (hasMoreData) {
		try {
			const filter = createHistoricalFilter(
				entity.endpoint,
				entity.outputSelector
			);
			filter.Page = page;

			console.log(`📄 Fetching ${entity.name} page ${page + 1}...`);

			const response = await callNetoAPI(entity.endpoint, { Filter: filter });
			const dataKey = entity.endpoint.replace("Get", "");
			const records = response[dataKey] || [];

			if (records.length === 0) {
				hasMoreData = false;
				break;
			}

			// Transform data
			const transformedData = transformData(entity.endpoint, {
				[dataKey]: records,
			});

			// Remove duplicates
			const uniqueData = transformedData.filter(
				(row, index, self) =>
					index ===
					self.findIndex(
						(r) => r[entity.conflictColumn] === row[entity.conflictColumn]
					)
			);

			// Upsert to database
			if (uniqueData.length > 0) {
				const { count } = await upsertData(
					supabase,
					entity.table,
					entity.conflictColumn,
					uniqueData
				);
				totalRecords += count || 0;
				console.log(
					`✅ Page ${
						page + 1
					}: ${count} records upserted (${totalRecords} total)`
				);
			}

			// Check if we got less than the limit (last page)
			if (records.length < filter.Limit) {
				hasMoreData = false;
			} else {
				page++;
			}

			// Small delay to avoid rate limiting
			await new Promise((resolve) => setTimeout(resolve, 100));
		} catch (error) {
			console.error(
				`❌ Error on page ${page + 1} for ${entity.name}:`,
				error.message
			);
			throw error;
		}
	}

	// Update sync log
	await supabase.from("sync_log").upsert(
		{
			entity_type: entity.name,
			last_sync_date: new Date().toISOString(),
		},
		{ onConflict: "entity_type" }
	);

	console.log(`🎉 Completed ${entity.name}: ${totalRecords} total records`);
	return { success: true, records_synced: totalRecords };
}

async function runHistoricalBackfill() {
	console.log("🚀 NETO HISTORICAL BACKFILL (2012 to Now)");
	console.log("=".repeat(60));

	const startTime = Date.now();

	try {
		// Step 1: Get initial counts
		console.log("\n📊 Getting initial table counts...");
		const initialCounts = await getTableCounts();
		console.table(initialCounts);

		// Step 2: Setup backfill mode
		console.log("\n🔄 Setting up backfill mode...");
		await setupBackfillMode();

		// Step 3: Run backfill for each entity
		console.log("\n🚀 Starting historical data fetch...");
		const results = [];

		for (const entity of ENTITIES) {
			try {
				const result = await backfillEntity(entity);
				results.push({ entity: entity.name, ...result });
			} catch (error) {
				console.error(`❌ Failed to backfill ${entity.name}:`, error.message);
				results.push({
					entity: entity.name,
					success: false,
					error: error.message,
				});
			}
		}

		// Step 4: Get final counts and generate report
		console.log("\n📊 Getting final table counts...");
		const finalCounts = await getTableCounts();

		const endTime = Date.now();
		const totalTime = (endTime - startTime) / 1000;

		console.log("\n" + "=".repeat(70));
		console.log("🎉 HISTORICAL BACKFILL COMPLETE");
		console.log("=".repeat(70));

		console.log(`⏱️  Total time: ${totalTime.toFixed(2)} seconds`);

		const successful = results.filter((r) => r.success).length;
		console.log(`✅ Successful: ${successful}/${ENTITIES.length}`);
		console.log(
			`❌ Failed: ${ENTITIES.length - successful}/${ENTITIES.length}`
		);

		console.log("\n📊 RESULTS:");
		console.log("Entity       | Records | Before → After  | Status");
		console.log("-".repeat(50));

		results.forEach((result) => {
			const entity = ENTITIES.find((e) => e.name === result.entity);
			const initial = initialCounts[entity.table] || 0;
			const final = finalCounts[entity.table] || 0;
			const status = result.success ? "✅" : "❌";
			const records = result.records_synced || 0;

			console.log(
				`${result.entity.padEnd(12)} | ${records
					.toString()
					.padStart(7)} | ${initial} → ${final}`.padEnd(40) + ` | ${status}`
			);
		});

		const totalRecords = results
			.filter((r) => r.success)
			.reduce((sum, r) => sum + (r.records_synced || 0), 0);

		console.log(
			`\n📋 Total records imported: ${totalRecords.toLocaleString()}`
		);
		console.log("🚀 Ready for daily incremental syncs via GitHub Actions!");
	} catch (error) {
		console.error("\n❌ BACKFILL FAILED:", error.message);
		process.exit(1);
	}
}

runHistoricalBackfill().catch(console.error);
