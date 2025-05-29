# Neto Export - Complete Technical Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture & System Design](#architecture--system-design)
3. [Data Flow - The Complete Journey](#data-flow---the-complete-journey)
4. [Technical Stack & Dependencies](#technical-stack--dependencies)
5. [Core Components Deep Dive](#core-components-deep-dive)
6. [Edge Functions Catalog](#edge-functions-catalog)
7. [Database Schema & Constraints](#database-schema--constraints)
8. [Deployment Pipeline](#deployment-pipeline)
9. [Development Workflow](#development-workflow)
10. [Common Issues & Solutions](#common-issues--solutions)
11. [API Quirks & Special Cases](#api-quirks--special-cases)
12. [Performance Considerations](#performance-considerations)
13. [Security & Environment Variables](#security--environment-variables)
14. [Adding New Endpoints](#adding-new-endpoints)

---

## 1. Project Overview

### What is Neto Export?

Neto Export is a **data synchronization system** that continuously pulls e-commerce data from the [Neto/Maropost Commerce Cloud](https://www.netohq.com/) platform and syncs it to a Supabase PostgreSQL database. It's built as a collection of Supabase Edge Functions that can be triggered on-demand or scheduled to maintain an up-to-date mirror of your Neto store data.

### Why Does This Exist?

**Business Reasons:**
- **Real-time Analytics**: Neto's built-in reporting is limited. Having data in Supabase enables complex SQL queries, custom dashboards, and integration with BI tools.
- **Data Warehousing**: Create a unified data lake combining Neto data with other business systems.
- **API Performance**: Neto's API can be slow for complex queries. Having a local mirror enables instant queries.
- **Backup & Compliance**: Maintain an independent backup of critical business data.
- **Custom Integrations**: Build features Neto doesn't support natively by working with the mirrored data.

**Technical Reasons:**
- **Rate Limit Management**: Batch operations to respect Neto's API limits.
- **Data Transformation**: Clean and normalize Neto's sometimes inconsistent data structures.
- **Decoupling**: Applications can query Supabase without depending on Neto's availability.
- **Pagination Handling**: Different Neto endpoints have different pagination behaviors.

### Core Design Principles

1. **Modular Functions**: Each Neto entity (products, customers, orders) has its own Edge Function.
2. **Shared Utilities**: Common logic (API calls, transformations) lives in `utils.js`.
3. **Flexible Pagination**: Handle different pagination strategies per endpoint.
4. **Upsert Strategy**: Use PostgreSQL's ON CONFLICT to handle updates gracefully.
5. **Error Resilience**: Individual function failures don't break the entire sync.
6. **Comprehensive Logging**: Detailed logging for debugging API issues.

---

## 2. Architecture & System Design

### High-Level Architecture

```
┌─────────────────┐     HTTPS/JSON      ┌──────────────────┐
│   Neto Cloud    │ ◄─────────────────► │ Supabase Edge    │
│   (Source)      │                      │ Functions        │
│                 │                      │                  │
│ - Products      │                      │ - GetItem.js     │
│ - Customers     │                      │ - GetCustomer.js │
│ - Orders        │                      │ - GetOrder.js    │
│ - Payments      │                      │ - GetPayment.js  │
│ - Categories    │                      │ - GetCategory.js │
│ - Suppliers     │                      │ - GetSupplier.js │
│ - etc...        │                      │ - global_sync.js │
└─────────────────┘                      └────────┬─────────┘
                                                  │
                                                  │ SQL Upserts
                                                  ▼
                                         ┌──────────────────┐
                                         │ Supabase DB      │
                                         │ (PostgreSQL)     │
                                         │                  │
                                         │ Tables:          │
                                         │ - item           │
                                         │ - customer       │
                                         │ - orders         │
                                         │ - payment        │
                                         │ - supplier       │
                                         │ - etc...         │
                                         └──────────────────┘
```

### Component Interaction

```
┌─────────────────────────────────────────────────────────────┐
│                     Edge Function Runtime                    │
│                                                              │
│  ┌─────────────┐    uses    ┌────────────────────────────┐ │
│  │ GetItem.js  │ ─────────► │       utils.js             │ │
│  └─────────────┘            │                            │ │
│  ┌─────────────┐            │ • initSupabase()          │ │
│  │GetCustomer.js│ ─────────► │ • callNetoAPI()           │ │
│  └─────────────┘            │ • transformData()         │ │
│  ┌─────────────┐            │ • upsertData()            │ │
│  │GetSupplier.js│ ─────────► │ • Date normalization      │ │
│  └─────────────┘            └────────────────────────────┘ │
│        ...                                                  │
└─────────────────────────────────────────────────────────────┘
```

### Why Edge Functions?

1. **Serverless**: No infrastructure to manage, scales automatically.
2. **Built-in Authentication**: Integrates seamlessly with Supabase RLS and auth.
3. **Cost Effective**: Pay only for execution time.
4. **Native Deno Runtime**: Modern JavaScript/TypeScript with built-in security.
5. **Environment Secrets**: Secure storage for API keys.

---

## 3. Data Flow - The Complete Journey

### Step-by-Step Data Flow

#### 1. **Trigger** 
```
External Trigger → Edge Function
   │
   ├─ Manual: HTTP POST to function URL
   ├─ Scheduled: Cron job (external scheduler)
   ├─ Webhook: Neto event triggers sync
   └─ Global Sync: Orchestrator function
```

#### 2. **Authentication & Initialization**
```javascript
// Each function starts by:
const supabase = initSupabase()  // Creates authenticated Supabase client
// Uses env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

// Check API key exists
const apiKey = Deno.env.get('NETO_API_KEY')
if (!apiKey) {
  return error response
}
```

#### 3. **Neto API Request**

Different pagination strategies per endpoint:

**Paginated Endpoints (GetCustomer, GetOrder, GetPayment):**
```javascript
while (true) {
  const response = await callNetoAPI(endpoint, {
    Filter: {
      ...baseFilter,
      Page: currentPage,
      Limit: PAGE_SIZE  // Usually 500-1000
    }
  })
  if (no more data) break
  currentPage++
}
```

**Non-Paginated Endpoints (GetSupplier):**
```javascript
// GetSupplier doesn't support Page parameter!
const response = await callNetoAPI(endpoint, {
  Filter: {
    Limit: 10000,  // High limit to get all
    OutputSelector: [...]
  }
})
```

#### 4. **Data Transformation**
```javascript
// Raw Neto format → Clean database format
const transformed = transformData('GetItem', netoResponse)
// Handles:
// - Field name mapping
// - Data type conversions
// - MySQL zero date normalization
// - Boolean string conversions
```

#### 5. **Database Upsert**
```javascript
// Deduplication (if needed)
const unique = rows.filter((row, index, self) =>
  index === self.findIndex(r => r.supplier_id === row.supplier_id)
)

// Upsert with proper parameter order
const { count } = await upsertData(supabase, table, conflictColumn, unique)
```

#### 6. **Response**
```javascript
return new Response(
  JSON.stringify({ 
    success: true, 
    inserted: totalCount,
    message: additionalInfo 
  }),
  { headers: { 'Content-Type': 'application/json' } }
)
```

---

## 4. Technical Stack & Dependencies

### Runtime Environment
- **Deno 1.x**: Secure JavaScript/TypeScript runtime
- **Supabase Edge Runtime**: Modified Deno with Supabase-specific features
- **V8 Isolates**: Each function runs in isolated context

### Core Dependencies
```javascript
// From Deno standard library
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

// Supabase client
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
```

### Environment Variables
```bash
# Required for Edge Functions
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...  # Full database access

# Required for Neto API
NETO_API_KEY=YOUR_NETO_API_KEY  # 32-character key
# NETO_API_ENDPOINT is hardcoded in utils.js
# NETO_API_USERNAME not currently used

# Required for GitHub Actions
SUPABASE_ACCESS_TOKEN=sbp_...  # Personal access token
PROJECT_REF=your-project-ref    # 20-character project ID
```

---

## 5. Core Components Deep Dive

### utils.js - The Shared Brain

This is the heart of the system, providing:

#### 1. **Supabase Client Factory**
```javascript
export const initSupabase = () => {
  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  return createClient(supabaseUrl, supabaseKey)
}
```
- Uses service role key for full database access
- Bypasses Row Level Security (RLS)
- Single source of truth for client configuration

#### 2. **Neto API Wrapper**
```javascript
const NETO_API_URL = 'https://timberbits.com/do/WS/NetoAPI'  // Hardcoded
const NETO_API_KEY = Deno.env.get('NETO_API_KEY')

export async function callNetoAPI(action, filterData) {
  // Comprehensive logging for debugging
  console.log(`Calling Neto API: ${action}`)
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
  
  // Log response details
  console.log('Response status:', response.status)
  
  if (!response.ok) {
    const text = await response.text()
    console.error('API error response:', text)
    throw new Error(`API call failed (${response.status}): ${text}`)
  }
  
  const jsonResponse = await response.json()
  console.log('Response JSON preview:', JSON.stringify(jsonResponse).substring(0, 200))
  
  return jsonResponse
}
```

#### 3. **Data Transformation Engine**
```javascript
export function transformData(endpoint, data) {
  switch(endpoint) {
    case 'GetItem':
      return data.Item?.map(item => ({
        parent_sku: item.ParentSKU,
        item_id: item.ID,
        brand: item.Brand,
        // Boolean conversions
        virtual: item.Virtual === 'True',
        approved: item.Approved === 'True',
        is_active: item.IsActive === 'True',
        // JSON serialization for complex fields
        price_groups: item.PriceGroups ? JSON.stringify(item.PriceGroups) : null,
        // Direct mappings
        date_added: item.DateAdded,
        date_updated: item.DateUpdated
      })) || []
    
    case 'GetCategory':
      // Special date handling for MySQL zero dates
      const normalizeDate = (str) => str === '0000-00-00 00:00:00' ? null : str
      return data.Category?.map(cat => ({
        category_id: cat.CategoryID,
        category_name: cat.CategoryName,
        parent_category_id: cat.ParentCategoryID,
        date_added: normalizeDate(cat.DatePosted),
        date_updated: normalizeDate(cat.DateUpdated)
      })) || []
    
    case 'GetSupplier':
      console.log('GetSupplier transform - sample data:', data.Supplier?.[0])
      return data.Supplier?.map(s => ({
        id: s.ID ? parseInt(s.ID) : null,
        supplier_id: s.SupplierID,
        supplier_reference: s.SupplierReference ? parseInt(s.SupplierReference) : null,
        lead_time_1: s.LeadTime1 ? parseInt(s.LeadTime1) : null,
        lead_time_2: s.LeadTime2 ? parseInt(s.LeadTime2) : null,
        // All address fields
        supplier_name: s.SupplierCompany,
        contact_street1: s.SupplierStreet1,
        contact_street2: s.SupplierStreet2,
        // ... etc
      })) || []
    
    // ... other endpoints
  }
}
```

#### 4. **Upsert Helper**
```javascript
export async function upsertData(supabase, table, conflictColumn, rows) {
  if (!rows.length) return { count: 0 }
  const { error, count } = await supabase
    .from(table)
    .upsert(rows, { 
      onConflict: conflictColumn,
      count: 'exact' 
    })
  if (error) throw error
  return { count }  // Returns object, not just number!
}
```

### Individual Edge Functions

#### Standard Pattern (with Pagination)
```javascript
// Example: GetCustomer.js
serve(async () => {
  const supabase = initSupabase()
  
  try {
    const PAGE_SIZE = 500  // Reduced to avoid CPU timeouts
    let page = 1
    let totalInserted = 0
    
    while (true) {
      const response = await callNetoAPI(endpoint, {
        Filter: { ...filterData.Filter, Page: page, Limit: PAGE_SIZE }
      })
      
      const { Customer = [] } = response
      if (Customer.length === 0) break
      
      const rows = transformData(endpoint, { Customer })
      const { count } = await upsertData(supabase, table, conflictColumn, rows)
      totalInserted += count || 0
      
      if (Customer.length < PAGE_SIZE) break
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
```

#### Special Pattern (No Pagination - GetSupplier)
```javascript
serve(async () => {
  const supabase = initSupabase()
  
  try {
    // GetSupplier doesn't support Page parameter!
    const response = await callNetoAPI(endpoint, filterData)
    
    const { Supplier = [] } = response
    
    // Handle empty string response
    let suppliers = []
    if (Array.isArray(Supplier)) {
      suppliers = Supplier
    } else if (Supplier === '' || !Supplier) {
      suppliers = []
    }
    
    if (suppliers.length === 0) {
      return new Response(
        JSON.stringify({ success: true, inserted: 0, message: 'No suppliers found in Neto' }),
        { headers: { 'Content-Type': 'application/json' } }
      )
    }
    
    const rows = transformData(endpoint, { Supplier: suppliers })
    const unique = rows.filter((row, index, self) =>
      index === self.findIndex(r => r.supplier_id === row.supplier_id)
    )
    
    const { count } = await upsertData(supabase, table, conflictColumn, unique)
    
    return new Response(
      JSON.stringify({ success: true, inserted: count || 0 }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    // Error handling...
  }
})
```

---

## 6. Edge Functions Catalog

### Data Sync Functions

| Function | Neto Endpoint | Supabase Table | Key Field | Pagination | Special Notes |
|----------|---------------|----------------|-----------|------------|---------------|
| `GetItem.js` | GetItem | item | parent_sku | Yes | Needs deduplication logic |
| `GetCustomer.js` | GetCustomer | customer | username | Yes | ~35k records, 500/page |
| `GetOrder.js` | GetOrder | orders | order_id | Yes | Complex nested data |
| `GetPayment.js` | GetPayment | payment | payment_id | Yes | Includes deduplication |
| `GetCategory.js` | GetCategory | category | category_id | No | Handles MySQL zero dates |
| `GetContent.js` | GetContent | content | content_id | No | Fixed limit |
| `GetWarehouse.js` | GetWarehouse | warehouse | warehouse_id | No | Small dataset |
| `GetRma.js` | GetRma | rma | rma_id | No | Returns/refunds |
| `GetVoucher.js` | GetVoucher | voucher | voucher_id | No | Schema needs fixing |
| `GetSupplier.js` | GetSupplier | supplier | supplier_id | **No** | NO Page parameter! |

### Orchestration Functions

| Function | Purpose | Execution Time | Notes |
|----------|---------|----------------|-------|
| `global_sync.js` | Runs all sync functions | ~5 minutes | Sequential execution |

### Missing/Planned Functions

1. **Shipping Methods** (`GetShippingMethods`) - Shipping options
2. **Currency Settings** (`GetCurrencySettings`) - Multi-currency support
3. **Accounting Integration** - QuickBooks/Xero sync

---

## 7. Database Schema & Constraints

### Complete Supplier Table (Example)
```sql
CREATE TABLE IF NOT EXISTS supplier (
  -- Primary keys
  id INTEGER,
  supplier_id TEXT PRIMARY KEY,
  
  -- Basic information
  supplier_reference INTEGER,
  supplier_name TEXT NOT NULL,
  
  -- Lead times
  lead_time_1 INTEGER,
  lead_time_2 INTEGER,
  
  -- Contact address
  contact_street1 TEXT,
  contact_street2 TEXT,
  contact_city TEXT,
  contact_state TEXT,
  contact_postcode TEXT,
  contact_country TEXT,
  
  -- Communication
  email TEXT,
  phone TEXT,
  fax TEXT,
  website TEXT,
  
  -- Business details
  export_template TEXT,
  currency_code TEXT,
  account_code TEXT,
  
  -- Factory address
  factory_street1 TEXT,
  factory_street2 TEXT,
  factory_city TEXT,
  factory_state TEXT,
  factory_postcode TEXT,
  factory_country TEXT,
  
  -- Notes and metadata
  notes TEXT,
  date_added TIMESTAMP,
  date_updated TIMESTAMP,
  
  -- System fields
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_supplier_name ON supplier(supplier_name);
CREATE INDEX idx_supplier_email ON supplier(email);
CREATE INDEX idx_supplier_reference ON supplier(supplier_reference);
CREATE INDEX idx_supplier_id_numeric ON supplier(id);
CREATE INDEX idx_supplier_country ON supplier(contact_country);
CREATE INDEX idx_supplier_account_code ON supplier(account_code);

-- Update trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_supplier_updated_at BEFORE UPDATE
    ON supplier FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

### Critical Constraints

Each table MUST have either:
1. **PRIMARY KEY** on the conflict column, OR
2. **UNIQUE constraint** on the conflict column

Without these, the `ON CONFLICT` clause in upserts will fail with:
```
there is no unique or exclusion constraint matching the ON CONFLICT specification
```

### Migration Scripts

For existing tables, use the migration scripts in `sql/`:
- `migrate_supplier_table.sql` - Adds missing columns safely
- `create_supplier_table_complete.sql` - Full schema for new installations

---

## 8. Deployment Pipeline

### GitHub Actions Workflow

The `.github/workflows/deploy-edge-fns.yml` automates deployment:

```yaml
name: Deploy Edge Functions
on:
  push:
    branches: [main]
  workflow_dispatch:

env:
  SUPABASE_ACCESS_TOKEN: ${{ secrets.SUPABASE_ACCESS_TOKEN }}
  PROJECT_REF: ${{ secrets.PROJECT_REF }}

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: supabase/setup-cli@v1
        with:
          version: 2.x.x
      
      # Build and deploy each function
      - name: Deploy Edge Functions (Supabase CLI v2)
        run: |
          mkdir -p supabase/functions
          
          for file in *.js; do
            fn=$(basename "$file" .js)
            if [ "$fn" = "utils" ]; then
              continue
            fi
          
            echo "Preparing function $fn"
            dir="supabase/functions/$fn"
            mkdir -p "$dir"
            cp "$file" "$dir/index.ts"
            cp utils.js "$dir/utils.js"
          
            echo "Deploying $fn"
            supabase functions deploy "$fn" \
              --project-ref "$PROJECT_REF" \
              --use-api
          done
```

### Manual Deployment

```bash
# Deploy single function
supabase functions deploy GetSupplier --project-ref your-project-ref

# Deploy all functions
for fn in Get*.js global_sync.js; do
  name="${fn%.js}"
  supabase functions deploy "$name" --project-ref your-project-ref
done
```

---

## 9. Development Workflow

### Setting Up Local Development

1. **Clone Repository**
```bash
git clone https://github.com/lumberjack-so/neto-export
cd neto-export
```

2. **Set Environment Variables**
```bash
# .env.local
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...
NETO_API_KEY=your-api-key
```

3. **Create Database Tables**
   - Run SQL scripts in Supabase Dashboard
   - Start with `sql/create_supplier_table_complete.sql`

4. **Test Locally**
```bash
# Serve function locally
supabase functions serve GetSupplier --env-file .env.local

# Test with curl
curl -X POST http://localhost:54321/functions/v1/GetSupplier \
  -H "Authorization: Bearer $SUPABASE_ANON_KEY" \
  -H "Content-Type: application/json"
```

### Development Best Practices

1. **Always Check Environment Variables**
```javascript
const apiKey = Deno.env.get('NETO_API_KEY')
if (!apiKey) {
  return error response with helpful message
}
```

2. **Use Comprehensive Logging**
```javascript
console.log('Request payload:', JSON.stringify(filterData))
console.log('Raw API response:', JSON.stringify(response).substring(0, 500))
console.log(`Found ${suppliers.length} suppliers`)
```

3. **Handle Different Response Formats**
```javascript
// Neto sometimes returns empty string instead of empty array
if (Array.isArray(Supplier)) {
  suppliers = Supplier
} else if (Supplier === '' || !Supplier) {
  suppliers = []
}
```

4. **Test with Small Datasets First**
```javascript
// During development
const filterData = {
  Filter: {
    Limit: 10,  // Small limit for testing
    OutputSelector: [...]
  }
}
```

---

## 10. Common Issues & Solutions

### Issue: "Supplier":"" (Empty String Response)

**Cause:** Wrong filter parameters, especially Page parameter for GetSupplier

**Solution:**
```javascript
// DON'T DO THIS for GetSupplier:
Filter: { Page: 1, Limit: 1000 }

// DO THIS:
Filter: { Limit: 10000 }  // No Page parameter!
```

### Issue: Parameter Order in upsertData

**Error:** `upsertData is not a function` or unexpected behavior

**Solution:**
```javascript
// WRONG:
await upsertData(supabase, table, rows, conflictColumn)

// CORRECT:
await upsertData(supabase, table, conflictColumn, rows)
```

### Issue: Return Value from upsertData

**Error:** Treating returned object as number

**Solution:**
```javascript
// WRONG:
const count = await upsertData(...)
totalInserted += count

// CORRECT:
const { count } = await upsertData(...)
totalInserted += count || 0
```

### Issue: CPU Time Exceeded

**Solution:**
1. Reduce PAGE_SIZE to 500
2. Add delays between pages
3. Process in smaller chunks

### Issue: Date/Time Out of Range

**Error:** `date/time field value out of range: "0000-00-00 00:00:00"`

**Solution:** Already handled in transformData for GetCategory:
```javascript
const normalizeDate = (str) => str === '0000-00-00 00:00:00' ? null : str
```

---

## 11. API Quirks & Special Cases

### Pagination Behavior

| Endpoint | Page Support | Empty Response | Notes |
|----------|--------------|----------------|-------|
| GetItem | ✅ Yes | `"Item": []` | Standard pagination |
| GetCustomer | ✅ Yes | `"Customer": []` | Large dataset |
| GetOrder | ✅ Yes | `"Order": []` | Use date filters |
| GetPayment | ✅ Yes | `"Payment": []` | Needs deduplication |
| GetSupplier | ❌ **NO** | `"Supplier": ""` | Returns empty string! |
| GetCategory | ❌ No | `"Category": []` | Small dataset |
| GetContent | ❌ No | `"Content": []` | Fixed limit |

### Special Filter Requirements

**GetSupplier:**
- Must NOT include Page parameter
- Returns empty string `""` instead of empty array when no data
- Use high Limit value to get all suppliers

**GetCustomer:**
- Supports standard pagination
- May timeout with large datasets
- Use PAGE_SIZE of 500 to avoid CPU limits

---

## 12. Performance Considerations

### Pagination Strategy

**For Large Datasets (GetCustomer):**
```javascript
const PAGE_SIZE = 500  // Reduced from 1000 to avoid timeouts
// Process ~35,000 customers in ~70 pages
```

**For Non-Paginated Endpoints (GetSupplier):**
```javascript
// Set high limit to get all records in one request
Filter: { Limit: 10000 }
```

### Memory Management

**Deduplication for Large Batches:**
```javascript
const unique = rows.filter((row, index, self) =>
  index === self.findIndex(r => r.supplier_id === row.supplier_id)
)
```

### Database Optimization

**Indexes for Performance:**
```sql
CREATE INDEX idx_supplier_name ON supplier(supplier_name);
CREATE INDEX idx_orders_date ON orders(order_date);
CREATE INDEX idx_customer_email ON customer(email);
```

**Regular Maintenance:**
```sql
VACUUM ANALYZE supplier;
REINDEX TABLE customer;
```

---

## 13. Security & Environment Variables

### Security Best Practices

1. **Environment Variable Management**
   - Store all secrets in Supabase Edge Functions settings
   - Never commit secrets to repository
   - Rotate API keys regularly

2. **API Key Validation**
```javascript
const apiKey = Deno.env.get('NETO_API_KEY')
if (!apiKey) {
  return new Response(
    JSON.stringify({ 
      success: false, 
      error: 'NETO_API_KEY environment variable is not set',
      hint: 'Set it in Supabase Dashboard > Settings > Edge Functions > Secrets'
    }),
    { status: 500 }
  )
}
```

3. **Service Role Key Usage**
   - Only used server-side in Edge Functions
   - Provides full database access
   - Never expose to client applications

### Setting Secrets

**Via Supabase Dashboard:**
1. Navigate to Settings → Edge Functions
2. Add secrets:
   - `NETO_API_KEY`
   - `SUPABASE_URL` (auto-set)
   - `SUPABASE_SERVICE_ROLE_KEY` (auto-set)

**Via CLI:**
```bash
supabase secrets set NETO_API_KEY=your-key --project-ref your-ref
```

---

## 14. Adding New Endpoints

### Step-by-Step Guide

#### 1. Research API Documentation
```bash
# Check docs folder for endpoint details
ls docs/ | grep -i endpoint_name
```

#### 2. Create Edge Function
```javascript
// GetNewEndpoint.js
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { initSupabase, callNetoAPI, transformData, upsertData } from './utils.js'

const endpoint = 'GetNewEndpoint'
const table = 'new_endpoint'
const conflictColumn = 'id_field'

const filterData = {
  Filter: {
    // Check if endpoint supports Page parameter!
    Limit: 1000,
    OutputSelector: [
      // List all needed fields
    ]
  }
}

serve(async () => {
  // Implementation based on pagination support
})
```

#### 3. Add Transformation Logic
```javascript
// In utils.js
case 'GetNewEndpoint':
  return data.NewEndpoint?.map(item => ({
    // Map API fields to database columns
    id_field: item.IDField,
    name: item.Name,
    // Handle data types
    amount: parseFloat(item.Amount) || 0,
    is_active: item.Active === 'True',
    // Handle dates
    date_added: item.DateAdded || null
  })) || []
```

#### 4. Create Database Table
```sql
CREATE TABLE IF NOT EXISTS new_endpoint (
  id_field TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  amount DECIMAL(10,2),
  is_active BOOLEAN DEFAULT true,
  date_added TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_new_endpoint_name ON new_endpoint(name);
```

#### 5. Update global_sync.js
```javascript
const functionSlugs = [
  // ... existing functions
  'GetNewEndpoint'
]
```

#### 6. Test Thoroughly
- Test with small Limit first
- Check logs for API response format
- Verify data transformation
- Ensure upsert works correctly

---

## Conclusion

The Neto Export system successfully synchronizes e-commerce data from Neto to Supabase, handling various API quirks and pagination strategies. Key achievements:

**✅ Implemented:**
- 10 working Edge Functions
- Flexible pagination handling
- MySQL date normalization
- Comprehensive error handling
- Automated deployment pipeline

**🔧 Needs Work:**
- GetVoucher schema mismatch
- GetItem deduplication
- Additional endpoints (Shipping, Currency)

**🎯 Best Practices:**
- Always check API response format in logs
- Remember GetSupplier doesn't support Page parameter
- Use appropriate PAGE_SIZE to avoid timeouts
- Implement deduplication where needed
- Keep comprehensive logging for debugging

This system provides a solid foundation for real-time data synchronization, enabling advanced analytics and integrations that wouldn't be possible with Neto alone. 