import GuideTemplate, {
  type GuideSection,
  type ProductCard,
} from '@/components/guides/GuideTemplate'

export const metadata = {
  title: `Bostik Waterproofing Malaysia 2026 — Complete Product Guide & Prices`,
  description:
    'Complete guide to Bostik waterproofing products in Malaysia 2026. Compare Boscoseal AC2, PUW, RC2 prices, application methods, and see how Bostik compares to Sika and Pentens.',
}

const products: ProductCard[] = [
  {
    name: 'Boscoseal AC2 / Bostik Supercoat Fiber',
    badge: 'Most Popular',
    badgeColor: 'bg-accent-500 text-white',
    type: 'One-part water-based acrylic polymer fibre reinforced membrane',
    bestFor: 'Exposed roofs, bathrooms, balconies, wet areas',
    price: '~RM380 / 20kg · ~RM112 / 5kg',
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
    price: null,
    features: [
      'Water-based, environmentally friendly',
      'Bridges cracks effectively',
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
      "Non re-emulsifying (won't break down with water)",
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

const sections: GuideSection[] = [
  {
    type: 'products',
    heading: 'Complete Bostik Waterproofing Product Range',
    products,
  },
  {
    type: 'pricing-table',
    heading: 'Bostik Waterproofing Prices in Malaysia 2026',
    subtitle: 'Verified January 2026. Prices may vary by retailer.',
    columns: ['Product', 'Size', 'Price (RM)', 'Type'],
    rows: [
      { values: ['Boscoseal AC2', '20kg', '~RM380', 'Acrylic fibre membrane'], highlight: true },
      { values: ['Boscoseal AC2', '5kg', '~RM112', 'Acrylic fibre membrane'] },
      { values: ['Boscoseal PUW', '20kg', '~RM400–500', 'PU membrane'], highlight: true },
      { values: ['Boscoseal 16', 'per roll', '~RM200–300', 'Sheet membrane'] },
    ],
    note: "Pro tip: Boscoseal AC2's built-in fibre reinforcement eliminates the need to purchase separate fibreglass matting (which adds RM30–80 to Sika/Pentens jobs), making the total installed cost competitive.",
  },
  {
    type: 'comparison',
    heading: 'Bostik vs Sika vs Pentens — Which Should You Choose?',
    columns: ['Bostik', 'Sika', 'Pentens'],
    columnColors: ['text-orange-300', 'text-blue-300', 'text-green-300'],
    rows: [
      { feature: 'Parent company', values: ['Arkema (France)', 'Sika AG (Switzerland)', 'Pentens (Malaysia)'] },
      { feature: 'Market position', values: ['#3 in Malaysia', '#1 in Malaysia', '#2 in Malaysia'] },
      { feature: 'Price range', values: ['Mid–premium', 'Budget to premium', 'Budget–mid'] },
      { feature: 'Product range', values: ['Wide (8+ products)', 'Widest (10+ products)', 'Moderate (5–6)'] },
      { feature: 'Roof specialist', values: ['Boscoseal AC2', 'SikaFill MY', 'Pentens T200'] },
      { feature: 'Key advantage', values: ['Fibre-reinforced — no matting', 'Cheapest entry (RM65)', 'Local brand, budget-king'] },
      { feature: 'Best for', values: ['DIY — single-product solution', 'Commercial, certified systems', 'Price-sensitive residential'] },
    ],
  },
  {
    type: 'steps',
    heading: 'How to Apply Bostik Boscoseal AC2 (Step-by-Step)',
    subtitle: 'Boscoseal AC2 is the most popular Bostik product for DIY roof and bathroom waterproofing.',
    steps: [
      { title: 'Surface preparation', detail: 'Clean the surface thoroughly. Remove loose material, paint, oil, and dust. Repair cracks wider than 2mm before waterproofing.' },
      { title: 'Check surface moisture', detail: 'The surface should be clean and free of standing water. Damp surfaces are acceptable for most applications.' },
      { title: 'Priming', detail: 'Not always required on concrete — check the Technical Data Sheet (TDS). On porous surfaces, a diluted coat of AC2 (1:1 with water) can act as primer.' },
      { title: 'First coat', detail: 'Apply by brush or roller at approximately 1.0–1.5 kg/m². Work the product into all corners, joints, and cracks. For corners and movement joints, bed in Bostik sealing tape or fabric strip.' },
      { title: 'Drying time', detail: 'Allow 4–6 hours between coats depending on weather and temperature. Do not apply in rain or if rain is expected within 4 hours.' },
      { title: 'Second coat', detail: 'Apply perpendicular to the first coat direction to ensure even coverage and eliminate pinholes.' },
      { title: 'Full cure', detail: '7 days for full waterproofing performance. Protect from rain for the first 24 hours.' },
      { title: 'Tiling over', detail: 'For bathroom and wet area applications, you can tile over once fully cured.' },
    ],
    tip: "Boscoseal AC2's fibre reinforcement means you skip the fibreglass matting step that Sika and Pentens products require — one less product to buy and one less application step.",
  },
  {
    type: 'where-to-buy',
    heading: 'Where to Buy Bostik Waterproofing in Malaysia',
    online: [
      'Shopee Malaysia — search "Bostik Boscoseal" for full range including smaller packs',
      'Lazada Malaysia — search "Bostik waterproofing" for competitive pricing',
      'eWarehouse.my — stocks the full Boscoseal range',
    ],
    physical: [
      'Hardware stores nationwide (use Bostik dealer locator at bostik.com/malaysia)',
      'Chin Chun Hardware (Shah Alam, Selangor) — stocks professional range',
      'VelocityDIY (Johor Bahru)',
      'Mr. DIY (selected Bostik products, mainly smaller packs)',
    ],
    note: 'Always buy from authorised dealers to ensure genuine products. Bostik products have batch codes on packaging — verify at bostik.com/malaysia.',
  },
]

const faq = [
  {
    question: 'Is Bostik waterproofing good?',
    answer:
      'Yes. Bostik is backed by Arkema Group (France) with 135+ years of adhesive and waterproofing expertise and a presence in 50+ countries. The Boscoseal range is well-regarded by Malaysian contractors, particularly Boscoseal AC2 which is unique in the market for its built-in fibre reinforcement — eliminating the need for separate fibreglass matting.',
  },
  {
    question: 'How long does Bostik waterproofing last?',
    answer:
      'Bostik waterproofing systems typically last 10–15 years with proper surface preparation and application. The polyurethane-based Boscoseal PUW can last longer in high-stress applications. Lifespan depends on UV exposure, foot traffic, surface preparation quality, and climate conditions.',
  },
  {
    question: 'Can I apply Bostik waterproofing myself?',
    answer:
      "Yes — especially Boscoseal AC2, which is designed for easy brush or roller application. It's one of the more DIY-friendly products on the market because the fibre reinforcement is pre-mixed, eliminating the tricky matting step. For roof areas larger than 50 sq metres or below-grade applications, professional application is recommended.",
  },
  {
    question: 'Is Bostik better than Sika for waterproofing?',
    answer:
      "They excel in different areas. Bostik's key advantage is Boscoseal AC2's fibre reinforcement — you skip the fibreglass matting step, saving time and cost. Sika has the widest product range and is most widely specified by engineers for commercial projects. For standard residential roof waterproofing, Bostik AC2 is an excellent and competitive choice.",
  },
]

const BOSTIK_INTRO =
  "Bostik is one of the world's oldest adhesive and waterproofing brands — founded in 1889 and now owned by Arkema Group, a French multinational with €8.7 billion in revenue and operations in 50+ countries. In Malaysia, Bostik's waterproofing range is marketed under the \u201cSeal & Block\u201d umbrella and spans DIY-friendly acrylic coatings to high-performance polyurethane membranes. This guide covers every Bostik waterproofing product available in Malaysia, including verified 2026 pricing and a head-to-head comparison against Sika and Pentens."

export default function BostikWaterproofingPage() {
  return (
    <GuideTemplate
      slug="bostik-waterproofing"
      hero={{
        title: 'Bostik Waterproofing Malaysia 2026 — Complete Product Guide & Prices',
        description:
          'Compare Boscoseal AC2, PUW, RC2 prices, application methods, and see how Bostik compares to Sika and Pentens.',
        category: 'Product Review',
        categoryBg: 'bg-violet-500/30',
        categoryText: 'text-violet-100',
      }}
      intro={BOSTIK_INTRO}
      sections={sections}
      faq={faq}
      publishDate="January 2026"
      ctaLinks={[
        { label: 'Browse Contractors', href: '/listings', variant: 'gold' },
        { label: 'Waterproofing Guide', href: '/guides/waterproofing-malaysia', variant: 'outline' },
      ]}
    />
  )
}
