import type { SocialId } from '@/data/social-links';

type SocialMarkProps = {
	id: SocialId;
};

/** Stand-in marks. Replace each SVG when the uploaded icons arrive. */
export function SocialMark({ id }: SocialMarkProps) {
	if (id === 'instagram') {
		return (
			<svg viewBox="0 0 64 64" aria-hidden="true" className="social-row__icon">
				<defs>
					<linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
						<stop offset="0%" stopColor="#f9ce34" />
						<stop offset="45%" stopColor="#ee2a7b" />
						<stop offset="100%" stopColor="#6228d7" />
					</linearGradient>
				</defs>
				<rect x="2" y="2" width="60" height="60" rx="16" fill="url(#ig-grad)" />
				<rect x="16" y="16" width="32" height="32" rx="10" fill="none" stroke="#fff" strokeWidth="4" />
				<circle cx="32" cy="32" r="8" fill="none" stroke="#fff" strokeWidth="4" />
				<circle cx="44.5" cy="19.5" r="2.4" fill="#fff" />
			</svg>
		);
	}

	if (id === 'facebook') {
		return (
			<svg viewBox="0 0 64 64" aria-hidden="true" className="social-row__icon">
				<circle cx="32" cy="32" r="30" fill="#1877f2" />
				<path
					fill="#fff"
					d="M36.8 50V34.2h5.3l.8-6.2h-6.1v-4c0-1.8.5-3 3.1-3H43V15.4c-.6-.1-2.6-.3-5-.3-4.9 0-8.3 3-8.3 8.5v4.4H24v6.2h5.7V50h7.1z"
				/>
			</svg>
		);
	}

	return (
		<svg viewBox="0 0 64 64" aria-hidden="true" className="social-row__icon">
			<path
				fill="#25d366"
				d="M32 6C17.6 6 6 17.2 6 31.1c0 4.4 1.2 8.6 3.4 12.3L6 58l15.1-3.9A26.4 26.4 0 0 0 32 56.2C46.4 56.2 58 45 58 31.1S46.4 6 32 6z"
			/>
			<path
				fill="#fff"
				d="M44.6 38.7c-.6 1.7-3.4 3.2-4.7 3.4-1.2.2-2.7.3-4.4-.3-1-.3-2.3-.7-4-1.5-7-3.1-11.6-10.2-11.9-10.7-.3-.5-2.6-3.5-2.6-6.6s1.6-4.7 2.2-5.3c.6-.7 1.3-.8 1.7-.8h1.2c.4 0 .9 0 1.3 1 .6 1.4 2 4.8 2.1 5.2.2.3.2.8 0 1.2-.2.5-.4.8-.7 1.2-.3.4-.6.8-.9 1.1-.3.3-.6.6-.3 1.2.3.6 1.4 2.3 3 3.7 2.1 1.8 3.8 2.4 4.4 2.7.6.3 1 .2 1.3-.1.4-.4 1.5-1.7 1.9-2.3.4-.6.8-.5 1.4-.3.6.2 3.6 1.7 4.2 2 .6.3 1 .5 1.1.8.2.3.2 1.6-.4 3.3z"
			/>
		</svg>
	);
}
