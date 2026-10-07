import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { profile } from './data/site';

@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  set(options: { title?: string; description: string; path: string }): void {
    const full = options.title
      ? `${options.title} — ${profile.name}`
      : `${profile.name} — Software developer`;
    const url = `${profile.siteUrl}${options.path === '/' ? '/' : options.path}`;

    this.title.setTitle(full);
    this.meta.updateTag({ name: 'description', content: options.description });
    this.meta.updateTag({ property: 'og:title', content: full });
    this.meta.updateTag({ property: 'og:description', content: options.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: full });
    this.meta.updateTag({ name: 'twitter:description', content: options.description });

    let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  setPerson(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      givenName: profile.givenName,
      familyName: profile.familyName,
      jobTitle: profile.role,
      url: profile.siteUrl,
      email: profile.email,
      image: `${profile.siteUrl}${profile.photo}`,
      telephone: profile.phoneLink.replace('tel:', ''),
      homeLocation: {
        '@type': 'Place',
        name: profile.location,
      },
      worksFor: {
        '@type': 'Organization',
        name: profile.company,
      },
      sameAs: [profile.github, profile.linkedin, profile.hashnode],
      knowsAbout: ['Qt', 'C++', 'Electron', 'Angular', 'TypeScript'],
    };

    let script = this.doc.getElementById('ld-person') as HTMLScriptElement | null;
    if (!script) {
      script = this.doc.createElement('script');
      script.id = 'ld-person';
      script.type = 'application/ld+json';
      this.doc.head.appendChild(script);
    }
    script.text = JSON.stringify(data);
  }
}
