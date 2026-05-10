import {useTranslations} from 'next-intl';
import {Map, Plane, Sunset, Users} from 'lucide-react';

import {AnimatedSection} from '@/components/shared/AnimatedSection';
import {SectionHeading} from '@/components/shared/SectionHeading';

export function Services() {
  const t = useTranslations();

  const items = [
    {icon: Plane, title: t('services.transport.title'), body: t('services.transport.body')},
    {icon: Map, title: t('services.custom.title'), body: t('services.custom.body')},
    {icon: Users, title: t('services.private.title'), body: t('services.private.body')},
    {icon: Sunset, title: t('services.languages.title'), body: t('services.languages.body')},
  ];

  return (
    <AnimatedSection id="services" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <SectionHeading eyebrow="How it works" title={t('services.title')} />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map(item => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-3xl border border-text/10 bg-white/70 backdrop-blur-sm p-7 shadow-[0_16px_40px_rgba(28,28,26,0.08)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl leading-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-muted">{item.body}</p>
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
