// Edge Function: GetCategory -> upserts to 'category' table
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { initSupabase, callNetoAPI, transformData, upsertData } from './utils.js'

const endpoint = 'GetCategory'
const table = 'category'
const conflictColumn = 'category_id'

const filterOptions = {
  Limit: 10000,
  OutputSelector: ["CategoryID", "CategoryName", "ParentCategoryID", "DatePosted", "DateUpdated"]
}

serve(async () => {
  const supabase = initSupabase()
  try {
    const PAGE_SIZE = 1000
    let page = 0
    let totalInserted = 0

    while (true) {
      const { Category = [] } = await callNetoAPI(endpoint, {
        Filter: { ...filterOptions, Page: page, Limit: PAGE_SIZE }
      })
      if (Category.length === 0) break

      const rows = transformData(endpoint, { Category })
      const { count } = await upsertData(supabase, table, conflictColumn, rows)
      totalInserted += count ?? 0

      if (Category.length < PAGE_SIZE) break
      page++
    }

    return new Response(
      JSON.stringify({ success: true, inserted: totalInserted }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
})