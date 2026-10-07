import { Injectable } from '@angular/core';
import { notes } from './data/notes';
import {
  achievements,
  chapters,
  experiments,
  nav,
  principles,
  profile,
  projects,
  skillGroups,
} from './data/site';

@Injectable({ providedIn: 'root' })
export class ContentService {
  readonly profile = profile;
  readonly nav = nav;
  readonly skills = skillGroups;
  readonly chapters = chapters;
  readonly achievements = achievements;
  readonly principles = principles;
  readonly experiments = experiments;

  projects() {
    return projects;
  }

  featuredProjects() {
    return projects.filter((project) => project.featured);
  }

  project(slug: string) {
    return projects.find((project) => project.slug === slug);
  }

  notes() {
    return notes;
  }

  note(slug: string) {
    return notes.find((note) => note.slug === slug);
  }
}
