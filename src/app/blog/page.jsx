import Layout from "../../components/Layout";

const posts = [
  {
    id: 1,
    title: "How to Maintain Your Fire Alarm System",
    excerpt:
      "Learn essential tips to keep your fire alarm system in top shape and ensure safety.",
    date: "2025-06-15",
    slug: "maintain-fire-alarm-system",
  },
  {
    id: 2,
    title: "Choosing the Right Fire Extinguisher for Your Business",
    excerpt:
      "A guide to selecting the proper fire extinguisher tailored to your environment and needs.",
    date: "2025-05-30",
    slug: "choosing-fire-extinguisher",
  },
  {
    id: 3,
    title: "Benefits of Access Control Systems",
    excerpt:
      "Discover how access control enhances your security and protects your premises.",
    date: "2025-05-10",
    slug: "benefits-access-control",
  },
];

export default function Blog() {
  return (
    <Layout>
      <main className="max-w-6xl mx-auto px-6 py-12 text-blue-900">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Zanmar Protection Blog
        </h1>
        <ul className="space-y-10">
          {posts.map(({ id, title, excerpt, date, slug }) => (
            <li key={id} className="border-b border-blue-300 pb-6">
              <a
                href={`/blog/${slug}`}
                className="hover:text-blue-700 transition"
              >
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
              </a>
              <p className="text-gray-700 mb-1">{excerpt}</p>
              <time className="text-sm text-blue-600">
                {new Date(date).toLocaleDateString()}
              </time>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
