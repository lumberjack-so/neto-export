// Edge Function: GetSupplier -> upserts to 'supplier' table
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { initSupabase, callNetoAPI, transformData, upsertData } from './utils.js'

const endpoint = 'GetSupplier'
const table = 'supplier'
const conflictColumn = 'supplier_id'

const filterData = {
  Filter: {
    IsActive: true,
    OutputSelector: [
      'SupplierID',
      'SupplierReference',
      'SupplierCompany',
      'SupplierStreet1',
      'SupplierStreet2',
      'SupplierCity',
      'SupplierState',
      'SupplierPostcode',
      'SupplierCountry',
      'SupplierPhone',
      'SupplierFax',
      'SupplierURL',
      'SupplierEmail',
      'SupplierCurrencyCode',
      'SupplierNotes',
      'DateAdded',
      'DateUpdated'
    ],
    Page: 1,
    Limit: 1000
  }
}

serve(async () => {
  const supabase = initSupabase()
  
  try {
    const PAGE_SIZE = 1000
    let page = 1
    let totalInserted = 0
    
    while (true) {
      // Fetch page of suppliers
      const { Supplier = [] } = await callNetoAPI(endpoint, {
        Filter: { ...filterData.Filter, Page: page, Limit: PAGE_SIZE }
      })
      
      if (Supplier.length === 0) break
      
      // Transform data
      const rows = transformData(endpoint, { Supplier })
      
      // Deduplicate on supplier_id
      const unique = rows.filter((row, index, self) =>
        index === self.findIndex(r => r.supplier_id === row.supplier_id)
      )
      
      // Upsert to database
      const count = await upsertData(supabase, table, unique, conflictColumn)
      totalInserted += count
      
      console.log(`Page ${page}: processed ${Supplier.length} suppliers, inserted ${count}`)
      
      // Check if we got less than PAGE_SIZE (last page)
      if (Supplier.length < PAGE_SIZE) break
      page++
    }
    
    return new Response(
      JSON.stringify({ success: true, inserted: totalInserted }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error(`${endpoint} error:`, error)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}) 