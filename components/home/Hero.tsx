'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/config'
import { Button } from '@/components/ui/Button'
import { Select } from '@/components/ui/Select'

export function Hero() {
  const router = useRouter()
  const [selectedState, setSelectedState] = useState('')
  const [selectedService, setSelectedService] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams()
    if (selectedState) params.set('state', selectedState)
    if (selectedService) params.set('service', selectedService)

    router.push(`/listings${params.toString() ? `?${params.toString()}` : ''}`)
  }

  const stateOptions = [
    { value: '', label: 'All States' },
    ...siteConfig.states.map((state) => ({ value: state, label: state })),
  ]

  const serviceOptions = [
    { value: '', label: 'All Services' },
    ...siteConfig.serviceTypes.map((service) => ({
      value: service,
      label: service,
    })),
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Find Trusted Roof Repair & Waterproofing Contractors in Malaysia{' '}
            <span className="text-accent-400">{siteConfig.currentYear}</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-xl text-gray-200">
            Compare quotes from verified roofing specialists near you. Free, fast, and hassle-free.
          </p>

          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="mt-10 rounded-lg bg-white p-4 shadow-2xl sm:p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {/* State Selector */}
              <div className="sm:col-span-1">
                <Select
                  options={stateOptions}
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="h-12"
                />
              </div>

              {/* Service Selector */}
              <div className="sm:col-span-1">
                <Select
                  options={serviceOptions}
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="h-12"
                />
              </div>

              {/* Search Button */}
              <div className="sm:col-span-2 md:col-span-1">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="h-12 w-full"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Search Contractors
                </Button>
              </div>
            </div>
          </form>

          {/* Trust Signals */}
          <div className="mt-12 grid grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-3xl font-bold text-accent-400">100+</div>
              <div className="mt-1 text-sm text-gray-300">Verified Contractors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-400">{siteConfig.states.length}</div>
              <div className="mt-1 text-sm text-gray-300">States Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-400">Free</div>
              <div className="mt-1 text-sm text-gray-300">Quote Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
