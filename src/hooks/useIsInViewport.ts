// hooks/useIsInViewport.ts
"use client";

import { useState, useEffect, useMemo, RefObject } from 'react';
import { ViewportProps } from '@/types';

/**
 * Custom hook for element viewport visibility detection
 * Follows Single Responsibility Principle - only handles viewport visibility
 */
export const useIsInViewport = (
  ref: RefObject<Element>,
  options?: ViewportProps
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observerOptions = useMemo(
    () => ({
      root: options?.root,
      rootMargin: options?.rootMargin || "20px",
      threshold: options?.threshold || 0.3,
    }),
    [options]
  );

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIsIntersecting(entry.isIntersecting),
        observerOptions
      ),
    [observerOptions]
  );

  useEffect(() => {
    if (!ref || !ref.current) return;

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, observer]);

  return isIntersecting;
};

// Legacy export for backward compatibility
export default useIsInViewport;
