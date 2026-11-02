/** Découpe une valeur de statistique (« 600+ », « 97 % », « 1 500 ») pour animer sa partie numérique. */
export function splitStat(value: string) {
	const m = value.match(/^(\D*?)(\d[\d\s\u00a0\u202f]*\d|\d)(.*)$/);
	if (!m) return { countable: false, pre: '', num: value, post: '', sep: '' };
	const digits = m[2];
	const sepMatch = digits.match(/[\s\u00a0\u202f]/);
	const clean = digits.replace(/[\s\u00a0\u202f]/g, '');
	// Les années (1977, 1907) ne se comptent pas : on les affiche telles quelles
	const isYear = /^\d{4}$/.test(clean) && !sepMatch;
	return { countable: !isYear, pre: m[1], num: clean, post: m[3], sep: sepMatch ? sepMatch[0] : '' };
}
