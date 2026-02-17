'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { siteConfig } from '@/lib/config'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Select } from '../ui/Select'
import { Textarea } from '../ui/Textarea'

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

    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      name: (data.get('name') as string) ?? '',
      phone: (data.get('phone') as string) ?? '',
      email: (data.get('email') as string) ?? '',
      property_type: (data.get('property_type') as string) ?? '',
      issue_type: (data.get('issue_type') as string) ?? '',
      description: (data.get('description') as string) ?? '',
      state: (data.get('state') as string) ?? '',
    }

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const json = await res.json()

      if (!res.ok || !json.success) {
        setError(json.error ?? 'Failed to submit. Please try again.')
        setIsSubmitting(false)
        return
      }

      setIsSuccess(true)
      form.reset()
      setTimeout(() => {
        onSuccess?.()
      }, 3000)
    } catch {
      setError('Network error. Please check your connection and try again.')
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="py-10 px-5 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">Request Submitted!</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          Your request has been submitted! Our contractors will contact you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Scrollable fields */}
      <div className="space-y-4 px-5 py-4">

        {/* Name + Phone */}
        <div className="grid gap-3 sm:grid-cols-2">
          <Input
            name="name"
            label="Full Name"
            placeholder="Ahmad bin Ali"
            required
            autoComplete="name"
          />
          <Input
            name="phone"
            label="Phone Number"
            type="tel"
            placeholder="012-345 6789"
            required
            autoComplete="tel"
          />
        </div>

        {/* Email */}
        <Input
          name="email"
          label="Email (Optional)"
          type="email"
          placeholder="ahmad@example.com"
          autoComplete="email"
        />

        {/* Property + Issue Type */}
        <div className="grid gap-3 sm:grid-cols-2">
          <Select name="property_type" label="Property Type" required>
            <option value="">Select type...</option>
            {siteConfig.propertyTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </Select>

          <Select name="issue_type" label="Service Needed" required>
            <option value="">Select service...</option>
            {siteConfig.serviceTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </Select>
        </div>

        {/* State */}
        <Select name="state" label="Your State" required>
          <option value="">Select state...</option>
          {siteConfig.states.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </Select>

        {/* Description */}
        <Textarea
          name="description"
          label="Describe Your Issue"
          placeholder="E.g. Ceiling is leaking during heavy rain, need waterproofing for flat roof..."
          rows={3}
          required
          minLength={10}
        />

        {/* Error */}
        {error && (
          <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}
      </div>

      {/* Sticky submit footer */}
      <div className="sticky bottom-0 flex-none border-t border-gray-200 bg-white px-5 py-4 space-y-2">
        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Get Free Quotes'}
        </Button>
        <p className="text-xs text-gray-500 text-center">
          Free & no obligation. Verified contractors will contact you directly.
        </p>
      </div>
    </form>
  )
}
