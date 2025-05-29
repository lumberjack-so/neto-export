-- Create supplier table for Neto supplier data
CREATE TABLE IF NOT EXISTS supplier (
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
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_supplier_name ON supplier(supplier_name);
CREATE INDEX idx_supplier_email ON supplier(email);
CREATE INDEX idx_supplier_reference ON supplier(supplier_reference);

-- Create unique constraint for upsert operations
ALTER TABLE supplier ADD CONSTRAINT unique_supplier_id UNIQUE (supplier_id);

-- Add comments for documentation
COMMENT ON TABLE supplier IS 'Supplier information synced from Neto';
COMMENT ON COLUMN supplier.supplier_id IS 'Primary identifier from Neto (SupplierID)';
COMMENT ON COLUMN supplier.supplier_reference IS 'Numeric reference number';
COMMENT ON COLUMN supplier.supplier_name IS 'Company name (SupplierCompany)';
COMMENT ON COLUMN supplier.currency_code IS '3-letter currency code (e.g., AUD, USD)'; 