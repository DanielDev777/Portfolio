import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/components/footer/footer';
import { Header } from './shared/components/header/header';
import {
	TranslatePipe,
	TranslateDirective,
	TranslateService
} from '@ngx-translate/core';
import { SvgIconComponent } from "./shared/components/svg-icon/svg-icon";

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, Footer, Header],
	templateUrl: './app.html',
	styleUrl: './app.scss'
})
export class App {
	protected readonly title = signal('portfolio');

}
