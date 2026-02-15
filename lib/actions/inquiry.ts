'use server'

import { revalidatePath } from 'next/cache'
import { createAdminClient } from '@/lib/supabase/admin'
import { inquirySchema } from '@/lib/utils/validators'

interface InquiryFormData {
  full_name: string
  email: string
  phone: string
  lead_company?: string
  property_type?: string
  roof_type?: string
  problem_description: string
  urgency?: string
  location: string
  preferred_date?: string
  message?: string
}

/**
 * FLOW 1: Create Broadcast Lead (Floating "Get Free Quotes" button)
 * - Saves to inquiries table with company_id = NULL
 * - Sends to Make.com webhook for distribution to all premium vendors
 */
export async function createBroadcastLead(formData: FormData) {
  // Parse and validate form data
  const rawData: InquiryFormData = {
    full_name: formData.get('full_name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    lead_company: (formData.get('lead_company') as string) || undefined,
    property_type: (formData.get('property_type') as string) || undefined,
    roof_type: (formData.get('roof_type') as string) || undefined,
    problem_description: formData.get('problem_description') as string,
    urgency: (formData.get('urgency') as string) || undefined,
    location: formData.get('location') as string,
    preferred_date: (formData.get('preferred_date') as string) || undefined,
    message: (formData.get('message') as string) || undefined,
  }

  const validation = inquirySchema.safeParse(rawData)

  if (!validation.success) {
    return { error: validation.error.errors[0].message }
  }

  const data = validation.data

  // Insert inquiry to database (company_id = NULL for broadcast)
  const supabaseAdmin = createAdminClient()
  const { data: inquiry, error } = await supabaseAdmin
    .from('inquiries_roofrepair')
    .insert({
      company_id: null, // NULL = broadcast lead
      source: 'floating_button',
      full_name: data.full_name,
      email: data.email,
      phone: data.phone,
      lead_company: data.lead_company || null,
      property_type: data.property_type || null,
      roof_type: data.roof_type || null,
      problem_description: data.problem_description,
      urgency: data.urgency || null,
      location: data.location,
      preferred_date: data.preferred_date || null,
      message: data.message || null,
    })
    .select()
    .single()

  if (error) {
    console.error('Error creating broadcast inquiry:', error)
    return { error: 'Failed to submit inquiry. Please try again.' }
  }

  // Send to Make.com webhook for distribution
  const webhookUrl = process.env.MAKE_QUOTE_WEBHOOK_URL

  if (webhookUrl) {
    try {
      const webhookPayload = {
        source: 'floating_button',
        fullName: data.full_name,
        email: data.email,
        phone: data.phone,
        leadCompany: data.lead_company || '',
        companyName: null, // Broadcast = no specific company
        propertyType: data.property_type || '',
        roofType: data.roof_type || '',
        problemDescription: data.problem_description,
        urgency: data.urgency || '',
        location: data.location,
        preferredDate: data.preferred_date || '',
        message: data.message || '',
        inquiryId: inquiry.id,
        createdAt: inquiry.created_at,
      }

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(webhookPayload),
      })
    } catch (webhookError) {
      console.error('Error sending to Make.com webhook:', webhookError)
      // Don't fail the request if webhook fails - inquiry is already saved
    }
  }

  return { success: true, inquiryId: inquiry.id }
}

/**
 * FLOW 2: Create Direct Lead (Company-specific "Get Quote" button)
 * - Saves to inquiries table with company_id set
 * - Sends to Make.com webhook for routing to specific company
 */
export async function createDirectLead(companyId: string, formData: FormData) {
  // Get company details first
  const supabaseAdmin = createAdminClient()
  const { data: company } = await supabaseAdmin
    .from('providers_roofrepair')
    .select('id, name, email')
    .eq('id', companyId)
    .single()

  if (!company) {
    return { error: 'Company not found' }
  }

  // Parse and validate form data
  const rawData: InquiryFormData = {
    full_name: formData.get('full_name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    lead_company: (formData.get('lead_company') as string) || undefined,
    property_type: (formData.get('property_type') as string) || undefined,
    roof_type: (formData.get('roof_type') as string) || undefined,
    problem_description: formData.get('problem_description') as string,
    urgency: (formData.get('urgency') as string) || undefined,
    location: formData.get('location') as string,
    preferred_date: (formData.get('preferred_date') as string) || undefined,
    message: (formData.get('message') as string) || undefined,
  }

  const validation = inquirySchema.safeParse(rawData)

  if (!validation.success) {
    return { error: validation.error.errors[0].message }
  }

  const data = validation.data

  // Insert inquiry to database (company_id SET for direct lead)
  const { data: inquiry, error } = await supabaseAdmin
    .from('inquiries_roofrepair')
    .insert({
      company_id: companyId,
      source: 'company_specific_inquiry',
      full_name: data.full_name,
      email: data.email,
      phone: data.phone,
      lead_company: data.lead_company || null,
      property_type: data.property_type || null,
      roof_type: data.roof_type || null,
      problem_description: data.problem_description,
      urgency: data.urgency || null,
      location: data.location,
      preferred_date: data.preferred_date || null,
      message: data.message || null,
    })
    .select()
    .single()

  if (error) {
    console.error('Error creating direct inquiry:', error)
    return { error: 'Failed to submit inquiry. Please try again.' }
  }

  // Send to Make.com webhook for routing to specific company
  const webhookUrl = process.env.MAKE_QUOTE_WEBHOOK_URL

  if (webhookUrl) {
    try {
      const webhookPayload = {
        source: 'company_specific_inquiry',
        fullName: data.full_name,
        email: data.email,
        phone: data.phone,
        leadCompany: data.lead_company || '',
        companyName: company.name,
        companyEmail: company.email,
        companyId: company.id,
        propertyType: data.property_type || '',
        roofType: data.roof_type || '',
        problemDescription: data.problem_description,
        urgency: data.urgency || '',
        location: data.location,
        preferredDate: data.preferred_date || '',
        message: data.message || '',
        inquiryId: inquiry.id,
        createdAt: inquiry.created_at,
      }

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(webhookPayload),
      })
    } catch (webhookError) {
      console.error('Error sending to Make.com webhook:', webhookError)
      // Don't fail the request if webhook fails - inquiry is already saved
    }
  }

  // Revalidate dashboard
  revalidatePath('/dashboard/leads')

  return { success: true, inquiryId: inquiry.id }
}

/**
 * Get inquiries for a specific company (for dashboard)
 * Only returns inquiries for companies owned by the authenticated user
 */
export async function getCompanyInquiries(companyId: string) {
  const supabaseAdmin = createAdminClient()
  const { data, error } = await supabaseAdmin
    .from('inquiries_roofrepair')
    .select('*')
    .eq('company_id', companyId)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching inquiries:', error)
    return []
  }

  return data || []
}

/**
 * Get all broadcast leads (for premium vendors to view)
 * These are inquiries with company_id = NULL
 */
export async function getBroadcastLeads() {
  const supabaseAdmin = createAdminClient()
  const { data, error } = await supabaseAdmin
    .from('inquiries_roofrepair')
    .select('*')
    .is('company_id', null)
    .order('created_at', { ascending: false })
    .limit(50) // Latest 50 broadcast leads

  if (error) {
    console.error('Error fetching broadcast leads:', error)
    return []
  }

  return data || []
}

/**
 * Get total inquiry count (for admin stats)
 */
export async function getInquiryCount(): Promise<number> {
  const supabaseAdmin = createAdminClient()
  const { count } = await supabaseAdmin
    .from('inquiries_roofrepair')
    .select('*', { count: 'exact', head: true })

  return count || 0
}
