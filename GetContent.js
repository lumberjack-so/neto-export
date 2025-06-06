// Edge Function: GetContent -> upserts to 'content' table
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import {
	initSupabase,
	callNetoAPI,
	transformData,
	upsertData,
} from "./utils.js";

const endpoint = "GetContent";
const table = "content";
const conflictColumn = "content_id";
const PAGE_SIZE = 1000;

const filterOptions = {
	OutputSelector: [
		"ContentID",
		"ContentName",
		"ContentType",
		"DatePosted",
		"DateUpdated",
	],
};

serve(async () => {
	const supabase = initSupabase();
	try {
		// Get current sync state
		const { data: syncState, error: syncError } = await supabase
			.from("sync_state")
			.select("*")
			.eq("entity_type", "contents")
			.single();

		if (syncError) {
			throw new Error(`Failed to get sync state: ${syncError.message}`);
		}

		let page = syncState?.last_synced_page || 0;
		let totalInserted = 0;
		const contents = [];

		// Fetch one page of content
		console.log(`Fetching content page ${page} (limit ${PAGE_SIZE})`);
		const { Content = [] } = await callNetoAPI(endpoint, {
			Filter: { ...filterOptions, Page: page, Limit: PAGE_SIZE },
		});
		console.log(`Received ${Content.length} content records on page ${page}`);

		if (Content.length > 0) {
			const rows = transformData(endpoint, { Content });
			console.log(
				`Transform yielded ${rows.length} content rows on page ${page}`
			);

			const { count } = await upsertData(supabase, table, conflictColumn, rows);
			console.log(`Upserted ${count ?? 0} content rows on page ${page}`);
			totalInserted += count ?? 0;
			contents.push(...Content);

			// Update sync state
			const isComplete = Content.length < PAGE_SIZE;
			const { error: updateError } = await supabase
				.from("sync_state")
				.update({
					last_synced_page: page + 1,
					last_synced_date: new Date().toISOString(),
					is_complete: isComplete,
					total_records: (syncState?.total_records || 0) + Content.length,
				})
				.eq("entity_type", "contents");

			if (updateError) {
				throw new Error(`Failed to update sync state: ${updateError.message}`);
			}
		}

		return new Response(
			JSON.stringify({
				success: true,
				inserted: totalInserted,
				current_page: page,
				has_more: Content.length === PAGE_SIZE,
				is_complete: Content.length < PAGE_SIZE,
				contents_fetched: contents.length,
			}),
			{ headers: { "Content-Type": "application/json" } }
		);
	} catch (err) {
		console.error(`${endpoint} error:`, err);
		return new Response(
			JSON.stringify({ success: false, error: err.message }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
});
