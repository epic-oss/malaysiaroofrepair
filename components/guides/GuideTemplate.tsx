import Link from 'next/link'
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { guidePages } from '@/lib/content/guide-pages'
import { siteConfig } from '@/lib/config'
import FaqAccordion, { type FaqItem } from './FaqAccordion'

// ─── Section type definitions ────────────────────────────────────────────────

export interface TextSection {
  type: 'text'
  heading: string
  content: string
}

export interface StepsSection {
  type: 'steps'
  heading: string
  subtitle?: string
  steps: { title: string; detail: string }[]
  tip?: string
}

export interface ProductCard {
  name: string
  badge?: string | null
  badgeColor?: string
  type: string
  bestFor: string
  price?: string | null
  features: string[]
}

export interface ProductsSection {
  type: 'products'
  heading: string
  products: ProductCard[]
}

export interface ComparisonSection {
  type: 'comparison'
  heading: string
  columns: string[]
  columnColors?: string[]
  rows: { feature: string; values: string[] }[]
}

export interface PricingTableSection {
  type: 'pricing-table'
  heading: string
  subtitle?: string
  columns: string[]
  rows: { values: string[]; highlight?: boolean }[]
  note?: string
}

export interface WhereToBuySection {
  type: 'where-to-buy'
  heading: string
  online: string[]
  physical: string[]
  note?: string
}

export interface ProsConsSection {
  type: 'pros-cons'
  heading: string
  pros: string[]
  cons: string[]
}

export type GuideSection =
  | TextSection
  | StepsSection
  | ProductsSection
  | ComparisonSection
  | PricingTableSection
  | WhereToBuySection
  | ProsConsSection

export interface GuideTemplateProps {
  slug: string
  hero: {
    title: string
    description: string
    category?: string
    categoryBg?: string
    categoryText?: string
  }
  intro: string
  sections: GuideSection[]
  faq?: FaqItem[]
  publishDate?: string
  ctaLinks?: { label: string; href: string; variant?: 'gold' | 'outline' }[]
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function toId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-|-$/g, '')
}

/** Parse **bold** markers into <strong> elements */
function parseBold(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-gray-900">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return <span key={i}>{part}</span>
  })
}

// ─── Section renderers ────────────────────────────────────────────────────────

function RenderTextSection({ section }: { section: TextSection }) {
  type Block =
    | { kind: 'para'; lines: string[] }
    | { kind: 'bullets'; items: string[] }
    | { kind: 'diagnostics'; items: string[] }
    | { kind: 'numbered'; items: { num: number; text: string }[] }

  const blocks: Block[] = []
  let current: Block | null = null

  for (const raw of section.content.split('\n')) {
    const trimmed = raw.trim()

    if (!trimmed) {
      current = null
      continue
    }

    // Bullet line: starts with • or -
    if (trimmed.startsWith('•') || trimmed.startsWith('- ')) {
      const text = trimmed.startsWith('•')
        ? trimmed.slice(1).trim()
        : trimmed.slice(2).trim()
      if (current?.kind === 'bullets') {
        current.items.push(text)
      } else {
        current = { kind: 'bullets', items: [text] }
        blocks.push(current)
      }
      continue
    }

    // Numbered item: "1. text" or "Step 1: text"
    const numDot = trimmed.match(/^(\d+)\.\s+(.+)/)
    const stepNum = trimmed.match(/^Step\s+(\d+):\s*(.+)/i)
    const numMatch = numDot ?? stepNum
    if (numMatch) {
      const num = parseInt(numMatch[1], 10)
      const text = numMatch[2]
      if (current?.kind === 'numbered') {
        current.items.push({ num, text })
      } else {
        current = { kind: 'numbered', items: [{ num, text }] }
        blocks.push(current)
      }
      continue
    }

    // Diagnostic line: contains ' → ' (no • or - prefix)
    if (trimmed.includes(' → ')) {
      if (current?.kind === 'diagnostics') {
        current.items.push(trimmed)
      } else {
        current = { kind: 'diagnostics', items: [trimmed] }
        blocks.push(current)
      }
      continue
    }

    // Regular paragraph
    if (current?.kind === 'para') {
      current.lines.push(raw)
    } else {
      current = { kind: 'para', lines: [raw] }
      blocks.push(current)
    }
  }

  return (
    <div className="space-y-4 text-sm sm:text-base">
      {blocks.map((block, i) => {
        if (block.kind === 'para') {
          return (
            <div key={i} className="text-gray-700 leading-relaxed whitespace-pre-line">
              {parseBold(block.lines.join('\n'))}
            </div>
          )
        }

        if (block.kind === 'bullets') {
          return (
            <ul key={i} className="space-y-2.5">
              {block.items.map((item, j) => {
                // Optionally split on → inside a bullet to style the arrow
                const arrowIdx = item.indexOf(' → ')
                const before = arrowIdx >= 0 ? item.slice(0, arrowIdx) : null
                const after = arrowIdx >= 0 ? item.slice(arrowIdx + 3) : null
                return (
                  <li key={j} className="flex items-start gap-2.5 text-gray-700">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-600 shrink-0" />
                    <span className="leading-relaxed">
                      {before !== null ? (
                        <>
                          <span className="font-medium text-gray-900">{parseBold(before)}</span>
                          <span className="text-primary-500 mx-1.5">→</span>
                          <span>{parseBold(after ?? '')}</span>
                        </>
                      ) : (
                        parseBold(item)
                      )}
                    </span>
                  </li>
                )
              })}
            </ul>
          )
        }

        if (block.kind === 'diagnostics') {
          return (
            <ul key={i} className="border-l-2 border-primary-200 pl-4 space-y-2">
              {block.items.map((item, j) => {
                const arrowIdx = item.indexOf(' → ')
                const condition = arrowIdx >= 0 ? item.slice(0, arrowIdx) : item
                const diagnosis = arrowIdx >= 0 ? item.slice(arrowIdx + 3) : ''
                return (
                  <li key={j} className="flex items-start gap-2 text-sm leading-snug py-0.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-400 shrink-0" />
                    <span>
                      <span className="font-medium text-gray-900">{condition}</span>
                      {diagnosis && (
                        <>
                          <span className="text-primary-500 mx-1.5">→</span>
                          <span className="text-gray-600">{diagnosis}</span>
                        </>
                      )}
                    </span>
                  </li>
                )
              })}
            </ul>
          )
        }

        if (block.kind === 'numbered') {
          return (
            <ol key={i} className="space-y-3">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-3">
                  <span className="flex-none flex items-center justify-center h-6 w-6 rounded-full bg-primary-900 text-white text-xs font-bold shrink-0 mt-0.5">
                    {item.num}
                  </span>
                  <span className="text-sm text-gray-700 leading-relaxed">{parseBold(item.text)}</span>
                </li>
              ))}
            </ol>
          )
        }
      })}
    </div>
  )
}

function RenderStepsSection({ section }: { section: StepsSection }) {
  return (
    <div>
      {section.subtitle && (
        <p className="text-sm text-gray-500 mb-5">{section.subtitle}</p>
      )}
      <ol className="space-y-4">
        {section.steps.map((s, i) => (
          <li key={i} className="flex gap-4">
            <span className="flex-none flex items-center justify-center h-8 w-8 rounded-full bg-primary-900 text-white text-sm font-bold shrink-0 mt-0.5">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-gray-900 text-sm">{s.title}</p>
              <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{s.detail}</p>
            </div>
          </li>
        ))}
      </ol>
      {section.tip && (
        <div className="mt-6 rounded-lg bg-accent-50 border border-accent-200 p-4 text-sm text-accent-900">
          <strong>Pro tip:</strong> {section.tip}
        </div>
      )}
    </div>
  )
}

function RenderProductsSection({ section }: { section: ProductsSection }) {
  return (
    <div className="space-y-3">
      {section.products.map((product) => (
        <div
          key={product.name}
          className="border border-gray-200 rounded-lg p-4 hover:border-primary-200 transition-colors"
        >
          {/* Header row */}
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-sm font-bold text-gray-900">{product.name}</h3>
            {product.badge && (
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${product.badgeColor ?? 'bg-gray-200 text-gray-700'}`}
              >
                {product.badge}
              </span>
            )}
            {product.price && (
              <span className="ml-auto text-sm font-semibold text-primary-700 whitespace-nowrap">
                {product.price}
              </span>
            )}
          </div>
          {/* Meta */}
          <p className="text-xs text-gray-500 leading-snug mb-2">
            <span className="font-medium text-gray-600">Type:</span> {product.type}
            &nbsp;·&nbsp;
            <span className="font-medium text-gray-600">Best for:</span> {product.bestFor}
          </p>
          {/* Features: 2-col grid on desktop */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0.5">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-1.5 text-xs text-gray-600">
                <CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function RenderComparisonSection({ section }: { section: ComparisonSection }) {
  const cols = section.columns
  const colColors = section.columnColors ?? []
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Feature</th>
            {cols.map((col, i) => (
              <th
                key={col}
                className={`text-left px-4 py-3 font-semibold ${colColors[i] ?? ''} ${i === cols.length - 1 ? 'rounded-tr-lg' : ''}`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {section.rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-4 py-3 font-medium text-gray-900">{row.feature}</td>
              {row.values.map((val, j) => (
                <td key={j} className="px-4 py-3 text-gray-700">
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function RenderPricingTableSection({ section }: { section: PricingTableSection }) {
  return (
    <div>
      {section.subtitle && (
        <p className="text-sm text-gray-500 mb-4">{section.subtitle}</p>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-primary-900 text-white">
              {section.columns.map((col, i) => (
                <th
                  key={col}
                  className={`text-left px-4 py-3 font-semibold ${i === 0 ? 'rounded-tl-lg' : ''} ${i === section.columns.length - 1 ? 'rounded-tr-lg' : ''}`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row, i) => (
              <tr key={i} className={row.highlight ? 'bg-primary-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                {row.values.map((val, j) => (
                  <td
                    key={j}
                    className={`px-4 py-3 border-b border-gray-100 ${j === 0 ? 'font-medium text-gray-900' : j === 1 ? 'font-semibold text-primary-700' : 'text-gray-600'}`}
                  >
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {section.note && (
        <p className="mt-3 text-xs text-gray-500 italic">{section.note}</p>
      )}
    </div>
  )
}

function RenderWhereToBuySection({ section }: { section: WhereToBuySection }) {
  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 text-sm">Online</h3>
          <ul className="space-y-2">
            {section.online.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 text-sm">Physical Stores</h3>
          <ul className="space-y-2">
            {section.physical.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {section.note && (
        <p className="mt-4 text-sm text-gray-500 italic">{section.note}</p>
      )}
    </div>
  )
}

function RenderProsConsSection({ section }: { section: ProsConsSection }) {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <div>
        <h3 className="font-semibold text-green-700 mb-3 text-sm uppercase tracking-wide">Pros</h3>
        <ul className="space-y-2">
          {section.pros.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-red-600 mb-3 text-sm uppercase tracking-wide">Cons</h3>
        <ul className="space-y-2">
          {section.cons.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function renderSection(section: GuideSection): React.ReactNode {
  switch (section.type) {
    case 'text':
      return <RenderTextSection section={section} />
    case 'steps':
      return <RenderStepsSection section={section} />
    case 'products':
      return <RenderProductsSection section={section} />
    case 'comparison':
      return <RenderComparisonSection section={section} />
    case 'pricing-table':
      return <RenderPricingTableSection section={section} />
    case 'where-to-buy':
      return <RenderWhereToBuySection section={section} />
    case 'pros-cons':
      return <RenderProsConsSection section={section} />
  }
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function GuideTemplate({
  slug,
  hero,
  intro,
  sections,
  faq,
  publishDate,
  ctaLinks,
}: GuideTemplateProps) {
  const relatedGuides = guidePages.filter((p) => p.slug !== slug).slice(0, 4)

  const defaultCta = [
    { label: 'Browse Contractors', href: '/listings', variant: 'gold' as const },
    { label: 'Get Free Quotes', href: '/listings', variant: 'outline' as const },
  ]
  const ctas = ctaLinks ?? defaultCta

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {hero.category && (
            <div
              className={`inline-block rounded-full px-3 py-1 text-sm font-medium mb-4 ${hero.categoryBg ?? 'bg-white/20'} ${hero.categoryText ?? 'text-white'}`}
            >
              {hero.category}
            </div>
          )}
          <h1 className="text-3xl font-bold text-white md:text-5xl leading-tight">
            {hero.title}
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-3xl">{hero.description}</p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_280px]">

            {/* ── Left: article ── */}
            <div className="space-y-6">

              {/* Intro */}
              <div className="bg-white rounded-xl shadow-sm p-7 border border-gray-100">
                <p className="text-base text-gray-700 leading-relaxed">{intro}</p>
              </div>

              {/* Sections */}
              {sections.map((section) => (
                <div
                  key={section.heading}
                  id={toId(section.heading)}
                  className="bg-white rounded-xl shadow-sm p-7 border border-gray-100"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-5">{section.heading}</h2>
                  {renderSection(section)}
                </div>
              ))}

              {/* FAQ */}
              {faq && faq.length > 0 && (
                <div
                  id="faq"
                  className="bg-white rounded-xl shadow-sm p-7 border border-gray-100"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-5">
                    Frequently Asked Questions
                  </h2>
                  <FaqAccordion items={faq} />
                </div>
              )}

              {/* Mobile CTA */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-lg p-7 text-center lg:hidden">
                <h2 className="text-xl font-bold text-white mb-3">Need a Professional?</h2>
                <p className="text-gray-200 text-sm mb-5">
                  Browse verified contractors across all 16 Malaysian states. Free quotes.
                </p>
                <Link href="/listings">
                  <Button variant="gold" size="lg" className="w-full sm:w-auto">
                    Browse Contractors
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Last updated */}
              <div className="text-center text-sm text-gray-400 pb-2">
                Last updated: {publishDate ?? 'January 2026'} |{' '}
                <Link href="/" className="text-primary-600 hover:underline">
                  {siteConfig.siteName}
                </Link>
              </div>
            </div>

            {/* ── Right: sticky sidebar ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-8 space-y-5">

                {/* Table of Contents */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                    Contents
                  </p>
                  <nav>
                    <ul className="space-y-1.5">
                      {sections.map((s) => (
                        <li key={s.heading}>
                          <a
                            href={`#${toId(s.heading)}`}
                            className="text-sm text-gray-600 hover:text-primary-700 transition-colors block py-0.5 leading-snug"
                          >
                            {s.heading}
                          </a>
                        </li>
                      ))}
                      {faq && faq.length > 0 && (
                        <li>
                          <a
                            href="#faq"
                            className="text-sm text-gray-600 hover:text-primary-700 transition-colors block py-0.5"
                          >
                            FAQ
                          </a>
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>

                {/* CTA card */}
                <div className="bg-gradient-to-b from-primary-700 to-primary-900 rounded-xl p-6 text-center shadow-md">
                  <h3 className="text-white font-bold text-base mb-2">Need a Contractor?</h3>
                  <p className="text-gray-300 text-xs mb-4 leading-relaxed">
                    Get free quotes from verified roofers across all 16 Malaysian states.
                  </p>
                  <div className="space-y-2">
                    {ctas.map((cta) => (
                      <Link key={cta.href + cta.label} href={cta.href} className="block">
                        <Button
                          variant={cta.variant ?? 'gold'}
                          size="sm"
                          className="w-full"
                        >
                          {cta.label}
                          <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Quick related guides */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                    Related Guides
                  </p>
                  <ul className="space-y-3">
                    {relatedGuides.slice(0, 3).map((g) => (
                      <li key={g.slug}>
                        <Link
                          href={`/guides/${g.slug}`}
                          className="text-sm text-gray-700 hover:text-primary-700 transition-colors leading-snug block"
                        >
                          → {g.h1}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>

          {/* ── Related guides (full width below content) ── */}
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-5">Related Guides</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedGuides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="block p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all bg-white"
                >
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm leading-snug">
                    {g.h1}
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-2">{g.description}</p>
                  <span className="mt-2 inline-flex items-center text-xs text-primary-600 font-medium">
                    Read guide <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
