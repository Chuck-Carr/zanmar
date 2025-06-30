"use client";

import Head from "next/head";
import Layout from "../../components/Layout";

export default function FireExtinguishersPage() {
  return (
    <>
      <Head>
        <title>Fire Extinguisher Services | Zanmar Protection</title>
        <meta
          name="description"
          content="Inspection, refill, and replacement services for commercial and residential fire extinguishers."
        />
        <meta
          property="og:title"
          content="Fire Extinguisher Services | Zanmar Protection"
        />
        <meta
          property="og:description"
          content="Keep your fire extinguishers ready and compliant with our expert inspection and servicing."
        />
      </Head>
      <Layout>
        <h1 className="text-3xl font-bold mb-4">Fire Extinguisher Services</h1>
        <p className="mb-4">
          Annual inspections, refills, and replacements to keep your extinguishers in perfect working order.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Schedule Service
        </button>
      </Layout>
    </>
  );
}
