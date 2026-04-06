import type { Variants, Transition } from "framer-motion";

const defaultTransition: Transition = {
  duration: 0.6,
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const fadeUpItem: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const hoverLift = {
  y: -8,
  transition: {
    duration: 0.25,
  },
};