export const SITE = {
  name: "InstaKey Pro Locksmith",
  shortName: "InstaKey Pro",
  tagline: "Fast, Professional Lock & Key Solutions",
  phone: "(813) 295-4321",
  phoneTel: "tel:+18132954321",
  email: "info@instakeypro.com",
  address: "Tampa, FL",
  baseUrl: "https://www.instakeypro.com",
  hours: "24/7 – Available Around the Clock",
  founded: "2018",
  license: "FL Lic. #LK-2024-TB",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Automotive", href: "/automotive" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Smart Solutions", href: "/smart-solutions" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
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
          "Fast, damage-free entry for any make and model. Our technicians arrive in under 30 minutes.",
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

export const SERVICE_AREAS = [
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

export const TESTIMONIALS = [
  {
    name: "Maria G.",
    location: "Tampa, FL",
    rating: 5,
    text: "Locked myself out at 11 PM and InstaKey Pro arrived in 20 minutes. Professional, fast, and very reasonable price. Highly recommend!",
    service: "Car Lockout",
  },
  {
    name: "David R.",
    location: "Wesley Chapel, FL",
    rating: 5,
    text: "Lost my car key fob and they came to my house to program a new one. Saved me $400 vs the dealership quote. Amazing service!",
    service: "Key Fob Programming",
  },
  {
    name: "Sandra T.",
    location: "Clearwater, FL",
    rating: 5,
    text: "Had all the locks rekeyed when we moved into our new home. Quick, professional, and gave us 3 sets of keys each. Very happy.",
    service: "Residential Rekey",
  },
  {
    name: "James M.",
    location: "St. Petersburg, FL",
    rating: 5,
    text: "Installed smart locks throughout our office building. The team was knowledgeable, efficient, and cleaned up everything after. 5 stars.",
    service: "Smart Lock Installation",
  },
  {
    name: "Lisa K.",
    location: "Lutz, FL",
    rating: 5,
    text: "Called at 7 AM after breaking my key in the ignition. They were there by 7:30 and had it fixed in 30 minutes. Life savers!",
    service: "Broken Key Extraction",
  },
  {
    name: "Carlos B.",
    location: "Land O' Lakes, FL",
    rating: 5,
    text: "Best locksmith in the Tampa area. Fair pricing, they explain everything they're doing, and the work is top quality.",
    service: "Commercial Locks",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    icon: "Zap",
    title: "30-Minute Response",
    description:
      "Our mobile locksmiths are strategically positioned across Tampa Bay to reach you fast — day or night.",
  },
  {
    icon: "Shield",
    title: "Licensed & Insured",
    description:
      "All technicians are state-licensed, background-checked, and fully insured for your complete peace of mind.",
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
    title: "Satisfaction Guaranteed",
    description:
      "We stand behind every job. If you're not satisfied, we'll make it right — no questions asked.",
  },
] as const;
