// Edge Function: GetContent -> upserts to 'content' table
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { initSupabase, callNetoAPI, transformData, upsertData } from './utils.js'

const endpoint = 'GetContent'
const table = 'content'
const conflictColumn = 'content_id'

const filterOptions = {
  DatePostedFrom: '1900-01-01 00:00:00',
  DatePostedTo:   '2100-01-01 00:00:00',
  OutputSelector: ["ContentID", "ContentName", "ContentType", "DatePosted", "DateUpdated"]
}

serve(async () => {
  const supabase = initSupabase()
  try {
    const PAGE_SIZE = 1000
    let page = 0
    let totalInserted = 0

    while (true) {
      console.log(`Fetching content page ${page} (limit ${PAGE_SIZE})`)
      const { Content = [] } = await callNetoAPI(endpoint, {
        Filter: { ...filterOptions, Page: page, Limit: PAGE_SIZE }
      })
      console.log(`Received ${Content.length} content records on page ${page}`)
      if (Content.length === 0) {
        console.log('No more content to fetch, ending pagination')
        break
      }

      const rows = transformData(endpoint, { Content })
      console.log(`Transform yielded ${rows.length} content rows on page ${page}`)

      const { count } = await upsertData(supabase, table, conflictColumn, rows)
      console.log(`Upserted ${count ?? 0} content rows on page ${page}`)
      totalInserted += count ?? 0

      if (Content.length < PAGE_SIZE) {
        console.log('Last content page reached, terminating pagination')
        break
      }
      page++
    }

    console.log(`Total content rows inserted/updated in Postgres: ${totalInserted}`)
    return new Response(
      JSON.stringify({ success: true, inserted: totalInserted }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }
})