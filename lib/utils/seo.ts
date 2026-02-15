import { Metadata } from 'next'
import { siteConfig } from '@/lib/config'
import { slugify } from './slugify'

/**
 * Generate metadata for pages
 * Always uses config.currentYear - never hardcoded
 */
export function generateMetadata({
  title,
  description,
  path = '',
  image,
  keywords,
}: {
  title?: string
  description?: string
  path?: string
  image?: string
  keywords?: string
}): Metadata {
  const metaTitle = title
    ? `${title} | ${siteConfig.siteName}`
    : siteConfig.defaultMetadata.title

  const metaDescription = description || siteConfig.defaultMetadata.description
  const url = `${siteConfig.siteUrl}${path}`
  const ogImage = image || `${siteConfig.siteUrl}/og-image.jpg`
  const metaKeywords = keywords || siteConfig.defaultMetadata.keywords

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    authors: [{ name: siteConfig.siteName }],
    openGraph: {
      type: 'website',
      locale: 'en_MY',
      url,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  }
}

/**
 * Generate metadata for state/location pages
 */
export function generateStateMetadata(state: string): Metadata {
  return generateMetadata({
    title: `Best Roof Repair & Waterproofing Contractors in ${state} ${siteConfig.currentYear}`,
    description: `Find trusted roofing contractors in ${state}, Malaysia. Compare quotes from verified professionals for roof repair, waterproofing, and more.`,
    path: `/locations/${slugify(state)}`,
    keywords: `roof repair ${state}, waterproofing ${state}, roofing contractors ${state}, atap bocor ${state}`,
  })
}

/**
 * Generate metadata for service pages
 */
export function generateServiceMetadata(service: string): Metadata {
  return generateMetadata({
    title: `${service} in Malaysia ${siteConfig.currentYear} — Find Trusted Contractors`,
    description: `Connect with verified ${service.toLowerCase()} contractors across Malaysia. Compare quotes and hire the best professionals for your project.`,
    path: `/services/${slugify(service)}`,
    keywords: `${service.toLowerCase()} malaysia, ${service.toLowerCase()} contractors, ${service.toLowerCase()} services`,
  })
}

/**
 * Generate metadata for company pages
 */
export function generateCompanyMetadata({
  name,
  description,
  city,
  state,
  slug,
}: {
  name: string
  description?: string
  city?: string
  state: string
  slug: string
}): Metadata {
  const location = city ? `${city}, ${state}` : state
  const metaDescription = description
    ? description.substring(0, 160)
    : `Professional roofing and waterproofing services in ${location}. Contact ${name} for free quotes.`

  return generateMetadata({
    title: `${name} - ${location}`,
    description: metaDescription,
    path: `/companies/${slug}`,
    keywords: `${name}, roofing contractor ${state}, roof repair ${city || state}`,
  })
}
