import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Globe, MapPin, Star, Users} from 'lucide-react';

import {reviews} from '@/data/reviews';
import {ReviewCard} from '@/components/shared/ReviewCard';
import {AnimatedSection} from '@/components/shared/AnimatedSection';

export const metadata = {
  title: 'About Kat | Private Tour Guide in Playa del Carmen',
  description:
    'Meet Kat: a private Riviera Maya tour guide speaking English, Spanish, and Russian — focused on hidden cenotes, real local spots, and private experiences.',
  openGraph: {
    title: "I'm Kat — and Mexico is my backyard.",
    description: 'A personal, private-guide approach to the Riviera Maya.',
    images: ['/og-image.jpg']
  }
};

export default function AboutPage() {
  const t = useTranslations();

  return (
    <div className="pt-48 pb-14 md:pb-20 mx-auto max-w-6xl px-6">
      <AnimatedSection className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-text/10 bg-surface">
          {/* TODO: Replace with real Kat photo */}
          <Image
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80"
            alt="Portrait-style travel photo placeholder"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                'linear-gradient(180deg, rgba(250,250,247,0.00) 0%, rgba(26,107,90,0.25) 100%)'
            }}
          />
        </div>

        <div>
          <h1 className="text-4xl leading-[1.02] md:text-5xl">{t('about.title')}</h1>
          <p className="mt-5 text-base leading-7 text-text-muted">{t('about.bio')}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {icon: Star, text: t('about.credentials.rating')},
              {icon: Globe, text: t('about.credentials.languages')},
              {icon: Users, text: t('about.credentials.private')},
              {icon: MapPin, text: t('about.credentials.based')}
            ].map((x) => {
              const Icon = x.icon;
              return (
                <div
                  key={x.text}
                  className="flex items-center gap-3 rounded-2xl border border-text/10 bg-white/70 backdrop-blur-sm p-4"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="text-sm font-medium text-text">{x.text}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl">{t('about.different.title')}</h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-text-muted">
              {[
                t('about.different.b1'),
                t('about.different.b2'),
                t('about.different.b3'),
                t('about.different.b4'),
                t('about.different.b5')
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <div className="mt-20">
        <h2 className="text-2xl md:text-3xl">{t('reviews.title')}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.slice(0, 3).map((r) => (
            <ReviewCard key={`${r.name}-${r.date}`} review={r} />
          ))}
        </div>
        <a
          href="https://www.toursbylocals.com/tour-guides/mexico/playa-del-carmen/guide-profile/kat-b-664d223396689af34337a5f5"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex text-sm font-medium text-accent hover:text-accent/90"
          aria-label="See all reviews on ToursByLocals"
        >
          {t('about.reviewsLink')}
        </a>
      </div>
    </div>
  );
}

