-- UUID Migration with Data Preservation
-- This migration converts INTEGER primary keys to UUIDs while preserving existing data

-- Step 1: Add UUID columns alongside existing INTEGER columns
ALTER TABLE users ADD COLUMN id_uuid UUID DEFAULT uuid_generate_v4();
ALTER TABLE blogs ADD COLUMN id_uuid UUID DEFAULT uuid_generate_v4();
ALTER TABLE blogs ADD COLUMN author_id_uuid UUID;
ALTER TABLE case_studies ADD COLUMN id_uuid UUID DEFAULT uuid_generate_v4();
ALTER TABLE case_studies ADD COLUMN author_id_uuid UUID;
ALTER TABLE whitepapers ADD COLUMN id_uuid UUID DEFAULT uuid_generate_v4();
ALTER TABLE whitepapers ADD COLUMN author_id_uuid UUID;

-- Step 2: Populate UUID columns with new UUIDs for existing records
UPDATE users SET id_uuid = uuid_generate_v4() WHERE id_uuid IS NULL;
UPDATE blogs SET id_uuid = uuid_generate_v4(), author_id_uuid = (SELECT id_uuid FROM users WHERE users.id = blogs.author_id) WHERE id_uuid IS NULL;
UPDATE case_studies SET id_uuid = uuid_generate_v4(), author_id_uuid = (SELECT id_uuid FROM users WHERE users.id = case_studies.author_id) WHERE id_uuid IS NULL;
UPDATE whitepapers SET id_uuid = uuid_generate_v4(), author_id_uuid = (SELECT id_uuid FROM users WHERE users.id = whitepapers.author_id) WHERE id_uuid IS NULL;

-- Step 3: Drop existing foreign key constraints
ALTER TABLE blogs DROP CONSTRAINT IF EXISTS blogs_author_id_fkey;
ALTER TABLE case_studies DROP CONSTRAINT IF EXISTS case_studies_author_id_fkey;
ALTER TABLE whitepapers DROP CONSTRAINT IF EXISTS whitepapers_author_id_fkey;

-- Step 4: Drop existing primary key constraints
ALTER TABLE users DROP CONSTRAINT IF EXISTS users_pkey;
ALTER TABLE blogs DROP CONSTRAINT IF EXISTS blogs_pkey;
ALTER TABLE case_studies DROP CONSTRAINT IF EXISTS case_studies_pkey;
ALTER TABLE whitepapers DROP CONSTRAINT IF EXISTS whitepapers_pkey;

-- Step 5: Rename UUID columns to replace INTEGER columns
ALTER TABLE users RENAME COLUMN id TO id_old;
ALTER TABLE users RENAME COLUMN id_uuid TO id;
ALTER TABLE users DROP COLUMN id_old;

ALTER TABLE blogs RENAME COLUMN id TO id_old;
ALTER TABLE blogs RENAME COLUMN id_uuid TO id;
ALTER TABLE blogs RENAME COLUMN author_id TO author_id_old;
ALTER TABLE blogs RENAME COLUMN author_id_uuid TO author_id;
ALTER TABLE blogs DROP COLUMN id_old, DROP COLUMN author_id_old;

ALTER TABLE case_studies RENAME COLUMN id TO id_old;
ALTER TABLE case_studies RENAME COLUMN id_uuid TO id;
ALTER TABLE case_studies RENAME COLUMN author_id TO author_id_old;
ALTER TABLE case_studies RENAME COLUMN author_id_uuid TO author_id;
ALTER TABLE case_studies DROP COLUMN id_old, DROP COLUMN author_id_old;

ALTER TABLE whitepapers RENAME COLUMN id TO id_old;
ALTER TABLE whitepapers RENAME COLUMN id_uuid TO id;
ALTER TABLE whitepapers RENAME COLUMN author_id TO author_id_old;
ALTER TABLE whitepapers RENAME COLUMN author_id_uuid TO author_id;
ALTER TABLE whitepapers DROP COLUMN id_old, DROP COLUMN author_id_old;

-- Step 6: Add new primary key constraints
ALTER TABLE users ADD PRIMARY KEY (id);
ALTER TABLE blogs ADD PRIMARY KEY (id);
ALTER TABLE case_studies ADD PRIMARY KEY (id);
ALTER TABLE whitepapers ADD PRIMARY KEY (id);

-- Step 7: Add new foreign key constraints
ALTER TABLE blogs ADD CONSTRAINT blogs_author_id_fkey FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE case_studies ADD CONSTRAINT case_studies_author_id_fkey FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE whitepapers ADD CONSTRAINT whitepapers_author_id_fkey FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE;

-- Step 8: Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_blogs_author_id ON blogs(author_id);
CREATE INDEX IF NOT EXISTS idx_case_studies_author_id ON case_studies(author_id);
CREATE INDEX IF NOT EXISTS idx_whitepapers_author_id ON whitepapers(author_id);

-- Step 9: Update RLS policies to use new UUID references
-- Note: RLS policies should automatically work with UUIDs as they reference the same columns

-- Verification: Check that all records have UUIDs
-- SELECT COUNT(*) as users_count FROM users WHERE id IS NULL;
-- SELECT COUNT(*) as blogs_count FROM blogs WHERE id IS NULL OR author_id IS NULL;
-- SELECT COUNT(*) as case_studies_count FROM case_studies WHERE id IS NULL OR author_id IS NULL;
-- SELECT COUNT(*) as whitepapers_count FROM whitepapers WHERE id IS NULL OR author_id IS NULL;
