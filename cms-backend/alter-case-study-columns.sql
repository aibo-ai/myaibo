-- Alter case_studies table columns from ARRAY to TEXT
-- This script changes industries and tags columns from ARRAY to TEXT

-- First, backup existing data (optional, but recommended)
-- CREATE TABLE case_studies_backup AS SELECT * FROM case_studies;

-- Alter industries column from ARRAY to TEXT
ALTER TABLE case_studies ALTER COLUMN industries TYPE TEXT;
ALTER TABLE case_studies ALTER COLUMN industries SET DEFAULT '[]';
ALTER TABLE case_studies ALTER COLUMN industries SET NOT NULL;

-- Alter tags column from ARRAY to TEXT
ALTER TABLE case_studies ALTER COLUMN tags TYPE TEXT;
ALTER TABLE case_studies ALTER COLUMN tags SET DEFAULT '[]';
ALTER TABLE case_studies ALTER COLUMN tags SET NOT NULL;

-- Update existing data to JSON strings (if any arrays exist)
-- This converts existing arrays to JSON strings
UPDATE case_studies SET industries = industries::text WHERE industries IS NOT NULL;
UPDATE case_studies SET tags = tags::text WHERE tags IS NOT NULL;
