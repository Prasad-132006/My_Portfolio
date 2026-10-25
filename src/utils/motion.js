import { useReducedMotion } from 'framer-motion';

export const easeOut = [0.22, 1, 0.36, 1];

export const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

export function useMotionSafe() {
  const reduce = useReducedMotion();
  return {
    reduce,
    initial: reduce ? false : 'hidden',
    viewport: { once: true, margin: '-80px' },
  };
}
