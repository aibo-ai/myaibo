-- Convert tags column from text[] to jsonb (Neon/Postgres)
BEGIN;

-- Drop existing default so ALTER TYPE can proceed
ALTER TABLE blogs ALTER COLUMN tags DROP DEFAULT;

-- Convert array to jsonb
ALTER TABLE blogs ALTER COLUMN tags TYPE jsonb USING to_jsonb(tags);

-- Ensure default is an empty JSON array
ALTER TABLE blogs ALTER COLUMN tags SET DEFAULT '[]'::jsonb;

-- Create a GIN index for tags if not exists (jsonb)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relname = 'idx_blogs_tags_jsonb' AND n.nspname = 'public'
  ) THEN
    EXECUTE 'CREATE INDEX idx_blogs_tags_jsonb ON blogs USING gin (tags)';
  END IF;
END$$;

COMMIT;
