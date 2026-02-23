'use client';

import {useState, useRef, useEffect} from 'react';
import {motion, useReducedMotion} from 'framer-motion';
import {MessageCircle, Mail} from 'lucide-react';
import {useTranslations} from 'next-intl';

const WA_PHONE = '52XXXXXXXXXX';
const EMAIL = 'kat@[yourdomain].com';

export function FloatingContactButton() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const getWhatsAppUrl = () => {
    const message = "Hi Kat, I'm interested in a tour";
    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
  };

  const getEmailUrl = () => {
    const subject = 'Tour Inquiry';
    const body = "Hi Kat,\n\nI'm interested in booking a tour.\n\nThanks!";
    return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div ref={dropdownRef} className="fixed bottom-5 right-5 z-50">
      {open && (
        <motion.div
          initial={{opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          className="absolute bottom-full right-0 mb-3 w-64 rounded-2xl border border-text/10 bg-white shadow-card overflow-hidden"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 hover:bg-accent/5 transition-colors"
            onClick={() => setOpen(false)}
          >
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#E8F4FF]">
              <MessageCircle className="h-5 w-5 text-accent" aria-hidden="true" />
            </div>
            <div>
              <div className="text-sm font-medium text-text">WhatsApp</div>
              <div className="text-xs text-text-muted">{t('contact.instant')}</div>
            </div>
          </a>

          <div className="h-px bg-text/10" />

          <a
            href={getEmailUrl()}
            className="flex items-center gap-3 px-4 py-3 hover:bg-accent/5 transition-colors"
            onClick={() => setOpen(false)}
          >
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#E8F4FF]">
              <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
            </div>
            <div>
              <div className="text-sm font-medium text-text">Email</div>
              <div className="text-xs text-text-muted">{t('contact.emailOption')}</div>
            </div>
          </a>
        </motion.div>
      )}

      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Contact options"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-accent text-white shadow-[0_18px_60px_rgba(16,101,205,0.22)]"
        initial={false}
        animate={
          reduced
            ? {opacity: 1}
            : {
                opacity: 1,
                scale: [1, 1.03, 1]
              }
        }
        transition={
          reduced
            ? undefined
            : {
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut'
              }
        }
      >
        <span className="pointer-events-none absolute -inset-2 rounded-full bg-accent-light/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
        <MessageCircle className="relative h-6 w-6" aria-hidden="true" />
      </motion.button>
    </div>
  );
}
