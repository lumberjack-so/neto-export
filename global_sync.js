// Edge Function: global_sync -> triggers all Neto endpoint functions concurrently
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
const FUNCTIONS_URL = `${SUPABASE_URL}/functions/v1`

// List of function slugs to trigger
const functionSlugs = [
  'GetItem',
  'GetCustomer',
  'GetOrder',
  'GetPayment',
  'GetWarehouse',
  'GetRma',
  'GetContent',
  'GetCategory',
  'GetVoucher'
]

async function triggerFunction(slug) {
  try {
    const res = await fetch(`${FUNCTIONS_URL}/${slug}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SERVICE_KEY}`,
        'Content-Type': 'application/json'
      },
      // empty body sufficient
    })
    const json = await res.json().catch(() => ({}))
    return { slug, status: res.status, body: json, ok: res.ok }
  } catch (error) {
    return { slug, error: error.message, ok: false }
  }
}

serve(async () => {
  const promises = functionSlugs.map(triggerFunction)
  const results = await Promise.all(promises)
  return new Response(JSON.stringify({ success: true, results }), { headers: { 'Content-Type': 'application/json' } })
}) 