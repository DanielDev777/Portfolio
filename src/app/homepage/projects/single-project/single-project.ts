import {
	afterNextRender,
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	ElementRef,
	inject,
	input,
	output,
	viewChild
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
	private destroyRef = inject(DestroyRef);

	private headline =
		viewChild.required<ElementRef<HTMLHeadingElement>>('headline');

	constructor() {
		afterNextRender(() => {
			const headline = this.headline().nativeElement;
			const observer = new ResizeObserver(() => this.updateLineCount(headline));
			observer.observe(headline);
			this.destroyRef.onDestroy(() => observer.disconnect());
			document.fonts.ready.then(() => this.updateLineCount(headline));
			this.updateLineCount(headline);
		});
	}

	private updateLineCount(headline: HTMLHeadingElement): void {
		const range = document.createRange();
		range.selectNodeContents(headline);
		const lines = Array.from(range.getClientRects()).filter(
			(rect) => rect.width > 0
		).length;

		headline.setAttribute('data-lines', String(lines));
	}

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
