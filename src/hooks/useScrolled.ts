// hooks/useScrolled.ts
"use client";

import { useState, useEffect } from 'react';

/**
 * Custom hook for scroll position tracking
 * Follows Single Responsibility Principle - only handles scroll state
 */
export const useScrolled = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isScrolled;
};

// Legacy export for backward compatibility
export default useScrolled;
