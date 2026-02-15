import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function POST(req: Request) {
  const body = await req.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature provided' },
      { status: 400 }
    )
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    console.error('STRIPE_WEBHOOK_SECRET is not configured')
    return NextResponse.json(
      { error: 'Stripe webhook not configured' },
      { status: 500 }
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    )
  }

  // Handle the event
  try {
    const supabaseAdmin = createAdminClient()

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session

        // Get company ID from metadata
        const companyId = session.metadata?.companyId || session.client_reference_id

        if (!companyId) {
          console.error('No company ID in checkout session')
          break
        }

        // Update company to premium
        const { error } = await supabaseAdmin
          .from('providers_roofrepair')
          .update({
            is_premium: true,
            stripe_customer_id: session.customer as string,
            stripe_subscription_id: session.subscription as string,
            stripe_subscription_status: 'active',
          })
          .eq('id', companyId)

        if (error) {
          console.error('Error updating company after checkout:', error)
        } else {
          console.log(`Company ${companyId} upgraded to premium`)
        }

        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription

        // Find company by subscription ID
        const { data: company } = await supabaseAdmin
          .from('providers_roofrepair')
          .select('id')
          .eq('stripe_subscription_id', subscription.id)
          .single()

        if (!company) {
          console.error('Company not found for subscription:', subscription.id)
          break
        }

        // Update subscription status
        const { error } = await supabaseAdmin
          .from('providers_roofrepair')
          .update({
            stripe_subscription_status: subscription.status,
            stripe_current_period_end: new Date(
              subscription.current_period_end * 1000
            ).toISOString(),
            is_premium: subscription.status === 'active',
          })
          .eq('id', company.id)

        if (error) {
          console.error('Error updating subscription status:', error)
        } else {
          console.log(
            `Subscription ${subscription.id} updated to status: ${subscription.status}`
          )
        }

        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription

        // Find company by subscription ID
        const { data: company } = await supabaseAdmin
          .from('providers_roofrepair')
          .select('id')
          .eq('stripe_subscription_id', subscription.id)
          .single()

        if (!company) {
          console.error('Company not found for subscription:', subscription.id)
          break
        }

        // Downgrade to free tier
        const { error } = await supabaseAdmin
          .from('providers_roofrepair')
          .update({
            is_premium: false,
            stripe_subscription_status: 'canceled',
          })
          .eq('id', company.id)

        if (error) {
          console.error('Error downgrading company:', error)
        } else {
          console.log(`Company ${company.id} downgraded to free tier`)
        }

        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice

        // Find company by customer ID
        const { data: company } = await supabaseAdmin
          .from('providers_roofrepair')
          .select('id, name')
          .eq('stripe_customer_id', invoice.customer as string)
          .single()

        if (company) {
          console.log(`Payment failed for company ${company.name} (${company.id})`)
          // TODO: Send email notification to company owner
        }

        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}
