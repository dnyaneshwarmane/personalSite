import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../content.service';
import { Seo } from '../../seo';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
})
export class Projects implements OnInit {
  private readonly seo = inject(Seo);
  private readonly content = inject(ContentService);

  protected readonly projects = this.content.projects();

  ngOnInit(): void {
    this.seo.set({
      title: 'Projects',
      description:
        'Desktop product work in Qt and C++, a CPU usage utility, this Angular site, and Rust FFI studies.',
      path: '/projects',
    });
  }
}
