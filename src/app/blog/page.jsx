"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

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
    <main className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Fire & Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Expert tips, industry news, and best practices for fire protection and security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map(({ id, title, excerpt, date, slug }, index) => (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${slug}`}
                className="group block h-full p-8 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <time>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                </div>
                
                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {title}
                </h2>
                
                <p className="text-slate-600 leading-relaxed mb-6">{excerpt}</p>
                
                <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
