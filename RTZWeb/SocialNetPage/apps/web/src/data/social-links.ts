/**
 * Placeholder social rows. Swap `href` and `icon` when the real SVGs and
 * profile links are ready. Do not treat these hrefs as live profiles.
 */
export type SocialId = 'instagram' | 'facebook' | 'whatsapp';

export type SocialLink = {
	id: SocialId;
	label: string;
	href: string;
};

export const socialLinks: SocialLink[] = [
	{ id: 'instagram', label: 'TRZonInsta', href: 'https://www.instagram.com/trzoninsta/' },
	{ id: 'facebook', label: 'TRZonFB', href: 'https://www.facebook.com/profile.php?id=61595407977916' },
	{ id: 'whatsapp', label: 'TRZonWhatsApp', href: 'https://whatsapp.com/channel/0029Vb8su8GEwEjnSXkTJ829' },
];
