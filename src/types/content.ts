export type Locale = "en" | "es";
export type ProjectId = "nomasolvidos" | "claudia";
export type ProjectStatus = "in-development" | "delivered";
export interface ExperienceContent {
  company: string;
  location: string;
  period: string;
  roles: { title: string; period: string }[];
  result?: { value: string; description: string };
  highlights: string[];
  technologies: string[];
}
export interface ProjectContent {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  contribution: string;
  status: string;
  details: string[];
  imageAlt: string;
}
export interface PortfolioContent {
  meta: { title: string; description: string };
  nav: { experience: string; projects: string; about: string; contact: string; label: string; skip: string; home: string };
  controls: { language: string; theme: string; dark: string; light: string; external: string };
  hero: { role: string; description: string; current: string; location: string; projects: string; contact: string };
  experience: { title: string; introduction: string; items: ExperienceContent[] };
  projects: { title: string; introduction: string; problem: string; contribution: string; visit: string; items: ProjectContent[]; earlier: { title: string; visit: string; code: string; items: Pick<ProjectContent, "id" | "title" | "description">[] } };
  about: { title: string; description: string; skillsTitle: string; skills: { title: string; items: string[] }[]; educationTitle: string; degree: string; university: string; exchange: string; languagesTitle: string; languages: string[] };
  contact: { title: string; description: string; email: string };
  footer: { built: string; top: string };
}
