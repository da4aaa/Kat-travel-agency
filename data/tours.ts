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
  /**
   * Optional looping background video for the page hero. `poster` is the frame
   * shown before it plays and the fallback when motion is reduced.
   * `objectPosition` tunes the crop - it matters for portrait footage, where a
   * full-bleed hero can only show a horizontal band of the frame.
   */
  video?: {
    src: string;
    poster: string;
    objectPosition?: string;
  };
  gallery: Array<{
    /** Still image. When `video` is set this doubles as the poster frame. */
    src: string;
    alt: string;
    /**
     * Optional looping clip for this tile. `objectPosition` tunes the crop,
     * which matters for portrait footage in a landscape tile.
     */
    video?: string;
    objectPosition?: string;
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
      src: '/tours/snorkeling/hero-turtle-surfacing.jpg',
      alt: 'Sea turtle surfacing for air with the palm-lined shoreline behind'
    },
    gallery: [
      {
        src: '/tours/snorkeling/getting-ready.jpg',
        alt: 'Two guests in life jackets fitting their snorkel masks in shallow water by the beach'
      },
      {
        src: '/tours/snorkeling/snorkeler-underwater.jpg',
        alt: 'Snorkeler underwater giving a peace sign to the camera'
      },
      {
        src: '/tours/snorkeling/turtle-swimming.jpg',
        alt: 'Green sea turtle gliding over the sandy seabed in clear shallow water'
      },
      {
        src: '/tours/snorkeling/turtle-surfacing.jpg',
        alt: 'Sea turtle surfacing for air with the palm-lined shoreline behind'
      },
      {
        src: '/tours/snorkeling/cenote-entrance.jpg',
        alt: 'Jungle cenote entrance with clear green water below a limestone overhang'
      },
      {
        src: '/tours/snorkeling/cenote-open-swim.jpg',
        alt: 'Snorkeler floating across an open jungle cenote ringed by palms'
      },
      {
        src: '/tours/snorkeling/cenote-cave-swimmers.jpg',
        alt: 'Two snorkelers swimming through a cave cenote among hanging stalactites'
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
      src: '/tours/coba/hero-temple-doorway.jpg',
      alt: 'Guest silhouetted in the stone passageway of a Mayan temple'
    },
    gallery: [
      {
        src: '/tours/coba/coba-path.jpg',
        alt: 'Two guests walking the shaded main path into the Cobá site'
      },
      {
        src: '/tours/coba/jungle-trail.jpg',
        alt: 'Small group following a narrow jungle trail between the ruins'
      },
      {
        src: '/tours/coba/coba-ruins.jpg',
        alt: 'Stone temple at Cobá framed by palm fronds'
      },
      {
        src: '/tours/coba/nohoch-mul-pyramid.jpg',
        alt: 'Guest standing at the foot of the Nohoch Mul pyramid'
      },
      {
        src: '/tours/coba/pyramid-summit-view.jpg',
        alt: 'Guest at the top of the pyramid with jungle stretching to the horizon'
      },
      {
        src: '/tours/coba/temple-doorway.jpg',
        alt: 'Guest silhouetted in the stone passageway of a Mayan temple'
      },
      {
        src: '/tours/coba/spider-monkeys.jpg',
        alt: 'Two spider monkeys moving through the branches overhead'
      },
      {
        src: '/tours/coba/mayan-ceremony.jpg',
        alt: 'Mayan elder performing a copal blessing ceremony'
      },
      {
        src: '/tours/coba/cenote-climb.jpg',
        alt: 'Guest climbing the wooden ladder out of a jungle cenote'
      },
      {
        src: '/tours/coba/zipline-lagoon.jpg',
        alt: 'Guest riding a zipline across the lagoon at Cobá'
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
      src: '/tours/tulum/hero-palace-palms.jpg',
      alt: 'Stone palace at the Tulum ruins framed by palm trees'
    },
    video: {
      src: '/tours/tulum/hero.mp4',
      poster: '/tours/tulum/sea-clip-poster.jpg',
      // Portrait 9:16 footage in a wide hero, so only a band of it is visible.
      // 60% lands on the surf line rather than the empty sky at the top.
      objectPosition: 'center 60%'
    },
    gallery: [
      {
        src: '/tours/tulum/sea-clip-poster.jpg',
        alt: 'The Caribbean seen from the cliffs at Tulum',
        video: '/tours/tulum/hero.mp4',
        // Portrait 9:16 footage in a 4:3 tile, so only a band shows.
        // 60% lands on the surf line rather than the empty sky at the top.
        objectPosition: 'center 60%'
      },
      {
        src: '/tours/tulum/cliff-temple.jpg',
        alt: 'The cliff-top temple at Tulum above the turquoise Caribbean'
      },
      {
        src: '/tours/tulum/el-castillo.jpg',
        alt: 'El Castillo, the main pyramid at Tulum, under dramatic cloud'
      },
      {
        src: '/tours/tulum/palace-palms.jpg',
        alt: 'Stone palace at the Tulum ruins framed by palm trees'
      },
      {
        src: '/tours/tulum/columned-hall.jpg',
        alt: 'Standing columns inside a roofless Mayan hall at Tulum'
      },
      {
        src: '/tours/tulum/stucco-carving.jpg',
        alt: 'Carved stucco mask on a temple corner, original pigment still visible'
      },
      {
        src: '/tours/tulum/iguana.jpg',
        alt: 'Iguana basking on a thatched roof against a deep blue sky'
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
      src: '/tours/cenote-light.jpg',
      alt: 'Cenote with sunlight'
    },
    gallery: [
      {
        // TODO: Replace with real photo
        src: '/tours/cenote-light.jpg',
        alt: 'Cenote light beams'
      },
      {
        // TODO: Replace with real photo
        src: '/tours/jungle.jpg',
        alt: 'Tropical foliage'
      },
      {
        // TODO: Replace with real photo
        src: '/tours/snorkeling.jpg',
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
      src: '/tours/jungle.jpg',
      alt: 'Jungle greenery in the Riviera Maya'
    },
    gallery: [
      {
        // TODO: Replace with real photo
        src: '/tours/jungle-canopy.jpg',
        alt: 'Jungle canopy'
      },
      {
        // TODO: Replace with real photo
        src: '/tours/zipline.jpg',
        alt: 'Zip line'
      },
      {
        // TODO: Replace with real photo
        src: '/tours/cenote-underwater.jpg',
        alt: 'Cenote water'
      }
    ]
  }
];

export function getTourBySlug(slug: string) {
  return tours.find((t) => t.slug === slug);
}
