# Supabase × Neto Edge Functions

This repository contains a suite of **Supabase Edge Functions** that pull data from the [Neto](https://www.netohq.com/) API and upsert the results into corresponding tables in your Supabase project.

Each business-logic function lives in the repository root as a single `*.js` file and uses `utils.js` for shared helpers (Supabase client, Neto API wrapper, data transformers, etc).

---

## 🗂 Project structure

| Path / file            | Purpose |
| ---------------------- | ------- |
| `GetItem.js`           | Upserts product catalogue (`item` table) |
| `GetCustomer.js`       | Upserts customers (`customer` table) |
| `GetOrder.js`          | Upserts orders (`order` table) |
| `GetPayment.js`        | Upserts payments (`payment` table) |
| `GetWarehouse.js`      | Upserts warehouses (`warehouse` table) |
| `GetRma.js`            | Upserts RMAs (`rma` table) |
| `GetContent.js`        | Upserts CMS pages (`content` table) |
| `GetCategory.js`       | Upserts product categories (`category` table) |
| `GetVoucher.js`        | Upserts vouchers (`voucher` table) |
| `global_sync.js`       | Example orchestration script (calls the individual functions) |
| `utils.js`             | Shared utilities used by all functions |
| `.github/workflows/deploy-edge-fns.yml` | GitHub Actions workflow that deploys every `*.js` file (except `utils.js`) as an Edge Function on push to `main` |

---

## 🔑 Required environment variables / secrets

### GitHub repository → workflow

The workflow expects **GitHub Secrets** with the following names:

| Secret name                | Description |
| -------------------------- | ----------- |
| `SUPABASE_ACCESS_TOKEN`    | Personal access token with **`service_role`** on the project |
| `PROJECT_REF`              | Supabase project reference (e.g. `abcd1234`) |
| *Optional* `NETO_API_KEY`  | Neto API key — only needed if you prefer syncing it to Supabase Secrets automatically |

### Supabase Secrets (runtime)

Inside your Supabase project, add these secrets so the Edge Functions can run:

| Secret key                     | Description |
| ------------------------------ | ----------- |
| `SUPABASE_URL`                 | `https://<project-ref>.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY`    | Service-role key so functions can write to your DB |
| `NETO_API_KEY`                 | Neto API key |

You can set them once via the CLI:

```bash
supabase secrets set \
  SUPABASE_URL="https://<project-ref>.supabase.co" \
  SUPABASE_SERVICE_ROLE_KEY="<service-role-key>" \
  NETO_API_KEY="<your-neto-api-key>" \
  --project-ref <project-ref>
```

---

## ▶️ Local development

1. Install the Supabase CLI (>= `2.13.3`):
   ```bash
   brew install supabase/tap/supabase # macOS
   # or
   npm install -g supabase@latest
   ```
2. Log in and link the CLI to your project:
   ```bash
   supabase login
   supabase link --project-ref <project-ref>
   ```
3. Start a function locally:
   ```bash
   supabase functions serve GetItem
   ```
   The CLI bundles `GetItem.js` (and its import `utils.js`) and serves it on `http://localhost:54321/functions/v1/GetItem`.

---

## 🚀 CI / CD deployment (GitHub Actions)

`deploy-edge-fns.yml` automatically runs on every push to `main` **or** via the *Run workflow* button in GitHub UI.

Workflow outline:

1. Checks out the repo.
2. Installs the Supabase CLI.
3. (Optional) Syncs any secrets you define in the script to Supabase Secrets.
4. Loops through every `*.js` file in the repo root, **skipping `utils.js`**, and runs:
   ```bash
   supabase functions deploy <FunctionName> \
     --file <FunctionName>.js \
     --project-ref $PROJECT_REF \
     --use-api
   ```

The `--use-api` flag avoids Docker builds and dramatically speeds up deployments.

---

## ➕ Adding a new function

1. Create `NewFunction.js` in the repo root, following the pattern used by the existing functions:
   ```js
   import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
   import { /* helpers */ } from "./utils.js";

   // your handler …
   serve(() => new Response("Hello from NewFunction"));
   ```
2. Commit & push to `main`.
3. GitHub Actions will automatically deploy it within a minute.

---

## 📝 License

MIT © Timberbits 