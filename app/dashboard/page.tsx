import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { MessageSquare, Eye, Crown, TrendingUp, ExternalLink } from 'lucide-react'

export default async function DashboardPage() {
  const supabase = await createClient()

  // Check authentication
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    redirect('/login')
  }

  // Get user's company
  const { data: company } = await supabase
    .from('providers_roofrepair')
    .select('*')
    .eq('claimed_by', user.id)
    .single()

  if (!company) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          No Business Listing Found
        </h2>
        <p className="text-gray-600 mb-6">
          You haven't created a business listing yet.
        </p>
        <Link href="/submit">
          <Button variant="primary">Create Your Listing</Button>
        </Link>
      </div>
    )
  }

  // Get inquiry count for this company
  const { count: inquiryCount } = await supabase
    .from('inquiries_roofrepair')
    .select('*', { count: 'exact', head: true })
    .eq('company_id', company.id)

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Leads</p>
                <p className="text-3xl font-bold text-gray-900">{inquiryCount || 0}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                <MessageSquare className="h-6 w-6 text-primary-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Profile Views</p>
                <p className="text-3xl font-bold text-gray-900">0</p>
                <p className="text-xs text-gray-500 mt-1">Coming soon</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100">
                <Eye className="h-6 w-6 text-accent-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Conversion Rate</p>
                <p className="text-3xl font-bold text-gray-900">0%</p>
                <p className="text-xs text-gray-500 mt-1">Coming soon</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Company Info Card */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle>Your Business</CardTitle>
              <p className="mt-1 text-sm text-gray-600">{company.name}</p>
            </div>
            {company.is_premium && (
              <Badge variant="premium">
                <Crown className="mr-1 h-3 w-3" />
                Premium
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-600">Location</p>
              <p className="font-medium text-gray-900">
                {company.city && `${company.city}, `}
                {company.state}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Status</p>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <p className="font-medium text-gray-900">Active</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600">Services</p>
              <p className="font-medium text-gray-900">
                {company.service_types.length} service{company.service_types.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Plan</p>
              <p className="font-medium text-gray-900">
                {company.is_premium ? 'Premium' : 'Free'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href={`/companies/${company.slug}`} target="_blank">
              <Button variant="outline" size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Public Profile
              </Button>
            </Link>

            <Link href="/dashboard/settings">
              <Button variant="outline" size="sm">
                Edit Business Info
              </Button>
            </Link>

            {!company.is_premium && (
              <Link href="/pricing">
                <Button variant="gold" size="sm">
                  <Crown className="mr-2 h-4 w-4" />
                  Upgrade to Premium
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/dashboard/leads"
              className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-primary-300 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                <MessageSquare className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">View Leads</p>
                <p className="text-sm text-gray-600">
                  {inquiryCount || 0} total inquiry{inquiryCount !== 1 ? 'ies' : 'y'}
                </p>
              </div>
            </Link>

            <Link
              href="/dashboard/subscription"
              className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-primary-300 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-100">
                <Crown className="h-5 w-5 text-gold-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Manage Subscription</p>
                <p className="text-sm text-gray-600">
                  {company.is_premium ? 'Premium Plan' : 'Free Plan'}
                </p>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
