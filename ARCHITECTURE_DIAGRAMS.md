# Neto Export - Architecture Diagrams

## System Overview

```mermaid
graph TB
    subgraph "Neto Cloud"
        NETO[Neto API<br/>api.neto.com.au]
    end
    
    subgraph "GitHub"
        REPO[Repository<br/>neto-export]
        GHA[GitHub Actions<br/>Deploy Workflow]
    end
    
    subgraph "Supabase Cloud"
        subgraph "Edge Functions"
            EF1[GetItem.js]
            EF2[GetCustomer.js]
            EF3[GetOrder.js]
            EF4[GetPayment.js]
            EF5[global_sync.js]
            UTILS[utils.js<br/>Shared Helpers]
        end
        
        subgraph "PostgreSQL Database"
            T1[(item table)]
            T2[(customer table)]
            T3[(orders table)]
            T4[(payment table)]
        end
    end
    
    subgraph "External Triggers"
        CRON[Cron Jobs]
        MANUAL[Manual Calls]
        WEBHOOK[Webhooks]
    end
    
    REPO -->|Push to main| GHA
    GHA -->|Deploy| EF1 & EF2 & EF3 & EF4 & EF5
    
    CRON -->|Schedule| EF5
    MANUAL -->|HTTP POST| EF1 & EF2 & EF3 & EF4 & EF5
    WEBHOOK -->|Events| EF1 & EF2 & EF3 & EF4
    
    EF1 -->|Fetch Products| NETO
    EF2 -->|Fetch Customers| NETO
    EF3 -->|Fetch Orders| NETO
    EF4 -->|Fetch Payments| NETO
    
    EF1 -->|Upsert| T1
    EF2 -->|Upsert| T2
    EF3 -->|Upsert| T3
    EF4 -->|Upsert| T4
    
    EF1 & EF2 & EF3 & EF4 --> UTILS
    EF5 -->|Orchestrate| EF1 & EF2 & EF3 & EF4
```

## Data Flow Sequence

```mermaid
sequenceDiagram
    participant Client
    participant EdgeFunction
    participant Utils
    participant NetoAPI
    participant SupabaseDB
    
    Client->>EdgeFunction: HTTP POST Request
    EdgeFunction->>Utils: initSupabase()
    Utils-->>EdgeFunction: Supabase Client
    
    loop For each page
        EdgeFunction->>Utils: callNetoAPI(endpoint, filters)
        Utils->>NetoAPI: POST /NetoAPI
        Note right of NetoAPI: NETOAPI_ACTION: GetItem<br/>Page: N, Limit: 1000
        NetoAPI-->>Utils: JSON Response
        Utils-->>EdgeFunction: Parsed Data
        
        EdgeFunction->>Utils: transformData(endpoint, data)
        Utils-->>EdgeFunction: Normalized Rows
        
        EdgeFunction->>Utils: upsertData(table, rows)
        Utils->>SupabaseDB: UPSERT with ON CONFLICT
        SupabaseDB-->>Utils: Count/Error
        Utils-->>EdgeFunction: Insert Count
    end
    
    EdgeFunction-->>Client: { success: true, inserted: N }
```

## Deployment Pipeline

```mermaid
graph LR
    subgraph "Development"
        DEV[Developer<br/>Local Machine]
        LOCAL[Local Testing<br/>supabase functions serve]
    end
    
    subgraph "Version Control"
        GIT[Git Repository]
        PR[Pull Request]
        MAIN[main branch]
    end
    
    subgraph "CI/CD"
        GHA[GitHub Actions]
        BUILD[Build Functions]
        DEPLOY[Deploy to Supabase]
    end
    
    subgraph "Production"
        EDGE[Edge Functions<br/>Live]
        DB[(PostgreSQL)]
    end
    
    DEV -->|Test| LOCAL
    DEV -->|git push| GIT
    GIT -->|Create| PR
    PR -->|Merge| MAIN
    MAIN -->|Trigger| GHA
    GHA --> BUILD
    BUILD -->|Copy files<br/>Create structure| DEPLOY
    DEPLOY -->|supabase functions deploy| EDGE
    EDGE -->|Read/Write| DB
```

## Function Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Edge Function                         │
│                      (e.g., GetItem.js)                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────┐    ┌─────────────────┐               │
│  │   Constants     │    │  Filter Config  │               │
│  ├─────────────────┤    ├─────────────────┤               │
│  │ endpoint        │    │ DateFrom        │               │
│  │ table          │    │ DateTo          │               │
│  │ conflictColumn │    │ OutputSelector  │               │
│  └─────────────────┘    │ Limit           │               │
│                         └─────────────────┘               │
│                                                             │
│  ┌─────────────────────────────────────────────┐          │
│  │              Main Handler                     │          │
│  ├─────────────────────────────────────────────┤          │
│  │                                              │          │
│  │  1. Initialize Supabase Client               │          │
│  │     └─> utils.initSupabase()                │          │
│  │                                              │          │
│  │  2. Paginated Data Fetching                 │          │
│  │     ┌─────────────────────┐                │          │
│  │     │ while (hasMoreData) │                │          │
│  │     │   - Call Neto API   │                │          │
│  │     │   - Transform data  │                │          │
│  │     │   - Upsert to DB    │                │          │
│  │     │   - Track count     │                │          │
│  │     └─────────────────────┘                │          │
│  │                                              │          │
│  │  3. Return Response                          │          │
│  │     └─> { success, inserted, error }        │          │
│  └─────────────────────────────────────────────┘          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Database Schema Relationships

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDERS : places
    ORDERS ||--o{ PAYMENT : has
    ORDERS ||--o{ ORDER_ITEMS : contains
    ITEM ||--o{ ORDER_ITEMS : "ordered in"
    CATEGORY ||--o{ ITEM : contains
    WAREHOUSE ||--o{ INVENTORY : stores
    ITEM ||--o{ INVENTORY : "stocked in"
    CUSTOMER ||--o{ RMA : requests
    VOUCHER ||--o{ ORDERS : "used in"
    
    CUSTOMER {
        text username PK
        text email UK
        text first_name
        text last_name
        timestamp date_added
    }
    
    ORDERS {
        text order_id PK
        text customer_username FK
        timestamp order_date
        decimal grand_total
        text order_status
    }
    
    ITEM {
        text parent_sku PK
        text item_name
        decimal rrp
        text category_id FK
        boolean is_active
    }
    
    PAYMENT {
        text payment_id PK
        text order_id FK
        decimal amount_paid
        text payment_method
        timestamp date_paid
    }
```

## Error Handling Flow

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Trigger   │────>│ Edge Function│────>│  Neto API   │
└─────────────┘     └──────┬───────┘     └──────┬──────┘
                           │                      │
                           │                      ▼
                           │              ┌──────────────┐
                           │              │ API Error?   │
                           │              └──────┬───────┘
                           │                     │ Yes
                           │                     ▼
                           │              ┌──────────────┐
                           │              │  Log Error   │
                           │              │ Return 500   │
                           │              └──────────────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ Transform OK? │
                    └──────┬────────┘
                           │ No
                           ▼
                    ┌──────────────┐
                    │ Log Warning   │
                    │ Skip Record   │
                    └──────┬────────┘
                           │
                           ▼
                    ┌──────────────┐
                    │  Upsert DB   │
                    └──────┬────────┘
                           │
                           ▼
                    ┌──────────────┐      ┌──────────────┐
                    │ DB Error?     │─Yes─>│ Log Error    │
                    └──────┬────────┘      │ Return Error │
                           │ No            └──────────────┘
                           ▼
                    ┌──────────────┐
                    │Return Success│
                    └──────────────┘
```

## Performance Optimization Strategy

```
Standard Flow (Sequential):
━━━━━━━━━━━━━━━━━━━━━━━━━━
Page 1 ──> Transform ──> Upsert ──> Page 2 ──> Transform ──> Upsert
   5s         1s          2s         5s         1s          2s     = 16s

Optimized Flow (Chunked Processing):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Page 1 ──┐
         ├──> Transform All ──> Upsert Chunks (100 rows each)
Page 2 ──┘
  10s            2s                    4s                     = 16s
  (parallel)                    (but lower memory usage)

Future Enhancement (Streaming):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Page 1 ──> Stream Transform ──> Stream Upsert ──┐
                                                 ├──> Done
Page 2 ──> Stream Transform ──> Stream Upsert ──┘
         (overlapping operations)                     = ~10s
```

## Monitoring & Observability

```mermaid
graph TB
    subgraph "Metrics Collection"
        EF[Edge Functions]
        DB[Database]
    end
    
    subgraph "Logging"
        CONSOLE[Console Logs]
        ERRORS[Error Tracking]
    end
    
    subgraph "Monitoring"
        DASH[Supabase Dashboard]
        ALERTS[External Monitoring]
    end
    
    subgraph "Analysis"
        LOGS[Log Analysis]
        PERF[Performance Metrics]
        USAGE[Usage Reports]
    end
    
    EF -->|Runtime logs| CONSOLE
    EF -->|Exceptions| ERRORS
    DB -->|Query logs| CONSOLE
    
    CONSOLE --> DASH
    ERRORS --> DASH
    
    DASH --> LOGS
    DASH --> PERF
    DASH --> USAGE
    
    ALERTS -->|Poll functions| EF
    ALERTS -->|Check health| DB
```

## Security Model

```
┌─────────────────────────────────────────────────────────┐
│                    Public Internet                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Clients          Must Have            Edge Functions  │
│  ┌─────┐         ┌─────────┐         ┌──────────────┐ │
│  │ App │────────>│ Anon Key│────────>│   Invoke     │ │
│  └─────┘         └─────────┘         └──────┬───────┘ │
│                                              │         │
├──────────────────────────────────────────────┼─────────┤
│                  Private/Secure               │         │
│                                              ▼         │
│  ┌────────────────┐         ┌─────────────────────┐   │
│  │ Service Role   │────────>│ Database Operations │   │
│  │ Key (Secret)   │         │ (Full Access)       │   │
│  └────────────────┘         └─────────────────────┘   │
│                                                         │
│  ┌────────────────┐         ┌─────────────────────┐   │
│  │ Neto API       │<────────│ API Calls           │   │
│  │ Credentials    │         │ (Authenticated)     │   │
│  └────────────────┘         └─────────────────────┘   │
└─────────────────────────────────────────────────────────┘
``` 