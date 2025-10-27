import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SvgIconComponent } from '../svg-icon/svg-icon';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
	selector: 'app-footer',
	imports: [SvgIconComponent, TranslatePipe],
	templateUrl: './footer.html',
	styleUrl: './footer.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {
	private readonly router = inject(Router);
	isLegalNoticePage = signal(false);

	constructor() {
		this.router.events
			.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe(() => {
				this.isLegalNoticePage.set(this.router.url.includes('legal-notice'));
			});
	}
}
