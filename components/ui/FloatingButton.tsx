'use client'

import { useState, useEffect } from 'react'
import { MessageSquare, ChevronUp } from 'lucide-react'
import { Modal } from './Modal'
import { BroadcastLeadForm } from '../forms/BroadcastLeadForm'

const SOCIAL_PROOF = [
  '✓ 2,300+ Homeowners Connected with Roofers',
  '✓ Average Response Time: Under 2 Hours',
  '✓ Free Quotes, No Obligation',
]

export function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [proofIndex, setProofIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setProofIndex((i) => (i + 1) % SOCIAL_PROOF.length)
        setVisible(true)
      }, 300)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      {/* Desktop stack — Back to Top + Get Free Quotes */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-40 flex-col items-end gap-3">
        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-primary-800"
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>

        {/* Get Free Quotes with rotating social proof */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex flex-col items-center gap-0.5 rounded-full bg-accent-500 hover:bg-accent-600 px-6 py-3 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
          aria-label="Get Free Quotes"
        >
          <span
            className="text-[10px] font-medium leading-tight transition-opacity duration-300"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {SOCIAL_PROOF[proofIndex]}
          </span>
          <span className="flex items-center gap-2 font-semibold text-sm">
            <MessageSquare className="h-4 w-4" />
            Get Free Quotes
          </span>
        </button>
      </div>

      {/* Mobile Button - Bottom Right circle */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed bottom-4 right-4 z-40 flex items-center justify-center h-14 w-14 rounded-full bg-accent-500 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
        aria-label="Get Free Quotes"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Modal with Lead Form */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Get Free Quotes from Roofing Contractors"
      >
        <BroadcastLeadForm onSuccess={() => setIsOpen(false)} />
      </Modal>
    </>
  )
}
