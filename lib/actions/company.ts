'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { supabaseAdmin } from '@/lib/supabase/admin'
import { companySchema } from '@/lib/utils/validators'
import { generateCompanySlug } from '@/lib/utils/slugify'
import { siteConfig } from '@/lib/config'
import { Company } from '@/lib/types/database'

interface GetCompaniesOptions {
  state?: string
  service?: string
  roofType?: string
  emergency?: boolean
  priceRange?: string
  page?: number
  limit?: number
}

/**
 * Get companies with filtering, sorting (premium first), and pagination
 * Premium → Featured → Regular (automatic sorting)
 */
export async function getCompanies(options: GetCompaniesOptions = {}) {
  const {
    state,
    service,
    roofType,
    emergency,
    priceRange,
    page = 1,
    limit = siteConfig.itemsPerPage,
  } = options

  const supabase = await createClient()

  // Build query
  let query = supabase
    .from('providers_roofrepair')
    .select('*', { count: 'exact' })

  // Filters
  if (state) {
    query = query.eq('state', state)
  }

  if (service) {
    query = query.contains('service_types', [service])
  }

  if (roofType) {
    query = query.contains('roof_types', [roofType])
  }

  if (emergency) {
    query = query.eq('emergency_service', true)
  }

  if (priceRange) {
    query = query.eq('price_range', priceRange)
  }

  // Sorting: Premium first, then Featured, then by created date
  query = query
    .order('is_premium', { ascending: false })
    .order('is_featured', { ascending: false })
    .order('created_at', { ascending: false })

  // Pagination
  const start = (page - 1) * limit
  const end = start + limit - 1
  query = query.range(start, end)

  const { data, error, count } = await query

  if (error) {
    console.error('Error fetching companies:', error)
    return {
      companies: [] as Company[],
      total: 0,
      totalPages: 0,
      currentPage: page,
    }
  }

  return {
    companies: (data || []) as Company[],
    total: count || 0,
    totalPages: Math.ceil((count || 0) / limit),
    currentPage: page,
  }
}

/**
 * Get a single company by slug
 */
export async function getCompanyBySlug(slug: string): Promise<Company | null> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('providers_roofrepair')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching company:', error)
    return null
  }

  return data as Company
}

/**
 * Get companies by state (for location pages)
 */
export async function getCompaniesByState(state: string, limit?: number) {
  return getCompanies({ state, limit })
}

/**
 * Get companies by service type (for service pages)
 */
export async function getCompaniesByService(service: string, limit?: number) {
  return getCompanies({ service, limit })
}

/**
 * Create a new company listing
 * Requires authentication
 */
export async function createCompany(formData: FormData) {
  const supabase = await createClient()

  // Check authentication
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return { error: 'You must be logged in to add a company' }
  }

  // Parse and validate form data
  const rawData = {
    name: formData.get('name') as string,
    description: formData.get('description') as string,
    state: formData.get('state') as string,
    city: formData.get('city') as string,
    phone: formData.get('phone') as string,
    email: formData.get('email') as string,
    website: (formData.get('website') as string) || '',
    service_types: JSON.parse(formData.get('service_types') as string || '[]'),
    roof_types: JSON.parse(formData.get('roof_types') as string || '[]'),
    emergency_service: formData.get('emergency_service') === 'true',
    price_range: formData.get('price_range') as string,
    years_experience: formData.get('years_experience')
      ? parseInt(formData.get('years_experience') as string)
      : null,
    warranty_offered: formData.get('warranty_offered') === 'true',
  }

  const validation = companySchema.safeParse(rawData)

  if (!validation.success) {
    return { error: validation.error.errors[0].message }
  }

  const data = validation.data

  // Generate unique slug
  const baseSlug = generateCompanySlug(data.name, data.city)
  let slug = baseSlug
  let counter = 1

  // Check if slug exists, append number if needed
  while (true) {
    const { data: existing } = await supabase
      .from('providers_roofrepair')
      .select('id')
      .eq('slug', slug)
      .single()

    if (!existing) break
    slug = `${baseSlug}-${counter}`
    counter++
  }

  // Insert company
  const { data: company, error } = await supabase
    .from('providers_roofrepair')
    .insert({
      name: data.name,
      slug,
      description: data.description,
      state: data.state,
      city: data.city,
      phone: data.phone,
      email: data.email,
      website: data.website || null,
      service_types: data.service_types,
      roof_types: data.roof_types || [],
      emergency_service: data.emergency_service || false,
      price_range: data.price_range || null,
      years_experience: data.years_experience || null,
      warranty_offered: data.warranty_offered || false,
      claimed_by: user.id,
      is_claimed: true,
    })
    .select()
    .single()

  if (error) {
    console.error('Error creating company:', error)
    return { error: 'Failed to create company. Please try again.' }
  }

  // Revalidate pages
  revalidatePath('/listings')
  revalidatePath(`/locations/${data.state.toLowerCase()}`)

  // Redirect to the new company page
  redirect(`/companies/${slug}`)
}

/**
 * Update an existing company
 * User must own the company
 */
export async function updateCompany(companyId: string, formData: FormData) {
  const supabase = await createClient()

  // Check authentication
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return { error: 'You must be logged in' }
  }

  // Verify ownership
  const { data: company } = await supabase
    .from('providers_roofrepair')
    .select('claimed_by, slug, state')
    .eq('id', companyId)
    .single()

  if (!company || company.claimed_by !== user.id) {
    return { error: 'You do not have permission to edit this company' }
  }

  // Parse and validate data (similar to create)
  const rawData = {
    name: formData.get('name') as string,
    description: formData.get('description') as string,
    state: formData.get('state') as string,
    city: formData.get('city') as string,
    phone: formData.get('phone') as string,
    email: formData.get('email') as string,
    website: (formData.get('website') as string) || '',
    service_types: JSON.parse(formData.get('service_types') as string || '[]'),
    roof_types: JSON.parse(formData.get('roof_types') as string || '[]'),
    emergency_service: formData.get('emergency_service') === 'true',
    price_range: formData.get('price_range') as string,
    years_experience: formData.get('years_experience')
      ? parseInt(formData.get('years_experience') as string)
      : null,
    warranty_offered: formData.get('warranty_offered') === 'true',
  }

  const validation = companySchema.safeParse(rawData)

  if (!validation.success) {
    return { error: validation.error.errors[0].message }
  }

  const data = validation.data

  // Update company
  const { error: updateError } = await supabase
    .from('providers_roofrepair')
    .update({
      name: data.name,
      description: data.description,
      state: data.state,
      city: data.city,
      phone: data.phone,
      email: data.email,
      website: data.website || null,
      service_types: data.service_types,
      roof_types: data.roof_types || [],
      emergency_service: data.emergency_service || false,
      price_range: data.price_range || null,
      years_experience: data.years_experience || null,
      warranty_offered: data.warranty_offered || false,
      updated_at: new Date().toISOString(),
    })
    .eq('id', companyId)

  if (updateError) {
    console.error('Error updating company:', updateError)
    return { error: 'Failed to update company' }
  }

  // Revalidate pages
  revalidatePath(`/companies/${company.slug}`)
  revalidatePath('/listings')
  revalidatePath(`/locations/${company.state.toLowerCase()}`)
  revalidatePath('/dashboard')

  return { success: true }
}

/**
 * Get total company count (for homepage stats)
 */
export async function getCompanyCount(): Promise<number> {
  const supabase = await createClient()

  const { count } = await supabase
    .from('providers_roofrepair')
    .select('*', { count: 'exact', head: true })

  return count || 0
}
