'use client';

import {useCallback, useEffect, useState} from 'react';
import Image from 'next/image';
import {AnimatePresence, motion} from 'framer-motion';
import {ChevronLeft, ChevronRight, X} from 'lucide-react';
import {useTranslations} from 'next-intl';

import {tours} from '@/data/tours';
import {highlightAccent} from '@/components/shared/highlighted-text';

/**
 * Grid thumbnails are pre-generated 400px copies, because Next's image
 * optimizer is disabled site-wide (see next.config.mjs). Loading the full
 * files here would pull ~15MB into the homepage; the originals are only
 * fetched when a tile is opened in the lightbox.
 */
function thumbFor(src: string) {
  return `/gallery/thumbs/${src.replace(/^\//, '').replace(/\//g, '-')}`;
}

/** Every photo used by every tour, hero first, de-duplicated across tours. */
const PHOTOS = (() => {
  const seen = new Set<string>();
  const out: Array<{src: string; thumb: string; alt: string}> = [];
  for (const tour of tours) {
    for (const img of [tour.image, ...tour.gallery]) {
      if (seen.has(img.src)) continue;
      seen.add(img.src);
      out.push({src: img.src, thumb: thumbFor(img.src), alt: img.alt});
    }
  }
  return out;
})();

export function Gallery() {
  const t = useTranslations();
  const [openAt, setOpenAt] = useState<number | null>(null);

  const close = useCallback(() => setOpenAt(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenAt((i) => (i === null ? i : (i + delta + PHOTOS.length) % PHOTOS.length)),
    []
  );

  // Lock scroll while the lightbox is open
  useEffect(() => {
    document.body.style.overflow = openAt !== null ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [openAt]);

  // Escape closes, arrows page through
  useEffect(() => {
    if (openAt === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openAt, close, step]);

  const active = openAt === null ? null : PHOTOS[openAt];

  return (
    <section id="gallery" className="bg-surface pt-12 pb-20">
      <motion.div
        className="mx-auto mb-10 max-w-6xl px-6 text-center"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-100px'}}
        transition={{duration: 0.6}}
      >
        <span className="text-xs uppercase tracking-widest text-accent">
          {t('gallery.eyebrow')}
        </span>
        <h2 className="mt-3 text-4xl md:text-5xl">
          {highlightAccent(t('gallery.title'), 'Adventures')}
        </h2>
      </motion.div>

      {/* Full-bleed mosaic */}
      <div className="grid w-full grid-cols-3 gap-1 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
        {PHOTOS.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpenAt(i)}
            aria-label={photo.alt}
            className="group relative aspect-square overflow-hidden bg-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
          >
            <Image
              src={photo.thumb}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-150"
              sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 17vw, 10vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.2}}
              onClick={close}
            />
            <motion.div
              key="panel"
              role="dialog"
              aria-modal="true"
              aria-label={active.alt}
              className="fixed inset-0 z-[201] flex items-center justify-center p-4 md:p-10"
              initial={{opacity: 0, scale: 0.97}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0, scale: 0.98}}
              transition={{duration: 0.25, ease: [0.22, 1, 0.36, 1]}}
              onClick={close}
            >
              <button
                onClick={close}
                aria-label={t('gallery.close')}
                className="absolute top-5 right-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-text transition-colors hover:bg-white"
              >
                <X className="h-5 w-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label={t('gallery.prev')}
                className="absolute left-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/80 text-text transition-colors hover:bg-white md:left-6"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label={t('gallery.next')}
                className="absolute right-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/80 text-text transition-colors hover:bg-white md:right-6"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <figure className="max-h-full" onClick={(e) => e.stopPropagation()}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.src}
                  alt={active.alt}
                  className="mx-auto max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
                />
                <figcaption className="mt-4 text-center text-sm text-white/80">
                  {active.alt}
                </figcaption>
              </figure>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
