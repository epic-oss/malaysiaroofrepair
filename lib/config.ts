export const siteConfig = {
  // Site Info
  siteName: "Malaysia Roof Repair",
  siteUrl: "https://malaysiaroofrepair.com",
  currentYear: new Date().getFullYear(), // NEVER hardcode year
  contactEmail: "hello@malaysiaroofrepair.com",
  niche: "roof-repair",
  nicheLabel: "Roof Repair & Waterproofing",
  currency: "RM",
  country: "Malaysia",

  // Malaysian States (16 total)
  states: [
    "Kuala Lumpur",
    "Selangor",
    "Penang",
    "Johor",
    "Perak",
    "Negeri Sembilan",
    "Melaka",
    "Pahang",
    "Kedah",
    "Terengganu",
    "Kelantan",
    "Sabah",
    "Sarawak",
    "Putrajaya",
    "Labuan",
    "Perlis"
  ] as const,

  // Service Types (10 total)
  serviceTypes: [
    "Roof Leak Repair",
    "Waterproofing",
    "Roof Coating",
    "Metal Roof Repair",
    "Tile Roof Repair",
    "Gutter Repair & Replacement",
    "Roof Replacement",
    "Ceiling Leak Repair",
    "Flat Roof Waterproofing",
    "Emergency Roof Repair"
  ] as const,

  // Roof Types
  roofTypes: [
    "Concrete Roof",
    "Metal/Zinc Roof",
    "Clay Tile Roof",
    "Flat Roof",
    "Polycarbonate Roof",
    "Asbestos Roof"
  ] as const,

  // Property Types (for inquiry forms)
  propertyTypes: [
    "Terrace House",
    "Semi-Detached",
    "Bungalow",
    "Condominium",
    "Shop Lot",
    "Factory/Warehouse"
  ] as const,

  // Urgency Options
  urgencyOptions: [
    "Emergency (24hr)",
    "Within this week",
    "Within this month",
    "Just getting quotes"
  ] as const,

  // Price Ranges
  priceRanges: [
    "Budget",
    "Mid-range",
    "Premium"
  ] as const,

  // Pricing
  pricing: {
    free: {
      name: "Free Listing",
      price: 0,
      features: [
        "Basic company profile",
        "Appears in directory",
        "Contact information visible",
        "Sorted below premium listings"
      ]
    },
    premium: {
      name: "Premium",
      price: 99,
      currency: "RM",
      interval: "month",
      features: [
        "All Free features",
        "Gold badge & border",
        "Appears first in all listings",
        "Receives broadcast leads",
        "Enhanced profile with logo",
        "Dashboard with lead analytics",
        "Priority support"
      ]
    }
  },

  // Pagination
  itemsPerPage: 12,

  // SEO
  defaultMetadata: {
    title: `Malaysia Roof Repair - Find Trusted Contractors ${new Date().getFullYear()}`,
    description: "Compare quotes from verified roofing and waterproofing specialists across Malaysia. Connect with trusted contractors in your area.",
    keywords: "roof repair malaysia, waterproofing malaysia, roof leak repair, roofing contractors, atap bocor, tukang atap"
  }
} as const

// Type exports for TypeScript
export type State = typeof siteConfig.states[number]
export type ServiceType = typeof siteConfig.serviceTypes[number]
export type RoofType = typeof siteConfig.roofTypes[number]
export type PropertyType = typeof siteConfig.propertyTypes[number]
export type UrgencyOption = typeof siteConfig.urgencyOptions[number]
export type PriceRange = typeof siteConfig.priceRanges[number]
