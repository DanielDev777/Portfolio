import { Component, inject } from '@angular/core';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Testimonials } from './testimonials/testimonials';



@Component({
  selector: 'app-homepage',
  imports: [Hero, AboutMe, Skills, Projects, Testimonials],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {
	
}
