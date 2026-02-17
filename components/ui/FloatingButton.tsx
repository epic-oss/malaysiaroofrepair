'use client'

import { useState } from 'react'
import { MessageSquare, X } from 'lucide-react'
import { Modal } from './Modal'
import { BroadcastLeadForm } from '../forms/BroadcastLeadForm'

export function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Button - Bottom Right */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex fixed bottom-8 right-8 z-40 items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 px-6 py-4 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 font-semibold"
        aria-label="Get Free Quotes"
      >
        <MessageSquare className="h-5 w-5" />
        <span>Get Free Quotes</span>
      </button>

      {/* Mobile Button - Bottom Bar */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed bottom-4 right-4 z-40 flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
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
