'use client';

import {useTranslations} from 'next-intl';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {highlightAccent} from '@/components/shared/highlighted-text';

// Placeholder images - replace with your actual gallery images
const GALLERY_IMAGES = [
  { src: '/gallery/gallery-1.jpg', alt: 'Riviera Maya scenery' },
  { src: '/gallery/gallery-2.jpg', alt: 'Mexico travel experience' },
  { src: '/tours/cenote-underwater.jpg', alt: 'Cenote swimming' },
  { src: '/gallery/gallery-3.jpg', alt: 'Tropical nature' },
  { src: '/gallery/gallery-4.jpg', alt: 'Local adventure' },
  { src: '/tours/jungle-canopy.jpg', alt: 'Jungle canopy' }
];

export function Gallery() {
  const t = useTranslations();

  return (
    <section id="gallery" className="pt-12 pb-20 bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center mb-12"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface shadow-card hover:shadow-soft transition-shadow duration-300"
              initial={{opacity: 0, scale: 0.95}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true, margin: '-50px'}}
              transition={{duration: 0.5, delay: index * 0.1}}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
