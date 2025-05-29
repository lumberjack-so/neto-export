# Supabase × Neto Edge Functions

**A robust data synchronization system that mirrors your Neto e-commerce data to Supabase PostgreSQL in real-time.**

This repository contains a suite of **Supabase Edge Functions** that pull data from the [Neto/Maropost Commerce Cloud](https://www.netohq.com/) API and upsert the results into corresponding tables in your Supabase project.

## 📚 Documentation

- **[Technical Documentation](./TECHNICAL_DOCUMENTATION.md)** - Complete technical specification, architecture, and implementation details
- **[Quick Reference](./QUICK_REFERENCE.md)** - Commands, troubleshooting, and common tasks
- **[Architecture Diagrams](./ARCHITECTURE_DIAGRAMS.md)** - Visual representations of system design and data flow

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/lumberjack-so/neto-export
cd neto-export

# Set up environment
cp .env.example .env.local
# Edit .env.local with your credentials

# Test locally
supabase functions serve GetItem --env-file .env.local

# Deploy to production
supabase functions deploy GetItem --project-ref your-project-ref
```

---

## 🗂 Project Structure

```
neto-export/
├── .github/
│   └── workflows/
│       └── deploy-edge-fns.yml    # Automated deployment
├── docs/                          # Neto API documentation
├── GetItem.js                     # Products sync
├── GetCustomer.js                 # Customers sync
├── GetOrder.js                    # Orders sync
├── GetPayment.js                  # Payments sync
├── GetCategory.js                 # Categories sync
├── GetContent.js                  # CMS content sync
├── GetWarehouse.js                # Warehouses sync
├── GetRma.js                      # Returns sync
├── GetVoucher.js                  # Vouchers sync
├── GetSupplier.js                 # Suppliers sync
├── global_sync.js                 # Orchestrator function
├── utils.js                       # Shared utilities
└── README.md                      # This file
```

---

## 🔧 Configuration

### Environment Variables

```bash
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Neto API Configuration
NETO_API_ENDPOINT=https://yourdomain.neto.com.au/do/WS/NetoAPI
NETO_API_KEY=your-neto-api-key
NETO_API_USERNAME=your-neto-username

# GitHub Actions (for deployment)
SUPABASE_ACCESS_TOKEN=your-supabase-access-token
PROJECT_REF=your-project-ref
```

### Database Setup

Each Edge Function expects a corresponding table with proper constraints:

```sql
-- Example: item table
CREATE TABLE item (
  parent_sku TEXT PRIMARY KEY,
  item_name TEXT,
  rrp DECIMAL(10,2),
  date_added TIMESTAMP,
  date_updated TIMESTAMP
  -- ... other fields
);
```

See [Technical Documentation](./TECHNICAL_DOCUMENTATION.md#database-schema--constraints) for complete schema.

---

## 🚦 Function Status

| Function | Endpoint | Table | Status |
|----------|----------|-------|---------|
| GetItem | Products | item | ⚠️ Needs deduplication fix |
| GetCustomer | Customers | customer | ✅ Working |
| GetOrder | Orders | orders | ✅ Working |
| GetPayment | Payments | payment | ✅ Working |
| GetCategory | Categories | category | ✅ Working |
| GetContent | CMS Pages | content | ✅ Working |
| GetWarehouse | Warehouses | warehouse | ✅ Working |
| GetRma | Returns | rma | ✅ Working |
| GetVoucher | Vouchers | voucher | ❌ Schema mismatch |
| GetSupplier | Suppliers | supplier | ✅ Working |

---

## 🎯 Key Features

- **Modular Design**: Each Neto entity has its own Edge Function
- **Pagination Support**: Handles large datasets without hitting limits
- **Error Resilience**: Individual failures don't break the entire sync
- **Automated Deployment**: GitHub Actions CI/CD pipeline
- **Data Transformation**: Normalizes Neto's data structures
- **Conflict Resolution**: Uses PostgreSQL UPSERT with ON CONFLICT

---

## 📊 Usage Examples

### Sync Single Entity

```bash
# Using curl
curl -X POST https://your-project.supabase.co/functions/v1/GetCustomer \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json"

# Using Postman
POST https://your-project.supabase.co/functions/v1/GetItem
Headers:
  Authorization: Bearer YOUR_ANON_KEY
  Content-Type: application/json
```

### Run Global Sync

```bash
# Sync all entities in sequence
curl -X POST https://your-project.supabase.co/functions/v1/global_sync \
  -H "Authorization: Bearer YOUR_ANON_KEY"
```

### Schedule Regular Syncs

Use any cron service (e.g., cron-job.org, EasyCron) to call the global_sync endpoint:

```
0 */6 * * * curl -X POST https://your-project.supabase.co/functions/v1/global_sync -H "Authorization: Bearer $ANON_KEY"
```

---

## 🛠️ Troubleshooting

### Common Issues

1. **"ON CONFLICT" Error**
   - Add UNIQUE constraint to the conflict column
   - See [Quick Reference](./QUICK_REFERENCE.md#common-sql-fixes)

2. **CPU Time Exceeded**
   - Reduce PAGE_SIZE in the function
   - Process data in smaller chunks

3. **Date Format Errors**
   - MySQL zero dates need normalization
   - Check utils.js transformData()

4. **0 Records Inserted**
   - Verify Neto API filters
   - Check date ranges and permissions

See [Quick Reference](./QUICK_REFERENCE.md#troubleshooting-checklist) for detailed solutions.

---

## 🚀 Deployment

### Automatic (GitHub Actions)

Push to `main` branch triggers automatic deployment:

```bash
git add .
git commit -m "Update sync functions"
git push origin main
```

### Manual Deployment

```bash
# Single function
supabase functions deploy GetItem --project-ref your-project-ref

# All functions
for file in *.js; do
  fn=$(basename "$file" .js)
  if [ "$fn" != "utils" ]; then
    supabase functions deploy "$fn" --project-ref your-project-ref
  fi
done
```

---

## 📈 Performance Considerations

- **Pagination**: Functions fetch 500-1000 records per page
- **Timeouts**: Edge Functions have 150s wall-clock limit
- **Memory**: Process data in chunks to avoid memory issues
- **Rate Limits**: Respect Neto API rate limits

See [Technical Documentation](./TECHNICAL_DOCUMENTATION.md#performance-considerations) for optimization strategies.

---

## 🔐 Security

- Service role key is only used in Edge Functions (server-side)
- All credentials stored as environment variables
- Functions require authentication (anon key minimum)
- No sensitive data logged to console

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Test locally with small datasets
4. Submit a pull request

### Adding New Endpoints

See [Technical Documentation](./TECHNICAL_DOCUMENTATION.md#adding-new-endpoints) for step-by-step guide.

---

## 📝 License

This project is proprietary and confidential.

---

## 🆘 Support

- Check [documentation](./TECHNICAL_DOCUMENTATION.md) first
- Review [Neto API docs](./docs/) for endpoint details
- Create an issue for bugs/features

---

## Next Steps

1. **Fix GetVoucher**: Add missing columns to voucher table
2. **Add Monitoring**: Set up external health checks
3. **Incremental Sync**: Use DateModified for efficiency
4. **Error Recovery**: Add retry logic for failed syncs 