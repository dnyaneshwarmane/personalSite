import { Component, inject, OnInit } from '@angular/core';
import { ContentService } from '../../content.service';
import { yearsSince } from '../../data/format';
import { Seo } from '../../seo';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.html',
})
export class Resume implements OnInit {
  private readonly seo = inject(Seo);
  private readonly content = inject(ContentService);

  protected readonly profile = this.content.profile;
  protected readonly projects = this.content.projects();
  protected readonly years = yearsSince(this.profile.workStart);
  protected readonly skillLines = this.content.skills.map((group) => ({
    title: group.title,
    names: group.items.map((item) => item.name).join(', '),
  }));

  ngOnInit(): void {
    this.seo.set({
      title: 'Resume',
      description: `Resume of ${this.profile.name}, software developer. Qt, C++, Electron, Angular, and TypeScript.`,
      path: '/resume',
    });
  }

  protected print(): void {
    window.print();
  }
}
