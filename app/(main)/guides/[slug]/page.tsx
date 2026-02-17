import { notFound } from 'next/navigation'
import { guidePages } from '@/lib/content/guide-pages'
import { siteConfig } from '@/lib/config'
import GuideTemplate, { type GuideSection } from '@/components/guides/GuideTemplate'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return guidePages.map((page) => ({
    slug: page.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const page = guidePages.find((p) => p.slug === slug)

  if (!page) {
    return { title: 'Guide Not Found' }
  }

  return {
    title: page.title,
    description: page.description,
    keywords: [
      page.targetKeyword,
      'roof repair malaysia',
      'roofing contractors',
      'waterproofing malaysia',
    ],
    openGraph: {
      title: page.title,
      description: page.description,
      type: 'article',
    },
  }
}

// Map slugs to category labels and colors for the hero badge
const SLUG_CATEGORY: Record<string, { label: string; bg: string; text: string }> = {
  'waterproofing-malaysia':      { label: 'Waterproofing',   bg: 'bg-blue-500/30',   text: 'text-blue-100' },
  'sika-waterproofing-malaysia': { label: 'Product Review',  bg: 'bg-violet-500/30', text: 'text-violet-100' },
  'pentens-t200-review':         { label: 'Product Review',  bg: 'bg-violet-500/30', text: 'text-violet-100' },
  'roof-repair-cost-malaysia':   { label: 'Cost Guide',      bg: 'bg-green-500/30',  text: 'text-green-100' },
  'how-to-fix-roof-leak':        { label: 'Roof Repair',     bg: 'bg-orange-500/30', text: 'text-orange-100' },
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params
  const page = guidePages.find((p) => p.slug === slug)

  if (!page) {
    notFound()
  }

  // Convert plain-text sections to GuideSection type 'text'
  const sections: GuideSection[] = page.content.sections.map((s) => ({
    type: 'text' as const,
    heading: s.heading,
    content: s.content,
  }))

  const cat = SLUG_CATEGORY[slug]

  return (
    <GuideTemplate
      slug={slug}
      hero={{
        title: page.h1,
        description: page.description,
        category: cat?.label,
        categoryBg: cat?.bg,
        categoryText: cat?.text,
      }}
      intro={page.content.intro}
      sections={sections}
      faq={page.content.faq}
    />
  )
}
