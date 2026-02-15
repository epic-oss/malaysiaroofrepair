import { notFound } from 'next/navigation'
import Link from 'next/link'
import { guidePages } from '@/lib/content/guide-pages'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Search } from 'lucide-react'
import { siteConfig } from '@/lib/config'

interface Props {
  params: Promise<{ slug: string }>
}

// Generate static params for all guide pages
export async function generateStaticParams() {
  return guidePages.map((page) => ({
    slug: page.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const page = guidePages.find((p) => p.slug === slug)

  if (!page) {
    return { title: 'Guide Not Found' }
  }

  return {
    title: page.title,
    description: page.description,
    keywords: [
      page.targetKeyword,
      'roof repair malaysia',
      'roofing contractors',
      'waterproofing malaysia',
    ],
    openGraph: {
      title: page.title,
      description: page.description,
      type: 'article',
    },
  }
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params
  const page = guidePages.find((p) => p.slug === slug)

  if (!page) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-accent-400 mb-4">
              <Search className="h-5 w-5" />
              <span className="text-sm font-medium">
                {page.monthlySearchVolume.toLocaleString()} monthly searches
              </span>
            </div>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-4 text-xl text-gray-200">{page.description}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12 bg-white rounded-lg shadow-sm p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {page.content.intro}
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-8 mb-12">
              {page.content.sections.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.heading}
                  </h2>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            {page.content.faq && page.content.faq.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {page.content.faq.map((item, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.question}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-xl p-8 text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need Professional Help?
              </h2>
              <p className="text-gray-200 mb-6 text-lg">
                Connect with verified roofing contractors in Malaysia. Get free quotes
                and compare prices from experienced professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/listings">
                  <Button variant="gold" size="lg">
                    Browse Contractors
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white/20">
                  Get Free Quotes
                </Button>
              </div>
            </div>

            {/* Related Guides */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Related Guides
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {guidePages
                  .filter((p) => p.slug !== slug)
                  .slice(0, 4)
                  .map((relatedPage) => (
                    <Link
                      key={relatedPage.slug}
                      href={`/guides/${relatedPage.slug}`}
                      className="block p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all bg-white"
                    >
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <Search className="h-4 w-4" />
                        <span>
                          {relatedPage.monthlySearchVolume.toLocaleString()} searches/mo
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {relatedPage.h1}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedPage.description}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Last updated */}
            <div className="mt-12 text-center text-sm text-gray-600">
              <p>
                Last updated: {new Date().toLocaleDateString('en-MY')} |{' '}
                <Link href="/" className="text-primary-600 hover:underline">
                  {siteConfig.siteName}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
