import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Lock, Waves, Globe} from 'lucide-react';

import {AnimatedSection} from '@/components/shared/AnimatedSection';
import {SectionHeading} from '@/components/shared/SectionHeading';

export function WhyKat() {
  const t = useTranslations();

  const cards = [
    {
      icon: Waves,
      title: t('whyKat.local.title'),
      body: t('whyKat.local.body')
    },
    {
      icon: Lock,
      title: t('whyKat.private.title'),
      body: t('whyKat.private.body')
    },
    {
      icon: Globe,
      title: t('whyKat.languages.title'),
      body: t('whyKat.languages.body')
    }
  ];

  return (
    <AnimatedSection className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <SectionHeading eyebrow={t('whyKat.eyebrow')} title={t('whyKat.title')} />

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        {/* Image Section - Upload your photo to public/kat-photo.jpg */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-text/10 bg-surface shadow-card">
          <Image
            src="/kat-photo.jpg"
            alt="Kat B. - Private Tour Guide in Playa del Carmen"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                'linear-gradient(180deg, rgba(240,249,255,0.00) 0%, rgba(6,182,212,0.15) 100%)'
            }}
          />
        </div>

        {/* Cards Section */}
        <div className="grid gap-6">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="rounded-3xl border border-text/10 backdrop-blur-sm p-7"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl leading-tight">{c.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-text-muted">{c.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

