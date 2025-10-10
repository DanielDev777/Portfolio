import { Component, inject } from '@angular/core';
import { SnippetsService } from '../../services/snippets-service';

@Component({
	selector: 'app-hero',
	imports: [],
	templateUrl: './hero.html',
	styleUrl: './hero.scss'
})
export class Hero {
	snippets = inject(SnippetsService);
}
