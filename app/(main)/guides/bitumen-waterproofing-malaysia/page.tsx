import GuideTemplate, {
  type GuideSection,
  type CoatingTypeCard,
} from '@/components/guides/GuideTemplate'

export const metadata = {
  title: 'Bitumen Waterproofing Malaysia — Torch-On Membrane Complete Guide 2026',
  description:
    'Complete guide to bitumen waterproofing in Malaysia. Torch-on membrane types (APP vs SBS), popular brands (Obaproof, Sika, Bostik, Fosroc), professional installation costs (RM8–15/sq ft), step-by-step process, and when to choose bitumen over alternatives.',
}

const bitumenTypes: CoatingTypeCard[] = [
  {
    num: 1,
    name: 'Torch-On Membrane (Membran Bakar)',
    oneLine:
      'Pre-fabricated bitumen sheet rolls heated with a gas torch and bonded directly to concrete — the industry standard for flat roof waterproofing in Malaysia.',
    bestFor: 'Flat concrete roofs, car porches, commercial buildings, and any area over 500 sq ft',
    pros: [
      '15–20+ year lifespan — significantly longer than liquid coatings',
      'Fully bonded — creates a seamless, impermeable barrier with no joints',
      'APP modified: excellent heat and UV resistance for Malaysia\'s 40°C+ roof surface temps',
      'SBS modified: superior flexibility for areas with structural movement',
      '4mm mineral finish can be left exposed and is trafficable',
    ],
    cons: [
      'Requires professional installation — open flame is a fire risk',
      'Not DIY-friendly — improper application causes air pockets and early failure',
      'Heavy rolls (30–45 kg each) require multiple workers on site',
      'Fumes and odour during torching — area must be ventilated',
    ],
    popular: 'Obaproof TO-1000, Sika SikaShield P27/E65, Bostik Boscoseal Torch On, Fosroc Proofex Torchseal, VProof',
    priceRange: 'RM8–15/sq ft installed',
  },
  {
    num: 2,
    name: 'Self-Adhesive Bitumen Membrane',
    oneLine:
      'Peel-and-stick application — no torch or open flame needed, making it safer and accessible without specialist equipment.',
    bestFor: 'Roof underlayment, secondary waterproofing layer, rain noise dampening on metal roofs, patch repairs',
    pros: [
      'No fire risk — no torch or LPG gas required',
      'DIY-accessible for minor repairs and underlayment work',
      'Good acoustic dampening — reduces rain drumming noise on zinc/metal roofs',
      'Quick and clean to apply compared to torch-on',
    ],
    cons: [
      'Lower bond strength than torch-on membrane — not for primary flat roof waterproofing',
      'Shorter lifespan than torch-on',
      'Requires a clean, dry, dust-free surface for adhesion',
      'Edges may lift in Malaysia\'s heat if not properly pressed and sealed',
    ],
    popular: 'Roofseal Bitufelt, various local contractor-supply brands',
    priceRange: 'RM4–8/sq ft installed',
  },
  {
    num: 3,
    name: 'Liquid Bitumen Coatings',
    oneLine:
      'Brush or roller-applied bitumen emulsion — seamless coverage for foundations, retaining walls, and below-grade structures where membrane installation is impractical.',
    bestFor: 'Foundations, retaining walls, basements, below-grade damp-proofing, metal corrosion protection',
    pros: [
      'Fully seamless — no joints or overlapping sheets',
      'Easy to apply on irregular shapes, penetrations, and pipe surrounds',
      'Water-based options available with lower VOC emissions',
      'Lower cost for small or complex areas where membrane cutting is difficult',
    ],
    cons: [
      'Not suitable for exposed roofs without UV protection (screed or tiles required)',
      'Shorter lifespan than torch-on membrane',
      'Multiple coats required to achieve adequate waterproofing thickness',
      'Less durable under foot traffic and physical abrasion',
    ],
    popular: 'Sika Igolflex R, Fosroc Nitoproof 10/30, Atlaskote 201, Atlaskote PU 118, SOLIDFlex LM',
    priceRange: 'RM6–12/sq ft (foundations and below-grade)',
  },
]

const sections: GuideSection[] = [
  {
    type: 'coating-types',
    heading: 'Types of Bitumen Waterproofing',
    cards: bitumenTypes,
  },
  {
    type: 'products',
    heading: 'Leading Torch-On Membrane Brands in Malaysia',
    products: [
      {
        name: 'Obaproof TO-1000',
        badge: 'Local Favourite',
        badgeColor: 'bg-green-600',
        type: 'APP & SBS Modified Bitumen | 3mm & 4mm',
        bestFor: 'Residential and commercial flat roofs across Malaysia',
        price: 'RM150–350 per roll (10 sqm)',
        features: [
          'Made in Shah Alam, Selangor — local manufacturer with wide availability',
          'Available in mineral finish (exposed) and sand finish (concealed under screed)',
          'Both APP (plastomeric) and SBS (elastomeric) variants',
          'Widely stocked by local waterproofing contractors',
        ],
      },
      {
        name: 'Sika SikaShield P27 / E65',
        badge: 'Premium International',
        badgeColor: 'bg-blue-600',
        type: 'APP & SBS Modified Bitumen | 3mm & 4mm',
        bestFor: 'Premium projects requiring international brand warranty and certified applicators',
        price: 'RM250–400 per roll (10 sqm)',
        features: [
          'Swiss manufacturer — global quality standards consistently applied',
          'P27 (APP/plastomeric): excellent heat resistance for Malaysia\'s climate',
          'E65 (SBS/elastomeric): superior flexibility and fatigue resistance',
          'Sika-certified applicator network across Malaysia',
        ],
      },
      {
        name: 'Fosroc Proofex Torchseal',
        badge: 'Heavy-Duty',
        badgeColor: 'bg-gray-700',
        type: 'APP & SBS Modified Bitumen | 3mm–5mm',
        bestFor: 'Commercial, industrial, basement, and bridge deck applications',
        price: 'RM200–450 per roll (varies by grade)',
        features: [
          'Available in 3S/4S/5S (SBS) and 3P/4P (APP) grades',
          'Heavy-duty 5mm option for extreme conditions and bridge decks',
          'Chemical resistant — suitable for industrial and aggressive environments',
          'UK heritage brand (Saint-Gobain group)',
        ],
      },
      {
        name: 'Bostik Boscoseal Torch On',
        badge: null,
        type: 'Plastoelastomeric Modified Bitumen | 3mm & 4mm',
        bestFor: 'Commercial roofs, car parks, and underground structures',
        price: 'RM200–380 per roll (10 sqm)',
        features: [
          'French manufacturer (Bostik/Arkema Group)',
          'Polyester reinforcement for improved tear and puncture resistance',
          'Suitable for both exposed and concealed applications',
          'Available with mineral slate finish for exposed roofs',
        ],
      },
      {
        name: 'VProof (Vseal Engineering)',
        badge: 'Local Brand',
        badgeColor: 'bg-green-600',
        type: 'Plastomeric Modified Bitumen | 3mm & 4mm',
        bestFor: 'Residential flat roofs and car porches — competitive local pricing',
        price: 'RM150–280 per roll (10 sqm)',
        features: [
          'Malaysian manufacturer — competitive pricing and local availability',
          'Coloured slate finish options available for aesthetic preferences',
          'Good availability through local waterproofing contractors',
          'Certified to relevant Malaysian and international standards',
        ],
      },
    ],
  },
  {
    type: 'pricing-table',
    heading: 'Professional Installation Costs — 2026 Pricing',
    subtitle: 'Prices for Klang Valley (KL/Selangor). Other states are typically 10–20% lower.',
    columns: ['Service', 'Price Range (RM)', 'Notes'],
    rows: [
      { values: ['Torch-on membrane — 3mm', 'RM8–12 per sq ft', 'Concealed systems covered by screed or tiles'] },
      { values: ['Torch-on membrane — 4mm', 'RM10–15 per sq ft', 'Recommended — exposed and heavy-duty use'], highlight: true },
      { values: ['Car porch (300–500 sq ft)', 'RM3,000–7,500', 'Most common residential job'] },
      { values: ['Flat roof (1,000 sq ft)', 'RM8,000–15,000', 'Full system including primer and upstands'], highlight: true },
      { values: ['Minimum contractor trip charge', 'RM1,500', 'Most contractors apply a minimum regardless of size'] },
      { values: ['Liquid bitumen coating (installed)', 'RM6–12 per sq ft', 'Below-grade, foundations, retaining walls'] },
    ],
    note: 'Material-only reference (DIY): 3mm membrane roll RM150–250, 4mm roll RM200–350, bitumen primer RM180–250 per 20kg drum. Important: torch-on application requires a trained professional — DIY is not recommended due to fire risk and bond quality requirements.',
  },
  {
    type: 'comparison',
    heading: 'APP vs SBS Modified Bitumen — Which Type Is Right for Malaysia?',
    columns: ['APP Modified (Plastomeric)', 'SBS Modified (Elastomeric)'],
    rows: [
      { feature: 'Full name', values: ['Atactic Polypropylene', 'Styrene-Butadiene-Styrene'] },
      { feature: 'Heat resistance', values: ['Excellent — high softening point for tropical roofs', 'Good — lower softening point'] },
      { feature: 'UV resistance', values: ['Better — suitable for exposed applications', 'Moderate — prefer UV protection'] },
      { feature: 'Flexibility & elongation', values: ['Good', 'Superior — stretches without cracking under movement'] },
      { feature: 'Best application in Malaysia', values: ['✅ Exposed flat roofs, car porches', 'Below-grade, basement, concealed under screed'] },
      { feature: 'Lifespan', values: ['15–20+ years', '15–20+ years'] },
      { feature: 'Recommendation', values: ['Primary choice for most Malaysian residential roofs', 'Preferred for underground and high-movement areas'] },
    ],
  },
  {
    type: 'comparison',
    heading: 'Bitumen vs Other Waterproofing Methods — Cost & Lifespan',
    columns: ['Cost/sq ft (installed)', 'Lifespan', 'Best For'],
    rows: [
      { feature: 'Bitumen torch-on membrane', values: ['RM8–15', '15–20+ years', 'Flat roofs, car porches, commercial'] },
      { feature: 'Elastomeric / acrylic coating', values: ['RM6–10', '5–10 years', 'Re-coating, pitched roofs, residential'] },
      { feature: 'PU liquid membrane', values: ['RM10–18', '10–15 years', 'Balconies, complex shapes, high-flexibility areas'] },
      { feature: 'Cementitious waterproofing', values: ['RM5–8', '5–10 years', 'Bathrooms, wet areas, water tanks'] },
      { feature: 'PU injection (crack repair)', values: ['RM45+/injection point', '1–3 years', 'Emergency crack sealing only'] },
    ],
  },
  {
    type: 'steps',
    heading: 'Professional Torch-On Membrane Application — 6 Steps',
    subtitle: 'The installation process matters as much as the product. A well-installed 3mm membrane outperforms a poorly installed 4mm every time.',
    steps: [
      {
        title: 'Surface preparation — the most critical step',
        detail:
          'Remove all existing waterproofing (old membrane, coatings, damaged screed). Repair defects: fill honeycomb, cracks, and uneven surfaces with cement grout or patching mortar. Clean thoroughly — remove dust, cement ash, and debris. The surface must be sound, clean, dry, and smooth. Any contamination here causes adhesion failure.',
      },
      {
        title: 'Apply bitumen primer',
        detail:
          'Apply a solvent-based or water-based bitumen primer at ~0.25 kg/m². Allow to dry completely — 12–24 hours depending on weather conditions. The primer penetrates the concrete and significantly improves adhesion between the slab and the membrane.',
      },
      {
        title: 'Plan the membrane layout',
        detail:
          'Start from the lowest point (drains and scuppers) and work upward. Install gutters, scupper drains, and penetration flashings first. Plan sheet positions to maintain minimum 100mm overlaps between sheets. Cut sheets to size, leaving extra material for wall upstands.',
      },
      {
        title: 'Torch and roll the membrane onto the surface',
        detail:
          'Use an LPG torch gun to heat the underside of the membrane roll until the burn-off film melts and the bitumen becomes liquid and flows. Roll the membrane onto the primed surface while heating. Press firmly to eliminate all air pockets — pay special attention to overlaps, edges, and corners. Fire safety: keep a fire extinguisher on site, protect nearby flammable materials.',
      },
      {
        title: 'Detail work — edges, upstands, and penetrations',
        detail:
          'Seal all edges, overlaps, pipe penetrations, and drain surrounds with additional membrane patches. Apply extra patches at corners and stress concentration points. Wall upstands must rise minimum 150mm from the finished floor level. Fully seal around every pipe and drain penetration.',
      },
      {
        title: 'Water ponding test before covering',
        detail:
          'Flood the waterproofed surface with water to a minimum 50mm depth. Leave for 24–48 hours. Inspect the soffit (underside of slab) for any watermarks or active dripping. If it passes — proceed with protective screed, tiles, or leave exposed if using mineral finish. If it fails — identify the leak point and apply a repair patch.',
      },
    ],
    tip: 'Always specify 4mm membrane for Malaysian conditions. The cost difference between 3mm and 4mm is small relative to the total project cost, but the additional thickness provides significantly better durability against UV radiation, thermal cycling, and the mechanical stress of foot traffic.',
  },
  {
    type: 'pros-cons',
    heading: 'Advantages & Disadvantages of Bitumen Waterproofing',
    pros: [
      'Proven track record — decades of use in Malaysia\'s tropical climate',
      'Excellent waterproofing — creates a fully impermeable, bonded barrier',
      'Long lifespan — 15–20+ years when properly installed',
      'Strong adhesion — bonds to concrete, masonry, and metal surfaces',
      'Chemical resistant — withstands sulfates, chlorides, mild acids in soil',
      'Versatile — roofs, basements, foundations, car parks, bridges',
      'Cost-effective for large areas — economical per square foot at scale',
      'Multi-layer option — can apply 2+ layers for critical applications',
      'Widely available — multiple brands and certified contractors in Malaysia',
    ],
    cons: [
      'Requires professional installation — open flame torch creates fire risk for DIY',
      'UV degradation — unmodified bitumen needs mineral finish or protective screed',
      'Black colour absorbs heat, increasing building temperature (mineral finish helps)',
      'Not eco-friendly — petroleum-derived product with VOC emissions during torching',
      'Odour during installation — fumes require site ventilation',
      'Heavy rolls (30–45 kg) require multiple workers',
      'Limited colour options — primarily black/dark grey',
      'Less suitable for complex irregular shapes compared to liquid membranes',
    ],
  },
  {
    type: 'text',
    heading: 'When to Use Bitumen Waterproofing (Decision Guide)',
    content: `**Choose bitumen torch-on membrane when:**
• You have a flat concrete roof on a landed house or commercial building
• Your car porch or RC slab needs long-term waterproofing
• The area is large (500+ sq ft) where cost per sq ft matters
• You need a 15+ year solution — not a 5-year fix
• The structure is below-grade (basement, retaining wall, foundation)
• A professional contractor is doing the work

**Consider alternatives when:**
• Your roof is pitched or sloped — acrylic or PU coating is easier and more cost-effective
• You are waterproofing a bathroom or wet area — cementitious coating (Sika 109, Pentens T-200) is the right tool
• It is a DIY project — use acrylic or self-adhesive membrane instead of torch-on
• The surface has complex shapes with many pipe penetrations — PU liquid membrane bonds seamlessly
• The budget is limited for a small area — acrylic coating is cheaper per sqm for small residential jobs
• You need a decorative coloured finish — acrylic coatings come in multiple colours`,
  },
]

const faq = [
  {
    question: 'Is torch-on membrane waterproofing safe for residential houses in Malaysia?',
    answer:
      'Yes, torch-on membrane is safe and widely used for residential flat roofs, car porches, and balconies across Malaysia. Installation must be performed by trained professionals due to the open flame involved. The finished membrane itself is completely safe and has no ongoing hazards.',
  },
  {
    question: 'How long does torch-on membrane last in Malaysia?',
    answer:
      'With professional installation, torch-on membrane typically lasts 15–20 years in Malaysia. APP modified membranes with mineral finish can last even longer. The key factors are installation quality, membrane thickness (4mm recommended for Malaysian climate), and UV protection if using sand finish.',
  },
  {
    question: 'Can I apply torch-on membrane myself?',
    answer:
      'Not recommended. Torch-on requires a specialist LPG torch gun, the skill to properly heat and bond the membrane without creating air pockets, and carries significant fire risk. Improper application leads to adhesion failure, air blistering, and premature waterproofing breakdown. For DIY projects, use self-adhesive bitumen membrane or acrylic coatings instead.',
  },
  {
    question: 'What is the difference between APP and SBS modified bitumen?',
    answer:
      'APP (Atactic Polypropylene, plastomeric) has better heat resistance and UV resistance — ideal for Malaysia\'s hot, exposed flat roofs. SBS (Styrene-Butadiene-Styrene, elastomeric) has better flexibility and elongation, making it preferred for below-grade applications and areas with structural movement. For most Malaysian residential exposed roofs, APP modified membrane is the standard choice.',
  },
  {
    question: 'How much does torch-on membrane waterproofing cost in Malaysia?',
    answer:
      'Professional installation ranges from RM8–15 per square foot depending on membrane thickness and project complexity. Most contractors have a minimum charge of RM1,500 per trip. A typical car porch (300–500 sq ft) costs RM3,000–7,500, while a full flat roof (1,000 sq ft) runs RM8,000–15,000 including primer and upstands.',
  },
  {
    question: 'Should I choose 3mm or 4mm membrane?',
    answer:
      'Choose 4mm for Malaysian conditions. The extra thickness provides meaningfully better durability against intense UV radiation, thermal cycling (hot days, heavy rain cooling), and mechanical stress from foot traffic. 3mm is acceptable as a base layer in a two-layer system, but for single-layer exposed applications, 4mm is the industry standard.',
  },
  {
    question: 'What brands of torch-on membrane are available in Malaysia?',
    answer:
      'Major brands include Obaproof (popular local brand from Shah Alam), Sika (SikaShield range), Bostik (Boscoseal Torch On), Fosroc (Proofex Torchseal), VProof (Vseal Engineering), and SHIELDO. Sika and Fosroc are premium international brands; Obaproof and VProof offer strong value as local manufacturers.',
  },
  {
    question: 'Do I need to remove old waterproofing before applying torch-on membrane?',
    answer:
      'Yes. Old waterproofing (existing membrane, acrylic or PU coatings) should be removed to ensure the new membrane bonds properly to the concrete substrate. Applying over a failing membrane may cause delamination and early failure. Your contractor should inspect and prepare the substrate before any new membrane is applied.',
  },
  {
    question: 'How do I maintain bitumen waterproofing after installation?',
    answer:
      'Inspect annually — ideally before each monsoon season. Check for blistering, cracking at overlaps, lifting edges, and damage from foot traffic. Clear all debris and ensure drains and scuppers are unblocked. Minor damage can be patched with additional membrane or liquid bitumen. Major deterioration after 15–20 years typically warrants full re-waterproofing.',
  },
  {
    question: 'Is bitumen waterproofing environmentally friendly?',
    answer:
      'Traditional bitumen is petroleum-derived and not the most eco-friendly option. Water-based bitumen emulsions (like Sika Igolflex R) have lower VOC content than solvent-based products. For more environmentally conscious projects, consider acrylic or cementitious waterproofing as alternatives.',
  },
]

export default function BitumenWaterproofingMalaysiaPage() {
  return (
    <GuideTemplate
      slug="bitumen-waterproofing-malaysia"
      hero={{
        title: 'Bitumen Waterproofing Malaysia — Complete Guide to Torch-On Membrane 2026',
        description:
          'Everything you need to know about bitumen waterproofing in Malaysia: how torch-on membrane works, APP vs SBS types, leading brands, professional installation costs (RM8–15/sq ft), the 6-step application process, and when to use bitumen over liquid coatings.',
        category: 'Waterproofing Methods',
        categoryBg: 'bg-stone-600/30',
        categoryText: 'text-stone-100',
      }}
      introStat="Bitumen torch-on membrane is Malaysia's #1 waterproofing method for flat concrete roofs · 15–20+ year lifespan · Trusted for millions of sq ft of commercial, condo, and landed home roofs nationwide"
      intro={`Bitumen — also called asphalt — is a sticky, black, petroleum-derived material that has been used in construction waterproofing for over a century. In Malaysia, bitumen waterproofing is the number-one choice for flat concrete roofs on condos, commercial buildings, and landed homes with car porches. When applied correctly, a torch-on bitumen membrane will outlast every liquid coating on the market.

There are two main forms: sheet membranes (torch-on) and liquid-applied coatings. Torch-on membrane — known locally as membran bakar — is the professional standard for heavy-duty waterproofing. Pre-fabricated rolls are heated with a gas torch and bonded directly to concrete, creating a fully-bonded, seamless waterproof barrier. Liquid bitumen coatings are brush-applied and suited to foundations, retaining walls, and below-grade structures where membrane installation is impractical.

Modern bitumen membranes are polymer-modified — either APP (Atactic Polypropylene) or SBS (Styrene-Butadiene-Styrene) — which delivers significantly better performance than traditional oxidized bitumen. APP modified membranes handle Malaysia's intense heat (roof surface temperatures regularly exceed 40°C) and UV exposure better, making them the standard choice for exposed flat roofs. SBS modified membranes offer superior flexibility, preferred for below-grade and concealed applications where structural movement may occur.`}
      sections={sections}
      faq={faq}
      publishDate="January 2026"
      ctaLinks={[
        { label: 'Find a Waterproofing Contractor', href: '/listings', variant: 'gold' },
        { label: 'Waterproofing Guide', href: '/guides/waterproofing-malaysia', variant: 'outline' },
      ]}
    />
  )
}
