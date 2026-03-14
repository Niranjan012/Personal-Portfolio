// services/portfolio/index.ts
import {
  PortfolioData,
  HeroData,
  AboutData,
  ExperienceData,
  SkillData,
  ProjectData,
  ContactData,
  ServiceData
} from '@/types/domain';

/**
 * Portfolio Service - Handles all portfolio data operations
 * Follows Single Responsibility Principle - only handles portfolio data
 */
export class PortfolioService {
  /**
   * Get hero section data
   */
  static async getHeroData(): Promise<HeroData> {
    try {
      // In a real app, this would fetch from an API
      // For now, return static data
      return {
        name: 'Niranjan Panigrahi',
        titles: [
          'Senior Full Stack Engineer',
          '.NET & Azure Developer',
          'Angular & React Specialist'
        ],
        tagline: 'I build software that scales',
        description: 'Senior Full Stack Engineer with 4+ years of experience in end-to-end full-stack development, delivering scalable and high-performance enterprise applications.',
        ctaButtons: [
          {
            text: 'View My Work',
            href: '#projects',
            variant: 'primary'
          },
          {
            text: 'Get In Touch',
            href: '#contact',
            variant: 'secondary'
          }
        ]
      };
    } catch (error) {
      console.error('Error loading hero data:', error);
      throw new Error('Failed to load hero data');
    }
  }

  /**
   * Get about section data
   */
  static async getAboutData(): Promise<AboutData> {
    try {
      return {
        title: 'About Me',
        subtitle: 'Passionate about creating exceptional digital experiences',
        content: [
          "Senior Full Stack Engineer with 4+ years of experience in end-to-end full-stack development, delivering scalable and high-performance enterprise applications. Skilled in frontend frameworks (Angular, React, Next.js), backend systems (ASP.NET Core, .NET Core, Java), and Azure cloud services (DevOps, Key Vault, Storage Account).",
          "Experienced in API development and integration, system performance optimization, reusable UI component design, and legacy modernization. Adept at CI/CD automation and Agile collaboration to deliver secure, timely, and impactful solutions."
        ],
        image: '/images/profilePic.jpg',
        stats: [
          { label: 'Years of Experience', value: '4+' },
          { label: 'Projects Completed', value: '50+' },
          { label: 'Technologies', value: '15+' },
          { label: 'Happy Clients', value: '20+' }
        ]
      };
    } catch (error) {
      console.error('Error loading about data:', error);
      throw new Error('Failed to load about data');
    }
  }

  /**
   * Get experiences data
   */
  static async getExperiencesData(): Promise<ExperienceData[]> {
    try {
      const { default: experiences } = await import('@/data/experiences');

      return experiences.map(exp => ({
        id: exp.designation.toLowerCase().replace(/\s+/g, '-') + '-' + exp.company.toLowerCase().replace(/\s+/g, '-'),
        designation: exp.designation,
        company: exp.company,
        startDate: exp.startDate,
        endDate: exp.endDate,
        isCurrentJob: exp.isCurrentJob,
        location: exp.location,
        shortDescription: exp.shortDescription,
        description: exp.description,
        technologies: [], // Will be populated when data includes this
        achievements: [] // Will be populated when data includes this
      }));
    } catch (error) {
      console.error('Error loading experiences data:', error);
      return [];
    }
  }

  /**
   * Get skills data
   */
  static async getSkillsData(): Promise<SkillData[]> {
    try {
      const { default: skills } = await import('@/data/skills');

      return skills.map(skillCategory => ({
        id: skillCategory.title.toLowerCase().replace(/\s+/g, '-'),
        title: skillCategory.title,
        items: skillCategory.items.map(item => ({
          title: item.title,
          level: item.level,
          icon: item.icon
        }))
      }));
    } catch (error) {
      console.error('Error loading skills data:', error);
      return [];
    }
  }

  /**
   * Get projects data
   */
  static async getProjectsData(): Promise<ProjectData[]> {
    try {
      const { default: projects } = await import('@/data/projects');

      return projects.map(project => ({
        id: project.id,
        title: project.title,
        description: project.description,
        icon: project.icon,
        repoType: project.repoType,
        projectType: project.projectType,
        githubUrl: project.githubUrl,
        liveUrl: project.url,
        tags: project.tags,
        screenshots: project.screenshots,
        about: project.about,
        featured: false, // Add logic to determine featured projects
        category: project.projectType?.toString() || 'personal',
        technologies: project.tags || [],
        image: project.screenshots?.[0] || '/images/placeholder.jpg'
      }));
    } catch (error) {
      console.error('Error loading projects data:', error);
      return [];
    }
  }

  /**
   * Get services data
   */
  static async getServicesData(): Promise<ServiceData[]> {
    try {
      const { default: services } = await import('@/data/services');

      return services.map(service => ({
        id: service.id.toString(),
        title: service.title,
        description: service.description,
        icon: service.icon,
        shortDescription: service.shortDescription,
        icons: service.icons,
        features: [] // Add features if available in data
      }));
    } catch (error) {
      console.error('Error loading services data:', error);
      return [];
    }
  }

  /**
   * Get contact/social links data
   */
  static async getContactData(): Promise<ContactData> {
    try {
      const { default: socialLinks } = await import('@/data/socialLinks');

      return {
        title: 'Get in Touch',
        email: 'contact@example.com', // This should come from config
        socialLinks: socialLinks.map(link => ({
          id: link.name?.toLowerCase().replace(/\s+/g, '-') || 'link',
          name: link.name,
          url: link.url,
          icon: typeof link.icon === 'string' ? link.icon : 'default-icon',
          text: link.text
        }))
      };
    } catch (error) {
      console.error('Error loading contact data:', error);
      return {
        email: '',
        socialLinks: []
      };
    }
  }

  /**
   * Get all portfolio data
   */
  static async getAllPortfolioData(): Promise<PortfolioData> {
    try {
      const [
        heroData,
        aboutData,
        experiencesData,
        skillsData,
        projectsData,
        servicesData,
        contactData,
      ] = await Promise.all([
        this.getHeroData(),
        this.getAboutData(),
        this.getExperiencesData(),
        this.getSkillsData(),
        this.getProjectsData(),
        this.getServicesData(),
        this.getContactData(),
      ]);

      return {
        hero: heroData,
        about: aboutData,
        experiences: experiencesData,
        skills: skillsData,
        projects: projectsData,
        services: servicesData,
        contact: contactData,
      };
    } catch (error) {
      console.error('Error loading all portfolio data:', error);
      throw new Error('Failed to load portfolio data');
    }
  }

  /**
   * Get featured projects only
   */
  static async getFeaturedProjects(): Promise<ProjectData[]> {
    const projects = await this.getProjectsData();
    return projects.filter(project => project.featured);
  }

  /**
   * Get projects by category
   */
  static async getProjectsByCategory(category: string): Promise<ProjectData[]> {
    const projects = await this.getProjectsData();
    return projects.filter(project => project.category === category);
  }

  /**
   * Get skills by category
   */
  static async getSkillsByCategory(category: string): Promise<SkillData[]> {
    const skills = await this.getSkillsData();
    return skills.filter(skill => skill.title.toLowerCase().includes(category.toLowerCase()));
  }

  /**
   * Search projects by technology
   */
  static async searchProjectsByTechnology(technology: string): Promise<ProjectData[]> {
    const projects = await this.getProjectsData();
    return projects.filter(project =>
      project.technologies?.some((tech: string) =>
        tech.toLowerCase().includes(technology.toLowerCase())
      )
    );
  }
}