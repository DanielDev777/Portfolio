export interface ProjectSkill {
	name: string;
	img: string;
}

export interface Project {
	id: number;
	name: string;
	img: string;
	detailImg: string;
	description: {
		de: string,
		en: string
	};
	details: {
		de: string,
		en: string
	};
	duration: {
		de: string,
		en: string
	};
	github: string;
	live: string;
	skills: ProjectSkill[];
}

export const PROJECTS_DATA: Project[] = [
	{
		id: 0,
		name: 'Join',
		img: 'img/projects/laptop.png',
		detailImg: 'img/projects/join.png',
		description: {
			de: 'Task-Manager, inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag-and-Drop, weise Benutzer und Kategorien zu.',
			en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.'
		},
		details: {
			de: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way',
			en: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way'
		},
		duration: {
			de: '5 Wochen',
			en: '5 weeks'
		},
		github: '',
		live: '',
		skills: [
			{
				name: 'CSS',
				img: 'img/icons/skills/css.png'
			},
			{
				name: 'HTML',
				img: 'img/icons/skills/html.png'
			},
			{
				name: 'Angular',
				img: 'img/icons/skills/angular.png'
			},
			{
				name: 'TypeScript',
				img: 'img/icons/skills/typescript.png'
			}
		]
	},
	{
		id: 1,
		name: 'El Pollo Loco',
		img: 'img/projects/el_pollo_loco.png',
		detailImg: 'img/projects/pollo.png',
		description: {
			de: 'Jump-, Run- und Wurfspiel auf objektorientierter Basis. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
			en: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.'
		},
		details: {
			de: 'Ich habe ein browserbasiertes Jump-and-Run-Spiel eigenständig von der Idee bis zur Umsetzung entwickelt. Dabei habe ich die Spiellogik, Bewegungsabläufe und Gegnerverhalten programmiert, das Nutzererlebnis optimiert und ein vollständig spielbares Webprojekt realisiert.',
			en: 'I developed a browser-based jump-and-run game from concept through to implementation, working independently to implement core mechanics (movement, jumping, enemy logic), polish the user experience and deliver a playable web build.'
		},
		duration: {
			de: '3 Wochen',
			en: '3 weeks'
		},
		github: 'https://github.com/DanielDev777/El-Pollo-Loco',
		live: '/el_pollo_loco',
		skills: [
			{
				name: 'JavaScript',
				img: 'img/icons/skills/javascript.png'
			},
			{
				name: 'HTML',
				img: 'img/icons/skills/html.png'
			},
			{
				name: 'CSS',
				img: 'img/icons/skills/css.png'
			}
		]
	},
	{
		id: 2,
		name: 'Pokedex',
		img: 'img/projects/pokedex.png',
		detailImg: 'img/projects/pokedex.png',
		description: {
			de: 'Eine durch JavaScript-API-Aufrufe an die PokéAPI generierte Liste, die verschiedene Informationen über unterschiedliche Pokémon enthält.',
			en: 'A list, generated through JavaScript API calls to the PokeAPI, containing various informations about different Pokemon.'
		},
		details: {
			de: 'Ich habe eine interaktive Pokédex-Anwendung mit der PokéAPI erstellt. Dabei war ich verantwortlich für die Datenintegration, ein responsives Benutzerinterface und die Performance-Optimierung, um Informationen übersichtlich und nutzerfreundlich darzustellen. Das Projekt zeigt meine strukturierte Arbeitsweise und mein technisches Verständnis im Frontend-Bereich.',
			en: 'I built an interactive Pokédex using the PokéAPI, managing data integration, responsive UI and performance optimisation to present information in a clear, usable way and demonstrate my frontend tooling and structured workflow.'
		},
		duration: {
			de: '1 Woche',
			en: '1 week'
		},
		github: 'https://github.com/DanielDev777/Pokedex',
		live: '/pokedex',
		skills: [
			{
				name: 'JavaScript',
				img: 'img/icons/skills/javascript.png'
			},
			{
				name: 'HTML',
				img: 'img/icons/skills/html.png'
			},
			{
				name: 'CSS',
				img: 'img/icons/skills/css.png'
			}
		]
	}
];
