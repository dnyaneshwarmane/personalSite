import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then((m) => m.About) },
  { path: 'skills', loadComponent: () => import('./pages/skills/skills').then((m) => m.Skills) },
  {
    path: 'experience',
    loadComponent: () => import('./pages/experience/experience').then((m) => m.Experience),
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'projects/:slug',
    loadComponent: () => import('./pages/projects/project-detail').then((m) => m.ProjectDetail),
  },
  { path: 'ai', loadComponent: () => import('./pages/ai/ai').then((m) => m.AiJourney) },
  { path: 'blog', loadComponent: () => import('./pages/blog/blog').then((m) => m.Blog) },
  { path: 'blog/:slug', loadComponent: () => import('./pages/blog/post').then((m) => m.Post) },
  { path: 'resume', loadComponent: () => import('./pages/resume/resume').then((m) => m.Resume) },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
