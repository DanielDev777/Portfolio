import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
	translate = inject(TranslateService);

	skills = [
		{
			name: 'HTML',
			src: 'img/icons/skills/html.png'
		},
		{
			name: 'CSS',
			src: 'img/icons/skills/css.png'
		},
		{
			name: 'JavaScript',
			src: 'img/icons/skills/javascript.png'
		},
		{
			name: 'TypeScript',
			src: 'img/icons/skills/typescript.png'
		},
		{
			name: 'Angular',
			src: 'img/icons/skills/angular.png'
		},
		{
			name: 'APIs',
			src: 'img/icons/skills/api.png'
		},
		{
			name: 'Git',
			src: 'img/icons/skills/git.png'
		},
		{
			name: 'Docker',
			src: 'img/icons/skills/docker.png'
		},
		{
			name: 'SQL',
			src: 'img/icons/skills/sql.png'
		},
		{
			name: 'Vue.js',
			src: 'img/icons/skills/vue.png'
		},
	]
}
