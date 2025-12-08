"use client";

import Head from "next/head";
import ServiceLayout from "@/components/ServiceLayout";
import { Bell } from "lucide-react";
import Script from "next/script";

export default function FireAlarmsPage() {
  const features = [
    "Comprehensive fire alarm system inspection and testing services",
    "24/7 fire alarm monitoring with rapid emergency response",
    "Code compliance inspections and violation corrections",
    "Annual and semi-annual testing with complete documentation",
    "Fire alarm system installation for commercial and residential properties",
    "NICET-certified technicians with extensive fire alarm expertise",
    "Service and maintenance for all major fire alarm brands",
    "Emergency repair services to restore system functionality"
  ];

  return (
    <>
      <Head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R5QG7VBTHN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R5QG7VBTHN');
        `}
        </Script>
        <title>Fire Alarm Inspection & Testing Services | Cincinnati OH | Zanmar Protection</title>
        <meta
          name="description"
          content="Professional fire alarm inspection, testing, monitoring, and code compliance services in Cincinnati. NICET-certified technicians specializing in commercial fire alarm systems. Expert installation and 24/7 monitoring available."
        />
        <link
          rel="canonical"
          href="https://zanmarprotection.com/services/fire-alarms"
        />
      </Head>

      <ServiceLayout
        title="Fire Alarm Inspection & Service"
        description="Specialized fire alarm inspection, testing, monitoring, and code compliance services for commercial and residential properties. Our NICET-certified technicians provide expert fire alarm system service, annual testing, code violation corrections, and professional installation throughout Greater Cincinnati."
        image="/pull_station.webp"
        imageAlt="NICET-certified fire alarm technician performing system inspection"
        features={features}
        ctaText="Schedule Fire Alarm Inspection"
        icon={Bell}
      />
    </>
  );
}
