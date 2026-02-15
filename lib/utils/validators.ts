import { z } from 'zod'

/**
 * Inquiry/Lead Form Validation
 */
export const inquirySchema = z.object({
  full_name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  lead_company: z.string().optional(),
  property_type: z.string().optional(),
  roof_type: z.string().optional(),
  problem_description: z.string().min(20, 'Please provide more details (minimum 20 characters)'),
  urgency: z.string().optional(),
  location: z.string().min(2, 'Location is required'),
  preferred_date: z.string().optional(),
  message: z.string().optional(),
})

export type InquiryFormData = z.infer<typeof inquirySchema>

/**
 * Company Form Validation
 */
export const companySchema = z.object({
  name: z.string().min(2, 'Company name must be at least 2 characters'),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  state: z.string().min(1, 'State is required'),
  city: z.string().min(1, 'City is required'),
  phone: z.string().min(10, 'Invalid phone number'),
  email: z.string().email('Invalid email address'),
  website: z.string().url('Invalid URL').optional().or(z.literal('')),
  service_types: z.array(z.string()).min(1, 'Select at least one service type'),
  roof_types: z.array(z.string()).optional(),
  emergency_service: z.boolean().optional(),
  price_range: z.enum(['Budget', 'Mid-range', 'Premium']).optional(),
  years_experience: z.number().min(0).max(100).optional(),
  warranty_offered: z.boolean().optional(),
})

export type CompanyFormData = z.infer<typeof companySchema>

/**
 * Contact Form Validation
 */
export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof contactSchema>
