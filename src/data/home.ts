/* Contenus de l’accueil et de la page Réalisations (textes inchangés) */

export const expertise = [
	{
		number: '01',
		title: 'Digital & Data',
		copy: 'Transformez vos données en décisions et vos idées en outils numériques utiles.',
		tags: 'Intelligence artificielle · Développement · Data',
		icon: 'digital',
	},
	{
		number: '02',
		title: 'Ingénierie & IT',
		copy: 'Faites avancer vos projets de conception, d’électronique et de systèmes embarqués.',
		tags: 'Électronique · Systèmes · Informatique',
		icon: 'engineering',
	},
	{
		number: '03',
		title: 'Éco-ingénierie',
		copy: 'Optimisez vos procédés et conciliez performance, énergie et impact environnemental.',
		tags: 'Énergie · Mécanique des fluides · RSE',
		icon: 'eco',
	},
];

export const projects = [
	{
		client: 'VINCI Facilities',
		category: 'Développement numérique',
		title: 'Une application de podcasts pour mieux faire circuler l’information',
	},
	{
		client: 'RTE',
		category: 'Étude & industrialisation',
		title: 'Un accompagnement d’ingénieurs au service d’un projet industriel',
	},
	{
		client: 'QuadrX',
		category: 'Data & mécanique des fluides',
		title: 'Des compétences complémentaires pour répondre à un enjeu technique',
	},
];

export const clients = ['Thales', 'ENGIE', 'VINCI Energies', 'CNRS', 'CNES', 'Mantu', 'Sigfox', 'RTE', 'QuadrX', 'Phoenix Gala', 'Toulouse INP-ENSEEIHT'];

export const bandA = ['Digital', 'Data', 'Intelligence artificielle', 'Électronique', 'Systèmes embarqués', 'IoT'];

export const bandB = ['Énergie', 'Mécanique des fluides', 'RSE', 'Éco-ingénierie', 'Développement', 'Étude'];

export const teamImage =
	'https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/67b47c8f28387bca819ef6c0_N7C_CRPSO2024_5_11zon-p-500.avif';

export const testimonials = [
	{
		initials: 'BJ',
		company: 'RTE',
		text: 'Le résultat est au rendez-vous. Durant cette industrialisation nous avons pu bénéficier de toute l’innovation des étudiants de l’N7 ainsi que d’un suivi qu’on peut sans forcer qualifier de professionnel tant en termes de réactivité que de qualité.',
		name: 'Benoît Jeanson',
		role: 'R&D Project Manager, RTE',
	},
	{
		initials: 'DB',
		company: 'QuadrX',
		text: 'Je recommande vivement N7 Consulting à toute entreprise recherchant un travail sérieux et de qualité pour des projets traitant de problématiques de mécanique des fluides ou d’apprentissage machine.',
		name: 'David Barbier',
		role: 'CTO & Co-Founder, QuadrX',
	},
];

export const videos = [
	{
		title: 'N7 Consulting : accélérateur de talents',
		caption: 'La Junior-Entreprise en images',
		src: 'https://www.dailymotion.com/embed/video/x8fig11',
		href: 'https://www.dailymotion.com/video/x8fig11',
	},
	{
		title: 'Pitch N7 Consulting — Prix EY de la Meilleure Approche Commerciale',
		caption: 'Finale 2021',
		src: 'https://www.youtube-nocookie.com/embed/NnOHKE7nd5Q',
		href: 'https://www.youtube.com/watch?v=NnOHKE7nd5Q',
	},
];

export const projectHref = (client: string) =>
	client === 'VINCI Facilities' ? '/actualites/etude-de-cas-vinci-facilities-application-podcasts' : '/contact';
