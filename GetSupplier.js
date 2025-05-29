// Edge Function: GetSupplier -> upserts to 'supplier' table
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { initSupabase, callNetoAPI, transformData, upsertData } from './utils.js'

const endpoint = 'GetSupplier'
const table = 'supplier'
const conflictColumn = 'supplier_id'

const filterData = {
  Filter: {
    Page: 1,
    Limit: 10000,
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
      'LeadTime1',
      'LeadTime2'
    ]
  }
}

serve(async () => {
  const supabase = initSupabase()
  
  try {
    // Check if supplier table exists
    const { error: tableCheckError } = await supabase
      .from('supplier')
      .select('supplier_id')
      .limit(1)
    
    if (tableCheckError && tableCheckError.code === '42P01') {
      // Table doesn't exist
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Supplier table does not exist. Please create it first by running the SQL script in sql/create_supplier_table.sql',
          hint: 'Go to Supabase Dashboard > SQL Editor and run the create table script'
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }
    
    const PAGE_SIZE = 1000
    let page = 1
    let totalInserted = 0
    
    // First, let's test if there are any suppliers at all
    console.log('Testing for suppliers with minimal filter...')
    const testResponse = await callNetoAPI(endpoint, {
      Filter: {
        Page: 1,
        Limit: 1,
        OutputSelector: ['SupplierID', 'SupplierCompany']
      }
    })
    console.log('Test response:', JSON.stringify(testResponse))
    
    // If test didn't return suppliers, try without any filter criteria
    if (!testResponse.Supplier || testResponse.Supplier === '') {
      console.log('No suppliers found with basic filter, trying without filter criteria...')
      const testResponse2 = await callNetoAPI(endpoint, {
        Filter: {
          OutputSelector: ['SupplierID', 'SupplierCompany']
        }
      })
      console.log('Test response 2:', JSON.stringify(testResponse2))
    }
    
    while (true) {
      // Fetch page of suppliers
      console.log(`Fetching suppliers page ${page}...`)
      const response = await callNetoAPI(endpoint, {
        Filter: { ...filterData.Filter, Page: page, Limit: PAGE_SIZE }
      })
      
      console.log('Raw API response:', JSON.stringify(response).substring(0, 500))
      
      const { Supplier = [] } = response
      
      console.log(`Found ${Supplier.length} suppliers on page ${page}`)
      
      if (Supplier.length === 0) {
        console.log('No more suppliers found, ending pagination')
        break
      }
      
      // Log first supplier as sample
      if (Supplier.length > 0) {
        console.log('Sample supplier:', JSON.stringify(Supplier[0]))
      }
      
      // Transform data
      const rows = transformData(endpoint, { Supplier })
      console.log(`Transformed ${rows.length} rows`)
      
      // Deduplicate on supplier_id
      const unique = rows.filter((row, index, self) =>
        index === self.findIndex(r => r.supplier_id === row.supplier_id)
      )
      console.log(`After deduplication: ${unique.length} unique rows`)
      
      // Upsert to database
      const { count } = await upsertData(supabase, table, conflictColumn, unique)
      totalInserted += count || 0
      
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