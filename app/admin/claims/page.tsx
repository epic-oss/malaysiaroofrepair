import { createAdminClient } from '@/lib/supabase/admin'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ClaimActions } from '@/components/admin/ClaimActions'
import { formatDate } from '@/lib/utils/formatters'

export default async function AdminClaimsPage() {
  const supabase = createAdminClient()

  // Get all claim requests with company and user info
  const { data: claims } = await supabase
    .from('claim_requests_roofrepair')
    .select(`
      *,
      providers_roofrepair (
        id,
        name,
        slug,
        state,
        city,
        is_claimed
      )
    `)
    .order('created_at', { ascending: false })

  const pendingClaims = claims?.filter((c) => c.status === 'pending') || []
  const approvedClaims = claims?.filter((c) => c.status === 'approved') || []
  const rejectedClaims = claims?.filter((c) => c.status === 'rejected') || []

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Claim Requests</h2>
        <p className="mt-1 text-gray-600">
          Manage business ownership claim requests
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">
                {pendingClaims.length}
              </div>
              <div className="text-sm text-gray-600 mt-1">Pending</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {approvedClaims.length}
              </div>
              <div className="text-sm text-gray-600 mt-1">Approved</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">
                {rejectedClaims.length}
              </div>
              <div className="text-sm text-gray-600 mt-1">Rejected</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Claims */}
      {pendingClaims.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Pending Claims</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingClaims.map((claim) => (
                <div
                  key={claim.id}
                  className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {claim.providers_roofrepair?.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {claim.providers_roofrepair?.city && `${claim.providers_roofrepair.city}, `}
                        {claim.providers_roofrepair?.state}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <span>User ID: {claim.user_id}</span>
                        <span>Requested: {formatDate(claim.created_at)}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Pending</Badge>
                      <ClaimActions
                        claimId={claim.id}
                        companyId={claim.company_id}
                        userId={claim.user_id}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Claims History */}
      <Card>
        <CardHeader>
          <CardTitle>All Claims History</CardTitle>
        </CardHeader>
        <CardContent>
          {!claims || claims.length === 0 ? (
            <p className="text-center text-gray-600 py-8">
              No claim requests yet
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
                      User ID
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {claims.map((claim) => (
                    <tr key={claim.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-900">
                        {claim.providers_roofrepair?.name}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {claim.providers_roofrepair?.city && `${claim.providers_roofrepair.city}, `}
                        {claim.providers_roofrepair?.state}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {claim.user_id.slice(0, 8)}...
                      </td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            claim.status === 'approved'
                              ? 'default'
                              : claim.status === 'pending'
                              ? 'secondary'
                              : 'outline'
                          }
                        >
                          {claim.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {formatDate(claim.created_at)}
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
