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
			de: '',
			en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.'
		},
		details: {
			de: '',
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
			de: '',
			en: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.'
		},
		details: {
			de: '',
			en: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.'
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
			de: '',
			en: 'A list, generated through JavaScript API calls to the PokeAPI, containing various informations about different Pokemon.'
		},
		details: {
			de: '',
			en: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.'
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
