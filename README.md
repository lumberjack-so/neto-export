# Neto Export - E-commerce Data Synchronization System

A robust collection of Supabase Edge Functions that synchronize e-commerce data from [Neto/Maropost Commerce Cloud](https://www.maropost.com/commerce-cloud/) to PostgreSQL database, enabling real-time analytics, custom integrations, and advanced reporting capabilities.

## 🚀 Overview

Neto Export bridges the gap between your Neto e-commerce platform and modern data infrastructure, providing:

- **Automated Data Sync**: Pull products, customers, orders, payments, and more
- **Real-time Updates**: Keep your database synchronized with your online store
- **Flexible Architecture**: Modular Edge Functions for each data type
- **Production Ready**: Comprehensive error handling and logging
- **Easy Deployment**: GitHub Actions CI/CD pipeline included

## 📋 Table of Contents

- [Features](#-features)
- [Architecture](#-architecture)
- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Available Functions](#-available-functions)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [API Quirks](#-api-quirks)
- [Contributing](#-contributing)
- [Documentation](#-documentation)

## ✨ Features

### Supported Data Types
- ✅ **Products** (GetItem) - Catalog with variants, pricing, inventory
- ✅ **Customers** (GetCustomer) - Customer profiles and contact details
- ✅ **Orders** (GetOrder) - Order history and status tracking
- ✅ **Payments** (GetPayment) - Transaction records
- ✅ **Categories** (GetCategory) - Product categorization
- ✅ **Content** (GetContent) - CMS pages and content
- ✅ **Warehouses** (GetWarehouse) - Inventory locations
- ✅ **RMAs** (GetRma) - Returns and refunds
- ✅ **Suppliers** (GetSupplier) - Vendor information
- ❌ **Vouchers** (GetVoucher) - Gift cards (schema mismatch)

### Key Capabilities
- **Pagination Support**: Handle large datasets efficiently
- **Deduplication**: Automatic removal of duplicate records
- **Date Normalization**: Convert MySQL zero dates to PostgreSQL-compatible nulls
- **Flexible Scheduling**: Run on-demand or via cron jobs
- **Error Resilience**: Individual function failures don't break the sync
- **Comprehensive Logging**: Detailed logs for debugging

## 🏗️ Architecture

```
┌─────────────────┐     HTTPS/JSON      ┌──────────────────┐
│   Neto Cloud    │ ◄─────────────────► │ Supabase Edge    │
│                 │                      │ Functions        │
└─────────────────┘                      └────────┬─────────┘
                                                  │ SQL Upserts
                                                  ▼
                                         ┌──────────────────┐
                                         │ PostgreSQL DB    │
                                         └──────────────────┘
```

Each Edge Function:
1. Receives HTTP trigger
2. Authenticates with Neto API
3. Fetches data (with pagination if supported)
4. Transforms to database schema
5. Upserts to PostgreSQL with conflict handling

## 📋 Prerequisites

- **Neto/Maropost Account** with API access enabled
- **Supabase Project** ([Create free account](https://supabase.com))
- **Supabase CLI** ([Installation guide](https://supabase.com/docs/guides/cli))
- **Git** for version control
- **Node.js** (optional, for local development)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/lumberjack-so/neto-export.git
cd neto-export
```

### 2. Set Up Environment Variables

Create `.env.local` for local development:
```bash
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NETO_API_KEY=your-neto-api-key
```

### 3. Create Database Tables

Run the SQL scripts in your Supabase SQL editor:
```sql
-- Start with supplier table as example
-- Run sql/create_supplier_table_complete.sql
```

### 4. Test Locally
```bash
# Serve a function locally
supabase functions serve GetSupplier --env-file .env.local

# Test with curl
curl -X POST http://localhost:54321/functions/v1/GetSupplier
```

### 5. Deploy to Production
```bash
# Deploy single function
supabase functions deploy GetSupplier --project-ref your-project-ref

# Deploy all functions
for fn in Get*.js global_sync.js; do
  name="${fn%.js}"
  supabase functions deploy "$name" --project-ref your-project-ref
done
```

## 📦 Available Functions

| Function | Purpose | Pagination | Special Notes |
|----------|---------|------------|---------------|
| `GetItem` | Sync products/SKUs | ✅ Yes | Needs deduplication |
| `GetCustomer` | Sync customer data | ✅ Yes | ~35k records, use 500/page |
| `GetOrder` | Sync orders | ✅ Yes | Complex nested data |
| `GetPayment` | Sync payments | ✅ Yes | Auto-deduplication |
| `GetCategory` | Sync categories | ❌ No | Handles MySQL zero dates |
| `GetContent` | Sync CMS content | ❌ No | Fixed limit |
| `GetWarehouse` | Sync warehouses | ❌ No | Small dataset |
| `GetRma` | Sync returns | ❌ No | Variable size |
| `GetSupplier` | Sync suppliers | ❌ **NO** | **No Page parameter!** |
| `GetVoucher` | Sync vouchers | ❌ No | Schema needs fixing |
| `global_sync` | Run all syncs | - | Sequential execution |

## ⚙️ Configuration

### Environment Variables

Set these in Supabase Dashboard > Settings > Edge Functions > Secrets:

| Variable | Description | Example |
|----------|-------------|---------|
| `NETO_API_KEY` | Your Neto API key | `32-character-string` |
| `SUPABASE_URL` | Auto-populated | `https://xxx.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | Auto-populated | `eyJ...` |

### Function Configuration

Each function has configurable parameters in its respective `.js` file:

```javascript
// Example from GetCustomer.js
const PAGE_SIZE = 500  // Reduce if CPU timeouts occur
const filterData = {
  Filter: {
    OutputSelector: ['Username', 'EmailAddress', ...]
  }
}
```

## 🚀 Deployment

### Option 1: GitHub Actions (Recommended)

1. Add secrets to your GitHub repository:
   - `SUPABASE_ACCESS_TOKEN`: Personal access token from Supabase
   - `PROJECT_REF`: Your Supabase project reference

2. Push to main branch:
   ```bash
   git add .
   git commit -m "Update functions"
   git push origin main
   ```

3. GitHub Actions will automatically deploy all functions

### Option 2: Manual Deployment

```bash
# Deploy all functions
PROJECT_REF=your-ref
for f in Get*.js global_sync.js; do
  echo "Deploying ${f%.js}..."
  supabase functions deploy "${f%.js}" --project-ref $PROJECT_REF
done
```

## 🐛 Troubleshooting

### Common Issues

#### 1. Function Returns 0 Inserts
- **Check logs**: `supabase functions logs GetSupplier --project-ref your-ref`
- **Verify API key**: Ensure `NETO_API_KEY` is set in Supabase secrets
- **Check table exists**: Run SQL scripts first
- **API response**: Look for "Raw API response" in logs

#### 2. GetSupplier Returns Empty
- **Remove Page parameter**: GetSupplier doesn't support pagination
- **Correct filter**:
  ```javascript
  // ❌ Wrong
  Filter: { Page: 1, Limit: 1000 }
  
  // ✅ Correct
  Filter: { Limit: 10000 }
  ```

#### 3. CPU Time Exceeded
- Reduce `PAGE_SIZE` to 500
- Process smaller date ranges
- Run individual functions instead of global_sync

#### 4. Database Errors
- **ON CONFLICT**: Add unique constraints
- **Column missing**: Run migration scripts
- **Date errors**: Already handled for MySQL zero dates

## 🔧 API Quirks

### Pagination Behavior

| Endpoint | Page Support | Empty Response | Notes |
|----------|--------------|----------------|-------|
| GetItem | ✅ Yes | `"Item": []` | Standard |
| GetCustomer | ✅ Yes | `"Customer": []` | Standard |
| GetSupplier | ❌ **NO** | `"Supplier": ""` | Returns empty string! |
| GetCategory | ❌ No | `"Category": []` | Small dataset |

### Special Cases

1. **GetSupplier**: Must NOT include Page parameter
2. **GetCategory**: Automatically converts `0000-00-00 00:00:00` to null
3. **GetPayment**: Includes built-in deduplication
4. **GetItem**: May have duplicate parent_sku in single response

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Test thoroughly with small datasets first
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Adding New Endpoints

1. Check API documentation in `/docs` folder
2. Create `GetNewEndpoint.js` following existing patterns
3. Add transformation logic to `utils.js`
4. Create database table with appropriate constraints
5. Test with small limits first
6. Add to `global_sync.js` ENDPOINTS array
7. Update documentation

## 📚 Documentation

- **[Quick Reference](./QUICK_REFERENCE.md)** - Commands, status, and quick fixes
- **[Technical Documentation](./TECHNICAL_DOCUMENTATION.md)** - Complete technical deep dive
- **[Architecture Diagrams](./ARCHITECTURE_DIAGRAMS.md)** - Visual system design
- **[Neto API Docs](./docs/)** - Original API documentation

## 🔒 Security

- All API keys stored as Supabase Edge Function secrets
- Service role key provides full database access (never expose to clients)
- Functions require authentication via Supabase anon key
- Regular key rotation recommended

## 📈 Performance

| Function | Records/Page | Time/Page | Total Records |
|----------|--------------|-----------|---------------|
| GetCustomer | 500 | ~4s | ~35,000 |
| GetSupplier | All | ~6s | Variable |
| GetItem | 1,000 | ~5s | ~50,000 |
| global_sync | - | ~5min | All data |

## 🎯 Roadmap

- [ ] Add retry logic with exponential backoff
- [ ] Implement webhook support for real-time updates
- [ ] Add GetShippingMethods endpoint
- [ ] Create monitoring dashboard
- [ ] Implement response caching
- [ ] Add data validation layer

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built for [Neto/Maropost Commerce Cloud](https://www.maropost.com/commerce-cloud/)
- Powered by [Supabase Edge Functions](https://supabase.com/edge-functions)
- Maintained by [lumberjack.so](https://github.com/lumberjack-so)

---

**Need Help?** Check the [troubleshooting guide](#-troubleshooting) or open an issue on GitHub. 