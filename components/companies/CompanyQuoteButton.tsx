'use client'

import { useState } from 'react'
import { Button } from '../ui/Button'
import { Modal } from '../ui/Modal'
import { DirectLeadForm } from '../forms/DirectLeadForm'

interface CompanyQuoteButtonProps {
  companyId: string
  companyName: string
}

export function CompanyQuoteButton({ companyId, companyName }: CompanyQuoteButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        variant="primary"
        size="lg"
        className="w-full md:w-auto"
        onClick={() => setIsOpen(true)}
      >
        Get Quote from {companyName}
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={`Request Quote from ${companyName}`}
      >
        <DirectLeadForm companyId={companyId} companyName={companyName} />
      </Modal>
    </>
  )
}
