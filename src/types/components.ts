// types/components.ts - Component prop types
import { ReactNode, MouseEventHandler, RefObject, ButtonHTMLAttributes } from "react";
import { Variants } from "framer-motion";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// Base component props
export interface BaseComponentProps {
  children?: ReactNode;
  className?: string;
  id?: string;
}

// Layout component props
export interface ContainerProps extends BaseComponentProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface SectionProps extends BaseComponentProps {
  background?: 'default' | 'muted' | 'accent';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

// UI component props
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  startIcon?: IconDefinition;
  endIcon?: IconDefinition;
}

// Animation component props
export interface AnimatedContainerProps extends BaseComponentProps {
  variants?: Variants;
  initial?: string;
  animate?: string;
  exit?: string;
  staggerChildren?: number;
}

export interface AnimatedItemProps extends BaseComponentProps {
  variants?: Variants;
  delay?: number;
}

// Navigation component props
export interface NavItemProps {
  id: string;
  label: string;
  href: string;
  icon?: IconDefinition;
  external?: boolean;
}

export interface NavbarProps extends BaseComponentProps {
  items: NavItemProps[];
  variant?: 'floating' | 'fixed' | 'sticky';
}

// Loading and error component props
export interface LoadingProps extends BaseComponentProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'pulse';
}

export interface ErrorBoundaryProps extends BaseComponentProps {
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: any) => void;
}

// Form component props
export interface FormFieldProps {
  name: string;
  label?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
}

// Specific component props
export interface HeroSectionProps extends SectionProps {
  data: {
    name: string;
    titles: string[];
    tagline: string;
  };
}

export interface ProjectCardProps extends CardProps {
  project: {
    id: string;
    title: string;
    description: string;
    icon: string;
    tags?: string[];
    githubUrl?: string;
    url?: string;
  };
}

export interface SkillItemProps extends BaseComponentProps {
  skill: {
    title: string;
    level?: string;
    icon?: string;
  };
}

export interface ExperienceItemProps extends BaseComponentProps {
  experience: {
    designation: string;
    company: string;
    startDate: string;
    endDate?: string;
    description: string[];
  };
}