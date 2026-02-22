'use client';

import {useTranslations} from 'next-intl';
import {ContactDropdown} from '@/components/shared/ContactDropdown';

export function FinalCTA() {
  const t = useTranslations();

  return (
    <section className="bg-surface border-t border-text/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div
          className="rounded-3xl border border-text/10 bg-white/65 backdrop-blur-sm p-10 md:p-14"
          style={{
            boxShadow: 'var(--shadow-soft)'
          }}
        >
          <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr] md:items-center">
            <div>
              <h2 className="text-3xl leading-[1.02] md:text-4xl">
                {t('finalCta.title')}
              </h2>
              <p className="mt-4 text-base leading-7 text-text-muted">
                {t('finalCta.body')}
              </p>
            </div>
            <div className="md:text-right">
              <ContactDropdown size="lg" className="w-full md:w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

