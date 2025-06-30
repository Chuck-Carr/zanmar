"use client";

import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AccessControlPage() {
  return (
    <>
      <Head>
        <title>Access Control Systems | Zanmar Protection</title>
        <meta
          name="description"
          content="Install and maintain keycard and door access control systems for residential and commercial properties in Cincinnati."
        />
      </Head>

      <main className="bg-white text-blue-900 font-sans">
        <section className="bg-blue-50 px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Access Control Systems</h1>
            <p className="text-lg text-blue-800 max-w-3xl">
              Manage and secure your property with advanced access control systems including keycards, fobs, and biometric solutions.
            </p>
          </div>
        </section>

        <section className="relative h-96 w-full">
          <Image
            src="/access_control.jpg"
            alt="Access control panel"
            fill
            className="object-cover brightness-90"
            priority
          />
        </section>

        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold mb-6">Our Access Control Services</h2>
          <ul className="space-y-4 text-blue-800 list-disc list-inside">
            <li>Keycard and fob access system installation</li>
            <li>Biometric and keypad entry solutions</li>
            <li>Integration with existing security and alarm systems</li>
            <li>Ongoing maintenance and troubleshooting</li>
          </ul>

          
          <div className="mt-12 text-center">
          <Link href="/contact" passHref>
          <Button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 text-lg font-semibold">
            Request Access Control Quote
          </Button>
        </Link>
          </div>
        </section>
      </main>
    </>
  );
}
