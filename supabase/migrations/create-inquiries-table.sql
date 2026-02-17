-- ============================================================
-- Create inquiries_roofrepair table (safe to run multiple times)
-- Run this in: Supabase Dashboard → SQL Editor → Run
-- ============================================================

-- Step 1: Create table if it doesn't exist
CREATE TABLE IF NOT EXISTS inquiries_roofrepair (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at       TIMESTAMPTZ DEFAULT now(),
  full_name        TEXT NOT NULL,
  phone            TEXT NOT NULL,
  email            TEXT DEFAULT '',
  property_type    TEXT DEFAULT '',
  issue_type       TEXT,
  problem_description TEXT DEFAULT '',
  location         TEXT DEFAULT '',
  source           TEXT DEFAULT 'malaysiaroofrepair.com',
  status           TEXT DEFAULT 'new',
  company_id       UUID
);

-- Step 2: Add any missing columns (safe if already exists)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'inquiries_roofrepair' AND column_name = 'issue_type') THEN
    ALTER TABLE inquiries_roofrepair ADD COLUMN issue_type TEXT;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'inquiries_roofrepair' AND column_name = 'status') THEN
    ALTER TABLE inquiries_roofrepair ADD COLUMN status TEXT DEFAULT 'new';
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'inquiries_roofrepair' AND column_name = 'company_id') THEN
    ALTER TABLE inquiries_roofrepair ADD COLUMN company_id UUID;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'inquiries_roofrepair' AND column_name = 'source') THEN
    ALTER TABLE inquiries_roofrepair ADD COLUMN source TEXT DEFAULT 'malaysiaroofrepair.com';
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'inquiries_roofrepair' AND column_name = 'location') THEN
    ALTER TABLE inquiries_roofrepair ADD COLUMN location TEXT DEFAULT '';
  END IF;
END $$;

-- Step 3: Indexes
CREATE INDEX IF NOT EXISTS idx_inquiries_roofrepair_status     ON inquiries_roofrepair(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_roofrepair_created_at ON inquiries_roofrepair(created_at DESC);

-- Step 4: RLS — allow public inserts (form submissions), service role reads all
ALTER TABLE inquiries_roofrepair ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can insert inquiries" ON inquiries_roofrepair;
CREATE POLICY "Public can insert inquiries"
  ON inquiries_roofrepair FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Step 5: Verify — shows all columns
SELECT column_name, data_type, column_default, is_nullable
FROM information_schema.columns
WHERE table_name = 'inquiries_roofrepair'
ORDER BY ordinal_position;
