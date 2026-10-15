const LOGO_URL =
	'https://horizons-cdn.hostinger.com/4fe1efa3-014e-4cb6-99ff-e0d93eac1938/af69ce4f7db29f0620d05662f2ab3b5e.png';

export function SiteHeader() {
	return (
		<header className="site-header" aria-label="Site header">
			<div className="site-header__brand">
				<div className="site-header__logo" aria-hidden="true">
					<img
						src={LOGO_URL}
						alt=""
						className="site-header__butterfly"
						width={114}
						height={114}
						decoding="async"
					/>
				</div>
				<span className="site-header__rule" aria-hidden="true" />
				<p className="site-header__title">Coming Soon</p>
			</div>
		</header>
	);
}
