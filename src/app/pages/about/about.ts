import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../content.service';
import { yearsSince } from '../../data/format';
import { Seo } from '../../seo';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
})
export class About implements OnInit {
  private readonly seo = inject(Seo);
  private readonly content = inject(ContentService);

  protected readonly profile = this.content.profile;
  protected readonly years = yearsSince(this.profile.workStart);

  ngOnInit(): void {
    this.seo.set({
      title: 'About',
      description: `${this.profile.name} is a software developer in Pune. ${this.years}+ years of Qt and C++ at ${this.profile.company}, now learning Electron, Angular, and TypeScript.`,
      path: '/about',
    });
  }
}
