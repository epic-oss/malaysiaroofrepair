-- Migration: Add issue_type and status columns to inquiries_roofrepair
-- Run this in the Supabase SQL Editor if the table already exists.
-- Safe to run multiple times (uses IF NOT EXISTS pattern).

-- Add issue_type column (service category selected in the form)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'inquiries_roofrepair' AND column_name = 'issue_type'
  ) THEN
    ALTER TABLE inquiries_roofrepair ADD COLUMN issue_type TEXT;
  END IF;
END $$;

-- Add status column with default 'new'
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'inquiries_roofrepair' AND column_name = 'status'
  ) THEN
    ALTER TABLE inquiries_roofrepair ADD COLUMN status TEXT DEFAULT 'new';
  END IF;
END $$;

-- Add index on status for dashboard queries
CREATE INDEX IF NOT EXISTS idx_inquiries_roofrepair_status
  ON inquiries_roofrepair(status);

-- Backfill status for existing rows
UPDATE inquiries_roofrepair SET status = 'new' WHERE status IS NULL;

-- Verify
SELECT column_name, data_type, column_default
FROM information_schema.columns
WHERE table_name = 'inquiries_roofrepair'
ORDER BY ordinal_position;
