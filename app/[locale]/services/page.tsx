import {useTranslations} from 'next-intl';
import {Map, Plane, Sunset, Users} from 'lucide-react';

import {AnimatedSection} from '@/components/shared/AnimatedSection';

export const metadata = {
  title: 'Services | Kat B. Private Tours',
  description:
    'Airport meet & greet, custom itineraries, family-friendly planning, and multi-day experiences in the Riviera Maya.',
  openGraph: {
    title: "Need Something Specific? I've Got You.",
    description:
      'Extra services to make your Mexico trip smooth, personal, and adventure-ready.',
    images: ['/og-image.jpg']
  }
};

export default function ServicesPage() {
  const t = useTranslations();

  const items = [
    {
      icon: Plane,
      title: t('services.items.airport.title'),
      body: t('services.items.airport.body')
    },
    {
      icon: Map,
      title: t('services.items.itinerary.title'),
      body: t('services.items.itinerary.body')
    },
    {
      icon: Users,
      title: t('services.items.family.title'),
      body: t('services.items.family.body')
    },
    {
      icon: Sunset,
      title: t('services.items.multiday.title'),
      body: t('services.items.multiday.body')
    }
  ];

  return (
    <div className="pt-24 mx-auto max-w-6xl px-6 py-14 md:py-20">
      <header className="max-w-2xl">
        <h1 className="text-4xl leading-[1.02] md:text-5xl">{t('services.title')}</h1>
      </header>

      <AnimatedSection className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-3xl border border-text/10 bg-white/70 backdrop-blur-sm p-7 shadow-[0_16px_40px_rgba(28,28,26,0.08)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-2xl leading-tight">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-text-muted">{item.body}</p>
            </div>
          );
        })}
      </AnimatedSection>

      <div className="mt-16 rounded-3xl border border-text/10 bg-surface p-10 md:p-12">
        <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr] md:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl">{t('services.cta')}</h2>
            <p className="mt-3 text-sm leading-6 text-text-muted">
              {t('services.bottomNote')}
            </p>
          </div>
          <div className="md:text-right">
            <a
              href="https://wa.me/52XXXXXXXXXX?text=Hi+Kat%2C+I%27d+like+to+ask+about+services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent/90 transition-colors md:w-auto"
            >
              {t('contact.whatsapp')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

