// Brand Colors
export const BRAND_COLORS = {
  // Primary colors
  maroon: "#8A1538", // Qatar Maroon
  blue: "#003366", // Deep Blue
  sand: "#EED6A0", // Warm Sand
  green: "#008060", // Emerald Green

  // Pillar colors
  pillars: {
    sports: "#FF6F3C", // Coral Orange
    art: "#7B4BA0", // Royal Purple
    sustainability: "#008060", // Emerald Green
    ability: "#005C99", // Deep Blue
    animal: "#BFA48E", // Warm Taupe
  },

  // Neutral colors
  neutral: {
    offWhite: "#F7F7F7",
    charcoal: "#2C2C2C",
  },
} as const;

// Typography Scale
export const TYPOGRAPHY = {
  heading: {
    fontFamily: "var(--font-poppins)",
    weights: ["400", "600", "700"],
  },
  subheading: {
    fontFamily: "var(--font-nunito-sans)",
    weights: ["400", "600", "700"],
  },
  body: {
    fontFamily: "var(--font-open-sans)",
    weights: ["400", "600", "700"],
  },
} as const;

// Spacing Tokens
export const SPACING = {
  xs: "0.5rem", // 8px
  sm: "1rem", // 16px
  md: "1.5rem", // 24px
  lg: "2rem", // 32px
  xl: "3rem", // 48px
  "2xl": "4rem", // 64px
  "3xl": "6rem", // 96px
} as const;

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// Brand Name (with trademark symbol)
export const BRAND_NAME = {
  display: "#bigbmeetup™", // For visible text with trademark
  plain: "#bigbmeetup", // For URLs, alt text, and technical references
  hashtag: "#bigbmeetup", // For hashtags and social media
} as const;

// Brand Information
export const BRAND_INFO = {
  tagline: "To Inspire, To Educate, To Inform & Bring Communities Together",
  description:
    "A movement that celebrates people, purpose, and positive change in Qatar.",
  stats: {
    years: "7+",
    editions: "85+",
    partners: "65+",
    participants: "25k+",
  },
} as const;

// Five Pillars
export const FIVE_PILLARS = [
  {
    id: "sports-wellness",
    name: "Sports & Wellness",
    color: BRAND_COLORS.pillars.sports,
    description: "Energy & vitality",
  },
  {
    id: "art-culture",
    name: "Celebrating Art & Culture",
    color: BRAND_COLORS.pillars.art,
    description: "Creativity & expression",
  },
  {
    id: "sustainability",
    name: "Estedama (Sustainability)",
    color: BRAND_COLORS.pillars.sustainability,
    description: "Environment & balance",
  },
  {
    id: "this-ability",
    name: "This Ability",
    color: BRAND_COLORS.pillars.ability,
    description: "Inclusion & empowerment",
  },
  {
    id: "animal-welfare",
    name: "Animal Welfare",
    color: BRAND_COLORS.pillars.animal,
    description: "Compassion & care",
  },
] as const;

// Hero Section Configuration
export const HERO_CONFIG = {
  enableMosaicBackground: true, // Feature flag: Set to true to enable mosaic background
  mosaicGrid: {
    columns: { desktop: 8, tablet: 6, mobile: 4 },
    transitionDuration: 1200, // ms - slower flip animation
    changeInterval: { min: 4000, max: 8000 }, // ms - slower random interval between tile changes
  },
  overlay: {
    opacity: 0.5, // Increased overlay opacity for text readability
    color: "rgba(138, 21, 56, 0.5)", // Purple/maroon tinted overlay (Qatar Maroon with opacity)
  },
} as const;

// Blocked YouTube Video IDs - Videos that should not be displayed on the site
export const BLOCKED_VIDEO_IDS = [
  "MP8LeUo5RXA",
  "zFPJe_0xOvc",
  "C9PAgYSBqVM",
  "uaZ5YwMXQBg",
] as const;

// Featured YouTube Video IDs - Videos that should be prominently displayed
// These videos will appear at the top of the stories page and in the homepage stories section
export const FEATURED_VIDEO_IDS = [
  "wsVXpnKsBgo",
  "3Zz9831cmUk",
  "ZmZv7ZT2mkY",
  "bvejdgt4FeM",
  "FyeelY9qibs",
  "bIN1-1dd2Lw",
] as const;

