-- Migration script to add missing columns to existing supplier table
-- Run this if you already have a supplier table but need to add new fields

-- Add missing columns (safe - won't error if column already exists)
DO $$ 
BEGIN
    -- Add numeric ID column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'supplier' AND column_name = 'id') THEN
        ALTER TABLE supplier ADD COLUMN id INTEGER;
    END IF;
    
    -- Add lead time columns
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'supplier' AND column_name = 'lead_time_1') THEN
        ALTER TABLE supplier ADD COLUMN lead_time_1 INTEGER;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'supplier' AND column_name = 'lead_time_2') THEN
        ALTER TABLE supplier ADD COLUMN lead_time_2 INTEGER;
    END IF;
    
    -- Add business detail columns
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'supplier' AND column_name = 'export_template') THEN
        ALTER TABLE supplier ADD COLUMN export_template TEXT;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'supplier' AND column_name = 'account_code') THEN
        ALTER TABLE supplier ADD COLUMN account_code TEXT;
    END IF;
    
    -- Add factory address columns
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'supplier' AND column_name = 'factory_street1') THEN
        ALTER TABLE supplier ADD COLUMN factory_street1 TEXT;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'supplier' AND column_name = 'factory_street2') THEN
        ALTER TABLE supplier ADD COLUMN factory_street2 TEXT;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'supplier' AND column_name = 'factory_city') THEN
        ALTER TABLE supplier ADD COLUMN factory_city TEXT;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'supplier' AND column_name = 'factory_state') THEN
        ALTER TABLE supplier ADD COLUMN factory_state TEXT;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'supplier' AND column_name = 'factory_postcode') THEN
        ALTER TABLE supplier ADD COLUMN factory_postcode TEXT;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'supplier' AND column_name = 'factory_country') THEN
        ALTER TABLE supplier ADD COLUMN factory_country TEXT;
    END IF;
    
    -- Add system columns if missing
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'supplier' AND column_name = 'created_at') THEN
        ALTER TABLE supplier ADD COLUMN created_at TIMESTAMP DEFAULT NOW();
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'supplier' AND column_name = 'updated_at') THEN
        ALTER TABLE supplier ADD COLUMN updated_at TIMESTAMP DEFAULT NOW();
    END IF;
END $$;

-- Add new indexes if they don't exist
CREATE INDEX IF NOT EXISTS idx_supplier_id_numeric ON supplier(id);
CREATE INDEX IF NOT EXISTS idx_supplier_account_code ON supplier(account_code);

-- Add/update column comments
COMMENT ON COLUMN supplier.id IS 'Numeric ID from Neto (ID field)';
COMMENT ON COLUMN supplier.lead_time_1 IS 'Primary lead time in days (LeadTime1)';
COMMENT ON COLUMN supplier.lead_time_2 IS 'Secondary lead time in days (LeadTime2)';
COMMENT ON COLUMN supplier.account_code IS 'Accounting system code (AccountCode)';
COMMENT ON COLUMN supplier.export_template IS 'Export template reference (ExportTemplate)';

-- Create or replace the update trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_supplier_updated_at ON supplier;
CREATE TRIGGER update_supplier_updated_at BEFORE UPDATE
    ON supplier FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Show final table structure
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'supplier'
ORDER BY ordinal_position; 