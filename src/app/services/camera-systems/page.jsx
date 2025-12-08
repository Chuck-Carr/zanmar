"use client";

import Head from "next/head";
import ServiceLayout from "@/components/ServiceLayout";
import { Camera } from "lucide-react";
import Script from "next/script";

export default function CameraSystemsPage() {
  const features = [
    "HD indoor and outdoor cameras installation",
    "Remote monitoring and recording solutions",
    "Smartphone app integration for easy access",
    "Maintenance and system upgrades",
    "Night vision and weather-resistant cameras",
    "Cloud and local storage options"
  ];

  return (
    <>
      <Head>
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
        <title>Security Camera System Service | Cincinnati OH | Zanmar Protection</title>
        <meta
          name="description"
          content="Professional service and maintenance for existing security camera systems in Cincinnati. Technical support and troubleshooting for commercial and residential surveillance systems."
        />
      </Head>

      <ServiceLayout
        title="Security Camera System Service"
        description="Professional service and maintenance for existing surveillance camera systems. We provide technical support, troubleshooting, and repairs for commercial and residential properties throughout Cincinnati."
        image="/camera.jpg"
        imageAlt="Security surveillance camera system"
        features={features}
        ctaText="Request Service Quote"
        icon={Camera}
      />
    </>
  );
}
