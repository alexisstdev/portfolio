import { JSX } from 'preact';

export interface ExperienceItem {
  title: string;
  role: string;
  time: string;
  description: string;
  techStack: string[];
}

interface ProjectItem {
  title: string;
  id: string;
  category: string;
  preview: string;
  description: string;
  tags: string[];
  mainTags: string[];
  longDescription?: string;
  images?: string[];
  video?: string;
  github?: string;
  live?: string;
}
