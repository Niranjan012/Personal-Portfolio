// lib/constants/index.ts
export const SITE_CONFIG = {
  name: 'Niranjan Panigrahi',
  title: 'Senior Full Stack Engineer',
  description: 'Niranjan Panigrahi is a proficient Software Engineer and Full Stack Developer from India, skilled in front-end and back-end development using modern tech stacks.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://niranjanpanigrahi.com',
  ogImage: '/images/og-image.jpg',
} as const;

export const NAVIGATION_ITEMS = [
  { id: 'hero', label: 'Home', href: '/#hero' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'experiences', label: 'Experiences', href: '/#experiences' },
  { id: 'skills', label: 'Skills', href: '/#skills' },
  { id: 'projects', label: 'Projects', href: '/#projects' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
] as const;

export const SOCIAL_LINKS = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/niranjanpanigrahi',
    text: '@niranjanpanigrahi',
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/Niranjan012',
    text: '@Niranjan012',
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:niranjanpanigrahi012@gmail.com',
    text: 'niranjanpanigrahi012@gmail.com',
  },
] as const;

export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
  },
  easing: {
    smooth: [0.4, 0.0, 0.2, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
  },
  stagger: {
    fast: 0.1,
    normal: 0.2,
    slow: 0.3,
  },
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const CONTAINER_SIZES = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
} as const;