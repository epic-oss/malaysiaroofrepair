'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils/cn'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/listings', label: 'Contractors' },
  { href: '/locations/selangor', label: 'Locations' },
  { href: '/services/roof-leak-repair', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-1">
      {/* Navigation Links */}
      {navLinks.map((link) => {
        const isActive = pathname === link.href ||
          (link.href !== '/' && pathname?.startsWith(link.href))

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'px-3 py-2 text-sm font-medium rounded-md transition-colors',
              isActive
                ? 'text-primary-800 bg-primary-50'
                : 'text-gray-600 hover:text-primary-800 hover:bg-gray-50'
            )}
          >
            {link.label}
          </Link>
        )
      })}

      {/* CTA Buttons */}
      <div className="ml-4 flex items-center space-x-2">
        <Link href="/submit">
          <Button variant="outline" size="sm">
            List Your Business
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button variant="primary" size="sm">
            Dashboard
          </Button>
        </Link>
      </div>
    </nav>
  )
}
