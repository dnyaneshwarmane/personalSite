import { Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Blocks } from '../../blocks/blocks';
import { ContentService } from '../../content.service';
import { Seo } from '../../seo';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, Blocks],
  templateUrl: './project-detail.html',
})
export class ProjectDetail {
  private readonly seo = inject(Seo);
  private readonly content = inject(ContentService);

  readonly slug = input.required<string>();
  protected readonly project = computed(() => this.content.project(this.slug()));

  constructor() {
    effect(() => {
      const project = this.project();
      if (!project) {
        this.seo.set({
          title: 'Project not found',
          description: 'That project is not on this site.',
          path: '/projects',
        });
        return;
      }
      this.seo.set({
        title: project.title,
        description: project.summary,
        path: `/projects/${project.slug}`,
      });
    });
  }
}
