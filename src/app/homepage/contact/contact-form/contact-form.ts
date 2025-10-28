import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
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

	private readonly MAIL_ENDPOINT =
		'https://daniel.dev-kersten.de/sendMail.php';
	private readonly MAIL_TEST = true;

	modalOpen = signal(false);

	form = this.fb.group(
		{
			name: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
			message: ['', [Validators.required, Validators.minLength(10)]],
			privacy: [false, [Validators.requiredTrue]]
		},
		{ updateOn: 'blur' }
	);

	onSubmit() {
		if (this.form.valid) {
			this.openSuccessModal();
		}
		if (this.MAIL_TEST) {
			this.form.reset();
			return;
		}
		this.sendMail();
	}

	sendMail() {
		const payload = this.form.getRawValue() as ContactPayload;
		this.http
			.post<{ success: boolean }>(this.MAIL_ENDPOINT, payload)
			.subscribe({
				next: () => this.form.reset(),
				error: (error: unknown) => console.error(error),
				complete: () => console.info('Email sent successfully')
			});
	}

	openSuccessModal() {
		console.log('VALID');
		this.modalOpen.set(true);
	}
	
	closeSuccessModal() {
		this.modalOpen.set(false);
	}
}
