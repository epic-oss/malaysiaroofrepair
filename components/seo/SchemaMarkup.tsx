import { Company } from '@/lib/types/database'

interface SchemaMarkupProps {
  company: Company
}

export function SchemaMarkup({ company }: SchemaMarkupProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    description: company.description || `${company.name} provides professional roofing services in ${company.state}, Malaysia.`,
    image: company.logo_url || undefined,
    '@id': `https://malaysiaroofrepair.com/companies/${company.slug}`,
    url: `https://malaysiaroofrepair.com/companies/${company.slug}`,
    telephone: company.phone || undefined,
    email: company.email || undefined,
    address: {
      '@type': 'PostalAddress',
      addressLocality: company.city || company.state,
      addressRegion: company.state,
      addressCountry: 'MY',
    },
    areaServed: {
      '@type': 'State',
      name: company.state,
    },
    openingHours: company.emergency_service ? 'Mo-Su 00:00-23:59' : undefined,
    priceRange: company.price_range || undefined,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
