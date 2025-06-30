"use client";

import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CameraSystemsPage() {
  return (
    <>
      <Head>
        <title>Camera Systems | Zanmar Protection</title>
        <meta
          name="description"
          content="Professional camera system installation and monitoring for residential and commercial properties in Cincinnati."
        />
      </Head>

      <main className="bg-white text-blue-900 font-sans">
        <section className="bg-blue-50 px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Camera Systems</h1>
            <p className="text-lg text-blue-800 max-w-3xl">
              Monitor and protect your property with high-definition indoor and outdoor camera systems designed for your needs.
            </p>
          </div>
        </section>

        <section className="relative h-96 w-full">
          <Image
            src="/camera_systems.jpg"
            alt="Security cameras"
            fill
            className="object-cover brightness-90"
            priority
          />
        </section>

        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold mb-6">Camera Services</h2>
          <ul className="space-y-4 text-blue-800 list-disc list-inside">
            <li>HD indoor and outdoor cameras installation</li>
            <li>Remote monitoring and recording solutions</li>
            <li>Smartphone app integration for easy access</li>
            <li>Maintenance and system upgrades</li>
          </ul>

          <div className="mt-12 text-center">
          <Link href="/contact" passHref>
            <Button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 text-lg font-semibold">
              Request Camera System Quote
            </Button>
          </Link>
          </div>
        </section>
      </main>
    </>
  );
}
