// types/domain.ts - Domain/Business Logic Types
export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  experiences: ExperienceData[];
  skills: SkillData[];
  projects: ProjectData[];
  services?: ServiceData[];
  contact: ContactData;
}

export interface HeroData {
  name: string;
  titles: string[];
  tagline: string;
  description: string;
  ctaButtons?: CtaButton[];
}

export interface CtaButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface AboutData {
  title: string;
  subtitle?: string;
  content: string[];
  image: string;
  stats?: StatItem[];
}

export interface StatItem {
  label: string;
  value: string;
}

export interface ExperienceData {
  id: string;
  designation: string;
  company: string;
  startDate: string;
  endDate?: string;
  isCurrentJob: boolean;
  location: string;
  shortDescription?: string;
  description: string | string[];
  technologies?: string[];
  achievements?: string[];
}

export interface SkillData {
  id: string;
  title: string;
  items: SkillItem[];
}

export interface SkillItem {
  title: string;
  level?: SkillLevel;
  icon?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  icon?: string;
  repoType?: RepoType;
  projectType?: ProjectType;
  githubUrl?: string;
  liveUrl?: string;
  tags?: string[];
  screenshots?: string[];
  about?: string;
  featured?: boolean;
  category?: string;
  technologies?: string[];
  image?: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon?: any; // FontAwesome icon
  shortDescription?: string;
  icons?: string[];
  features?: string[];
}

export interface ContactData {
  title?: string;
  email?: string;
  socialLinks: SocialLinkData[];
}

export interface SocialLinkData {
  id: string;
  name?: string;
  url: string;
  icon: string;
  text?: string;
}

// Enums - matching legacy types
export enum SkillLevel {
  Expert = 0,
  Intermediate = 1,
  Beginner = 2,
}

export enum RepoType {
  Public = 0,
  Private = 1,
}

export enum ProjectType {
  Personal = 0,
  JobWork = 1,
  Freelance = 2,
}