import {Mail, MapPin, MessageCircle} from 'lucide-react';

export function ContactStrip() {
  return (
    <section id="contact" className="bg-text py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-serif text-2xl text-white">Kat B.</p>
        <div className="flex flex-wrap justify-center gap-8 text-sm text-white/60">
          <a
            href="https://wa.me/52XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href="mailto:kat@yourdomain.com"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4" />
            kat@yourdomain.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Playa del Carmen, Mexico
          </span>
        </div>
        <p className="text-xs text-white/30">EN · ES · RU</p>
      </div>
    </section>
  );
}
