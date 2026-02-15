import { notFound } from 'next/navigation'
import Link from 'next/link'
import { malayPages } from '@/lib/content/malay-pages'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

// Generate static params for all Malay pages
export async function generateStaticParams() {
  return malayPages.map((page) => ({
    slug: page.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const page = malayPages.find((p) => p.slug === slug)

  if (!page) {
    return { title: 'Halaman Tidak Dijumpai' }
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      type: 'article',
      locale: 'ms_MY',
    },
  }
}

export default async function MalayPage({ params }: Props) {
  const { slug } = await params
  const page = malayPages.find((p) => p.slug === slug)

  if (!page) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
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
            <div className="prose prose-lg max-w-none mb-12">
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
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                {page.content.cta}
              </h2>
              <p className="text-gray-200 mb-6 text-lg">
                Hubungi kontraktor berpengalaman dan berdaftar sekarang. Perbandingan
                harga percuma dan tanpa komitmen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/listings">
                  <Button variant="gold" size="lg">
                    Lihat Senarai Kontraktor
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* English Version Link */}
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-600 mb-4">
                Prefer English? View our English listings
              </p>
              <Link
                href="/"
                className="text-primary-600 hover:underline font-medium"
              >
                Switch to English Version →
              </Link>
            </div>

            {/* Other Malay Pages */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Artikel Lain Dalam Bahasa Melayu
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {malayPages
                  .filter((p) => p.slug !== slug)
                  .slice(0, 6)
                  .map((relatedPage) => (
                    <Link
                      key={relatedPage.slug}
                      href={`/ms/${relatedPage.slug}`}
                      className="block p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all bg-white"
                    >
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
          </div>
        </div>
      </section>
    </div>
  )
}
