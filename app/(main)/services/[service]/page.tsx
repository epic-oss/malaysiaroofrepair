import { notFound } from 'next/navigation'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { slugify } from '@/lib/utils/slugify'
import { getCompaniesByService } from '@/lib/actions/company'
import { generateServiceMetadata } from '@/lib/utils/seo'
import { ContractorGrid } from '@/components/contractors/ContractorGrid'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

interface Props {
  params: Promise<{ service: string }>
}

// Generate static params for all service types
export async function generateStaticParams() {
  return siteConfig.serviceTypes.map((service) => ({
    service: slugify(service),
  }))
}

export async function generateMetadata({ params }: Props) {
  const { service: serviceSlug } = await params

  const serviceName = siteConfig.serviceTypes.find(
    (s) => slugify(s) === serviceSlug
  )

  if (!serviceName) {
    return { title: 'Service Not Found' }
  }

  return generateServiceMetadata(serviceName)
}

export default async function ServicePage({ params }: Props) {
  const { service: serviceSlug } = await params

  const serviceName = siteConfig.serviceTypes.find(
    (s) => slugify(s) === serviceSlug
  )

  if (!serviceName) {
    notFound()
  }

  // Get contractors offering this service
  const { companies, total } = await getCompaniesByService(serviceName, 12)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              {serviceName} in Malaysia{' '}
              <span className="text-accent-400">{siteConfig.currentYear}</span>
            </h1>
            <p className="mt-4 text-xl text-gray-200">
              Find Trusted Contractors for Professional {serviceName} Services
            </p>
            <div className="mt-6 flex items-center gap-6 text-white">
              <div>
                <span className="text-3xl font-bold text-accent-400">{total}</span>
                <span className="ml-2 text-sm">Specialists Available</span>
              </div>
              <div>
                <span className="text-3xl font-bold text-accent-400">Free</span>
                <span className="ml-2 text-sm">Quotes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="prose max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Professional {serviceName} Services in Malaysia
            </h2>
            <p className="text-gray-700">
              Connect with verified {serviceName.toLowerCase()} contractors across Malaysia.
              Our directory features experienced professionals who specialize in {serviceName.toLowerCase()},
              ensuring quality workmanship and reliable service for your roofing needs.
            </p>
          </div>

          {/* Contractors Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Top {serviceName} Contractors
            </h2>
            <ContractorGrid companies={companies} />

            {total > 12 && (
              <div className="mt-8 text-center">
                <Link href={`/listings?service=${serviceName}`}>
                  <Button variant="primary">
                    View All {total} {serviceName} Contractors
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Service Details */}
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="prose">
              <h2 className="text-xl font-bold text-gray-900">
                What is {serviceName}?
              </h2>
              <p className="text-gray-700">
                {getServiceDescription(serviceName)}
              </p>
            </div>

            <div className="prose">
              <h2 className="text-xl font-bold text-gray-900">
                When Do You Need {serviceName}?
              </h2>
              <ul className="text-gray-700">
                {getServiceIndicators(serviceName).map((indicator, idx) => (
                  <li key={idx}>{indicator}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service by State */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {serviceName} by Location
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {siteConfig.states.slice(0, 8).map((state) => (
                <Link
                  key={state}
                  href={`/listings?state=${state}&service=${serviceName}`}
                  className="rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-primary-300 hover:shadow-md"
                >
                  <div className="font-medium text-gray-900">{serviceName} in {state}</div>
                  <div className="text-sm text-gray-600 mt-1">Find contractors →</div>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  How much does {serviceName.toLowerCase()} cost in Malaysia?
                </h3>
                <p className="text-gray-700">
                  {serviceName} costs vary based on roof size, materials, and complexity. Get free quotes
                  from multiple contractors to compare prices and find the best value for your project.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  How long does {serviceName.toLowerCase()} take?
                </h3>
                <p className="text-gray-700">
                  The duration depends on project scope and weather conditions. Minor repairs may take
                  a few hours, while larger projects can take several days. Contractors will provide
                  specific timelines during the quote process.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Do contractors offer warranties for {serviceName.toLowerCase()}?
                </h3>
                <p className="text-gray-700">
                  Many professional contractors offer warranties on both materials and workmanship.
                  Check with individual contractors about their specific warranty terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Helper functions for service-specific content
function getServiceDescription(service: string): string {
  const descriptions: Record<string, string> = {
    'Roof Leak Repair': 'Roof leak repair involves identifying and fixing leaks in your roof to prevent water damage. Professional contractors use specialized techniques to locate leak sources and apply durable repairs.',
    'Waterproofing': 'Waterproofing protects your roof and building from water penetration using specialized coatings and membranes. Essential for preventing leaks, dampness, and structural damage.',
    'Roof Coating': 'Roof coating applies protective layers to extend your roof\'s lifespan, improve energy efficiency, and prevent leaks. Modern coatings can significantly reduce maintenance costs.',
    'Metal Roof Repair': 'Metal roof repair addresses issues specific to metal/zinc roofing, including rust, corrosion, loose panels, and seal failures. Requires specialized knowledge of metal roofing systems.',
    'Tile Roof Repair': 'Tile roof repair involves replacing broken tiles, fixing underlayment, and ensuring proper water drainage. Clay and concrete tiles require careful handling and matching.',
    'Gutter Repair & Replacement': 'Gutter services ensure proper water drainage from your roof, preventing foundation damage and erosion. Includes cleaning, repair, and complete gutter system installation.',
    'Roof Replacement': 'Complete roof replacement when repairs are no longer cost-effective. Involves removing old roofing and installing new materials with updated underlayment and flashing.',
    'Ceiling Leak Repair': 'Ceiling leak repair addresses leaks that have penetrated through the roof to interior ceilings. Involves fixing both the roof source and repairing interior damage.',
    'Flat Roof Waterproofing': 'Specialized waterproofing for flat roofs using appropriate membranes and drainage systems. Flat roofs require specific techniques to prevent water pooling.',
    'Emergency Roof Repair': '24/7 emergency roof repair for urgent situations like storm damage, severe leaks, or safety hazards. Immediate response to protect your property from further damage.',
  }

  return descriptions[service] || `Professional ${service.toLowerCase()} services for residential and commercial properties across Malaysia.`
}

function getServiceIndicators(service: string): string[] {
  const indicators: Record<string, string[]> = {
    'Roof Leak Repair': [
      'Water stains on ceilings or walls',
      'Dripping water during or after rain',
      'Damp spots or mold growth',
      'Missing or damaged shingles/tiles'
    ],
    'Waterproofing': [
      'Recurring leaks despite repairs',
      'Visible cracks in roof surface',
      'Water pooling on flat roofs',
      'Preventive maintenance for new construction'
    ],
    'Roof Coating': [
      'Aging roof needing protection',
      'High energy bills (poor insulation)',
      'Preventive maintenance',
      'Before selling your property'
    ],
  }

  return indicators[service] || [
    'Visible damage or wear',
    'Recurring problems',
    'Age-related deterioration',
    'After severe weather events'
  ]
}
