"use client";

import Head from "next/head";
import ServiceLayout from "@/components/ServiceLayout";
import { Lock } from "lucide-react";
import Script from "next/script";

export default function AccessControlPage() {
  const features = [
    "Keycard and fob access system installation",
    "Biometric and keypad entry solutions",
    "Integration with existing security and alarm systems",
    "Ongoing maintenance and troubleshooting",
    "Multi-level access control management",
    "Audit trails and access reporting"
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
        <title>Access Control System Service | Cincinnati OH | Zanmar Protection</title>
        <meta
          name="description"
          content="Professional service and maintenance for existing access control systems in Cincinnati. Expert support for keycard, fob, and electronic entry systems."
        />
      </Head>

      <ServiceLayout
        title="Access Control System Service"
        description="Professional service and maintenance for existing access control systems. We support keycard, fob, biometric, and electronic entry systems for commercial and residential properties throughout Cincinnati."
        image="/card_reader.jpeg"
        imageAlt="Access control keycard entry system"
        features={features}
        ctaText="Request Service Quote"
        icon={Lock}
      />
    </>
  );
}
