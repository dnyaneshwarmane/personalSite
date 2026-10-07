import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Seo } from '../../seo';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
})
export class NotFound implements OnInit {
  private readonly seo = inject(Seo);

  ngOnInit(): void {
    this.seo.set({
      title: 'Page not found',
      description: 'That page is not on this site.',
      path: '/',
    });
  }
}
