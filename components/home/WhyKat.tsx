import Image from 'next/image';
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
      <h3 className="text-lg font-medium leading-snug mb-3 text-white">{title}</h3>
      <p className="text-sm leading-7" style={{color: '#ffffff'}}>{body}</p>
    </div>
  );

  return (
    <AnimatedSection className="relative overflow-hidden min-h-[600px]">
      <Image
        src="/kat-guide.jpg"
        alt="Kat B. — private tour guide at Mayan ruins in the Riviera Maya"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Gradient from right only — left stays clear */}
      <div
        className="absolute inset-0"
        style={{background: 'linear-gradient(to left, rgba(7,30,50,0.95) 0%, rgba(7,30,50,0.88) 30%, rgba(7,30,50,0.5) 55%, transparent 75%)'}}
      />
      {/* Content pinned to right half */}
      <div className="relative flex h-full min-h-[600px] items-end">
        <div className="ml-auto w-full max-w-xl px-10 py-16 md:pb-24 md:pt-16">
          <div className="[&_h2]:text-white [&_div]:text-white">
            <SectionHeading eyebrow={t('whyKat.eyebrow')} title={t('whyKat.title')} accentPhrase="you around!" />
          </div>
          <div className="mt-10 grid gap-8">
            {blocks.map(b => <TextBlock key={b.title} title={b.title} body={b.body} />)}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
