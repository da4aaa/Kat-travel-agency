import {Hero} from '@/components/home/Hero';
import {TrustBar} from '@/components/home/TrustBar';
import {WhyKat} from '@/components/home/WhyKat';
import {FeaturedTours} from '@/components/home/FeaturedTours';
import {Gallery} from '@/components/home/Gallery';
import {ReviewsSlider} from '@/components/home/ReviewsSlider';
import {FinalCTA} from '@/components/home/FinalCTA';

export const metadata = {
  title: 'Kat B. | Private Tour Guide in Playa del Carmen, Mexico',
  description:
    "Private tours in Playa del Carmen, Tulum, Cobá & the Riviera Maya. Cenotes, Mayan ruins, jungle adventures. English, Spanish & Russian-speaking guide.",
  keywords: [
    'private tour guide playa del carmen',
    'tulum tour guide',
    'cenote tour mexico',
    'riviera maya private tour',
    'частный гид мексика',
    'guía privado playa del carmen'
  ],
  openGraph: {
    title: 'Kat B. | Private Tour Guide — Playa del Carmen',
    description: 'Experience the real Mexico with a private guide. Cenotes, ruins, adventure.',
    images: ['/og-image.jpg']
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ReviewsSlider />
      <WhyKat />
      <FeaturedTours />
      <Gallery />
      <FinalCTA />
    </>
  );
}

