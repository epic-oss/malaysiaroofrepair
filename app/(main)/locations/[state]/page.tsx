import { notFound } from 'next/navigation'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { slugify } from '@/lib/utils/slugify'
import { getCompaniesByState } from '@/lib/actions/company'
import { generateStateMetadata } from '@/lib/utils/seo'
import { ContractorGrid } from '@/components/contractors/ContractorGrid'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

interface Props {
  params: Promise<{ state: string }>
}

// Generate static params for all states
export async function generateStaticParams() {
  return siteConfig.states.map((state) => ({
    state: slugify(state),
  }))
}

export async function generateMetadata({ params }: Props) {
  const { state: stateSlug } = await params

  const stateName = siteConfig.states.find(
    (s) => slugify(s) === stateSlug
  )

  if (!stateName) {
    return { title: 'State Not Found' }
  }

  return generateStateMetadata(stateName)
}

export default async function StatePage({ params }: Props) {
  const { state: stateSlug } = await params

  const stateName = siteConfig.states.find(
    (s) => slugify(s) === stateSlug
  )

  if (!stateName) {
    notFound()
  }

  // Get contractors in this state
  const { companies, total } = await getCompaniesByState(stateName, 12)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Best Roof Repair & Waterproofing Contractors in {stateName}{' '}
              <span className="text-accent-400">{siteConfig.currentYear}</span>
            </h1>
            <p className="mt-4 text-xl text-gray-200">
              Find trusted roofing contractors in {stateName}. Compare quotes from verified professionals.
            </p>
            <div className="mt-6 flex items-center gap-6 text-white">
              <div>
                <span className="text-3xl font-bold text-accent-400">{total}</span>
                <span className="ml-2 text-sm">Contractors Available</span>
              </div>
              <div>
                <span className="text-3xl font-bold text-accent-400">Free</span>
                <span className="ml-2 text-sm">Quote Service</span>
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
              Professional Roofing Services in {stateName}, Malaysia
            </h2>
            <p className="text-gray-700">
              Looking for reliable roof repair and waterproofing contractors in {stateName}?
              Our directory connects you with verified roofing professionals who serve the {stateName} area.
              Whether you need emergency roof leak repair, waterproofing services, or complete roof replacement,
              find trusted contractors who understand the specific challenges of roofing in {stateName}.
            </p>
          </div>

          {/* Contractors Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Featured Contractors in {stateName}
            </h2>
            <ContractorGrid companies={companies} />

            {total > 12 && (
              <div className="mt-8 text-center">
                <Link href={`/listings?state=${stateName}`}>
                  <Button variant="primary">
                    View All {total} Contractors in {stateName}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* SEO Content */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="prose">
              <h2 className="text-xl font-bold text-gray-900">
                Why Choose Local Roofing Contractors in {stateName}?
              </h2>
              <p className="text-gray-700">
                Local contractors in {stateName} understand the regional climate, building codes,
                and common roofing materials used in the area. They can respond quickly to emergencies
                and provide personalized service tailored to {stateName} homeowners and businesses.
              </p>
              <ul className="text-gray-700">
                <li>Familiar with {stateName} building regulations</li>
                <li>Quick response times for emergency repairs</li>
                <li>Understanding of local weather patterns</li>
                <li>Established reputation in the {stateName} community</li>
              </ul>
            </div>

            <div className="prose">
              <h2 className="text-xl font-bold text-gray-900">
                Common Roofing Services in {stateName}
              </h2>
              <ul className="text-gray-700">
                {siteConfig.serviceTypes.slice(0, 6).map((service) => (
                  <li key={service}>
                    <Link
                      href={`/services/${slugify(service)}`}
                      className="text-primary-600 hover:underline"
                    >
                      {service} in {stateName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  How much does roof repair cost in {stateName}?
                </h3>
                <p className="text-gray-700">
                  Roof repair costs in {stateName} vary depending on the extent of damage, roof type,
                  and materials needed. Minor repairs typically range from RM500-RM2,000, while major
                  repairs can cost RM3,000-RM10,000+. Get free quotes from multiple contractors to
                  compare prices.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  How do I choose a good roofing contractor in {stateName}?
                </h3>
                <p className="text-gray-700">
                  Look for contractors with verified credentials, positive reviews, and experience
                  with your specific roof type. Our directory features only verified contractors in {stateName},
                  making it easier to find trusted professionals.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  What roofing materials are common in {stateName}?
                </h3>
                <p className="text-gray-700">
                  Common roofing materials in {stateName} include concrete tiles, metal/zinc roofing,
                  clay tiles, and polycarbonate sheets. The choice depends on budget, climate conditions,
                  and building design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
