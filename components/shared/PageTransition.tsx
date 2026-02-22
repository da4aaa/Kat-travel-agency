'use client';

import {AnimatePresence, motion, useReducedMotion} from 'framer-motion';
import {usePathname} from 'next/navigation';

export function PageTransition({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={reduced ? {opacity: 1} : {opacity: 0, y: 10}}
        animate={{opacity: 1, y: 0}}
        exit={reduced ? {opacity: 1} : {opacity: 0, y: -8}}
        transition={{duration: 0.35, ease: [0.22, 1, 0.36, 1]}}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

