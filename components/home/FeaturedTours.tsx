import {useTranslations} from 'next-intl';

import {tours} from '@/data/tours';
import {Link} from '@/i18n/navigation';
import {AnimatedSection} from '@/components/shared/AnimatedSection';
import {SectionHeading} from '@/components/shared/SectionHeading';
import {TourCard} from '@/components/tours/TourCard';
import {Button} from '@/components/shared/Button';

export function FeaturedTours() {
  const t = useTranslations();
  const featured = tours.slice(0, 3);

  return (
    <AnimatedSection className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow={t('featuredTours.eyebrow')}
          title={t('featuredTours.title')}
        />
        <Link href="/tours" className="w-full md:w-auto">
          <Button variant="outline" className="w-full md:w-auto">
            {t('featuredTours.cta')}
          </Button>
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {featured.map((tour) => (
          <TourCard key={tour.slug} tour={tour} />
        ))}
      </div>
    </AnimatedSection>
  );
}

