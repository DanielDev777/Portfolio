import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	input,
	Output
} from '@angular/core';
import { type Project } from '../projects.data';
import { Header } from '../../../shared/components/header/header';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
	selector: 'app-single-project',
	imports: [TranslatePipe, Header],
	templateUrl: './single-project.html',
	styleUrl: './single-project.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleProject {
	project = input.required<Project>();

	@Output() close = new EventEmitter<void>();

	closeModal(): void {
		this.close.emit();
	}
}
