import { Component, inject } from '@angular/core';
import { SnippetsService } from '../services/snippets-service';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-homepage',
  imports: [Hero],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {
	snippets = inject(SnippetsService);
	
}
