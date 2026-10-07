import { Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Blocks } from '../../blocks/blocks';
import { ContentService } from '../../content.service';
import { formatDate, readingMinutes } from '../../data/format';
import { Seo } from '../../seo';

@Component({
  selector: 'app-post',
  imports: [RouterLink, Blocks],
  templateUrl: './post.html',
})
export class Post {
  private readonly seo = inject(Seo);
  private readonly content = inject(ContentService);

  readonly slug = input.required<string>();
  protected readonly note = computed(() => this.content.note(this.slug()));
  protected readonly formatDate = formatDate;
  protected readonly readingMinutes = readingMinutes;

  protected readonly neighbors = computed(() => {
    const list = this.content.notes();
    const index = list.findIndex((item) => item.slug === this.slug());
    return {
      newer: index > 0 ? list[index - 1] : undefined,
      older: index >= 0 && index < list.length - 1 ? list[index + 1] : undefined,
    };
  });

  constructor() {
    effect(() => {
      const note = this.note();
      if (!note) {
        this.seo.set({
          title: 'Note not found',
          description: 'That note is not on this site.',
          path: '/blog',
        });
        return;
      }
      this.seo.set({
        title: note.title,
        description: note.summary,
        path: `/blog/${note.slug}`,
      });
    });
  }
}
