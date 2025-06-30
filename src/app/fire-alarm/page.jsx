"use client";

import Head from "next/head";
import Layout from "../../components/Layout";

export default function FireAlarmPage() {
  return (
    <>
      <Head>
        <title>Fire Alarm Systems | Zanmar Protection</title>
        <meta
          name="description"
          content="Design, installation, and maintenance of code-compliant fire alarm systems tailored to your building."
        />
        <meta
          property="og:title"
          content="Fire Alarm Systems | Zanmar Protection"
        />
        <meta
          property="og:description"
          content="Reliable fire alarm installation and inspection services for Cincinnati businesses and homes."
        />
      </Head>
      <Layout>
        <h1 className="text-3xl font-bold mb-4">Fire Alarm Systems</h1>
        <p className="mb-4">
          We provide professional fire alarm system design, installation, and ongoing maintenance to ensure your property stays safe and code-compliant.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Request a Quote
        </button>
      </Layout>
    </>
  );
}
