'use client';

import {createContext, useCallback, useContext, useState, useEffect, Suspense} from 'react';
import {X} from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';
import {useTranslations} from 'next-intl';

import {InquiryForm} from '@/components/contact/InquiryForm';

// ── Context ────────────────────────────────────────────────────────────────
type BookingModalCtx = {
  open: (tour?: string) => void;
  close: () => void;
};

const Ctx = createContext<BookingModalCtx>({open: () => {}, close: () => {}});

export function useBookingModal() {
  return useContext(Ctx);
}

// ── Provider ───────────────────────────────────────────────────────────────
export function BookingModalProvider({children}: {children: React.ReactNode}) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefillTour, setPrefillTour] = useState<string | undefined>();

  const open = useCallback((tour?: string) => { setPrefillTour(tour); setIsOpen(true); }, []);
  const close = useCallback(() => setIsOpen(false), []);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  return (
    <Ctx.Provider value={{open, close}}>
      {children}
      <BookingModal isOpen={isOpen} onClose={close} prefillTour={prefillTour} />
    </Ctx.Provider>
  );
}

// ── Modal ──────────────────────────────────────────────────────────────────
function BookingModal({isOpen, onClose, prefillTour}: {isOpen: boolean; onClose: () => void; prefillTour?: string}) {
  const t = useTranslations();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            className="fixed inset-0 z-[201] flex items-center justify-center p-4 md:p-8"
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 16}}
            transition={{duration: 0.3, ease: [0.22, 1, 0.36, 1]}}
          >
            <div
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-bg shadow-[0_32px_80px_rgba(0,0,0,0.25)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              onClick={e => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-5 right-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-text/10 bg-white/80 text-text hover:bg-surface transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl leading-tight mb-2">{t('contact.title')}</h2>
                <p className="text-base text-text-muted mb-10">{t('contact.subtitle')}</p>

                <Suspense fallback={<div className="h-64 rounded-3xl bg-surface animate-pulse" />}>
                  <InquiryForm prefillTour={prefillTour} />
                </Suspense>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
