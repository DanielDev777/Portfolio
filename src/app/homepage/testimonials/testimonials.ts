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
			name: "Dr. Daniela Schomaker",
			title: "Frontend Developer",
			text: {
				de: "Ich hatte das große Glück, mit Daniel an einem Projekt der Developer Akademie zusammenzuarbeiten. Dank seiner langjährigen Erfahrung in der Frontend-Entwicklung, seiner Hilfsbereitschaft und seinen klaren Erklärungen hat er unser Projekt entscheidend vorangebracht. Ein absoluter Gewinn für jedes Team.",
				en: "I was very fortunate to work with Daniel on a Developer Akademie project. Thanks to his many years of experience in frontend development, his willingness to help and his clear explanations, he moved our project forward decisively. An absolute asset to any team."
			},
			link: ""
		},
		{
			name: "Christian Hajduk",
			title: "Frontend Developer",
			text: {
				de: "Daniel war dank seiner großen Erfahrung und der direkten, zielorientierten Umsetzung von Aufgaben eine enorme Bereicherung für unser „Join“-Projekt. Besonders wertvoll waren seine fundierten Lösungsansätze und die Fähigkeit, sein Wissen so transparent zu teilen, dass das gesamte Team fachlich enorm von ihm lernen konnte. Ich schätze ihn als hochprofessionellen Kollegen und bin sehr dankbar für die hervorragende Zusammenarbeit",
				en: "Thanks to his extensive experience and his direct, goal-oriented way of implementing tasks, Daniel was an enormous asset to our “Join” project. His well-founded approaches to solutions were particularly valuable, as was his ability to share his knowledge so transparently that the whole team could learn a great deal from him professionally. I value him as a highly professional colleague and am very grateful for the excellent collaboration"
			},
			link: "https://www.linkedin.com/in/christian-hajduk/"
		},
		{
			name: "Quoc Nam Tran",
			title: "Fullstack Developer",
			text: {
				de: "Es hat mich sehr gefreut, mit Daniel gearbeitet zu haben, da er mit seinen Vorkenntnissen, seinem Workflow und seinem fundierten Wissen im Frontend die Bearbeitung des Join-Projekts stark beschleunigt hat. Auch seine offene und hilfsbereite Art hat dazu beigetragen, für Probleme im Projekt schnellstmöglich passende Lösungen zu finden.",
				en: "I was very glad to have worked with Daniel, as his prior knowledge, his workflow and his sound frontend expertise greatly sped up our work on the Join project. His open and helpful manner also helped us find fitting solutions to problems in the project as quickly as possible."
			},
			link: "https://www.linkedin.com/in/tranqn/"
		},
	]
}
