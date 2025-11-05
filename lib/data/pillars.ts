import { PillarContent, PillarId } from "@/types/pillar";
import { BRAND_COLORS } from "@/lib/constants";

// Comprehensive pillar data structure
// This structure is CMS-ready and will be migrated to Sanity in Iteration 4

export const PILLARS_DATA: Record<PillarId, PillarContent> = {
  "sports-wellness": {
    id: "sports-wellness",
    name: "Sports & Wellness",
    tagline: "Energy & Vitality",
    color: BRAND_COLORS.pillars.sports,
    description: "Promoting physical health, mental wellness, and active lifestyles in Qatar.",
    fullDescription:
      "Sports & Wellness is at the heart of bigbmeetup's mission to inspire healthy living and active communities. Through partnerships with sports organizations, fitness centers, and wellness advocates, we've organized events that celebrate physical health, mental wellness, and the power of an active lifestyle. Our initiatives include community fitness challenges, wellness workshops, and sports tournaments that bring people together while promoting holistic health.",
    initiatives: [
      {
        title: "Community Fitness Challenges",
        description:
          "Organizing group fitness activities and challenges that encourage participation from all community members.",
      },
      {
        title: "Wellness Workshops",
        description:
          "Educational sessions on nutrition, mental health, and holistic wellness practices.",
      },
      {
        title: "Sports Tournaments",
        description:
          "Community sports events that foster team spirit and healthy competition.",
      },
    ],
    relatedEditions: [
      {
        edition: "Edition 10",
        year: 2023,
        description: "Community fitness day with multiple sports activities",
      },
      {
        edition: "Edition 8",
        year: 2022,
        description: "Wellness workshop series featuring local experts",
      },
    ],
    featuredContent: {
      testimonials: [
        "bigbmeetup's sports events have brought our community together like never before.",
      ],
    },
  },
  "art-culture": {
    id: "art-culture",
    name: "Celebrating Art & Culture",
    tagline: "Creativity & Expression",
    color: BRAND_COLORS.pillars.art,
    description: "Showcasing Qatar's rich cultural heritage through art, music, and creative expression.",
    fullDescription:
      "Celebrating Art & Culture is our commitment to preserving and promoting Qatar's vibrant cultural landscape. We collaborate with local artists, musicians, cultural institutions, and creative minds to showcase the beauty and diversity of Qatari culture. Through art exhibitions, cultural performances, and creative workshops, we create platforms for artistic expression and cultural exchange that strengthen community bonds.",
    initiatives: [
      {
        title: "Art Exhibitions",
        description:
          "Curating and hosting exhibitions featuring local and regional artists.",
      },
      {
        title: "Cultural Performances",
        description:
          "Music, dance, and theater performances that celebrate Qatari heritage.",
      },
      {
        title: "Creative Workshops",
        description:
          "Hands-on workshops teaching traditional and contemporary art forms.",
      },
    ],
    relatedEditions: [
      {
        edition: "Edition 11",
        year: 2023,
        description: "Contemporary art exhibition featuring emerging Qatari artists",
      },
      {
        edition: "Edition 9",
        year: 2022,
        description: "Cultural heritage celebration with traditional performances",
      },
    ],
    featuredContent: {
      testimonials: [
        "The art exhibitions organized by bigbmeetup have given local artists a platform to shine.",
      ],
    },
  },
  sustainability: {
    id: "sustainability",
    name: "Estedama (Sustainability)",
    tagline: "Environment & Balance",
    color: BRAND_COLORS.pillars.sustainability,
    description: "Promoting environmental awareness and sustainable practices for a greener Qatar.",
    fullDescription:
      "Estedama (Sustainability) reflects our deep commitment to environmental stewardship and sustainable living. We partner with environmental organizations, sustainability experts, and eco-conscious businesses to promote green practices and environmental awareness. Our initiatives focus on waste reduction, renewable energy, conservation, and education about climate change, empowering communities to take action for a more sustainable future.",
    initiatives: [
      {
        title: "Environmental Awareness Campaigns",
        description:
          "Educational campaigns promoting sustainable practices and environmental consciousness.",
      },
      {
        title: "Clean-up Initiatives",
        description:
          "Community clean-up drives and recycling programs across Qatar.",
      },
      {
        title: "Sustainability Workshops",
        description:
          "Hands-on workshops on composting, energy conservation, and eco-friendly living.",
      },
    ],
    relatedEditions: [
      {
        edition: "Edition 13",
        year: 2024,
        description: "Major sustainability summit with environmental experts",
      },
      {
        edition: "Edition 7",
        year: 2022,
        description: "Community beach clean-up and recycling drive",
      },
    ],
    featuredContent: {
      testimonials: [
        "bigbmeetup's sustainability initiatives have inspired real change in our community.",
      ],
    },
  },
  "this-ability": {
    id: "this-ability",
    name: "This Ability",
    tagline: "Inclusion & Empowerment",
    color: BRAND_COLORS.pillars.ability,
    description: "Championing inclusion, accessibility, and empowerment for people of all abilities.",
    fullDescription:
      "This Ability is our commitment to creating an inclusive society where everyone, regardless of ability, can thrive and contribute. We work closely with disability advocacy groups, inclusive organizations, and accessibility experts to break down barriers and promote inclusion. Our events feature accessible venues, sign language interpretation, and programs designed to celebrate the abilities and contributions of all community members.",
    initiatives: [
      {
        title: "Accessibility Advocacy",
        description:
          "Promoting accessible venues, inclusive design, and universal access principles.",
      },
      {
        title: "Inclusive Events",
        description:
          "Organizing events that are accessible and welcoming to people of all abilities.",
      },
      {
        title: "Awareness Programs",
        description:
          "Educational programs that celebrate abilities and promote inclusion.",
      },
    ],
    relatedEditions: [
      {
        edition: "Edition 12",
        year: 2023,
        description: "Inclusive community festival celebrating abilities",
      },
      {
        edition: "Edition 6",
        year: 2021,
        description: "Accessibility awareness campaign with advocacy groups",
      },
    ],
    featuredContent: {
      testimonials: [
        "bigbmeetup truly lives up to its name - everyone feels welcome and included.",
      ],
    },
  },
  "animal-welfare": {
    id: "animal-welfare",
    name: "Animal Welfare",
    tagline: "Compassion & Care",
    color: BRAND_COLORS.pillars.animal,
    description: "Protecting and caring for animals while promoting responsible pet ownership.",
    fullDescription:
      "Animal Welfare is our commitment to protecting and caring for animals in Qatar. We partner with animal shelters, veterinary clinics, and animal welfare organizations to promote responsible pet ownership, support animal rescue efforts, and raise awareness about animal rights. Our initiatives include adoption drives, educational workshops, and support for local animal shelters, creating a more compassionate community for all living beings.",
    initiatives: [
      {
        title: "Adoption Drives",
        description:
          "Organizing pet adoption events to help animals find loving homes.",
      },
      {
        title: "Educational Workshops",
        description:
          "Teaching responsible pet ownership and animal care best practices.",
      },
      {
        title: "Shelter Support",
        description:
          "Supporting local animal shelters through donations and volunteer programs.",
      },
    ],
    relatedEditions: [
      {
        edition: "Edition 5",
        year: 2021,
        description: "Major pet adoption drive with multiple shelters",
      },
      {
        edition: "Edition 3",
        year: 2020,
        description: "Animal welfare awareness campaign with veterinary experts",
      },
    ],
    featuredContent: {
      testimonials: [
        "bigbmeetup's animal welfare events have helped many animals find forever homes.",
      ],
    },
  },
};

// Helper function to get all pillars as an array
export function getAllPillars(): PillarContent[] {
  return Object.values(PILLARS_DATA);
}

// Helper function to get a pillar by ID
export function getPillarById(id: PillarId): PillarContent {
  return PILLARS_DATA[id];
}

