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

async function fetchAllPages () {
  let page = 1, all = []
  while (true) {
    const { Customer = [] } = await callNetoAPI(endpoint, { Filter: { ...baseFilter, Page: page } })
    if (Customer.length === 0) break          // no more pages
    all.push(...Customer)
    page++
  }
  return all
}

serve(async () => {
  const supabase = initSupabase()

  try {
    const netoRows = await fetchAllPages()
    console.log('Neto returned', netoRows.length, 'records')

    const rows = transformData(endpoint, { Customer: netoRows })
    console.log('Rows to upsert', rows.length)

    const { count } = await supabase
      .from(table)
      .upsert(rows, { onConflict: conflictColumn, count: 'exact' })
      .select()                                          // needed for count
    console.log('Rows inserted/updated in Postgres', count)

    return new Response(JSON.stringify({ success: true, inserted: count }), {
      headers: { 'Content-Type': 'application/json' }
    })

  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}) 