import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-hero',
	imports: [TranslatePipe],
	templateUrl: './hero.html',
	styleUrl: './hero.scss'
})
export class Hero {
	translate = inject(TranslateService);

	private readonly title = 'Fullstack Developer';
	readonly titleTop = this.title.split(' ')[0].split('');
	readonly titleBottom = this.title.split(' ')[1].split('');
}
