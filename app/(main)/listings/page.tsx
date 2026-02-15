import { Suspense } from 'react'
import { ContractorGrid } from '@/components/contractors/ContractorGrid'
import { ContractorFilters } from '@/components/contractors/ContractorFilters'
import { Pagination } from '@/components/ui/Pagination'
import { getCompanies } from '@/lib/actions/company'
import { generateMetadata as generateSEOMetadata } from '@/lib/utils/seo'

export const metadata = generateSEOMetadata({
  title: `Roofing Contractors in Malaysia`,
  description: 'Browse verified roofing contractors across Malaysia. Compare quotes and hire the best professionals for your project.',
  path: '/listings',
})

interface SearchParams {
  state?: string
  service?: string
  roofType?: string
  emergency?: string
  price?: string
  page?: string
}

interface Props {
  searchParams: Promise<SearchParams>
}

export default async function ListingsPage({ searchParams }: Props) {
  const params = await searchParams
  const page = parseInt(params.page || '1')

  const { companies, total, totalPages } = await getCompanies({
    state: params.state,
    service: params.service,
    roofType: params.roofType,
    emergency: params.emergency === 'true',
    priceRange: params.price,
    page,
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Roof Repair & Waterproofing Contractors
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            {total} verified contractor{total !== 1 ? 's' : ''} found
            {params.state && ` in ${params.state}`}
            {params.service && ` for ${params.service}`}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20">
              <ContractorFilters />
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Suspense fallback={<div>Loading...</div>}>
              <ContractorGrid companies={companies} />
            </Suspense>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination currentPage={page} totalPages={totalPages} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
