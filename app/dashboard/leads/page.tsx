import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Mail, Phone, MapPin, Calendar, AlertCircle } from 'lucide-react'
import { formatRelativeTime } from '@/lib/utils/formatters'

export default async function LeadsPage() {
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
    .select('id, name')
    .eq('claimed_by', user.id)
    .single()

  if (!company) {
    redirect('/submit')
  }

  // Get inquiries for this company
  const { data: inquiries } = await supabase
    .from('inquiries_roofrepair')
    .select('*')
    .eq('company_id', company.id)
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Lead Inbox</h2>
          <p className="mt-1 text-gray-600">
            {inquiries?.length || 0} total inquiry{inquiries?.length !== 1 ? 'ies' : 'y'}
          </p>
        </div>
      </div>

      {/* Leads List */}
      {!inquiries || inquiries.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <Mail className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              No leads yet
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              When customers request quotes from your business, they'll appear here.
            </p>
            {!company.is_premium && (
              <p className="mt-4 text-sm text-gray-600">
                <strong>Tip:</strong> Upgrade to Premium to receive broadcast leads from
                customers looking for contractors in your area.
              </p>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {inquiries.map((inquiry) => (
            <Card key={inquiry.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
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
                        variant={inquiry.source === 'floating_button' ? 'default' : 'secondary'}
                      >
                        {inquiry.source === 'floating_button' ? 'Broadcast' : 'Direct'}
                      </Badge>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <a
                        href={`tel:${inquiry.phone}`}
                        className="font-medium text-primary-600 hover:underline"
                      >
                        {inquiry.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <a
                        href={`mailto:${inquiry.email}`}
                        className="font-medium text-primary-600 hover:underline"
                      >
                        {inquiry.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">{inquiry.location}</span>
                    </div>

                    {inquiry.preferred_date && (
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-700">{inquiry.preferred_date}</span>
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2 rounded-lg bg-gray-50 p-4">
                    <div className="grid gap-2 md:grid-cols-3">
                      {inquiry.property_type && (
                        <div>
                          <p className="text-xs text-gray-600">Property Type</p>
                          <p className="text-sm font-medium text-gray-900">
                            {inquiry.property_type}
                          </p>
                        </div>
                      )}

                      {inquiry.roof_type && (
                        <div>
                          <p className="text-xs text-gray-600">Roof Type</p>
                          <p className="text-sm font-medium text-gray-900">
                            {inquiry.roof_type}
                          </p>
                        </div>
                      )}

                      {inquiry.urgency && (
                        <div>
                          <p className="text-xs text-gray-600">Urgency</p>
                          <p className="text-sm font-medium text-gray-900">
                            {inquiry.urgency}
                          </p>
                        </div>
                      )}
                    </div>

                    <div>
                      <p className="text-xs text-gray-600 mb-1">Problem Description</p>
                      <p className="text-sm text-gray-900">
                        {inquiry.problem_description}
                      </p>
                    </div>

                    {inquiry.message && (
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Additional Notes</p>
                        <p className="text-sm text-gray-900">{inquiry.message}</p>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    <a
                      href={`tel:${inquiry.phone}`}
                      className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      Call Customer
                    </a>
                    <a
                      href={`mailto:${inquiry.email}?subject=Re: Your roofing inquiry`}
                      className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      Send Email
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
