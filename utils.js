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

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`API call failed (${response.status}): ${text}`)
  }
  return await response.json()
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
    default:
      return []
  }
}

export async function upsertData(supabase, table, conflictColumn, rows) {
  if (!rows.length) return { count: 0 }
  const { error, count } = await supabase.from(table).upsert(rows, { onConflict: conflictColumn })
  if (error) throw error
  return { count }
} 