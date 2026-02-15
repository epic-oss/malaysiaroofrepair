import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Company } from '@/lib/types/database'
import { ContractorGrid } from '@/components/contractors/ContractorGrid'
import { Button } from '@/components/ui/Button'

interface FeaturedContractorsProps {
  companies: Company[]
}

export function FeaturedContractors({ companies }: FeaturedContractorsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Premium Contractors
            </h2>
            <p className="mt-2 text-gray-600">
              Verified businesses with enhanced profiles and priority placement
            </p>
          </div>

          <Link href="/listings" className="hidden md:block">
            <Button variant="outline">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <ContractorGrid
          companies={companies}
          emptyMessage="No featured contractors yet. Check back soon!"
        />

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Link href="/listings">
            <Button variant="outline" className="w-full">
              View All Contractors
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
