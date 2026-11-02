const escapeHtml = (value: string) =>
	value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Mini-markup : **gras** et [texte](lien). Le reste est échappé. */
export function rich(text: string): string {
	return escapeHtml(text)
		.replace(/\[([^\]]+)\]\(((?:https?:\/\/|\/|#|mailto:)[^)\s]*)\)/g, (_m, label: string, href: string) => {
			const external = /^https?:/.test(href);
			return `<a href="${href}"${external ? ' target="_blank" rel="noreferrer"' : ''}>${label}</a>`;
		})
		.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}
