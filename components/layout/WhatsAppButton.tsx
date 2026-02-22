'use client';

import {motion, useReducedMotion} from 'framer-motion';

const PHONE_NUMBER = '52-XXX-XXX-XXXX';
const WA_PHONE = '52XXXXXXXXXX';

function getWhatsAppUrl(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WA_PHONE}?text=${text}`;
}

function WhatsAppIcon({className = ''}: {className?: string}) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M19.11 17.19c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.14-1.15-.43-2.19-1.36-.81-.72-1.35-1.6-1.51-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.11 2.82.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.62-.66 1.84-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32Z"
      />
      <path
        fill="currentColor"
        d="M26.66 5.34A14.86 14.86 0 0 0 16.07 1C7.87 1 1.2 7.66 1.2 15.86c0 2.62.68 5.18 1.97 7.44L1 31l7.92-2.07a14.85 14.85 0 0 0 7.15 1.82c8.2 0 14.86-6.66 14.86-14.86 0-3.97-1.55-7.7-4.27-10.55Zm-10.6 22.9c-2.3 0-4.56-.62-6.54-1.78l-.47-.27-4.7 1.23 1.25-4.58-.31-.47a12.4 12.4 0 0 1-1.9-6.52c0-6.84 5.57-12.41 12.42-12.41 3.31 0 6.42 1.29 8.76 3.64a12.3 12.3 0 0 1 3.66 8.78c0 6.85-5.57 12.41-12.17 12.41Z"
      />
    </svg>
  );
}

export function WhatsAppButton() {
  const reduced = useReducedMotion();

  return (
    <motion.a
      href={getWhatsAppUrl("Hi Kat, I'm interested in a tour")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with Kat on WhatsApp (${PHONE_NUMBER})`}
      className="fixed bottom-5 right-5 z-50 group"
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
      <span className="relative flex items-center gap-3 rounded-full bg-[#25D366] text-white shadow-[0_18px_60px_rgba(28,28,26,0.22)] px-4 py-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15">
          <WhatsAppIcon className="h-6 w-6" />
        </span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-[max-width,opacity] duration-200 opacity-0 group-hover:opacity-100 group-hover:max-w-[12rem]">
          Chat with Kat
        </span>
      </span>
    </motion.a>
  );
}

