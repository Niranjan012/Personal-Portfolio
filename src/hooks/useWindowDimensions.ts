// hooks/useWindowDimensions.ts
"use client";

import { useState, useEffect } from 'react';

/**
 * Custom hook for window dimensions management
 * Follows Single Responsibility Principle - only handles window size state
 */
export const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial dimensions
    if (document.readyState === "complete") {
      handleResize();
    } else {
      window.addEventListener('load', handleResize);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = dimensions.width <= 768;
  const isTablet = dimensions.width > 768 && dimensions.width <= 1024;
  const isDesktop = dimensions.width > 1024;

  return {
    ...dimensions,
    isMobile,
    isTablet,
    isDesktop,
  };
};

// Legacy export for backward compatibility
export default useWindowDimensions;
