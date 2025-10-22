import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
	input,
	output
} from '@angular/core';
import { PROJECTS_DATA, type Project } from '../projects.data';
import { Header } from '../../../shared/components/header/header';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-single-project',
	imports: [TranslatePipe, Header],
	templateUrl: './single-project.html',
	styleUrl: './single-project.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleProject {
	projects: Project[] = PROJECTS_DATA;
	project = input.required<Project>();

	close = output<void>();
	projectChanged = output<Project>();

	private translate = inject(TranslateService);

	selectedLang(): string {
		return this.translate.getCurrentLang();
	}

	closeModal(): void {
		this.close.emit();
	}

	nextProject(): void {
		const currentProject = this.project();
		const currentIndex = this.projects.findIndex(
			(p) => p.id === currentProject.id
		);
		const nextIndex = (currentIndex + 1) % this.projects.length; // Wrap around to first project
		const nextProject = this.projects[nextIndex];

		this.projectChanged.emit(nextProject);
	}
}
