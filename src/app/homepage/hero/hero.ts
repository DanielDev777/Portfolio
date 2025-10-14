import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-hero',
	imports: [TranslatePipe],
	templateUrl: './hero.html',
	styleUrl: './hero.scss'
})
export class Hero {
	translate = inject(TranslateService);
	
	getCharacters() {
		let title = "Frontend Developer";
		return title.split('');
	}

}
