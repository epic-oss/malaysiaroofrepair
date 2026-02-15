-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Providers Table (Roofing Contractors)
CREATE TABLE providers_roofrepair (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,

  -- Basic Info
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  logo_url TEXT,

  -- Location
  state TEXT NOT NULL,
  city TEXT,

  -- Contact
  phone TEXT,
  email TEXT,
  website TEXT,

  -- Premium Features
  is_premium BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,

  -- Claiming
  is_claimed BOOLEAN DEFAULT false,
  claimed_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,

  -- Services & Roof Types (arrays matching config)
  service_types TEXT[] DEFAULT '{}',
  roof_types TEXT[] DEFAULT '{}',

  -- Business Details
  emergency_service BOOLEAN DEFAULT false,
  price_range TEXT, -- "Budget", "Mid-range", "Premium"
  years_experience INTEGER,
  warranty_offered BOOLEAN DEFAULT false,

  -- Categories (flexible array for additional categorization)
  categories TEXT[] DEFAULT '{}',

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Inquiries Table (Lead Capture)
CREATE TABLE inquiries_roofrepair (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,

  -- Company Relationship (NULL = broadcast lead)
  company_id UUID REFERENCES providers_roofrepair(id) ON DELETE SET NULL,

  -- Source Tracking
  source TEXT NOT NULL, -- "floating_button" or "company_specific_inquiry"

  -- Customer Info
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  lead_company TEXT, -- The company/person requesting quotes

  -- Property Details
  property_type TEXT, -- "Terrace House", "Semi-Detached", etc.
  roof_type TEXT, -- From roofTypes config

  -- Problem Description
  problem_description TEXT NOT NULL,
  urgency TEXT, -- "Emergency (24hr)", "Within this week", etc.
  preferred_date TEXT,

  -- Location
  location TEXT NOT NULL, -- Area/city

  -- Additional Message
  message TEXT,

  -- Timestamp
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Claim Requests Table
CREATE TABLE claim_requests_roofrepair (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,

  -- References
  company_id UUID REFERENCES providers_roofrepair(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,

  -- Status
  status TEXT DEFAULT 'pending', -- "pending", "approved", "rejected"

  -- Timestamp
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for Performance
CREATE INDEX idx_providers_roofrepair_slug ON providers_roofrepair(slug);
CREATE INDEX idx_providers_roofrepair_state ON providers_roofrepair(state);
CREATE INDEX idx_providers_roofrepair_is_premium ON providers_roofrepair(is_premium);
CREATE INDEX idx_providers_roofrepair_is_featured ON providers_roofrepair(is_featured);
CREATE INDEX idx_providers_roofrepair_service_types ON providers_roofrepair USING GIN(service_types);
CREATE INDEX idx_providers_roofrepair_claimed_by ON providers_roofrepair(claimed_by);

CREATE INDEX idx_inquiries_roofrepair_company_id ON inquiries_roofrepair(company_id);
CREATE INDEX idx_inquiries_roofrepair_source ON inquiries_roofrepair(source);
CREATE INDEX idx_inquiries_roofrepair_created_at ON inquiries_roofrepair(created_at DESC);

CREATE INDEX idx_claim_requests_roofrepair_company_id ON claim_requests_roofrepair(company_id);
CREATE INDEX idx_claim_requests_roofrepair_user_id ON claim_requests_roofrepair(user_id);
CREATE INDEX idx_claim_requests_roofrepair_status ON claim_requests_roofrepair(status);

-- Row Level Security (RLS) Policies
ALTER TABLE providers_roofrepair ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries_roofrepair ENABLE ROW LEVEL SECURITY;
ALTER TABLE claim_requests_roofrepair ENABLE ROW LEVEL SECURITY;

-- Providers Policies
CREATE POLICY "Providers are viewable by everyone"
  ON providers_roofrepair FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert providers"
  ON providers_roofrepair FOR INSERT
  WITH CHECK (auth.uid() = claimed_by);

CREATE POLICY "Users can update their own providers"
  ON providers_roofrepair FOR UPDATE
  USING (auth.uid() = claimed_by);

-- Inquiries Policies
CREATE POLICY "Anyone can create inquiries"
  ON inquiries_roofrepair FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Company owners can view their inquiries"
  ON inquiries_roofrepair FOR SELECT
  USING (
    company_id IN (
      SELECT id FROM providers_roofrepair WHERE claimed_by = auth.uid()
    )
    OR
    company_id IS NULL -- Broadcast leads visible to all authenticated users with companies
  );

-- Claim Requests Policies
CREATE POLICY "Authenticated users can create claim requests"
  ON claim_requests_roofrepair FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own claim requests"
  ON claim_requests_roofrepair FOR SELECT
  USING (auth.uid() = user_id);

-- Note: Admin operations will use service role key to bypass RLS

-- Trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column_roofrepair()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_providers_roofrepair_updated_at
  BEFORE UPDATE ON providers_roofrepair
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column_roofrepair();

-- Comments for documentation
COMMENT ON TABLE providers_roofrepair IS 'Roofing contractor providers directory';
COMMENT ON TABLE inquiries_roofrepair IS 'Lead capture from floating button (broadcast) and company pages (direct)';
COMMENT ON TABLE claim_requests_roofrepair IS 'Requests from users to claim ownership of a provider listing';

COMMENT ON COLUMN inquiries_roofrepair.company_id IS 'NULL = broadcast lead to all premium vendors, otherwise direct to specific company';
COMMENT ON COLUMN providers_roofrepair.is_premium IS 'Premium subscribers (RM99/month) - appear first and receive broadcast leads';
