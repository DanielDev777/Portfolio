import { Component, inject, signal } from '@angular/core';
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

	selectedLang = signal('en');

	constructor() {
		this.translate.setFallbackLang('en');
        this.translate.use('en');
	}

	useLanguage(language: string): void {
		this.translate.use(language);
		this.selectedLang.set(language);
	}
}
