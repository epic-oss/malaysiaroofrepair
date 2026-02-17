import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/config'
import { Navbar } from './Navbar'
import { MobileMenu } from './MobileMenu'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image
              src="/mrr-logo.png"
              alt={siteConfig.siteName}
              width={40}
              height={40}
              className="h-10 w-10 object-contain shrink-0"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold text-primary-900">Malaysia Roof Repair</span>
              <span className="text-xs text-gray-500">Roof Repair &amp; Waterproofing</span>
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
