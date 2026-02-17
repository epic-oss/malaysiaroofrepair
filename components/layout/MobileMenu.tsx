'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { createBrowserClient } from '@supabase/ssr'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils/cn'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/listings', label: 'Contractors' },
  { href: '/locations/selangor', label: 'Locations' },
  { href: '/services/roof-leak-repair', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/guides', label: 'Guides' },
  { href: '/submit', label: 'List Your Business' },
]

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-600"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-16 z-40 bg-black/20 backdrop-blur-sm"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div className="fixed inset-x-0 top-16 z-50 border-b border-gray-200 bg-white shadow-lg">
            <nav className="container mx-auto px-4 py-4">
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href ||
                    (link.href !== '/' && pathname?.startsWith(link.href))

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className={cn(
                        'block px-4 py-3 text-base font-medium rounded-md transition-colors',
                        isActive
                          ? 'text-primary-800 bg-primary-50'
                          : 'text-gray-600 hover:text-primary-800 hover:bg-gray-50'
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>

              {/* Mobile CTA */}
              <div className="mt-4 space-y-2">
                <Link href="/submit" onClick={closeMenu} className="block">
                  <Button variant="outline" className="w-full">
                    List Your Business
                  </Button>
                </Link>
                {isLoggedIn ? (
                  <Link href="/dashboard" onClick={closeMenu} className="block">
                    <Button variant="primary" className="w-full">
                      Dashboard
                    </Button>
                  </Link>
                ) : (
                  <Link href="/login" onClick={closeMenu} className="block">
                    <Button variant="primary" className="w-full">
                      Login
                    </Button>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  )
}
