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
  secondaryEmail?: string;
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

export interface CertificationItem {
  title: string;
  issuer: string;
  period: string;
  issuedDate?: string;
  credentialUrl: string;
  credentialId?: string;
  description: string;
  skills: string[];
}

export interface PublicationItem {
  title: string;
  context: string;
  period: string;
  abstract: string;
  publicationUrl?: string;
}

export interface TimelineEntry {
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  type: 'experience' | 'education';
}

export interface PortfolioData {
  profile: PersonProfile;
  aboutBlurb: string;
  skills: SkillCategory[];
  projects: ProjectItem[];
  timeline: TimelineEntry[];
  certifications: CertificationItem[];
  publications: PublicationItem[];
  contactPitch: string;
}