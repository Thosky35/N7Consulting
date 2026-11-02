/* ------------------------------------------------------------------ */
/*  Contenu du site N7Consulting                                       */
/*  Mini-markup dans les textes : **gras** et [libellé](lien)          */
/* ------------------------------------------------------------------ */

const CDN = 'https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/';
const BLOG = 'https://cdn.prod.website-files.com/680f9779a28582b229e3585f/';

// ← À adapter selon l’hébergement réel de ta version du site
const HOST = 'Webflow';

export const site = {
	name: 'N7Consulting',
	email: 'contact@n7consulting.fr',
	address: '2 rue Charles Camichel, 31000 Toulouse',
	mapUrl: 'https://maps.app.goo.gl/FfJGui8JWUYhUUGC7',
	linkedin: 'https://fr.linkedin.com/company/n7-consulting',
	instagram: 'https://www.instagram.com/n7consulting/',
	brochure: `${CDN}699e0eb658bbef180d016e90_plaquette_commerciale_n7_consulting_compressed%20%281%29.pdf`,
	partners: [
		{ name: 'Société Générale', href: 'https://particuliers.sg.fr/', logo: `${CDN}67c0852826dd15160d215ae7_Societe%20generale_blanc.png` },
		{ name: 'VINCI Energies', href: 'https://www.vinci-energies.com/', logo: `${CDN}67c085286f5365d8a9e7cd83_Vinci%20energies_blanc.png` },
		{ name: 'Wavestone', href: 'https://www.wavestone.com/fr/', logo: `${CDN}67d8a5bc4529e90eb63623a5_Wavestone_Logo_Blanc.png` },
		{ name: 'ALTEN', href: 'https://www.alten.fr/', logo: `${CDN}68d4333652e8a997d5be2fe6_ALTEN_White.png` },
		{ name: 'PwC', href: 'https://www.pwc.fr/fr.html', logo: `${CDN}67c08af84a1d883205d094a7_pwc.png` },
	],
};

/* ----------------------------- Types ------------------------------ */

export interface Service { icon: string; title: string; items: string[] }
export interface ServiceGroup { eyebrow: string; title: string; text: string; services: Service[] }
export interface CaseStudy { client: string; tag: string; text: string }
export interface Step { number: string; title: string; text: string; image: string }
export interface Pole { slug: string; number: string; title: string; text: string }
export interface Member { first: string; last: string; role: string; photo: string; linkedin: string }
export interface Entry { year: string; items: string[]; image?: string; imageAlt?: string; imageKind?: 'logo' | 'photo' }
export interface Environment { id: string; label: string; title: string; text: string; image: string; imageKind: 'logo' | 'photo'; list?: string[]; facts?: { value: string; label: string }[] }
export interface LegalSection { title: string; rows?: [string, string][]; paragraphs?: string[]; subs?: { title: string; text?: string; list?: string[] }[] }

interface Base { title: string; intro: string; eyebrow: string; headingLead: string; headingEm: string; lead: string }
export interface ServicePage extends Base { kind: 'service'; groups: ServiceGroup[]; cases?: { eyebrow: string; title: string; items: CaseStudy[] } }
export interface AboutPage extends Base {
	kind: 'about';
	whatIs: { eyebrow: string; title: string; text: string; link: { label: string; href: string } };
	stats: { value: string; label: string }[];
	reasons: { icon: string; title: string; text: string }[];
	team: Member[];
	values: { icon: string; title: string }[];
	purpose: string;
	environment: Environment[];
	timeline: Entry[];
}
export interface ContactPage extends Base { kind: 'contact'; services: string[]; sources: string[]; formEndpoint: string }
export interface LegalPage extends Base { kind: 'legal'; sections: LegalSection[] }
export type Page = ServicePage | AboutPage | ContactPage | LegalPage;

export type Block =
	| { type: 'lead'; text: string }
	| { type: 'p'; text: string }
	| { type: 'h2'; text: string }
	| { type: 'ul'; items: string[] }
	| { type: 'ol'; items: string[] }
	| { type: 'logos'; title: string; items: { name: string; src: string }[] };

export interface Article {
	slug: string;
	title: string;
	category: string;
	date: string;
	dateIso: string;
	image: string;
	imageAlt: string;
	intro: string;
	blocks: Block[];
	sources?: { label: string; href: string }[];
}

/* ------------------------- Pôles & méthode ------------------------- */

export const poles: Pole[] = [
	{ slug: 'digital-data', number: '01', title: 'Digital & Data', text: 'Web, mobile, logiciels, data et IA' },
	{ slug: 'ingenierie-it', number: '02', title: 'Ingénierie & IT', text: 'Électronique, embarqué, IoT' },
	{ slug: 'eco-ingenierie', number: '03', title: 'Éco-ingénierie', text: 'Eau, énergie, RSE, fluides' },
];

export const method: Step[] = [
	{
		number: '01',
		title: 'Cahier des charges',
		text: 'Après votre premier contact, nous fixons un rendez-vous pour analyser vos besoins et comprendre votre projet en profondeur. Nous vous remettons ensuite un devis ajusté à votre demande, avant de lancer le développement.',
		image: `${CDN}67b47c9509b063ec3f6e953b_journee_intervenant_je%20%287%29_2_11zon.avif`,
	},
	{
		number: '02',
		title: 'Développement',
		text: 'Les étudiants retenus, appelés intervenants, suivent à la lettre le cahier des charges. Un chargé d’affaires dédié vous accompagne en continu : rompu à la gestion de projet, il anticipe les risques et veille à la bonne progression des travaux.',
		image: `${CDN}67b47c8f0a38e41d18e4b7ed_MembreJE_PC_4_11zon.avif`,
	},
	{
		number: '03',
		title: 'Tests et validation',
		text: 'Nous testons et validons ensemble chaque fonctionnalité avant la mise en service. Pendant la période de garantie, nous restons disponibles pour résoudre le moindre souci.',
		image: `${CDN}67b47c90b7e1481582208392_journee_intervenant_je%20%2878%29_3_11zon.avif`,
	},
];

/* ------------------------------ Pages ------------------------------ */

export const pages: Record<string, Page> = {
	'digital-data': {
		kind: 'service',
		title: 'Digital & Data',
		eyebrow: 'Nos prestations · Pôle 01',
		intro: 'Sites web, applications mobiles, logiciels, traitement de données et intelligence artificielle : N7Consulting réalise vos projets digitaux et data sur mesure.',
		headingLead: 'Transformez vos idées digitales',
		headingEm: 'en solutions innovantes',
		lead: 'Des sites web élégants aux applications métier, découvrez comment nos étudiants ingénieurs donnent vie à vos projets numériques.',
		groups: [
			{
				eyebrow: 'Digital',
				title: 'Nos services digitaux',
				text: 'Le digital accompagne une entreprise à chaque étape, du lancement à la pérennisation. Une idée à concrétiser ? **Une application web** ou **un site** la fera connaître. Un développement commercial qui stagne ? **Un site internet** peut relancer la dynamique. Un site vieillissant ? **Il est temps de le moderniser.**',
				services: [
					{
						icon: 'web',
						title: 'Application web',
						items: [
							'**Applications web sur mesure**, pour aller bien au-delà du simple site vitrine',
							'**Fonctionnalités avancées** : gestion de comptes, personnalisation, collecte de données',
							'**Une expérience utilisateur soignée** pour engager et fidéliser vos clients',
							'**Un outil puissant** pour concrétiser votre idée et soutenir la croissance de votre entreprise',
						],
					},
					{
						icon: 'site',
						title: 'Site vitrine',
						items: [
							'**Une vitrine numérique** qui renforce votre visibilité et votre crédibilité',
							'**Présentez clairement** votre activité, vos produits et vos services',
							'**Répondez aux attentes du marché** : 63 % des TPE/PME jugent leur présence en ligne indispensable',
							'**Franchissez le premier pas vers le digital** avec un site professionnel, accessible et percutant',
						],
					},
					{
						icon: 'mobile',
						title: 'Application mobile',
						items: [
							'**Restez en contact avec vos clients** à tout moment grâce à une application dédiée',
							'**Soyez sur leur smartphone**, l’outil le plus utilisé au quotidien',
							'**Renforcez l’engagement** avec une expérience fluide, accessible et personnalisée',
							'**Faites de l’application un levier de croissance** pour votre activité',
						],
					},
					{
						icon: 'software',
						title: 'Logiciels',
						items: [
							'**Logiciels développés sur mesure** pour répondre précisément à vos besoins',
							'**Des processus optimisés** par des solutions adaptées à votre activité',
							'**Un outil qui s’adapte à vous**, et non l’inverse : fini les compromis des solutions standard',
							'**Plus d’efficacité, de fluidité et de performance** au quotidien',
						],
					},
				],
			},
			{
				eyebrow: 'Data',
				title: 'Nos services data',
				text: 'Les données sont indispensables pour décider et se développer. Leur analyse, renforcée par l’intelligence artificielle, éclaire votre connaissance des clients, des processus et des opérations : **tendances invisibles à l’œil nu, optimisation en temps réel, prévisions fiables.** L’IA transforme l’information brute en actions concrètes, au service de la performance et de la croissance.',
				services: [
					{
						icon: 'database',
						title: 'Traitement de BDD',
						items: [
							'**Analysez votre entreprise en profondeur** avec un outil de traitement de données sur mesure',
							'**Repérez vos leviers de croissance** et anticipez les risques avant qu’ils surviennent',
							'**Décidez chaque jour en confiance**, sur la base de données fiables et pertinentes',
							'**Libérez le potentiel de vos données** pour piloter votre activité',
						],
					},
					{
						icon: 'ai',
						title: 'Intelligence artificielle',
						items: [
							'**Intégrez l’IA à votre projet**, même sans expertise préalable',
							'**Exploitez vos données** avec des modèles d’analyse et de prédiction sur mesure',
							'**Concevez des solutions innovantes** alignées sur vos objectifs métier',
							'**Profitez d’un accompagnement personnalisé** à chaque étape du projet',
						],
					},
				],
			},
		],
		cases: {
			eyebrow: 'Réalisations',
			title: 'Quelques projets menés par nos équipes',
			items: [
				{ client: 'Vinci Facilities', tag: 'Application mobile', text: 'Une application ergonomique de communication interne : publication de podcasts accessibles à tous les employés, pilotage mains libres par commande vocale et mesure du taux d’écoute.' },
				{ client: 'Water Horizon', tag: 'Site vitrine', text: 'Refonte du site de cette start-up toulousaine, à l’initiative de son jeune dirigeant Jean-Emmanuel Faure : une vitrine de marque et un outil pour faire connaître ses produits et services au plus grand nombre.' },
				{ client: 'CertiPair', tag: 'Logiciel', text: 'Un programme en langage C qui lit les informations de la carte Vitale des patients, les enregistre dans un fichier JSON puis les transmet de façon sécurisée au site de Certipair, via une API.' },
				{ client: 'Oncopole · Institut Universitaire du Cancer de Toulouse', tag: 'Application web & mobile', text: 'Une application web ludique pour sensibiliser personnel médical, patients et proches aux précautions d’emploi des médicaments, déclinée ensuite en application mobile.' },
			],
		},
	},

	'ingenierie-it': {
		kind: 'service',
		title: 'Ingénierie & IT',
		eyebrow: 'Nos prestations · Pôle 02',
		intro: 'Conception électronique, systèmes embarqués, objets connectés et sciences appliquées : la Junior-Entreprise de l’ENSEEIHT réalise vos projets d’ingénierie à Toulouse.',
		headingLead: 'Transformez vos défis industriels',
		headingEm: 'en solutions d’ingénierie sur mesure',
		lead: 'De la conception électronique à la mécanique des fluides, nos expertises se mettent au service de vos projets les plus complexes.',
		groups: [
			{
				eyebrow: 'Ingénierie',
				title: 'Nos services d’ingénierie',
				text: 'Conception électronique, systèmes embarqués, objets connectés et sciences appliquées : nous développons des solutions **sur mesure, innovantes** et adaptées à vos besoins.',
				services: [
					{
						icon: 'circuit',
						title: 'Conception électronique',
						items: [
							'**Cartes électroniques sur mesure**, conçues à partir de votre cahier des charges',
							'**Prise en compte de vos contraintes** : environnement, encombrement, consommation',
						],
					},
					{
						icon: 'embedded',
						title: 'Systèmes embarqués',
						items: [
							'**Développement complet** de systèmes embarqués autonomes, à partir d’un besoin ou d’une simple idée',
							'**Intégration intelligente** d’électronique, d’informatique et de mécatronique',
							'**IHM sur mesure** pour une interaction fluide et intuitive avec l’utilisateur',
						],
					},
					{
						icon: 'iot',
						title: 'Objets connectés et IoT',
						items: [
							'**Logiciels sur mesure** pour relier votre objet à tout appareil : PC, smartphone, tablette…',
							'**Compatibilité multiplateforme** grâce à notre expertise en communication embarquée',
							'**Protocoles locaux maîtrisés** : Bluetooth, BLE, ZigBee, Wi-Fi',
							'**Connexion à distance simplifiée** via Sigfox, LoRa, GSM, 3G et 4G pour l’Internet des objets',
						],
					},
					{
						icon: 'science',
						title: 'Sciences appliquées',
						items: [
							'**Des bases solides**, alliant théorie rigoureuse et pratique concrète en sciences fondamentales',
							'**Traitement du signal et algorithmes avancés** pour relever vos défis industriels',
							'**Analyse statistique** pour décider à partir des données',
							'**IA et machine learning** pour concevoir des solutions intelligentes et innovantes',
						],
					},
				],
			},
		],
	},

	'eco-ingenierie': {
		kind: 'service',
		title: 'Éco-ingénierie',
		eyebrow: 'Nos prestations · Pôle 03',
		intro: 'Gestion de l’eau, RSE, sobriété énergétique et mécanique des fluides : des études d’ingénierie durables menées par les étudiants de l’ENSEEIHT.',
		headingLead: 'Soyez acteur de la révolution énergétique :',
		headingEm: 'optez pour l’Éco-Ingénierie !',
		lead: 'De la gestion de l’eau à la sobriété énergétique, des expertises pour des projets durables et innovants.',
		groups: [
			{
				eyebrow: 'Éco-ingénierie',
				title: 'Nos services d’éco-ingénierie',
				text: 'Innovation et durabilité : une approche intégrée pour des solutions **éco-responsables et performantes.**',
				services: [
					{
						icon: 'water',
						title: 'Gestion de l’eau',
						items: [
							'**Savoir-faire en hydrologie**, appliqué à vos enjeux de gestion de l’eau',
							'**Solutions sur mesure** pour prévenir les risques naturels et optimiser les ouvrages hydrauliques',
							'**Modélisation avancée** pour anticiper et mieux piloter vos projets',
							'**Accompagnement stratégique** pour rendre vos infrastructures hydrauliques plus efficaces et durables',
						],
					},
					{
						icon: 'rse',
						title: 'RSE',
						items: [
							'**Accompagnement stratégique en RSE** pour développer une activité engagée, ou placer la RSE au cœur de votre modèle',
							'**Lecture des enjeux climatiques** et adaptation aux nouvelles attentes de la société',
							'**Actions concrètes** pour réduire votre impact environnemental',
							'**Conformité réglementaire** et valorisation de votre image d’entreprise responsable',
						],
					},
					{
						icon: 'energy',
						title: 'Dépenses énergétiques',
						items: [
							'**Cap sur la sobriété énergétique**, enjeu clé de la transition en cours',
							'**Projets optimisés** pour réduire à la fois consommation et coûts',
							'**Analyse rigoureuse**, portée par les compétences scientifiques de nos intervenants',
							'**Solutions durables et innovantes**, adaptées aux nouvelles exigences du secteur énergétique',
						],
					},
					{
						icon: 'fluid',
						title: 'Mécanique des fluides',
						items: [
							'**Modélisation précise** des phénomènes physiques pour mieux les comprendre et les anticiper',
							'**Expertise en conception et simulation**, nourrie par une filière spécialisée de notre école',
							'**Maillages intelligents** pour optimiser temps de calcul et précision des résultats',
							'**Solutions sur mesure** pour vos besoins industriels ou de recherche',
						],
					},
				],
			},
		],
	},

	'qui-sommes-nous': {
		kind: 'about',
		title: 'Qui sommes-nous ?',
		eyebrow: 'Qui sommes-nous ?',
		intro: 'Depuis 1977, N7 Consulting met les étudiants ingénieurs de Toulouse INP-ENSEEIHT au service des entreprises. Découvrez l’équipe, nos valeurs et notre histoire.',
		headingLead: 'Notre',
		headingEm: 'mission',
		lead: 'N7 Consulting est une Junior-Entreprise qui met en valeur le savoir-faire technique de ses étudiants, pour apporter aux entreprises des **solutions innovantes** en digital, ingénierie et éco-ingénierie.',
		whatIs: {
			eyebrow: 'La Junior-Entreprise',
			title: 'Comprendre le fonctionnement d’une Junior-Entreprise',
			text: 'Une Junior-Entreprise est une association à vocation économique, gérée par des étudiants d’une grande école. Elle propose aux entreprises des prestations sur mesure et leur ouvre l’accès à des compétences techniques et méthodologiques pointues, tirées des enseignements les plus récents.',
			link: { label: 'En savoir plus sur le mouvement', href: 'https://junior-entreprises.com/' },
		},
		stats: [
			{ value: '1977', label: 'année de création' },
			{ value: '49', label: 'ans d’expérience' },
			{ value: '600+', label: 'projets réalisés' },
			{ value: '97 %', label: 'de satisfaction client' },
		],
		reasons: [
			{ icon: 'target', title: 'Des compétences immédiatement mobilisables', text: 'Vous accédez à des étudiants formés aux dernières innovations technologiques et aux méthodes actuelles, capables de traiter efficacement vos problématiques opérationnelles.' },
			{ icon: 'info', title: 'Un fonctionnement professionnel et flexible', text: 'Notre Junior travaille comme un cabinet de conseil : un interlocuteur unique, une gestion de projet cadrée et des livrables de qualité, dans le respect de vos délais et de vos exigences.' },
			{ icon: 'euro', title: 'Un savoir-faire de haut niveau, à coût maîtrisé', text: 'Une expertise technique de qualité à un tarif avantageux, adapté à vos contraintes budgétaires, sans concession sur le résultat.' },
		],
		team: [
			{ first: 'Lucie', last: 'Gruet', role: 'Présidente', photo: `${CDN}6a2058449ec54c1ee09b4bf5_Lucie-Photoroom.webp`, linkedin: 'https://www.linkedin.com/in/luciegruet/' },
			{ first: 'Ali', last: 'Benanni', role: 'Vice-Président', photo: `${CDN}6a205836c6097920fd11c182_Ali-Photoroom.webp`, linkedin: 'https://www.linkedin.com/in/ali-bennani-963802364/' },
			{ first: 'Shtefan', last: 'Cucu', role: 'Responsable Qualité', photo: `${CDN}6a205849fdf9fd0380d5a58b_Shtefan-Photoroom.webp`, linkedin: 'https://www.linkedin.com/in/shtefan-cucu-473792385/' },
			{ first: 'Daniel', last: 'M’Bouyou', role: 'Responsable Technique', photo: `${CDN}6a205839a506264d41daf43c_Daniel-Photoroom.webp`, linkedin: 'https://www.linkedin.com/in/daniel-m-bouyou-360869257/' },
			{ first: 'Yvan', last: 'Jacob', role: 'GRHI', photo: `${CDN}6a20584cd2267396927becb8_Yvan-Photoroom.webp`, linkedin: 'https://www.linkedin.com/in/yvan-jacob-186104385/' },
			{ first: 'Chahyn', last: 'Ettaghi', role: 'Directeur des Systèmes d’Information', photo: `${CDN}6a205836b0eac1b7ac38d2ac_Chahyn-Photoroom.webp`, linkedin: 'https://www.linkedin.com/in/chahyn-ettaghi-4a4763332/' },
			{ first: 'Emilien', last: 'Mauperon', role: 'Directeur des Systèmes d’Information', photo: `${CDN}6a20583a4753d055af1b4edc_Emilien-Photoroom.webp`, linkedin: 'https://www.linkedin.com/in/emilien-mauperon/' },
			{ first: 'Mehdi', last: 'Lassoued', role: 'Trésorier', photo: `${CDN}6a20584619fda8ee34a2ad82_Mehdi-Photoroom.webp`, linkedin: 'https://www.linkedin.com/in/mehdi-lassoued-b75797385/' },
			{ first: 'Yueshan', last: 'Ren', role: 'Responsable Développement Commercial', photo: `${CDN}6a20584fd3eadd858446ee46_Yueshan-Photoroom.webp`, linkedin: 'https://www.linkedin.com/in/yueshan-ren-86a023215/' },
			{ first: 'Titouan', last: 'Rambaud', role: 'Responsable Marketing', photo: `${CDN}6a20584acaabcb84fcfe907e_Titouan-Photoroom.webp`, linkedin: 'https://www.linkedin.com/in/titouan-rambaud-691b69384/' },
			{ first: 'Pierre', last: 'Guyonet', role: 'Chargé d’Affaires', photo: `${CDN}6a205846a8c860e0de25d469_Pierre-Photoroom.webp`, linkedin: 'https://www.linkedin.com/in/pierre-guyonet/?locale=fr' },
			{ first: 'Emma', last: 'Monsang', role: 'Responsable RSE', photo: `${CDN}6a20583e32f6def113dbf497_Emma-Photoroom.webp`, linkedin: 'https://www.linkedin.com/in/emma-monsang-520b70309/' },
			{ first: 'Lili', last: 'Hournarette', role: 'Secrétaire Général', photo: `${CDN}6a205840ae65c985e63311a4_Lili-Photoroom.webp`, linkedin: 'https://www.linkedin.com/in/lili-hournarette-a71a65310/' },
			{ first: 'Grégoire', last: 'Cendré', role: 'Responsable Marketing', photo: `${CDN}6a20583e5bf0545790dbecd4_Gr%C3%87goire-Photoroom.webp`, linkedin: 'https://www.linkedin.com/in/gr%C3%A9goire-cendr%C3%A9-1942a5372/' },
			{ first: 'Aymen', last: 'Mrini', role: 'Chargé d’Affaires', photo: `${CDN}6a20583932a5e027686a3e37_Aymen-Photoroom.webp`, linkedin: 'https://www.linkedin.com/in/aymen-mrini-55a45229a/' },
			{ first: 'Elaia', last: 'Amestoy-Alpha', role: 'Trésorière', photo: `${CDN}6a20583a06d6b5200fad5440_Elaia-Photoroom.webp`, linkedin: 'https://www.linkedin.com/in/elaia-amestoy-alpha-5320a9340/' },
			{ first: 'Sacha', last: 'Smietana', role: 'Responsable Étude', photo: '/team/sacha.png', linkedin: 'https://www.linkedin.com/in/sacha-smietana-0a9702357/' },
		],
		values: [
			{ icon: 'heart', title: 'Engagement' },
			{ icon: 'shield', title: 'Responsabilité' },
			{ icon: 'bulb', title: 'Innovation' },
		],
		purpose: 'Porter l’innovation et l’engagement avec responsabilité, pour mener des projets à fort impact et pleins de sens, au service de notre écosystème et de nos clients.',
		environment: [
			{
				id: 'intervenants',
				label: 'Nos intervenants',
				title: 'Des étudiants talentueux, au cœur de la Junior',
				text: 'Les intervenants sont des étudiants motivés et brillants, indispensables au fonctionnement de la Junior. Sélectionnés pour leur motivation et leurs compétences, ils sont rompus au travail d’équipe et à la résolution de problèmes complexes, et s’adaptent vite à de nouveaux défis. En choisissant N7 Consulting, vous profitez de leur créativité, de leur sens de l’innovation et de leur savoir-faire technique, ainsi que de leur engagement pour la réussite de chaque projet.',
				image: `${CDN}67a9fe17a0c7605fa5e24334_N7C_Intervenants.png`,
				imageKind: 'logo',
			},
			{
				id: 'alumnis',
				label: 'Nos alumnis',
				title: 'Une expérience de 49 ans qui se transmet',
				text: 'Les alumni sont d’anciens administrateurs de la Junior. Appui stratégique du mandat en cours, ils contribuent, par leur parcours professionnel dans les domaines de spécialité de la JE, à professionnaliser la structure. À chaque passation, 49 années d’expérience se transmettent pour bâtir une stratégie toujours plus performante. Formations, événements et COS (Conseil d’Orientation Stratégique) leur permettent de conseiller les administrateurs et de participer à la vie de la Junior ; en générant de nouvelles études, ils prolongent leur place dans la grande famille N7 Consulting.',
				image: `${CDN}67b47c8f28387bca819ef6c0_N7C_CRPSO2024_5_11zon.avif`,
				imageKind: 'photo',
			},
			{
				id: 'enseeiht',
				label: 'L’ENSEEIHT',
				title: 'Une école d’ingénieurs à la pointe depuis 1907',
				text: 'Créée en 1907 pour former les ingénieurs des barrages français, l’ENSEEIHT a toujours gardé une longueur d’avance en innovation. Elle réunit aujourd’hui plus de 150 enseignants-chercheurs, répartis dans 4 laboratoires toulousains : l’IMFT, l’IRIT, le LAAS et le LAPLACE. Ses étudiants choisissent des filières d’excellence pour développer leur expertise :',
				image: `${CDN}67d8a20d71ad3d284a9bc8c5_LogoN7.png`,
				imageKind: 'logo',
				list: [
					'**Électronique, Énergie Électrique et Automatique** (3EA)',
					'**Sciences du Numérique** (SN)',
					'**Mécanique des Fluides, Énergie et Environnement** (MFEE)',
				],
				facts: [
					{ value: '1907', label: 'année de fondation' },
					{ value: '150+', label: 'enseignants-chercheurs' },
					{ value: '4', label: 'laboratoires toulousains' },
					{ value: '1 500', label: 'étudiants-ingénieurs' },
				],
			},
		],
		timeline: [
			{ year: '2024', items: ['Finaliste du prix du Meilleur Accompagnement Commercial', 'Finaliste du prix de la Meilleure Étude en Ingénierie', 'Dans le Top 30 des Junior-Entreprises depuis plus de 10 ans'], image: `${CDN}67a9fe01c0749a737a00f77e_Logo_N7C_classic_fond_bleu.png`, imageAlt: 'Logo N7 Consulting', imageKind: 'logo' },
			{ year: '2023', items: ['Finaliste du prix de la Meilleure Étude en Ingénierie', 'Finaliste du prix du Meilleur Partenaire de l’Enseignement Supérieur', 'Lauréat du prix du Meilleur Accompagnement des Intervenants', 'Entrée dans le Top 6', 'Appel à projets RSE'], image: `${CDN}67db33a0013b1f261a648bdb_groupes_je-4-min.jpg`, imageAlt: 'Photo du mandat N7 Consulting', imageKind: 'photo' },
			{ year: '2022', items: ['Obtention de la norme ISO 9001', 'Entrée dans le Top 3', 'Finaliste du prix d’Excellence', 'Lauréat du prix de la Meilleure Étude en Ingénierie', 'Deuxième lauréat du prix de la meilleure data-visualisation'], image: `${CDN}6823c641c3f19a7f6f5f2925_logo-afnor-site_blanc.png`, imageAlt: 'Certification ISO 9001', imageKind: 'logo' },
			{ year: '2021', items: ['Finaliste du prix de la Meilleure Étude en Ingénierie', 'Finaliste du prix de la Meilleure Approche Commerciale'] },
			{ year: '2019', items: ['Signature d’un appel d’offres public de plus de 100 k€ avec le CNES'] },
			{ year: '2013', items: ['Entrée dans le Top 30'] },
			{ year: '2012', items: ['Prix du Meilleur Partenariat'] },
			{ year: '2010', items: ['Prix du Meilleur Espoir'] },
			{ year: '1977', items: ['Création de N7 Consulting'], image: `${CDN}67bdba0d63dbef114fbc6f39_flag_photo.webp`, imageAlt: 'Drapeau N7 Consulting', imageKind: 'photo' },
		],
	},

	contact: {
		kind: 'contact',
		title: 'Contact',
		eyebrow: 'Contact',
		intro: 'Contactez N7Consulting pour discuter de vos projets IT, digital et ingénierie. Notre équipe vous répond et vous accompagne sur mesure.',
		headingLead: 'Un besoin particulier ?',
		headingEm: 'Cela nous intéresse !',
		lead: 'Un devis à demander, une question à poser, un rendez-vous à fixer ? Remplissez le formulaire : nous revenons vers vous dans les meilleurs délais.',
		services: ['Digital & Data', 'Ingénierie', 'Éco-ingénierie', 'Autre'],
		sources: ['LinkedIn', 'Instagram', 'Google', 'Événement', 'Recommandation', 'Autre'],
		// Optionnel : URL d’un service de formulaire (Formspree, Getform…). Vide = ouverture du client mail.
		formEndpoint: '',
	},

	'mentions-legales': {
		kind: 'legal',
		title: 'Mentions légales',
		eyebrow: 'Informations légales',
		intro: 'Mentions légales, conditions d’utilisation et politique de confidentialité du site de N7 Consulting, Junior-Entreprise de Toulouse INP-ENSEEIHT.',
		headingLead: 'Mentions',
		headingEm: 'légales',
		lead: 'Éditeur, hébergeur, conditions d’utilisation et protection de vos données personnelles.',
		sections: [
			{
				title: 'Éditeur du site',
				rows: [
					['Nom', 'N7Consulting'],
					['Forme juridique', 'Association'],
					['Adresse', '2 rue Charles Camichel, 31000 Toulouse'],
					['E-mail', 'contact@n7consulting.fr'],
					['N° SIRET', '344 162 490 00017'],
					['Directeur de la publication', 'DSI du mandat en cours'],
				],
			},
			{ title: 'Hébergeur du site', rows: [['Nom', HOST]] },
			{
				title: 'Conditions générales d’utilisation',
				paragraphs: [
					'Utiliser le site www.n7consulting.fr revient à accepter pleinement les présentes conditions d’utilisation.',
					'Le site a pour seul objet de recevoir des demandes de devis : aucune vente n’est réalisée en ligne.',
					'L’utilisateur s’engage à renseigner des informations exactes dans les formulaires et à ne pas détourner le site à des fins frauduleuses.',
				],
			},
			{
				title: 'Politique de confidentialité',
				paragraphs: ['Conformément au Règlement Général sur la Protection des Données (RGPD), N7 Consulting s’engage à protéger vos données personnelles.'],
				subs: [
					{ title: 'Données collectées', text: 'Les informations saisies dans les formulaires de contact ou de demande de devis (nom, prénom, adresse e-mail, numéro de téléphone, etc.) servent exclusivement au traitement de votre demande.' },
					{ title: 'Finalités', list: ['Répondre à vos demandes', 'Vous adresser un devis', 'Assurer le suivi de la relation commerciale'] },
					{ title: 'Destinataires', text: 'Vos données ne sont transmises à aucun tiers sans votre accord, sauf obligation légale.' },
					{
						title: 'Vos droits',
						text: 'Vous disposez, selon la législation en vigueur, des droits suivants. Pour les exercer, écrivez à contact@n7consulting.fr.',
						list: ['Droit d’accès', 'Droit de rectification', 'Droit à l’effacement', 'Droit à la limitation du traitement', 'Droit d’opposition', 'Droit à la portabilité'],
					},
				],
			},
		],
	},
};

/* ----------------------------- Articles ----------------------------- */

export const articles: Article[] = [
	{
		slug: 'hackathon-ia-for-impact-2026-n7-consulting-partenaire-technique',
		title: 'Hackathon IA for Impact 2026 : N7 Consulting partenaire technique',
		category: 'Événement',
		date: '20 octobre 2026',
		dateIso: '2026-10-20',
		image: `${BLOG}6ad7422f875b1d0d9ffaceae_6ad741ea6fa6c2c12eb33fb4_DSC06851-Avec-accentuation-Bruit-Grande.jpeg`,
		imageAlt: 'Participants, organisateurs et partenaires réunis lors du Hackathon IA for Impact',
		intro: 'Les 9 et 10 octobre 2026, l’ENSEEIHT a accueilli le Hackathon IA for Impact de La Mêlée Numérique. N7 Consulting y a tenu un triple rôle : partenaire technique, formateur et membre du jury, aux côtés d’acteurs comme ANITI et IBM.',
		blocks: [
			{ type: 'lead', text: 'Les 9 et 10 octobre 2026, le campus de l’ENSEEIHT et La Cantine by La Mêlée ont reçu le [Hackathon IA for Impact](https://lamelee.com/hackathon-ia-for-impact/), organisé par La Mêlée en clôture du festival [La Mêlée Numérique 2026](https://www.meleenumerique.com/). Au programme : 30 heures sans interruption pour imaginer et prototyper des IA à impact positif, avec N7 Consulting comme **partenaire technique**.' },
			{ type: 'h2', text: 'Le principe du hackathon' },
			{ type: 'p', text: 'Des équipes mixtes (développeurs, data scientists, designers, profils business) s’attaquent à des cas d’usage réels soumis par des entreprises. Après 30 heures, chacune présente son prototype à un jury qui juge l’impact, la faisabilité, la viabilité et le niveau de réalisation.' },
			{ type: 'ul', items: ['**Grand Prix** : 1 000 €', '**Prix coup de cœur du jury** : 500 €', 'Un chèque de **100 €** pour la meilleure équipe de chaque défi'] },
			{ type: 'p', text: 'Pour mémoire, l’édition précédente avait rassemblé 150 participants et abouti à 25 prototypes fonctionnels, d’après [La Mêlée](https://lamelee.com/hackathon-ia-for-impact/).' },
			{ type: 'h2', text: 'Le rôle de N7 Consulting' },
			{ type: 'ul', items: ['**Formation** : ateliers de préparation au pitch et ateliers techniques pour bien démarrer le prototypage', '**Accompagnement** : nos membres sont restés mobilisés toute la nuit pour débloquer les équipes', '**Jury** : participation à l’évaluation des projets'] },
			{ type: 'h2', text: 'Six défis portés par des entreprises' },
			{ type: 'ul', items: [
				'**SNCF**, « Dessine-moi une mobilité durable » : un outil permettant à un enseignant d’organiser une sortie pédagogique en Occitanie avec le train liO',
				'**Enedis** : mieux répartir les ressources lors des crises climatiques pour rétablir l’électricité plus vite',
				'**iMSA**, l’informatique de la MSA et de ses partenaires : automatiser le contrôle des justificatifs de dépenses de santé pour limiter fraudes et erreurs',
				'**BPCE Solutions informatiques** : un assistant bancaire conversationnel capable de transformer une intention en action',
				'**Action Logement** : une IA qui anticipe les pannes des bâtiments et aide à prioriser les rénovations',
				'**Groupe Lallemand** : un agent IA qui collecte, structure et source les données réglementaires phytosanitaires au Canada, en Europe et en Amérique latine',
			] },
			{ type: 'p', text: 'Côté technique, l’institut toulousain d’intelligence artificielle **ANITI** figurait parmi les partenaires, et les équipes pouvaient s’appuyer sur **IBM Bob**, l’assistant de développement par IA d’IBM.' },
			{ type: 'logos', title: 'Partenaires de l’édition 2026', items: [
				{ name: 'SNCF', src: `${BLOG}6ad743404f3b27dfc809ae84_6ad741debbf34f3e57f9f53c_Logo_SNCF_%282005%29.svg.webp` },
				{ name: 'Enedis', src: `${BLOG}6ad743404f3b27dfc809ae90_6ad741de7bfe00c681b71f97_Logo_enedis_header.png` },
				{ name: 'iMSA', src: `${BLOG}6ad743404f3b27dfc809ae93_6ad741d82699a8ebc5193400_imsa.png` },
				{ name: 'BPCE Solutions informatiques', src: `${BLOG}6ad743404f3b27dfc809ae96_6ad741eff4c3a54ebe3be823_bpce-solutions-informatiques-rvb-bpce-solutions-immo-rvb%25403x.png` },
				{ name: 'Action Logement', src: `${BLOG}6ad743404f3b27dfc809ae99_6ad741f0f67b5366c75e9328_actionLogement.png` },
				{ name: 'Lallemand', src: `${BLOG}6ad743404f3b27dfc809ae87_6ad741dd2699a8ebc51938ee_LOGO-Lallemand.png` },
				{ name: 'ANITI', src: `${BLOG}6ad743404f3b27dfc809ae9e_6ad741efc97b3a9ce05ee2ff_aniti.png` },
				{ name: 'IBM', src: `${BLOG}6ad771a0d9d55969cc8fcf70_6ad746491fde1abdb07a2b62_IBM_logo.svg.webp` },
			] },
			{ type: 'h2', text: 'Hackathon Hub, le réseau européen' },
			{ type: 'p', text: 'N7 Consulting est partenaire de [Hackathon Hub](https://hackathonhub.eu/), plateforme européenne qui recense plus de 300 hackathons, compétitions tech et défis étudiants dans plus de 30 pays. Objectif partagé : faire rayonner l’écosystème toulousain et relier ses talents aux communautés tech d’Europe.' },
			{ type: 'h2', text: 'Et après ?' },
			{ type: 'p', text: 'En 30 heures, des équipes pluridisciplinaires montrent ce qu’elles savent bâtir. C’est ce que nous proposons toute l’année : un projet d’IA ou de traitement de données ? Découvrez [notre pôle Digital & Data](/digital-data) ou [contactez-nous](/contact).' },
		],
	},
	{
		slug: 'etude-de-cas-vinci-facilities-application-podcasts',
		title: 'Étude de cas Vinci Facilities : une application mobile de podcasts pour la communication interne',
		category: 'Étude de cas',
		date: '20 octobre 2026',
		dateIso: '2026-10-20',
		image: `${BLOG}6ad8bd1c0b1cb572f04dc43f_6ad8bcdd1563b3a5437cb938_Vinci-Energies-customer-story-logo-1920x1080.webp`,
		imageAlt: 'Logo VINCI Energies sur fond de centrale solaire',
		intro: 'N7 Consulting a conçu pour Vinci Facilities une application mobile de podcasts qui renforce la communication interne, avec commande vocale et suivi du taux d’écoute.',
		blocks: [
			{ type: 'lead', text: 'Comment informer l’ensemble des collaborateurs d’un grand groupe, y compris ceux qui passent leur journée sur le terrain, loin d’un bureau ? Pour **Vinci Facilities**, nous avons répondu par une **application mobile de podcasts** dédiée à la communication interne.' },
			{ type: 'h2', text: 'Le client : Vinci Facilities' },
			{ type: 'p', text: 'Vinci Facilities est la marque de VINCI Energies dédiée au facility management : la gestion et la maintenance des bâtiments et des services associés. Ses équipes interviennent chaque jour chez les clients, sur de nombreux sites, un contexte où communiquer efficacement en interne est vital.' },
			{ type: 'h2', text: 'Le besoin' },
			{ type: 'p', text: 'Renforcer la communication interne avec un format facile à consommer : le podcast. L’audio s’écoute dans les transports ou entre deux interventions, sans lire de long message ni ouvrir un ordinateur.' },
			{ type: 'h2', text: 'Notre réalisation' },
			{ type: 'ul', items: ['**Publication de podcasts** : l’entreprise met en ligne ses épisodes, accessibles à tous les employés', '**Commande vocale** : l’application se pilote à la voix, pour plus de simplicité et d’accessibilité', '**Mesure du taux d’écoute** : l’entreprise suit son audience et sait quels sujets intéressent ses équipes'] },
			{ type: 'h2', text: 'Pourquoi une Junior-Entreprise d’école d’ingénieurs' },
			{ type: 'p', text: 'Développement mobile, traitement de l’audio et de la voix, analyse de données : ces compétences sont au cœur de la formation en sciences du numérique de Toulouse INP-ENSEEIHT. La Junior permet de les mobiliser sur un cas concret, avec un cadre contractuel clair et un suivi régulier, du cadrage du besoin jusqu’à la livraison.' },
			{ type: 'p', text: 'Un projet d’application mobile, web ou de traitement de données ? Découvrez [notre pôle Digital & Data](/digital-data) ou [demandez un devis](/contact).' },
		],
	},
	{
		slug: 'mandat-49-cap-sur-le-mandat-50-et-les-50-ans',
		title: 'Mandat 49 : N7 Consulting prépare le mandat 50 et ses 50 ans',
		category: 'Vie de la JE',
		date: '20 octobre 2026',
		dateIso: '2026-10-20',
		image: `${BLOG}6ad75c8afa4efc3d1ef7d680_6a205143a27654696a6c68c4_photo_quais-30%2520%281%29.webp`,
		imageAlt: 'Drapeau N7 Consulting sur les quais de la Garonne à Toulouse',
		intro: 'Le mandat 49 prépare la relève : recrutement, formation et passation, mais aussi audits ISO 9001 et CNJE. Le mandat 50 marquera les 50 ans de N7 Consulting.',
		blocks: [
			{ type: 'lead', text: 'Née en 1977 au sein de Toulouse INP-ENSEEIHT, N7 Consulting vit son **49e mandat**. Chaque année, une nouvelle équipe d’étudiants reprend les rênes de la Junior, et la prochaine sera exceptionnelle.' },
			{ type: 'h2', text: 'Cap sur le mandat 50 : la RFP' },
			{ type: 'p', text: 'L’équipe du mandat 49 prépare actuellement la relève pendant la période de **RFP** : recrutement, formation, passation.' },
			{ type: 'ul', items: ['**Recrutement** des futurs membres et administrateurs', '**Formation** aux métiers de la Junior : relation client, suivi des études, qualité, trésorerie, communication', '**Passation** des dossiers, outils et contacts, afin que nos clients ne perdent jamais le fil de leurs projets'] },
			{ type: 'h2', text: '2027 : les 50 ans de N7 Consulting' },
			{ type: 'p', text: 'Le mandat 50 coïncidera avec les **50 ans de la Junior** : cinquante années d’études menées pour des entreprises, des collectivités et des associations, et des générations d’ingénieurs formés au contact du terrain. Une grande fête réunira alumni, partenaires, clients et étudiants ; le programme sera dévoilé ici même.' },
			{ type: 'h2', text: 'Les audits annuels : ISO 9001 et CNJE' },
			{ type: 'ul', items: ['**ISO 9001** : norme internationale de référence du management de la qualité, qui évalue la façon dont nous organisons et suivons nos études', '**CNJE** : audit de la [Confédération Nationale des Junior-Entreprises](https://junior-entreprises.com/), qui fédère environ 200 Junior-Entreprises en France et contrôle le respect du cadre du mouvement'] },
			{ type: 'p', text: 'Ces audits sont exigeants, et c’est tant mieux : ils garantissent à nos clients un niveau de qualité constant, d’un mandat à l’autre. Pour en savoir plus sur notre histoire et notre équipe, rendez-vous sur [Qui sommes-nous](/qui-sommes-nous).' },
		],
	},
	{
		slug: 'comment-faire-appel-a-une-junior-entreprise',
		title: 'Comment faire appel à une Junior-Entreprise ? Le guide étape par étape',
		category: 'Guide',
		date: '20 octobre 2026',
		dateIso: '2026-10-20',
		image: `${BLOG}6ad75c8afa4efc3d1ef7d672_6ad75c433fb6cf4325dfac99_JE.png`,
		imageAlt: 'Congrès national des Junior-Entreprises',
		intro: 'Définition, projets à confier, étapes d’une étude et documents à préparer : tout ce qu’il faut savoir pour confier une mission à une Junior-Entreprise.',
		blocks: [
			{ type: 'lead', text: 'Un prototype à réaliser, une étude technique ou de marché à mener, et vous avez entendu parler des Junior-Entreprises ? Voici comment elles fonctionnent et comment leur confier une mission, pas à pas.' },
			{ type: 'h2', text: 'Qu’est-ce qu’une Junior-Entreprise ?' },
			{ type: 'p', text: 'Selon la [CNJE](https://junior-entreprises.com/) (Confédération Nationale des Junior-Entreprises), il s’agit d’une association loi 1901 créée et gérée par des étudiants au sein d’un établissement d’enseignement supérieur. Elle réalise des missions de conseil et d’étude pour des entreprises, des institutions et des associations.' },
			{ type: 'p', text: 'Le mouvement est loin d’être confidentiel : environ **200 Junior-Entreprises** en France, **25 000 étudiants** engagés chaque année et **plus de 3 000 projets** par an. La CNJE ajoute que 80 % des entreprises du CAC 40 ont déjà travaillé avec une Junior.' },
			{ type: 'h2', text: 'Quels projets lui confier ?' },
			{ type: 'p', text: 'Une Junior intervient dans les domaines enseignés par son école. Le cadre légal du mouvement, détaillé sur [Kiwi Légal](https://legal.junior-entreprises.com/), la base juridique de la CNJE, impose que le domaine d’une étude corresponde à un enseignement dispensé aux étudiants : les intervenants sont donc formés au sujet qu’ils traitent. Domaines cités par la CNJE :' },
			{ type: 'ul', items: ['stratégie, études et analyse de marché', 'ingénierie, conception et prototypage', 'développement informatique et systèmes numériques', 'data, intelligence artificielle et modélisation', 'études techniques et ingénierie appliquée'] },
			{ type: 'p', text: 'À N7 Consulting, nous intervenons en [Digital & Data](/digital-data), en [Ingénierie](/ingenierie-it) et en [Éco-ingénierie](/eco-ingenierie).' },
			{ type: 'h2', text: 'Les étapes d’une étude' },
			{ type: 'ol', items: [
				'**Exprimer votre besoin** : contactez directement une Junior, ou déposez votre projet sur la [plateforme de la CNJE](https://ao.junior-entreprises.com/besoin), qui l’oriente vers la structure la plus adaptée.',
				'**Cadrer le projet** : un premier échange précise objectifs, périmètre, délais et livrables attendus.',
				'**Recevoir une proposition** : la Junior vous remet une proposition commerciale et un devis détaillé.',
				'**Signer la convention** : l’étude est encadrée par un contrat entre votre structure et la Junior-Entreprise, en tant qu’association. La CNJE met des documents types à disposition via Kiwi Légal.',
				'**Constituer l’équipe** : la Junior sélectionne les étudiants intervenants, qui doivent obligatoirement adhérer à l’association avant d’être affectés à une étude, selon le cadre légal décrit sur Kiwi Légal.',
				'**Réaliser l’étude** : le projet avance par jalons, avec des points réguliers et un interlocuteur dédié.',
				'**Livrer et clôturer** : les livrables sont remis et validés avec vous, puis l’étude est clôturée.',
			] },
			{ type: 'h2', text: 'À préparer avant le premier échange' },
			{ type: 'ul', items: ['L’objectif principal du projet, en une ou deux phrases', 'Le contexte : ce qui existe déjà, ce qui a déjà été tenté', 'Les livrables attendus : rapport, prototype, code, maquette, recommandations', 'Vos contraintes de délai et de budget', 'Les données ou documents que vous pouvez partager'] },
			{ type: 'p', text: 'Plus le besoin est clair, plus le devis est précis et l’étude efficace. Pour un exemple concret, lisez [notre étude de cas Vinci Facilities](/actualites/etude-de-cas-vinci-facilities-application-podcasts).' },
			{ type: 'h2', text: 'Pourquoi choisir N7 Consulting ?' },
			{ type: 'p', text: 'Junior-Entreprise de Toulouse INP-ENSEEIHT depuis 1977, N7 Consulting mobilise des étudiants ingénieurs en informatique, électronique, énergie et mécanique des fluides, et passe chaque année un audit ISO 9001 et un audit de la CNJE. Un projet en tête ? [Parlons-en](/contact).' },
		],
		sources: [
			{ label: 'CNJE : chiffres clés et définition des Junior-Entreprises', href: 'https://junior-entreprises.com/' },
			{ label: 'CNJE : pourquoi faire appel à une Junior-Entreprise', href: 'https://junior-entreprises.com/entreprise' },
			{ label: 'Kiwi Légal, la base juridique de la CNJE', href: 'https://legal.junior-entreprises.com/' },
			{ label: 'Kiwi Légal : livret sur la réforme du cadre légal', href: 'https://legal.junior-entreprises.com/wp-content/uploads/2016/05/Livret-Reforme-du-Cadre-Le%CC%81gal.pdf' },
		],
	},
	{
		slug: 'junior-entreprise-ou-freelance-que-choisir',
		title: 'Junior-Entreprise ou freelance : que choisir pour votre projet ?',
		category: 'Guide',
		date: '20 octobre 2026',
		dateIso: '2026-10-20',
		image: `${BLOG}6ad75c8afa4efc3d1ef7d678_6ad75c417eeb228613fdc5b0_choix.jpeg`,
		imageAlt: 'Illustration : choisir entre Junior-Entreprise et freelance',
		intro: 'Cadre juridique, équipe, suivi qualité, disponibilité : les vraies différences entre une Junior-Entreprise et un freelance, pour choisir selon votre projet.',
		blocks: [
			{ type: 'lead', text: 'Pour une mission ponctuelle, deux options reviennent souvent : un freelance ou une Junior-Entreprise. Les deux peuvent être d’excellents choix, tout dépend de votre besoin. Voici les critères qui comptent vraiment.' },
			{ type: 'h2', text: '1. Le cadre juridique' },
			{ type: 'p', text: 'Une Junior-Entreprise est une **association loi 1901** gérée par des étudiants, rattachée à une école et membre du réseau de la [CNJE](https://junior-entreprises.com/). Vous contractez avec l’association : comme le rappelle [Kiwi Légal](https://legal.junior-entreprises.com/), c’est la responsabilité de la personne morale qui est engagée. Le freelance, lui, contracte en son nom propre, sous son statut d’indépendant.' },
			{ type: 'h2', text: '2. Une personne ou une équipe' },
			{ type: 'p', text: 'Le freelance apporte une expertise individuelle, souvent très pointue. La Junior peut former une **équipe d’étudiants** aux compétences complémentaires, pilotée par un chef de projet : un vrai atout quand un projet mêle par exemple électronique, thermique et logiciel.' },
			{ type: 'h2', text: '3. L’expérience et le regard' },
			{ type: 'p', text: 'Un freelance chevronné a déjà croisé de nombreux cas proches du vôtre. Les étudiants d’une Junior apportent un regard neuf et les connaissances les plus récentes de leur formation. Le cadre légal prévoit d’ailleurs que chaque étude relève d’un domaine enseigné à l’école : vos intervenants travaillent sur ce qu’ils apprennent.' },
			{ type: 'h2', text: '4. Le suivi et la qualité' },
			{ type: 'p', text: 'La CNJE décrit un fonctionnement par jalons, avec des livrables définis dès le cadrage et des points réguliers avec un interlocuteur dédié ; les Juniors sont accompagnées et contrôlées par la Confédération. À N7 Consulting, s’ajoute un audit ISO 9001 chaque année. Chez un freelance, la qualité repose sur ses méthodes propres : références et avis clients sont vos meilleurs indicateurs.' },
			{ type: 'h2', text: '5. La disponibilité' },
			{ type: 'p', text: 'Un freelance peut se consacrer à plein temps à votre mission. Les étudiants d’une Junior mènent l’étude en parallèle de leur cursus : le planning se construit dès le départ selon leur charge et les jalons. Pour une présence quotidienne dans vos locaux pendant plusieurs mois, le freelance est souvent plus adapté.' },
			{ type: 'h2', text: '6. L’impact' },
			{ type: 'p', text: 'Confier un projet à une Junior, c’est aussi contribuer à former les ingénieurs de demain : la CNJE parle d’un modèle responsable, qui fait monter les étudiants en compétences sur des cas réels.' },
			{ type: 'h2', text: 'En résumé' },
			{ type: 'ul', items: ['**Choisissez un freelance** pour un expert senior sur un sujet très spécifique, ou une présence à temps plein sur longue durée.', '**Choisissez une Junior-Entreprise** pour une étude au périmètre défini, des livrables clairs, une équipe pluridisciplinaire et un cadre contrôlé.'] },
			{ type: 'p', text: 'Un doute ? Découvrez [comment se déroule une étude en Junior-Entreprise](/actualites/comment-faire-appel-a-une-junior-entreprise) ou [contactez-nous](/contact) pour en discuter.' },
		],
		sources: [
			{ label: 'CNJE : définition et chiffres clés des Junior-Entreprises', href: 'https://junior-entreprises.com/' },
			{ label: 'CNJE : pourquoi faire appel à une Junior-Entreprise', href: 'https://junior-entreprises.com/entreprise' },
			{ label: 'Kiwi Légal, la base juridique de la CNJE', href: 'https://legal.junior-entreprises.com/' },
			{ label: 'Kiwi Légal : livret sur la réforme du cadre légal', href: 'https://legal.junior-entreprises.com/wp-content/uploads/2016/05/Livret-Reforme-du-Cadre-Le%CC%81gal.pdf' },
		],
	},
	{
		slug: 'combien-coute-une-etude-junior-entreprise',
		title: 'Combien coûte une étude réalisée par une Junior-Entreprise ?',
		category: 'Guide',
		date: '20 octobre 2026',
		dateIso: '2026-10-20',
		image: `${BLOG}6ad75c8afa4efc3d1ef7d675_6ad75c427eeb228613fdc6d5_couts.jpeg`,
		imageAlt: 'Pièces de monnaie : le coût d’une étude en Junior-Entreprise',
		intro: 'JEH, périmètre, livrables, matériel : comment se construit le devis d’une étude en Junior-Entreprise et comment maîtriser votre budget.',
		blocks: [
			{ type: 'lead', text: 'C’est souvent la première question : combien va coûter mon projet ? Il n’existe pas de prix catalogue, car chaque étude est construite sur mesure. En revanche, la façon dont un devis se calcule en Junior-Entreprise est simple à comprendre.' },
			{ type: 'h2', text: 'L’unité de base : le JEH' },
			{ type: 'p', text: 'Les Junior-Entreprises chiffrent leurs études en **JEH**, pour « jour étude homme » : une journée de travail d’un étudiant intervenant sur votre projet. Le JEH sert à établir le prix de l’étude comme à calculer la rétribution des étudiants, dans un cadre défini par la CNJE et documenté sur [Kiwi Légal](https://legal.junior-entreprises.com/).' },
			{ type: 'p', text: 'Le principe du devis : **nombre de JEH nécessaires × prix du JEH**, auquel s’ajoutent d’éventuels frais liés au projet.' },
			{ type: 'h2', text: 'Ce qui fait varier le prix' },
			{ type: 'ul', items: [
				'**Le périmètre** : une étude de faisabilité ne demande pas le même volume de travail qu’un prototype complet',
				'**La complexité technique** : certaines compétences pointues exigent plus d’analyse et de validation',
				'**Les livrables** : rapport, code source, application, maquettes, plans, prototype physique. Une application complète, comme [celle de Vinci Facilities](/actualites/etude-de-cas-vinci-facilities-application-podcasts), ne se chiffre pas comme une simple maquette',
				'**Le matériel** : composants, licences logicielles ou essais à acheter',
				'**Les déplacements** éventuels sur site',
			] },
			{ type: 'h2', text: 'Nos conseils pour maîtriser votre budget' },
			{ type: 'ol', items: [
				'**Cadrez précisément le besoin** : un objectif clair évite allers-retours et heures perdues.',
				'**Phasez le projet** : commencez par une étude de faisabilité, puis décidez de la suite en connaissance de cause.',
				'**Partagez vos données et documents** dès le départ.',
				'**Priorisez les livrables** : distinguez l’indispensable du souhaitable.',
			] },
			{ type: 'h2', text: 'Comment obtenir un devis ?' },
			{ type: 'p', text: 'Le plus simple est d’en parler. Après un premier échange pour comprendre votre besoin, nous vous remettons une proposition détaillée et un devis, sans engagement. Pour connaître le déroulé complet, lisez [notre guide pour faire appel à une Junior-Entreprise](/actualites/comment-faire-appel-a-une-junior-entreprise), ou [demandez directement votre devis](/contact).' },
		],
		sources: [
			{ label: 'Kiwi Légal, la base juridique de la CNJE', href: 'https://legal.junior-entreprises.com/' },
			{ label: 'Kiwi Légal : livret sur la réforme du cadre légal', href: 'https://legal.junior-entreprises.com/wp-content/uploads/2016/05/Livret-Reforme-du-Cadre-Le%CC%81gal.pdf' },
			{ label: 'CNJE : pourquoi faire appel à une Junior-Entreprise', href: 'https://junior-entreprises.com/entreprise' },
		],
	},
];
