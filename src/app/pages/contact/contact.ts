import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContentService } from '../../content.service';
import { Seo } from '../../seo';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
})
export class Contact implements OnInit {
  private readonly seo = inject(Seo);
  private readonly content = inject(ContentService);

  protected readonly profile = this.content.profile;
  protected readonly sent = signal(false);
  protected readonly form = inject(FormBuilder).nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(12)]],
  });

  ngOnInit(): void {
    this.seo.set({
      title: 'Contact',
      description: `Write to ${this.profile.name}. LinkedIn, GitHub, and ${this.profile.email}.`,
      path: '/contact',
    });
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.sent.set(false);
      return;
    }

    const value = this.form.getRawValue();
    const subject = encodeURIComponent(`Note from ${value.name}`);
    const body = encodeURIComponent(`${value.message}\n\n— ${value.name}\n${value.email}`);
    this.sent.set(true);
    window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
  }
}
