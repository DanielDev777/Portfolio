import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/components/footer/footer';
import { Header } from './shared/components/header/header';
import {
	TranslatePipe,
	TranslateDirective,
	TranslateService
} from '@ngx-translate/core';
import { SvgIconComponent } from "./shared/components/svg-icon/svg-icon.component";

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, Footer, Header, SvgIconComponent],
	templateUrl: './app.html',
	styleUrl: './app.scss'
})
export class App {
	protected readonly title = signal('portfolio');

	private translate = inject(TranslateService);

	selectedLang: string;

	constructor() {
		this.selectedLang = 'de';
	}

	useLanguage(language: string): void {
		this.translate.use(language);
		this.selectedLang = language;
	}
}
