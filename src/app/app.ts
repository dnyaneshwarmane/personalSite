import { DOCUMENT } from '@angular/common';
import { Component, HostListener, effect, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ContentService } from './content.service';
import { Seo } from './seo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly doc = inject(DOCUMENT);
  private readonly seo = inject(Seo);
  private readonly content = inject(ContentService);

  protected readonly profile = this.content.profile;
  protected readonly nav = this.content.nav;
  protected readonly menuOpen = signal(false);
  protected readonly year = new Date().getFullYear();

  constructor() {
    this.seo.setPerson();
    effect(() => {
      this.doc.body.classList.toggle('menu-open', this.menuOpen());
    });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }

  @HostListener('window:resize')
  protected onResize(): void {
    if (window.innerWidth > 880) {
      this.closeMenu();
    }
  }
}
