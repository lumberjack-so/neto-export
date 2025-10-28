// Enhanced sync utilities for flexible sync state system
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const NETO_API_URL = "https://timberbits.com/do/WS/NetoAPI";
const NETO_API_KEY = Deno.env.get("NETO_API_KEY");

export const initSupabase = () => {
	const supabaseUrl = Deno.env.get("SUPABASE_URL");
	const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
	return createClient(supabaseUrl, supabaseKey);
};

// Get next sync parameters for an entity
export async function getNextSyncParams(supabase, entityType) {
	console.log(`[${entityType}] Getting next sync parameters`);

	const { data, error } = await supabase.rpc("get_next_sync_params", {
		p_entity_type: entityType,
	});

	if (error) {
		throw new Error(
			`Failed to get sync params for ${entityType}: ${error.message}`
		);
	}

	if (!data || data.length === 0) {
		throw new Error(
			`No sync configuration found for entity type: ${entityType}`
		);
	}

	const params = data[0];
	console.log(`[${entityType}] Sync strategy: ${params.strategy}`);
	console.log(
		`[${entityType}] Page: ${params.page}, Page size: ${params.page_size}`
	);

	if (params.date_from && params.date_to) {
		console.log(
			`[${entityType}] Date range: ${params.date_from} to ${params.date_to}`
		);
	}

	return params;
}

// Update sync progress
export async function updateSyncProgress(
	supabase,
	entityType,
	recordsFetched,
	recordsInserted,
	hasMorePages = false,
	hasMoreDates = false,
	errorMessage = null
) {
	console.log(
		`[${entityType}] Updating sync progress: fetched=${recordsFetched}, inserted=${recordsInserted}, hasMorePages=${hasMorePages}, hasMoreDates=${hasMoreDates}`
	);

	const { error } = await supabase.rpc("update_sync_progress", {
		p_entity_type: entityType,
		p_records_fetched: recordsFetched,
		p_records_inserted: recordsInserted,
		p_has_more_pages: hasMorePages,
		p_has_more_dates: hasMoreDates,
		p_error_message: errorMessage,
	});

	if (error) {
		throw new Error(
			`Failed to update sync progress for ${entityType}: ${error.message}`
		);
	}

	console.log(`[${entityType}] Sync progress updated successfully`);
}

// Build filter object based on sync strategy
export function buildApiFilter(syncParams, endpoint) {
	const { strategy, page, page_size, date_from, date_to, config } = syncParams;

	let filter = {
		Page: page,
		Limit: page_size,
	};

	// Add output selectors based on endpoint
	const outputSelectors = getOutputSelectorsForEndpoint(endpoint);
	if (outputSelectors.length > 0) {
		filter.OutputSelector = outputSelectors;
	}

	// Add date filters if applicable
	if (strategy === "date_range" || strategy === "hybrid") {
		const dateFields = config.date_fields || [];

		if (date_from && date_to && dateFields.length > 0) {
			const formattedDateFrom = formatDateForApi(date_from);
			const formattedDateTo = formatDateForApi(date_to);

			// Add appropriate date fields based on endpoint
			dateFields.forEach((field) => {
				if (field.includes("From")) {
					filter[field] = formattedDateFrom;
				} else if (field.includes("To")) {
					filter[field] = formattedDateTo;
				}
			});
		}
	}

	return { Filter: filter };
}

// Format date for API (YYYY-MM-DD HH:MM:SS)
function formatDateForApi(date) {
	const d = new Date(date);
	return d.toISOString().replace("T", " ").split(".")[0];
}

// Get output selectors for each endpoint
function getOutputSelectorsForEndpoint(endpoint) {
	const selectors = {
		GetSupplier: [
			"ID",
			"SupplierID",
			"SupplierReference",
			"LeadTime1",
			"LeadTime2",
			"SupplierCompany",
			"SupplierStreet1",
			"SupplierStreet2",
			"SupplierCity",
			"SupplierState",
			"SupplierPostcode",
			"SupplierCountry",
			"SupplierEmail",
			"SupplierPhone",
			"SupplierFax",
			"SupplierURL",
			"ExportTemplate",
			"SupplierCurrencyCode",
			"AccountCode",
			"FactoryStreet1",
			"FactoryStreet2",
			"FactoryCity",
			"FactoryState",
			"FactoryPostcode",
			"FactoryCountry",
			"SupplierNotes",
			"DateAdded",
			"DateUpdated",
		],
		GetCategory: [
			"CategoryID",
			"CategoryName",
			"ParentCategoryID",
			"DatePosted",
			"DateUpdated",
		],
		GetWarehouse: [
			"WarehouseID",
			"WarehouseName",
			"DefaultWarehouse",
			"City",
			"State",
			"Country",
		],
		GetOrder: [
			"OrderID",
			"Username",
			"GrandTotal",
			"OrderStatus",
			"DatePlaced",
			"LastUpdated",
		],
		GetItem: [
			"ParentSKU",
			"ID",
			"Brand",
			"Model",
			"Virtual",
			"Name",
			"PrimarySupplier",
			"Approved",
			"IsActive",
			"PriceGroups",
			"DateAdded",
			"DateUpdated",
		],
		GetCustomer: [
			"Username",
			"ID",
			"Type",
			"EmailAddress",
			"Active",
			"DateAdded",
			"DateUpdated",
		],
		GetPayment: ["ID", "AmountPaid", "PaymentMethod", "DatePaid"],
		GetRma: ["RmaID", "RmaStatus", "DateIssued", "OrderID"],
		GetVoucher: [
			"VoucherID",
			"VoucherCode",
			"Balance",
			"DateAdded",
			"IsRedeemed",
		],
		GetContent: [
			"ContentID",
			"ContentName",
			"ContentType",
			"DatePosted",
			"DateUpdated",
		],
	};

	return selectors[endpoint] || [];
}

// Enhanced API call function
export async function callNetoAPI(action, filterData) {
	console.log(`[${action}] Calling Neto API`);
	console.log(`[${action}] Request body:`, JSON.stringify(filterData, null, 2));

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

	console.log(`[${action}] Response status:`, response.status);

	if (!response.ok) {
		const text = await response.text();
		console.error(`[${action}] API error response:`, text);
		throw new Error(`API call failed (${response.status}): ${text}`);
	}

	const jsonResponse = await response.json();
	console.log(`[${action}] Response received, processing...`);

	return jsonResponse;
}

// Transform data (matches sync.js transformations)
export function transformData(endpoint, data) {
	console.log(`[${endpoint}] Starting data transformation`);
	console.log(
		`[${endpoint}] Raw data sample:`,
		JSON.stringify(data).substring(0, 200)
	);

	const transformedData = (() => {
		switch (endpoint) {
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

			case "GetCategory": {
				const normalizeDate = (str) =>
					str === "0000-00-00 00:00:00" ? null : str;
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

			case "GetOrder":
				return (
					data.Order?.map((o) => ({
						order_id: o.OrderID,
						username: o.Username || null,
						grand_total: o.GrandTotal ? parseFloat(o.GrandTotal) : null,
						order_status: o.OrderStatus || null,
						date_placed: o.DatePlaced || null,
					})) || []
				);

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

			case "GetPayment":
				return (
					data.Payment?.map((p) => ({
						payment_id: p.ID,
						payment_amount: p.AmountPaid,
						payment_method: p.PaymentMethod,
						date_payment: p.DatePaid,
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

			default:
				return [];
		}
	})();

	console.log(
		`[${endpoint}] Total records transformed:`,
		transformedData.length
	);
	return transformedData;
}

// Enhanced upsert function
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
	return { count };
}

// Check if there are more dates to process
export function hasMoreDates(syncParams) {
	const { strategy, date_to } = syncParams;

	if (strategy === "pagination") {
		return false; // Pagination-only entities don't use dates
	}

	if (!date_to) {
		return false;
	}

	const endDate = new Date(date_to);
	const now = new Date();

	// If the current date range end is before now, there are more dates to process
	return endDate < now;
}

// Reset sync state for an entity (utility function)
export async function resetSyncState(supabase, entityType) {
	console.log(`[${entityType}] Resetting sync state`);

	const { error } = await supabase
		.from("sync_state")
		.update({
			current_page: 0,
			current_date_from: null,
			current_date_to: null,
			total_records_synced: 0,
			current_batch_records: 0,
			is_complete: false,
			last_error: null,
			updated_at: new Date().toISOString(),
		})
		.eq("entity_type", entityType);

	if (error) {
		throw new Error(
			`Failed to reset sync state for ${entityType}: ${error.message}`
		);
	}

	console.log(`[${entityType}] Sync state reset successfully`);
}
