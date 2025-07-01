"use client";

import Head from "next/head";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Script from "next/script";

export default function ExitLightsPage() {
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
        <title>Exit & Emergency Lighting | Zanmar Protection</title>
        <meta
          name="description"
          content="Inspection, installation, and testing of exit and emergency lighting systems in Cincinnati."
        />
      </Head>

      <main className="bg-white text-blue-900 font-sans">
        <section className="bg-blue-50 px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Exit & Emergency Lighting
            </h1>
            <p className="text-lg text-blue-800 max-w-3xl">
              We ensure your emergency lighting systems are tested, functional,
              and code-compliant for every inspection.
            </p>
          </div>
        </section>

        <section className="relative h-96 w-full">
          <img
            src="/exit_light.jpg"
            alt="Exit and emergency lighting"
            fill
            className="w-full h-120 object-cover shadow"
            priority
          />
        </section>

        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold mb-6">Included Services</h2>
          <ul className="space-y-4 text-blue-800 list-disc list-inside">
            <li>Monthly and annual testing documentation</li>
            <li>Battery replacement and system repair</li>
            <li>New installations and fixture upgrades</li>
            <li>Emergency lighting audits for code compliance</li>
          </ul>

          <div className="mt-12 text-center">
            <Link href="/contact" passHref>
              <Button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 text-lg font-semibold">
                Schedule Lighting Inspection
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
