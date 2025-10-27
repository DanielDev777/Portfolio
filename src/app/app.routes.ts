import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { LegalNotice } from './legal-notice/legal-notice';

export const routes: Routes = [
	{ path: '', component: Homepage },
	{ path: 'legal-notice', component: LegalNotice }
];
