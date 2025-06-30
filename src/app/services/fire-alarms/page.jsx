"use client";

import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FireAlarmsPage() {
  return (
    <>
      <Head>
        <title>Fire Alarm Systems | Zanmar Protection</title>
        <meta
          name="description"
          content="Professional design, installation, and inspection of fire alarm systems for homes and businesses in Greater Cincinnati."
        />
        <link rel="canonical" href="https://zanmarprotection.com/services/fire-alarms" />
      </Head>

      <main className="bg-white text-blue-900 font-sans">
        <section className="bg-blue-50 px-6 py-10">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Fire Alarm Systems</h1>
            <p className="text-lg text-blue-800 max-w-3xl">
              Zanmar Protection provides professional design, installation, and service of fire alarm systems for both
              residential and commercial clients. Our NICET-certified team ensures code-compliance and 24/7 protection.
            </p>
          </div>
        </section>

        <section className="relative h-96 w-full">
          <Image
            src="/fire_alarm.jpg"
            alt="Fire alarm technician"
            fill
            className="object-cover brightness-90"
            priority
          />
        </section>

        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold mb-6">Why Choose Zanmar?</h2>
          <ul className="space-y-4 text-blue-800 list-disc list-inside">
            <li>Custom design for residential, retail, and commercial buildings</li>
            <li>Installation of conventional and addressable fire alarm systems</li>
            <li>Annual inspections, testing, and monitoring</li>
            <li>Fast emergency response and repair service</li>
            <li>Fully NICET-certified and insured technicians</li>
          </ul>

          <div className="mt-12 text-center">
          <Link href="/contact" passHref>
            <Button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 text-lg font-semibold">
              Request a Fire Alarm Quote
            </Button>
          </Link>
          </div>
        </section>
      </main>
    </>
  );
}
