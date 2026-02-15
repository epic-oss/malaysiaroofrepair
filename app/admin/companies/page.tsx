import { createAdminClient } from '@/lib/supabase/admin'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { CompanyActions } from '@/components/admin/CompanyActions'
import { formatDate } from '@/lib/utils/formatters'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default async function AdminCompaniesPage() {
  const supabase = createAdminClient()

  // Get all companies
  const { data: companies } = await supabase
    .from('providers_roofrepair')
    .select('*')
    .order('created_at', { ascending: false })

  const totalCompanies = companies?.length || 0
  const premiumCompanies = companies?.filter((c) => c.is_premium).length || 0
  const claimedCompanies = companies?.filter((c) => c.is_claimed).length || 0
  const featuredCompanies = companies?.filter((c) => c.is_featured).length || 0

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Companies</h2>
        <p className="mt-1 text-gray-600">
          Manage all contractor listings
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">
                {totalCompanies}
              </div>
              <div className="text-sm text-gray-600 mt-1">Total Companies</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-600">
                {premiumCompanies}
              </div>
              <div className="text-sm text-gray-600 mt-1">Premium</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {claimedCompanies}
              </div>
              <div className="text-sm text-gray-600 mt-1">Claimed</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">
                {featuredCompanies}
              </div>
              <div className="text-sm text-gray-600 mt-1">Featured</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Companies List */}
      <Card>
        <CardHeader>
          <CardTitle>All Companies</CardTitle>
        </CardHeader>
        <CardContent>
          {!companies || companies.length === 0 ? (
            <p className="text-center text-gray-600 py-8">
              No companies yet
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
                      Company
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
                      Location
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
                      Created
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((company) => (
                    <tr key={company.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/companies/${company.slug}`}
                            target="_blank"
                            className="font-medium text-primary-600 hover:underline flex items-center gap-1"
                          >
                            {company.name}
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {company.city && `${company.city}, `}
                        {company.state}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1">
                          {company.is_premium && (
                            <Badge variant="premium">Premium</Badge>
                          )}
                          {company.is_featured && (
                            <Badge variant="default">Featured</Badge>
                          )}
                          {company.is_claimed && (
                            <Badge variant="secondary">Claimed</Badge>
                          )}
                          {!company.is_premium &&
                            !company.is_featured &&
                            !company.is_claimed && (
                              <Badge variant="outline">Free</Badge>
                            )}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {formatDate(company.created_at)}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <CompanyActions company={company} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
