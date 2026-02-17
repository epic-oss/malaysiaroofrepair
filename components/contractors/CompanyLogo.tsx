'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils/cn'

const COLORS = [
  'bg-blue-600', 'bg-indigo-600', 'bg-violet-600',
  'bg-teal-600', 'bg-emerald-600', 'bg-cyan-600',
  'bg-orange-600', 'bg-rose-600', 'bg-pink-600',
]

function getInitialColor(name: string): string {
  return COLORS[name.charCodeAt(0) % COLORS.length]
}

interface CompanyLogoProps {
  name: string
  logoUrl: string | null | undefined
}

export function CompanyLogo({ name, logoUrl }: CompanyLogoProps) {
  const [imgError, setImgError] = useState(false)
  const initial = name.charAt(0).toUpperCase()
  const color = getInitialColor(name)

  if (logoUrl && !imgError) {
    return (
      <div className="relative h-16 w-16 overflow-hidden rounded-lg border border-gray-100 shrink-0">
        <Image
          src={logoUrl}
          alt={`${name} logo`}
          fill
          className="object-cover"
          sizes="64px"
          onError={() => setImgError(true)}
        />
      </div>
    )
  }

  return (
    <div className={cn(
      'flex h-16 w-16 shrink-0 items-center justify-center rounded-lg text-white text-2xl font-bold',
      color
    )}>
      {initial}
    </div>
  )
}
