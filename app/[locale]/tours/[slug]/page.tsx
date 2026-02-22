import {notFound} from 'next/navigation';

import {getTourBySlug, tours} from '@/data/tours';
import {TourDetail} from '@/components/tours/TourDetail';

export function generateStaticParams() {
  return tours.map((t) => ({slug: t.slug}));
}

export function generateMetadata({params}: {params: {slug: string}}) {
  const tour = getTourBySlug(params.slug);
  if (!tour) {
    return {
      title: 'Tour not found | Kat B.',
      description: 'This tour could not be found.'
    };
  }

  return {
    title: `${tour.name} | Kat B. Private Tours`,
    description: tour.tagline,
    openGraph: {
      title: `${tour.name} | Kat B.`,
      description: tour.tagline,
      images: ['/og-image.jpg']
    }
  };
}

export default function TourPage({params}: {params: {slug: string}}) {
  const tour = getTourBySlug(params.slug);
  if (!tour) notFound();

  const related = tours
    .filter((x) => x.slug !== tour.slug)
    .filter((x) => x.categories.some((c) => tour.categories.includes(c)));

  return <TourDetail tour={tour} related={related} />;
}

