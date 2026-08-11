export type ModeId = 'product' | 'business' | 'development';

export interface RoleMode {
  id: ModeId;
  label: string;
  shortLabel: string;
  tagline: string;
  heroHeadline: string;
  heroKicker: string;
  introduction: string;
  featuredProjectIds: string[];
  highlightedSkillCategories: string[];
  resumeUrl: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface ProjectImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface RoleSummary {
  summary: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  year: number;
  featured: boolean;
  categories?: ModeId[];
  images: ProjectImage[];
  technologies: string[];
  responsibilities: string[];
  results: string[];
  links?: ProjectLink[];
  sourceCodeUrl?: string;
  liveUrl?: string;
  roleSummaries: Record<ModeId, RoleSummary>;
  accent: string; // tailwind gradient token
}

export interface CaseStudySection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface CaseStudy {
  projectId: string;
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    metrics: { label: string; value: string }[];
  };
  overview: string;
  problem: string;
  approach: CaseStudySection[];
  outcomes: string[];
  reflections: string;
  gallery?: ProjectImage[];
  timeline?: string;
  team?: string;
  myRole?: string;
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
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  credential: string;
  start: string;
  end: string;
  detail?: string;
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
  defaultMode: ModeId;
  description: string;
  keywords: string[];
  locale: string;
  themeColor: string;
  ogImage: string;
}

export interface Profile {
  fullName: string;
  shortName: string;
  location: string;
  timezone: string;
  pronouns?: string;
  email: string;
  availability: string;
  bio: string;
  longBio: string;
  headshot?: string;
}
