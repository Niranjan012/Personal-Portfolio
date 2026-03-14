// lib/animations/variants.ts
import { Variants } from "framer-motion";

export interface AnimationVariants {
  container: Variants;
  item: Variants;
}

export const createFadeInUpVariants = (staggerDelay: number = 0.2): AnimationVariants => ({
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: staggerDelay,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  },
});

export const createScaleInVariants = (staggerDelay: number = 0.1): AnimationVariants => ({
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: staggerDelay,
      },
    },
  },
  item: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
});