// hooks/useAnimations.ts
import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { RefObject } from 'react';
import { createFadeInUpVariants, createScaleInVariants } from '@/lib/animations/variants';

/**
 * Custom hook for animation management
 * Follows Single Responsibility Principle - only handles animation logic
 */
export const useAnimations = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUpVariants = createFadeInUpVariants(0.1);
  const scaleInVariants = createScaleInVariants();

  return {
    isLoaded,
    fadeInUpVariants,
    scaleInVariants,
  };
};

/**
 * Hook for scroll-triggered animations
 */
export const useScrollAnimation = (ref: RefObject<Element>, once = true) => {
  const isInView = useInView(ref, {
    once,
    margin: "-100px"
  });

  return {
    isInView,
    variants: createFadeInUpVariants(0.1),
  };
};

/**
 * Hook for staggered animations
 */
export const useStaggeredAnimation = (itemCount: number, staggerDelay = 0.1) => {
  const variants = createFadeInUpVariants(staggerDelay);

  return {
    variants,
    containerVariants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
        },
      },
    },
  };
};