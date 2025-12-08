"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white">
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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Zanmar Protection</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              NICET-certified fire alarm specialists serving Greater Cincinnati with professional inspection, testing, monitoring, and code compliance services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none"
        >
          <div className="text-slate-700 space-y-6 text-lg leading-relaxed">
            <p>
              Zanmar Protection specializes in fire alarm system inspection, testing, monitoring, and code compliance services throughout Greater Cincinnati. Our NICET-certified technicians bring extensive expertise in fire alarm systems, ensuring your property maintains the highest standards of fire safety and regulatory compliance.
            </p>
            <p>
              Our core focus is fire alarm services, including comprehensive system inspections, annual and semi-annual testing, 24/7 monitoring, code violation corrections, and professional installation. We serve commercial buildings, multi-family residential properties, educational facilities, healthcare centers, and businesses of all sizes.
            </p>
            <p>
              In addition to our primary fire alarm services, we provide support for fire extinguishers, emergency lighting systems, and when needed, can service existing burglar alarm, camera, and access control systems. Licensed, insured, and NICET-certified, we deliver professional fire protection solutions you can trust.
            </p>
          </div>
        </motion.div>

        {/* Stats/Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center p-8 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">NICET Certified</h3>
            <p className="text-slate-600">Fire alarm technicians with national NICET certification</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center p-8 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Licensed & Insured</h3>
            <p className="text-slate-600">Fully certified and protected</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center p-8 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Fire Alarm Experts</h3>
            <p className="text-slate-600">Specialized expertise in fire alarm systems</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center p-8 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Code Compliance</h3>
            <p className="text-slate-600">Expert code compliance and violation corrections</p>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center p-12 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Need Fire Alarm Inspection or Service?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact Zanmar Protection for professional fire alarm inspection, testing, monitoring, and code compliance services throughout Cincinnati.
          </p>
          <Link href="/contact" passHref>
            <Button className="px-8 py-4 text-lg">
              Get Your Free Quote
            </Button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
