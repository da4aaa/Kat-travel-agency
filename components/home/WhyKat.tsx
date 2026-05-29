import {useTranslations} from 'next-intl';

import {AnimatedSection} from '@/components/shared/AnimatedSection';
import {SectionHeading} from '@/components/shared/SectionHeading';

export function WhyKat() {
  const t = useTranslations();

  const blocks = [
    { title: t('whyKat.local.title'), body: t('whyKat.local.body') },
    { title: t('whyKat.private.title'), body: t('whyKat.private.body') },
    { title: t('whyKat.languages.title'), body: t('whyKat.languages.body') },
  ];

  const TextBlock = ({ title, body }: { title: string; body: string }) => (
    <div>
      <h3 className="text-lg font-medium leading-snug mb-2">{title}</h3>
      <p className="text-sm leading-7 text-gray-600">{body}</p>
    </div>
  );

  return (
    <AnimatedSection className="overflow-hidden bg-[#e8ede8]">
      {/* Mobile: image on top, text below */}
      <div className="md:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/kat-guide.png"
          alt="Kat B. — private tour guide in the jungle"
          className="w-full h-[320px] object-cover object-top"
        />
        <div className="px-6 py-8 bg-white">
          <SectionHeading eyebrow={t('whyKat.eyebrow')} title={t('whyKat.title')} accentPhrase="you around!" />
          <div className="mt-8 grid gap-6">
            {blocks.map(b => <TextBlock key={b.title} title={b.title} body={b.body} />)}
          </div>
        </div>
      </div>

      {/* Desktop: two columns side by side */}
      <div className="hidden md:grid grid-cols-2 min-h-[600px]">
        {/* Image column */}
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/kat-guide.png"
            alt="Kat B. — private tour guide in the jungle"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
        {/* Text column */}
        <div className="flex items-center px-12 py-14 lg:px-16 bg-white">
          <div>
            <SectionHeading eyebrow={t('whyKat.eyebrow')} title={t('whyKat.title')} accentPhrase="you around!" />
            <div className="mt-10 grid gap-8">
              {blocks.map(b => <TextBlock key={b.title} title={b.title} body={b.body} />)}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
