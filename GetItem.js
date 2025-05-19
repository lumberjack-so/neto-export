// Edge Function: GetItem -> upserts to 'item' table
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { initSupabase, callNetoAPI, transformData, upsertData } from './utils.js'

const endpoint = 'GetItem'
const table = 'item'
const conflictColumn = 'parent_sku'

const filterData = {
  Filter: {
    DateAddedFrom: '1900-01-01 00:00:00',
    DateAddedTo: '2100-01-01 00:00:00',
    DateUpdatedFrom: '1900-01-01 00:00:00',
    DateUpdatedTo: '2100-01-01 00:00:00',
    Page: 1,
    Limit: 10000,
    OutputSelector: ["ParentSKU", "ID", "Brand", "Model", "Name", "IsActive", "DateAdded", "DateUpdated"]
  }
}

const PAGE_SIZE = 1000
let page = 1, totalInserted = 0

while (true) {
  const { Item = [] } = await callNetoAPI('GetItem', {
    Filter: { ...filterData.Filter, Page: page, Limit: PAGE_SIZE }
  })
  if (Item.length === 0) break

  const rows = transformData('GetItem', { Item })
  const { error, count } = await supabase
      .from('item')
      .upsert(rows, { onConflict: 'parent_sku' })
  if (error) throw error
  totalInserted += count ?? 0

  if (Item.length < PAGE_SIZE) break
  page++
}

return new Response(JSON.stringify({ success: true, inserted: totalInserted }), {
  headers: { 'Content-Type': 'application/json' }
}) 