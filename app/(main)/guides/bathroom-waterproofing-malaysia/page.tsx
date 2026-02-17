import GuideTemplate, {
  type GuideSection,
  type CoatingTypeCard,
} from '@/components/guides/GuideTemplate'

export const metadata = {
  title: 'Bathroom Waterproofing Malaysia 2026 — Methods, Products & Cost Guide',
  description:
    'Complete guide to bathroom waterproofing in Malaysia. Cementitious vs liquid membrane vs no-hacking methods, best products (Sika 109, Mapei Planiseal 388, AquaDefense), 2026 installation costs, DIY step-by-step, and when to hire a CIDB contractor.',
}

const methods: CoatingTypeCard[] = [
  {
    num: 1,
    name: 'Cementitious Waterproofing',
    oneLine:
      'Two-component cement-based mortar mixed and brush-applied to concrete — the most widely used method for bathroom waterproofing across Malaysia.',
    bestFor: 'New bathroom construction and full renovation after hacking tiles — direct access to concrete substrate',
    pros: [
      'Long lifespan — 10–20 years when properly applied',
      'Flexible options (Sika 109, Mapei Planiseal 388) bridge hairline cracks up to 1mm',
      'Strong bond to concrete and masonry substrates',
      'Non-toxic — safe for contact with potable water (pools, water tanks)',
      'Best value per sqm for standard bathroom sizes',
    ],
    cons: [
      'Two-part mixing required — lump-free consistency takes practice',
      'Tiles must be hacked to access concrete substrate in existing bathrooms',
      'Minimum 24–48 hours cure time before tiling can begin',
      'Surface preparation is critical — dirty or dry substrate causes bond failure',
    ],
    popular: 'SikaTop Seal 109, Mapei Planiseal 388, Mapei Mapelastic, SikaTop Seal 107, Pentens T-200',
    priceRange: 'RM5–15/sq ft installed · RM8–22/m² material only',
  },
  {
    num: 2,
    name: 'Liquid-Applied Membrane (Quick Dry)',
    oneLine:
      'One-component, ready-to-use liquid rubber applied by brush or roller — no mixing required and tile-ready in as little as 4 hours.',
    bestFor: 'Speed projects, DIY-friendly applications, and bathrooms needing minimal downtime',
    pros: [
      'No mixing required — apply straight from the pail',
      'Fastest option — Mapelastic AquaDefense is tile-ready in 4 hours',
      'Excellent crack-bridging up to 3.2mm without reinforcement (AquaDefense)',
      'Easy roller application — more forgiving for first-time DIY',
      'Fully seamless with no joints or overlaps',
    ],
    cons: [
      'Higher cost per sqm compared to cementitious waterproofing',
      'Mapelastic AquaDefense is premium-priced — adds cost for large bathrooms',
      'Shorter track record in Malaysia compared to cementitious products',
    ],
    popular: 'Mapelastic AquaDefense (RM165–270), Sika Brushcoat WP (RM65)',
    priceRange: 'RM22–30/m² material only',
  },
  {
    num: 3,
    name: 'No-Hacking Waterproofing',
    oneLine:
      'Waterproofing injection gel or chemical pushed through grout lines into concrete — fixes leaks without removing existing tiles.',
    bestFor: 'Existing bathrooms with identifiable leaks where renovation is not feasible or budget is limited',
    pros: [
      'No tile hacking — preserves existing bathroom finishes',
      'Minimal disruption — completed in 2–4 hours',
      'Significantly cheaper than full renovation for moderate leaks',
      'Suitable for condo situations where inter-floor disputes require quick resolution',
    ],
    cons: [
      'Shorter lifespan — 3–5 year warranty vs 10–20 years for full waterproofing',
      'Cannot fix a membrane that has failed extensively across the whole floor',
      'Not suitable for bathrooms over 15 years old with multiple failure points',
      'Effectiveness depends on the leak source being accessible through grout lines',
    ],
    popular: 'E-Gel injection (RM1,300–3,350/bathroom), PU injection (RM45+/point), epoxy re-grouting',
    priceRange: 'RM1,300–3,350 per bathroom (E-Gel) · RM450+ min. trip (PU injection)',
  },
]

const sections: GuideSection[] = [
  {
    type: 'text',
    heading: 'When Does Your Bathroom Need Waterproofing?',
    content: `**During new construction or full renovation — always**
Any bathroom renovation involving tile hacking exposes and damages the original waterproofing membrane. The correct sequence is: hack → clean → waterproof → screed → tile. This is the best time to waterproof because you have direct access to the concrete substrate for a full, proper application.

**Signs your existing bathroom needs re-waterproofing:**
• Water stains or damp patches on the ceiling of the room or unit below
• Peeling paint on walls or ceiling near the bathroom
• Persistent musty or mouldy smell that won't clear
• Grout lines turning black, crumbling, or cracking
• Tiles becoming loose or producing a hollow sound when tapped
• Water seeping visibly at the wall-floor junction
• Visible mould growth on walls or behind fixtures

**The highest-risk areas in any Malaysian bathroom:**
• Floor-wall junction — the #1 failure point; the 90° angle where waterproofing membranes crack first
• Around the floor drain — constant water flow and a penetration point through the membrane
• Shower zone floor — highest daily water exposure
• Behind toilet and basin pipe penetrations — holes through the membrane if not properly sealed
• Bathroom door threshold — the transition between wet and dry area is frequently missed`,
  },
  {
    type: 'coating-types',
    heading: 'Bathroom Waterproofing Methods Available in Malaysia',
    cards: methods,
  },
  {
    type: 'pricing-table',
    heading: 'Bathroom Waterproofing Cost in Malaysia — 2026 Pricing',
    subtitle: 'Professional installation costs for Klang Valley. Other states are typically 10–20% lower.',
    columns: ['Service', 'Price Range (RM)', 'Notes'],
    rows: [
      { values: ['Cementitious waterproofing — floor and walls', 'RM5–15/sq ft', 'Depends on product grade and wall height'] },
      { values: ['Waterproofing only — standard condo bathroom', 'RM1,500–3,000', 'Material + labor, no tiling'] },
      { values: ['No-hacking E-Gel injection', 'RM1,300–3,350/bathroom', 'Per bathroom, size-dependent, 3–5 yr warranty'], highlight: true },
      { values: ['PU injection (targeted crack repair)', 'RM45+/point · RM450 min. trip', 'Best for specific active crack leaks'] },
      { values: ['Full bathroom renovation with waterproofing', 'RM8,000–15,000', 'Hacking, waterproofing, tiling, fittings, plumbing'] },
      { values: ['Surface preparation (hacking + cleaning)', 'RM500–2,000', 'Before waterproofing, if separate quote'] },
    ],
    note: 'DIY material cost for a standard bathroom (~40 sqm floor + walls): SikaTop Seal 109 — 3 sets RM750–1,050 · Mapei Planiseal 388 — 3 sets RM618 · Mapelastic AquaDefense — 4 pails RM1,080. Labor savings from DIY: RM1,000–2,000 for experienced DIYers.',
  },
  {
    type: 'comparison',
    heading: 'Top Bathroom Waterproofing Products Compared',
    columns: ['Sika 109', 'Mapei Planiseal 388', 'Mapelastic AquaDefense', 'Pentens T-200'],
    rows: [
      {
        feature: 'Type',
        values: ['Flexible cementitious', 'Flexible cementitious', 'Liquid rubber', 'Acrylic'],
      },
      {
        feature: 'Components',
        values: ['2-part — mix required', '2-part — mix required', '1-part — ready to use', '1-part — ready to use'],
      },
      {
        feature: 'Price',
        values: ['RM250–350/36kg', 'RM206/30kg', 'RM270/15kg', 'RM180–220/20kg'],
      },
      {
        feature: 'Cost per m² (2 coats)',
        values: ['RM14–19', 'RM14', 'RM27', 'RM18–22'],
      },
      {
        feature: 'Crack bridging',
        values: ['Up to 1mm', 'Good — similar to 109', '3.2mm — best in class', 'Moderate'],
      },
      {
        feature: 'Tile-ready time',
        values: ['24–48 hours', '24–48 hours', '4 hours — fastest', 'Standard'],
      },
      {
        feature: 'DIY difficulty',
        values: ['Medium — mixing required', 'Medium — mixing required', 'Easy — roller application', 'Easy'],
      },
      {
        feature: 'Best for',
        values: [
          'Most proven brand — contractor standard',
          'Best RM/sqm for flexible waterproofing',
          'Speed or DIY projects',
          'General use and exposed surfaces',
        ],
      },
    ],
  },
  {
    type: 'steps',
    heading: 'DIY Bathroom Waterproofing — Step by Step',
    subtitle: 'For two-part cementitious products (Sika 109, Mapei Planiseal 388). Allow 2–3 days total.',
    steps: [
      {
        title: 'Prepare the surface',
        detail:
          'Ensure the concrete substrate is clean, sound, and free from dust, oil, paint, and any loose material. Repair cracks with patching mortar and allow to dry. Remove any existing failing waterproofing. The surface must be free of contaminants — dust prevents bonding, which causes the waterproofing to peel.',
      },
      {
        title: 'Dampen the surface',
        detail:
          'Wet the concrete until saturated — this is called Saturated Surface Dry (SSD) condition. There should be no standing water or puddles, but the concrete should be visibly damp. A dry surface draws water out of the waterproofing mix too fast, causing premature drying and reduced bond strength.',
      },
      {
        title: 'Mix Part A and Part B',
        detail:
          'Pour Part A (liquid) into a clean bucket first. Slowly add Part B (powder) while mixing with a low-speed drill and paddle mixer (400–500 rpm). Mix until smooth and completely lump-free — about 2 minutes. Rest 2–3 minutes, then remix briefly. Never add extra water — consistency is adjusted with Part A only.',
      },
      {
        title: 'Apply angle fillets at wall-floor junctions',
        detail:
          'Before applying the main coat, treat all 90° corners where floor meets wall. Either: (a) form a 45° mortar fillet using a mix of cement and waterproofing material trowelled into the corner, or (b) embed sealing tape (Sika SealTape F or Mapeband Easy) into the first coat at all junctions. This is the most critical step — skipping it causes 90% of bathroom waterproofing failures.',
      },
      {
        title: 'First coat — apply horizontally at 1.0 kg/m²',
        detail:
          'Apply the first coat by brush, working in one direction (horizontal). Maintain 1.0 kg/m² coverage — do not go thin. Ensure 100% coverage with no pinholes or missed spots. Cover the full bathroom floor, shower walls to 1.8m height, and other walls to minimum 300mm above floor level.',
      },
      {
        title: 'Wait 4–8 hours, then apply second coat vertically',
        detail:
          'Allow the first coat to become touch-dry (4–8 hours at normal Malaysian temperature). Apply the second coat at 1.0 kg/m² perpendicular to the first coat (vertical direction). This cross-hatching pattern eliminates weak spots from brush strokes and ensures consistent coverage across the entire surface.',
      },
      {
        title: 'Water ponding test — mandatory before tiling',
        detail:
          'After 24–48 hours cure, block the floor drain and flood the bathroom floor with approximately 50mm of water. Mark the water level on the wall with tape. Wait 24–48 hours. Check for any water loss at the marked level and inspect the ceiling below for any water stains. Pass = proceed with screed and tiling. Fail = identify the leak point, apply a targeted third coat, and retest. Never tile over without completing this test.',
      },
    ],
    tip: 'The most common DIY mistakes: (1) not waterproofing walls high enough — shower walls must reach 1.8m; (2) skipping the angle fillet at wall-floor junctions; (3) applying on a dry surface; (4) not doing the water ponding test before tiling. Get these four right and the rest follows.',
  },
  {
    type: 'pros-cons',
    heading: 'Hiring a Bathroom Waterproofing Contractor — What to Check',
    pros: [
      'CIDB registration — mandatory for Malaysian contractors (Act 520)',
      'SSM-registered business — confirms legitimate operation',
      'Written warranty — minimum 3–5 years covering both materials and workmanship',
      'Conducts a 24–48 hour water ponding test before tiling — non-negotiable',
      'Names the exact product and brand to be used (not generic "waterproofing cement")',
      'Provides before/during/after photo documentation of the waterproofing work',
      'Itemised quotation separating hacking, waterproofing, screed, and tiling',
    ],
    cons: [
      'No CIDB licence — walk away',
      'Refuses or skips the water ponding test — major red flag',
      'Uses unnamed or generic waterproofing products — quality unknown',
      'Quotes significantly below market (RM3–4/sq ft suggests corners cut on materials)',
      'No written warranty or contract — no recourse if it fails',
      'Rushes the cure time — skipping the waiting period between coats causes failure',
      'Only waterproofs the floor, not the walls — incomplete application',
    ],
  },
  {
    type: 'text',
    heading: 'Strata Property (Condo and Apartment) — What You Need to Know',
    content: `If you live in a condo or apartment, bathroom waterproofing comes with additional considerations beyond the technical work:

• **Renovation permit required** — Get written approval from your Management Corporation (MC) or JMB before any hacking work begins. Starting without approval can result in stop-work orders and fines.

• **Renovation deposit** — Most management bodies hold a deposit of RM500–5,000 during renovation, refundable on inspection after work is completed cleanly.

• **Working hours** — Most condos restrict work to Monday–Saturday, 9am–5pm. No hacking on Sundays or public holidays. Coordinate with management before booking your contractor.

• **Debris disposal** — Hacked tiles and rubble must be disposed of through the designated construction waste chute or collection point, not the regular rubbish room.

• **Neighbour notification** — Professional practice is to inform the unit below that hacking and waterproofing work will be done, and to leave your contact details in case they notice any dripping.

• **Liability for inter-floor leaks** — Under the Strata Management Regulations (SMR) 2015, if your bathroom leaks and damages the ceiling of the unit below, you are liable for the full repair cost. Proper waterproofing prevents this. A failed bathroom membrane in a condo is not just your problem — it becomes a legal and neighbour dispute.

• **PE endorsement** — A small number of condos require Professional Engineer (PE) certification for waterproofing work. Check with your management before engaging a contractor.`,
  },
]

const faq = [
  {
    question: 'How much does bathroom waterproofing cost in Malaysia?',
    answer:
      'Professional installation runs RM5–15 per sq ft for waterproofing only. A full bathroom renovation including waterproofing costs RM8,000–15,000. No-hacking E-Gel injection costs RM1,300–3,350 per bathroom. DIY material cost for a standard bathroom is RM200–1,100 depending on product choice.',
  },
  {
    question: 'Can I waterproof my bathroom without hacking tiles?',
    answer:
      'Yes. No-hacking methods like E-Gel injection (RM1,300–3,350) or PU injection (RM450+ minimum trip) can fix leaks through existing tiles without hacking. However, full hacking and re-waterproofing is recommended for bathrooms over 15 years old or those with multiple failure points, as the original membrane has likely failed extensively.',
  },
  {
    question: 'How long does bathroom waterproofing take?',
    answer:
      'For a new or renovated bathroom: 2–3 days — Day 1: surface prep and first coat, Day 2: second coat, Day 3: water ponding test. Quick-dry products like Mapelastic AquaDefense can be tile-ready in 4 hours. No-hacking injection is completed in 2–4 hours.',
  },
  {
    question: 'What is the best waterproofing product for bathrooms in Malaysia?',
    answer:
      'For standard bathrooms, SikaTop Seal 109 (flexible cementitious, RM250–350/36kg set) and Mapei Planiseal 388 (RM206/30kg set) are the most recommended by Malaysian contractors. Both are flexible, bridge hairline cracks, and have strong local availability. Choose flexible over rigid for any high-rise building.',
  },
  {
    question: 'How long does bathroom waterproofing last?',
    answer:
      'Properly applied cementitious waterproofing lasts 10–20 years. Liquid membranes last 8–15 years. No-hacking injections last 3–5 years. The main factors are application quality, product choice, and whether the waterproofing has been properly protected by screed and tiles.',
  },
  {
    question: 'Should I use rigid or flexible waterproofing for my bathroom?',
    answer:
      'Flexible is recommended for most Malaysian bathrooms — especially in condos and high-rise buildings where some structural movement is expected over time. Rigid waterproofing (like SikaTop Seal 107) is only suitable for very rigid structures such as landed houses with thick concrete slabs and virtually no settlement expected.',
  },
  {
    question: 'How high should bathroom wall waterproofing go?',
    answer:
      'Shower walls: minimum 1.8m height — covering the full splash zone. Non-shower walls: minimum 300mm above floor level. Behind bathtubs: 150mm above the rim. For maximum protection in condos where inter-floor leaks create disputes, some contractors recommend full wall height waterproofing.',
  },
  {
    question: 'Is DIY bathroom waterproofing worth it?',
    answer:
      'For experienced DIYers, yes — you can save RM1,000–2,000 in labor. Single-component products (Mapelastic AquaDefense, Sika Brushcoat WP) are most DIY-friendly. Two-part cementitious products require careful mixing but are manageable. The critical point: the waterproofing must be done correctly. Failed DIY waterproofing that requires hacking and re-doing costs significantly more than hiring a professional from the start.',
  },
  {
    question: 'Do I need to waterproof the entire bathroom wall?',
    answer:
      'No. Standard practice is: 100% floor coverage, shower walls to 1.8m height, all other walls to 300mm above floor. For extra protection in condos — particularly concerned about inter-floor leaks — some contractors recommend full wall height waterproofing to the ceiling. The floor-wall junction (the angle between floor and wall) must always be treated with a fillet or sealing tape.',
  },
  {
    question: 'What is a water ponding test and why is it important?',
    answer:
      'A water ponding test involves blocking the floor drain, flooding the bathroom with 50mm of water, marking the level, and waiting 24–48 hours to check for any water loss or staining on the ceiling below. This is the only reliable way to verify that waterproofing has worked before you tile over it. Never skip this step — tiling over failed waterproofing means hacking everything out again to fix it.',
  },
]

export default function BathroomWaterproofingMalaysiaPage() {
  return (
    <GuideTemplate
      slug="bathroom-waterproofing-malaysia"
      hero={{
        title: 'Bathroom Waterproofing Malaysia: Complete Guide to Methods, Products & Cost (2026)',
        description:
          'Everything you need to know about waterproofing a bathroom in Malaysia — when to do it, cementitious vs liquid membrane vs no-hacking methods, the best products with RM pricing, DIY step-by-step, and what to check when hiring a CIDB contractor.',
        category: 'Waterproofing',
        categoryBg: 'bg-blue-500/30',
        categoryText: 'text-blue-100',
      }}
      introStat="Bathroom waterproofing is the #1 most common waterproofing job in Malaysian homes · A failed bathroom membrane doesn't just affect your unit — it damages the ceiling below and triggers costly disputes"
      intro={`Bathroom waterproofing is not optional in Malaysia. The combination of daily water use, high humidity, and heavy rainfall creates conditions that will find every weakness in a waterproof barrier — and when it fails in a condo or apartment, the leak becomes your neighbour's problem too. A properly waterproofed bathroom prevents mould, structural damage, and inter-floor leakage disputes that can cost tens of thousands of ringgit to resolve.

This guide covers two scenarios: a new bathroom or full renovation (where you have direct access to the concrete substrate), and an existing bathroom that is leaking (where no-hacking injection methods may be the right approach). We cover every available method, the best products with verified 2026 pricing, a complete DIY application walkthrough, and what to insist on when hiring a contractor.`}
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
