"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ServiceLayout({ 
  title, 
  description, 
  image, 
  imageAlt,
  features = [],
  ctaText = "Request a Quote",
  icon: Icon 
}) {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {Icon && (
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 shadow-xl">
                <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
            )}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{title}</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative h-96 w-full overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-12">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Offer</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed">{feature}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center p-12 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our expert team is ready to help protect what matters most.
            </p>
            <Link href="/contact" passHref>
              <Button className="px-8 py-4 text-lg">
                {ctaText}
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
