// Edge Function: GetVoucher -> upserts to 'voucher' table
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import {
	initSupabase,
	callNetoAPI,
	transformData,
	upsertData,
} from "./utils.js";

const endpoint = "GetVoucher";
const table = "voucher";
const conflictColumn = "voucher_id";
const CHUNK_DAYS = 30;

const filterData = {
	Filter: {
		DateAddedFrom: "2012-01-01 00:00:00",
		DateAddedTo: "2100-01-01 00:00:00",
		OutputSelector: [
			"VoucherID",
			"VoucherCode",
			"Balance",
			"DateAdded",
			"IsRedeemed",
		],
	},
};

serve(async () => {
	const supabase = initSupabase();

	try {
		// Get current sync state
		const { data: syncState, error: syncError } = await supabase
			.from("sync_state")
			.select("*")
			.eq("entity_type", "vouchers")
			.single();

		if (syncError) {
			throw new Error(`Failed to get sync state: ${syncError.message}`);
		}

		const { DateAddedFrom, DateAddedTo, OutputSelector } = filterData.Filter;
		const startDate = new Date(DateAddedFrom.replace(" ", "T") + "Z");
		const endDate = new Date(DateAddedTo.replace(" ", "T") + "Z");
		const formatDate = (d) => d.toISOString().replace("T", " ").split(".")[0];

		// Calculate window start based on last synced date
		let windowStart = syncState?.last_synced_date
			? new Date(syncState.last_synced_date)
			: startDate;

		// Process one chunk
		const windowEnd = new Date(windowStart);
		windowEnd.setDate(windowEnd.getDate() + CHUNK_DAYS);
		if (windowEnd > endDate) windowEnd.setTime(endDate.getTime());

		// If we've reached the end date, mark as complete
		if (windowStart >= endDate) {
			const { error: updateError } = await supabase
				.from("sync_state")
				.update({
					is_complete: true,
					last_synced_date: endDate.toISOString(),
				})
				.eq("entity_type", "vouchers");

			if (updateError) {
				throw new Error(`Failed to update sync state: ${updateError.message}`);
			}

			return new Response(
				JSON.stringify({
					success: true,
					inserted: 0,
					current_window_start: windowStart.toISOString(),
					current_window_end: windowEnd.toISOString(),
					has_more: false,
					is_complete: true,
					vouchers_fetched: 0,
					message: "Reached end date",
				}),
				{ headers: { "Content-Type": "application/json" } }
			);
		}

		const payload = {
			Filter: {
				DateAddedFrom: formatDate(windowStart),
				DateAddedTo: formatDate(windowEnd),
				OutputSelector,
			},
		};

		const raw = await callNetoAPI(endpoint, payload);
		const rows = transformData(endpoint, raw);
		const uniqueRows = rows.filter(
			(r, i, a) => i === a.findIndex((x) => x.voucher_id === r.voucher_id)
		);

		if (uniqueRows.length > 0) {
			const { count } = await upsertData(
				supabase,
				table,
				conflictColumn,
				uniqueRows
			);

			// Update sync state with next window start
			const nextWindowStart = new Date(windowEnd);
			nextWindowStart.setTime(nextWindowStart.getTime() + 1000); // Add 1 second to avoid overlap
			const isComplete = nextWindowStart >= endDate;

			const { error: updateError } = await supabase
				.from("sync_state")
				.update({
					last_synced_date: nextWindowStart.toISOString(),
					is_complete: isComplete,
					total_records: (syncState?.total_records || 0) + uniqueRows.length,
				})
				.eq("entity_type", "vouchers");

			if (updateError) {
				throw new Error(`Failed to update sync state: ${updateError.message}`);
			}

			return new Response(
				JSON.stringify({
					success: true,
					inserted: count,
					current_window_start: windowStart.toISOString(),
					current_window_end: windowEnd.toISOString(),
					next_window_start: nextWindowStart.toISOString(),
					has_more: !isComplete,
					is_complete: isComplete,
					vouchers_fetched: uniqueRows.length,
				}),
				{ headers: { "Content-Type": "application/json" } }
			);
		}

		// If no records found in this window, move to next window
		const nextWindowStart = new Date(windowEnd);
		nextWindowStart.setTime(nextWindowStart.getTime() + 1000); // Add 1 second to avoid overlap
		const isComplete = nextWindowStart >= endDate;

		const { error: updateError } = await supabase
			.from("sync_state")
			.update({
				last_synced_date: nextWindowStart.toISOString(),
				is_complete: isComplete,
			})
			.eq("entity_type", "vouchers");

		if (updateError) {
			throw new Error(`Failed to update sync state: ${updateError.message}`);
		}

		return new Response(
			JSON.stringify({
				success: true,
				inserted: 0,
				current_window_start: windowStart.toISOString(),
				current_window_end: windowEnd.toISOString(),
				next_window_start: nextWindowStart.toISOString(),
				has_more: !isComplete,
				is_complete: isComplete,
				vouchers_fetched: 0,
				message: "No records found in this window",
			}),
			{ headers: { "Content-Type": "application/json" } }
		);
	} catch (err) {
		return new Response(
			JSON.stringify({ success: false, error: err.message }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
});
