"use client";

import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import ContactForm from "@/components/contact";
import Script from "next/script";
import { Flame, Shield, Camera, Lock, Bell, Lightbulb } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Fire Alarm Inspection & Service | NICET Certified | Cincinnati OH</title>
        <meta
          name="description"
          content="Professional fire alarm inspection, monitoring, and code compliance services in Cincinnati. NICET-certified technicians specializing in fire alarm system testing, service, and installation. Licensed & insured."
        />
        <meta
          name="keywords"
          content="fire alarm inspection Cincinnati, fire alarm service, fire alarm monitoring, NICET certified, code compliance, fire alarm testing, fire alarm installation, Cincinnati fire protection, commercial fire alarm"
        />
        <meta
          property="og:title"
          content="Fire Alarm Inspection & Service | NICET Certified | Cincinnati OH"
        />
        <meta
          property="og:description"
          content="Professional fire alarm inspection, monitoring, and code compliance services throughout Greater Cincinnati. NICET-certified technicians."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://zanmarprotection.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gradient-to-b from-slate-50 to-white text-slate-900 font-sans">
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white overflow-hidden">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <img
              src="/downtown.jpg"
              alt="Cincinnati Skyline"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-48">
            {/* Floating Badges */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass px-5 py-2 rounded-full text-sm font-medium border border-white/30 shadow-xl backdrop-blur-md bg-white/10">
                ✓ NICET Certified
              </div>
              <div className="glass px-5 py-2 rounded-full text-sm font-medium border border-white/30 shadow-xl backdrop-blur-md bg-white/10">
                ✓ Licensed & Insured
              </div>
              <div className="glass px-5 py-2 rounded-full text-sm font-medium border border-white/30 shadow-xl backdrop-blur-md bg-white/10">
                ✓ 24/7 Service
              </div>
            </motion.div>
            
            <div className="text-center">
              <motion.h1
                className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block text-white drop-shadow-2xl">
                  Cincinnati's Trusted
                </span>
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent animate-gradient">
                    Fire Alarm Service Experts
                  </span>
                </span>
              </motion.h1>
              
              <motion.p
                className="max-w-3xl mx-auto text-xl md:text-2xl font-light mb-10 text-slate-200 leading-relaxed"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                NICET-certified fire alarm inspection, monitoring, and code compliance services for commercial and residential properties throughout Greater Cincinnati.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link href="/contact" passHref>
                  <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105">
                    Request a Free Quote
                  </Button>
                </Link>
                <a 
                  href="tel:+15135974332"
                  className="inline-flex items-center gap-2 px-10 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-md hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-bold text-slate-900 mb-4">
                Fire Alarm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Services & Expertise</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Specialized fire alarm services with additional life safety capabilities
              </p>
            </motion.div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Fire Alarm Systems",
                description:
                  "Professional fire alarm inspection, testing, monitoring, and code compliance services. Expert installation and 24/7 system monitoring to keep your property protected and compliant.",
                image: "/pull_station.webp",
                href: "/services/fire-alarms",
                icon: Bell,
                color: "from-red-500 to-orange-500",
              },
              {
                title: "Fire Extinguisher Service",
                description:
                  "Comprehensive fire extinguisher inspection, maintenance, and certification. Annual testing, recharging, and compliance documentation to meet fire safety regulations.",
                image: "/extinguisher-maintenance.jpg",
                href: "/services/fire-extinguishers",
                icon: Flame,
                color: "from-orange-500 to-yellow-500",
              },
              {
                title: "Exit & Emergency Lighting",
                description:
                  "Emergency lighting inspection and testing services. Monthly and annual compliance testing with complete documentation to satisfy code requirements.",
                image: "/exit-light.jpg",
                href: "/services/exit-lights",
                icon: Lightbulb,
                color: "from-yellow-500 to-green-500",
              },
              {
                title: "Burglar Alarm Service",
                description:
                  "Professional burglar alarm system service and maintenance. We support existing security systems with expert troubleshooting and repair services.",
                image: "/keypad.jpg",
                href: "/services/intrusion-detection",
                icon: Shield,
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Camera System Service",
                description:
                  "Maintenance and service for existing surveillance camera systems. Technical support and troubleshooting for commercial and residential properties.",
                image: "/camera.jpg",
                href: "/services/camera-systems",
                icon: Camera,
                color: "from-cyan-500 to-blue-500",
              },
              {
                title: "Access Control Service",
                description:
                  "Service and maintenance for existing access control systems. Professional support for keycard, fob, and electronic entry systems.",
                image: "/card_reader.jpeg",
                href: "/services/access-control",
                icon: Lock,
                color: "from-purple-500 to-pink-500",
              },
            ].map(({ title, description, image, href, icon: Icon, color }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link href={href} className="group block h-full">
                  <article className="flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-red-300 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                    {/* Image with Overlay */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-red-600 transition-colors duration-300">
                        {title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed flex-grow mb-4">{description}</p>
                      
                      {/* Learn More Link */}
                      <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                        <span>Learn More</span>
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-6 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Zanmar Protection</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Zanmar Protection specializes in fire alarm system inspection, testing, monitoring, and code compliance services throughout Greater Cincinnati. Our NICET-certified technicians provide expert fire alarm services for commercial buildings, multi-family residential properties, and facilities of all sizes.
              </p>
            </motion.div>
            
            {/* Feature Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass p-8 rounded-2xl border border-white/10 hover:border-red-500/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">NICET Certified</h3>
                <p className="text-slate-300 leading-relaxed">
                  Our fire alarm technicians hold National Institute for Certification in Engineering Technologies (NICET) credentials for professional excellence.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Licensed & Insured</h3>
                <p className="text-slate-300 leading-relaxed">
                  Fully licensed and insured for your protection and peace of mind on every project.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Code Compliance</h3>
                <p className="text-slate-300 leading-relaxed">
                  Expert assistance with fire alarm code compliance issues, violations, and corrections to keep your property up to code.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactForm />
      </main>
    </>
  );
}
