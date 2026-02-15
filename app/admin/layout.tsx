import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()

  // Check authentication
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    redirect('/login')
  }

  // TODO: Check if user is admin (add admin role check when you have your admin user ID)
  // For now, you can hardcode your user ID here:
  // const ADMIN_USER_IDS = ['your-admin-user-id']
  // if (!ADMIN_USER_IDS.includes(user.id)) {
  //   redirect('/')
  // }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Admin Panel</h1>
            <Link
              href="/"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Back to Site
            </Link>
          </div>
        </div>
      </div>

      {/* Admin Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex gap-1">
            <Link
              href="/admin/claims"
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 border-b-2 border-transparent hover:border-primary-600 transition-colors"
            >
              Claims
            </Link>
            <Link
              href="/admin/companies"
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 border-b-2 border-transparent hover:border-primary-600 transition-colors"
            >
              Companies
            </Link>
            <Link
              href="/admin/inquiries"
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 border-b-2 border-transparent hover:border-primary-600 transition-colors"
            >
              Inquiries
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">{children}</div>
    </div>
  )
}
