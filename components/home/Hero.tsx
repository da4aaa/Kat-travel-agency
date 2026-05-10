'use client';

import Image from 'next/image';
import {useEffect, useState} from 'react';
import {useTranslations} from 'next-intl';
import {motion, AnimatePresence, useReducedMotion} from 'framer-motion';

import {Button} from '@/components/shared/Button';

const SLIDES = [
  {
    src: '/the-travel-nook-2FoqQ0EPwLg-unsplash.jpg',
    alt: 'Turquoise waters and beach in Playa del Carmen'
  },
  {
    src: 'https://images.unsplash.com/photo-1587502536263-9298a7607c37?auto=format&fit=crop&w=1800&q=85',
    alt: 'Cenote with sunlight beams in the Riviera Maya'
  },
  {
    src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1800&q=85',
    alt: 'Ancient Mayan pyramid surrounded by jungle'
  },
  {
    src: 'https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1800&q=85',
    alt: 'Snorkeling in turquoise water in Mexico'
  },
  {
    src: 'https://images.unsplash.com/photo-1565619624098-cf4168a6d4d7?auto=format&fit=crop&w=1800&q=85',
    alt: 'Jungle greenery in the Riviera Maya'
  },
];

const INTERVAL = 5000;

export function Hero() {
  const t = useTranslations();
  const reduced = useReducedMotion();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setCurrent(i => (i + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [reduced]);

  const headline = t('hero.headline');
  const words = headline.split(' ');

  return (
    <section className="relative h-[78vh] min-h-[520px] overflow-hidden">
      {/* Sliding backgrounds */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          className="absolute inset-0 will-change-transform"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 1.2, ease: 'easeInOut'}}
          aria-hidden="true"
        >
          <Image
            src={SLIDES[current].src}
            alt={SLIDES[current].alt}
            fill
            priority={current === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.55) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Headline */}
        <motion.h1
          className="text-white max-w-4xl"
          style={{fontSize: '80px', lineHeight: 1.0, textShadow: '0 2px 24px rgba(0,0,0,0.3)'}}
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {transition: {staggerChildren: 0.06, delayChildren: 0.1}}
          }}
        >
          {words.map((w, i) => (
            <motion.span
              key={`${w}-${i}`}
              className="inline-block mr-[0.25em]"
              variants={{
                hidden: reduced ? {opacity: 1} : {opacity: 0, y: 20},
                show: {opacity: 1, y: 0}
              }}
              transition={{duration: 0.7, ease: [0.22, 1, 0.36, 1]}}
            >
              {w}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mt-5 max-w-xl text-base leading-7 md:text-lg"
          style={{color: '#ffffff', textShadow: '0 1px 12px rgba(0,0,0,0.4)'}}
          initial={reduced ? {opacity: 1} : {opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.4, duration: 0.6}}
        >
          {t('hero.subheadline')}
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-8"
          initial={reduced ? {opacity: 1} : {opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.55, duration: 0.6}}
        >
          <a href="#tours">
            <Button size="lg">{t('hero.cta.book')}</Button>
          </a>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 flex gap-2" aria-hidden="true">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={[
                'h-1.5 rounded-full transition-all duration-300',
                i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
              ].join(' ')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
