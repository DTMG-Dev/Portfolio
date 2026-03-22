export interface NavItem {
  id: string;
  label: string;
}

export interface LinkItem {
  label: string;
  url: string;
  icon: string;
}

export interface HeroStat {
  value: string;
  label: string;
  icon: string;
}

export interface PersonProfile {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  location: string;
  currentLocation?: string;
  email: string;
  phone?: string;
  summary: string[];
  strengths: string[];
  social: LinkItem[];
  resumePath: string;
  heroStats: HeroStat[];
}

export interface SkillItem {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface ProjectLink {
  label: string;
  url: string;
  icon: string;
}

export interface ProjectItem {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: ProjectLink[];
}

export interface TimelineEntry {
  title: string;
  organization: string;
  location: string;
  currentLocation?: string;
  period: string;
  description: string[];
  type: 'experience' | 'education' | 'certification';
}

export interface PortfolioData {
  profile: PersonProfile;
  aboutBlurb: string;
  skills: SkillCategory[];
  projects: ProjectItem[];
  timeline: TimelineEntry[];
  contactPitch: string;
}