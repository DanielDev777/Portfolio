import { Injectable } from '@angular/core';
import snippetsData from '../snippets/snippets.json';
@Injectable({
  providedIn: 'root'
})
export class SnippetsService {
	snippets = snippetsData;
}
