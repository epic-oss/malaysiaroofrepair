import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { guidePages } from '@/lib/content/guide-pages'
import { siteConfig } from '@/lib/config'

export const metadata = {
  title: `Bostik Waterproofing Malaysia 2026 — Complete Product Guide & Prices`,
  description:
    'Complete guide to Bostik waterproofing products in Malaysia 2026. Compare Boscoseal AC2, PUW, RC2 prices, application methods, and see how Bostik compares to Sika and Pentens.',
}

const products = [
  {
    name: 'Boscoseal AC2 / Bostik Supercoat Fiber',
    badge: 'Most Popular',
    badgeColor: 'bg-accent-500 text-white',
    type: 'One-part water-based acrylic polymer fibre reinforced membrane',
    bestFor: 'Exposed roofs, bathrooms, balconies, wet areas',
    price: '~RM380 / 20kg pail · ~RM112 / 5kg pail',
    features: [
      'Built-in fibre reinforcement — no separate matting needed',
      'Low odour (suitable for indoor use)',
      'Excellent UV resistance',
      'Brush or roller applied',
      'Foot-trafficable after curing',
      'Colors: Grey, White',
    ],
  },
  {
    name: 'Boscoseal RC2 / Bostik Supercoat EX',
    badge: null,
    type: 'Single-component acrylic flexible waterproofing coating',
    bestFor: 'Exposed roof membranes, pipes, conduits, parapet walls',
    price: 'Available at hardware stores and online',
    features: [
      'Water-based, environmentally friendly',
      'Bridges cracks',
      'Prevents metal corrosion',
      'UV resistant',
      'Flexible across wide temperature range',
    ],
  },
  {
    name: 'Boscoseal PUW',
    badge: 'Premium',
    badgeColor: 'bg-violet-600 text-white',
    type: 'One-component water-based modified polyurethane membrane',
    bestFor: 'Premium waterproofing, high-elasticity requirements',
    price: '~RM400–500 / 20kg (Shopee/Lazada)',
    features: [
      'No mixing required — ready to use',
      'Highly elastomeric after curing',
      'Brush, roller, or trowel applied',
      'Strong adhesion to masonry',
      'Non re-emulsifying (won\'t break down with water)',
    ],
  },
  {
    name: 'Boscolastic',
    badge: null,
    type: 'Two-component elastomeric acrylic polymer cementitious coating',
    bestFor: 'Concrete structures, suspended structures, basements',
    price: 'Contact distributor',
    features: [
      'Mixed on site (Part A + Part B)',
      'Excellent crack bridging',
      'Accommodates structural movement',
      'Non-toxic',
      'Withstands heavy topping',
    ],
  },
  {
    name: 'Boscoflex',
    badge: null,
    type: 'Two-component polymer modified cementitious waterproof coating',
    bestFor: 'Tanking, lining, below-grade applications',
    price: 'Contact distributor',
    features: [
      'Easy 2-part mixing',
      'Superior adhesion to concrete and cement render',
      'Abrasion resistant',
      'Can apply to damp substrates',
      'Paintable with elastic paint',
    ],
  },
  {
    name: 'Boscoseal 16',
    badge: null,
    type: 'Self-adhesive rubberized bitumen sheet membrane',
    bestFor: 'Large flat roof areas, concrete slabs, new builds',
    price: '~RM200–300 / roll',
    features: [
      'Self-adhesive — no torch or heat needed',
      'Self-sealing overlap edges',
      'No seaming tape required',
      'Polyethylene film protected',
      'Stable under severe weather',
    ],
  },
  {
    name: 'Boscoseal PUR',
    badge: null,
    type: 'Bitumen modified liquid-applied elastomeric membrane',
    bestFor: 'Below-grade and foundation waterproofing',
    price: 'Contact distributor',
    features: [
      'For foundations, basements, and buried structures',
      'Bitumen modified for flexibility',
      'Liquid-applied, brush or roller',
    ],
  },
  {
    name: 'Boscoseal AR',
    badge: null,
    type: 'Anti-root water-borne liquid applied membrane',
    bestFor: 'Green roofs, planter boxes, landscaping areas',
    price: 'Contact distributor',
    features: [
      'Constrains root growth without harming plants',
      'Water-borne — environmentally friendly',
      'For green roofs and planters',
    ],
  },
]

const applicationSteps = [
  { step: 1, title: 'Surface preparation', detail: 'Clean surface, remove loose material, repair cracks wider than 2mm' },
  { step: 2, title: 'Check surface moisture', detail: 'Surface should be clean and free of standing water. Damp surfaces are acceptable' },
  { step: 3, title: 'Priming', detail: 'Not always required on concrete. On porous surfaces, a diluted coat (1:1 with water) can act as primer' },
  { step: 4, title: 'First coat', detail: 'Apply by brush or roller at ~1.0–1.5 kg/m². Work into corners, joints, and cracks' },
  { step: 5, title: 'Drying time', detail: 'Allow 4–6 hours between coats depending on weather. Do not apply if rain expected within 4 hours' },
  { step: 6, title: 'Second coat', detail: 'Apply perpendicular to first coat direction to ensure even coverage and eliminate pinholes' },
  { step: 7, title: 'Full cure', detail: '7 days for full waterproofing performance. Protect from rain for the first 24 hours' },
  { step: 8, title: 'Tiling over', detail: 'For bathroom and wet area applications, you can tile over once fully cured' },
]

const faq = [
  {
    question: 'Is Bostik waterproofing good?',
    answer: 'Yes. Bostik is backed by Arkema Group (France) with 135+ years of adhesive and waterproofing expertise and a presence in 50+ countries. The Boscoseal range is well-regarded by Malaysian contractors, particularly Boscoseal AC2 which is unique in the market for its built-in fibre reinforcement — eliminating the need for separate fibreglass matting.',
  },
  {
    question: 'How long does Bostik waterproofing last?',
    answer: 'Bostik waterproofing systems typically last 10–15 years with proper surface preparation and application. The polyurethane-based Boscoseal PUW can last longer in high-stress applications. Lifespan depends on UV exposure, foot traffic, surface preparation quality, and climate conditions.',
  },
  {
    question: 'Can I apply Bostik waterproofing myself?',
    answer: 'Yes — especially Boscoseal AC2, which is designed for easy brush or roller application. It\'s one of the more DIY-friendly products on the market because the fibre reinforcement is pre-mixed, eliminating the tricky matting step. For roof areas larger than 50 sq metres or below-grade applications, professional application is recommended.',
  },
  {
    question: 'Is Bostik better than Sika for waterproofing?',
    answer: 'They excel in different areas. Bostik\'s key advantage is Boscoseal AC2\'s fibre reinforcement — you skip the fibreglass matting step, saving time and cost. Sika has the widest product range and is most widely specified by engineers for commercial projects. For standard residential roof waterproofing, Bostik AC2 is an excellent and competitive choice.',
  },
]

const relatedGuides = guidePages.filter((p) => p.slug !== 'bostik-waterproofing').slice(0, 4)

export default function BostikWaterproofingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-block rounded-full bg-violet-600/30 px-3 py-1 text-sm font-medium text-violet-200 mb-4">
            Product Review
          </div>
          <h1 className="text-4xl font-bold text-white md:text-5xl leading-tight">
            Bostik Waterproofing Malaysia 2026 — Complete Product Guide &amp; Prices
          </h1>
          <p className="mt-4 text-xl text-gray-200">
            Complete guide to Bostik waterproofing products in Malaysia 2026. Compare Boscoseal AC2, PUW, RC2 prices, application methods, and see how Bostik compares to Sika and Pentens.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl space-y-10">

          {/* Intro */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Bostik is one of the world&apos;s oldest adhesive and waterproofing brands — founded in 1889 and now owned by <strong>Arkema Group</strong>, a French multinational with €8.7 billion in revenue and operations in 50+ countries. In Malaysia, Bostik&apos;s waterproofing range is marketed under the <strong>&quot;Seal &amp; Block&quot;</strong> umbrella and spans DIY-friendly acrylic coatings to high-performance polyurethane membranes. This guide covers every Bostik waterproofing product available in Malaysia, including verified 2026 pricing and a head-to-head comparison against Sika and Pentens.
            </p>
          </div>

          {/* Product Range */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Bostik Waterproofing Product Range</h2>
            <div className="space-y-5">
              {products.map((product) => (
                <div key={product.name} className="border border-gray-200 rounded-lg p-5 hover:border-primary-200 transition-colors">
                  <div className="flex flex-wrap items-start gap-2 mb-2">
                    <h3 className="text-base font-bold text-gray-900">{product.name}</h3>
                    {product.badge && (
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${product.badgeColor}`}>
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mb-1"><span className="font-medium">Type:</span> {product.type}</p>
                  <p className="text-xs text-gray-500 mb-1"><span className="font-medium">Best for:</span> {product.bestFor}</p>
                  <p className="text-sm font-semibold text-primary-700 mb-3">{product.price}</p>
                  <ul className="space-y-1">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Table */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Bostik Waterproofing Prices in Malaysia 2026</h2>
            <p className="text-sm text-gray-500 mb-6">Verified January 2026. Prices may vary by retailer.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary-900 text-white">
                    <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Product</th>
                    <th className="text-left px-4 py-3 font-semibold">Size</th>
                    <th className="text-left px-4 py-3 font-semibold">Price (RM)</th>
                    <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { product: 'Boscoseal AC2', size: '20kg', price: '~RM380', type: 'Acrylic fibre membrane', highlight: true },
                    { product: 'Boscoseal AC2', size: '5kg', price: '~RM112', type: 'Acrylic fibre membrane', highlight: false },
                    { product: 'Boscoseal PUW', size: '20kg', price: '~RM400–500', type: 'PU membrane', highlight: true },
                    { product: 'Boscoseal 16', size: 'per roll', price: '~RM200–300', type: 'Sheet membrane', highlight: false },
                  ].map((row, i) => (
                    <tr key={i} className={row.highlight ? 'bg-primary-50' : 'bg-white'}>
                      <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{row.product}</td>
                      <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{row.size}</td>
                      <td className="px-4 py-3 font-semibold text-primary-700 border-b border-gray-100">{row.price}</td>
                      <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{row.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500 italic">
              Pro tip: Boscoseal AC2&apos;s built-in fibre reinforcement eliminates the need to purchase separate fibreglass matting (which adds RM30–80 to Sika/Pentens jobs), making the total installed cost competitive.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bostik vs Sika vs Pentens — Which Should You Choose?</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Feature</th>
                    <th className="text-left px-4 py-3 font-semibold text-orange-300">Bostik</th>
                    <th className="text-left px-4 py-3 font-semibold text-blue-300">Sika</th>
                    <th className="text-left px-4 py-3 rounded-tr-lg font-semibold text-green-300">Pentens</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { feature: 'Parent company', bostik: 'Arkema (France)', sika: 'Sika AG (Switzerland)', pentens: 'Pentens (Malaysia)' },
                    { feature: 'Market position', bostik: '#3 in Malaysia', sika: '#1 in Malaysia', pentens: '#2 in Malaysia' },
                    { feature: 'Price range', bostik: 'Mid–premium', sika: 'Budget to premium', pentens: 'Budget–mid' },
                    { feature: 'Product range', bostik: 'Wide (8+ products)', sika: 'Widest (10+ products)', pentens: 'Moderate (5–6)' },
                    { feature: 'Roof specialist', bostik: 'Boscoseal AC2', sika: 'SikaFill MY', pentens: 'Pentens T200' },
                    { feature: 'Key advantage', bostik: 'Fibre-reinforced — no matting needed', sika: 'Cheapest entry (RM65)', pentens: 'Local brand, budget-king' },
                    { feature: 'Best for', bostik: 'DIY — single-product solution', sika: 'Commercial, certified systems', pentens: 'Price-sensitive residential' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-medium text-gray-900">{row.feature}</td>
                      <td className="px-4 py-3 text-gray-700">{row.bostik}</td>
                      <td className="px-4 py-3 text-gray-700">{row.sika}</td>
                      <td className="px-4 py-3 text-gray-700">{row.pentens}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Application Steps */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">How to Apply Bostik Boscoseal AC2 (Step-by-Step)</h2>
            <p className="text-sm text-gray-500 mb-6">Boscoseal AC2 is the most popular Bostik product for DIY roof and bathroom waterproofing.</p>
            <ol className="space-y-4">
              {applicationSteps.map((s) => (
                <li key={s.step} className="flex gap-4">
                  <span className="flex-none flex items-center justify-center h-8 w-8 rounded-full bg-primary-900 text-white text-sm font-bold">
                    {s.step}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{s.title}</p>
                    <p className="text-sm text-gray-600 mt-0.5">{s.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6 rounded-lg bg-accent-50 border border-accent-200 p-4 text-sm text-accent-900">
              <strong>Pro tip:</strong> Boscoseal AC2&apos;s fibre reinforcement means you skip the fibreglass matting step that Sika and Pentens products require — one less product to buy and one less application step.
            </div>
          </div>

          {/* Where to Buy */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Buy Bostik Waterproofing in Malaysia</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Online</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Shopee Malaysia — search &quot;Bostik Boscoseal&quot;</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Lazada Malaysia — search &quot;Bostik waterproofing&quot;</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />eWarehouse.my — full Boscoseal range</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Physical Stores</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Hardware stores nationwide (use Bostik dealer locator)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Chin Chun Hardware (Shah Alam, Selangor)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />VelocityDIY (Johor Bahru)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Mr. DIY (selected products)</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Bostik Malaysia website: bostik.com/malaysia · Dealer locator: bostik.com/malaysia/en/resources-tools/dealer-locator
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faq.map((item, i) => (
                <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Need a Professional Waterproofing Contractor?</h2>
            <p className="text-gray-200 mb-6">
              Browse verified roof repair and waterproofing contractors across all 16 Malaysian states. Get free quotes and compare prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/listings">
                <Button variant="gold" size="lg">
                  Browse Contractors
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/guides/waterproofing-malaysia">
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white/20">
                  Waterproofing Guide
                </Button>
              </Link>
            </div>
          </div>

          {/* Related Guides */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedGuides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all bg-white"
                >
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">{g.h1}</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">{g.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Last updated */}
          <div className="text-center text-sm text-gray-500">
            Last updated: January 2026 |{' '}
            <Link href="/" className="text-primary-600 hover:underline">{siteConfig.siteName}</Link>
          </div>

        </div>
      </section>
    </div>
  )
}
