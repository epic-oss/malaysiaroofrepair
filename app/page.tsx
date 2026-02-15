import { Hero } from '@/components/home/Hero'
import { FeaturedContractors } from '@/components/home/FeaturedContractors'
import { ServiceSelector } from '@/components/home/ServiceSelector'
import { HowItWorks } from '@/components/home/HowItWorks'
import { getCompanies } from '@/lib/actions/company'
import { generateMetadata as generateSEOMetadata } from '@/lib/utils/seo'

export const metadata = generateSEOMetadata({})

export default async function HomePage() {
  // Fetch featured/premium contractors (limit 6)
  const { companies: featuredCompanies } = await getCompanies({
    page: 1,
    limit: 6,
  })

  return (
    <main>
      <Hero />
      <FeaturedContractors companies={featuredCompanies} />
      <ServiceSelector />
      <HowItWorks />
    </main>
  )
}
