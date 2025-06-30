import Head from "next/head";
import Layout from "../../components/Layout";

export default function IntrusionDetectionPage() {
  return (
    <>
      <Head>
        <title>Intrusion Detection Systems | Fire Security Co.</title>
        <meta name="description" content="Install and service professional-grade intrusion detection systems for homes and businesses." />
      </Head>
      <Layout>
        <h1 className="text-3xl font-bold mb-4">Intrusion Detection Systems</h1>
        <p className="mb-4">
          We install and service professional-grade intrusion detection systems for commercial and residential properties.
          From door/window sensors to motion detectors and smart alarms, our solutions help keep your property safe.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Request a Quote</button>
      </Layout>
    </>
  );
}