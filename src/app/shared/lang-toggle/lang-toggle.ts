import { Component, inject, signal, effect } from '@angular/core';
import {
	TranslatePipe,
	TranslateDirective,
	TranslateService
} from '@ngx-translate/core';

@Component({
  selector: 'app-lang-toggle',
  imports: [],
  templateUrl: './lang-toggle.html',
  styleUrl: './lang-toggle.scss'
})
export class LangToggle {
	private translate = inject(TranslateService);

	selectedLang = signal<string>(this.getSavedLanguage());

	constructor() {
		this.translate.setFallbackLang('en');
		this.translate.use(this.selectedLang());
		
		effect(() => {
			localStorage.setItem('selectedLanguage', this.selectedLang());
		});
	}

	private getSavedLanguage(): string {
		return localStorage.getItem('selectedLanguage') || 'en';
	}

	useLanguage(language: string): void {
		this.translate.use(language);
		this.selectedLang.set(language);
	}
}
