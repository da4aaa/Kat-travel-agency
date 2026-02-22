import Image from 'next/image';
import {useTranslations} from 'next-intl';

import type {Tour} from '@/data/tours';
import {Link} from '@/i18n/navigation';

export function TourCard({tour}: {tour: Tour}) {
  const t = useTranslations();

  return (
    <article className="group overflow-hidden rounded-3xl border border-text/10 bg-white shadow-[0_16px_40px_rgba(28,28,26,0.10)]">
      <Link href={`/tours/${tour.slug}`} className="block">
        <div className="relative h-56">
          <Image
            src={tour.image.src}
            alt={tour.image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                'linear-gradient(180deg, rgba(28,28,26,0.05) 0%, rgba(28,28,26,0.62) 100%)'
            }}
          />

          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs text-text backdrop-blur-sm border border-text/10">
            <span className="text-text-muted">{t('tour.badge.duration')}:</span>
            <span className="font-medium">{tour.duration}</span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl leading-tight">{tour.name}</h3>
          <p className="mt-2 text-sm leading-6 text-text-muted">{tour.tagline}</p>

          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="text-xs text-text-muted">
              {t('tour.badge.group')}: <span className="text-text">{tour.groupSize}</span>
            </div>
            <div className="text-sm font-medium text-text">
              <span className="text-text-muted mr-2">{t('tour.card.from')}</span>${tour.price}
            </div>
          </div>

          <div className="mt-6 inline-flex text-sm font-medium text-accent">
            {t('tour.card.details')} →
          </div>
        </div>
      </Link>
    </article>
  );
}

