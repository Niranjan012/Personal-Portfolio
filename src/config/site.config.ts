import {
  faHome,
  faUser,
  faBriefcase,
  faAward,
  faLaptopCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const siteConfig = {
  name: "Niranjan Panigrahi",
  title: "Niranjan Panigrahi - Senior Full Stack Engineer",
  description:
    "Niranjan Panigrahi is a proficient Software Engineer and Full Stack Developer from India, skilled in front-end and back-end development using modern tech stacks.",
  url: "https://niranjanpanigrahi.com", // Update with actual URL
  email: "niranjan@example.com", // Update with actual email
  keywords: [
    "niranjan panigrahi",
    "niranjan",
    "nixpanigrahi",
    "niranjan-panigrahi",
    "panigrahi niranjan",
    "founder of nixlab",
    "nixlab founder",
    "full stack developer",
    "indian developer",
    "nixpanigrahi github",
  ]as string[],
  socialLinks: {
    github: "https://github.com/Niranjan012",
    linkedin: "https://linkedin.com/in/niranjan-panigrahi",
    twitter: "https://twitter.com/nixpanigi",
    // Add more as needed
  },
  navLinks: [
    { id: "hero", title: "Home", path: "/", section: "hero" },
    { id: "experiences", title: "Experiences", path: "/#experiences", section: "experiences" },
    { id: "skills", title: "Skills", path: "/#skills", section: "skills" },
    { id: "projects", title: "Projects", path: "/#projects", section: "projects" },
    { id: "contact", title: "Contact", path: "/#contact", section: "contact" },
  ],
  navItems: [
    {
      name: "Home",
      link: "/#hero",
      icon: faHome,
    },
    {
      name: "About",
      link: "/#hero",
      icon: faUser,
    },
    {
      name: "Experiences",
      link: "/#experiences",
      icon: faBriefcase,
    },
    {
      name: "Skills",
      link: "/#skills",
      icon: faAward,
    },
    {
      name: "Projects",
      link: "/#projects",
      icon: faLaptopCode,
    },
    {
      name: "Contact",
      link: "/#contact",
      icon: faEnvelope,
    },
  ],
} as const;