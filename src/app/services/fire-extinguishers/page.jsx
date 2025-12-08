"use client";

import Head from "next/head";
import ServiceLayout from "@/components/ServiceLayout";
import { Flame } from "lucide-react";
import Script from "next/script";

export default function FireExtinguishersPage() {
  const features = [
    "Annual inspections and recharging",
    "On-site replacement and disposal",
    "Code-compliant labeling and documentation",
    "Services for ABC, CO2, and K-type extinguishers",
    "Emergency extinguisher repairs",
    "Compliance reporting for inspections"
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
        <title>Fire Extinguisher Service | Zanmar Protection</title>
        <meta
          name="description"
          content="Fire extinguisher inspections, refills, and replacements for homes and businesses in Cincinnati."
        />
      </Head>

      <ServiceLayout
        title="Fire Extinguisher Service"
        description="We inspect, refill, and replace fire extinguishers to keep your property code-compliant and protected. Professional service for all types of fire suppression equipment."
        image="/extinguisher-maintenance.jpg"
        imageAlt="Fire extinguisher inspection"
        features={features}
        ctaText="Request Extinguisher Service"
        icon={Flame}
      />
    </>
  );
}
