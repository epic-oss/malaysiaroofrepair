import Link from 'next/link'
import { MapPin, Phone, Award, Zap } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Company } from '@/lib/types/database'
import { cn } from '@/lib/utils/cn'

interface ContractorCardProps {
  company: Company
  className?: string
}

export function ContractorCard({ company, className }: ContractorCardProps) {
  const isPremium = company.is_premium
  const isFeatured = company.is_featured
  const hasEmergencyService = company.emergency_service

  return (
    <Card
      variant={isPremium ? 'premium' : 'default'}
      className={cn('overflow-hidden transition-all hover:shadow-xl', className)}
    >
      <Link href={`/companies/${company.slug}`}>
        {/* Header with badges */}
        <div className="relative p-4 pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
                {company.name}
              </h3>
              <div className="mt-1 flex items-center text-sm text-gray-600">
                <MapPin className="mr-1 h-4 w-4" />
                <span className="line-clamp-1">
                  {company.city && `${company.city}, `}{company.state}
                </span>
              </div>
            </div>

            {/* Premium Badge */}
            {isPremium && (
              <Badge variant="premium" className="ml-2">
                <Award className="mr-1 h-3 w-3" />
                Verified
              </Badge>
            )}
          </div>

          {/* Emergency Service Badge */}
          {hasEmergencyService && (
            <div className="mt-2">
              <Badge variant="emergency">
                <Zap className="mr-1 h-3 w-3" />
                24HR Emergency
              </Badge>
            </div>
          )}
        </div>

        {/* Description */}
        {company.description && (
          <div className="px-4 pb-3">
            <p className="line-clamp-2 text-sm text-gray-700">
              {company.description}
            </p>
          </div>
        )}

        {/* Service Types */}
        <div className="px-4 pb-3">
          <div className="flex flex-wrap gap-1.5">
            {company.service_types.slice(0, 3).map((service) => (
              <Badge key={service} variant="secondary" className="text-xs">
                {service}
              </Badge>
            ))}
            {company.service_types.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{company.service_types.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 bg-gray-50 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-xs text-gray-600">
              {company.years_experience && (
                <span>{company.years_experience}+ years</span>
              )}
              {company.warranty_offered && (
                <span className="text-green-600 font-medium">Warranty</span>
              )}
            </div>

            <Button variant="primary" size="sm">
              Get Quote
            </Button>
          </div>
        </div>
      </Link>

      {/* Featured Ribbon (if featured) */}
      {isFeatured && (
        <div className="absolute -right-10 top-6 rotate-45 bg-accent-500 px-10 py-1 text-xs font-bold text-white shadow-md">
          FEATURED
        </div>
      )}
    </Card>
  )
}
