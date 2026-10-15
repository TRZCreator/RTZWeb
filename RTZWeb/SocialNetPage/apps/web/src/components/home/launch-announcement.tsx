import { socialLinks } from '@/data/social-links';
import { SocialMark } from '@/components/home/social-mark';

const LOGO_URL =
	'https://horizons-cdn.hostinger.com/4fe1efa3-014e-4cb6-99ff-e0d93eac1938/af69ce4f7db29f0620d05662f2ab3b5e.png';

export function LaunchAnnouncement() {
	return (
		<main className="launch-page">
			<section className="launch-hero" aria-label="The Recreation Zone">
				<div className="launch-hero__stars" aria-hidden="true" />
				<div className="launch-hero__stars launch-hero__stars--far" aria-hidden="true" />
				<div className="launch-hero__stars launch-hero__stars--dense" aria-hidden="true" />
				<div className="launch-hero__body">
					<ul className="social-list">
						{socialLinks.map((item) => (
							<li key={item.id}>
								<a className="social-row" href={item.href} target="_blank" rel="noreferrer">
									<SocialMark id={item.id} />
									<span className="gold-type social-row__label">{item.label}</span>
								</a>
							</li>
						))}
					</ul>
					<div className="brand-lockup">
						<img
							src={LOGO_URL}
							alt=""
							className="brand-lockup__mark"
							width={480}
							height={480}
							decoding="async"
						/>
						<p className="gold-type brand-lockup__name">The Recreation Zone</p>
					</div>
				</div>
			</section>
		</main>
	);
}
