import { siteConfig } from '../config'

export interface GuidePage {
  slug: string
  title: string
  description: string
  h1: string
  targetKeyword: string
  monthlySearchVolume: number
  content: {
    intro: string
    sections: Array<{
      heading: string
      content: string
    }>
    faq: Array<{
      question: string
      answer: string
    }>
  }
}

export const guidePages: GuidePage[] = [
  {
    slug: 'waterproofing-malaysia',
    title: `Waterproofing Malaysia ${siteConfig.currentYear} - Complete Guide`,
    description:
      'Complete guide to waterproofing in Malaysia. Types, costs, best products (Sika, Pentens, Bostik), and trusted contractors.',
    h1: `Waterproofing Malaysia ${siteConfig.currentYear} - Complete Guide`,
    targetKeyword: 'waterproofing',
    monthlySearchVolume: 5400,
    content: {
      intro:
        "Waterproofing is essential in Malaysia's tropical climate with high rainfall and humidity. This comprehensive guide covers everything you need to know about waterproofing your home or building, including types, costs, and how to choose the right contractor.",
      sections: [
        {
          heading: 'Why Waterproofing is Critical in Malaysia',
          content:
            "Malaysia receives an average of 2,500mm of rainfall annually, making waterproofing crucial for protecting buildings. High humidity (70-90%) and frequent heavy rain can cause water damage, structural issues, mold growth, and reduced property value. Proper waterproofing prevents these problems and extends your building's lifespan.",
        },
        {
          heading: 'Types of Waterproofing',
          content:
            'Membrane Waterproofing: Uses waterproof sheets applied to surfaces. Ideal for roofs, balconies, and basements. Lasts 10-20 years.\n\nCoating Waterproofing: Liquid coatings applied with brush or roller. Good for smaller areas and touch-ups. Popular brands include Sika, Pentens T200, and Bostik.\n\nCementitious Waterproofing: Cement-based coating for wet areas like bathrooms. Easy to apply but less flexible.\n\nCrystalline Waterproofing: Penetrates concrete and forms crystals that block water. Permanent solution for concrete structures.\n\nInjection Waterproofing: Used for existing cracks and leaks. Epoxy or polyurethane injected into cracks.',
        },
        {
          heading: 'Popular Waterproofing Brands in Malaysia',
          content:
            'Sika Waterproofing: Leading global brand. Products include SikaTop Seal 107, Sikalastic, and Sikagard. Known for quality and durability.\n\nPentens T200: Popular Malaysian brand. Affordable and effective for roof and wall waterproofing.\n\nBostik Waterproofing: Trusted brand offering various products for different applications.\n\nMapei: Italian brand with comprehensive waterproofing systems.\n\nDulux Weathershield: Good for external walls and facades.',
        },
        {
          heading: 'Waterproofing Cost in Malaysia',
          content:
            'Coating waterproofing: RM10-25 per sq ft\nMembrane waterproofing: RM15-35 per sq ft\nInjection waterproofing: RM50-150 per injection point\nCrystalline waterproofing: RM20-40 per sq ft\n\nFactors affecting cost: Area size, surface condition, type of waterproofing, accessibility, and brand of materials used. Always get multiple quotes from licensed contractors.',
        },
        {
          heading: 'How to Choose a Waterproofing Contractor',
          content:
            'Check for proper licensing and insurance. Look for experience with your specific type of project. Ask for references and view previous work. Ensure they use quality materials from reputable brands. Get detailed written quotes. Verify warranty terms (typically 1-5 years). Compare at least 3 quotes before deciding.',
        },
        {
          heading: 'DIY vs Professional Waterproofing',
          content:
            'Small areas like bathrooms can be DIY projects using products like Pentens T200 or Sika. However, for roofs, large areas, or structural issues, always hire professionals. Poor waterproofing can lead to expensive damage. Professional work includes proper surface preparation, correct application, and warranty coverage.',
        },
      ],
      faq: [
        {
          question: 'How long does waterproofing last in Malaysia?',
          answer:
            'Quality waterproofing typically lasts 5-15 years depending on the type and application. Membrane waterproofing lasts longer (10-20 years) than coatings (5-10 years). Regular maintenance can extend lifespan.',
        },
        {
          question: 'What is the best waterproofing for Malaysian climate?',
          answer:
            'Membrane waterproofing or crystalline systems work best for Malaysian climate as they withstand heavy rain and humidity. For budget-conscious projects, quality coatings like Sika or Pentens T200 are effective.',
        },
        {
          question: 'Can I waterproof during rainy season?',
          answer:
            "It's best to waterproof during dry season. Most waterproofing products need 24-48 hours drying time. Rain during application can affect bonding and effectiveness. Plan waterproofing during dry months (February-March or June-July).",
        },
      ],
    },
  },
  {
    slug: 'sika-waterproofing-malaysia',
    title: `Sika Waterproofing Malaysia ${siteConfig.currentYear} - Products & Prices`,
    description:
      'Complete guide to Sika waterproofing products in Malaysia. SikaTop, Sikalastic, Sikagard pricing and where to buy.',
    h1: `Sika Waterproofing Malaysia - Products, Prices & Application`,
    targetKeyword: 'sika waterproofing',
    monthlySearchVolume: 1900,
    content: {
      intro:
        "Sika is a world-leading brand in waterproofing and construction chemicals. In Malaysia, Sika products are widely used by contractors and homeowners for their proven quality and durability. This guide covers Sika's waterproofing range available in Malaysia.",
      sections: [
        {
          heading: 'Popular Sika Waterproofing Products',
          content:
            'SikaTop Seal 107: Flexible cementitious coating for roofs, terraces, and balconies. Easy to apply with brush. Price: RM80-120 per 20kg pail.\n\nSikalastic 560: Elastic waterproofing membrane. Excellent for movement joints. Price: RM150-200 per 20kg.\n\nSikagard 62: Protective coating for concrete. Prevents carbonation and water ingress. Price: RM200-280 per 20L.\n\nSikafloor: Waterproof flooring systems. Ideal for basements and car parks.\n\nSikafill: Crack repair and waterproofing. Flexible polyurethane sealant.',
        },
        {
          heading: 'Where to Buy Sika Products in Malaysia',
          content:
            'Sika authorized distributors throughout Malaysia\nMajor hardware stores (Mr DIY, HomePro)\nSpecialty building material suppliers\nOnline platforms (Lazada, Shopee for smaller products)\nDirect from contractors who are Sika-certified applicators\n\nAlways buy from authorized sellers to ensure genuine products and avoid counterfeits.',
        },
        {
          heading: 'How to Apply Sika Waterproofing',
          content:
            '1. Surface Preparation: Clean surface, remove loose material, repair cracks\n2. Prime if required: Some products need primer (Sika Primer)\n3. First coat: Apply evenly with brush or roller\n4. Drying time: Wait 4-6 hours between coats\n5. Second coat: Apply perpendicular to first coat\n6. Curing: Allow 24-48 hours before water exposure\n\nFollow product-specific instructions on the container. For large projects, hire Sika-certified contractors.',
        },
        {
          heading: 'Sika vs Other Brands',
          content:
            'Sika: Premium quality, higher price, proven track record, extensive product range\nPentens: Malaysian brand, more affordable, good for residential use\nBostik: Mid-range price, reliable performance\nMapei: Similar to Sika, Italian brand, comprehensive systems\n\nFor critical applications, Sika is recommended. For standard residential waterproofing, Pentens or Bostik offer good value.',
        },
      ],
      faq: [
        {
          question: 'Is Sika waterproofing expensive in Malaysia?',
          answer:
            'Sika is premium-priced, typically 20-40% more than local brands. However, its superior quality, longer lifespan, and warranty make it cost-effective long-term. For a 1000 sq ft roof, expect RM2,000-4,000 for Sika vs RM1,500-2,500 for local brands.',
        },
        {
          question: 'How long does Sika waterproofing last?',
          answer:
            'Sika waterproofing typically lasts 10-15 years with proper application and maintenance. Some membrane systems can last 20+ years. The lifespan depends on surface preparation, application quality, and exposure conditions.',
        },
        {
          question: 'Can I apply Sika waterproofing myself?',
          answer:
            'Yes, Sika offers DIY-friendly products like SikaTop Seal 107 for small areas. However, for roofs and large projects, hire Sika-certified contractors to ensure proper application and warranty coverage.',
        },
      ],
    },
  },
  {
    slug: 'pentens-t200-review',
    title: `Pentens T200 Review ${siteConfig.currentYear} - Price, Application & Performance`,
    description:
      'Detailed review of Pentens T200 waterproofing. Is it good? Price, how to apply, and comparison with Sika.',
    h1: `Pentens T200 Review - Malaysia's Popular Waterproofing Solution`,
    targetKeyword: 'pentens t200',
    monthlySearchVolume: 1300,
    content: {
      intro:
        'Pentens T200 is one of Malaysia\'s most popular waterproofing products, known for its affordability and effectiveness. This comprehensive review covers everything you need to know about Pentens T200, from pricing to application.',
      sections: [
        {
          heading: 'What is Pentens T200?',
          content:
            'Pentens T200 is a water-based acrylic waterproofing coating manufactured in Malaysia. It\'s designed for tropical climates with high rainfall. The product forms a flexible, breathable membrane that prevents water penetration while allowing trapped moisture to escape.\n\nKey features:\n- Water-based (easy cleanup)\n- UV resistant\n- Flexible (accommodates building movement)\n- Available in multiple colors\n- Suitable for roofs, walls, and terraces',
        },
        {
          heading: 'Pentens T200 Price in Malaysia',
          content:
            '20-liter pail: RM60-90\n5-liter pail: RM20-30\n1-liter tin: RM6-10\n\nCoverage: Approximately 20-25 sq ft per liter (2 coats)\nFor a 1000 sq ft roof: RM600-900 for materials\nWith labor: RM1,500-2,500 total\n\nPrices vary by location and retailer. Bulk purchases often get discounts.',
        },
        {
          heading: 'How to Apply Pentens T200',
          content:
            'Step 1: Clean the surface thoroughly. Remove dirt, oil, and loose material.\nStep 2: Repair all cracks with Pentens crack filler or cement.\nStep 3: Apply Pentens Primer (recommended for better adhesion).\nStep 4: First coat - Apply evenly with brush or roller. Coverage: 10-12 sq ft per liter.\nStep 5: Wait 4-6 hours for drying.\nStep 6: Second coat - Apply perpendicular to first coat.\nStep 7: Allow 24-48 hours curing before water exposure.\n\nTips: Avoid application during rain or extreme heat. Ensure proper ventilation.',
        },
        {
          heading: 'Pentens T200 Performance Review',
          content:
            'Pros:\n- Affordable price point\n- Easy DIY application\n- Good coverage\n- Effective for Malaysian climate\n- Variety of colors\n- Readily available in most hardware stores\n\nCons:\n- Lifespan shorter than premium brands (5-7 years vs 10-15 years)\n- Requires reapplication more frequently\n- Not ideal for high-traffic areas\n- Color may fade over time under UV exposure',
        },
        {
          heading: 'Pentens T200 vs Sika',
          content:
            'Pentens T200:\n- Price: RM60-90 per 20L\n- Lifespan: 5-7 years\n- Best for: Residential roofs, budget projects\n- DIY-friendly: Yes\n\nSika (e.g., SikaTop Seal 107):\n- Price: RM80-120 per 20kg\n- Lifespan: 10-15 years\n- Best for: Commercial projects, critical areas\n- Professional application recommended\n\nVerdict: For residential roofs and budget-conscious homeowners, Pentens T200 offers excellent value. For commercial projects or long-term solutions, Sika is worth the premium.',
        },
      ],
      faq: [
        {
          question: 'Is Pentens T200 good for roof waterproofing?',
          answer:
            'Yes, Pentens T200 is effective for roof waterproofing in Malaysia. It handles tropical rain and heat well. While not as durable as premium brands, it offers good value for residential projects. Expect 5-7 years lifespan with proper application.',
        },
        {
          question: 'How many coats of Pentens T200 should I apply?',
          answer:
            'Minimum 2 coats for effective waterproofing. For high-exposure areas or porous surfaces, 3 coats are recommended. Each coat should be applied after the previous one is touch-dry (4-6 hours).',
        },
        {
          question: 'Where can I buy Pentens T200 in Malaysia?',
          answer:
            'Pentens T200 is widely available at hardware stores (Mr DIY, HomePro), building material suppliers, and online (Lazada, Shopee). Prices range from RM60-90 for a 20L pail depending on location.',
        },
      ],
    },
  },
  // Continuing with remaining guides...
  {
    slug: 'roof-repair-cost-malaysia',
    title: `Roof Repair Cost Malaysia ${siteConfig.currentYear} - Price Guide`,
    description:
      'Complete guide to roof repair costs in Malaysia. Prices for leak repair, tile replacement, waterproofing, and full roof replacement.',
    h1: `Roof Repair Cost Malaysia ${siteConfig.currentYear}`,
    targetKeyword: 'roof repair cost',
    monthlySearchVolume: 890,
    content: {
      intro:
        "Understanding roof repair costs helps you budget and avoid overpaying. This guide breaks down typical roof repair costs in Malaysia for different types of repairs and roofing materials.",
      sections: [
        {
          heading: 'Roof Leak Repair Cost',
          content:
            'Minor leak (1-2 spots): RM500-RM1,500\nModerate leaks (multiple spots): RM1,500-RM3,000\nMajor leaks (structural damage): RM3,000-RM8,000\n\nCosts include finding leak source, removing damaged materials, applying waterproofing, and internal ceiling repair if needed.',
        },
        {
          heading: 'Roof Tile Replacement Cost',
          content:
            'Concrete tiles: RM8-15 per tile + labor (RM5-10 per tile)\nClay tiles: RM12-25 per tile + labor\nMetal roof sheets: RM15-30 per sq ft installed\n\nMinimum call-out charge: RM300-500\n10-20 tiles replacement: RM800-1,500\n50+ tiles: RM2,000-4,000',
        },
        {
          heading: 'Roof Waterproofing Cost',
          content:
            'Coating waterproofing: RM10-25 per sq ft\nMembrane waterproofing: RM15-35 per sq ft\n\nTypical costs:\n500 sq ft roof: RM5,000-12,500\n1000 sq ft roof: RM10,000-25,000\n2000 sq ft roof: RM20,000-50,000',
        },
        {
          heading: 'Full Roof Replacement Cost',
          content:
            'Metal/zinc roofing: RM25-40 per sq ft\nConcrete tiles: RM30-50 per sq ft\nClay tiles: RM40-80 per sq ft\nMetal deck + tiles: RM50-90 per sq ft\n\nIncludes removal of old roof, new structure if needed, installation, and cleanup.',
        },
      ],
      faq: [
        {
          question: 'Why are roof repair costs so variable in Malaysia?',
          answer:
            'Costs vary based on roof accessibility, extent of damage, materials used, contractor experience, and location. Urban areas (KL, Selangor) tend to be 20-30% more expensive than rural areas.',
        },
        {
          question: 'Should I repair or replace my roof?',
          answer:
            'If repair costs exceed 50% of replacement cost, or if your roof is over 20 years old with multiple issues, replacement is usually better value long-term.',
        },
      ],
    },
  },
  {
    slug: 'how-to-fix-roof-leak',
    title: `How to Fix Roof Leak ${siteConfig.currentYear} - Step by Step Guide`,
    description:
      'Step-by-step guide to fixing roof leaks. DIY methods, when to call a professional, and permanent solutions.',
    h1: `How to Fix Roof Leak - Complete Malaysia Guide`,
    targetKeyword: 'how to fix roof leak',
    monthlySearchVolume: 590,
    content: {
      intro:
        'Roof leaks need immediate attention to prevent water damage, mold, and structural issues. This guide covers both temporary DIY fixes and permanent professional solutions.',
      sections: [
        {
          heading: 'Finding the Leak Source',
          content:
            'Water stains on ceiling indicate general area\nTrace water stains upward and outward\nCheck attic during rain\nLook for cracked tiles, holes, or missing flashing\nWater travels along rafters before dripping\nActual leak source is usually higher than ceiling stain',
        },
        {
          heading: 'Temporary DIY Fixes',
          content:
            'Tarpaulin cover: Secure with weights (temporary during rain)\nWaterproof tape: For small cracks (3M or similar)\nRoof sealant: Quick-dry sealant for emergency patches\nBuckets and containers: Catch water to prevent floor damage\n\nThese are TEMPORARY only. Schedule professional repair ASAP.',
        },
        {
          heading: 'Permanent Repair Solutions',
          content:
            'Tile replacement: Remove damaged tiles, replace with matching ones\nFlashing repair: Replace or reseal metal flashing\nWaterproofing application: Apply membrane or coating\nValley repair: Critical leak-prone area\nStructural repair: If rafters or deck damaged\n\nAlways hire licensed contractors for permanent fixes.',
        },
        {
          heading: 'Preventing Future Leaks',
          content:
            'Annual roof inspection (before monsoon season)\nClean gutters regularly\nTrim overhanging tree branches\nReplace worn tiles promptly\nReapply waterproofing every 5-7 years\nCheck and maintain flashing',
        },
      ],
      faq: [
        {
          question: 'Can I fix a roof leak myself?',
          answer:
            'Small leaks with accessible areas can be DIY using waterproof sealant or tape as temporary fixes. However, for permanent repair, especially for tile replacement or structural issues, hire professionals for safety and warranty.',
        },
        {
          question: 'How much does it cost to fix a roof leak in Malaysia?',
          answer:
            'Small leaks: RM500-1,500, moderate: RM1,500-3,000, major leaks with structural damage: RM3,000-8,000. Get multiple quotes from licensed contractors.',
        },
      ],
    },
  },
  {
    slug: 'bostik-waterproofing',
    title: `Bostik Waterproofing Malaysia 2026 — Complete Product Guide & Prices`,
    description:
      'Complete guide to Bostik waterproofing products in Malaysia 2026. Compare Boscoseal AC2, PUW, RC2 prices, application methods, and see how Bostik compares to Sika and Pentens.',
    h1: `Bostik Waterproofing Malaysia 2026 — Complete Product Guide & Prices`,
    targetKeyword: 'bostik waterproofing',
    monthlySearchVolume: 720,
    content: {
      intro:
        'Bostik is one of the world\'s oldest adhesive and waterproofing brands — founded in 1889 and now owned by Arkema Group, a French multinational with €8.7 billion in revenue and operations in 50+ countries. In Malaysia, Bostik\'s waterproofing range is marketed under the "Seal & Block" umbrella and spans everything from DIY-friendly acrylic coatings to high-performance polyurethane membranes. This guide covers every Bostik waterproofing product available in Malaysia, including verified 2026 pricing, application steps, and a head-to-head comparison against Sika and Pentens — so you can make an informed decision before buying.',
      sections: [
        {
          heading: 'Complete Bostik Waterproofing Product Range',
          content:
            'Bostik Malaysia offers 8 specialist waterproofing products under the Boscoseal family:\n\n**1. Boscoseal AC2 / Bostik Supercoat Fiber (Most Popular)**\nType: One-part water-based acrylic polymer fibre reinforced membrane. Also sold as "Bostik Block A750".\nBest for: Exposed roofs, bathrooms, balconies, wet areas.\nKey advantage: Built-in fibre reinforcement means no separate fibreglass matting is required — a significant time and cost saving over Sika and Pentens products.\nCoverage: 1.0–1.5 kg/m² per coat (2 coats recommended).\nColors: Grey, White.\nPrice: ~RM380/20kg pail, ~RM112/5kg pail.\n\n**2. Boscoseal RC2 / Bostik Supercoat EX**\nType: Single-component acrylic flexible waterproofing coating.\nBest for: Exposed roof membranes, pipes, conduits, parapet walls.\nKey features: Water-based, bridges cracks, prevents metal corrosion, UV resistant, flexible across a wide temperature range.\n\n**3. Boscoseal PUW**\nType: One-component water-based modified polyurethane membrane.\nBest for: Premium waterproofing, high-elasticity requirements.\nKey features: No mixing required (ready to use), highly elastomeric after curing, brush/roller/trowel applied, strong adhesion to masonry, non re-emulsifying (won\'t break down with water exposure).\nPrice: ~RM400–500/20kg (Shopee/Lazada).\n\n**4. Boscolastic**\nType: Two-component elastomeric acrylic polymer cementitious coating.\nBest for: Concrete structures and suspended structures.\nKey features: Mixed on site (Part A + Part B), excellent crack bridging, accommodates structural movement, non-toxic, withstands heavy topping.\nApplications: Concrete roofs, basements, tanks.\n\n**5. Boscoflex**\nType: Two-component polymer modified cementitious waterproof coating.\nBest for: Tanking, lining, below-grade applications.\nKey features: Easy 2-part mixing, superior adhesion to concrete and cement render, abrasion resistant, can apply to damp substrates, paintable with elastic paint.\nApplications: Basements, lift pits, retaining walls.\n\n**6. Boscoseal 16**\nType: Self-adhesive rubberized bitumen sheet membrane.\nBest for: Large flat roof areas, concrete slabs.\nKey features: Self-adhesive — no torch or heat needed, self-sealing overlap edges, no seaming tape required, polyethylene film protected, stable under severe weather.\nPrice: ~RM200–300/roll.\n\n**7. Boscoseal PUR**\nType: Bitumen modified liquid-applied elastomeric membrane.\nBest for: Below-grade and foundation waterproofing.\nApplications: Foundations, basements, buried structures.\n\n**8. Boscoseal AR**\nType: Anti-root water-borne liquid applied membrane.\nBest for: Green roofs, planter boxes, landscaping areas.\nKey feature: Constrains root growth without harming plants.',
        },
        {
          heading: 'Bostik Waterproofing Prices in Malaysia 2026',
          content:
            'Verified pricing as of January 2026 (prices may vary by retailer):\n\n**Bostik Products**\n• Boscoseal AC2 20kg pail — ~RM380\n• Boscoseal AC2 5kg pail — ~RM112\n• Boscoseal PUW 20kg — ~RM400–500\n• Boscoseal 16 (sheet membrane) — ~RM200–300/roll\n\n**Competitor Benchmark (for comparison)**\n• Sika TopSeal-107 25kg — ~RM90 (cementitious)\n• Sika Brushcoat WP 25kg — ~RM65 (acrylic)\n• SikaFill MY 20kg — ~RM220 (acrylic polymer)\n• Pentens T100 5kg — ~RM70 (PU bituminous)\n• Pentens T200 20kg — ~RM180–250 (acrylic cementitious)\n\nBostik\'s AC2 is mid-premium priced. However, the built-in fibre reinforcement eliminates the need to purchase separate fibreglass matting (which adds RM30–80 to Sika/Pentens jobs), making the total cost competitive.',
        },
        {
          heading: 'Bostik vs Sika vs Pentens — Which Should You Choose?',
          content:
            'A direct comparison of the three most popular waterproofing brands in Malaysia:\n\n**Bostik**\n• Parent company: Arkema Group (France)\n• Market position: #3 in Malaysia\n• Price range: Mid to premium\n• Roof specialist product: Boscoseal AC2 (fibre-reinforced)\n• Key advantage: Fibre reinforcement built-in — no additional matting needed\n• Contractor preference: Growing, particularly for residential roofs\n• Best for: DIY users and contractors who want a single-product solution without matting\n\n**Sika**\n• Parent company: Sika AG (Switzerland)\n• Market position: #1 in Malaysia\n• Price range: Budget entry (Brushcoat RM65) up to premium\n• Roof specialist product: SikaFill MY\n• Key advantage: Widest product system range (10+ products), most specified by engineers\n• Best for: Commercial projects and consultants requiring a full certified system\n\n**Pentens**\n• Parent company: Pentens (Malaysia) — local brand\n• Market position: #2 in Malaysia\n• Price range: Budget to mid-range\n• Roof specialist product: Pentens T200\n• Key advantage: Local brand with good technical support; Pentens T100 is the budget-king\n• Best for: Smaller residential contractors and price-sensitive homeowners\n\n**Use-case recommendation:**\n— Exposed flat roof, DIY: Boscoseal AC2 (fibre included, no matting step)\n— Large commercial project: Sika (full certified system available)\n— Budget-conscious residential: Pentens T100 or T200\n— High-elasticity requirement: Boscoseal PUW or Sika Sikalastic',
        },
        {
          heading: 'How to Apply Bostik Boscoseal AC2 (Step-by-Step)',
          content:
            'Boscoseal AC2 is the most popular Bostik product for DIY roof and bathroom waterproofing. Follow these steps for best results:\n\n1. Surface preparation: Clean the surface thoroughly. Remove loose material, paint, oil, and dust. Repair cracks wider than 2mm with suitable filler before waterproofing.\n\n2. Check surface moisture: The surface should be clean and free of standing water. Damp surfaces are acceptable for most applications.\n\n3. Priming: Not always required on concrete — check the Technical Data Sheet (TDS). On porous surfaces, a diluted coat of AC2 (1:1 with water) can act as primer.\n\n4. First coat: Apply by brush or roller at approximately 1.0–1.5 kg/m². Work the product into all corners, joints, and cracks. For corners and movement joints, bed in Bostik sealing tape or fabric strip.\n\n5. Drying time: Allow 4–6 hours between coats depending on weather and temperature. Do not apply in rain or if rain is expected within 4 hours.\n\n6. Second coat: Apply perpendicular to the first coat direction to ensure even coverage and eliminate pinholes.\n\n7. Full cure: 7 days for full waterproofing performance. Protect from rain for the first 24 hours.\n\n8. Tiling over: For bathroom and wet area applications, you can tile over once fully cured.\n\nPro tip: Boscoseal AC2\'s fibre reinforcement means you skip the fibreglass matting step that Sika and Pentens products require. This saves both time and material cost — one less product to purchase and one less application step.',
        },
        {
          heading: 'Where to Buy Bostik Waterproofing in Malaysia',
          content:
            'Bostik waterproofing products are widely available across Malaysia through both online and physical channels:\n\nOnline retailers:\n• Shopee Malaysia — search "Bostik Boscoseal" for full range including smaller packs\n• Lazada Malaysia — search "Bostik waterproofing" for competitive pricing\n• eWarehouse.my — stocks the full Boscoseal range\n\nPhysical stores:\n• Hardware stores nationwide (use the Bostik dealer locator at bostik.com/malaysia)\n• Chin Chun Hardware (Shah Alam, Selangor) — stocks professional range\n• VelocityDIY (Johor Bahru)\n• Mr. DIY (selected Bostik products, mainly smaller packs)\n• Major hardware chains across all 16 states\n\nBostik Malaysia contact:\n• Website: bostik.com/malaysia\n• Dealer locator: bostik.com/malaysia/en/resources-tools/dealer-locator\n\nAlways buy from authorised dealers to ensure genuine products. Bostik products have batch codes on packaging — check the Bostik Malaysia website to verify.',
        },
      ],
      faq: [
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
            'Yes — especially Boscoseal AC2, which is designed for easy application by brush or roller. It\'s one of the more DIY-friendly products on the market because the fibre reinforcement is pre-mixed, eliminating the tricky matting step. For roof areas larger than 50 sq metres or for below-grade (basement) applications, professional application is recommended.',
        },
        {
          question: 'Is Bostik better than Sika for waterproofing?',
          answer:
            'They excel in different areas. Bostik\'s key advantage is Boscoseal AC2\'s fibre reinforcement — you skip the fibreglass matting step, saving time and cost. Sika has the widest product range and is most widely specified by engineers for commercial projects. For standard residential roof waterproofing, Bostik AC2 is an excellent and competitive choice.',
        },
      ],
    },
  },
]
