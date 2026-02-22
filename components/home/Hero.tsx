'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {motion, useReducedMotion, useScroll, useTransform} from 'framer-motion';

import {Link} from '@/i18n/navigation';
import {Button} from '@/components/shared/Button';
import {ContactDropdown} from '@/components/shared/ContactDropdown';

export function Hero() {
  const t = useTranslations();
  const reduced = useReducedMotion();

  const {scrollY} = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, reduced ? 0 : 80]);

  const headline = t('hero.headline');
  const words = headline.split(' ');

  return (
    <section className="relative h-[85vh] md:h-[90vh] overflow-hidden">
      <motion.div
        style={{y: bgY}}
        className="absolute inset-0 will-change-transform"
        aria-hidden="true"
      >
        <Image
          src="/the-travel-nook-2FoqQ0EPwLg-unsplash.jpg"
          alt="Beach paradise in Playa del Carmen with palapa umbrellas and turquoise water"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(120deg, rgba(250,250,247,0.00) 0%, rgba(250,250,247,0.35) 20%, rgba(26,107,90,0.45) 100%)'
        }}
      />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(900px 450px at 20% 25%, rgba(201,150,62,0.18) 0%, rgba(201,150,62,0.00) 60%)'
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-[9.25rem] pb-14 md:pt-[11.25rem] md:pb-20">
        <div className="max-w-2xl">
          <motion.h1
            className="text-5xl leading-[0.95] md:text-7xl"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {staggerChildren: 0.07, delayChildren: 0.1}
              }
            }}
          >
            {words.map((w, i) => (
              <motion.span
                key={`${w}-${i}`}
                className="inline-block mr-[0.25em]"
                variants={{
                  hidden: reduced ? {opacity: 1} : {opacity: 0, y: 18},
                  show: {opacity: 1, y: 0}
                }}
                transition={{duration: 0.7, ease: [0.22, 1, 0.36, 1]}}
              >
                {w}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-8 text-white/90 md:text-xl max-w-xl"
            initial={reduced ? {opacity: 1} : {opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.35, duration: 0.6}}
            style={{
              textShadow: '0 16px 40px rgba(28,28,26,0.30)'
            }}
          >
            {t('hero.subheadline')}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={reduced ? {opacity: 1} : {opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.48, duration: 0.6}}
          >
            <Link href="/tours">
              <Button size="lg" className="w-full sm:w-auto">
                {t('hero.cta.book')}
              </Button>
            </Link>
            <ContactDropdown
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-white/65 backdrop-blur-sm hover:bg-white/80"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

