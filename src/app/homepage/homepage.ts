import { Component, inject } from '@angular/core';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';



@Component({
  selector: 'app-homepage',
  imports: [Hero, AboutMe, Skills, Projects],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {
	
}
