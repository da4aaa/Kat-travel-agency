export type TourCategory =
  | 'half-day'
  | 'full-day'
  | 'adventure'
  | 'history-ruins'
  | 'water-cenotes';

export type Tour = {
  slug: string;
  name: string;
  tagline: string;
  duration: string;
  groupSize: string;
  price: number;
  categories: TourCategory[];
  highlights: string[];
  included: string[];
  notIncluded: string[];
  image: {
    src: string;
    alt: string;
  };
  gallery: Array<{
    src: string;
    alt: string;
  }>;
};

// TODO: Replace with real photos for each tour.
export const tours: Tour[] = [
  {
    slug: 'half-day-snorkeling-adventure',
    name: 'Half Day Snorkeling Adventure',
    tagline: 'Swim with Green Sea Turtles and experience the magic of a Cenote!',
    duration: '5 hours',
    groupSize: 'Up to 10',
    price: 562,
    categories: ['half-day', 'water-cenotes'],
    highlights: [
      'Swim with wild green sea turtles',
      'Snorkel in a stunning natural cenote',
      'Private guide throughout',
      'Transportation included'
    ],
    included: ['Private transport', 'Snorkel gear', 'Guide', 'All fees'],
    notIncluded: ['Meals', 'Gratuity'],
    image: {
      // TODO: Replace with real photo
      src: 'https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1600&q=80',
      alt: 'Snorkeling in turquoise water in Mexico'
    },
    gallery: [
      {
        // TODO: Replace with real photo
        src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=80',
        alt: 'Underwater snorkeling scene'
      },
      {
        // TODO: Replace with real photo
        src: 'https://images.unsplash.com/photo-1587502536263-9298a7607c37?auto=format&fit=crop&w=1400&q=80',
        alt: 'Cenote pool with light beams'
      },
      {
        // TODO: Replace with real photo
        src: 'https://images.unsplash.com/photo-1523438097201-512ae7f9b0e9?auto=format&fit=crop&w=1400&q=80',
        alt: 'Sea turtle underwater'
      }
    ]
  },
  {
    slug: 'monkey-sanctuary-coba-ruins',
    name: "Day Tour to Monkey Sanctuary & Ancient Cobá Ruins",
    tagline:
      'Feel the thrill of a zip line and discover a cenote exploring a Maya settlement!',
    duration: '8 hours',
    groupSize: 'Up to 10',
    price: 637,
    categories: ['full-day', 'adventure', 'history-ruins'],
    highlights: [
      'Visit the Monkey Sanctuary',
      'Explore ancient Cobá ruins',
      'Zip line through the jungle',
      'Swim in a cenote'
    ],
    included: ['Private transport', 'Entrance fees', 'Guide', 'All fees'],
    notIncluded: ['Meals', 'Gratuity'],
    image: {
      // TODO: Replace with real photo
      src: 'https://images.unsplash.com/photo-1605212758411-6b5f991a1fdd?auto=format&fit=crop&w=1600&q=80',
      alt: 'Mayan ruins surrounded by jungle'
    },
    gallery: [
      {
        // TODO: Replace with real photo
        src: 'https://images.unsplash.com/photo-1583946099379-33aaec1f14d5?auto=format&fit=crop&w=1400&q=80',
        alt: 'Stone ruins in Mexico'
      },
      {
        // TODO: Replace with real photo
        src: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=1400&q=80',
        alt: 'Jungle canopy view'
      },
      {
        // TODO: Replace with real photo
        src: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1400&q=80',
        alt: 'Zip line through jungle'
      }
    ]
  },
  {
    slug: 'tulum-cenote-half-day',
    name: 'Tulum & Cenote Half Day Tour',
    tagline: 'Visit the Maya ruins and snorkel in a mystical Cenote!',
    duration: '6 hours',
    groupSize: 'Up to 10',
    price: 556,
    categories: ['half-day', 'history-ruins', 'water-cenotes'],
    highlights: [
      'Tulum cliff-top Maya ruins',
      'Caribbean Sea views',
      'Snorkeling in a cenote',
      'Private transport'
    ],
    included: ['Private transport', 'Entrance fees', 'Guide', 'All fees'],
    notIncluded: ['Meals', 'Gratuity'],
    image: {
      // TODO: Replace with real photo
      src: 'https://images.unsplash.com/photo-1587502536263-9298a7607c37?auto=format&fit=crop&w=1600&q=80',
      alt: 'Cenote in the Riviera Maya'
    },
    gallery: [
      {
        // TODO: Replace with real photo
        src: 'https://images.unsplash.com/photo-1585238342028-4ba53f41f0ce?auto=format&fit=crop&w=1400&q=80',
        alt: 'Tulum ruins by the sea'
      },
      {
        // TODO: Replace with real photo
        src: 'https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1400&q=80',
        alt: 'Turquoise water'
      },
      {
        // TODO: Replace with real photo
        src: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d?auto=format&fit=crop&w=1400&q=80',
        alt: 'Jungle path'
      }
    ]
  },
  {
    slug: 'ek-balam-express',
    name: 'Hidden Gem Discovery: Ek Balam Express',
    tagline:
      "Explore the mysteries of an abandoned city and climb one of Yucatan's tallest temples!",
    duration: '7 hours',
    groupSize: 'Up to 10',
    price: 722,
    categories: ['full-day', 'history-ruins'],
    highlights: [
      "Off-the-beaten-path Ek Balam ruins",
      "Climb one of Yucatan's tallest pyramids",
      '360° panoramic views',
      'Fewer crowds than Chichen Itza'
    ],
    included: ['Private transport', 'Entrance fees', 'Guide', 'All fees'],
    notIncluded: ['Meals', 'Gratuity'],
    image: {
      // TODO: Replace with real photo
      src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80',
      alt: 'Ancient stone pyramid in Mexico'
    },
    gallery: [
      {
        // TODO: Replace with real photo
        src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=80',
        alt: 'Mayan pyramid'
      },
      {
        // TODO: Replace with real photo
        src: 'https://images.unsplash.com/photo-1523438097201-512ae7f9b0e9?auto=format&fit=crop&w=1400&q=80',
        alt: 'Underwater scene'
      },
      {
        // TODO: Replace with real photo
        src: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5b?auto=format&fit=crop&w=1400&q=80',
        alt: 'Limestone ruins and carvings'
      }
    ]
  },
  {
    slug: 'three-cenotes-half-day',
    name: 'Three Cenotes Half-Day Tour',
    tagline: 'Experience the diversity of cenotes — each offering a unique adventure!',
    duration: '4.5 hours',
    groupSize: 'Up to 10',
    price: 594,
    categories: ['half-day', 'water-cenotes'],
    highlights: [
      'Three different types of cenotes',
      'Open, cave, and semi-open cenotes',
      'Swimming & snorkeling',
      'Private transport'
    ],
    included: ['Private transport', 'Entrance fees', 'Guide', 'All fees'],
    notIncluded: ['Meals', 'Gratuity'],
    image: {
      // TODO: Replace with real photo
      src: 'https://images.unsplash.com/photo-1587502536263-9298a7607c37?auto=format&fit=crop&w=1600&q=80',
      alt: 'Cenote with sunlight'
    },
    gallery: [
      {
        // TODO: Replace with real photo
        src: 'https://images.unsplash.com/photo-1587502536263-9298a7607c37?auto=format&fit=crop&w=1400&q=80',
        alt: 'Cenote light beams'
      },
      {
        // TODO: Replace with real photo
        src: 'https://images.unsplash.com/photo-1565619624098-cf4168a6d4d7?auto=format&fit=crop&w=1400&q=80',
        alt: 'Tropical foliage'
      },
      {
        // TODO: Replace with real photo
        src: 'https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1400&q=80',
        alt: 'Turquoise water surface'
      }
    ]
  },
  {
    slug: 'half-day-jungle-adventure',
    name: 'Half-Day Jungle Adventure',
    tagline: 'Zip line, canoe and cliff jump into the transparent waters of the Cenote!',
    duration: '5 hours',
    groupSize: 'Up to 10',
    price: 567,
    categories: ['half-day', 'adventure', 'water-cenotes'],
    highlights: [
      'Jungle zip line',
      'Canoe through the jungle',
      'Cliff jump into a cenote',
      'Crystal-clear water swimming'
    ],
    included: ['Private transport', 'Equipment', 'Guide', 'All fees'],
    notIncluded: ['Meals', 'Gratuity'],
    image: {
      // TODO: Replace with real photo
      src: 'https://images.unsplash.com/photo-1565619624098-cf4168a6d4d7?auto=format&fit=crop&w=1600&q=80',
      alt: 'Jungle greenery in the Riviera Maya'
    },
    gallery: [
      {
        // TODO: Replace with real photo
        src: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=1400&q=80',
        alt: 'Jungle canopy'
      },
      {
        // TODO: Replace with real photo
        src: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1400&q=80',
        alt: 'Zip line'
      },
      {
        // TODO: Replace with real photo
        src: 'https://images.unsplash.com/photo-1587502536263-9298a7607c37?auto=format&fit=crop&w=1400&q=80',
        alt: 'Cenote water'
      }
    ]
  }
];

export function getTourBySlug(slug: string) {
  return tours.find((t) => t.slug === slug);
}

