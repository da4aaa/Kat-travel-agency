export type Service = {
  title: string;
  description: string;
  icon: 'plane' | 'map' | 'users' | 'sunset';
};

export const services: Service[] = [
  {
    title: 'Airport Meet & Greet',
    description:
      "Land stress-free. I'll be waiting for you at arrivals, ready to make your first moments in Mexico smooth and welcoming.",
    icon: 'plane'
  },
  {
    title: 'Custom Itinerary Design',
    description:
      "Tell me what excites you — history, adventure, food, beaches — and I'll build a day (or more) entirely around your group.",
    icon: 'map'
  },
  {
    title: 'Family & Group Packages',
    description:
      'Traveling with kids or a larger crew? I specialize in experiences that work for everyone, from adventurous teens to grandparents.',
    icon: 'users'
  },
  {
    title: 'Multi-Day Experiences',
    description:
      'Want to go deeper into the Yucatán? I can plan and guide multi-day adventures across the entire Riviera Maya.',
    icon: 'sunset'
  }
];

