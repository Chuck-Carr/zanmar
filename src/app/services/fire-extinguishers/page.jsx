"use client";

import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FireExtinguishersPage() {
  return (
    <>
      <Head>
        <title>Fire Extinguisher Service | Zanmar Protection</title>
        <meta name="description" content="Fire extinguisher inspections, refills, and replacements for homes and businesses in Cincinnati." />
      </Head>

      <main className="bg-white text-blue-900 font-sans">
        <section className="bg-blue-50 px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Fire Extinguisher Service</h1>
            <p className="text-lg text-blue-800 max-w-3xl">
              We inspect, refill, and replace fire extinguishers to keep your property code-compliant and protected.
            </p>
          </div>
        </section>

        <section className="relative h-96 w-full">
          <Image
            src="/extinguisher.jpg"
            alt="Fire extinguisher inspection"
            fill
            className="object-cover brightness-90"
            priority
          />
        </section>

        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold mb-6">We Offer</h2>
          <ul className="space-y-4 text-blue-800 list-disc list-inside">
            <li>Annual inspections and recharging</li>
            <li>On-site replacement and disposal</li>
            <li>Code-compliant labeling and documentation</li>
            <li>Services for ABC, CO2, and K-type extinguishers</li>
          </ul>

          <div className="mt-12 text-center">
          <Link href="/contact" passHref>
            <Button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 text-lg font-semibold">
              Request Extinguisher Service
            </Button>
          </Link>
          </div>
        </section>
      </main>
    </>
  );
}
