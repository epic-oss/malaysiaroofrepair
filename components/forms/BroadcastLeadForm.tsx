'use client'

import { useState } from 'react'
import { createBroadcastLead } from '@/lib/actions/inquiry'
import { siteConfig } from '@/lib/config'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Select } from '../ui/Select'
import { Textarea } from '../ui/Textarea'
import { CheckCircle } from 'lucide-react'

interface BroadcastLeadFormProps {
  onSuccess?: () => void
}

export function BroadcastLeadForm({ onSuccess }: BroadcastLeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)
      const result = await createBroadcastLead(formData)

      if (!result.success) {
        setError(result.error || 'Failed to submit inquiry. Please try again.')
        setIsSubmitting(false)
        return
      }

      setIsSuccess(true)
      setTimeout(() => {
        onSuccess?.()
      }, 2000)
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="py-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          Quote Request Submitted!
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Multiple contractors will contact you soon with free quotes.
          Check your email and phone for responses.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Personal Information */}
      <div className="grid gap-4 md:grid-cols-2">
        <Input
          name="full_name"
          label="Full Name"
          placeholder="John Tan"
          required
        />
        <Input
          name="phone"
          label="Phone Number"
          type="tel"
          placeholder="012-345-6789"
          required
        />
      </div>

      <Input
        name="email"
        label="Email Address"
        type="email"
        placeholder="john@example.com"
        required
      />

      <Input
        name="lead_company"
        label="Company Name (Optional)"
        placeholder="ABC Sdn Bhd"
      />

      {/* Project Details */}
      <div className="grid gap-4 md:grid-cols-2">
        <Select
          name="property_type"
          label="Property Type"
          required
        >
          <option value="">Select property type</option>
          {siteConfig.propertyTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>

        <Select
          name="roof_type"
          label="Roof Type"
          required
        >
          <option value="">Select roof type</option>
          {siteConfig.roofTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
      </div>

      <Textarea
        name="problem_description"
        label="Problem Description"
        placeholder="Describe your roofing issue (e.g., ceiling leaking, need waterproofing, roof replacement)"
        rows={3}
        required
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Select
          name="urgency"
          label="Urgency"
          required
        >
          <option value="">Select urgency</option>
          {siteConfig.urgencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>

        <Input
          name="preferred_date"
          label="Preferred Date (Optional)"
          type="date"
        />
      </div>

      <Input
        name="location"
        label="Location / Area"
        placeholder="Petaling Jaya, Selangor"
        required
      />

      <Textarea
        name="message"
        label="Additional Notes (Optional)"
        placeholder="Any additional details about your project..."
        rows={2}
      />

      {/* Error Message */}
      {error && (
        <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Get Free Quotes'}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        By submitting, you agree to be contacted by roofing contractors regarding your inquiry.
      </p>
    </form>
  )
}
