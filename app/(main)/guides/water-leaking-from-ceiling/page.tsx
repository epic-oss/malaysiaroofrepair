import GuideTemplate, { type GuideSection } from '@/components/guides/GuideTemplate'

export const metadata = {
  title: "Water Leaking From Ceiling? Here's What to Do (Malaysia Guide 2026)",
  description:
    'Water leaking from your ceiling in Malaysia? Emergency guide with immediate steps, causes (roof, plumbing, AC, waterproofing failure), repair costs, and your rights for condo inter-floor leakage.',
}

const sections: GuideSection[] = [
  {
    type: 'steps',
    heading: 'What to Do RIGHT NOW — Emergency Steps',
    subtitle: 'If water is actively dripping from your ceiling, act in this order:',
    steps: [
      {
        title: 'Turn off electricity in the affected area',
        detail: 'Water reaching electrical wiring is an electrocution risk. Locate your distribution board (DB box) and switch off the breaker for the affected room immediately.',
      },
      {
        title: 'Place buckets or containers under the drip',
        detail: 'Catch water to prevent floor damage and protect anything below the leak.',
      },
      {
        title: 'Move furniture, electronics, and valuables away',
        detail: 'Computers, televisions, and soft furnishings are most at risk. Clear the area immediately.',
      },
      {
        title: 'If the ceiling is bulging or sagging — act fast',
        detail: 'This means water is pooling above the plasterboard. Poke a small hole at the centre of the bulge with a screwdriver and direct the water into a bucket. This controlled release prevents a sudden ceiling collapse.',
      },
      {
        title: 'Take photos and video of everything',
        detail: 'Document the leak, the stain, and any damage. This is essential for insurance claims and disputes with neighbours.',
      },
      {
        title: 'Check the floor above',
        detail: "Is there a bathroom, balcony, or planter box directly above the leak? Look for pooling water, overflowing trays, or dripping pipes — this tells you whether it's a plumbing or waterproofing issue.",
      },
      {
        title: 'Call a specialist',
        detail: 'Call a waterproofing specialist or licensed plumber depending on what you find. If the cause is unclear, a waterproofing specialist can perform a diagnostic inspection.',
      },
    ],
    tip: "Do not ignore a ceiling leak even if it appears minor and stops. In Malaysia's humidity, mould begins growing within 24–48 hours of water saturation. Mould causes respiratory problems and is costly to remediate once established.",
  },
  {
    type: 'text',
    heading: 'Common Causes of Ceiling Leaks in Malaysia',
    content: `**1. Roof Damage — Most common in landed houses**
Cracked or broken roof tiles after storms, a damaged roof ridge, worn-out waterproofing membrane on a flat concrete slab, or clogged gutters causing overflow.
How to identify: The leak worsens noticeably during or immediately after heavy rain. Stains appear on the upper floor ceiling or directly below the roof slab.
Fix: Roof tile replacement, waterproofing membrane reapplication, gutter clearing.

**2. Plumbing Leak — Most common in condos and apartments**
Burst or corroded pipes hidden in walls or ceilings, leaking pipe joints, faulty toilet seals, or shower traps.
How to identify: The leak is consistent regardless of weather. To confirm — turn off all taps and watch your water meter. If it still moves, you have a pipe leak.
Fix: Licensed plumber to locate and repair or replace the pipe.

**3. Bathroom or Toilet Waterproofing Failure — Very common in Malaysia**
Original waterproofing membrane has deteriorated. Extremely common in buildings over 10 years old. The upper floor bathroom leaks through the slab into the ceiling below.
How to identify: Leak originates directly below a bathroom or toilet. May have a slight musty smell. White mineral deposits (efflorescence) on concrete are a strong indicator.
Diagnostic test: Block the waste pipe of the suspect bathroom, fill the floor with water to 50mm depth, monitor the ceiling below for 24 hours.
Fix: Re-waterproof the bathroom floor — this typically requires hacking the tiles.

**4. Air-Conditioning Condensation**
A clogged AC drainage pipe causes condensate to back up and overflow. Poorly insulated copper pipes also produce condensation drips.
How to identify: Dripping appears near or directly below your indoor AC unit. The flow is slow and consistent rather than heavy.
Fix: Service the AC unit, clear the drainage pipe with wire or compressed air, insulate copper pipes.

**5. Balcony or Car Porch Slab Leaking**
Failed waterproofing on an external slab, poor drainage slope causing water to pool, or hairline cracks in the concrete.
How to identify: Leak appears below the balcony or car porch area, worsens after rain.
Fix: PU injection into cracks, re-waterproofing the slab, correcting the floor slope with re-screeding.`,
  },
  {
    type: 'text',
    heading: 'How to Identify the Source of Your Ceiling Leak',
    content: `Use this diagnostic guide to narrow down the cause:

Leak only during or after rain → Roof damage or external waterproofing failure
Consistent fast drip regardless of rain → Burst or leaking water pipe
Consistent drip with foul smell → Waste or sewage pipe leak
Consistent drip, no smell, white deposits on concrete → Waterproofing membrane failure
Drip near AC unit location → Clogged AC drain or condensation buildup
Stain on ceiling but no active drip → Intermittent leak — still needs professional inspection
Ceiling visibly bulging or sagging → Water pooling above — act immediately, risk of collapse

**For condos and apartments — inter-floor leakage:**
Under Malaysia's Strata Management Regulations (SMR) 2015, the owner of the upper floor unit is presumed responsible for leaks caused by their unit. The building management body (JMB or MC) is required to inspect within 7 days of a formal complaint. If the upper floor owner refuses to cooperate, you can file a complaint with the Strata Management Tribunal. Non-cooperation fines can reach RM50,000. Keep all evidence (photos, videos, written complaints) throughout this process.`,
  },
  {
    type: 'pricing-table',
    heading: 'Repair Solutions & Estimated Costs',
    subtitle: 'Verified January 2026. Costs in Klang Valley (KL/Selangor) are typically 20–30% higher than other states.',
    columns: ['Repair Method', 'Estimated Cost (RM)', 'Typical Duration'],
    rows: [
      { values: ['PU Injection — concrete cracks, slab leaks', 'RM200–500 per point', '1–3 days'] },
      { values: ['Waterproofing membrane — bathroom or roof slab', 'RM1,500–8,000', '3–7 days'], highlight: true },
      { values: ['Pipe repair or replacement — plumbing leaks', 'RM200–2,000', 'Same day to 2 days'] },
      { values: ['Roof tile repair — damaged tiles', 'RM300–1,500', '1–2 days'] },
      { values: ['Nano-coating treatment — hairline cracks', 'RM800–3,000', '1 day'] },
      { values: ['Full re-waterproofing — major failure', 'RM3,000–15,000', '5–14 days'], highlight: true },
      { values: ['Plaster ceiling repair / replacement', 'RM150–2,000', '1–2 days'] },
      { values: ['AC service and drain clearing', 'RM80–200', 'Same day'] },
    ],
    note: 'DIY fix for minor issues only: clear AC drain (RM0), apply sealant to small accessible cracks (RM10–30). For plumbing, roof, or waterproofing failures, professional repair is mandatory.',
  },
  {
    type: 'text',
    heading: 'How to Prevent Ceiling Leaks in Malaysia',
    content: `Malaysia's monsoon seasons (October–February on the Peninsula west coast, November–March on the east coast) put roofs and waterproofing under maximum stress. Prepare before the rains arrive:

• **Inspect your roof before monsoon season.** Check for cracked, slipped, or missing tiles, damaged ridge caps, and rust on zinc roofs. Clear all gutters and downpipes.

• **Service your AC units every 3–6 months.** A professional service includes clearing the drainage pipe — the most common cause of AC-related ceiling drips.

• **Check bathroom grout and waterproofing.** If grout lines are cracking, discoloured, or missing, the waterproof layer below may already be compromised. Get it inspected before it becomes a leak.

• **Clean gutters at least twice a year.** Leaf debris causes overflow that saturates wall junctions and window frames.

• **Consider smart leak detectors.** Affordable sensors (RM80–200) placed near AC units, under sinks, and in utility areas will alert you on your phone before damage spreads.

• **Schedule a building inspection for condos.** Under the Strata Management Act, periodic building inspections are required. Ensure your JMB or MC is conducting these.`,
  },
]

const faq = [
  {
    question: 'Is water leaking from the ceiling dangerous?',
    answer:
      "Yes — in several ways. Water reaching electrical wiring in the ceiling void creates an electrocution risk (always turn off the circuit breaker first). In Malaysia's humidity, mould begins growing within 24–48 hours of saturation, causing respiratory problems. Prolonged leaks cause structural damage to concrete, steel reinforcement, and timber. Worst case: water pooling above a plasterboard ceiling causes it to collapse suddenly.",
  },
  {
    question: 'Can I fix a ceiling leak myself?',
    answer:
      'Only for very minor issues, such as clearing a blocked AC drain. For plumbing leaks, roof damage, or waterproofing failure, always hire a licensed professional. Incorrect DIY repairs can make the problem significantly worse, lead to higher repair costs, and may void your home insurance claim if an insurer determines the damage resulted from improper repair attempts.',
  },
  {
    question: 'Who is responsible for ceiling leak in a condo in Malaysia?',
    answer:
      "Under the Strata Management Regulations (SMR) 2015, the owner of the upper floor unit is presumed responsible for any leak originating from their unit. Your building's Joint Management Body (JMB) or Management Corporation (MC) must inspect within 7 days of a formal complaint. If the neighbour refuses to cooperate, file with the Strata Management Tribunal — penalties for non-compliance can reach RM50,000.",
  },
  {
    question: 'How much does it cost to fix a ceiling leak in Malaysia?',
    answer:
      'Minor plaster ceiling patching starts from RM150. Plumbing pipe repair runs RM200–2,000 depending on accessibility. Bathroom re-waterproofing costs RM2,000–6,000 (more if tile hacking required). Flat roof re-waterproofing ranges from RM3,000–10,000. Full worst-case scenarios (major waterproofing failure + ceiling replacement) can reach RM15,000+. Always get 3 quotes — prices vary significantly by contractor and state.',
  },
  {
    question: 'Should I claim insurance for a ceiling leak?',
    answer:
      'It depends on the cause. Most home insurance policies cover sudden and accidental water damage (e.g., burst pipe). Gradual deterioration, wear-and-tear, or poor maintenance are typically excluded. Check your policy wording carefully. Document everything with photos and videos before any repairs begin — insurers require evidence of the original damage.',
  },
  {
    question: 'How long does a ceiling take to dry after a leak?',
    answer:
      'Typically 2–4 weeks depending on how much water penetrated and the material. Use fans and a dehumidifier to accelerate drying. Do not repaint or skim the ceiling until it is completely dry — painting over damp plaster traps moisture, causes the new paint to peel, and promotes hidden mould growth.',
  },
]

export default function WaterLeakingFromCeilingPage() {
  return (
    <GuideTemplate
      slug="water-leaking-from-ceiling"
      hero={{
        title: "Water Leaking From Ceiling? Here's What to Do (Malaysia Guide 2026)",
        description:
          "Emergency guide for ceiling leaks in Malaysia — immediate action steps, all common causes explained, repair costs, and your legal rights if you're in a condo.",
        category: 'Emergency Repair',
        categoryBg: 'bg-red-500/30',
        categoryText: 'text-red-100',
      }}
      intro="Seeing water drip from your ceiling is alarming — and in Malaysia's tropical climate, it needs to be treated as an emergency. Whether the leak is coming through during heavy rain, appearing near your air-conditioner, or seeping down from the bathroom above, the first 30 minutes of your response matter. This guide tells you exactly what to do right now, walks through every common cause, explains your legal rights if you're in a condo, and gives you verified repair costs so you know what to expect."
      sections={sections}
      faq={faq}
      publishDate="January 2026"
      ctaLinks={[
        { label: 'Find a Contractor Now', href: '/listings', variant: 'gold' },
        { label: 'Waterproofing Guide', href: '/guides/waterproofing-malaysia', variant: 'outline' },
      ]}
    />
  )
}
