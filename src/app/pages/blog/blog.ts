import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../content.service';
import { formatDate, readingMinutes } from '../../data/format';
import { Seo } from '../../seo';

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
})
export class Blog implements OnInit {
  private readonly seo = inject(Seo);
  private readonly content = inject(ContentService);

  protected readonly notes = this.content.notes();
  protected readonly profile = this.content.profile;
  protected readonly formatDate = formatDate;
  protected readonly readingMinutes = readingMinutes;

  ngOnInit(): void {
    this.seo.set({
      title: 'Blog',
      description:
        'Technical notes from a Qt and C++ developer learning Electron, Angular, and TypeScript.',
      path: '/blog',
    });
  }
}
