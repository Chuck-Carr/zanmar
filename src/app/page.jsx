"use client";

// import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head";
import NavBar from "@/components/NavBar";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Fire Protection in Cincinnati | Zanmar Protection</title>
        <meta
          name="description"
          content="Zanmar Protection specializes in fire alarm systems, extinguisher service, and emergency lighting. Serving Cincinnati with expert fire protection solutions."
        />
        <meta
          name="keywords"
          content="fire alarm installation, fire alarm inspection, fire alarm monitoring, life safety inspection, fire extinguisher inspection, exit lights, Cincinnati fire protection, Zanmar Protection"
        />
        <meta
          property="og:title"
          content="Fire Protection in Cincinnati | Zanmar Protection"
        />
        <meta
          property="og:description"
          content="Expert fire safety services for your business or home in Cincinnati."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://zanmarprotection.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="bg-blue-50 text-blue-900 font-sans">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white">
          <img
            src="/downtown.jpg"
            alt="Cincinnati Skyline"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <div className="relative z-10 max-w-5xl mx-auto px-6 py-40 text-center">
            {/* <motion.img
              src="/ZP_1.png"
              alt="Zanmar Protection Logo"
              className="mx-auto mb-10 w-72"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            /> */}
            <motion.h1
              className="text-5xl font-extrabold mb-4 drop-shadow-md"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Fire Safety You Can Trust
            </motion.h1>
            <motion.p
              className="max-w-3xl mx-auto text-xl font-light mb-8 drop-shadow"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Installation, inspection, and 24/7 emergency response serving
              Greater Cincinnati.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 px-12 py-4 text-lg font-semibold">
                Request a Free Quote
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 bg-gradient-to-b from-blue-50 to-white">
          <h2 className="text-4xl font-semibold text-center text-blue-900 mb-16">
            Fire Protection Services
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Fire Alarm Systems",
                description:
                  "Design, install, and maintain code-compliant fire alarm systems tailored to your building.",
                image: "/fire-alarm.jpg",
              },
              {
                title: "Extinguisher Services",
                description:
                  "Annual inspections, refills, and replacements for commercial and residential fire extinguishers.",
                image: "/fire-extinguisher.jpg",
              },
              {
                title: "Exit & Emergency Lighting",
                description:
                  "Installation and regular testing of emergency exit lights to meet life safety code requirements.",
                image: "/exit-lights.jpg",
              },
            ].map(({ title, description, image }) => (
              <article
                key={title}
                className="flex flex-col rounded-lg overflow-hidden border border-blue-200 hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    {title}
                  </h3>
                  <p className="text-blue-800 flex-grow">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="bg-blue-50 py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 text-blue-900">
              Trusted Fire Protection Experts
            </h2>
            <p className="text-base text-blue-800 leading-relaxed">
              At Zanmar Protection, we take safety seriously. Our
              NICET-certified technicians serve businesses and property managers
              across Cincinnati, providing reliable, responsive service and
              top-tier fire safety compliance.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto px-6 py-20 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-center mb-12 text-blue-900">
            Request Service
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <form className="space-y-6">
              <Input
                placeholder="Full Name"
                required
                className="border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <Input
                type="email"
                placeholder="Email Address"
                required
                className="border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <Input
                placeholder="Phone Number"
                className="border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="How can we help you?"
                className="w-full p-4 border border-blue-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows={5}
                required
              />
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 w-full py-3 font-semibold rounded-md text-white transition"
              >
                Send Message
              </Button>
            </form>

            <div className="flex flex-col justify-center space-y-8 text-blue-800 text-base">
              {/* <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" size={24} />
                <span>123 Fire Lane, Cincinnati, OH 45202</span>
              </div> */}
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" size={24} />
                <span>(513) 637-8580</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" size={24} />
                <span>contact@zanmarprotection.com</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-900 text-blue-200 py-8 text-center text-sm select-none">
          <p>
            &copy; {new Date().getFullYear()} Zanmar Protection. All rights
            reserved.
          </p>
          <p className="mt-2">Licensed • Insured • NICET-Certified</p>
        </footer>
      </main>
    </>
  );
}
