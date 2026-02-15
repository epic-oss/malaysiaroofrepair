import { Company } from '@/lib/types/database'
import { ContractorCard } from './ContractorCard'

interface ContractorGridProps {
  companies: Company[]
  emptyMessage?: string
}

export function ContractorGrid({
  companies,
  emptyMessage = 'No contractors found. Try adjusting your filters.',
}: ContractorGridProps) {
  if (companies.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
        <div className="text-center">
          <p className="text-lg font-medium text-gray-900">No Results</p>
          <p className="mt-2 text-sm text-gray-600">{emptyMessage}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {companies.map((company) => (
        <ContractorCard key={company.id} company={company} />
      ))}
    </div>
  )
}
