import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../content.service';
import { Seo } from '../../seo';

@Component({
  selector: 'app-ai',
  imports: [RouterLink],
  templateUrl: './ai.html',
})
export class AiJourney implements OnInit {
  private readonly seo = inject(Seo);
  private readonly content = inject(ContentService);

  protected readonly experiments = this.content.experiments;
  protected readonly principles = this.content.principles;

  ngOnInit(): void {
    this.seo.set({
      title: 'AI journey',
      description:
        'How Dnyaneshwar Mane is learning to use AI while moving from Qt and C++ into Angular and TypeScript.',
      path: '/ai',
    });
  }
}
