-- Add Stripe-related columns to companies table
ALTER TABLE companies
ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT,
ADD COLUMN IF NOT EXISTS stripe_subscription_id TEXT,
ADD COLUMN IF NOT EXISTS stripe_subscription_status TEXT,
ADD COLUMN IF NOT EXISTS stripe_current_period_end TIMESTAMPTZ;

-- Add index for faster Stripe lookups
CREATE INDEX IF NOT EXISTS idx_companies_stripe_customer ON companies(stripe_customer_id);
CREATE INDEX IF NOT EXISTS idx_companies_stripe_subscription ON companies(stripe_subscription_id);

-- Add comment
COMMENT ON COLUMN companies.stripe_customer_id IS 'Stripe customer ID for billing';
COMMENT ON COLUMN companies.stripe_subscription_id IS 'Stripe subscription ID for premium tier';
COMMENT ON COLUMN companies.stripe_subscription_status IS 'Stripe subscription status: active, canceled, past_due, etc.';
COMMENT ON COLUMN companies.stripe_current_period_end IS 'Current billing period end date';
