export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'code'; lang: string; text: string }
  | { type: 'ul'; items: string[] };

export interface Skill {
  name: string;
  note: string;
}

export interface SkillGroup {
  title: string;
  summary: string;
  items: Skill[];
}

export interface Project {
  slug: string;
  title: string;
  kind: 'Work' | 'Utility' | 'Study';
  year: string;
  summary: string;
  stack: string[];
  featured: boolean;
  href?: string;
  hrefLabel?: string;
  body: Block[];
}

export interface Note {
  slug: string;
  title: string;
  date: string;
  summary: string;
  body: Block[];
}

export interface Experiment {
  title: string;
  status: string;
  text: string;
  href?: string;
  hrefLabel?: string;
}
