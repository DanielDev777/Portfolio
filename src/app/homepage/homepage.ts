import { Component, inject } from '@angular/core';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';

@Component({
  selector: 'app-homepage',
  imports: [Hero, AboutMe],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {
	
}
