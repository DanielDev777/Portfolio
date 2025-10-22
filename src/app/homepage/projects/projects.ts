import { Component, signal, ChangeDetectionStrategy, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { PROJECTS_DATA, type Project } from './projects.data';
import { SingleProject } from './single-project/single-project';

@Component({
	selector: 'app-projects',
	imports: [TranslatePipe, SingleProject],
	templateUrl: './projects.html',
	styleUrl: './projects.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class Projects {
	private translate = inject(TranslateService);
	
	projects: Project[] = PROJECTS_DATA;
	isModalVisible = signal(false);
	selectedProject = signal<Project | null>(null);

	showModal(project: Project) {
		this.selectedProject.set(project);
		this.isModalVisible.set(true);
	}

	hideModal() {
		this.isModalVisible.set(false);
		this.selectedProject.set(null);
	}

	changeProject(newProject: Project): void {
		this.selectedProject.set(newProject);
	}

	selectedLang(): string {
		return this.translate.getCurrentLang();
	}
}
