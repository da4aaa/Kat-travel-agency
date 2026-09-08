export type Review = {
  name: string;
  date: string;
  rating: 5;
  quote: string;
  source: 'ToursByLocals' | 'Google Reviews' | 'TripAdvisor';
  sourceUrl: string;
};

export const reviews: Review[] = [
  {
    name: 'Trisha B.',
    date: 'January 2026',
    rating: 5,
    quote:
      "Kat took us to places I didn't even know existed. I've done tours in a dozen countries and this felt nothing like a tour - it felt like spending the day with a friend who happened to know everything about the Mayan world and where the best cenotes were hiding.",
    source: 'ToursByLocals',
    sourceUrl: 'https://www.toursbylocals.com'
  },
  {
    name: 'Rebecca M.',
    date: 'November 2025',
    rating: 5,
    quote:
      "We booked the snorkeling tour for our anniversary and Kat made it genuinely special. She knew exactly when and where the sea turtles would be. When we got to the cenote I actually teared up - it was that beautiful. And she clearly loves what she does. That comes through in everything.",
    source: 'Google Reviews',
    sourceUrl: 'https://www.google.com/maps'
  },
  {
    name: 'Emily H.',
    date: 'April 2025',
    rating: 5,
    quote:
      "We had three generations on this trip - my parents, my husband and I, and our two kids. Kat managed to keep everyone happy, which I wasn't sure was possible. My dad came back raving about the history. My kids came back raving about the turtles. Honestly, best day of the whole vacation.",
    source: 'TripAdvisor',
    sourceUrl: 'https://www.tripadvisor.com'
  },
  {
    name: 'Wayne T.',
    date: 'February 2025',
    rating: 5,
    quote:
      "Kat was waiting for us at pickup five minutes early and the day just ran perfectly from there. She's incredibly knowledgeable but wears it lightly - you learn a lot without it ever feeling like a lecture. We ended up booking a second tour with her before we even got back to the hotel.",
    source: 'ToursByLocals',
    sourceUrl: 'https://www.toursbylocals.com'
  }
];
