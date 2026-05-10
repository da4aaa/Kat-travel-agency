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
  description: string;
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
    name: 'Half-Day Snorkeling Adventure',
    tagline: 'Swim alongside wild sea turtles and float through a cenote most tourists never find.',
    description: 'This is the tour I recommend most to first-time visitors — and the one people message me about months later. We start at a snorkeling spot where wild green sea turtles have been coming for years. Then we head to a cenote I found on my own early in my guiding days: crystal clear, almost no crowds, and the kind of beautiful that makes you stop talking.',
    duration: '5 hours',
    groupSize: 'Up to 10',
    price: 562,
    categories: ['half-day', 'water-cenotes'],
    highlights: [
      'Swim alongside wild green sea turtles in their natural habitat',
      'Float through a stunning, crowd-free natural cenote',
      'Small group — just your people, no strangers',
      'All snorkel gear provided, nothing to rent or carry',
      'Hotel pickup and drop-off included'
    ],
    included: ['Private transport', 'Snorkel gear', 'Life jackets', 'Guide', 'All entrance fees'],
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
    name: 'Monkey Sanctuary & Ancient Cobá Ruins',
    tagline: 'Spider monkeys, a climbable pyramid, a zip line through the canopy — and a cenote to end it all.',
    description: "Cobá doesn't get the attention Chichen Itza does, which is exactly why I love taking people there. You can actually climb the pyramid — one of the last in Mexico where that's still allowed — and the view from the top is something you don't forget. We also stop at a monkey sanctuary where the animals roam free, and finish with a zip line and cenote swim. Full day, genuinely full.",
    duration: '8 hours',
    groupSize: 'Up to 10',
    price: 637,
    categories: ['full-day', 'adventure', 'history-ruins'],
    highlights: [
      'Hang out with free-roaming spider monkeys at a wildlife sanctuary',
      'Climb the Cobá pyramid — one of the few still open to visitors',
      'Zip line through dense jungle canopy',
      'Cool off with a cenote swim at the end of the day',
      'Everything included — transport, fees, gear'
    ],
    included: ['Private transport', 'All entrance fees', 'Zip line', 'Guide'],
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
    name: 'Tulum Ruins & Cenote Half-Day',
    tagline: 'Cliff-top Mayan ruins over the Caribbean, then straight into the clearest water you\'ve ever swum in.',
    description: "Tulum is one of the only Mayan sites built right on the coast — so when you're standing on those ruins, you've got jungle behind you and the Caribbean in front of you. We spend real time there (not the rushed 20-minute version), and then head to a cenote nearby that I've been going to for years. The light through the cave ceiling hits the water in a way that genuinely stops people mid-sentence.",
    duration: '6 hours',
    groupSize: 'Up to 10',
    price: 556,
    categories: ['half-day', 'history-ruins', 'water-cenotes'],
    highlights: [
      'Tulum cliff-top ruins with views of the Caribbean Sea',
      'Enough time to actually explore — not a rushed walk-through',
      'Swim in a cenote with otherworldly cave lighting',
      'Private transport door-to-door',
      'All entrance fees included'
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
    name: 'Ek Balam: The Ruin Most People Walk Past',
    tagline: 'Climb one of the Yucatán\'s tallest pyramids. Almost no crowds. Carvings that still have their original color.',
    description: "Everyone goes to Chichen Itza. Almost no one goes to Ek Balam. That's the point. This is a Mayan city that feels genuinely abandoned — intricate carvings, a pyramid you can climb to the top of, and views across the jungle canopy in every direction. I've been bringing people here for years because the experience is everything the famous sites promise but rarely deliver: space, silence, and the feeling that you actually discovered something.",
    duration: '7 hours',
    groupSize: 'Up to 10',
    price: 722,
    categories: ['full-day', 'history-ruins'],
    highlights: [
      'Ek Balam — stunning, uncrowded, and still largely unexcavated',
      'Climb one of the tallest accessible pyramids in the Yucatán',
      '360° panoramic views across unbroken jungle',
      'Original Mayan carvings with intact color — incredibly rare',
      'Small group, private guide, no tour bus in sight'
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
    name: 'Three Cenotes Half-Day',
    tagline: 'Open sky, cave ceiling, and everything in between — three completely different cenotes in one morning.',
    description: "Not all cenotes are the same, and most visitors never realize that. On this tour we visit three in one go: an open cenote under full sky, a cave cenote lit by stalactites and filtered light, and a semi-open one that's somewhere between the two. Each one feels like a different planet. I've picked these three specifically because they're close enough to flow smoothly, and different enough that every stop is a new experience.",
    duration: '4.5 hours',
    groupSize: 'Up to 10',
    price: 594,
    categories: ['half-day', 'water-cenotes'],
    highlights: [
      'Three cenotes — open, cave, and semi-open — each completely different',
      'Swimming and snorkeling at each stop',
      'Back at your hotel before midday',
      'All gear provided',
      'Private transport included'
    ],
    included: ['Private transport', 'Entrance fees', 'Snorkel gear', 'Guide'],
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
    tagline: 'Zip line over the canopy, paddle a canoe through the jungle, then jump off a cliff into a cenote.',
    description: "This one is for the group that wants to move. We start with a zip line run over the jungle canopy, then paddle canoes through a stretch of jungle that feels completely wild. The finale is a cenote with a cliff jump — optional, I should say, but almost everyone does it. The water is so clear you can see the bottom from up top. It's the kind of morning that still comes up at dinner three days later.",
    duration: '5 hours',
    groupSize: 'Up to 10',
    price: 567,
    categories: ['half-day', 'adventure', 'water-cenotes'],
    highlights: [
      'Jungle zip line with views across the canopy',
      'Canoe through untouched jungle — no motors, no noise',
      'Cliff jump into a crystal-clear cenote (optional but worth it)',
      'All equipment and safety gear included',
      'Hotel pickup and drop-off included'
    ],
    included: ['Private transport', 'All equipment', 'Safety gear', 'Guide', 'All fees'],
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
