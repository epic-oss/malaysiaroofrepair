import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

// ─── Types ────────────────────────────────────────────────────────────────────

interface InquiryBody {
  name: string
  phone: string
  email?: string
  property_type: string
  issue_type?: string
  description: string
  state?: string
}

// ─── Validation ───────────────────────────────────────────────────────────────

function validate(body: unknown): { ok: true; data: InquiryBody } | { ok: false; error: string } {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Invalid request body.' }
  }

  const b = body as Record<string, unknown>

  const name = typeof b.name === 'string' ? b.name.trim() : ''
  const phone = typeof b.phone === 'string' ? b.phone.trim() : ''
  const property_type = typeof b.property_type === 'string' ? b.property_type.trim() : ''
  const description = typeof b.description === 'string' ? b.description.trim() : ''

  if (name.length < 2) return { ok: false, error: 'Please enter your full name.' }
  if (phone.length < 8) return { ok: false, error: 'Please enter a valid phone number.' }
  if (!property_type) return { ok: false, error: 'Please select a property type.' }
  if (description.length < 10) return { ok: false, error: 'Please describe your issue (at least 10 characters).' }

  return {
    ok: true,
    data: {
      name,
      phone,
      email: typeof b.email === 'string' ? b.email.trim() : '',
      property_type,
      issue_type: typeof b.issue_type === 'string' ? b.issue_type.trim() : '',
      description,
      state: typeof b.state === 'string' ? b.state.trim() : '',
    },
  }
}

// ─── POST handler ─────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null)

    const result = validate(body)
    if (!result.ok) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 })
    }

    const { name, phone, email, property_type, issue_type, description, state } = result.data

    // ── Save to Supabase ───────────────────────────────────────────────────────
    const supabase = createAdminClient()

    // ── Forward to Make.com webhook FIRST (critical path for lead delivery) ───
    const webhookUrl = process.env.MAKE_WEBHOOK_URL || process.env.MAKE_QUOTE_WEBHOOK_URL

    if (webhookUrl && !webhookUrl.startsWith('your_')) {
      try {
        const webhookRes = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            source: 'malaysiaroofrepair.com',
            name,
            phone,
            email: email || '',
            property_type,
            issue_type: issue_type || '',
            description,
            state: state || '',
            timestamp: new Date().toISOString(),
          }),
        })
        if (!webhookRes.ok) {
          console.error('[/api/inquiry] Make.com returned non-OK status:', webhookRes.status)
        } else {
          console.log('[/api/inquiry] Make.com webhook delivered successfully')
        }
      } catch (err) {
        console.error('[/api/inquiry] Make.com webhook fetch failed:', err)
      }
    } else {
      console.warn('[/api/inquiry] MAKE_WEBHOOK_URL is not set or is still a placeholder — skipping webhook')
    }

    // ── Save to Supabase (non-blocking — lead already captured via webhook) ──
    const { error: dbError } = await supabase.from('inquiries_roofrepair').insert({
      full_name: name,
      phone,
      email: email || '',
      property_type,
      issue_type: issue_type || null,
      problem_description: description,
      location: state || '',
      source: 'malaysiaroofrepair.com',
      status: 'new',
      company_id: null,
    })

    if (dbError) {
      // Log but don't fail — the lead was already sent via webhook
      console.error('[/api/inquiry] Supabase insert error (lead still captured via webhook):', dbError)
    }

    return NextResponse.json({
      success: true,
      message: 'Your request has been submitted! Our contractors will contact you within 24 hours.',
    })
  } catch (err) {
    console.error('[/api/inquiry] Unexpected error:', err)
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again.' },
      { status: 500 },
    )
  }
}
