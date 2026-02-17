import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config'
import { slugify } from '@/lib/utils/slugify'
import { createAdminClient } from '@/lib/supabase/admin'
import { malayPages } from '@/lib/content/malay-pages'
import { guidePages } from '@/lib/content/guide-pages'

// Force dynamic rendering to avoid build-time errors
export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.siteUrl

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/listings`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/submit`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Location pages (16 states)
  const locationPages: MetadataRoute.Sitemap = siteConfig.states.map((state) => ({
    url: `${baseUrl}/locations/${slugify(state)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Service pages (10 services)
  const servicePages: MetadataRoute.Sitemap = siteConfig.serviceTypes.map(
    (service) => ({
      url: `${baseUrl}/services/${slugify(service)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })
  )

  // Company pages (all active companies)
  const supabase = createAdminClient()
  const { data: companies } = await supabase
    .from('providers_roofrepair')
    .select('slug, updated_at')
    .order('updated_at', { ascending: false })

  const companyPages: MetadataRoute.Sitemap =
    companies?.map((company) => ({
      url: `${baseUrl}/companies/${company.slug}`,
      lastModified: new Date(company.updated_at || new Date()),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })) || []

  // Malay pages (10 pages)
  const malayPagesUrls: MetadataRoute.Sitemap = malayPages.map((page) => ({
    url: `${baseUrl}/ms/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Guide pages (SEO content)
  const guidePagesUrls: MetadataRoute.Sitemap = guidePages.map((page) => ({
    url: `${baseUrl}/guides/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Combine all pages
  return [
    ...staticPages,
    ...locationPages,
    ...servicePages,
    ...companyPages,
    ...malayPagesUrls,
    ...guidePagesUrls,
  ]
}
