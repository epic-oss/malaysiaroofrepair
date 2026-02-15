'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/Button'
import { Award, Star, Trash2 } from 'lucide-react'

interface Company {
  id: string
  name: string
  is_premium: boolean
  is_featured: boolean
}

interface CompanyActionsProps {
  company: Company
}

export function CompanyActions({ company }: CompanyActionsProps) {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)

  async function togglePremium() {
    const action = company.is_premium ? 'remove' : 'add'
    if (!confirm(`Are you sure you want to ${action} premium status?`)) return

    setIsProcessing(true)
    try {
      const response = await fetch('/api/admin/companies/toggle-premium', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyId: company.id,
          isPremium: !company.is_premium,
        }),
      })

      if (response.ok) {
        router.refresh()
      } else {
        alert('Failed to update premium status')
      }
    } catch (error) {
      alert('An error occurred')
    } finally {
      setIsProcessing(false)
    }
  }

  async function toggleFeatured() {
    const action = company.is_featured ? 'remove' : 'add'
    if (!confirm(`Are you sure you want to ${action} featured status?`)) return

    setIsProcessing(true)
    try {
      const response = await fetch('/api/admin/companies/toggle-featured', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyId: company.id,
          isFeatured: !company.is_featured,
        }),
      })

      if (response.ok) {
        router.refresh()
      } else {
        alert('Failed to update featured status')
      }
    } catch (error) {
      alert('An error occurred')
    } finally {
      setIsProcessing(false)
    }
  }

  async function deleteCompany() {
    if (
      !confirm(
        `Are you sure you want to DELETE "${company.name}"? This cannot be undone.`
      )
    )
      return

    setIsProcessing(true)
    try {
      const response = await fetch('/api/admin/companies/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyId: company.id }),
      })

      if (response.ok) {
        router.refresh()
      } else {
        alert('Failed to delete company')
      }
    } catch (error) {
      alert('An error occurred')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="flex gap-2 justify-end">
      <Button
        size="sm"
        variant={company.is_premium ? 'gold' : 'outline'}
        onClick={togglePremium}
        disabled={isProcessing}
        title={company.is_premium ? 'Remove Premium' : 'Make Premium'}
      >
        <Award className="h-4 w-4" />
      </Button>
      <Button
        size="sm"
        variant={company.is_featured ? 'primary' : 'outline'}
        onClick={toggleFeatured}
        disabled={isProcessing}
        title={company.is_featured ? 'Remove Featured' : 'Make Featured'}
      >
        <Star className="h-4 w-4" />
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={deleteCompany}
        disabled={isProcessing}
        className="text-red-600 hover:text-red-700 hover:bg-red-50"
        title="Delete Company"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  )
}
