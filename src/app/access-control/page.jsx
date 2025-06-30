import Head from "next/head";
import Layout from "../../components/Layout";

export default function AccessControlPage() {
  return (
    <>
      <Head>
        <title>Access Control Systems | Fire Security Co.</title>
        <meta name="description" content="Manage secure entry to your building with card readers, keypads, biometrics, and more." />
      </Head>
      <Layout>
        <h1 className="text-3xl font-bold mb-4">Access Control Systems</h1>
        <p className="mb-4">
          Our access control systems let you manage who enters your building and when. We offer keypad, card reader,
          biometric, and mobile access solutions tailored to your security needs.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Schedule a Consultation</button>
      </Layout>
    </>
  );
}