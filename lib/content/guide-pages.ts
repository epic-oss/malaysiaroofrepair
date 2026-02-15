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
]
