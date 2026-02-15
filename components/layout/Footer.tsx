import Link from 'next/link'
import { siteConfig } from '@/lib/config'

const footerLinks = {
  company: [
    { href: '/', label: 'Home' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/submit', label: 'List Your Business' },
  ],
  contractors: [
    { href: '/listings', label: 'All Contractors' },
    { href: '/locations/kuala-lumpur', label: 'Kuala Lumpur' },
    { href: '/locations/selangor', label: 'Selangor' },
    { href: '/locations/penang', label: 'Penang' },
  ],
  services: [
    { href: '/services/roof-leak-repair', label: 'Roof Leak Repair' },
    { href: '/services/waterproofing', label: 'Waterproofing' },
    { href: '/services/roof-coating', label: 'Roof Coating' },
    { href: '/services/emergency-roof-repair', label: 'Emergency Repair' },
  ],
  resources: [
    { href: '/guides', label: 'Guides' },
    { href: '/ms/atap-bocor', label: 'Bahasa Malaysia' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary-800 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contractors */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Contractors
            </h3>
            <ul className="space-y-3">
              {footerLinks.contractors.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary-800 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary-800 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary-800 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            {/* Copyright - USES currentYear from config */}
            <p className="text-sm text-gray-600">
              © {siteConfig.currentYear} {siteConfig.siteName}. All rights reserved.
            </p>

            {/* Contact */}
            <div className="flex items-center space-x-6 text-sm">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-gray-600 hover:text-primary-800 transition-colors"
              >
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>

          {/* Trust Badge */}
          <p className="mt-4 text-center text-xs text-gray-500">
            Connecting homeowners with trusted roofing professionals across {siteConfig.country}
          </p>
        </div>
      </div>
    </footer>
  )
}
