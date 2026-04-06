export type NavLink = {
  name: string;
  href: string;
};

export type HeroData = {
  subtitle: string;
  firstName: string;
  lastName: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
};

export type AboutData = {
  sectionTag: string;
  title: string;
  paragraphs: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  date: string;
  title: string;
  company: string;
  current: boolean;
  bullets: string[];
};

export type ProjectItem = {
  date: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string;
  live?: string;
};

export type MetricItem = {
  value: string;
  label: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

export type PortfolioData = {
  navLinks: NavLink[];
  hero: HeroData;
  about: AboutData;
  skills: SkillGroup[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  metrics: MetricItem[];
  contact: ContactItem[];
};