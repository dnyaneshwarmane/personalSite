import { Component, inject, OnInit } from '@angular/core';
import { ContentService } from '../../content.service';
import { Seo } from '../../seo';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
})
export class Skills implements OnInit {
  private readonly seo = inject(Seo);
  private readonly content = inject(ContentService);

  protected readonly groups = this.content.skills;

  ngOnInit(): void {
    this.seo.set({
      title: 'Skills',
      description:
        'Qt, C++, Electron, Angular, and TypeScript. The desktop stack I use at work, and the web stack I am learning in public.',
      path: '/skills',
    });
  }
}
