
TRUNCATE TABLE supplier CASCADE;
TRUNCATE TABLE item CASCADE;
TRUNCATE TABLE customer CASCADE;
TRUNCATE TABLE orders CASCADE;
TRUNCATE TABLE payment CASCADE;
TRUNCATE TABLE rma CASCADE;
TRUNCATE TABLE voucher CASCADE;
TRUNCATE TABLE category CASCADE;
TRUNCATE TABLE content CASCADE;
TRUNCATE TABLE warehouse CASCADE;

DROP TABLE IF EXISTS sync_state CASCADE;

CREATE TABLE IF NOT EXISTS sync_log (
    entity_type TEXT PRIMARY KEY,
    last_sync_date TIMESTAMP WITH TIME ZONE DEFAULT '2000-01-01 00:00:00+00',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO sync_log (entity_type, last_sync_date) VALUES 
    ('suppliers', '2012-01-01 00:00:00+00'),
    ('items', '2012-01-01 00:00:00+00'),
    ('customers', '2012-01-01 00:00:00+00'),
    ('orders', '2012-01-01 00:00:00+00'),
    ('payments', '2012-01-01 00:00:00+00'),
    ('warehouses', '2012-01-01 00:00:00+00'),
    ('rmas', '2012-01-01 00:00:00+00'),
    ('categories', '2012-01-01 00:00:00+00'),
    ('contents', '2012-01-01 00:00:00+00'),
    ('vouchers', '2012-01-01 00:00:00+00')
ON CONFLICT (entity_type) DO UPDATE SET last_sync_date = EXCLUDED.last_sync_date;

SELECT 'READY FOR BACKFILL!' as status; 