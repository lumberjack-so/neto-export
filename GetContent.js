// Edge Function: GetContent -> upserts to 'content' table
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { initSupabase, callNetoAPI, transformData, upsertData } from './utils.js'

const endpoint = 'GetContent'
const table = 'content'
const conflictColumn = 'content_id'

const filterData = {
  Filter: {
    DatePostedFrom: '1900-01-01 00:00:00',
    DatePostedTo: '2100-01-01 00:00:00',
    Limit: 100000,
    OutputSelector: ["ContentID", "ContentName", "ContentType", "DatePosted", "DateUpdated"]
  }
}

serve(async () => {
  const supabase = initSupabase()
  try {
    const raw = await callNetoAPI(endpoint, filterData)
    const rows = transformData(endpoint, raw)
    const { count } = await upsertData(supabase, table, conflictColumn, rows)
    return new Response(JSON.stringify({ success: true, inserted: count }), { headers: { 'Content-Type': 'application/json' } })
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }
}) 