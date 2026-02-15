// Database types generated from Supabase schema
// These match the tables defined in supabase/schema.sql

export interface Company {
  id: string
  name: string
  slug: string
  description: string | null
  logo_url: string | null
  state: string
  city: string | null
  phone: string | null
  email: string | null
  website: string | null
  is_premium: boolean
  is_featured: boolean
  is_claimed: boolean
  claimed_by: string | null
  service_types: string[]
  roof_types: string[]
  emergency_service: boolean
  price_range: string | null
  years_experience: number | null
  warranty_offered: boolean
  categories: string[]
  created_at: string
  updated_at: string
}

export interface Inquiry {
  id: string
  company_id: string | null  // null = broadcast lead
  source: 'floating_button' | 'company_specific_inquiry'
  full_name: string
  email: string
  phone: string
  lead_company: string | null
  property_type: string | null
  roof_type: string | null
  problem_description: string
  urgency: string | null
  preferred_date: string | null
  location: string
  message: string | null
  created_at: string
}

export interface ClaimRequest {
  id: string
  company_id: string
  user_id: string
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
}

// Helper type for company with additional computed fields
export interface CompanyWithStats extends Company {
  total_reviews?: number
  average_rating?: number
}
