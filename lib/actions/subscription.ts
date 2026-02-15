'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { createCheckoutSession, createCustomerPortalSession } from '@/lib/stripe/server'

/**
 * Upgrade a company to Premium (RM99/month)
 * Creates a Stripe Checkout Session
 */
export async function upgradeToPremium(companyId: string) {
  const supabase = await createClient()

  // Check authentication
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return { error: 'You must be logged in to upgrade' }
  }

  // Verify company ownership
  const { data: company, error: companyError } = await supabase
    .from('providers_roofrepair')
    .select('id, name, claimed_by, is_premium')
    .eq('id', companyId)
    .single()

  if (companyError || !company) {
    return { error: 'Company not found' }
  }

  if (company.claimed_by !== user.id) {
    return { error: 'You do not own this company' }
  }

  if (company.is_premium) {
    return { error: 'Company is already premium' }
  }

  // Get user email
  const userEmail = user.email || ''

  // Create Stripe Checkout Session
  try {
    const { url } = await createCheckoutSession({
      userId: user.id,
      companyId: company.id,
      companyName: company.name,
      userEmail,
      successUrl: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard?upgraded=true`,
      cancelUrl: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/pricing?cancelled=true`,
    })

    if (!url) {
      return { error: 'Failed to create checkout session' }
    }

    // Redirect to Stripe Checkout
    redirect(url)
  } catch (error) {
    console.error('Error creating checkout:', error)
    return { error: 'Failed to start checkout process' }
  }
}

/**
 * Manage billing via Stripe Customer Portal
 * Allows users to update payment methods, view invoices, cancel subscription, etc.
 */
export async function manageBilling(companyId: string) {
  const supabase = await createClient()

  // Check authentication
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return { error: 'You must be logged in' }
  }

  // Get company with Stripe customer ID
  const { data: company, error: companyError } = await supabase
    .from('providers_roofrepair')
    .select('id, claimed_by, stripe_customer_id')
    .eq('id', companyId)
    .single()

  if (companyError || !company) {
    return { error: 'Company not found' }
  }

  if (company.claimed_by !== user.id) {
    return { error: 'You do not own this company' }
  }

  // Need to add stripe_customer_id column to companies table
  // For now, return error if not set
  if (!company.stripe_customer_id) {
    return { error: 'No active subscription found. Please upgrade first.' }
  }

  try {
    const { url } = await createCustomerPortalSession({
      customerId: company.stripe_customer_id,
      returnUrl: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard`,
    })

    if (!url) {
      return { error: 'Failed to create billing portal session' }
    }

    // Redirect to Stripe Customer Portal
    redirect(url)
  } catch (error) {
    console.error('Error creating portal session:', error)
    return { error: 'Failed to access billing portal' }
  }
}

/**
 * Get subscription status for a company
 */
export async function getSubscriptionStatus(companyId: string) {
  const supabase = await createClient()

  const { data: company, error } = await supabase
    .from('providers_roofrepair')
    .select('is_premium, stripe_subscription_id, stripe_subscription_status, stripe_current_period_end')
    .eq('id', companyId)
    .single()

  if (error || !company) {
    return null
  }

  return {
    isPremium: company.is_premium,
    subscriptionId: company.stripe_subscription_id,
    status: company.stripe_subscription_status,
    currentPeriodEnd: company.stripe_current_period_end,
  }
}
