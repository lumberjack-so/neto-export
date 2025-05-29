// Edge Function: GetOrder -> upserts to 'orders' table
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { initSupabase, callNetoAPI, transformData, upsertData } from './utils.js'

const endpoint = 'GetOrder'
const table = 'orders'
const conflictColumn = 'order_id'

const filterData = {
  Filter: {
    DatePlacedFrom: '1900-01-01 00:00:00',
    DatePlacedTo: '2100-01-01 00:00:00',
    Page: 0,
    Limit: 10000,
    OutputSelector: ["OrderID", "Username", "GrandTotal", "OrderStatus", "DatePlaced", "LastUpdated"]
  }
}

serve(async () => {
  const supabase = initSupabase()
  try {
    let page = 0
    let totalInserted = 0
    const PAGE_SIZE = 1000

    while (true) {
      const { Order = [] } = await callNetoAPI(endpoint, {
        Filter: { ...filterData.Filter, Page: page, Limit: PAGE_SIZE }
      })
      if (Order.length === 0) break

      const rows = transformData(endpoint, { Order })
      const { count } = await upsertData(supabase, table, conflictColumn, rows)
      totalInserted += count ?? 0

      if (Order.length < PAGE_SIZE) break
      page++
    }

    return new Response(JSON.stringify({ success: true, inserted: totalInserted }), { headers: { 'Content-Type': 'application/json' } })
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }
}) 