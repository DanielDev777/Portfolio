import { Component, inject } from '@angular/core';
import { SnippetsService } from '../services/snippets-service';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {
	snippets = inject(SnippetsService);
	
	
}
