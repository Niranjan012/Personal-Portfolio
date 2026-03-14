// src/hooks/useVisibleSection.ts
import { useState, useEffect, RefObject, useCallback } from 'react';
import throttle from 'lodash/throttle';

/**
 * Custom hook for section visibility detection
 * Follows Single Responsibility Principle - only handles visibility logic
 */
export const useVisibleSection = (sectionRefs: RefObject<HTMLElement>[]) => {
  const [visibleSection, setVisibleSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY + 100;

      for (const ref of sectionRefs) {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          const sectionBottom = offsetTop + offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < sectionBottom) {
            const sectionId = ref.current.id;
            if (sectionId) {
              setVisibleSection(prev =>
                prev !== sectionId ? sectionId : prev  // ✅ FIX 1 — removed visibleSection
              );                                        // from deps, use functional update
              break;
            }
          }
        }
      }
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel(); // ✅ FIX 2 — cancel lodash throttle on cleanup
    };
  }, [sectionRefs]); // ✅ FIX 3 — removed visibleSection from deps array
                     // it caused infinite re-renders on every scroll

  return visibleSection;
};

/**
 * Hook for single element visibility using Intersection Observer
 */
export const useElementVisibility = (
  ref: RefObject<Element>,
  threshold = 0.1
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    const element = ref.current; // ✅ FIX 4 — capture ref.current in variable
                                  // avoids stale ref warning in cleanup
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element); // ✅ uses captured variable, not ref.current
      }
    };
  }, [ref, threshold]);

  return isVisible;
};

/**
 * Legacy hook for backward compatibility
 * @deprecated Use useVisibleSection with refs instead
 */

// ✅ FIX 5 — replaced any[] with proper type
interface LegacySection {
  name: string;
}

export const useVisibleSectionLegacy = (sections: LegacySection[] = []) => {
  const [visibleSectionId, setVisibleSectionId] = useState<string>(
    sections[0]?.name || ''
  );

  const isSectionVisible = useCallback((elementId: string): boolean => {
    const section = document.getElementById(elementId);
    if (!section) return false;

    const sectionPosition = section.getBoundingClientRect();
    const vHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const threshold = vHeight * 0.5;

    return (
      (sectionPosition.top <= threshold &&
        sectionPosition.bottom >= threshold) ||
      (sectionPosition.bottom >= vHeight - threshold &&
        sectionPosition.top <= vHeight - threshold)
    );
  }, []);

  const checkVisibility = useCallback(() => {
    if (!sections || sections.length < 1) return;

    sections.forEach(({ name }) => {
      const isVisible = isSectionVisible(name);
      if (isVisible) {
        setVisibleSectionId(name);
      }
    });
  }, [sections, isSectionVisible]);

  useEffect(() => {
    const handler = throttle(checkVisibility, 300);

    if (document.readyState === 'complete') handler();

    window.addEventListener('DOMContentLoaded', handler);
    window.addEventListener('load', handler);
    window.addEventListener('scroll', handler);
    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('DOMContentLoaded', handler);
      window.removeEventListener('load', handler);
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
      handler.cancel(); // ✅ FIX 6 — cancel lodash throttle on cleanup
    };
  }, [checkVisibility]);

  return visibleSectionId;
};