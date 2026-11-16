import type { Variants } from 'motion/react';

export const KEYNOTE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const staggerContainer = (reducedMotion: boolean): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: reducedMotion ? 0 : 0.075,
      delayChildren: reducedMotion ? 0 : 0.08,
    },
  },
});

export const staggerItem = (reducedMotion: boolean): Variants => ({
  hidden: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: reducedMotion ? 0.15 : 0.42, ease: KEYNOTE_EASE },
  },
});
