import Head from "next/head";
import Layout from "../../components/Layout";

export default function CameraSystemsPage() {
  return (
    <>
      <Head>
        <title>Camera Surveillance Systems | Fire Security Co.</title>
        <meta
          name="description"
          content="24/7 surveillance with high-definition indoor and outdoor camera systems and remote access."
        />
      </Head>
      <Layout>
        <h1 className="text-3xl font-bold mb-4">Camera Surveillance Systems</h1>
        <p className="mb-4">
          Monitor your property 24/7 with our high-definition camera systems. We
          offer installation and maintenance for indoor and outdoor surveillance
          setups, including remote viewing via smartphone.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Get Started Today
        </button>
      </Layout>
    </>
  );
}
