export const metadata = {
  title: 'Fire Alarm Monitoring & Service Cincinnati | 24/7 Fire Protection',
  description: 'Professional fire alarm monitoring service in Cincinnati. NICET-certified fire alarm inspection, testing, installation & 24/7 monitoring. Fire detection systems & fire protection services. Licensed & insured.',
  keywords: ['fire alarm monitoring service cincinnati', 'fire alarm service cincinnati', 'fire detection system cincinnati', 'fire alarm inspection', 'fire alarm testing', 'fire alarm installation cincinnati', '24/7 fire alarm monitoring'],
  openGraph: {
    title: 'Fire Alarm Monitoring & Service Cincinnati | Zanmar Protection',
    description: 'Professional fire alarm monitoring service in Cincinnati. NICET-certified fire alarm inspection, testing, installation & 24/7 monitoring.',
    url: 'https://zanmarprotection.com/services/fire-alarms/',
    images: [
      {
        url: '/pull_station.webp',
        width: 1200,
        height: 630,
        alt: 'Fire Alarm Monitoring Service Cincinnati',
      },
    ],
  },
  alternates: {
    canonical: 'https://zanmarprotection.com/services/fire-alarms/',
  },
};

export default function FireAlarmsLayout({ children }) {
  return children;
}
