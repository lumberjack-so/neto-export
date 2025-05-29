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
11. [Adding New Endpoints](#adding-new-endpoints)
12. [Performance Considerations](#performance-considerations)
13. [Security & Environment Variables](#security--environment-variables)

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

### Core Design Principles

1. **Modular Functions**: Each Neto entity (products, customers, orders) has its own Edge Function.
2. **Shared Utilities**: Common logic (API calls, transformations) lives in `utils.js`.
3. **Paginated Fetching**: Handle large datasets without hitting memory/CPU limits.
4. **Upsert Strategy**: Use PostgreSQL's ON CONFLICT to handle updates gracefully.
5. **Error Resilience**: Individual function failures don't break the entire sync.

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
│ - Categories    │                      │ - (etc...)       │
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
                                         │ - (etc...)       │
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
│  │ GetOrder.js │ ─────────► │ • normalizeDate()         │ │
│  └─────────────┘            └────────────────────────────┘ │
│        ...                                                  │
└─────────────────────────────────────────────────────────────┘
```

### Why Edge Functions?

1. **Serverless**: No infrastructure to manage, scales automatically.
2. **Geographic Distribution**: Runs close to your users (though for this use case, it's more about the reliability).
3. **Built-in Authentication**: Integrates seamlessly with Supabase RLS and auth.
4. **Cost Effective**: Pay only for execution time.
5. **Native Deno Runtime**: Modern JavaScript/TypeScript with built-in security.

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
```

#### 3. **Neto API Request**
```javascript
// Paginated fetching pattern:
while (true) {
  const response = await callNetoAPI(endpoint, {
    Filter: {
      ...baseFilter,
      Page: currentPage,
      Limit: PAGE_SIZE  // Usually 500-1000
    }
  })
  // Process batch...
  if (no more data) break
  currentPage++
}
```

#### 4. **Data Transformation**
```javascript
// Raw Neto format → Clean database format
const transformed = transformData('GetItem', netoResponse)
// Example: {ItemID: "SKU123"} → {parent_sku: "SKU123"}
```

#### 5. **Database Upsert**
```javascript
const { count, error } = await supabase
  .from(tableName)
  .upsert(rows, {
    onConflict: 'unique_column',  // e.g., 'parent_sku'
    count: 'exact'
  })
```

#### 6. **Response**
```javascript
return new Response(
  JSON.stringify({ 
    success: true, 
    inserted: totalCount,
    errors: errorList 
  }),
  { headers: { 'Content-Type': 'application/json' } }
)
```

### Data Transformation Examples

**Neto Item → Supabase item table:**
```javascript
// Neto format
{
  "ItemID": "WIDGET-001",
  "ItemName": "Blue Widget",
  "RRP": "29.99",
  "DateAdded": "2024-01-15 10:30:00"
}

// Transformed to
{
  "parent_sku": "WIDGET-001",
  "item_name": "Blue Widget", 
  "rrp": 29.99,  // String → Number
  "date_added": "2024-01-15T10:30:00Z"  // Normalized timestamp
}
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
NETO_API_ENDPOINT=https://yourdomain.neto.com.au/do/WS/NetoAPI
NETO_API_KEY=YOUR_NETO_API_KEY
NETO_API_USERNAME=YOUR_USERNAME  # Often same as key

# Required for GitHub Actions
SUPABASE_ACCESS_TOKEN=sbp_...  # Personal access token
PROJECT_REF=your-project-ref
```

---

## 5. Core Components Deep Dive

### utils.js - The Shared Brain

This is the heart of the system, providing:

#### 1. **Supabase Client Factory**
```javascript
export function initSupabase() {
  return createClient(
    Deno.env.get('SUPABASE_URL'),
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  )
}
```
- Uses service role key for full database access
- Bypasses Row Level Security (RLS)
- Single source of truth for client configuration

#### 2. **Neto API Wrapper**
```javascript
export async function callNetoAPI(action, body = {}) {
  const headers = {
    'NETOAPI_ACTION': action,
    'NETOAPI_KEY': Deno.env.get('NETO_API_KEY'),
    'NETOAPI_USERNAME': Deno.env.get('NETO_API_USERNAME'),
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  })
  
  return response.json()
}
```
- Handles authentication headers
- Consistent error handling
- JSON serialization/deserialization

#### 3. **Data Transformation Engine**
```javascript
export function transformData(endpoint, data) {
  switch(endpoint) {
    case 'GetItem':
      return data.Item?.map(item => ({
        parent_sku: item.ItemID,
        item_name: item.ItemName,
        rrp: parseFloat(item.RRP) || 0,
        // ... field mappings
      })) || []
    
    case 'GetCustomer':
      // ... customer transformations
  }
}
```
- Centralizes all field mappings
- Handles data type conversions
- Manages null/undefined values
- Date normalization (MySQL "0000-00-00" → null)

#### 4. **Upsert Helper**
```javascript
export async function upsertData(supabase, table, rows, conflictColumn) {
  const { data, error, count } = await supabase
    .from(table)
    .upsert(rows, { 
      onConflict: conflictColumn,
      count: 'exact' 
    })
  
  if (error) throw error
  return count || 0
}
```
- Standardizes database operations
- Consistent error handling
- Returns actual insert count

### Individual Edge Functions

Each function follows this pattern:

```javascript
// 1. Import dependencies
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { initSupabase, callNetoAPI, transformData } from './utils.js'

// 2. Define constants
const endpoint = 'GetItem'
const table = 'item'
const conflictColumn = 'parent_sku'

// 3. Define filter/query parameters
const filterData = {
  Filter: {
    IsActive: true,
    OutputSelector: ['ItemID', 'ItemName', 'RRP', ...]
  }
}

// 4. Main handler
serve(async () => {
  const supabase = initSupabase()
  try {
    // Paginated fetching
    // Data transformation
    // Database upsert
    // Return success response
  } catch (error) {
    // Error handling
  }
})
```

---

## 6. Edge Functions Catalog

### Data Sync Functions

| Function | Neto Endpoint | Supabase Table | Key Field | Special Notes |
|----------|---------------|----------------|-----------|---------------|
| `GetItem.js` | GetItem | item | parent_sku | Products catalog, handles variants |
| `GetCustomer.js` | GetCustomer | customer | username | Large dataset, uses aggressive pagination |
| `GetOrder.js` | GetOrder | orders | order_id | Complex nested data |
| `GetPayment.js` | GetPayment | payment | payment_id | Links to orders |
| `GetCategory.js` | GetCategory | category | category_id | Hierarchical data |
| `GetContent.js` | GetContent | content | content_id | CMS pages |
| `GetWarehouse.js` | GetWarehouse | warehouse | warehouse_id | Inventory locations |
| `GetRma.js` | GetRma | rma | rma_id | Returns/refunds |
| `GetVoucher.js` | GetVoucher | voucher | voucher_id | Gift cards/store credit |
| `GetSupplier.js` | GetSupplier | supplier | supplier_id | Vendor/supplier management |

### Orchestration Functions

| Function | Purpose | Triggers |
|----------|---------|----------|
| `global_sync.js` | Runs all sync functions in sequence | Manual/Scheduled |

### Missing/Planned Functions

Based on the Neto API docs in your `/docs` folder:

1. **Shipping Methods** (`GetShippingMethods`) - Shipping options
2. **Currency Settings** (`GetCurrencySettings`) - Multi-currency support
3. **Accounting Integration** - QuickBooks/Xero sync

---

## 7. Database Schema & Constraints

### Required Table Structures

#### item (Products)
```sql
CREATE TABLE item (
  parent_sku TEXT PRIMARY KEY,
  item_name TEXT,
  rrp DECIMAL(10,2),
  cost_price DECIMAL(10,2),
  sell_price DECIMAL(10,2),
  date_added TIMESTAMP,
  date_updated TIMESTAMP,
  is_active BOOLEAN DEFAULT true,
  description TEXT,
  weight DECIMAL(10,3),
  -- ... other fields
);

CREATE UNIQUE INDEX idx_item_parent_sku ON item(parent_sku);
```

#### customer
```sql
CREATE TABLE customer (
  username TEXT PRIMARY KEY,
  email TEXT UNIQUE,
  first_name TEXT,
  last_name TEXT,
  company TEXT,
  phone TEXT,
  date_added TIMESTAMP,
  date_updated TIMESTAMP,
  is_active BOOLEAN DEFAULT true,
  -- ... other fields
);

CREATE UNIQUE INDEX idx_customer_username ON customer(username);
CREATE INDEX idx_customer_email ON customer(email);
```

#### orders
```sql
CREATE TABLE orders (
  order_id TEXT PRIMARY KEY,
  customer_username TEXT REFERENCES customer(username),
  order_date TIMESTAMP,
  order_status TEXT,
  grand_total DECIMAL(10,2),
  shipping_total DECIMAL(10,2),
  tax_total DECIMAL(10,2),
  -- ... other fields
);

CREATE UNIQUE INDEX idx_orders_order_id ON orders(order_id);
CREATE INDEX idx_orders_customer ON orders(customer_username);
CREATE INDEX idx_orders_date ON orders(order_date);
```

#### supplier
```sql
CREATE TABLE supplier (
  supplier_id TEXT PRIMARY KEY,
  supplier_reference INTEGER,
  supplier_name TEXT NOT NULL,
  contact_street1 TEXT,
  contact_street2 TEXT,
  contact_city TEXT,
  contact_state TEXT,
  contact_postcode TEXT,
  contact_country TEXT,
  phone TEXT,
  fax TEXT,
  website TEXT,
  email TEXT,
  currency_code TEXT,
  notes TEXT,
  date_added TIMESTAMP,
  date_updated TIMESTAMP,
  -- ... other fields
);

CREATE UNIQUE INDEX idx_supplier_id ON supplier(supplier_id);
CREATE INDEX idx_supplier_name ON supplier(supplier_name);
CREATE INDEX idx_supplier_email ON supplier(email);
```

### Critical Constraints

Each table MUST have either:
1. **PRIMARY KEY** on the conflict column, OR
2. **UNIQUE constraint** on the conflict column

Without these, the `ON CONFLICT` clause in upserts will fail with:
```
there is no unique or exclusion constraint matching the ON CONFLICT specification
```

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

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      # 1. Checkout code
      - uses: actions/checkout@v3
      
      # 2. Install Supabase CLI
      - uses: supabase/setup-cli@v1
        with:
          version: 2.x.x
      
      # 3. Build function structure
      # For each *.js file (except utils.js):
      #   - Create supabase/functions/{name}/
      #   - Copy function as index.ts
      #   - Copy utils.js
      
      # 4. Deploy each function
      # supabase functions deploy {name} \
      #   --project-ref $PROJECT_REF
```

### Manual Deployment

```bash
# Local development
supabase functions serve GetItem

# Deploy single function
supabase functions deploy GetItem \
  --project-ref your-project-ref

# Deploy all functions
for fn in *.js; do
  name=$(basename "$fn" .js)
  if [ "$name" != "utils" ]; then
    supabase functions deploy "$name" \
      --project-ref your-project-ref
  fi
done
```

---

## 9. Development Workflow

### Setting Up Local Development

1. **Clone Repository**
```bash
git clone https://github.com/your-org/neto-export
cd neto-export
```

2. **Install Supabase CLI**
```bash
npm install -g supabase
```

3. **Set Environment Variables**
```bash
# .env.local
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...
NETO_API_ENDPOINT=https://yourdomain.neto.com.au/do/WS/NetoAPI
NETO_API_KEY=staging-key
NETO_API_USERNAME=staging-username
```

4. **Test Locally**
```bash
# Serve function locally
supabase functions serve GetItem --env-file .env.local

# In another terminal, test it
curl -X POST http://localhost:54321/functions/v1/GetItem \
  -H "Authorization: Bearer $SUPABASE_ANON_KEY" \
  -H "Content-Type: application/json"
```

### Development Best Practices

1. **Test with Small Datasets First**
   - Modify `Limit` in filter to 10-50 items
   - Verify transformations are correct
   - Check database constraints

2. **Use Console Logging**
```javascript
console.log('Fetched', items.length, 'items from Neto')
console.log('Transformed data sample:', rows.slice(0, 2))
```

3. **Handle Errors Gracefully**
```javascript
try {
  // Main logic
} catch (error) {
  console.error('Function failed:', error)
  return new Response(
    JSON.stringify({ 
      success: false, 
      error: error.message,
      stack: error.stack  // Only in dev!
    }),
    { status: 500 }
  )
}
```

4. **Monitor Performance**
```javascript
const startTime = Date.now()
// ... operation ...
const duration = Date.now() - startTime
console.log(`Operation took ${duration}ms`)
```

---

## 10. Common Issues & Solutions

### Issue: "ON CONFLICT specification" Error

**Error:**
```
there is no unique or exclusion constraint matching the ON CONFLICT specification
```

**Cause:** Table missing UNIQUE constraint on conflict column

**Solution:**
```sql
-- Add unique constraint
ALTER TABLE your_table 
ADD CONSTRAINT unique_your_column 
UNIQUE (your_column);
```

### Issue: "Could not find column in schema cache"

**Error:**
```
Could not find the 'column_name' column of 'table' in the schema cache
```

**Cause:** 
- Column doesn't exist in table
- PostgREST schema cache is outdated

**Solution:**
```sql
-- Option 1: Add missing column
ALTER TABLE your_table 
ADD COLUMN column_name TEXT;

-- Option 2: Remove from transformation
// In utils.js, remove the field from mapping
```

### Issue: CPU Time Exceeded (546 Error)

**Error:**
```
Function failed due to not having enough compute resources
```

**Cause:** Processing too much data at once

**Solution:**
```javascript
// Reduce page size
const PAGE_SIZE = 500  // Down from 1000

// Add delays between pages
await new Promise(resolve => setTimeout(resolve, 100))
```

### Issue: Date/Time Out of Range

**Error:**
```
date/time field value out of range: "0000-00-00 00:00:00"
```

**Cause:** MySQL zero dates incompatible with PostgreSQL

**Solution:**
```javascript
// In transformData()
const normalizeDate = (date) => {
  if (!date || date === '0000-00-00 00:00:00') return null
  return date
}
```

### Issue: Duplicate Key Violations

**Error:**
```
ON CONFLICT DO UPDATE command cannot affect row a second time
```

**Cause:** Same key appears multiple times in single upsert

**Solution:**
```javascript
// Deduplicate before upserting
const unique = rows.filter((row, index, self) =>
  index === self.findIndex(r => r.parent_sku === row.parent_sku)
)
```

---

## 11. Adding New Endpoints

### Step-by-Step Guide

#### 1. Research Neto API Documentation
```bash
# Check docs folder
cat docs/developers.maropost.com_documentation_engineers_api-documentation_[endpoint].md
```

#### 2. Create Edge Function File
```bash
# Create new function
touch GetSupplier.js
```

#### 3. Implement Function
```javascript
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { initSupabase, callNetoAPI, transformData, upsertData } from './utils.js'

const endpoint = 'GetSupplier'
const table = 'supplier'
const conflictColumn = 'supplier_id'

const filterData = {
  Filter: {
    Active: true,
    OutputSelector: [
      'SupplierID',
      'SupplierName',
      'ContactName',
      'Email',
      // ... fields from API docs
    ]
  }
}

serve(async () => {
  const supabase = initSupabase()
  
  try {
    const { Supplier = [] } = await callNetoAPI(endpoint, filterData)
    const rows = transformData(endpoint, { Supplier })
    const count = await upsertData(supabase, table, rows, conflictColumn)
    
    return new Response(
      JSON.stringify({ success: true, inserted: count }),
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

#### 4. Add Transformation Logic
```javascript
// In utils.js transformData()
case 'GetSupplier':
  return data.Supplier?.map(s => ({
    supplier_id: s.SupplierID,
    supplier_name: s.SupplierName,
    contact_name: s.ContactName,
    email: s.Email,
    // ... map all fields
  })) || []
```

#### 5. Create Database Table
```sql
CREATE TABLE supplier (
  supplier_id TEXT PRIMARY KEY,
  supplier_name TEXT NOT NULL,
  contact_name TEXT,
  email TEXT,
  phone TEXT,
  date_added TIMESTAMP DEFAULT NOW(),
  date_updated TIMESTAMP DEFAULT NOW()
);

CREATE UNIQUE INDEX idx_supplier_id ON supplier(supplier_id);
```

#### 6. Update global_sync.js
```javascript
// Add to ENDPOINTS array
const ENDPOINTS = [
  'GetItem',
  'GetCustomer',
  // ...
  'GetSupplier'  // Add new endpoint
]
```

#### 7. Test Thoroughly
```bash
# Test locally first
supabase functions serve GetSupplier --env-file .env.local

# Deploy when ready
supabase functions deploy GetSupplier --project-ref your-ref
```

---

## 12. Performance Considerations

### Pagination Strategy

**Current Implementation:**
- Most functions use 500-1000 items per page
- Sequential processing (page 1, then 2, then 3...)

**Optimization Opportunities:**
```javascript
// Parallel page fetching (use with caution)
const pagePromises = []
for (let i = 1; i <= estimatedPages; i++) {
  pagePromises.push(fetchPage(i))
}
const allPages = await Promise.all(pagePromises)
```

### Memory Management

**Current Issues:**
- Large datasets can cause memory spikes
- Transforming all data before upserting

**Better Approach:**
```javascript
// Process and upsert in chunks
for (const chunk of chunks(items, 100)) {
  const transformed = transformData(endpoint, { Item: chunk })
  await upsertData(supabase, table, transformed, conflictColumn)
}
```

### CPU Usage

**Timeouts Happen When:**
- Processing > 50,000 records
- Complex transformations
- No pagination

**Solutions:**
1. Reduce page size
2. Add delays between operations
3. Simplify transformations
4. Use database views for complex logic

### Database Optimization

```sql
-- Add indexes for common queries
CREATE INDEX idx_orders_date ON orders(order_date);
CREATE INDEX idx_item_active ON item(is_active) WHERE is_active = true;

-- Partition large tables
CREATE TABLE orders_2024 PARTITION OF orders
FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');

-- Regular maintenance
VACUUM ANALYZE item;
REINDEX TABLE customer;
```

---

## 13. Security & Environment Variables

### Security Best Practices

1. **Never Commit Secrets**
```bash
# .gitignore
.env
.env.local
*.key
```

2. **Use Service Role Key Carefully**
- Only in Edge Functions
- Never expose to client
- Rotate regularly

3. **Validate Input**
```javascript
// Even though these are internal functions
if (!endpoint || typeof endpoint !== 'string') {
  throw new Error('Invalid endpoint')
}
```

4. **Log Sanitization**
```javascript
// Don't log sensitive data
console.log('Processing customer:', username)  // OK
console.log('Customer data:', customerData)    // BAD - might contain PII
```

### Environment Management

**Local Development (.env.local):**
```bash
SUPABASE_URL=http://localhost:54321
SUPABASE_SERVICE_ROLE_KEY=local-dev-key
NETO_API_ENDPOINT=https://staging.neto.com.au/do/WS/NetoAPI
NETO_API_KEY=staging-key
```

**Production (GitHub Secrets):**
- `SUPABASE_ACCESS_TOKEN`: For CLI operations
- `PROJECT_REF`: Target Supabase project
- Never store production keys in code

**Supabase Dashboard:**
- Edge Function secrets
- Accessible via Dashboard > Settings > Edge Functions

---

## Conclusion

This Neto Export system is a robust, scalable solution for syncing e-commerce data from Neto to Supabase. While it has some rough edges (data inconsistencies, missing endpoints), the architecture is sound and extensible.

**Key Strengths:**
- Modular design makes adding endpoints easy
- Pagination handles large datasets
- Error handling prevents cascade failures
- Automated deployment via GitHub Actions

**Areas for Improvement:**
- Add retry logic for failed requests
- Implement webhook support for real-time updates
- Add data validation before upserts
- Create monitoring/alerting system
- Build admin UI for manual syncs

**Next Steps for New Developers:**
1. Set up local environment
2. Run a few manual syncs to understand data flow
3. Check database constraints match code expectations
4. Add missing Supplier endpoint
5. Implement better error tracking

Remember: This system touches critical business data. Always test thoroughly in a staging environment before deploying changes to production. 