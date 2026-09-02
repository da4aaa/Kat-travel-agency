/**
 * Fake data for the "Create your own experience" builder.
 *
 * How this works: the guest picks ONE main attraction, and the builder then
 * offers only the add-ons listed under that attraction. Each main attraction
 * therefore owns its own suggestion list - edit the `addOns` array on the
 * attraction you want to change and nothing else is affected.
 *
 * `icon` is a lucide-react icon name. Any name exported by lucide-react works;
 * the modal falls back to a compass if a name is misspelled.
 *
 * TODO: placeholder pricing and durations - replace with real numbers.
 */

export type BuilderAddOn = {
  id: string;
  name: string;
  blurb: string;
  /** Extra time this adds to the day, shown to the guest. */
  duration: string;
  /** Extra cost per group, in USD. */
  price: number;
  icon: string;
};

export type BuilderAttraction = {
  id: string;
  name: string;
  blurb: string;
  icon: string;
  /** Base duration before any add-ons. */
  duration: string;
  /** Base price per group, in USD. */
  basePrice: number;
  /** The only add-ons offered once this attraction is chosen. */
  addOns: BuilderAddOn[];
};

export const attractions: BuilderAttraction[] = [
  {
    id: 'sea-turtles',
    name: 'Swimming with sea turtles',
    blurb: 'Snorkel with wild green turtles in the shallow bay at Akumal.',
    icon: 'Turtle',
    duration: '2 hours',
    basePrice: 340,
    addOns: [
      {
        id: 'reef-snorkel',
        name: 'Coral reef snorkel',
        blurb: 'A second stop on the reef just offshore, with rays and parrotfish.',
        duration: '+1 hour',
        price: 90,
        icon: 'Fish'
      },
      {
        id: 'cenote-rinse',
        name: 'Cenote swim afterwards',
        blurb: 'Rinse off the salt in a quiet freshwater cenote on the way back.',
        duration: '+1.5 hours',
        price: 120,
        icon: 'Droplets'
      },
      {
        id: 'beach-lunch',
        name: 'Beachfront lunch',
        blurb: 'Fresh ceviche and cold drinks at a local spot on the sand.',
        duration: '+1 hour',
        price: 75,
        icon: 'Utensils'
      },
      {
        id: 'photos',
        name: 'Underwater photos',
        blurb: 'I shoot the whole swim and send you the full gallery afterwards.',
        duration: 'No extra time',
        price: 60,
        icon: 'Camera'
      }
    ]
  },
  {
    id: 'cenotes',
    name: 'Cenote hopping',
    blurb: 'Open-sky, cave, and half-collapsed cenotes - each one completely different.',
    icon: 'Droplets',
    duration: '4 hours',
    basePrice: 420,
    addOns: [
      {
        id: 'third-cenote',
        name: 'Add a third cenote',
        blurb: 'A cave cenote with a stalactite ceiling, well off the main road.',
        duration: '+1.5 hours',
        price: 110,
        icon: 'Waves'
      },
      {
        id: 'zipline',
        name: 'Zipline over the water',
        blurb: 'A short zipline that drops you straight into the cenote.',
        duration: '+45 min',
        price: 85,
        icon: 'Mountain'
      },
      {
        id: 'jungle-walk',
        name: 'Guided jungle walk',
        blurb: 'A slow loop through the dry forest between the cenotes.',
        duration: '+1 hour',
        price: 70,
        icon: 'TreePalm'
      },
      {
        id: 'picnic',
        name: 'Picnic in the jungle',
        blurb: 'Homemade lunch set up in the shade between swims.',
        duration: '+1 hour',
        price: 80,
        icon: 'Utensils'
      }
    ]
  },
  {
    id: 'mayan-ruins',
    name: 'Mayan ruins',
    blurb: 'Ancient cities with real history and, if we go early, almost no one else.',
    icon: 'Landmark',
    duration: '5 hours',
    basePrice: 520,
    addOns: [
      {
        id: 'sunrise-start',
        name: 'Sunrise start',
        blurb: 'We arrive at opening, before the buses and the heat.',
        duration: 'Earlier start',
        price: 55,
        icon: 'Sunrise'
      },
      {
        id: 'village-stop',
        name: 'Local village stop',
        blurb: 'Meet a family still making tortillas and textiles by hand.',
        duration: '+1.5 hours',
        price: 95,
        icon: 'MapPin'
      },
      {
        id: 'cenote-after-ruins',
        name: 'Cenote swim afterwards',
        blurb: 'Cool off in a cenote a few minutes from the site.',
        duration: '+1.5 hours',
        price: 120,
        icon: 'Droplets'
      },
      {
        id: 'lunch-yucatecan',
        name: 'Yucatecan lunch',
        blurb: 'Cochinita pibil at the place the guides actually eat at.',
        duration: '+1 hour',
        price: 75,
        icon: 'Utensils'
      }
    ]
  },
  {
    id: 'tulum',
    name: 'Tulum & the coast',
    blurb: 'The only Mayan city built on the sea, plus the beaches below it.',
    icon: 'Waves',
    duration: '5 hours',
    basePrice: 480,
    addOns: [
      {
        id: 'beach-time',
        name: 'Beach time after the ruins',
        blurb: 'An hour or two on the sand right below the cliffs.',
        duration: '+2 hours',
        price: 60,
        icon: 'Sun'
      },
      {
        id: 'lagoon',
        name: 'Kaan Luum lagoon',
        blurb: 'The turquoise lagoon with the deep blue cenote in the middle.',
        duration: '+2 hours',
        price: 130,
        icon: 'Droplets'
      },
      {
        id: 'bike-tour',
        name: 'Bike through the site',
        blurb: 'Cover more ground on two wheels instead of walking.',
        duration: '+30 min',
        price: 45,
        icon: 'Bike'
      },
      {
        id: 'boat-ride',
        name: 'Boat ride in Sian Ka\'an',
        blurb: 'Into the biosphere reserve to look for dolphins and birds.',
        duration: '+3 hours',
        price: 210,
        icon: 'Ship'
      }
    ]
  },
  {
    id: 'jungle-adventure',
    name: 'Jungle adventure',
    blurb: 'Ziplines, rope bridges, and cenotes you have to climb down into.',
    icon: 'TreePalm',
    duration: '4 hours',
    basePrice: 450,
    addOns: [
      {
        id: 'atv',
        name: 'ATV through the trails',
        blurb: 'Muddy, loud, and the part everyone talks about afterwards.',
        duration: '+1.5 hours',
        price: 140,
        icon: 'Compass'
      },
      {
        id: 'rappel',
        name: 'Rappel into a cenote',
        blurb: 'Drop in from the roof of a cave cenote on a harness.',
        duration: '+1 hour',
        price: 115,
        icon: 'Mountain'
      },
      {
        id: 'monkeys',
        name: 'Monkey sanctuary',
        blurb: 'A rescue sanctuary where spider monkeys come to you.',
        duration: '+2 hours',
        price: 125,
        icon: 'Bird'
      },
      {
        id: 'night-jungle',
        name: 'Stay for sunset',
        blurb: 'The jungle gets loud at dusk. Worth staying for.',
        duration: '+1.5 hours',
        price: 90,
        icon: 'Sunrise'
      }
    ]
  },
  {
    id: 'isla-mujeres',
    name: 'Isla Mujeres by boat',
    blurb: 'A full day on the water, with snorkel stops on the way out and back.',
    icon: 'Ship',
    duration: '7 hours',
    basePrice: 690,
    addOns: [
      {
        id: 'reef-stop',
        name: 'Extra reef stop',
        blurb: 'One more snorkel spot on the Mesoamerican reef.',
        duration: '+1 hour',
        price: 95,
        icon: 'Fish'
      },
      {
        id: 'golf-cart',
        name: 'Golf cart on the island',
        blurb: 'The way locals get around. Punta Sur and the far beaches.',
        duration: '+2 hours',
        price: 85,
        icon: 'Compass'
      },
      {
        id: 'seafood',
        name: 'Seafood lunch on the island',
        blurb: 'Grilled catch of the day at a family-run place by the water.',
        duration: '+1 hour',
        price: 90,
        icon: 'Utensils'
      },
      {
        id: 'sunset-return',
        name: 'Sunset sail back',
        blurb: 'Time the return so you cross the channel at golden hour.',
        duration: '+1 hour',
        price: 70,
        icon: 'Sun'
      }
    ]
  }
];
