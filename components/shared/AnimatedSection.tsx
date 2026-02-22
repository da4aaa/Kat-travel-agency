'use client';

import {useRef} from 'react';
import {motion, useInView, useReducedMotion} from 'framer-motion';

export function AnimatedSection({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {once: true, margin: '-10% 0px'});
  const reduced = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={reduced ? {opacity: 1} : {opacity: 0, y: 22}}
      animate={isInView ? {opacity: 1, y: 0} : undefined}
      transition={{duration: 0.7, ease: [0.22, 1, 0.36, 1]}}
    >
      {children}
    </motion.section>
  );
}

