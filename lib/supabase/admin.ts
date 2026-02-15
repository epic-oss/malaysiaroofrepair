import { createClient } from '@supabase/supabase-js'
import 'server-only'

// Helper function to get admin client (lazy-loaded to avoid build-time errors)
// Admin client bypasses RLS - use ONLY for admin operations
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    }
  )
}

// Helper function to check if user is admin
export async function isAdmin(userId: string): Promise<boolean> {
  // TODO: Replace with your actual admin user ID
  const ADMIN_USER_IDS: string[] = [
    // 'your-admin-user-id-here'
  ]

  return ADMIN_USER_IDS.includes(userId)
}
