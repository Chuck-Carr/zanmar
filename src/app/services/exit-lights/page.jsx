"use client";

import Head from "next/head";
import ServiceLayout from "@/components/ServiceLayout";
import { Lightbulb } from "lucide-react";
import Script from "next/script";

export default function ExitLightsPage() {
  const features = [
    "Monthly and annual testing documentation",
    "Battery replacement and system repair",
    "New installations and fixture upgrades",
    "Emergency lighting audits for code compliance",
    "LED upgrade installations for energy efficiency",
    "24/7 emergency service available"
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
        <title>Exit & Emergency Lighting | Zanmar Protection</title>
        <meta
          name="description"
          content="Inspection, installation, and testing of exit and emergency lighting systems in Cincinnati."
        />
      </Head>

      <ServiceLayout
        title="Exit & Emergency Lighting"
        description="We ensure your emergency lighting systems are tested, functional, and code-compliant for every inspection. Protecting lives with reliable exit illumination."
        image="/exit-light.jpg"
        imageAlt="Exit and emergency lighting"
        features={features}
        ctaText="Schedule Lighting Inspection"
        icon={Lightbulb}
      />
    </>
  );
}
