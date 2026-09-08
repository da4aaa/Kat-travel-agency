export type Service = {
  title: string;
  description: string;
  icon: 'plane' | 'map' | 'users' | 'sunset';
};

export const services: Service[] = [
  {
    title: 'Airport Meet & Greet',
    description:
      "Land and see a familiar face. I'll be at arrivals before your flight touches down - no figuring out taxis, no confusion, no stressful first hour in a new country.",
    icon: 'plane'
  },
  {
    title: 'Custom Day Design',
    description:
      "Tell me what your group loves - history, adventure, food, water, all of it - and I'll build a day that actually fits. No preset packages, no compromises.",
    icon: 'map'
  },
  {
    title: 'Family & Group Trips',
    description:
      'Three generations? Mixed ages? Excited kids and less-excited grandparents? I do this well. I\'ll design a day where everyone has a real reason to be glad they came.',
    icon: 'users'
  },
  {
    title: 'Multi-Day Yucatán Trips',
    description:
      "One day is never quite enough. If you want to go deeper - more ruins, more cenotes, more of the Yucatán - I can plan and guide multi-day trips across the entire region.",
    icon: 'sunset'
  }
];
