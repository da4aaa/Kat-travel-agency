'use client';

import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="mt-20 border-t border-text/10 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-serif text-2xl tracking-tight text-text">
              Kat B.
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-text-muted">
              Private tours in Playa del Carmen, Mexico
            </p>
            <p className="mt-5 text-xs text-text-muted">
              English · Español · Русский
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-text-muted">
              {t('nav.tours')}
            </div>
            <nav className="mt-4 flex flex-col gap-2 text-sm">
              <Link className="text-text/80 hover:text-text" href="/tours">
                {t('nav.tours')}
              </Link>
              <Link className="text-text/80 hover:text-text" href="/services">
                {t('nav.services')}
              </Link>
              <Link className="text-text/80 hover:text-text" href="/about">
                {t('nav.about')}
              </Link>
              <Link className="text-text/80 hover:text-text" href="/contact">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-text-muted">
              ToursByLocals
            </div>
            <p className="mt-4 text-sm leading-6 text-text-muted">
              See reviews and ratings on ToursByLocals.
            </p>
            <a
              className="mt-4 inline-block text-sm font-medium text-accent hover:text-accent/90"
              href="https://www.toursbylocals.com/tour-guides/mexico/playa-del-carmen/guide-profile/kat-b-664d223396689af34337a5f5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ToursByLocals profile"
            >
              {t('reviews.source')} →
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-text/10 pt-6 text-xs text-text-muted md:flex-row md:items-center md:justify-between">
          <span>© 2026 Kat B. Private Tours</span>
          <span className="opacity-80">{t('finalCta.cta')}</span>
        </div>
      </div>
    </footer>
  );
}

