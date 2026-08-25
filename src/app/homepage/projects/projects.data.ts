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
	github?: string;
	live?: string;
	liveLabelKey?: string;
	wip?: boolean;
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
			de: 'Als Full-Stack Frontend-Entwickler implementierte ich das Authentifizierungssystem, die Firebase-Integration und das Drag-and-Drop Task-Board für diese Angular-Anwendung. Ich war verantwortlich für responsives UI/UX-Design, die Entwicklung wiederverwendbarer Komponenten und umfassende Code-Dokumentation.',
			en: 'As a Full-Stack Frontend Developer, I implemented the authentication system, Firebase integration, and drag-and-drop task board for this Angular application. I was responsible for responsive UI/UX design, reusable component development, and comprehensive code documentation.'
		},
		duration: {
			de: '5 Wochen',
			en: '5 weeks'
		},
		github: 'https://github.com/DanielDev777/join',
		live: 'https://join.dev-kersten.de/',
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
	},
	{
		id: 3,
		name: 'KanMind',
		img: 'img/projects/kanmind.png',
		detailImg: 'img/projects/kanmind.png',
		description: {
			de: 'Kanban-Board zur Team-Organisation. Erstelle Boards, lade Mitglieder ein und verfolge Aufgaben nach Status, Priorität und zuständiger Person.',
			en: 'Kanban board for team organization. Create boards, invite members and track tasks by status, priority and the person responsible.'
		},
		details: {
			de: 'Ich habe das komplette Backend als REST-API mit Django REST Framework entwickelt. Dazu gehörten die Datenmodellierung für Boards, Aufgaben und Kommentare, eine tokenbasierte Authentifizierung mit Registrierung und Login sowie ein rollenbasiertes Berechtigungssystem, das zwischen Board-Besitzern, Mitgliedern und Task-Erstellern unterscheidet. Das Frontend stammt nicht von mir.',
			en: 'I built the entire backend as a REST API with Django REST Framework. That covered the data modelling for boards, tasks and comments, token-based authentication with registration and login, and a role-based permission system distinguishing board owners, members and task creators. The frontend is not my work.'
		},
		duration: {
			de: '3 Wochen',
			en: '3 weeks'
		},
		github: 'https://github.com/DanielDev777/KanMind',
		live: 'https://kanmind.dev-kersten.de/',
		skills: [
			{
				name: 'Python',
				img: 'img/icons/skills/python.svg'
			},
			{
				name: 'Django',
				img: 'img/icons/skills/django.svg'
			},
			{
				name: 'REST API',
				img: 'img/icons/skills/api.png'
			},
			{
				name: 'SQLite',
				img: 'img/icons/skills/sql.png'
			}
		]
	},
	{
		id: 4,
		name: 'Coderr',
		img: 'img/projects/coderr.png',
		detailImg: 'img/projects/coderr.png',
		description: {
			de: 'Marktplatz für Freelancer-Dienstleistungen. Anbieter stellen Angebote in mehreren Preisstufen ein, Kunden buchen sie und bewerten die Zusammenarbeit.',
			en: 'Marketplace for freelance services. Providers publish offers in several pricing tiers, customers order them and review the collaboration afterwards.'
		},
		details: {
			de: 'Ich habe das Backend eigenständig als REST-API mit Django REST Framework umgesetzt. Ich baute getrennte Profile für Business- und Kundenkonten, Angebote mit gestaffelten Preisstufen, die Bestellabwicklung inklusive Statuswechsel sowie ein Bewertungssystem. Zusätzlich habe ich Filter-, Such- und Sortierparameter für die Angebotsliste und Endpunkte für Plattform-Statistiken entwickelt. Das Frontend stammt nicht von mir.',
			en: 'I implemented the backend on my own as a REST API with Django REST Framework. I built separate profiles for business and customer accounts, offers with tiered pricing, the order flow including status transitions, and a review system. On top of that I added filtering, search and ordering parameters for the offer list plus endpoints for platform statistics. The frontend is not my work.'
		},
		duration: {
			de: '3 Wochen',
			en: '3 weeks'
		},
		github: 'https://github.com/DanielDev777/Coderr',
		live: 'https://coderr.dev-kersten.de/',
		skills: [
			{
				name: 'Python',
				img: 'img/icons/skills/python.svg'
			},
			{
				name: 'Django',
				img: 'img/icons/skills/django.svg'
			},
			{
				name: 'REST API',
				img: 'img/icons/skills/api.png'
			},
			{
				name: 'SQLite',
				img: 'img/icons/skills/sql.png'
			}
		]
	},
	{
		id: 5,
		name: 'IT-Service Vitense',
		img: 'img/projects/it-service.png',
		detailImg: 'img/projects/it-service.png',
		description: {
			de: 'Website für einen selbstständigen IT-Techniker im Raum Hamburg. Leistungsübersicht, Festpreise und Kontaktformular für Besucher, die schnell Hilfe brauchen.',
			en: 'Website for a self-employed IT technician near Hamburg. Service overview, fixed prices and a contact form for visitors who need help fast.'
		},
		details: {
			de: 'Ich habe die Seite nach geliefertem Design mit Angular umgesetzt und als statisch vorgerenderte Seiten auf einfachem Shared Hosting ausgeliefert, jede Route mit eigenen Meta-Daten. Dazu kamen das responsive Layout, Barrierefreiheit nach WCAG 2.2 AA und die Absicherung des PHP-Kontaktformulars gegen Header-Injection und Spam.',
			en: 'I implemented the site in Angular from a supplied design and shipped it as statically prerendered pages on plain shared hosting, each route with its own metadata. On top of that came the responsive layout, WCAG 2.2 AA accessibility and hardening the PHP contact form against header injection and spam.'
		},
		duration: {
			de: '10 Tage',
			en: '10 days'
		},
		live: 'https://vitense-it-service.de',
		liveLabelKey: 'projects.website',
		skills: [
			{
				name: 'Angular',
				img: 'img/icons/skills/angular.png'
			},
			{
				name: 'TypeScript',
				img: 'img/icons/skills/typescript.png'
			},
			{
				name: 'SCSS',
				img: 'img/icons/skills/css.png'
			},
			{
				name: 'HTML',
				img: 'img/icons/skills/html.png'
			}
		]
	},
	{
		id: 6,
		name: 'DABubble',
		img: 'img/projects/DABubble.jpg',
		detailImg: 'img/projects/DABubble.jpg',
		description: {
			de: 'Slack-ähnliche Team-Chat-Anwendung mit Kanälen, Threads, Reaktionen und Datei-Anhängen. Nachrichten und Anwesenheit werden in Echtzeit übertragen.',
			en: 'Slack-style team chat with channels, threads, reactions and file attachments. Messages and presence are delivered in real time.'
		},
		details: {
			de: 'Fullstack-Entwicklung mit Angular und Django REST Framework. Echtzeit-Messaging und Benutzerstatus über WebSockets, sichere JWT-Authentifizierung sowie Google- und Gast-Login implementiert. Channels, Direktnachrichten, Threads, Reaktionen, Datei-Uploads und Suche entwickelt. Die Anwendung mit PostgreSQL und Redis vollständig dockerisiert und das Backend testgetrieben mit umfangreichen automatisierten Tests umgesetzt.',
			en: 'Full-stack development with Angular and Django REST Framework. Implemented real-time messaging and presence using WebSockets, secure JWT authentication, Google and guest login, channels, direct messages, threads, reactions, file uploads and search. Dockerized the application with PostgreSQL and Redis and developed the backend test-first with extensive automated testing.'
		},
		duration: {
			de: 'laufend seit Juli 2026',
			en: 'ongoing since July 2026'
		},
		github: 'https://github.com/DanielDev777/DABubble',
		wip: true,
		skills: [
			{
				name: 'Python',
				img: 'img/icons/skills/python.svg'
			},
			{
				name: 'Django',
				img: 'img/icons/skills/django.svg'
			},
			{
				name: 'REST API',
				img: 'img/icons/skills/api.png'
			},
			{
				name: 'PostgreSQL',
				img: 'img/icons/skills/sql.png'
			},
			{
				name: 'Docker',
				img: 'img/icons/skills/docker.png'
			}
		]
	},
	{
		id: 7,
		name: 'Nerdic',
		img: 'img/projects/nerdic.png',
		detailImg: 'img/projects/nerdic.png',
		description: {
			de: 'Eine individuelle WordPress-Website zur Präsentation des Unternehmens, seiner Leistungen und Markenidentität in einem modernen und visuell einheitlichen Webauftritt.',
			en: 'A custom WordPress website created to present the company, its services and brand identity through a modern and visually consistent web presence.'
		},
		details: {
			de: 'WordPress-Entwicklung in enger Zusammenarbeit mit der Grafikerin des Unternehmens. Einrichtung und Anpassung des WordPress-Themes, Umsetzung von Frontend-Layouts und Styling sowie gezielte Änderungen und Erweiterungen am Theme-Code zur Umsetzung des Designs.',
			en: "WordPress development in close collaboration with the company's graphic designer. Set up and customized the WordPress theme, implemented frontend layouts and styling, and made targeted theme code adjustments and extensions to match the provided design."
		},
		duration: {
			de: '2 Wochen',
			en: '2 weeks'
		},
		live: 'https://nerdic.org',
		liveLabelKey: 'projects.website',
		skills: [
			{
				name: 'WordPress',
				img: 'img/icons/skills/wordpress.svg'
			},
			{
				name: 'PHP',
				img: 'img/icons/skills/php.svg'
			},
			{
				name: 'HTML',
				img: 'img/icons/skills/html.png'
			},
			{
				name: 'CSS/SCSS',
				img: 'img/icons/skills/css.png'
			},
			{
				name: 'JavaScript',
				img: 'img/icons/skills/javascript.png'
			}
		]
	},
	{
		id: 8,
		name: 'Barista Lounge',
		img: 'img/projects/barista-lounge.png',
		detailImg: 'img/projects/barista-lounge.png',
		description: {
			de: 'Ein Shopify-basierter Onlineshop für Specialty Coffee, Kaffeezubehör und Equipment mit einem modernen und produktorientierten Einkaufserlebnis.',
			en: 'A Shopify-based online store for specialty coffee, coffee equipment and accessories with a modern and product-focused shopping experience.'
		},
		details: {
			de: 'Frontend-Entwicklung und Unterstützung innerhalb eines bestehenden Shopify-Projekts. Unterstützung des leitenden Entwicklers bei der Umsetzung und Optimierung von Storefront-Komponenten, Layouts und responsivem Styling mit Fokus auf eine konsistente User Experience.',
			en: 'Frontend development and support within an existing Shopify project. Assisted the lead developer with implementing and refining storefront components, layouts and responsive styling while ensuring a consistent user experience across the shop.'
		},
		duration: {
			de: '4 Wochen',
			en: '4 weeks'
		},
		skills: [
			{
				name: 'Shopify',
				img: 'img/icons/skills/shopify.svg'
			},
			{
				name: 'Liquid',
				img: 'img/icons/skills/liquid.svg'
			},
			{
				name: 'HTML',
				img: 'img/icons/skills/html.png'
			},
			{
				name: 'CSS/SCSS',
				img: 'img/icons/skills/css.png'
			},
			{
				name: 'JavaScript',
				img: 'img/icons/skills/javascript.png'
			}
		]
	}
];
