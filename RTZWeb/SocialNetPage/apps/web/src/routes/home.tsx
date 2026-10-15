import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { LaunchAnnouncement } from '@/components/home/launch-announcement';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Coming Soon — The Recreation Zone',
		description: 'The Recreation Zone is coming soon. Find us on Instagram, Facebook, and WhatsApp.',
	});
}

export default function HomePage() {
	return <LaunchAnnouncement />;
}
