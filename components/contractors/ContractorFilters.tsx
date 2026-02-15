'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Filter, X } from 'lucide-react'
import { siteConfig } from '@/lib/config'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export function ContractorFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const selectedState = searchParams.get('state') || ''
  const selectedService = searchParams.get('service') || ''
  const emergencyOnly = searchParams.get('emergency') === 'true'
  const priceRange = searchParams.get('price') || ''

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams)

    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }

    // Reset to page 1 when filters change
    params.delete('page')

    router.push(`?${params.toString()}`)
  }

  const toggleEmergency = () => {
    updateFilter('emergency', emergencyOnly ? '' : 'true')
  }

  const clearAllFilters = () => {
    router.push('/listings')
  }

  const hasActiveFilters = selectedState || selectedService || emergencyOnly || priceRange

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-primary-600 hover:text-primary-800 font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {selectedState && (
            <Badge variant="default" className="cursor-pointer" onClick={() => updateFilter('state', '')}>
              {selectedState}
              <X className="ml-1 h-3 w-3" />
            </Badge>
          )}
          {selectedService && (
            <Badge variant="default" className="cursor-pointer" onClick={() => updateFilter('service', '')}>
              {selectedService}
              <X className="ml-1 h-3 w-3" />
            </Badge>
          )}
          {emergencyOnly && (
            <Badge variant="emergency" className="cursor-pointer" onClick={toggleEmergency}>
              24HR Emergency
              <X className="ml-1 h-3 w-3" />
            </Badge>
          )}
          {priceRange && (
            <Badge variant="default" className="cursor-pointer" onClick={() => updateFilter('price', '')}>
              {priceRange}
              <X className="ml-1 h-3 w-3" />
            </Badge>
          )}
        </div>
      )}

      {/* State Filter */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-900">State</h3>
        <select
          value={selectedState}
          onChange={(e) => updateFilter('state', e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
        >
          <option value="">All States</option>
          {siteConfig.states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {/* Service Type Filter */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-900">Service Type</h3>
        <select
          value={selectedService}
          onChange={(e) => updateFilter('service', e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
        >
          <option value="">All Services</option>
          {siteConfig.serviceTypes.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-900">Price Range</h3>
        <select
          value={priceRange}
          onChange={(e) => updateFilter('price', e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
        >
          <option value="">All Ranges</option>
          {siteConfig.priceRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      {/* Emergency Service Toggle */}
      <div>
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={emergencyOnly}
            onChange={toggleEmergency}
            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-600"
          />
          <span className="text-sm font-medium text-gray-900">
            24HR Emergency Service Only
          </span>
        </label>
      </div>

      {/* Premium Badge Info */}
      <div className="rounded-lg border border-gold-200 bg-gold-50 p-4">
        <div className="flex items-start space-x-2">
          <Badge variant="premium" className="mt-0.5">
            Verified
          </Badge>
          <div className="flex-1 text-xs text-gray-700">
            <p className="font-medium">Premium Contractors</p>
            <p className="mt-1">
              Verified businesses with enhanced profiles and priority placement
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
