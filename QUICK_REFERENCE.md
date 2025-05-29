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
./deploy-all.sh

# Or manually
for file in *.js; do
  fn=$(basename "$file" .js)
  if [ "$fn" != "utils" ]; then
    supabase functions deploy "$fn" --project-ref your-project-ref
  fi
done
```

---

## 📊 Function Status Overview

| Function | Status | Common Issues | Data Volume |
|----------|---------|---------------|-------------|
| `GetItem` | ⚠️ Needs dedup | Duplicate SKUs in batch | ~50k products |
| `GetCustomer` | ✅ Working | CPU timeout on full sync | ~35k customers |
| `GetOrder` | ✅ Working | - | Variable |
| `GetPayment` | ✅ Working | - | Variable |
| `GetCategory` | ✅ Working | Zero dates fixed | ~200 categories |
| `GetContent` | ✅ Working | - | ~200 pages |
| `GetWarehouse` | ✅ Working | - | ~10 warehouses |
| `GetRma` | ✅ Working | - | Variable |
| `GetVoucher` | ❌ Schema mismatch | Missing columns | Variable |
| `GetSupplier` | ✅ Working | - | Variable |

---

## 🔍 Testing Functions

### Manual Testing via Postman

**1. Single Function**
```
POST https://your-project.supabase.co/functions/v1/GetItem
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

**GetCustomer Example:**
```
POST https://yourdomain.neto.com.au/do/WS/NetoAPI
Headers:
  NETOAPI_ACTION: GetCustomer
  NETOAPI_KEY: your-key
  NETOAPI_USERNAME: your-username
  Accept: application/json
  Content-Type: application/json

Body:
{
  "Filter": {
    "Username": ["specific-customer"],
    "DateAddedFrom": "2024-01-01",
    "DateAddedTo": "2024-12-31",
    "Page": 1,
    "Limit": 100
  }
}
```

---

## 🛠️ Common SQL Fixes

### Add Missing Constraints
```sql
-- For "ON CONFLICT" errors
ALTER TABLE orders ADD CONSTRAINT unique_order_id UNIQUE (order_id);
ALTER TABLE payment ADD CONSTRAINT unique_payment_id UNIQUE (payment_id);
ALTER TABLE warehouse ADD CONSTRAINT unique_warehouse_id UNIQUE (warehouse_id);
ALTER TABLE rma ADD CONSTRAINT unique_rma_id UNIQUE (rma_id);
ALTER TABLE content ADD CONSTRAINT unique_content_id UNIQUE (content_id);
ALTER TABLE category ADD CONSTRAINT unique_category_id UNIQUE (category_id);
ALTER TABLE supplier ADD CONSTRAINT unique_supplier_id UNIQUE (supplier_id);

-- Check existing constraints
SELECT 
  tc.constraint_name, 
  tc.table_name, 
  kcu.column_name
FROM information_schema.table_constraints tc
JOIN information_schema.key_column_usage kcu 
  ON tc.constraint_name = kcu.constraint_name
WHERE tc.constraint_type = 'UNIQUE'
  AND tc.table_schema = 'public'
ORDER BY tc.table_name;
```

### Add Missing Columns
```sql
-- For voucher table
ALTER TABLE voucher 
ADD COLUMN IF NOT EXISTS date_added TIMESTAMP,
ADD COLUMN IF NOT EXISTS balance DECIMAL(10,2);

-- Check table structure
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'voucher'
ORDER BY ordinal_position;
```

---

## 🐛 Troubleshooting Checklist

### Function Returns Success but 0 Inserts

1. **Check Neto Response**
   ```javascript
   // Add logging
   const response = await callNetoAPI(endpoint, filterData)
   console.log('Neto returned:', response)
   ```

2. **Verify Filter Dates**
   - Neto uses YYYY-MM-DD HH:MM:SS format
   - Try wider date ranges

3. **Check OutputSelector**
   - Ensure all required fields are requested
   - Some fields need specific permissions

### CPU/Memory Timeouts

1. **Reduce Page Size**
   ```javascript
   const PAGE_SIZE = 500  // Instead of 1000
   ```

2. **Add Delays**
   ```javascript
   // Between pages
   await new Promise(resolve => setTimeout(resolve, 100))
   ```

3. **Process in Chunks**
   ```javascript
   // Instead of one big upsert
   for (let i = 0; i < rows.length; i += 100) {
     const chunk = rows.slice(i, i + 100)
     await upsertData(supabase, table, chunk, conflictColumn)
   }
   ```

### Date Format Issues

```javascript
// In utils.js transformData
const normalizeDate = (dateStr) => {
  if (!dateStr || dateStr === '0000-00-00 00:00:00') return null
  // Convert to ISO format
  return new Date(dateStr).toISOString()
}
```

---

## 📝 Adding a New Endpoint Checklist

- [ ] Read Neto API docs in `/docs` folder
- [ ] Create `GetNewEndpoint.js` file
- [ ] Add transformation case in `utils.js`
- [ ] Create database table with primary key
- [ ] Test with small dataset locally
- [ ] Add to `global_sync.js` ENDPOINTS array
- [ ] Deploy and test in production
- [ ] Update documentation

---

## 🔑 Environment Variables Reference

| Variable | Where Used | Example |
|----------|------------|---------|
| `SUPABASE_URL` | Edge Functions | `https://abc.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | Edge Functions | `eyJ...` (JWT) |
| `NETO_API_ENDPOINT` | Edge Functions | `https://domain.neto.com.au/do/WS/NetoAPI` |
| `NETO_API_KEY` | Edge Functions | `XXXXXXXXXXXXXXXX` |
| `NETO_API_USERNAME` | Edge Functions | Usually same as API key |
| `SUPABASE_ACCESS_TOKEN` | GitHub Actions | `sbp_...` |
| `PROJECT_REF` | GitHub Actions | `abcdefghijklmnop` |

---

## 📈 Performance Benchmarks

| Function | Records | Time | Memory | Notes |
|----------|---------|------|---------|-------|
| GetItem | 1,000 | ~5s | Low | With dedup |
| GetCustomer | 1,000 | ~8s | Medium | Complex data |
| GetOrder | 100 | ~3s | Low | Nested objects |
| GetCategory | All (~200) | ~2s | Low | Small dataset |

---

## 🚨 Emergency Procedures

### Function Stuck/Hanging
```bash
# Check function logs
supabase functions logs GetItem --project-ref your-ref

# Restart by redeploying
supabase functions deploy GetItem --project-ref your-ref
```

### Rollback Deployment
```bash
# GitHub Actions keeps history
# Revert commit and push to trigger redeploy
git revert HEAD
git push origin main
```

### Clear Bad Data
```sql
-- BE CAREFUL - This deletes data!
-- Always backup first

-- Clear and restart
TRUNCATE TABLE item RESTART IDENTITY CASCADE;

-- Or selective delete
DELETE FROM orders WHERE order_date < '2024-01-01';
```

---

## 📞 Useful Links

- [Neto API Explorer](https://developers.maropost.com/documentation/engineers/api-documentation/)
- [Supabase Edge Functions Docs](https://supabase.com/docs/guides/functions)
- [Project Repository](https://github.com/lumberjack-so/neto-export)
- [Supabase Dashboard](https://app.supabase.com)

---

## 💡 Pro Tips

1. **Always test with `Limit: 10` first**
2. **Use `DateAddedFrom` to sync incrementally**
3. **Monitor Supabase dashboard for quota usage**
4. **Keep utils.js transformations clean and documented**
5. **Use GitHub Actions logs to debug deployment issues**
6. **Set up external monitoring (UptimeRobot, etc.) for critical functions** 