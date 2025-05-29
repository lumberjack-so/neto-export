// Edge Function: GetVoucher -> upserts to 'voucher' table
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { initSupabase, callNetoAPI, transformData, upsertData } from './utils.js'

const endpoint = 'GetVoucher'
const table = 'voucher'
const conflictColumn = 'voucher_id'

const filterData = {
  Filter: {
    DateAddedFrom: '1900-01-01 00:00:00',
    DateAddedTo: '2100-01-01 00:00:00',
    OutputSelector: ["VoucherID", "VoucherCode", "Balance", "DateAdded", "IsRedeemed"]
  }
}
const CHUNK_DAYS = 30

serve(async () => {
  const supabase = initSupabase()

  try {
    const { DateAddedFrom, DateAddedTo, OutputSelector } = filterData.Filter
    const startDate = new Date(DateAddedFrom.replace(' ', 'T') + 'Z')
    const endDate = new Date(DateAddedTo.replace(' ', 'T') + 'Z')
    const formatDate = (d) => d.toISOString().replace('T', ' ').split('.')[0]
    const allRows = []
    let windowStart = startDate

    while (windowStart <= endDate) {
      const windowEnd = new Date(windowStart)
      windowEnd.setDate(windowEnd.getDate() + CHUNK_DAYS)
      if (windowEnd > endDate) windowEnd.setTime(endDate.getTime())

      const payload = {
        Filter: {
          DateAddedFrom: formatDate(windowStart),
          DateAddedTo: formatDate(windowEnd),
          OutputSelector
        }
      }

      const raw = await callNetoAPI(endpoint, payload)
      const rows = transformData(endpoint, raw)
      allRows.push(...rows)

      windowStart = new Date(windowEnd.getTime() + 1000)
    }

    const uniqueRows = allRows.filter((r, i, a) => i === a.findIndex(x => x.voucher_id === r.voucher_id))
    const { count } = await upsertData(supabase, table, conflictColumn, uniqueRows)

    return new Response(
      JSON.stringify({ success: true, inserted: count }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
})
