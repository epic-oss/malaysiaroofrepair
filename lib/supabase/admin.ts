import { createClient } from '@supabase/supabase-js'
import 'server-only'

// Admin client bypasses RLS - use ONLY for admin operations
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

// Helper function to get admin client (for consistency with naming convention)
export function createAdminClient() {
  return supabaseAdmin
}

// Helper function to check if user is admin
export async function isAdmin(userId: string): Promise<boolean> {
  // TODO: Replace with your actual admin user ID
  const ADMIN_USER_IDS = [
    // 'your-admin-user-id-here'
  ]

  return ADMIN_USER_IDS.includes(userId)
}
