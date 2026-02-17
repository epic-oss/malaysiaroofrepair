import GuideTemplate, {
  type GuideSection,
  type ProductCard,
  type CoatingTypeCard,
} from '@/components/guides/GuideTemplate'

export const metadata = {
  title: 'Best Waterproof Coating Malaysia 2026 — Complete Guide & Price Comparison',
  description:
    'Compare the best waterproof coating products in Malaysia 2026. Prices, brands (Nippon, Sika, Bostik, Pentens), application guide, and which coating is right for your roof, bathroom, or wall.',
}

const products: ProductCard[] = [
  {
    name: 'Nippon Flex 200',
    badge: null,
    type: 'Acrylic elastomeric',
    bestFor: 'Roofs and walls — best-seller for residential use',
    price: '5kg ~RM120 · 20kg ~RM350',
    features: ['Water-based, low odour', 'UV resistant & breathable', 'Quick drying', 'DIY-friendly (brush or roller)'],
  },
  {
    name: 'Nippon Flex 200 Fibre Pro',
    badge: null,
    type: 'Acrylic + micro-fibre reinforced',
    bestFor: 'Enhanced roof protection with built-in reinforcement',
    price: '5kg ~RM150 · 20kg ~RM400',
    features: ['Built-in micro-fibre reinforcement', 'Enhanced crack bridging vs standard Flex 200', 'No separate matting needed', 'DIY-friendly'],
  },
  {
    name: 'SikaFill MY / SikaCoat 300 Cool',
    badge: 'Most Specified',
    badgeColor: 'bg-blue-600 text-white',
    type: 'Styrene-acrylic copolymer',
    bestFor: 'Roofs, terraces — applicable on tile, metal, PVC, polyester',
    price: '20kg ~RM220',
    features: ['Forms flexible waterproofing film', 'Multi-surface: tile, metal, PVC, polyester', 'Cool roof (heat reflective)', 'DIY-friendly'],
  },
  {
    name: 'SikaCoat 500',
    badge: 'Premium',
    badgeColor: 'bg-violet-600 text-white',
    type: 'Styrene-acrylic with internally reinforced micro-fibre',
    bestFor: 'Premium roof protection, better crack bridging than SikaFill MY',
    price: '5kg ~RM150 · 20kg ~RM400',
    features: ['Better crack bridging than SikaFill MY', 'Internally reinforced micro-fibre', 'Long-lasting premium protection', 'DIY-friendly'],
  },
  {
    name: 'Boscoseal AC2 / Bostik Supercoat Fiber',
    badge: 'Best Value Premium',
    badgeColor: 'bg-accent-500 text-white',
    type: 'Acrylic polymer with built-in fibre reinforcement',
    bestFor: 'Roofs, bathrooms, balconies — no matting step required',
    price: '5kg ~RM112 · 20kg ~RM380',
    features: ['Built-in fibre — no matting step', 'Foot-trafficable after curing', 'Indoor safe (low odour)', 'Brush or roller applied'],
  },
  {
    name: 'Pentens T200',
    badge: null,
    type: 'Acrylic cementitious hybrid',
    bestFor: 'Roofs and walls — popular Malaysian brand',
    price: '20kg ~RM180–250',
    features: ['Popular Malaysian brand', 'Good for large roof areas', 'Multiple colours available', 'Moderate difficulty'],
  },
  {
    name: 'Pentens T100',
    badge: 'Budget Pick',
    badgeColor: 'bg-green-600 text-white',
    type: 'PU bituminous modified',
    bestFor: 'Budget-friendly roof coating with PU elasticity',
    price: '5kg ~RM70 · 20kg ~RM235',
    features: ['Most affordable with PU properties', 'Good basic roof protection', 'DIY-friendly application', 'Popular for budget projects'],
  },
  {
    name: 'Sika Brushcoat WP',
    badge: null,
    type: 'Cementitious (cement-based)',
    bestFor: 'Bathrooms, wet areas, water tanks',
    price: '25kg ~RM65',
    features: ['Cheapest entry-point for wet areas', 'Excellent concrete bond', 'Can tile over when fully cured', 'Moderate mixing required'],
  },
  {
    name: 'SikaTop Seal-107',
    badge: null,
    type: 'Cementitious 2-component system',
    bestFor: 'Wet areas, water tanks, swimming pools',
    price: '25kg set ~RM90',
    features: ['Two-part mixing (powder + liquid)', 'Excellent for below-grade', 'Swimming pool approved', 'Moderate difficulty'],
  },
  {
    name: 'QingLong QL-Roofing',
    badge: 'Budget DIY',
    badgeColor: 'bg-gray-600 text-white',
    type: 'Acrylic water-based emulsion',
    bestFor: 'Small DIY roof repairs and touch-ups',
    price: '1kg ~RM30 · 5kg ~RM120 · 18kg ~RM379',
    features: ['Non-toxic & odourless', 'Best per-m² value on 18kg', 'Multiple colours available', 'Available on Shopee and Lazada'],
  },
]

const coatingTypes: CoatingTypeCard[] = [
  {
    num: 1,
    name: 'Acrylic Waterproof Coatings',
    oneLine: 'Water-based, flexible polymer coatings. The most widely used type in Malaysia for exposed roofs, walls, and balconies.',
    bestFor: 'Exposed roofs, exterior walls, balconies',
    pros: ['DIY-friendly — brush or roller application', 'Low odour, safe for indoor use', 'UV resistant and breathable', 'Quick drying (4–6 hours between coats)'],
    cons: ['Less elastic than PU — limited crack bridging', 'Needs recoating every 5–8 years'],
    popular: 'Nippon Flex 200, SikaFill MY / SikaCoat 300 Cool, Boscoseal AC2, Pentens T200, QingLong QL-Roofing',
    priceRange: 'RM65–380 per pail',
  },
  {
    num: 2,
    name: 'Polyurethane (PU) Waterproof Coatings',
    oneLine: 'Single or two-component PU-based liquid membranes. Highly elastic — best for flat roofs, high-movement structures, and fish ponds.',
    bestFor: 'Flat roofs, balconies, fish ponds, high-movement structures',
    pros: ['Highly elastic — superior crack bridging', 'Long-lasting: 10–15 years', 'Excellent performance in Malaysian heat and rain'],
    cons: ['Stronger odour during application', 'Some products require two-part mixing', 'More expensive than acrylic'],
    popular: 'Boscoseal PUW, Pentens T100 (PU bituminous), Sika Brushcoat WP',
    priceRange: 'RM70–500 per pail',
  },
  {
    num: 3,
    name: 'Cementitious Waterproof Coatings',
    oneLine: 'Cement-based two-part systems (powder + liquid polymer). Ideal for wet areas in contact with potable water.',
    bestFor: 'Bathrooms, wet areas, water tanks, swimming pools, basements',
    pros: ['Bonds exceptionally well to concrete', 'Non-toxic — safe for water tanks and pools', 'Can tile directly over when cured', 'Lowest cost entry-point'],
    cons: ['Not flexible — cracks under structural movement', 'Not suitable for exposed or dynamic surfaces like roofs'],
    popular: 'SikaTop Seal-107, Sikalastic-1 KMY, Boscoflex, Boscolastic',
    priceRange: 'RM65–250 per set',
  },
  {
    num: 4,
    name: 'Bituminous Waterproof Coatings',
    oneLine: 'Asphalt/tar-based liquid coatings. Best for foundations and below-grade structures where UV exposure is not a concern.',
    bestFor: 'Foundations, basements, below-grade and buried structures',
    pros: ['Excellent water barrier', 'Very durable below grade', 'Cost-effective for large areas'],
    cons: ['Not UV resistant — must be covered or backfilled', 'Strong smell during application', 'Black colour only'],
    popular: 'Sika Igolflex R, Boscoseal PUR, Pentens T100',
    priceRange: 'RM100–300 per pail',
  },
  {
    num: 5,
    name: 'Nano Waterproof Coatings',
    oneLine: 'Invisible nanotechnology-based spray coatings for tile surfaces, external walls, and sealing hairline cracks.',
    bestFor: 'Tile surfaces, external walls, hairline crack sealing',
    pros: ['Completely invisible after application', 'Easy spray application — no tools needed', 'Seals hairline cracks immediately'],
    cons: ['Not suitable for active leaks or heavy water ingress', 'Shorter lifespan than membrane coatings', 'Not a substitute for full waterproofing on roofs or bathrooms'],
    popular: 'Nano-G products, Jaysuing spray (Shopee/Lazada)',
    priceRange: 'RM15–150 per bottle',
  },
]

const sections: GuideSection[] = [
  {
    type: 'coating-types',
    heading: 'Types of Waterproof Coatings Explained',
    cards: coatingTypes,
  },
  {
    type: 'products',
    heading: 'Top 10 Waterproof Coating Products in Malaysia 2026',
    products,
  },
  {
    type: 'text',
    heading: 'How to Choose the Right Waterproof Coating',
    content: `**Choose by surface type:**
• Concrete flat roof → Acrylic: Nippon Flex 200, SikaFill MY / SikaCoat 300 Cool, or Boscoseal AC2
• Metal or zinc roof → Acrylic with metal adhesion: Boscoseal RC2 or QingLong QL-Roofing
• Clay tile roof → Nippon Roof Coating (decorative protection; for true waterproofing, apply membrane underneath)
• Bathroom floor and wall → Cementitious: SikaTop Seal-107 or Sika Brushcoat WP
• Basement or foundation → Bituminous: Sika Igolflex R or Boscoseal PUR
• Swimming pool → Cementitious: Sikalastic-1 KMY

**Choose by budget (per 20kg pail):**
• Under RM100: Sika Brushcoat WP (25kg, RM65), Pentens T100 5kg (RM70), QingLong 1–5kg (RM30–120)
• RM100–250: Nippon Flex 200 5kg (RM120), SikaFill MY 20kg (RM220), Pentens T200 (RM180–250)
• RM250–400+: Boscoseal AC2 20kg (RM380), Nippon Flex 200 Fibre Pro 20kg (RM400), SikaCoat 500 20kg (RM400)

**Important:** Waterproof coatings form a thick membrane barrier (0.5–1.5mm). Waterproof paints like Dulux Weathershield have water-repellent additives but are not true waterproofing products — do not use paint as a substitute for a coating on an active leak.`,
  },
  {
    type: 'pricing-table',
    heading: 'Price Comparison by Use Case',
    subtitle: 'Verified January 2026. Prices are per pail at standard retail. Contact distributors for trade pricing on large orders.',
    columns: ['Product', 'Size', 'Price (RM)', 'Best Use'],
    rows: [
      { values: ['Nippon Flex 200', '20kg', '~RM350', 'Roof — mid-range'], highlight: false },
      { values: ['Nippon Flex 200 Fibre Pro', '20kg', '~RM400', 'Roof — premium with fibre'], highlight: false },
      { values: ['SikaFill MY / SikaCoat 300 Cool', '20kg', '~RM220', 'Roof — best value mid'], highlight: true },
      { values: ['Boscoseal AC2', '20kg', '~RM380', 'Roof — fibre, no matting'], highlight: false },
      { values: ['Pentens T100', '5kg', '~RM70', 'Roof — budget'], highlight: false },
      { values: ['QingLong QL-Roofing', '18kg', '~RM379', 'Roof — DIY budget'], highlight: false },
      { values: ['Sika Brushcoat WP', '25kg', '~RM65', 'Bathroom — budget'], highlight: true },
      { values: ['SikaTop Seal-107', '25kg set', '~RM90', 'Bathroom / tank'], highlight: false },
      { values: ['Pentens T200', '20kg', '~RM180–250', 'Roof / wall — mid'], highlight: false },
    ],
    note: 'Cost per m² estimate (materials only): Budget products RM3–6/m² · Mid-range RM7–12/m² · Premium RM12–18/m². Professional installation (labour + materials) adds RM10–25/m².',
  },
  {
    type: 'steps',
    heading: 'How to Apply Waterproof Coating — Step-by-Step DIY Guide',
    subtitle: 'Covers acrylic roof coating, the most common application in Malaysia.',
    steps: [
      { title: 'Clean the surface', detail: 'Remove dirt, moss, lichen, and loose paint using a pressure washer or stiff wire brush. Moss and algae must be fully removed — they prevent adhesion.' },
      { title: 'Repair cracks and gaps', detail: 'Fill cracks wider than 2mm with cement filler or sealant appropriate for your surface. Allow to cure before coating.' },
      { title: 'Prime if needed', detail: 'Check the product Technical Data Sheet (TDS). On highly porous surfaces, apply a diluted first coat (1:1 coating to water) as a sealer.' },
      { title: 'Apply first coat', detail: 'Brush or roller at approximately 0.5–1.0 kg/m². Work into corners, joints, and stress cracks. For movement joints, embed sealing tape into the wet first coat.' },
      { title: 'Wait 4–6 hours', detail: 'Minimum drying time between coats at Malaysian ambient temperatures. Allow longer in high humidity or overcast conditions.' },
      { title: 'Apply second coat', detail: 'Apply perpendicular to the first coat to eliminate pinholes and ensure even film build.' },
      { title: 'Optional third coat', detail: 'Strongly recommended on flat roofs or any area with standing water risk.' },
      { title: 'Cure for 7 days', detail: 'Avoid foot traffic for 24–48 hours and protect from rain for the first 24 hours. Full waterproofing performance after 7 days.' },
    ],
    tip: 'Apply between 7–10am to avoid afternoon rain and peak surface temperature. You need a minimum 24-hour dry weather window. Always apply 2 coats minimum — one coat will fail prematurely.',
  },
  {
    type: 'where-to-buy',
    heading: 'Where to Buy Waterproof Coating in Malaysia',
    online: [
      'Shopee Malaysia — widest range, search "waterproof coating roof" or brand name',
      'Lazada Malaysia — good deals on branded products',
      'eWarehouse.my — stocks Sika, Bostik, and Nippon professional ranges',
      'Mr Paint Shop (mrpaintshop.com.my) — specialist paint and coating retailer',
    ],
    physical: [
      'Mr. DIY — QingLong and budget brands, accessible nationwide',
      'Nippon Paint showrooms — full Flex 200 range including Fibre Pro',
      'Jotun dealers — Jotaroof premium range',
      'Hardware stores nationwide — Sika, Bostik, Pentens professional products',
      'HomePro and ACE Hardware — branded waterproofing sections',
    ],
    note: 'For professional quantities (5 pails or more): contact brand distributors directly for trade pricing, typically 10–20% below retail.',
  },
]

const faq = [
  {
    question: 'What is the best waterproof coating for roofs in Malaysia?',
    answer:
      'For most homeowners, Nippon Flex 200 (RM350/20kg) or SikaFill MY / SikaCoat 300 Cool (RM220/20kg) offer the best balance of price, performance, and DIY ease. For premium protection without purchasing separate fibreglass matting, Boscoseal AC2 (RM380/20kg) is the standout — its built-in fibre reinforcement saves both time and material cost.',
  },
  {
    question: 'How much does waterproof coating cost in Malaysia?',
    answer:
      'Budget options start from RM65/pail (Sika Brushcoat WP 25kg). Mid-range products run RM120–250. Premium 20kg pails cost RM350–400. As a rough guide, materials-only cost is RM3–6/m² for budget products and RM12–18/m² for premium. Professional installation (labour + materials) adds RM10–25/m².',
  },
  {
    question: 'Can I apply waterproof coating myself?',
    answer:
      'Yes — most acrylic coatings (Nippon Flex 200, SikaFill MY, QingLong) are designed for DIY brush or roller application with no special equipment needed. Cementitious coatings require more careful mixing and preparation. PU and bituminous coatings are best handled by professionals for large areas.',
  },
  {
    question: 'How long does waterproof coating last?',
    answer:
      'Acrylic coatings typically last 5–8 years under Malaysian conditions. PU coatings last 8–12 years. Cementitious systems last 10–15+ years in protected wet areas. Recoating before the existing coating fails extends service life significantly.',
  },
  {
    question: 'What is the difference between waterproof coating and waterproof paint?',
    answer:
      'Waterproof coatings form a thick membrane barrier (0.5–1.5mm) that physically blocks water ingress. Waterproof paints like Dulux Weathershield are regular paints with water-repellent additives — they bead water off the surface but are not a substitute for true waterproofing. For any active leak, always use a dedicated waterproofing coating.',
  },
  {
    question: 'Is QingLong waterproof coating good?',
    answer:
      'QingLong is a popular budget option on Shopee and Lazada, suitable for small DIY repairs and touch-ups. It is non-toxic, odourless, and easy to apply. For larger areas, critical roofs, or long-term protection, established brands like Sika, Nippon, or Bostik offer better performance and more consistent quality control.',
  },
]

export default function WaterproofCoatingMalaysiaPage() {
  return (
    <GuideTemplate
      slug="waterproof-coating-malaysia"
      hero={{
        title: 'Best Waterproof Coating Malaysia 2026 — Complete Guide & Price Comparison',
        description:
          "Compare every waterproof coating product available in Malaysia — Nippon, Sika, Bostik, Pentens, QingLong. Verified 2026 prices, application guide, and a use-case decision chart so you pick the right product first time.",
        category: 'Product Guide',
        categoryBg: 'bg-teal-500/30',
        categoryText: 'text-teal-100',
      }}
      intro={`Malaysia's tropical climate makes waterproof coatings essential for any building. Without proper protection, water infiltrates concrete, steel corrodes, and mould takes hold within days of a leak.

But not all coatings are equal. The right product depends on your surface type (roof, bathroom, basement), budget, whether you're applying it yourself, and how long you need it to last. Acrylic, polyurethane, cementitious, bituminous, and nano coatings each perform very differently — and choosing the wrong type is a common and costly mistake.

This guide covers every type of waterproof coating available in Malaysia, verified 2026 pricing across the top brands (Nippon, Sika, Bostik, Pentens, QingLong), a step-by-step DIY application guide, and a use-case decision chart so you pick the right product first time.`}
      introStat="Malaysia averages 2,500mm of annual rainfall · 70%+ humidity year-round · Intense UV exposure — one of the most demanding climates for waterproofing in the world."
      sections={sections}
      faq={faq}
      publishDate="January 2026"
      ctaLinks={[
        { label: 'Browse Contractors', href: '/listings', variant: 'gold' },
        { label: 'Bostik vs Sika Guide', href: '/guides/bostik-waterproofing', variant: 'outline' },
      ]}
    />
  )
}
