CREATE TABLE IF NOT EXISTS sync_state (
    id SERIAL PRIMARY KEY,
    entity_type TEXT NOT NULL,
    last_synced_page INTEGER DEFAULT 0,
    last_synced_date TIMESTAMP,
    total_records INTEGER DEFAULT 0,
    is_complete BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create unique index on entity_type
CREATE UNIQUE INDEX IF NOT EXISTS idx_sync_state_entity_type ON sync_state(entity_type);

-- Insert initial records for orders and vouchers
INSERT INTO sync_state (entity_type, last_synced_page, last_synced_date, is_complete, total_records)
VALUES 
  ('items', 0, NULL, false, 0),
  ('customers', 0, NULL, false, 0),
  ('orders', 0, NULL, false, 0),
  ('payments', 0, NULL, false, 0),
  ('warehouses', 0, NULL, false, 0),
  ('rmas', 0, NULL, false, 0),
  ('contents', 0, NULL, false, 0),
  ('categories', 0, NULL, false, 0),
  ('vouchers', 0, NULL, false, 0),
  ('suppliers', 0, NULL, false, 0)
ON CONFLICT (entity_type) DO NOTHING; 