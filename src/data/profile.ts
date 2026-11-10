import type { ProjectId, ProjectStatus } from "../types/content";
export const profile = {
  name: "Sergio Llenderrozos",
  email: "sergiollende7@gmail.com",
  github: "https://github.com/sergiollende",
  linkedin: "https://www.linkedin.com/in/sergiollenderrozos/",
};
interface ProjectMetadata {
  status: ProjectStatus;
  url: string;
  technologies: string[];
  image?: { src: string; width: number; height: number };
}
export const projectMetadata: Record<ProjectId, ProjectMetadata> = {
  nomasolvidos: { status: "in-development", url: "https://nomasolvidos.es/", technologies: ["Next.js", "Google Calendar", "Outlook", "Email"], image: { src: "/projects/nomasolvidos.webp", width: 1440, height: 1050 } },
  claudia: { status: "delivered", url: "https://claudialucaspsicologia.com/", technologies: ["Astro", "SEO"], image: { src: "/projects/claudia.webp", width: 1440, height: 1050 } },
};
export function getProjectMetadata(id: string): ProjectMetadata {
  if (id !== "nomasolvidos" && id !== "claudia") throw new Error(`Unknown project: ${id}`);
  return projectMetadata[id];
}

// Keep earlier work accessible without giving it the featured-project layout.
export const earlierProjectMetadata = {
  stackTower: {
    url: "https://llendestacktower.netlify.app/",
    github: "https://github.com/sergiollende/StackTower",
    technologies: ["HTML", "CSS"],
  },
};

export function getEarlierProjectMetadata(id: string) {
  if (id !== "stackTower") throw new Error(`Unknown earlier project: ${id}`);
  return earlierProjectMetadata[id];
}
