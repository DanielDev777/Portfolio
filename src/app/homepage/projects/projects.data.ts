export interface ProjectSkill {
	name: string;
	img: string;
}

export interface Project {
	id: number;
	name: string;
	img: string;
	description: string;
	details: string;
	duration: string;
	github: string;
	live: string;
	skills: ProjectSkill[];
}

export const PROJECTS_DATA: Project[] = [
	{
		id: 0,
		name: 'Join',
		img: 'img/projects/laptop.png',
		description:
			'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
		details:
			'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
		duration: '5 weeks',
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
		description:
		'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
		details:
		'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
		duration: '3 weeks',
		github: '',
		live: '',
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
		description:
			'A list, generated through JavaScript API calls to the PokeAPI, containing various informations about different Pokemon.',
		details:
			'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
		duration: '1 week',
		github: '',
		live: '',
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
