import { createAdminClient } from '@/lib/supabase/admin'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatRelativeTime } from '@/lib/utils/formatters'
import { Mail, Phone, MapPin, AlertCircle } from 'lucide-react'

export default async function AdminInquiriesPage() {
  const supabase = createAdminClient()

  // Get all inquiries with company info
  const { data: inquiries } = await supabase
    .from('inquiries_roofrepair')
    .select(`
      *,
      providers_roofrepair (
        id,
        name,
        slug
      )
    `)
    .order('created_at', { ascending: false })

  const totalInquiries = inquiries?.length || 0
  const broadcastLeads = inquiries?.filter((i) => i.source === 'floating_button').length || 0
  const directLeads = inquiries?.filter((i) => i.source === 'company_specific_inquiry').length || 0
  const emergencyLeads = inquiries?.filter((i) => i.urgency === 'Emergency (24hr)').length || 0

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Inquiries</h2>
        <p className="mt-1 text-gray-600">
          View all lead submissions
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">
                {totalInquiries}
              </div>
              <div className="text-sm text-gray-600 mt-1">Total Inquiries</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">
                {broadcastLeads}
              </div>
              <div className="text-sm text-gray-600 mt-1">Broadcast Leads</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {directLeads}
              </div>
              <div className="text-sm text-gray-600 mt-1">Direct Leads</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">
                {emergencyLeads}
              </div>
              <div className="text-sm text-gray-600 mt-1">Emergency</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Inquiries List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Inquiries</CardTitle>
        </CardHeader>
        <CardContent>
          {!inquiries || inquiries.length === 0 ? (
            <p className="text-center text-gray-600 py-8">
              No inquiries yet
            </p>
          ) : (
            <div className="space-y-4">
              {inquiries.map((inquiry) => (
                <div
                  key={inquiry.id}
                  className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {inquiry.full_name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {formatRelativeTime(inquiry.created_at)}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {inquiry.urgency === 'Emergency (24hr)' && (
                        <Badge variant="emergency">
                          <AlertCircle className="mr-1 h-3 w-3" />
                          Emergency
                        </Badge>
                      )}
                      <Badge
                        variant={
                          inquiry.source === 'floating_button' ? 'default' : 'secondary'
                        }
                      >
                        {inquiry.source === 'floating_button' ? 'Broadcast' : 'Direct'}
                      </Badge>
                    </div>
                  </div>

                  {/* Company (if direct lead) */}
                  {inquiry.providers_roofrepair && (
                    <div className="mb-3 text-sm">
                      <span className="text-gray-600">Company: </span>
                      <span className="font-medium text-primary-600">
                        {inquiry.providers_roofrepair.name}
                      </span>
                    </div>
                  )}

                  {/* Contact Info */}
                  <div className="grid gap-3 md:grid-cols-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">{inquiry.phone}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">{inquiry.email}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">{inquiry.location}</span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid gap-2 md:grid-cols-4 text-sm mb-3">
                    {inquiry.property_type && (
                      <div>
                        <span className="text-gray-600">Property: </span>
                        <span className="font-medium">{inquiry.property_type}</span>
                      </div>
                    )}
                    {inquiry.roof_type && (
                      <div>
                        <span className="text-gray-600">Roof: </span>
                        <span className="font-medium">{inquiry.roof_type}</span>
                      </div>
                    )}
                    {inquiry.urgency && (
                      <div>
                        <span className="text-gray-600">Urgency: </span>
                        <span className="font-medium">{inquiry.urgency}</span>
                      </div>
                    )}
                    {inquiry.preferred_date && (
                      <div>
                        <span className="text-gray-600">Preferred: </span>
                        <span className="font-medium">{inquiry.preferred_date}</span>
                      </div>
                    )}
                  </div>

                  {/* Problem Description */}
                  {inquiry.problem_description && (
                    <div className="text-sm">
                      <span className="text-gray-600 font-medium">Problem: </span>
                      <span className="text-gray-900">{inquiry.problem_description}</span>
                    </div>
                  )}

                  {/* Additional Message */}
                  {inquiry.message && (
                    <div className="mt-2 text-sm">
                      <span className="text-gray-600 font-medium">Notes: </span>
                      <span className="text-gray-900">{inquiry.message}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
