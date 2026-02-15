import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // TODO: Add admin check here
    // const ADMIN_USER_IDS = ['your-admin-user-id']
    // if (!ADMIN_USER_IDS.includes(user.id)) {
    //   return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    // }

    const { claimId, companyId, userId } = await request.json()

    if (!claimId || !companyId || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const adminSupabase = createAdminClient()

    // Update claim request status
    const { error: claimError } = await adminSupabase
      .from('claim_requests_roofrepair')
      .update({ status: 'approved' })
      .eq('id', claimId)

    if (claimError) {
      console.error('Failed to update claim:', claimError)
      return NextResponse.json(
        { error: 'Failed to approve claim' },
        { status: 500 }
      )
    }

    // Update company
    const { error: companyError } = await adminSupabase
      .from('providers_roofrepair')
      .update({
        is_claimed: true,
        claimed_by: userId,
      })
      .eq('id', companyId)

    if (companyError) {
      console.error('Failed to update company:', companyError)
      return NextResponse.json(
        { error: 'Failed to update company' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Approve claim error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
