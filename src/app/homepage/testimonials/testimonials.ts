import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  imports: [TranslatePipe],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {
	private translate = inject(TranslateService);

	selectedLang(): string {
		return this.translate.getCurrentLang();
	}
	
	testimonials = [
		{
			name: "Tobias Lange",
			title: "Frontend Developer",
			text: {
				de: "Karl really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
				en: "Karl really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment."
			},
			link: ""
		},
		{
			name: "Maria Schäfer",
			title: "Frontend Developer",
			text: {
				de: "It was a great pleasure to work with Karl. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.",
				en: "It was a great pleasure to work with Karl. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well."
			},
			link: ""
		},
		{
			name: "David Braun",
			title: "Frontend Developer",
			text: {
				de: "Karl was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.",
				en: "Karl was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals."
			},
			link: ""
		},
	]
}
