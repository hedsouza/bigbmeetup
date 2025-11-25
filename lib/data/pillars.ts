import { PillarContent, PillarId } from "@/types/pillar";
import { BRAND_COLORS } from "@/lib/constants";

// Comprehensive pillar data structure
// This structure is CMS-ready and will be migrated to Sanity in Iteration 4

export const PILLARS_DATA: Record<PillarId, PillarContent> = {
  "this-ability": {
    id: "this-ability",
    name: "This Ability",
    tagline: "Inclusion & Empowerment",
    color: BRAND_COLORS.pillars.ability,
    description: "This pillar is to showcase the Abilities of people who are differently abled thus the coinage \"This Ability\" where we champion abilities",
    fullDescription:
      "We are proud to have created a platform for the neurodiverse community of Qatar through showcasing their talent and making them feel welcome in society through activities and gatherings. It aligns with Qatar 2030 Vision of Social Development.\n\nOur first episode was held at Aziziyah Hotel in Aspire where we had a panel discussion moderated by Ahmed Al Shahrani – Guinness World Record Holder for fastest crossing of Qatar on wheelchair. The president of the Qatar blind committee Faizal Al Kooheji was one of the panelists.\n\nWe host Qatar's annual inclusive, accessible and sustainable themed Garangao (the children's cultural event during the holy month of Ramadan). Where children of all abilities are given an opportunity to participate in the cultural program.",
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
  "sports-wellness": {
    id: "sports-wellness",
    name: "Sports & Wellness",
    tagline: "Energy & Vitality",
    color: BRAND_COLORS.pillars.sports,
    description: "Bringing Inspirational people to the forefront",
    fullDescription:
      "Our sports & wellness gathering is created with intention to inspire our guests through storytelling and mindful activities like deep breathing, yoga and a talk on nutrition.\n\nWellness both physical and mental has become a key component of our modern society. Under this edition we have had themes like Championing Women Athletes of Qatar, Arab Adventurers and host sports and wellness personalities.\n\nOur esteemed panelists included maverick achievers like Sheikha Asma Al Thani (first Qatari women to summit Mt Everest), Sheikh Moe Al Thani (first Qatari to conquer the 7 summits), Mariam Farid (athlete), Mohammed Saadoon Al Kuwari (Bein Sports host and Padel player). Abdulla Al Hammadi (Celebrated cyclist), Nada Arakji (Olympian), Mona Shabab (Saudi adventurer), Nadera Al Harty (Omani mountaineer)",
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
    name: "Art and Culture",
    tagline: "Creativity & Expression",
    color: BRAND_COLORS.pillars.art,
    description: "Bringing creatives together showcasing Qatar's rich heritage.",
    fullDescription:
      "Qatar is at the forefront of Art & Culture at a global scale. Our vision here is to add value to the Art movement through featuring artists from the local and expatriate communities and provide them a platform to showcase their talent.\n\nCelebrating Artists of Qatar was the theme for our 1 st edition that was held at the prestigious Sheikh Faisal bin Qassim Al Thani Museum. It brought together multinational multidisciplinary artists , art connoisseurs and royalty together at the White Majlis.\n\nArtists we have featured and hosted included Khalifa Al Thani, Shouq Al Mana, Bouthaina Al Muftah, Maryam Faraj Al Suwaidi, Othman Al Kunji, Noor Abu Issa, Fatima Mohammed, Mohammed Faraj Al Suwaidi and more.",
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
    description: "Sustainability is the need of the hour, every hour",
    fullDescription:
      "Aligned with the 4 th pillar of Qatar 2030 vision which is Environmental Development. We organized a bespoke episode at the Qatari Heritage site of Barzan Towers where we had the Austrian and Argentinian Ambassador's as keynote speakers along with leading sustainability professionals in partnership with Qatar Museum. Her Highness Sheikha Moza's NGO Flower Each Spring was our NGO partner. Through our event we showcased heritage, art, sustainability, culture and innovation. The event included an upcycling art workshop for over 80 children. An art and science display by students from various schools, non profit organizations and artists.\n\nWe have hosted prominent personalities of the Sustainability movement in Qatar; Dr Saif Al Hajari (Qatar Foundation), Ghanim Al Sulaiti (Evergreen Organics CEO), Aisha Al Maadeed (Greener Future Founder) , Dr. Aspa Chatziefthimiou (research consultant Earthna) , Azzam Al Mannai (celebrated nature photographer), Dr Evren Tok (Associate Dean HBKU)\n\nOur 'Adopt a Beach- A micro-mangrove cleanup' is another successful teambuilding green initiative we organize. Where we conduct a micro beach cleanup at the mangroves. We have conducted field trips to mangroves where we had a talk about the importance of mangroves and the importance of keeping mangroves clean.\n\nOur Community Garden was launched at a children's inclusive nursery where we had the children plant saplings which was an educative and sensory experience. Through the activity children were given a first hand experience of nurturing nature together.",
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
  "animal-welfare": {
    id: "animal-welfare",
    name: "Animal Welfare",
    tagline: "Compassion & Care",
    color: BRAND_COLORS.pillars.animal,
    description: "Fostering love towards animals",
    fullDescription:
      "We aim to bring rescuers to potential adopters through fun and informative events promoting pet friendly venues. Our pet friendly events focus on the local rescue community along with educating the audience through veterinary professionals.",
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

