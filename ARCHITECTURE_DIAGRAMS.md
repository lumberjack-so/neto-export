# Neto Export - Architecture Diagrams

## System Overview

### Complete Data Flow Architecture

```mermaid
graph TB
    subgraph "Trigger Layer"
        M[Manual Trigger]
        S[Scheduled Cron]
        W[Webhook Events]
        A[API Call]
    end

    subgraph "Supabase Edge Functions"
        O[global_sync.js]
        F1[GetItem.js]
        F2[GetCustomer.js]
        F3[GetOrder.js]
        F4[GetPayment.js]
        F5[GetCategory.js]
        F6[GetContent.js]
        F7[GetWarehouse.js]
        F8[GetRma.js]
        F9[GetVoucher.js]
        F10[GetSupplier.js]
        U[utils.js]
    end

    subgraph "External Systems"
        N[Neto/Maropost API<br/>Commerce Cloud]
    end

    subgraph "Data Layer"
        DB[(Supabase PostgreSQL)]
        T1[item table]
        T2[customer table]
        T3[orders table]
        T4[payment table]
        T5[category table]
        T6[content table]
        T7[warehouse table]
        T8[rma table]
        T9[voucher table]
        T10[supplier table]
    end

    subgraph "Consumers"
        BI[BI Tools]
        APP[Applications]
        API[REST APIs]
        RT[Real-time Subscriptions]
    end

    %% Trigger connections
    M --> O
    S --> O
    W --> O
    A --> F1
    A --> F2
    A --> F3
    A --> F4
    A --> F5
    A --> F6
    A --> F7
    A --> F8
    A --> F9
    A --> F10

    %% Orchestration
    O --> F1
    O --> F2
    O --> F3
    O --> F4
    O --> F5
    O --> F6
    O --> F7
    O --> F8
    O --> F9
    O --> F10

    %% All functions use utils
    F1 --> U
    F2 --> U
    F3 --> U
    F4 --> U
    F5 --> U
    F6 --> U
    F7 --> U
    F8 --> U
    F9 --> U
    F10 --> U

    %% API calls
    U --> N

    %% Database writes
    F1 --> T1
    F2 --> T2
    F3 --> T3
    F4 --> T4
    F5 --> T5
    F6 --> T6
    F7 --> T7
    F8 --> T8
    F9 --> T9
    F10 --> T10

    %% Database to consumers
    DB --> BI
    DB --> APP
    DB --> API
    DB --> RT

    %% Grouping
    T1 -.-> DB
    T2 -.-> DB
    T3 -.-> DB
    T4 -.-> DB
    T5 -.-> DB
    T6 -.-> DB
    T7 -.-> DB
    T8 -.-> DB
    T9 -.-> DB
    T10 -.-> DB

    classDef functionClass fill:#4a90e2,stroke:#333,stroke-width:2px,color:#fff
    classDef utilClass fill:#e74c3c,stroke:#333,stroke-width:2px,color:#fff
    classDef dbClass fill:#27ae60,stroke:#333,stroke-width:2px,color:#fff
    classDef externalClass fill:#f39c12,stroke:#333,stroke-width:2px,color:#fff

    class F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,O functionClass
    class U utilClass
    class DB,T1,T2,T3,T4,T5,T6,T7,T8,T9,T10 dbClass
    class N externalClass
```

---

## Data Flow Patterns

### Paginated Data Sync (GetCustomer, GetOrder, GetPayment)

```mermaid
sequenceDiagram
    participant T as Trigger
    participant F as Edge Function
    participant U as utils.js
    participant N as Neto API
    participant DB as Supabase DB
    
    T->>F: HTTP POST
    F->>F: initSupabase()
    F->>F: Check NETO_API_KEY
    
    loop For each page
        F->>U: callNetoAPI(endpoint, {Page, Limit})
        U->>N: POST with filters + Page
        N-->>U: JSON Response (array)
        U-->>F: Raw data
        
        alt Has data
            F->>U: transformData(endpoint, data)
            U-->>F: Transformed rows
            F->>U: upsertData(supabase, table, conflictColumn, rows)
            U->>DB: UPSERT with ON CONFLICT
            DB-->>U: {count}
            U-->>F: Insert count
            F->>F: totalInserted += count
        else No more data
            F->>F: Break loop
        end
    end
    
    F-->>T: {success: true, inserted: total}
```

### Non-Paginated Data Sync (GetSupplier, GetCategory)

```mermaid
sequenceDiagram
    participant T as Trigger
    participant F as Edge Function
    participant U as utils.js
    participant N as Neto API
    participant DB as Supabase DB
    
    T->>F: HTTP POST
    F->>F: initSupabase()
    F->>F: Check NETO_API_KEY
    
    F->>U: callNetoAPI(endpoint, {Limit})
    Note over U,N: NO Page parameter!
    U->>N: POST with filters
    N-->>U: JSON Response
    U-->>F: Raw data
    
    alt GetSupplier special case
        F->>F: Check if response is empty string
        alt Is array
            F->>F: Use array data
        else Is empty string ""
            F->>F: Convert to empty array
        end
    end
    
    F->>U: transformData(endpoint, data)
    U-->>F: Transformed rows
    
    F->>F: Deduplicate rows (if needed)
    
    F->>U: upsertData(supabase, table, conflictColumn, unique)
    U->>DB: UPSERT with ON CONFLICT
    DB-->>U: {count}
    U-->>F: Insert count
    
    F-->>T: {success: true, inserted: count}
```

---

## utils.js Component Architecture

```mermaid
graph LR
    subgraph "utils.js Exports"
        I[initSupabase]
        C[callNetoAPI]
        T[transformData]
        U[upsertData]
    end

    subgraph "Dependencies"
        SC[Supabase Client]
        ENV[Environment Variables]
    end

    subgraph "Functionality"
        I --> |Creates| SC
        C --> |Uses| ENV
        C --> |HTTP POST| API[Neto API]
        T --> |Transforms| TD[Type Conversions<br/>Field Mapping<br/>Date Normalization]
        U --> |Executes| SQL[PostgreSQL UPSERT]
    end

    ENV --> |SUPABASE_URL| I
    ENV --> |SUPABASE_SERVICE_ROLE_KEY| I
    ENV --> |NETO_API_KEY| C

    classDef exportClass fill:#3498db,stroke:#333,stroke-width:2px,color:#fff
    classDef depClass fill:#95a5a6,stroke:#333,stroke-width:2px,color:#fff
    
    class I,C,T,U exportClass
    class SC,ENV depClass
```

---

## Database Schema Relationships

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDERS : places
    ORDERS ||--o{ PAYMENT : has
    ORDERS ||--o{ RMA : may_have
    ITEM ||--o{ ORDERS : contains
    CATEGORY ||--o{ ITEM : categorizes
    SUPPLIER ||--o{ ITEM : supplies
    WAREHOUSE ||--o{ ITEM : stores
    CUSTOMER ||--o{ VOUCHER : owns
    
    CUSTOMER {
        text username PK
        text email UK
        text first_name
        text last_name
        timestamp date_added
        boolean is_active
    }
    
    ORDERS {
        text order_id PK
        text customer_username FK
        timestamp order_date
        text order_status
        decimal grand_total
    }
    
    PAYMENT {
        text payment_id PK
        text order_id FK
        decimal amount
        text payment_method
        timestamp date_paid
    }
    
    ITEM {
        text parent_sku PK
        text item_id
        text supplier_id FK
        text category_id FK
        text brand
        decimal rrp
        boolean is_active
    }
    
    CATEGORY {
        text category_id PK
        text category_name
        text parent_category_id FK
        timestamp date_added
    }
    
    SUPPLIER {
        text supplier_id PK
        text supplier_name
        text email
        int lead_time_1
        int lead_time_2
    }
    
    WAREHOUSE {
        text warehouse_id PK
        text warehouse_name
        text location
    }
    
    RMA {
        text rma_id PK
        text order_id FK
        text status
        decimal refund_amount
    }
    
    VOUCHER {
        text voucher_id PK
        text customer_username FK
        decimal balance
        timestamp expiry_date
    }
```

---

## Deployment Pipeline

```mermaid
graph LR
    subgraph "Development"
        DEV[Local Development]
        TEST[Local Testing]
    end

    subgraph "Version Control"
        GIT[GitHub Repository]
        PR[Pull Request]
    end

    subgraph "CI/CD Pipeline"
        GHA[GitHub Actions]
        BUILD[Build Functions]
        DEPLOY[Deploy to Supabase]
    end

    subgraph "Production"
        EDGE[Edge Functions]
        DB[(PostgreSQL)]
        SECRETS[Environment Secrets]
    end

    DEV --> TEST
    TEST --> GIT
    GIT --> PR
    PR --> |Merge to main| GHA
    GHA --> BUILD
    BUILD --> DEPLOY
    DEPLOY --> EDGE
    DEPLOY --> SECRETS
    EDGE --> DB

    classDef devClass fill:#3498db,stroke:#333,stroke-width:2px,color:#fff
    classDef gitClass fill:#2ecc71,stroke:#333,stroke-width:2px,color:#fff
    classDef ciClass fill:#e74c3c,stroke:#333,stroke-width:2px,color:#fff
    classDef prodClass fill:#f39c12,stroke:#333,stroke-width:2px,color:#fff
    
    class DEV,TEST devClass
    class GIT,PR gitClass
    class GHA,BUILD,DEPLOY ciClass
    class EDGE,DB,SECRETS prodClass
```

---

## Error Handling Flow

```mermaid
stateDiagram-v2
    [*] --> CheckEnv: Function Start
    
    CheckEnv --> InitSupabase: Env vars exist
    CheckEnv --> ErrorResponse: Missing NETO_API_KEY
    
    InitSupabase --> CallAPI: Success
    InitSupabase --> ErrorResponse: Failed
    
    CallAPI --> CheckResponse: API Response
    
    CheckResponse --> ProcessData: Valid data
    CheckResponse --> HandleEmpty: Empty/Invalid
    CheckResponse --> ErrorResponse: API Error
    
    HandleEmpty --> ReturnZero: No data to process
    
    ProcessData --> Transform: Parse response
    Transform --> Deduplicate: Transform data
    Deduplicate --> Upsert: Remove duplicates
    
    Upsert --> Success: Data inserted
    Upsert --> ErrorResponse: Database error
    
    Success --> [*]: Return count
    ReturnZero --> [*]: Return 0
    ErrorResponse --> [*]: Return error

    note right of CheckResponse
        GetSupplier: Check for empty string ""
        Others: Check for empty array []
    end note
    
    note right of Deduplicate
        Required for GetItem, GetPayment, GetSupplier
        due to potential duplicates in response
    end note
```

---

## Global Sync Orchestration

```mermaid
graph TB
    subgraph "global_sync.js Execution"
        START[Start global_sync]
        INIT[Initialize Supabase]
        
        subgraph "Sequential Execution"
            E1[Execute GetItem]
            E2[Execute GetCustomer]
            E3[Execute GetOrder]
            E4[Execute GetPayment]
            E5[Execute GetCategory]
            E6[Execute GetContent]
            E7[Execute GetWarehouse]
            E8[Execute GetRma]
            E9[Execute GetVoucher]
            E10[Execute GetSupplier]
        end
        
        COLLECT[Collect Results]
        RESPONSE[Return Summary]
    end

    START --> INIT
    INIT --> E1
    E1 --> |Continue on error| E2
    E2 --> |Continue on error| E3
    E3 --> |Continue on error| E4
    E4 --> |Continue on error| E5
    E5 --> |Continue on error| E6
    E6 --> |Continue on error| E7
    E7 --> |Continue on error| E8
    E8 --> |Continue on error| E9
    E9 --> |Continue on error| E10
    E10 --> COLLECT
    COLLECT --> RESPONSE

    classDef startEnd fill:#27ae60,stroke:#333,stroke-width:2px,color:#fff
    classDef process fill:#3498db,stroke:#333,stroke-width:2px,color:#fff
    classDef error fill:#e74c3c,stroke:#333,stroke-width:2px,color:#fff
    
    class START,RESPONSE startEnd
    class E1,E2,E3,E4,E5,E6,E7,E8,E9,E10,INIT,COLLECT process
```

---

## Security Architecture

```mermaid
graph TB
    subgraph "External Access"
        USER[User/Application]
        CRON[Cron Scheduler]
    end

    subgraph "Authentication Layer"
        AUTH[Supabase Auth]
        ANON[Anon Key]
        SERVICE[Service Role Key]
    end

    subgraph "Edge Functions"
        FUNC[Edge Function]
        SECRETS[Environment Secrets]
    end

    subgraph "External APIs"
        NETO[Neto API]
    end

    subgraph "Database"
        DB[(PostgreSQL)]
        RLS[Row Level Security]
    end

    USER --> |Bearer Token| AUTH
    CRON --> |Bearer Token| AUTH
    AUTH --> |Validates| ANON
    AUTH --> |Authorizes| FUNC
    
    FUNC --> |Reads| SECRETS
    SECRETS --> |Contains| SERVICE
    SECRETS --> |Contains| NETO_KEY[NETO_API_KEY]
    
    FUNC --> |Uses| SERVICE
    FUNC --> |Uses| NETO_KEY
    
    SERVICE --> |Full Access| DB
    NETO_KEY --> |Authenticates| NETO
    
    DB --> |Bypassed for Service Role| RLS

    classDef authClass fill:#e74c3c,stroke:#333,stroke-width:2px,color:#fff
    classDef secretClass fill:#f39c12,stroke:#333,stroke-width:2px,color:#fff
    classDef dbClass fill:#27ae60,stroke:#333,stroke-width:2px,color:#fff
    
    class AUTH,ANON,SERVICE authClass
    class SECRETS,NETO_KEY secretClass
    class DB,RLS dbClass

    note right of SERVICE
        Service Role Key bypasses RLS
        Never expose to client
    end note
```

---

## Performance Optimization Strategies

```mermaid
graph LR
    subgraph "Data Volume Challenges"
        LARGE[Large Datasets<br/>35k+ customers<br/>50k+ items]
    end

    subgraph "Optimization Techniques"
        PAGE[Pagination<br/>500 records/page]
        DEDUP[Deduplication<br/>In-memory filtering]
        BATCH[Batch Processing<br/>Chunk operations]
        INDEX[Database Indexes<br/>Query optimization]
    end

    subgraph "Results"
        PERF[Improved Performance]
        STABLE[System Stability]
        SCALE[Scalability]
    end

    LARGE --> PAGE
    LARGE --> DEDUP
    LARGE --> BATCH
    LARGE --> INDEX

    PAGE --> PERF
    DEDUP --> STABLE
    BATCH --> STABLE
    INDEX --> PERF

    PERF --> SCALE
    STABLE --> SCALE

    classDef challengeClass fill:#e74c3c,stroke:#333,stroke-width:2px,color:#fff
    classDef techniqueClass fill:#3498db,stroke:#333,stroke-width:2px,color:#fff
    classDef resultClass fill:#27ae60,stroke:#333,stroke-width:2px,color:#fff
    
    class LARGE challengeClass
    class PAGE,DEDUP,BATCH,INDEX techniqueClass
    class PERF,STABLE,SCALE resultClass
```

---

## Function Status Dashboard

```mermaid
graph TB
    subgraph "Working Functions ✅"
        W1[GetCustomer<br/>Paginated]
        W2[GetOrder<br/>Paginated]
        W3[GetPayment<br/>Paginated + Dedup]
        W4[GetCategory<br/>No Pagination]
        W5[GetContent<br/>Fixed Limit]
        W6[GetWarehouse<br/>Small Dataset]
        W7[GetRma<br/>Returns Data]
        W8[GetSupplier<br/>No Page Support]
        W9[global_sync<br/>Orchestrator]
    end

    subgraph "Needs Work ⚠️"
        P1[GetItem<br/>Duplicate SKUs]
    end

    subgraph "Broken ❌"
        B1[GetVoucher<br/>Schema Mismatch]
    end

    classDef workingClass fill:#27ae60,stroke:#333,stroke-width:2px,color:#fff
    classDef partialClass fill:#f39c12,stroke:#333,stroke-width:2px,color:#fff
    classDef brokenClass fill:#e74c3c,stroke:#333,stroke-width:2px,color:#fff
    
    class W1,W2,W3,W4,W5,W6,W7,W8,W9 workingClass
    class P1 partialClass
    class B1 brokenClass
```

---

## Pagination Strategy Matrix

| Function | Pagination | Empty Response | Strategy | Notes |
|----------|------------|----------------|----------|-------|
| GetItem | ✅ Yes | `[]` | Page + Limit | Standard pagination |
| GetCustomer | ✅ Yes | `[]` | Page + Limit | 500/page recommended |
| GetOrder | ✅ Yes | `[]` | Page + Limit | Use date filters |
| GetPayment | ✅ Yes | `[]` | Page + Limit + Dedup | Duplicates possible |
| GetCategory | ❌ No | `[]` | Limit only | Small dataset |
| GetContent | ✅ Yes | `[]` | Page + Limit | ~200 pages max |
| GetWarehouse | ❌ No | `[]` | Limit only | ~10 records |
| GetRma | ❌ No | `[]` | Limit only | Variable size |
| GetVoucher | ❌ No | `[]` | Limit only | Schema issues |
| **GetSupplier** | ❌ **No** | `""` | **No Page!** | **Returns empty string** |

---

## Common Integration Patterns

```mermaid
graph LR
    subgraph "Data Sources"
        NETO[Neto Export]
        OTHER[Other Systems]
    end

    subgraph "Supabase Platform"
        DB[(PostgreSQL)]
        FUNC[Edge Functions]
        REALTIME[Realtime]
        STORAGE[Storage]
    end

    subgraph "Applications"
        WEB[Web Apps]
        MOBILE[Mobile Apps]
        BI[Analytics/BI]
        WORKFLOW[Automation]
    end

    NETO --> DB
    OTHER --> DB
    
    DB --> REALTIME
    DB --> FUNC
    
    REALTIME --> WEB
    REALTIME --> MOBILE
    
    FUNC --> WEB
    FUNC --> MOBILE
    FUNC --> WORKFLOW
    
    DB --> BI

    classDef sourceClass fill:#3498db,stroke:#333,stroke-width:2px,color:#fff
    classDef platformClass fill:#27ae60,stroke:#333,stroke-width:2px,color:#fff
    classDef appClass fill:#f39c12,stroke:#333,stroke-width:2px,color:#fff
    
    class NETO,OTHER sourceClass
    class DB,FUNC,REALTIME,STORAGE platformClass
    class WEB,MOBILE,BI,WORKFLOW appClass
```

---

## Future Architecture Considerations

```mermaid
graph TB
    subgraph "Current State"
        PULL[Pull-based Sync<br/>Manual/Scheduled]
        SEQ[Sequential Processing]
        BASIC[Basic Error Handling]
    end

    subgraph "Future Enhancements"
        WEBHOOK[Webhook Support<br/>Real-time updates]
        PARALLEL[Parallel Processing<br/>Concurrent syncs]
        RETRY[Retry Logic<br/>Exponential backoff]
        MONITOR[Monitoring<br/>Alerts & Metrics]
        QUEUE[Queue System<br/>Reliable processing]
        CACHE[Response Caching<br/>Reduce API calls]
    end

    PULL --> WEBHOOK
    SEQ --> PARALLEL
    SEQ --> QUEUE
    BASIC --> RETRY
    BASIC --> MONITOR
    PULL --> CACHE

    classDef currentClass fill:#95a5a6,stroke:#333,stroke-width:2px,color:#fff
    classDef futureClass fill:#3498db,stroke:#333,stroke-width:2px,color:#fff
    
    class PULL,SEQ,BASIC currentClass
    class WEBHOOK,PARALLEL,RETRY,MONITOR,QUEUE,CACHE futureClass
``` 