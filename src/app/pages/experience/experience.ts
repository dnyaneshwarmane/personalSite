import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../content.service';
import { yearsSince } from '../../data/format';
import { Seo } from '../../seo';

@Component({
  selector: 'app-experience',
  imports: [RouterLink],
  templateUrl: './experience.html',
})
export class Experience implements OnInit {
  private readonly seo = inject(Seo);
  private readonly content = inject(ContentService);

  protected readonly profile = this.content.profile;
  protected readonly chapters = this.content.chapters;
  protected readonly achievements = this.content.achievements;
  protected readonly years = yearsSince(this.profile.workStart);

  ngOnInit(): void {
    this.seo.set({
      title: 'Experience',
      description: `${this.years}+ years as a software developer at ${this.profile.company}, building desktop applications with Qt and C++ and moving into Electron, Angular, and TypeScript.`,
      path: '/experience',
    });
  }
}
