-- ===================================================================================
-- Neto-Export schema: create all tables with all columns
-- ===================================================================================

-- 1) Trigger function to keep updated_at in sync
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 2) customer
CREATE TABLE IF NOT EXISTS customer (
  username        TEXT        PRIMARY KEY,
  customer_id     TEXT,
  type            TEXT,
  email_address   TEXT,
  active          BOOLEAN,
  date_added      TIMESTAMP,
  date_updated    TIMESTAMP,
  created_at      TIMESTAMP   DEFAULT NOW(),
  updated_at      TIMESTAMP   DEFAULT NOW()
);
CREATE TRIGGER update_customer_updated_at
  BEFORE UPDATE ON customer
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 3) orders
CREATE TABLE IF NOT EXISTS orders (
  order_id     TEXT        PRIMARY KEY,
  username     TEXT,
  order_total  NUMERIC,
  order_status TEXT,
  order_date   TIMESTAMP,
  last_updated TIMESTAMP,
  created_at   TIMESTAMP   DEFAULT NOW(),
  updated_at   TIMESTAMP   DEFAULT NOW()
);
CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 4) payment
CREATE TABLE IF NOT EXISTS payment (
  payment_id     TEXT        PRIMARY KEY,
  payment_amount NUMERIC,
  payment_method TEXT,
  date_payment   TIMESTAMP,
  created_at     TIMESTAMP   DEFAULT NOW(),
  updated_at     TIMESTAMP   DEFAULT NOW()
);
CREATE TRIGGER update_payment_updated_at
  BEFORE UPDATE ON payment
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 5) item
CREATE TABLE IF NOT EXISTS item (
  parent_sku        TEXT        PRIMARY KEY,
  item_id           TEXT,
  brand             TEXT,
  model             TEXT,
  virtual           BOOLEAN,
  name              TEXT,
  primary_supplier  TEXT,
  approved          BOOLEAN,
  is_active         BOOLEAN,
  price_groups      TEXT,
  date_added        TIMESTAMP,
  date_updated      TIMESTAMP,
  created_at        TIMESTAMP   DEFAULT NOW(),
  updated_at        TIMESTAMP   DEFAULT NOW()
);
CREATE TRIGGER update_item_updated_at
  BEFORE UPDATE ON item
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 6) content
CREATE TABLE IF NOT EXISTS content (
  content_id   TEXT        PRIMARY KEY,
  content_name TEXT,
  content_type TEXT,
  date_added   TIMESTAMP,
  date_updated TIMESTAMP,
  created_at   TIMESTAMP   DEFAULT NOW(),
  updated_at   TIMESTAMP   DEFAULT NOW()
);
CREATE TRIGGER update_content_updated_at
  BEFORE UPDATE ON content
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 7) category
CREATE TABLE IF NOT EXISTS category (
  category_id        TEXT        PRIMARY KEY,
  category_name      TEXT,
  parent_category_id TEXT,
  date_added         TIMESTAMP,
  date_updated       TIMESTAMP,
  created_at         TIMESTAMP   DEFAULT NOW(),
  updated_at         TIMESTAMP   DEFAULT NOW()
);
CREATE TRIGGER update_category_updated_at
  BEFORE UPDATE ON category
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 8) warehouse
CREATE TABLE IF NOT EXISTS warehouse (
  warehouse_id   TEXT        PRIMARY KEY,
  warehouse_name TEXT,
  is_default     BOOLEAN,
  city           TEXT,
  state          TEXT,
  country        TEXT,
  created_at     TIMESTAMP   DEFAULT NOW(),
  updated_at     TIMESTAMP   DEFAULT NOW()
);
CREATE TRIGGER update_warehouse_updated_at
  BEFORE UPDATE ON warehouse
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 9) rma
CREATE TABLE IF NOT EXISTS rma (
  rma_id     TEXT        PRIMARY KEY,
  rma_status TEXT,
  rma_date   TIMESTAMP,
  order_id   TEXT,
  created_at TIMESTAMP   DEFAULT NOW(),
  updated_at TIMESTAMP   DEFAULT NOW()
);
CREATE TRIGGER update_rma_updated_at
  BEFORE UPDATE ON rma
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 10) voucher
CREATE TABLE IF NOT EXISTS voucher (
  voucher_id   TEXT        PRIMARY KEY,
  voucher_code TEXT,
  balance      NUMERIC,
  date_added   TIMESTAMP,
  created_at   TIMESTAMP   DEFAULT NOW(),
  updated_at   TIMESTAMP   DEFAULT NOW()
);
CREATE TRIGGER update_voucher_updated_at
  BEFORE UPDATE ON voucher
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 11) supplier
CREATE TABLE IF NOT EXISTS supplier (
  id                  INTEGER,
  supplier_id         TEXT        PRIMARY KEY,
  supplier_reference  INTEGER,
  lead_time_1         INTEGER,
  lead_time_2         INTEGER,
  supplier_name       TEXT        NOT NULL,
  contact_street1     TEXT,
  contact_street2     TEXT,
  contact_city        TEXT,
  contact_state       TEXT,
  contact_postcode    TEXT,
  contact_country     TEXT,
  email               TEXT,
  phone               TEXT,
  fax                 TEXT,
  website             TEXT,
  export_template     TEXT,
  currency_code       TEXT,
  account_code        TEXT,
  factory_street1     TEXT,
  factory_street2     TEXT,
  factory_city        TEXT,
  factory_state       TEXT,
  factory_postcode    TEXT,
  factory_country     TEXT,
  notes               TEXT,
  date_added          TIMESTAMP,
  date_updated        TIMESTAMP,
  created_at          TIMESTAMP   DEFAULT NOW(),
  updated_at          TIMESTAMP   DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_supplier_name       ON supplier(supplier_name);
CREATE INDEX IF NOT EXISTS idx_supplier_email      ON supplier(email);
CREATE INDEX IF NOT EXISTS idx_supplier_reference  ON supplier(supplier_reference);
CREATE INDEX IF NOT EXISTS idx_supplier_id_numeric ON supplier(id);
CREATE INDEX IF NOT EXISTS idx_supplier_country    ON supplier(contact_country);
CREATE INDEX IF NOT EXISTS idx_supplier_account    ON supplier(account_code);
CREATE TRIGGER update_supplier_updated_at
  BEFORE UPDATE ON supplier
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- End of schema