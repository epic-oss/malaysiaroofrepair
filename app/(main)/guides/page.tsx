import Link from 'next/link'
import { ArrowRight, Search, BookOpen } from 'lucide-react'
import { guidePages } from '@/lib/content/guide-pages'
import { siteConfig } from '@/lib/config'

export const metadata = {
  title: `Roofing Guides & Resources ${siteConfig.currentYear} | ${siteConfig.siteName}`,
  description:
    'Expert guides on roof repair, waterproofing, and roofing products in Malaysia. Learn about costs, brands, and how to find the right contractor.',
}

export default function GuidesIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-accent-400 mb-3">
            <BookOpen className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wide">Expert Guides</span>
          </div>
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Roofing &amp; Waterproofing Guides
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Practical advice on roof repair, waterproofing products, costs, and choosing the right
            contractor in Malaysia.
          </p>
        </div>
      </section>

      {/* Guide Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guidePages.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-primary-300 transition-all p-6"
              >
                {/* Search volume badge */}
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
                  <Search className="h-3.5 w-3.5" />
                  <span>{guide.monthlySearchVolume.toLocaleString()} searches/mo</span>
                </div>

                <h2 className="text-base font-semibold text-gray-900 group-hover:text-primary-700 transition-colors leading-snug mb-2">
                  {guide.h1}
                </h2>

                <p className="text-sm text-gray-600 line-clamp-3 flex-1">
                  {guide.description}
                </p>

                <div className="mt-4 flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-800">
                  Read guide
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">Need a Professional Roofer?</h2>
            <p className="text-gray-200 mb-6">
              Browse verified roof repair and waterproofing contractors across all 16 Malaysian states.
            </p>
            <Link
              href="/listings"
              className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 px-6 py-3 font-semibold text-white transition-colors"
            >
              Browse Contractors
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
