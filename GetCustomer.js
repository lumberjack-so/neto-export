// Edge Function: GetCustomer -> upserts to 'customer' table
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { initSupabase, callNetoAPI, transformData } from './utils.js'

const endpoint       = 'GetCustomer'
const table          = 'customer'
const conflictColumn = 'username'

const baseFilter = {
  DateAddedFrom: '1900-01-01 00:00:00',
  DateAddedTo:   '2100-01-01 00:00:00',
  Limit:         10000,
  OutputSelector: [
    'Username', 'ID', 'EmailAddress',
    'Active', 'DateAdded', 'DateUpdated'
  ]
}

serve(async () => {
  const supabase = initSupabase()

  try {
    let page = 1
    let totalInserted = 0
    const PAGE_SIZE = 500

    while (true) {
      const payload = { Filter: { ...baseFilter, Limit: PAGE_SIZE, Page: page } }
      const resp = await callNetoAPI(endpoint, payload)

      const rowsList = resp.Customer ?? []
      if (rowsList.length === 0) break        // no more pages

      const rows = transformData(endpoint, { Customer: rowsList })
      const { error, count } = await supabase
          .from(table)
          .upsert(rows, { onConflict: conflictColumn })
      if (error) throw error
      totalInserted += count ?? 0

      if (rowsList.length < PAGE_SIZE) break  // last page (less than full)
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