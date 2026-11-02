/* Domaine de chaque entreprise citée : sert à afficher son logo (favicon haute définition via le service de Google).
   Pour un rendu parfait, déposez les logos officiels dans /public/logos/ et remplacez l’URL dans CompanyLogo.astro. */
export const logoDomains: Record<string, string> = {
	'Thales': 'thalesgroup.com',
	'ENGIE': 'engie.com',
	'VINCI Energies': 'vinci-energies.com',
	'VINCI Facilities': 'vinci-facilities.com',
	'VINCI': 'vinci.com',
	'CNRS': 'cnrs.fr',
	'CNES': 'cnes.fr',
	'Mantu': 'mantu.com',
	'Sigfox': 'sigfox.com',
	'RTE': 'rte-france.com',
	'Toulouse INP-ENSEEIHT': 'toulouse-inp.fr',
	'Société Générale': 'societegenerale.com',
	'Wavestone': 'wavestone.com',
	'ALTEN': 'alten.fr',
	'PwC': 'pwc.fr',
};

export const initials = (name: string) =>
	name.split(/[\s-]+/).filter(Boolean).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
