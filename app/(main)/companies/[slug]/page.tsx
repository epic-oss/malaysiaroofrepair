import { notFound } from 'next/navigation'
import { MapPin, Phone, Mail, Globe, Award, Zap, Shield, Calendar } from 'lucide-react'
import { getCompanyBySlug, getCompaniesByState } from '@/lib/actions/company'
import { generateCompanyMetadata } from '@/lib/utils/seo'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ContractorCard } from '@/components/contractors/ContractorCard'
import { CompanyQuoteButton } from '@/components/companies/CompanyQuoteButton'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const company = await getCompanyBySlug(slug)

  if (!company) {
    return {
      title: 'Company Not Found',
    }
  }

  return generateCompanyMetadata({
    name: company.name,
    description: company.description || undefined,
    city: company.city || undefined,
    state: company.state,
    slug: company.slug,
  })
}

export default async function CompanyPage({ params }: Props) {
  const { slug } = await params
  const company = await getCompanyBySlug(slug)

  if (!company) {
    notFound()
  }

  // Get related companies in same state
  const { companies: relatedCompanies } = await getCompaniesByState(
    company.state,
    4
  )
  const filteredRelated = relatedCompanies.filter((c) => c.id !== company.id).slice(0, 3)

  return (
    <>
      {/* Schema Markup for SEO */}
      <SchemaMarkup company={company} />

      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  {/* Logo */}
                  {company.logo_url && (
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border bg-white">
                      <img
                        src={company.logo_url}
                        alt={company.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h1 className="text-3xl font-bold text-gray-900">
                        {company.name}
                      </h1>
                      {company.is_premium && (
                        <Badge variant="premium">
                          <Award className="mr-1 h-3 w-3" />
                          Verified
                        </Badge>
                      )}
                      {company.emergency_service && (
                        <Badge variant="emergency">
                          <Zap className="mr-1 h-3 w-3" />
                          24HR Emergency
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center text-gray-600">
                      <MapPin className="mr-2 h-5 w-5" />
                      <span>
                        {company.city && `${company.city}, `}
                        {company.state}
                      </span>
                    </div>

                    {company.years_experience && (
                      <div className="mt-2 flex items-center text-sm text-gray-600">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{company.years_experience}+ years of experience</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex-shrink-0">
                <CompanyQuoteButton
                  companyId={company.id}
                  companyName={company.name}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* About */}
              {company.description && (
                <Card>
                  <CardHeader>
                    <CardTitle>About {company.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 whitespace-pre-line">
                      {company.description}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Services Offered */}
              <Card>
                <CardHeader>
                  <CardTitle>Services Offered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {company.service_types.map((service) => (
                      <Badge key={service} variant="secondary">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Roof Types */}
              {company.roof_types.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Roof Types We Handle</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {company.roof_types.map((type) => (
                        <Badge key={type} variant="outline">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right Column - Contact & Details */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {company.phone && (
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary-600 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-600">Phone</div>
                        <a
                          href={`tel:${company.phone}`}
                          className="font-medium text-primary-600 hover:underline"
                        >
                          {company.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {company.email && (
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary-600 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-600">Email</div>
                        <a
                          href={`mailto:${company.email}`}
                          className="font-medium text-primary-600 hover:underline break-all"
                        >
                          {company.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {company.website && (
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-primary-600 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-600">Website</div>
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-primary-600 hover:underline break-all"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Additional Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Company Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {company.warranty_offered && (
                    <div className="flex items-center gap-2 text-green-600">
                      <Shield className="h-5 w-5" />
                      <span className="font-medium">Warranty Offered</span>
                    </div>
                  )}

                  {company.price_range && (
                    <div>
                      <div className="text-sm text-gray-600">Price Range</div>
                      <div className="font-medium capitalize">{company.price_range}</div>
                    </div>
                  )}

                  {company.emergency_service && (
                    <div className="flex items-center gap-2 text-red-600">
                      <Zap className="h-5 w-5" />
                      <span className="font-medium">24/7 Emergency Service</span>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Claim Listing Button (if unclaimed) */}
              {!company.is_claimed && (
                <Card className="bg-primary-50 border-primary-200">
                  <CardContent className="pt-6">
                    <p className="text-sm text-gray-700 mb-4">
                      Is this your business? Claim it to manage your profile and receive leads.
                    </p>
                    <Button variant="primary" className="w-full">
                      Claim This Listing
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Related Companies */}
          {filteredRelated.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                More Contractors in {company.state}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredRelated.map((relatedCompany) => (
                  <ContractorCard key={relatedCompany.id} company={relatedCompany} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
