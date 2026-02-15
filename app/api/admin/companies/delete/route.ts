import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

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

    const { companyId } = await request.json()

    if (!companyId) {
      return NextResponse.json(
        { error: 'Missing company ID' },
        { status: 400 }
      )
    }

    const adminSupabase = createAdminClient()

    // Delete related inquiries first
    await adminSupabase.from('inquiries_roofrepair').delete().eq('company_id', companyId)

    // Delete related claim requests
    await adminSupabase.from('claim_requests_roofrepair').delete().eq('company_id', companyId)

    // Delete company
    const { error } = await adminSupabase
      .from('providers_roofrepair')
      .delete()
      .eq('id', companyId)

    if (error) {
      console.error('Failed to delete company:', error)
      return NextResponse.json(
        { error: 'Failed to delete company' },
        { status: 500 }
      )
    }

    // Revalidate pages
    revalidatePath('/listings')
    revalidatePath('/')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete company error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
