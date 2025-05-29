// Shared utility functions for Neto Edge Functions
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const NETO_API_URL = 'https://timberbits.com/do/WS/NetoAPI'
const NETO_API_KEY = Deno.env.get('NETO_API_KEY')

export const initSupabase = () => {
  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  return createClient(supabaseUrl, supabaseKey)
}

export async function callNetoAPI(action, filterData) {
  console.log(`Calling Neto API: ${action}`)
  console.log('API URL:', NETO_API_URL)
  console.log('API Key exists:', !!NETO_API_KEY)
  console.log('Request body:', JSON.stringify(filterData))
  
  const response = await fetch(NETO_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'NETOAPI_KEY': NETO_API_KEY,
      'NETOAPI_ACTION': action,
      'Accept': 'application/json'
    },
    body: JSON.stringify(filterData)
  })

  console.log('Response status:', response.status)
  console.log('Response headers:', Object.fromEntries(response.headers.entries()))
  
  if (!response.ok) {
    const text = await response.text()
    console.error('API error response:', text)
    throw new Error(`API call failed (${response.status}): ${text}`)
  }
  
  const jsonResponse = await response.json()
  console.log('Response JSON preview:', JSON.stringify(jsonResponse).substring(0, 200))
  
  return jsonResponse
}

// Transformers per endpoint
export function transformData(endpoint, data) {
  switch (endpoint) {
    case 'GetItem':
      return data.Item?.map(item => ({
        parent_sku: item.ParentSKU,
        item_id: item.ID,
        brand: item.Brand,
        model: item.Model,
        virtual: item.Virtual === 'True',
        name: item.Name,
        primary_supplier: item.PrimarySupplier,
        approved: item.Approved === 'True',
        is_active: item.IsActive === 'True',
        price_groups: item.PriceGroups ? JSON.stringify(item.PriceGroups) : null,
        date_added: item.DateAdded,
        date_updated: item.DateUpdated
      })) || []
    case 'GetCustomer':
      return data.Customer?.map(c => ({
        username: c.Username,
        customer_id: c.ID,
        type: c.Type,
        email_address: c.EmailAddress,
        active: c.Active === 'True',
        date_added: c.DateAdded,
        date_updated: c.DateUpdated
      })) || []
    case 'GetOrder':
      return data.Order?.map(o => ({
        order_id: o.OrderID,
        username: o.Username,
        order_total: o.GrandTotal,
        order_status: o.OrderStatus,
        order_date: o.DatePlaced,
        last_updated: o.LastUpdated
      })) || []
    case 'GetPayment':
      return data.Payment?.map(p => ({
        payment_id: p.ID,
        payment_amount: p.AmountPaid,
        payment_method: p.PaymentMethod,
        date_payment: p.DatePaid
      })) || []
    case 'GetWarehouse':
      return data.Warehouse?.map(w => ({
        warehouse_id: w.WarehouseID,
        warehouse_name: w.WarehouseName,
        is_default: w.DefaultWarehouse === 'True',
        city: w.City,
        state: w.State,
        country: w.Country
      })) || []
    case 'GetRma':
      return data.Rma?.map(r => ({
        rma_id: r.RmaID,
        rma_status: r.RmaStatus,
        rma_date: r.DateIssued,
        order_id: r.OrderID
      })) || []
    case 'GetContent':
      return data.Content?.map(c => ({
        content_id: c.ContentID,
        content_name: c.ContentName,
        content_type: c.ContentType,
        date_added: c.DatePosted,
        date_updated: c.DateUpdated
      })) || []
    case 'GetCategory':
      const normalizeDate = (str) => str === '0000-00-00 00:00:00' ? null : str
      return data.Category?.map(cat => ({
        category_id: cat.CategoryID,
        category_name: cat.CategoryName,
        parent_category_id: cat.ParentCategoryID,
        date_added: normalizeDate(cat.DatePosted),
        date_updated: normalizeDate(cat.DateUpdated)
      })) || []
    case 'GetVoucher':
      return data.Voucher?.map(v => ({
        voucher_id: v.VoucherID,
        voucher_code: v.VoucherCode,
        balance: v.Balance,
        date_added: v.DateAdded
      })) || []
    case 'GetSupplier':
      console.log('GetSupplier transform - sample data:', data.Supplier?.[0])
      return data.Supplier?.map(s => ({
        id: s.ID ? parseInt(s.ID) : null,
        supplier_id: s.SupplierID,
        supplier_reference: s.SupplierReference ? parseInt(s.SupplierReference) : null,
        lead_time_1: s.LeadTime1 ? parseInt(s.LeadTime1) : null,
        lead_time_2: s.LeadTime2 ? parseInt(s.LeadTime2) : null,
        supplier_name: s.SupplierCompany,
        contact_street1: s.SupplierStreet1,
        contact_street2: s.SupplierStreet2,
        contact_city: s.SupplierCity,
        contact_state: s.SupplierState,
        contact_postcode: s.SupplierPostcode,
        contact_country: s.SupplierCountry,
        email: s.SupplierEmail,
        phone: s.SupplierPhone,
        fax: s.SupplierFax,
        website: s.SupplierURL,
        export_template: s.ExportTemplate,
        currency_code: s.SupplierCurrencyCode,
        account_code: s.AccountCode,
        factory_street1: s.FactoryStreet1,
        factory_street2: s.FactoryStreet2,
        factory_city: s.FactoryCity,
        factory_state: s.FactoryState,
        factory_postcode: s.FactoryPostcode,
        factory_country: s.FactoryCountry,
        notes: s.SupplierNotes,
        date_added: s.DateAdded || null,
        date_updated: s.DateUpdated || null
      })) || []
    default:
      return []
  }
}

export async function upsertData(supabase, table, conflictColumn, rows) {
  if (!rows.length) return { count: 0 }
  const { error, data, count } = await supabase
    .from(table)
    .upsert(rows, { onConflict: conflictColumn })
    .select('*', { count: 'exact' })
  if (error) throw error
  return { count }
} 