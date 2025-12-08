"use client";

import Head from "next/head";
import ServiceLayout from "@/components/ServiceLayout";
import { Shield } from "lucide-react";
import Script from "next/script";

export default function IntrusionDetectionPage() {
  const features = [
    "Custom alarm system design and installation",
    "24/7 monitoring and alert services",
    "Wireless and wired system options",
    "Integration with smart home and security devices",
    "Motion detectors and glass break sensors",
    "Professional installation and ongoing support"
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
        <title>Burglar Alarm System Service | Cincinnati OH | Zanmar Protection</title>
        <meta
          name="description"
          content="Professional burglar alarm system service and maintenance in Cincinnati. Expert support for existing security systems with troubleshooting and repair services."
        />
      </Head>

      <ServiceLayout
        title="Burglar Alarm System Service"
        description="Professional service and maintenance for existing burglar alarm systems. We provide expert support, troubleshooting, and repair services for commercial and residential security systems throughout Cincinnati."
        image="/keypad.jpg"
        imageAlt="Burglar alarm system control panel"
        features={features}
        ctaText="Request Service Quote"
        icon={Shield}
      />
    </>
  );
}
