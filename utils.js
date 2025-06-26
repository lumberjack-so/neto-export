import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const NETO_API_URL = "https://timberbits.com/do/WS/NetoAPI";
const NETO_API_KEY = Deno.env.get("NETO_API_KEY");

export const initSupabase = () => {
	const supabaseUrl = Deno.env.get("SUPABASE_URL");
	const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
	return createClient(supabaseUrl, supabaseKey);
};

export async function callNetoAPI(action, filterData) {
	console.log(`Calling Neto API: ${action}`);
	console.log("API URL:", NETO_API_URL);
	console.log("API Key exists:", !!NETO_API_KEY);
	console.log("Request body:", JSON.stringify(filterData));

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

	console.log("Response status:", response.status);
	console.log(
		"Response headers:",
		Object.fromEntries(response.headers.entries())
	);

	if (!response.ok) {
		const text = await response.text();
		console.error("API error response:", text);
		throw new Error(`API call failed (${response.status}): ${text}`);
	}

	const jsonResponse = await response.json();
	console.log(
		"Response JSON preview:",
		JSON.stringify(jsonResponse).substring(0, 200)
	);

	return jsonResponse;
}

export function transformData(endpoint, data) {
	console.log(`[${endpoint}] Starting data transformation`);
	console.log(
		`[${endpoint}] Raw data sample:`,
		JSON.stringify(data).substring(0, 200)
	);

	const transformedData = (() => {
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
				console.log("GetVoucher transform - raw data:", JSON.stringify(data));
				if (!data?.Voucher) {
					console.log("No Voucher data found in response");
					return [];
				}
				const vouchers = Array.isArray(data.Voucher)
					? data.Voucher
					: [data.Voucher];
				console.log("Processing vouchers:", JSON.stringify(vouchers));
				return vouchers.map((v) => ({
					voucher_id: v.VoucherID,
					voucher_code: v.VoucherCode,
					balance: v.Balance,
					date_added: v.DateAdded,
				}));

			case "GetSupplier":
				console.log("GetSupplier transform - sample data:", data.Supplier?.[0]);
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
	})();

	console.log(
		`[${endpoint}] Transformed data sample:`,
		JSON.stringify(transformedData).substring(0, 200)
	);
	console.log(
		`[${endpoint}] Total records transformed:`,
		transformedData.length
	);

	return transformedData;
}

export async function upsertData(supabase, table, conflictColumn, rows) {
	console.log(`[${table}] Starting upsert operation`);
	console.log(`[${table}] Number of rows to upsert:`, rows.length);
	console.log(`[${table}] Conflict column:`, conflictColumn);

	if (!rows.length) {
		console.log(`[${table}] No rows to upsert, skipping`);
		return { count: 0 };
	}

	const { error, data, count } = await supabase
		.from(table)
		.upsert(rows, { onConflict: conflictColumn })
		.select("*", { count: "exact" });

	if (error) {
		console.error(`[${table}] Upsert error:`, error);
		throw error;
	}

	console.log(`[${table}] Upsert successful - Records affected:`, count);
	console.log(
		`[${table}] Sample of upserted data:`,
		JSON.stringify(data).substring(0, 200)
	);

	return { count };
}

export async function getLastSyncDate(supabase, entityType) {
	const { data, error } = await supabase
		.from("sync_log")
		.select("last_sync_date")
		.eq("entity_type", entityType)
		.single();

	if (error) {
		console.warn(`No sync date found for ${entityType}, using yesterday`);
		const yesterday = new Date();
		yesterday.setDate(yesterday.getDate() - 1);
		return yesterday.toISOString();
	}

	return data.last_sync_date;
}

export async function updateLastSyncDate(
	supabase,
	entityType,
	syncDate = null
) {
	const newSyncDate = syncDate || new Date().toISOString();

	const { error } = await supabase.from("sync_log").upsert(
		{
			entity_type: entityType,
			last_sync_date: newSyncDate,
		},
		{
			onConflict: "entity_type",
		}
	);

	if (error) {
		throw new Error(
			`Failed to update sync date for ${entityType}: ${error.message}`
		);
	}

	console.log(`📅 Updated sync date for ${entityType}: ${newSyncDate}`);
}

export function createDateFilter(entityType, lastSyncDate) {
	const fromDate = new Date(lastSyncDate);
	fromDate.setHours(fromDate.getHours() - 1);

	const toDate = new Date();

	const formatDate = (date) => {
		return date.toISOString().replace("T", " ").split(".")[0];
	};

	const dateFrom = formatDate(fromDate);
	const dateTo = formatDate(toDate);

	console.log(`📅 Incremental sync from ${dateFrom} to ${dateTo}`);

	switch (entityType) {
		case "suppliers":
			return {
				DateUpdatedFrom: dateFrom,
				DateUpdatedTo: dateTo,
			};

		case "items":
		case "customers":
			return {
				DateAddedFrom: dateFrom,
				DateAddedTo: dateTo,
				DateUpdatedFrom: dateFrom,
				DateUpdatedTo: dateTo,
			};

		case "orders":
			return {
				DatePlacedFrom: dateFrom,
				DatePlacedTo: dateTo,
			};

		case "payments":
			return {
				DatePaidFrom: dateFrom,
				DatePaidTo: dateTo,
			};

		case "rmas":
			return {
				DateIssuedFrom: dateFrom,
				DateIssuedTo: dateTo,
			};

		case "vouchers":
			return {
				DateAddedFrom: dateFrom,
				DateAddedTo: dateTo,
			};

		case "categories":
		case "contents":
		case "warehouses":
		default:
			return null;
	}
}

export async function syncEntitySince(
	supabase,
	entityType,
	endpoint,
	table,
	conflictColumn,
	outputSelector
) {
	console.log(`🚀 Starting incremental sync for ${entityType}`);

	try {
		const lastSyncDate = await getLastSyncDate(supabase, entityType);
		console.log(`📅 Last sync: ${lastSyncDate}`);

		const dateFilter = createDateFilter(entityType, lastSyncDate);
		let filter = {
			Page: 0,
			Limit: 1000,
		};

		if (outputSelector && outputSelector.length > 0) {
			filter.OutputSelector = outputSelector;
		}

		if (dateFilter) {
			filter = { ...filter, ...dateFilter };
		}

		console.log(`📡 API Filter:`, JSON.stringify(filter, null, 2));

		const response = await callNetoAPI(endpoint, { Filter: filter });

		const dataKey = endpoint.replace("Get", "");
		const records = response[dataKey] || [];

		console.log(`📊 Received ${records.length} records from ${endpoint}`);

		let recordsSynced = 0;

		if (records.length > 0) {
			const transformedData = transformData(endpoint, { [dataKey]: records });

			const uniqueData = transformedData.filter(
				(row, index, self) =>
					index ===
					self.findIndex((r) => r[conflictColumn] === row[conflictColumn])
			);

			console.log(
				`🔄 Transformed ${transformedData.length} records, ${uniqueData.length} unique`
			);

			const { count } = await upsertData(
				supabase,
				table,
				conflictColumn,
				uniqueData
			);
			recordsSynced = count || 0;

			console.log(`✅ Synced ${recordsSynced} records to ${table}`);
		}

		await updateLastSyncDate(supabase, entityType);

		const result = {
			success: true,
			entity_type: entityType,
			records_fetched: records.length,
			records_synced: recordsSynced,
			sync_date: new Date().toISOString(),
		};

		console.log(`✅ Incremental sync completed:`, result);
		return result;
	} catch (error) {
		console.error(`❌ Sync failed for ${entityType}:`, error);

		const result = {
			success: false,
			entity_type: entityType,
			error: error.message,
		};

		return result;
	}
}
