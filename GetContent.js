// Edge Function: GetContent -> upserts to 'content' table
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { initSupabase, callNetoAPI, transformData, upsertData } from './utils.js'

const endpoint = 'GetContent'
const table = 'content'
const conflictColumn = 'content_id'

const filterOptions = {
  DatePostedFrom: '1900-01-01 00:00:00',
  DatePostedTo: '2100-01-01 00:00:00',
  OutputSelector: ["ContentID", "ContentName", "ContentType", "DatePosted", "DateUpdated"]
}

serve(async () => {
  const supabase = initSupabase()
  try {
    const PAGE_SIZE = 1000
    let page = 0
    let totalInserted = 0

    while (true) {
      const { Content = [] } = await callNetoAPI(endpoint, {
        Filter: { ...filterOptions, Page: page, Limit: PAGE_SIZE }
      })

      if (Content.length === 0) break

      console.log(`Neto returned ${Content.length} records on page ${page}`)

      const rows = transformData(endpoint, { Content })
      console.log('Rows to upsert', rows.length)

      const { count } = await upsertData(supabase, table, conflictColumn, rows)
      totalInserted += count ?? 0

      if (Content.length < PAGE_SIZE) break
      page++
    }

    console.log('Total rows inserted/updated in Postgres', totalInserted)
    return new Response(JSON.stringify({ success: true, inserted: totalInserted }), { headers: { 'Content-Type': 'application/json' } })
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }
})