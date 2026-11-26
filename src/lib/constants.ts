export const SITE = {
  name: "InstaKey Pro Locksmith",
  shortName: "InstaKey Pro",
  tagline: "Fast, Professional Lock & Key Solutions",
  phone: "(954) 662-2972",
  phoneTel: "tel:+19546622972",
  email: "info@instakeypro.com",
  address: "Tampa, FL",
  baseUrl: "https://instakeypro.com",
  hours: "24/7 – Available Around the Clock",
} as const;

export const NAV_LINKS = [
  { label: "Automotive", href: "/automotive" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Smart Solutions", href: "/smart-solutions" },
] as const;

export const SERVICES = {
  automotive: {
    title: "Automotive",
    slug: "automotive",
    icon: "Car",
    description:
      "Locked out of your car? Lost your keys? Our mobile automotive locksmiths come to you anywhere in the Tampa Bay area.",
    items: [
      {
        name: "Car Lockout Service",
        description:
          "Mobile car-door unlocking. Call to confirm vehicle compatibility and an arrival estimate.",
      },
      {
        name: "Lost Car Key Replacement",
        description:
          "We cut and program new keys on-site, saving you the tow truck cost to the dealership.",
      },
      {
        name: "Key Fob Programming",
        description:
          "Factory-quality remote key fob programming for all major car brands at a fraction of dealer prices.",
      },
      {
        name: "Transponder Keys",
        description:
          "High-security transponder chip keys cut and programmed to your vehicle's ECU.",
      },
      {
        name: "Ignition Repair & Replacement",
        description:
          "Broken or stuck ignition cylinder? We repair or replace it on the spot without major disassembly.",
      },
      {
        name: "Broken Key Extraction",
        description:
          "Precision extraction of broken keys from ignitions, door locks, and trunk locks.",
      },
    ],
  },
  residential: {
    title: "Residential",
    slug: "residential",
    icon: "Home",
    description:
      "Your home's security is our priority. From lockouts to full lock upgrades, we keep your family safe.",
    items: [
      {
        name: "House Lockout",
        description:
          "Locked out of your home? We'll have you back inside fast without damaging your door or frame.",
      },
      {
        name: "Lock Rekey",
        description:
          "Moving in? Just break up with your landlord? Rekeying is the affordable way to secure your home.",
      },
      {
        name: "Lock Installation",
        description:
          "Professional installation of any lock brand — deadbolts, knob locks, lever handles, and more.",
      },
      {
        name: "Deadbolt Upgrades",
        description:
          "Upgrade to Grade 1 deadbolts for maximum residential security at an affordable price.",
      },
      {
        name: "Key Duplication",
        description:
          "Fast, accurate key copies for all common residential key types including high-security keys.",
      },
    ],
  },
  commercial: {
    title: "Commercial",
    slug: "commercial",
    icon: "Building2",
    description:
      "Protect your business with enterprise-grade security solutions tailored to your needs and budget.",
    items: [
      {
        name: "Master Key Systems",
        description:
          "Custom hierarchical master key systems so the right people access the right areas.",
      },
      {
        name: "High-Security Locks",
        description:
          "Medeco, Mul-T-Lock, and ABLOY high-security cylinders that resist picking, drilling, and bumping.",
      },
      {
        name: "Office Lockouts",
        description:
          "24/7 commercial lockout response. We work on all commercial door hardware and access systems.",
      },
      {
        name: "Access Control Systems",
        description:
          "Keypad, card reader, and biometric access control installation and maintenance.",
      },
      {
        name: "Panic Bars & Exit Devices",
        description:
          "ANSI-compliant panic bar installation and repair for commercial buildings.",
      },
    ],
  },
  smartSolutions: {
    title: "Smart Solutions",
    slug: "smart-solutions",
    icon: "Smartphone",
    description:
      "Step into the future with smart lock technology — keyless, connected, and fully secure.",
    items: [
      {
        name: "Smart Lock Installation",
        description:
          "Professional installation of top-brand smart locks including Schlage Encode, Yale, and August.",
      },
      {
        name: "Keypad Locks",
        description:
          "Standalone keypad locks — no Wi-Fi needed, perfect for rentals and secondary entries.",
      },
      {
        name: "WiFi & Bluetooth Locks",
        description:
          "Connected smart locks you control from your smartphone, anywhere in the world.",
      },
      {
        name: "Mobile-Controlled Access",
        description:
          "App-based access control for residential and light commercial use with activity logs.",
      },
    ],
  },
} as const;

export const SERVICE_NAMES = [
  "Car Lockout",
  "Lost Car Key / Key Replacement",
  "Key Fob Programming",
  "Transponder Key",
  "Ignition Repair",
  "House Lockout",
  "Lock Rekey",
  "Lock Installation",
  "Deadbolt Upgrade",
  "Commercial Lockout",
  "Master Key System",
  "Access Control",
  "Smart Lock Installation",
  "Other",
] as const;

export const SERVICE_AREAS = [
  { city: "Brandon", state: "FL", zip: "33511", population: "" },
  { city: "Sun City Center", state: "FL", zip: "33573", population: "" },
  { city: "Tampa", state: "FL", zip: "33601", population: "400000" },
  { city: "St Petersburg", state: "FL", zip: "33701", population: "260000" },
  { city: "Clearwater", state: "FL", zip: "33755", population: "117000" },
  { city: "Lutz", state: "FL", zip: "33549", population: "22000" },
  { city: "Wesley Chapel", state: "FL", zip: "33543", population: "65000" },
  { city: "Land O Lakes", state: "FL", zip: "34638", population: "35000" },
  { city: "Zephyrhills", state: "FL", zip: "33540", population: "16000" },
  { city: "Sarasota", state: "FL", zip: "34230", population: "56000" },
  { city: "Bradenton", state: "FL", zip: "34201", population: "57000" },
  { city: "Lakeland", state: "FL", zip: "33801", population: "115000" },
  { city: "Dunedin", state: "FL", zip: "34698", population: "37000" },
  { city: "Oldsmar", state: "FL", zip: "34677", population: "14000" },
  { city: "Safety Harbor", state: "FL", zip: "34695", population: "17000" },
  { city: "Temple Terrace", state: "FL", zip: "33617", population: "26000" },
  { city: "Citrus Park", state: "FL", zip: "33625", population: "25000" },
  { city: "Town N Country", state: "FL", zip: "33615", population: "83000" },
  { city: "Mango", state: "FL", zip: "33550", population: "10000" },
  { city: "Progress Village", state: "FL", zip: "33619", population: "12000" },
  { city: "Gulf City", state: "FL", zip: "33570", population: "8000" },
] as const;

export const WHY_CHOOSE_US = [
  {
    icon: "Zap",
    title: "Mobile Response",
    description:
      "Our mobile locksmiths are strategically positioned across Tampa Bay to reach you fast — day or night.",
  },
  {
    icon: "Shield",
    title: "Professional Service",
    description:
      "Call to discuss your lock and key needs before requesting service.",
  },
  {
    icon: "DollarSign",
    title: "Upfront Pricing",
    description:
      "No hidden fees, no surprises. We quote you a firm price before starting any work.",
  },
  {
    icon: "Wrench",
    title: "Mobile Service",
    description:
      "We come to you — at home, at work, or on the roadside. No towing required.",
  },
  {
    icon: "Clock",
    title: "24/7 Availability",
    description:
      "Emergencies don't keep business hours. Our team is on call around the clock, every day of the year.",
  },
  {
    icon: "Award",
    title: "Clear Communication",
    description:
      "Discuss the work and quote before service begins.",
  },
] as const;

/**
 * Published pricing. These numbers are the single source of truth for on-page
 * copy, JSON-LD Offer schema, and /llms.txt. Answer engines (ChatGPT, Gemini,
 * Perplexity, Siri, Alexa) quote concrete numbers and skip "call for a quote",
 * so every price here must stay in sync with what dispatch actually charges.
 */
export const PRICING = {
  carLockout: {
    service: "Car Lockout",
    slug: "car-lockout",
    from: 50,
    label: "$50",
    blurb: "Locked out of your car — any make, any model, day or night.",
  },
  homeLockout: {
    service: "House Lockout",
    slug: "house-lockout",
    from: 80,
    label: "$80",
    blurb: "Locked out of your house or apartment — no damage to your door.",
  },
  currency: "USD",
  note: "Flat starting rate quoted before we dispatch. No call-out fee, no after-midnight surcharge.",
} as const;

/**
 * The two questions that actually drive revenue: what does it cost, and are
 * you open right now. Rendered as visible text AND FAQPage schema so both
 * Google and LLM crawlers can lift the answer verbatim.
 */
export const LOCKOUT_FAQ = [
  {
    question: "How much does a car lockout cost?",
    answer:
      "A car lockout starts at $50 in the Tampa Bay area. That is a flat starting rate quoted before we dispatch, with no call-out fee and no extra charge for nights, weekends, or holidays.",
  },
  {
    question: "How much does a house lockout cost?",
    answer:
      "A house or apartment lockout starts at $80 in the Tampa Bay area. We quote the price before we dispatch and there is no after-midnight surcharge.",
  },
  {
    question: "Are you open after midnight?",
    answer:
      "Yes. InstaKey Pro Locksmith is open 24 hours a day, 7 days a week, 365 days a year, including after midnight, weekends, and holidays. Call (954) 662-2972 for current availability.",
  },
  {
    question: "Do you charge extra at night or on holidays?",
    answer:
      "No. Car lockouts start at $50 and house lockouts start at $80 at every hour of the day. We do not add a night, weekend, or holiday surcharge.",
  },
  {
    question: "How fast can a locksmith get to me?",
    answer:
      "Arrival time depends on location, traffic, and technician availability. Call for a current estimate before requesting dispatch.",
  },
  {
    question: "Will you damage my car or door to get it open?",
    answer:
      "Non-destructive entry methods are used where the lock and door condition allow. Discuss the approach with the technician before work begins.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We cover Tampa, St. Petersburg, Clearwater, Brandon, Sun City Center, Lutz, Wesley Chapel, Land O' Lakes, Zephyrhills, Sarasota, Bradenton, Lakeland, Dunedin, Oldsmar, Safety Harbor, and Temple Terrace, Florida.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, all major credit cards, and debit cards. Payment is taken on-site after the work is finished.",
  },
] as const;
