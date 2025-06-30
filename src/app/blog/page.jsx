import Link from "next/link";

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
    title: "Why install a camera system?",
    excerpt:
      "Discover how security camera systems protect both homes and businesses—deterring crime, monitoring activity, and giving you peace of mind 24/7.",
    date: "2025-05-30",
    slug: "why-install-camera-system",
  },
  {
    id: 3,
    title: "Benefits of Access Control Systems",
    excerpt:
      "Discover how access control enhances your security and protects your premises.",
    date: "2025-05-10",
    slug: "benefits-access-control",
  },
  {
    id: 4,
    title: "Choosing the Right Fire Extinguisher for Your Business",
    excerpt:
      "Selecting the proper fire extinguisher is crucial for effective fire safety. Learn how to pick the right type and size to protect your business from different fire hazards, ensuring compliance and preparedness.",
    date: "2025-01-10",
    slug: "chosing-fire-extinguisher",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 text-blue-900">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Zanmar Protection Blog
      </h1>
      <ul className="space-y-10">
        {posts.map(({ id, title, excerpt, date, slug }) => (
          <li key={id} className="border-b border-blue-300 pb-6">
            <a href={`/blog/${slug}`} className="hover:text-blue-700 transition">
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
  );
}
