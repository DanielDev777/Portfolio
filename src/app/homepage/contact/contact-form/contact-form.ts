import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe } from '@ngx-translate/core';

interface ContactPayload {
  name: string;
  email: string;
  message: string;
  privacy: boolean;
}

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactForm {
  private readonly http = inject(HttpClient);
  private readonly fb = inject(FormBuilder);
  
  private readonly MAIL_ENDPOINT = 'https://daniel.dev-kersten.de/sendMail.php';
  private readonly MAIL_TEST = false;

  form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]],
	privacy: [false, [Validators.requiredTrue]]
  });

  onSubmit() {
    if (!this.form.valid) return;

    if (this.MAIL_TEST) {
      this.form.reset();
      return;
    }

    const payload = this.form.getRawValue() as ContactPayload;
    
    this.http
      .post<{ success: boolean }>(this.MAIL_ENDPOINT, payload)
      .subscribe({
        next: () => this.form.reset(),
        error: (error: unknown) => console.error(error),
        complete: () => console.info('Email sent successfully')
      });
  }
}