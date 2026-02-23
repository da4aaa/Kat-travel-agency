import {useTranslations} from 'next-intl';
import {Mail, MapPin, MessageCircle, Clock} from 'lucide-react';

import {InquiryForm} from '@/components/contact/InquiryForm';
import {FaqAccordion} from '@/components/contact/FaqAccordion';
import {AnimatedSection} from '@/components/shared/AnimatedSection';

export const metadata = {
  title: 'Contact & Booking | Kat B. Private Tours',
  description:
    'Book a private tour in Playa del Carmen and the Riviera Maya. Message Kat on WhatsApp or send an inquiry.',
  openGraph: {
    title: 'Contact & Booking | Kat B.',
    description: "Send a message and I'll design the perfect experience around your group.",
    images: ['/og-image.jpg']
  }
};

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="pt-48 pb-14 md:pb-20 mx-auto max-w-6xl px-6">
      <header className="max-w-2xl">
        <h1 className="text-4xl leading-[1.02] md:text-5xl">{t('contact.title')}</h1>
        <p className="mt-4 text-base leading-7 text-text-muted">
          {t('contact.subtitle')}
        </p>
      </header>

      <AnimatedSection className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-3xl border border-text/10 bg-surface p-7 md:p-10">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent">
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <div className="text-sm font-medium text-text">{t('contact.whatsapp')}</div>
              <div className="mt-1 text-sm text-text-muted">+52-XXX-XXX-XXXX</div>
            </div>
          </div>

          <a
            href="https://wa.me/52XXXXXXXXXX?text=Hi+Kat%2C+I%27m+interested+in+a+tour"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent/90 transition-colors"
            aria-label={t('contact.whatsappCta')}
          >
            {t('contact.whatsappCta')}
          </a>

          <div className="mt-10 grid gap-5 text-sm text-text-muted">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
              <div>
                <div className="text-text">{t('contact.email')}</div>
                <div>kat@[yourdomain].com</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
              <div>
                <div className="text-text">{t('contact.basedIn')}</div>
                <div>Playa del Carmen, Quintana Roo, Mexico</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-accent" aria-hidden="true" />
              <div className="text-text">{t('contact.responseTime')}</div>
            </div>

            <div className="rounded-2xl border border-text/10 bg-white/60 px-4 py-3">
              {t('contact.languagesNote')}
            </div>
          </div>
        </div>

        <div>
          <InquiryForm />
          <FaqAccordion />
        </div>
      </AnimatedSection>
    </div>
  );
}

