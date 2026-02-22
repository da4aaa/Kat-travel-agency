export type Review = {
  name: string;
  date: string;
  rating: 5;
  quote: string;
  source: 'ToursByLocals' | 'Google Reviews' | 'TripAdvisor';
};

export const reviews: Review[] = [
  {
    name: 'Trisha B.',
    date: 'January 2026',
    rating: 5,
    quote:
      'Kat was an amazing tour guide! She was knowledgeable in local history and the wildlife.',
    source: 'ToursByLocals'
  },
  {
    name: 'Rebecca M.',
    date: 'November 2025',
    rating: 5,
    quote:
      "The half-day snorkeling experience couldn't have been more wonderful. Our guide Kat is incredible.",
    source: 'Google Reviews'
  },
  {
    name: 'Emily H.',
    date: 'April 2025',
    rating: 5,
    quote:
      'I cannot recommend this tour, and especially Kat, enough! We had an excellent day touring Mayan ruins.',
    source: 'TripAdvisor'
  },
  {
    name: 'Wayne T.',
    date: 'February 2025',
    rating: 5,
    quote:
      'Kat was a fantastic host on this adventure. She met us and was ready a little before the scheduled pickup.',
    source: 'ToursByLocals'
  }
];

