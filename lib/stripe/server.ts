import Stripe from 'stripe'
import 'server-only'

// Lazy-load Stripe client to avoid build-time errors
let stripeInstance: Stripe | null = null

export function getStripe(): Stripe {
  if (!stripeInstance) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY is not set in environment variables')
    }
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
      typescript: true,
    })
  }
  return stripeInstance
}

// For backward compatibility with webhook route
export const stripe = {
  get webhooks() {
    return getStripe().webhooks
  },
  get checkout() {
    return getStripe().checkout
  },
  get subscriptions() {
    return getStripe().subscriptions
  },
  get billingPortal() {
    return getStripe().billingPortal
  },
}

/**
 * Create a Stripe Checkout Session for Premium subscription
 */
export async function createCheckoutSession({
  userId,
  companyId,
  companyName,
  userEmail,
  successUrl,
  cancelUrl,
}: {
  userId: string
  companyId: string
  companyName: string
  userEmail: string
  successUrl: string
  cancelUrl: string
}) {
  if (!process.env.STRIPE_PREMIUM_PRICE_ID) {
    throw new Error('STRIPE_PREMIUM_PRICE_ID is not set')
  }

  try {
    const stripeClient = getStripe()
    const session = await stripeClient.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: process.env.STRIPE_PREMIUM_PRICE_ID,
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: userEmail,
      client_reference_id: companyId,
      metadata: {
        userId,
        companyId,
        companyName,
      },
      subscription_data: {
        metadata: {
          userId,
          companyId,
          companyName,
        },
      },
    })

    return { sessionId: session.id, url: session.url }
  } catch (error) {
    console.error('Error creating checkout session:', error)
    throw error
  }
}

/**
 * Create a Stripe Customer Portal Session
 * Allows customers to manage their subscription, update payment methods, etc.
 */
export async function createCustomerPortalSession({
  customerId,
  returnUrl,
}: {
  customerId: string
  returnUrl: string
}) {
  try {
    const stripeClient = getStripe()
    const session = await stripeClient.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl,
    })

    return { url: session.url }
  } catch (error) {
    console.error('Error creating customer portal session:', error)
    throw error
  }
}

/**
 * Get subscription details
 */
export async function getSubscription(subscriptionId: string) {
  try {
    const stripeClient = getStripe()
    const subscription = await stripeClient.subscriptions.retrieve(subscriptionId)
    return subscription
  } catch (error) {
    console.error('Error retrieving subscription:', error)
    return null
  }
}

/**
 * Cancel a subscription
 */
export async function cancelSubscription(subscriptionId: string) {
  try {
    const stripeClient = getStripe()
    const subscription = await stripeClient.subscriptions.cancel(subscriptionId)
    return subscription
  } catch (error) {
    console.error('Error cancelling subscription:', error)
    throw error
  }
}
