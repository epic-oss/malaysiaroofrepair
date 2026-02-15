import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { Navbar } from './Navbar'
import { MobileMenu } from './MobileMenu'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-800 text-white font-bold text-xl">
              MR
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight text-primary-800">
                {siteConfig.siteName}
              </span>
              <span className="text-xs text-gray-600 hidden sm:block">
                {siteConfig.nicheLabel}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Navbar />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
