"use client";

import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function IntrusionDetectionPage() {
  return (
    <>
      <Head>
        <title>Intrusion Detection Systems | Zanmar Protection</title>
        <meta
          name="description"
          content="Professional intrusion detection system installation and monitoring for homes and businesses in Cincinnati."
        />
      </Head>

      <main className="bg-white text-blue-900 font-sans">
        <section className="bg-blue-50 px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Intrusion Detection Systems</h1>
            <p className="text-lg text-blue-800 max-w-3xl">
              Keep your property safe with state-of-the-art intrusion detection systems tailored for residential and commercial security.
            </p>
          </div>
        </section>

        <section className="relative h-96 w-full">
          <Image
            src="/intrusion.jpg"
            alt="Intrusion detection system"
            fill
            className="object-cover brightness-90"
            priority
          />
        </section>

        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold mb-6">Our Intrusion Services</h2>
          <ul className="space-y-4 text-blue-800 list-disc list-inside">
            <li>Custom alarm system design and installation</li>
            <li>24/7 monitoring and alert services</li>
            <li>Wireless and wired system options</li>
            <li>Integration with smart home and security devices</li>
          </ul>

          <div className="mt-12 text-center">
          <Link href="/contact" passHref>
            <Button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 text-lg font-semibold">
              Request Intrusion System Quote
            </Button>
          </Link>
          </div>
        </section>
      </main>
    </>
  );
}
