'use client';

import {useTranslations} from 'next-intl';
import Image from 'next/image';
import {motion} from 'framer-motion';

// Placeholder images - replace with your actual gallery images
const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80',
    alt: 'Gallery image 1'
  },
  {
    src: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80',
    alt: 'Gallery image 2'
  },
  {
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    alt: 'Gallery image 3'
  },
  {
    src: 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?auto=format&fit=crop&w=800&q=80',
    alt: 'Gallery image 4'
  },
  {
    src: 'https://images.unsplash.com/photo-1601371726345-f88c4b3e8d3b?auto=format&fit=crop&w=800&q=80',
    alt: 'Gallery image 5'
  },
  {
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    alt: 'Gallery image 6'
  }
];

export function Gallery() {
  const t = useTranslations();

  return (
    <section id="gallery" className="py-20 bg-surface">
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
            {t('gallery.title')}
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
