import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {MapPin, Users, Clock, Car} from 'lucide-react';

import type {Tour} from '@/data/tours';
import {Link} from '@/i18n/navigation';
import {Button} from '@/components/shared/Button';
import {ContactDropdown} from '@/components/shared/ContactDropdown';
import {TourTabs} from './TourTabs';
import {TourCard} from './TourCard';

export function TourDetail({
  tour,
  related
}: {
  tour: Tour;
  related: Tour[];
}) {
  const t = useTranslations();

  return (
    <div className="pt-24 bg-bg">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={tour.image.src}
            alt={tour.image.alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(120deg, rgba(250,250,247,0.05) 0%, rgba(26,107,90,0.52) 100%)'
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-28 md:pt-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl leading-[1.0] text-white md:text-6xl">
              {tour.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
              {tour.tagline}
            </p>
          </div>

          <div className="mt-10 grid gap-3 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm p-5 md:grid-cols-4">
            <div className="flex items-center gap-3 text-white/90">
              <Clock className="h-5 w-5 text-accent-light" aria-hidden="true" />
              <div>
                <div className="text-xs text-white/70">{t('tour.badge.duration')}</div>
                <div className="text-sm font-medium">{tour.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Users className="h-5 w-5 text-accent-light" aria-hidden="true" />
              <div>
                <div className="text-xs text-white/70">{t('tour.badge.group')}</div>
                <div className="text-sm font-medium">{tour.groupSize}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Car className="h-5 w-5 text-accent-light" aria-hidden="true" />
              <div>
                <div className="text-xs text-white/70">{t('tourDetail.transportIncluded')}</div>
                <div className="text-sm font-medium">{t('trust.based.subtitle')}</div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 text-white/90">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent-light" aria-hidden="true" />
                <div>
                  <div className="text-xs text-white/70">{t('tour.card.from')}</div>
                  <div className="text-sm font-medium">${tour.price}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20 pb-32">
        <TourTabs tour={tour} />

        <div className="mt-14">
          <h2 className="text-2xl md:text-3xl">{t('tourDetail.gallery')}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {tour.gallery.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-text/10"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl">{t('tourDetail.related')}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.slice(0, 3).map((r) => (
                <TourCard key={r.slug} tour={r} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Sticky Bottom Booking Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-text/10 bg-white/90 backdrop-blur-md shadow-[0_-8px_32px_rgba(28,28,26,0.12)]">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs text-text-muted">{t('tour.card.from')}</div>
              <div className="text-2xl font-medium text-text">${tour.price}</div>
            </div>
            <div className="flex gap-3">
              <ContactDropdown tourName={tour.name} variant="outline" className="hidden md:flex bg-white/70 backdrop-blur-sm" />
              <Link href="/contact">
                <Button>{t('tourDetail.bookThis')}</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

