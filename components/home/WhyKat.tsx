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

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.title}
              className="rounded-3xl border border-text/10 bg-white/65 backdrop-blur-sm p-7 shadow-[0_16px_40px_rgba(28,28,26,0.08)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl leading-tight">{c.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-muted">{c.body}</p>
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}

