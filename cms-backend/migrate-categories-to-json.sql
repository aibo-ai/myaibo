-- Convert categories column from text[] to jsonb (Neon/Postgres)
BEGIN;

-- Drop existing default so ALTER TYPE can proceed
ALTER TABLE blogs ALTER COLUMN categories DROP DEFAULT;

-- Convert array to jsonb
ALTER TABLE blogs ALTER COLUMN categories TYPE jsonb USING to_jsonb(categories);

-- Ensure default is an empty JSON array
ALTER TABLE blogs ALTER COLUMN categories SET DEFAULT '[]'::jsonb;

-- Create a GIN index for categories if not exists (jsonb)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relname = 'idx_blogs_categories_jsonb' AND n.nspname = 'public'
  ) THEN
    EXECUTE 'CREATE INDEX idx_blogs_categories_jsonb ON blogs USING gin (categories)';
  END IF;
END$$;

COMMIT;
