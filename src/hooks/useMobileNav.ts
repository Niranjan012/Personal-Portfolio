// hooks/useMobileNav.ts
"use client";

import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for mobile navigation management
 * Follows Single Responsibility Principle - only handles mobile nav state
 */
export const useMobileNav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const close = useCallback(() => {
    if (isAnimating || !isOpen) return;
    setIsAnimating(true);
    setIsOpen(false);
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating, isOpen]);

  // Check if device is mobile
  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;
      const wasMobile = isMobile;
      const nowMobile = innerWidth <= 900;

      setIsMobile(nowMobile);

      // Close menu when switching from mobile to desktop
      if (wasMobile && !nowMobile && isOpen) {
        close();
      }
    };

    if (document.readyState === "complete") handleResize();

    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, isOpen, close]);

  const toggle = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setIsOpen(prev => !prev);

    // Reset animation state after transition
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating]);

  const open = useCallback(() => {
    if (isAnimating || isOpen) return;
    setIsAnimating(true);
    setIsOpen(true);
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating, isOpen]);

  // Close mobile nav on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        close();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, close]);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isMobile]);

  return {
    isMobile,
    isOpen,
    isAnimating,
    toggle,
    open,
    close,
    // Legacy compatibility
    mobileNav: isMobile,
    showMobileMenu: isOpen,
    setMobileNav: setIsMobile,
    setShowMobileMenu: setIsOpen,
  };
};
