import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LangToggle } from '../../lang-toggle/lang-toggle';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [LangToggle, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Header {
	translate = inject(TranslateService);
	mobileMenuOpen = signal(false);

	toggleMobileMenu() {
		this.mobileMenuOpen.update(open => !open);
	}

	closeMobileMenu() {
		this.mobileMenuOpen.set(false);
	}

	isMobileMenuOpen() {
		return this.mobileMenuOpen();
	}
}
