export interface ProjectLink {
  label: string;
  href: string;
  icon?: 'external' | 'github' | 'demo';
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  year: string | number;
  featured: boolean;
  category: 'Full-Stack' | 'Frontend' | 'Backend & AI' | 'Mobile & Audio' | 'Academic / ML';
  technologies: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  accent: string;
  isWorkingDemo?: boolean;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
  tags: string[];
  companyUrl?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
  highlight?: boolean;
}

export interface EducationEntry {
  id: string;
  institution: string;
  credential: string;
  start: string;
  end: string;
  detail?: string;
  location?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle?: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'mail' | 'website';
}

export interface SiteConfig {
  name: string;
  domain: string;
  url: string;
  description: string;
  keywords: string[];
  locale: string;
  themeColor: string;
  ogImage: string;
}

export interface Profile {
  fullName: string;
  shortName: string;
  title: string;
  headline: string;
  location: string;
  timezone: string;
  email: string;
  availability: string;
  bio: string;
  longBio: string;
  headshot: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

