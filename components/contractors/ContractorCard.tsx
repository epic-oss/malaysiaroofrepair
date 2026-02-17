import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Award, Zap } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Company } from '@/lib/types/database'
import { cn } from '@/lib/utils/cn'

interface ContractorCardProps {
  company: Company
  className?: string
}

// Generate a consistent background color from the company name
function getInitialColor(name: string): string {
  const colors = [
    'bg-blue-600', 'bg-indigo-600', 'bg-violet-600',
    'bg-teal-600', 'bg-emerald-600', 'bg-cyan-600',
    'bg-orange-600', 'bg-rose-600', 'bg-pink-600',
  ]
  const index = name.charCodeAt(0) % colors.length
  return colors[index]
}

export function ContractorCard({ company, className }: ContractorCardProps) {
  const isPremium = company.is_premium
  const isFeatured = company.is_featured
  const hasEmergencyService = company.emergency_service
  const initial = company.name.charAt(0).toUpperCase()
  const initialColor = getInitialColor(company.name)

  return (
    <Card
      variant={isPremium ? 'premium' : 'default'}
      className={cn('overflow-hidden transition-all hover:shadow-xl', className)}
    >
      <Link href={`/companies/${company.slug}`}>
        {/* Header with logo + name + badges */}
        <div className="relative p-4 pb-3">
          <div className="flex items-start gap-3">
            {/* Logo / Initial placeholder */}
            <div className="shrink-0">
              {company.logo_url ? (
                <div className="relative h-16 w-16 overflow-hidden rounded-lg border border-gray-100">
                  <Image
                    src={company.logo_url}
                    alt={`${company.name} logo`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
              ) : (
                <div className={cn(
                  'flex h-16 w-16 items-center justify-center rounded-lg text-white text-2xl font-bold',
                  initialColor
                )}>
                  {initial}
                </div>
              )}
            </div>

            {/* Name, location, premium badge */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
                  {company.name}
                </h3>
                {isPremium && (
                  <Badge variant="premium" className="ml-auto shrink-0">
                    <Award className="mr-1 h-3 w-3" />
                    Verified
                  </Badge>
                )}
              </div>
              <div className="mt-1 flex items-center text-sm text-gray-600">
                <MapPin className="mr-1 h-4 w-4 shrink-0" />
                <span className="line-clamp-1">
                  {company.city && `${company.city}, `}{company.state}
                </span>
              </div>
              {/* Emergency Service Badge */}
              {hasEmergencyService && (
                <div className="mt-1.5">
                  <Badge variant="emergency">
                    <Zap className="mr-1 h-3 w-3" />
                    24HR Emergency
                  </Badge>
                </div>
              )}
            </div>
          </div>
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
