
CREATE TABLE IF NOT EXISTS sync_log (
    entity_type TEXT PRIMARY KEY,
    last_sync_date TIMESTAMP WITH TIME ZONE DEFAULT '2000-01-01 00:00:00+00'::timestamp with time zone,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO sync_log (entity_type) VALUES 
    ('suppliers'),
    ('items'),
    ('customers'),
    ('orders'),
    ('payments'),
    ('warehouses'),
    ('rmas'),
    ('categories'),
    ('contents'),
    ('vouchers')
ON CONFLICT (entity_type) DO NOTHING;

CREATE OR REPLACE FUNCTION update_sync_log_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER sync_log_updated_at_trigger
    BEFORE UPDATE ON sync_log
    FOR EACH ROW
    EXECUTE FUNCTION update_sync_log_updated_at(); 