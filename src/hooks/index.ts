// hooks/index.ts
// Central export file for all custom hooks
// Follows Single Responsibility Principle - only handles hook exports

export { usePortfolio } from './usePortfolio';
export { useAnimations, useScrollAnimation, useStaggeredAnimation } from './useAnimations';
export { useScroll } from './useScroll';
export { useVisibleSection, useElementVisibility, useVisibleSectionLegacy } from './useVisibleSection';
export { useMobileNav } from './useMobileNav';
export { useWindowDimensions } from './useWindowDimensions';
export { useOnClickOutside } from './useOnClickOutside';
export { useIsInViewport } from './useIsInViewport';
export { useScrolled } from './useScrolled';