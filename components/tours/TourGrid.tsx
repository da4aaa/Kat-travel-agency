import type {Tour} from '@/data/tours';
import {TourCard} from './TourCard';

export function TourGrid({items}: {items: Tour[]}) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {items.map((tour) => (
        <TourCard key={tour.slug} tour={tour} />
      ))}
    </div>
  );
}

