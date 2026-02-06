import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://zanmarprotection.com'),
  title: {
    default: 'Fire Alarm Monitoring Cincinnati | 24/7 Fire Alarm Service | Zanmar Protection',
    template: '%s | Zanmar Protection'
  },
  description: 'Cincinnati fire alarm monitoring service with 24/7 response. Professional fire alarm inspection, testing, installation & monitoring. NICET-certified technicians. Fire protection systems & fire detection. Licensed & insured.',
  keywords: ['fire alarm monitoring cincinnati', 'fire alarm monitoring service', 'fire alarm service cincinnati', 'fire alarm inspection cincinnati', 'fire alarm testing', 'fire alarm installation cincinnati', '24/7 fire alarm monitoring', 'fire detection system cincinnati', 'fire protection cincinnati', 'commercial fire alarm monitoring', 'NICET certified fire alarm'],
  authors: [{ name: 'Zanmar Protection' }],
  creator: 'Zanmar Protection',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zanmarprotection.com',
    siteName: 'Zanmar Protection',
    title: 'Fire Alarm Monitoring Cincinnati | 24/7 Fire Alarm Service',
    description: 'Cincinnati fire alarm monitoring service with 24/7 response. Professional fire alarm inspection, testing & installation. NICET-certified.',
    images: [
      {
        url: '/fire_alarm.jpg',
        width: 1200,
        height: 630,
        alt: 'Fire Alarm Services Cincinnati - Zanmar Protection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fire Alarm Monitoring Cincinnati | 24/7 Service',
    description: 'Cincinnati fire alarm monitoring with 24/7 response. Fire alarm inspection, testing & installation. NICET-certified.',
    images: ['/fire_alarm.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://zanmarprotection.com',
  },
};

// LocalBusiness JSON-LD Schema for local SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://zanmarprotection.com',
  name: 'Zanmar Protection',
  description: 'Cincinnati fire alarm monitoring service with 24/7 emergency response. Professional fire alarm inspection, testing, installation & monitoring. NICET-certified technicians serving Greater Cincinnati.',
  url: 'https://zanmarprotection.com',
  telephone: '+1-513-216-2700',
  email: 'info@zanmarprotection.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cincinnati',
    addressRegion: 'OH',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.1031,
    longitude: -84.5120,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Cincinnati',
      '@id': 'https://www.wikidata.org/wiki/Q43196'
    },
    {
      '@type': 'State',
      name: 'Ohio'
    }
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 39.1031,
      longitude: -84.5120
    },
    geoRadius: '50 mi'
  },
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Fire Protection Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fire Alarm Monitoring Service',
          description: '24/7 fire alarm monitoring with rapid emergency response in Cincinnati'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fire Alarm Inspection & Testing',
          description: 'Professional fire alarm inspection and testing services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fire Protection Systems',
          description: 'Complete fire protection system installation and service'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fire Extinguisher Service',
          description: 'Fire extinguisher inspection, maintenance, and certification'
        }
      }
    ]
  },
  sameAs: [],
  image: 'https://zanmarprotection.com/fire_alarm.jpg'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R5QG7VBTHN"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R5QG7VBTHN', { page_path: window.location.pathname });
            `,
          }}
        />
        {/* JSON-LD Structured Data for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow p-0 max-w-6xl mx-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
