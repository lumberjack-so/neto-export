# Neto Export - Quick Reference Guide

## 🚀 Quick Start Commands

### Local Development
```bash
# Clone and setup
git clone https://github.com/lumberjack-so/neto-export
cd neto-export

# Create .env.local
cat > .env.local << EOF
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-key
NETO_API_ENDPOINT=https://yourdomain.neto.com.au/do/WS/NetoAPI
NETO_API_KEY=your-neto-key
NETO_API_USERNAME=your-neto-username
EOF

# Test a function locally
supabase functions serve GetItem --env-file .env.local

# In another terminal
curl -X POST http://localhost:54321/functions/v1/GetItem
```

### Deploy to Production
```bash
# Deploy single function
supabase functions deploy GetItem --project-ref your-project-ref

# Deploy all functions
for file in *.js; do
  fn=$(basename "$file" .js)
  if [ "$fn" != "utils" ]; then
    supabase functions deploy "$fn" --project-ref your-project-ref
  fi
done

# Deploy via GitHub Actions (recommended)
git add .
git commit -m "Update functions"
git push origin main
```

---

## 📊 Function Status Overview

| Function | Status | Common Issues | Data Volume | Special Notes |
|----------|---------|---------------|-------------|---------------|
| `GetItem` | ⚠️ Needs dedup | Duplicate SKUs in batch | ~50k products | May have duplicate parent_sku in single batch |
| `GetCustomer` | ✅ Working | CPU timeout on full sync | ~35k customers | Uses pagination (500/page) |
| `GetOrder` | ✅ Working | - | Variable | Ensure unique constraint on order_id |
| `GetPayment` | ✅ Working | - | Variable | Uses pagination, deduplicates |
| `GetCategory` | ✅ Working | Zero dates fixed | ~200 categories | Handles MySQL zero dates |
| `GetContent` | ✅ Working | - | ~200 pages | Page + Limit (1000/page) |
| `GetWarehouse` | ✅ Working | - | ~10 warehouses | Small dataset |
| `GetRma` | ✅ Working | - | Variable | Returns/refunds data |
| `GetVoucher` | ❌ Schema mismatch | Missing columns | Variable | Needs date_added, balance columns |
| `GetSupplier` | ✅ Working | - | Variable | **No Page parameter support** |
| `global_sync` | ✅ Working | - | - | Orchestrates all functions |

---

## 🔍 Testing Functions

### Manual Testing via Postman

**1. Single Function**
```
POST https://your-project.supabase.co/functions/v1/GetSupplier
Headers:
  Authorization: Bearer YOUR_ANON_KEY
  Content-Type: application/json
```

**2. Global Sync**
```
POST https://your-project.supabase.co/functions/v1/global_sync
Headers:
  Authorization: Bearer YOUR_ANON_KEY
  Content-Type: application/json
```

### Testing Neto API Directly

**GetSupplier Example (Working):**
```
POST https://yourdomain.neto.com.au/do/WS/NetoAPI
Headers:
  NETOAPI_ACTION: GetSupplier
  NETOAPI_KEY: your-key
  Accept: application/json
  Content-Type: application/json

Body:
{
  "Filter": {
    "Limit": 10000,
    "OutputSelector": ["SupplierID", "SupplierCompany", "SupplierEmail", ...]
  }
}
```
⚠️ **Note**: Do NOT include `Page` parameter for GetSupplier!

**GetCustomer Example (With Pagination):**
```
Body:
{
  "Filter": {
    "Page": 1,
    "Limit": 1000,
    "OutputSelector": ["Username", "EmailAddress", ...]
  }
}
```

---

## 🛠️ Common SQL Fixes

### Create All Tables (Fresh Install)
```sql
-- Run each table creation script in order:
-- 1. sql/create_supplier_table_complete.sql
-- 2. Create other tables as needed
```

### Add Missing Constraints
```sql
-- For "ON CONFLICT" errors
ALTER TABLE orders ADD CONSTRAINT unique_order_id UNIQUE (order_id);
ALTER TABLE payment ADD CONSTRAINT unique_payment_id UNIQUE (payment_id);
ALTER TABLE warehouse ADD CONSTRAINT unique_warehouse_id UNIQUE (warehouse_id);
ALTER TABLE rma ADD CONSTRAINT unique_rma_id UNIQUE (rma_id);
ALTER TABLE content ADD CONSTRAINT unique_content_id UNIQUE (content_id);
ALTER TABLE category ADD CONSTRAINT unique_category_id UNIQUE (category_id);
-- supplier already has PRIMARY KEY on supplier_id

-- Check existing constraints
SELECT 
  tc.constraint_name, 
  tc.table_name, 
  kcu.column_name
FROM information_schema.table_constraints tc
JOIN information_schema.key_column_usage kcu 
  ON tc.constraint_name = kcu.constraint_name
WHERE tc.constraint_type IN ('PRIMARY KEY', 'UNIQUE')
  AND tc.table_schema = 'public'
ORDER BY tc.table_name;
```

### Fix Voucher Table
```sql
-- Add missing columns to voucher table
ALTER TABLE voucher 
ADD COLUMN IF NOT EXISTS date_added TIMESTAMP,
ADD COLUMN IF NOT EXISTS balance DECIMAL(10,2);
```

### Check Table Existence
```sql
-- List all tables
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;

-- Check specific table columns
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'supplier'
ORDER BY ordinal_position;
```

---

## 🐛 Troubleshooting Checklist

### Function Returns Success but 0 Inserts

1. **Check if NETO_API_KEY is set**
   ```bash
   # In Supabase Dashboard > Settings > Edge Functions > Secrets
   # Ensure NETO_API_KEY exists
   ```

2. **Verify API Response**
   - Check logs for "Raw API response"
   - Empty string `"Supplier":""` means no data matched filters
   - Array `"Supplier":[]` means end of pagination

3. **Check Filter Parameters**
   - GetSupplier: NO Page parameter!
   - GetCustomer/GetOrder/GetPayment: Use Page parameter
   - Some endpoints need date ranges

4. **Verify Table Exists**
   ```sql
   SELECT EXISTS (
     SELECT FROM information_schema.tables 
     WHERE table_name = 'supplier'
   );
   ```

### Pagination Quirks by Endpoint

| Endpoint | Supports Page? | Notes |
|----------|---------------|--------|
| GetItem | Yes | Use Page + Limit |
| GetCustomer | Yes | Page starts at 0 |
| GetOrder | Yes | Use date filters |
| GetPayment | Yes | Page starts at 0 + deduplication |
| GetSupplier | **NO** | Use Limit only! |
| GetCategory | No | Small dataset |
| GetContent | Yes | Page + Limit |

### Common Errors & Solutions

| Error | Cause | Solution |
|-------|-------|----------|
| `"Supplier":""` | No data or wrong filter | Remove Page parameter for GetSupplier |
| `ON CONFLICT specification` | Missing unique constraint | Add PRIMARY KEY or UNIQUE constraint |
| `column does not exist` | Schema mismatch | Run migration script |
| `CPU time exceeded` | Too much data | Reduce PAGE_SIZE or Limit |
| `0000-00-00 00:00:00` | MySQL zero dates | Already handled in utils.js |
| `upsertData is not a function` | Wrong parameter order | Fixed in latest version |

---

## 📝 Quick Fixes

### Deploy All Functions
```bash
# One-liner to deploy everything
PROJECT_REF=your-ref && for f in Get*.js global_sync.js; do echo "Deploying $f..." && supabase functions deploy "${f%.js}" --project-ref $PROJECT_REF; done
```

### Check Function Logs
```bash
# Recent logs
supabase functions logs GetSupplier --project-ref your-ref --tail

# Specific time range
supabase functions logs GetSupplier --project-ref your-ref --since 1h
```

### Reset Table Data
```sql
-- BE CAREFUL - This deletes all data!
TRUNCATE TABLE supplier RESTART IDENTITY CASCADE;

-- Safer: Delete old data
DELETE FROM supplier WHERE date_added < NOW() - INTERVAL '90 days';
```

---

## 🔑 Environment Variables Reference

| Variable | Where Used | Example | Required |
|----------|------------|---------|----------|
| `SUPABASE_URL` | Edge Functions | `https://abc.supabase.co` | ✅ |
| `SUPABASE_SERVICE_ROLE_KEY` | Edge Functions | `eyJ...` (JWT) | ✅ |
| `NETO_API_ENDPOINT` | utils.js (hardcoded) | `https://domain.neto.com.au/do/WS/NetoAPI` | ❌ |
| `NETO_API_KEY` | Edge Functions | `32-char string` | ✅ |
| `NETO_API_USERNAME` | Edge Functions | Usually same as API key | ❌ |
| `SUPABASE_ACCESS_TOKEN` | GitHub Actions | `sbp_...` | ✅ (for CI/CD) |
| `PROJECT_REF` | GitHub Actions | `20-char string` | ✅ (for CI/CD) |

---

## 📈 Performance Benchmarks

| Function | Records | Time | Memory | Notes |
|----------|---------|------|---------|-------|
| GetItem | 1,000 | ~5s | Low | Needs deduplication |
| GetCustomer | 500/page | ~4s/page | Medium | ~70 pages total |
| GetOrder | 100 | ~3s | Low | Complex nested data |
| GetSupplier | All | ~6s | Low | No pagination |
| GetCategory | All (~200) | ~2s | Low | Small dataset |
| global_sync | All | ~5min | - | Sequential execution |

---

## 🚨 Emergency Procedures

### Function Stuck/Hanging
```bash
# Check function status
supabase functions list --project-ref your-ref

# Force redeploy
supabase functions deploy GetSupplier --project-ref your-ref

# Check for errors
supabase functions logs GetSupplier --project-ref your-ref --tail
```

### API Key Compromised
1. Go to Neto Admin Panel
2. Regenerate API Key
3. Update in Supabase: `Settings > Edge Functions > Secrets`
4. Redeploy all functions

### Rollback Deployment
```bash
# Via GitHub
git revert HEAD
git push origin main

# Manual previous version
git checkout HEAD~1 -- GetSupplier.js
git commit -m "Revert GetSupplier to previous version"
git push origin main
```

---

## 💡 Pro Tips

1. **Always check logs first** - Most issues are visible in function logs
2. **Test with small limits** - Use `Limit: 10` when debugging
3. **GetSupplier is special** - Remember: NO Page parameter!
4. **Batch operations** - global_sync can timeout, run individual functions if needed
5. **Monitor quotas** - Check Supabase dashboard for usage
6. **Use SQL transactions** - For data consistency when doing manual fixes

---

## 📞 Useful Links

- [Neto API Documentation](https://developers.maropost.com/documentation/engineers/api-documentation/)
- [Supabase Edge Functions](https://supabase.com/docs/guides/functions)
- [Project Repository](https://github.com/lumberjack-so/neto-export)
- [Supabase Dashboard](https://app.supabase.com)

---

## 🎯 Quick Wins

- **GetSupplier working?** Just remove `Page` from the filter!
- **Need all suppliers?** Set `Limit: 10000` (or higher)
- **CPU timeout?** Reduce PAGE_SIZE to 500
- **Duplicate key errors?** Run deduplication before upsert
- **Missing data?** Check OutputSelector includes all fields 