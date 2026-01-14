-- Add objectives column to case_studies table
ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS objectives TEXT;
