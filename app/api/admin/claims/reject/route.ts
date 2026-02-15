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

    const { claimId } = await request.json()

    if (!claimId) {
      return NextResponse.json(
        { error: 'Missing claim ID' },
        { status: 400 }
      )
    }

    const adminSupabase = createAdminClient()

    // Update claim request status
    const { error } = await adminSupabase
      .from('claim_requests_roofrepair')
      .update({ status: 'rejected' })
      .eq('id', claimId)

    if (error) {
      console.error('Failed to reject claim:', error)
      return NextResponse.json(
        { error: 'Failed to reject claim' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Reject claim error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
