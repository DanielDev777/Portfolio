import { Component, inject, computed, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { PROJECTS_DATA, type Project } from './projects.data';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
	translate = inject(TranslateService);
	projects: Project[] = PROJECTS_DATA;
}
