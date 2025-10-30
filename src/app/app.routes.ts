import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { LegalNotice } from './legal-notice/legal-notice';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';

export const routes: Routes = [
	{ path: '', component: Homepage },
	{ path: 'legal-notice', component: LegalNotice },
	{ path: 'privacy-policy', component: PrivacyPolicy }
];
