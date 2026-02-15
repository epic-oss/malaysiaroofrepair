import Link from 'next/link'
import { Check, X } from 'lucide-react'
import { siteConfig } from '@/lib/config'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { generateMetadata as generateSEOMetadata } from '@/lib/utils/seo'

export const metadata = generateSEOMetadata({
  title: 'Pricing - List Your Roofing Business',
  description: `Free and premium listing options for roofing contractors. Premium tier from RM${siteConfig.pricing.premium.price}/month.`,
  path: '/pricing',
})

const comparisonFeatures = [
  { name: 'Basic company profile', free: true, premium: true },
  { name: 'Contact information listed', free: true, premium: true },
  { name: 'Service areas displayed', free: true, premium: true },
  { name: 'Appears in directory search', free: true, premium: true },
  { name: 'Gold "Verified" badge', free: false, premium: true },
  { name: 'Priority placement in search results', free: false, premium: true },
  { name: 'Appears first on all pages', free: false, premium: true },
  { name: 'Receive broadcast leads', free: false, premium: true },
  { name: 'Company logo upload', free: false, premium: true },
  { name: 'Enhanced profile with photos', free: false, premium: true },
  { name: 'Lead analytics dashboard', free: false, premium: true },
  { name: 'Priority customer support', free: false, premium: true },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-xl text-gray-200">
            Choose the plan that works best for your roofing business
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {/* Free Plan */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Free Listing</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    RM{siteConfig.pricing.free.price}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="mt-2 text-gray-600">
                  Get started with a basic listing at no cost
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {siteConfig.pricing.free.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link href="/submit">
                    <Button variant="outline" className="w-full">
                      Get Started Free
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="relative border-2 border-gold-500 shadow-xl">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge variant="premium" className="px-4 py-1 text-sm">
                  Most Popular
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl">Premium</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    RM{siteConfig.pricing.premium.price}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="mt-2 text-gray-600">
                  Get more visibility and leads for your business
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {siteConfig.pricing.premium.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-gold-600 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link href="/submit">
                    <Button variant="gold" className="w-full">
                      Start Premium Trial
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Feature Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 px-6 text-left font-semibold text-gray-900">
                      Features
                    </th>
                    <th className="py-4 px-6 text-center font-semibold text-gray-900">
                      Free
                    </th>
                    <th className="py-4 px-6 text-center font-semibold text-gray-900">
                      Premium
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr
                      key={feature.name}
                      className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                    >
                      <td className="py-4 px-6 text-gray-700">{feature.name}</td>
                      <td className="py-4 px-6 text-center">
                        {feature.free ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {feature.premium ? (
                          <Check className="h-5 w-5 text-gold-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I start with a free listing and upgrade later?
                </h3>
                <p className="text-gray-700">
                  Yes! You can start with a free listing and upgrade to Premium at any time.
                  Your existing information will be preserved when you upgrade.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What are broadcast leads?
                </h3>
                <p className="text-gray-700">
                  Broadcast leads are quote requests from homeowners looking for contractors.
                  Premium members receive these leads automatically, giving you first access to
                  potential customers in your service area.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I cancel my Premium subscription anytime?
                </h3>
                <p className="text-gray-700">
                  Yes, you can cancel your Premium subscription at any time. Your account will
                  revert to a free listing at the end of your current billing period.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do I get paid for leads?
                </h3>
                <p className="text-gray-700">
                  You don't pay for leads with a Premium subscription - it's included in your
                  monthly fee. Free listings don't receive broadcast leads, but customers can
                  still contact you directly through your profile.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-700">
                  We accept all major credit and debit cards through our secure Stripe payment
                  system. All transactions are encrypted and secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Grow Your Roofing Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join {siteConfig.siteName} and start receiving leads today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/submit">
              <Button variant="gold" size="lg">
                Get Started Now
              </Button>
            </Link>
            <Link href="/listings">
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white/20">
                Browse Contractors
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
