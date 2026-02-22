import {useTranslations} from 'next-intl';

import {tours, type TourCategory} from '@/data/tours';
import {TourFilter} from '@/components/tours/TourFilter';
import {TourGrid} from '@/components/tours/TourGrid';

export const metadata = {
  title: 'Tours | Kat B. — Private Experiences in Riviera Maya',
  description:
    "Browse private tours with Kat: cenotes, snorkeling, Mayan ruins, jungle adventure — tailored to your group.",
  openGraph: {
    title: 'Explore with Kat',
    description: 'Private tours across the Riviera Maya.',
    images: ['/og-image.jpg']
  }
};

function parseCategory(value: string | string[] | undefined): TourCategory | null {
  if (!value || Array.isArray(value)) return null;
  const allowed: TourCategory[] = [
    'half-day',
    'full-day',
    'adventure',
    'history-ruins',
    'water-cenotes'
  ];
  return allowed.includes(value as TourCategory) ? (value as TourCategory) : null;
}

export default function ToursPage({
  searchParams
}: {
  searchParams?: {category?: string};
}) {
  const t = useTranslations();
  const active = parseCategory(searchParams?.category);
  const filtered = active ? tours.filter((x) => x.categories.includes(active)) : tours;

  return (
    <div className="pt-24 mx-auto max-w-6xl px-6 py-14 md:py-20">
      <header className="max-w-2xl">
        <h1 className="text-4xl leading-[1.02] md:text-5xl">{t('tours.title')}</h1>
        <p className="mt-4 text-base leading-7 text-text-muted">
          {t('tours.subtitle')}
        </p>
      </header>

      <TourFilter active={active} />
      <TourGrid items={filtered} />
    </div>
  );
}

