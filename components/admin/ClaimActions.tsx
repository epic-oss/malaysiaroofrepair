'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/Button'
import { Check, X } from 'lucide-react'

interface ClaimActionsProps {
  claimId: string
  companyId: string
  userId: string
}

export function ClaimActions({ claimId, companyId, userId }: ClaimActionsProps) {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)

  async function handleApprove() {
    if (!confirm('Are you sure you want to approve this claim?')) return

    setIsProcessing(true)
    try {
      const response = await fetch('/api/admin/claims/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ claimId, companyId, userId }),
      })

      if (response.ok) {
        router.refresh()
      } else {
        alert('Failed to approve claim')
      }
    } catch (error) {
      alert('An error occurred')
    } finally {
      setIsProcessing(false)
    }
  }

  async function handleReject() {
    if (!confirm('Are you sure you want to reject this claim?')) return

    setIsProcessing(true)
    try {
      const response = await fetch('/api/admin/claims/reject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ claimId }),
      })

      if (response.ok) {
        router.refresh()
      } else {
        alert('Failed to reject claim')
      }
    } catch (error) {
      alert('An error occurred')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="flex gap-2">
      <Button
        size="sm"
        variant="primary"
        onClick={handleApprove}
        disabled={isProcessing}
      >
        <Check className="h-4 w-4 mr-1" />
        Approve
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={handleReject}
        disabled={isProcessing}
      >
        <X className="h-4 w-4 mr-1" />
        Reject
      </Button>
    </div>
  )
}
