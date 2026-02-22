'use client';

import {useEffect, useRef} from 'react';
import {useTranslations} from 'next-intl';
import {motion, useReducedMotion} from 'framer-motion';

import {reviews} from '@/data/reviews';
import {ReviewCard} from '@/components/shared/ReviewCard';

export function ReviewsSlider() {
  const t = useTranslations();
  const reduced = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduced) return;
    const el = scrollerRef.current;
    if (!el) return;

    const id = window.setInterval(() => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const next = Math.min(el.scrollLeft + 340, maxScrollLeft);
      if (next >= maxScrollLeft - 8) {
        el.scrollTo({left: 0, behavior: 'smooth'});
      } else {
        el.scrollTo({left: next, behavior: 'smooth'});
      }
    }, 4200);

    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <section className="bg-surface py-16 md:py-24 overflow-hidden">
      {/* Section Header - Centered */}
      <div className="mx-auto max-w-6xl px-6 text-center mb-12">
        <motion.div
          initial={reduced ? {opacity: 1} : {opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.6}}
        >
          <span className="text-xs uppercase tracking-widest text-accent">
            {t('reviews.eyebrow')}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl">
            {t('reviews.title')}
          </h2>
        </motion.div>
      </div>

      {/* Full Width Scrollable Gallery */}
      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto px-6 md:px-12 scroll-smooth snap-x snap-mandatory pb-4"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(6, 182, 212, 0.3) transparent'
        }}
      >
        {reviews.map((r, index) => (
          <motion.div
            key={`${r.name}-${r.date}`}
            className="min-w-[320px] sm:min-w-[380px] md:min-w-[420px] snap-start"
            initial={reduced ? {opacity: 1} : {opacity: 0, x: 20}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-50px'}}
            transition={{duration: 0.5, delay: index * 0.1}}
          >
            <ReviewCard review={r} />
          </motion.div>
        ))}
      </div>

      {/* Source Link - Centered */}
      <div className="text-center mt-8 px-6">
        <a
          href="https://www.toursbylocals.com/tour-guides/mexico/playa-del-carmen/guide-profile/kat-b-664d223396689af34337a5f5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent hover:text-accent/80 transition-colors"
        >
          {t('reviews.source')}
        </a>
      </div>
    </section>
  );
}

