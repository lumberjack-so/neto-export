-- Drop existing table if needed (be careful with this in production!)
-- DROP TABLE IF EXISTS supplier CASCADE;

-- Create supplier table with ALL fields from Neto API
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
  
  -- Factory address (if different from contact)
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

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_supplier_name ON supplier(supplier_name);
CREATE INDEX IF NOT EXISTS idx_supplier_email ON supplier(email);
CREATE INDEX IF NOT EXISTS idx_supplier_reference ON supplier(supplier_reference);
CREATE INDEX IF NOT EXISTS idx_supplier_id_numeric ON supplier(id);
CREATE INDEX IF NOT EXISTS idx_supplier_country ON supplier(contact_country);
CREATE INDEX IF NOT EXISTS idx_supplier_account_code ON supplier(account_code);

-- Create unique constraint for upsert operations (already handled by PRIMARY KEY)
-- ALTER TABLE supplier ADD CONSTRAINT unique_supplier_id UNIQUE (supplier_id);

-- Add helpful comments
COMMENT ON TABLE supplier IS 'Complete supplier information synced from Neto API';
COMMENT ON COLUMN supplier.id IS 'Numeric ID from Neto (ID field)';
COMMENT ON COLUMN supplier.supplier_id IS 'Primary identifier from Neto (SupplierID field)';
COMMENT ON COLUMN supplier.supplier_reference IS 'Numeric reference number (SupplierReference)';
COMMENT ON COLUMN supplier.supplier_name IS 'Company name (SupplierCompany)';
COMMENT ON COLUMN supplier.lead_time_1 IS 'Primary lead time in days (LeadTime1)';
COMMENT ON COLUMN supplier.lead_time_2 IS 'Secondary lead time in days (LeadTime2)';
COMMENT ON COLUMN supplier.currency_code IS '3-letter currency code (e.g., AUD, USD)';
COMMENT ON COLUMN supplier.account_code IS 'Accounting system code (AccountCode)';
COMMENT ON COLUMN supplier.export_template IS 'Export template reference (ExportTemplate)';

-- Create update trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_supplier_updated_at BEFORE UPDATE
    ON supplier FOR EACH ROW EXECUTE FUNCTION update_updated_at_column(); 