'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { siteConfig } from '@/lib/config'
import { createCompany } from '@/lib/actions/company'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export default function SubmitListingPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedRoofTypes, setSelectedRoofTypes] = useState<string[]>([])

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    )
  }

  const handleRoofTypeToggle = (type: string) => {
    setSelectedRoofTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    formData.set('service_types', JSON.stringify(selectedServices))
    formData.set('roof_types', JSON.stringify(selectedRoofTypes))

    try {
      const result = await createCompany(formData)

      if (result?.error) {
        setError(result.error)
        setIsSubmitting(false)
      }
      // If successful, createCompany will redirect to the new company page
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
      setIsSubmitting(false)
    }
  }

  const stateOptions = siteConfig.states.map((state) => ({
    value: state,
    label: state,
  }))

  const priceRangeOptions = [
    { value: '', label: 'Select price range' },
    ...siteConfig.priceRanges.map((range) => ({
      value: range,
      label: range,
    })),
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              List Your Roofing Business
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Join {siteConfig.siteName} and start receiving leads from homeowners
            </p>
          </div>

          {/* Info Card */}
          <Card className="mb-8 border-primary-200 bg-primary-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white">
                    <span className="text-xl font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Free to get started!
                  </h3>
                  <p className="mt-1 text-sm text-gray-700">
                    Create your free listing and appear in our directory. Upgrade to Premium
                    later to get priority placement and receive broadcast leads.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Message */}
                {error && (
                  <div className="rounded-md bg-red-50 border border-red-200 p-4">
                    <p className="text-sm text-red-800">{error}</p>
                  </div>
                )}

                {/* Company Name */}
                <Input
                  name="name"
                  label="Company Name"
                  placeholder="e.g., ABC Roofing Services"
                  required
                />

                {/* Description */}
                <Textarea
                  name="description"
                  label="Business Description"
                  placeholder="Tell homeowners about your business, experience, and what sets you apart..."
                  required
                  rows={6}
                  helperText="Minimum 50 characters"
                />

                {/* Location */}
                <div className="grid gap-6 md:grid-cols-2">
                  <Select
                    name="state"
                    label="State"
                    options={[
                      { value: '', label: 'Select your state' },
                      ...stateOptions,
                    ]}
                    required
                  />

                  <Input
                    name="city"
                    label="City"
                    placeholder="e.g., Petaling Jaya"
                    required
                  />
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Contact Information
                  </h3>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Input
                      name="phone"
                      label="Phone Number"
                      type="tel"
                      placeholder="e.g., +60 12-345 6789"
                      required
                    />

                    <Input
                      name="email"
                      label="Email Address"
                      type="email"
                      placeholder="e.g., info@yourcompany.com"
                      required
                    />
                  </div>

                  <Input
                    name="website"
                    label="Website (Optional)"
                    type="url"
                    placeholder="e.g., https://yourcompany.com"
                  />
                </div>

                {/* Services Offered */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Services Offered <span className="text-red-500">*</span>
                  </label>
                  <p className="text-sm text-gray-600">
                    Select all services your company provides
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {siteConfig.serviceTypes.map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-2 rounded-md border border-gray-300 bg-white p-3 cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-600"
                        />
                        <span className="text-sm text-gray-900">{service}</span>
                      </label>
                    ))}
                  </div>
                  {selectedServices.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedServices.map((service) => (
                        <Badge key={service} variant="secondary">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Roof Types */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Roof Types You Handle (Optional)
                  </label>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {siteConfig.roofTypes.map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2 rounded-md border border-gray-300 bg-white p-3 cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={selectedRoofTypes.includes(type)}
                          onChange={() => handleRoofTypeToggle(type)}
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-600"
                        />
                        <span className="text-sm text-gray-900">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Additional Details
                  </h3>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Select
                      name="price_range"
                      label="Price Range"
                      options={priceRangeOptions}
                    />

                    <Input
                      name="years_experience"
                      label="Years of Experience"
                      type="number"
                      min="0"
                      max="100"
                      placeholder="e.g., 10"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="emergency_service"
                        value="true"
                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-600"
                      />
                      <div>
                        <div className="font-medium text-gray-900">
                          24/7 Emergency Service
                        </div>
                        <div className="text-sm text-gray-600">
                          Check if you offer emergency roofing services
                        </div>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="warranty_offered"
                        value="true"
                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-600"
                      />
                      <div>
                        <div className="font-medium text-gray-900">
                          Warranty Offered
                        </div>
                        <div className="text-sm text-gray-600">
                          Check if you provide warranties on your work
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.back()}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    isLoading={isSubmitting}
                    disabled={isSubmitting || selectedServices.length === 0}
                    className="flex-1"
                  >
                    {isSubmitting ? 'Creating Listing...' : 'Create Free Listing'}
                  </Button>
                </div>

                <p className="text-center text-sm text-gray-600">
                  By submitting, you agree to our terms of service and privacy policy
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
