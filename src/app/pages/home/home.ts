import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../content.service';
import { formatDate, readingMinutes, yearsSince } from '../../data/format';
import { Seo } from '../../seo';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  private readonly seo = inject(Seo);
  private readonly content = inject(ContentService);

  protected readonly profile = this.content.profile;
  protected readonly years = yearsSince(this.profile.workStart);
  protected readonly projects = this.content.featuredProjects();
  protected readonly notes = this.content.notes();
  protected readonly formatDate = formatDate;
  protected readonly readingMinutes = readingMinutes;

  ngOnInit(): void {
    this.seo.set({
      description: this.profile.summary,
      path: '/',
    });
  }
}
