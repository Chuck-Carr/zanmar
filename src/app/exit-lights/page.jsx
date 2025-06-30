"use client";

import Head from "next/head";
import Layout from "../../components/Layout";

export default function ExitLightsPage() {
  return (
    <>
      <Head>
        <title>Exit & Emergency Lights | Zanmar Protection</title>
        <meta
          name="description"
          content="Installation and maintenance of emergency exit lighting to meet life safety codes."
        />
        <meta
          property="og:title"
          content="Exit & Emergency Lights | Zanmar Protection"
        />
        <meta
          property="og:description"
          content="Ensure your property is safe with properly functioning exit and emergency lights."
        />
      </Head>
      <Layout>
        <h1 className="text-3xl font-bold mb-4">Exit & Emergency Lights</h1>
        <p className="mb-4">
          We install and maintain emergency exit lighting to ensure your building complies with safety regulations.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Contact Us
        </button>
      </Layout>
    </>
  );
}
