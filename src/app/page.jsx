"use client";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import ContactForm from "@/components/contact";
// import NavBar from "@/components/NavBar";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Fire & Security Solutions | Zanmar Protection Cincinnati</title>
        <meta
          name="description"
          content="Zanmar Protection provides fire alarms, extinguishers, emergency lighting, intrusion detection, cameras, and access control systems for homes and businesses in Cincinnati."
        />
        <meta
          name="keywords"
          content="fire alarm, home security, residential security, cameras, access control, intrusion detection, extinguishers, Cincinnati fire protection, Zanmar Protection"
        />
        <meta
          property="og:title"
          content="Fire & Security Solutions | Zanmar Protection Cincinnati"
        />
        <meta
          property="og:description"
          content="Fire and electronic security services for homes and businesses in Greater Cincinnati."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://zanmarprotection.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R5QG7VBTHN"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R5QG7VBTHN', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>

      {/* <NavBar /> */}

      <main className="bg-blue-900 text-blue-900 font-sans">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white">
          <img
            src="/downtown.jpg"
            alt="Cincinnati Skyline"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <div className="relative z-10 max-w-5xl mx-auto px-6 py-40 text-center">
            <motion.h1
              className="text-5xl font-extrabold mb-4 drop-shadow-md"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Life Safety & Security You Can Count On
            </motion.h1>
            <motion.p
              className="max-w-3xl mx-auto text-xl font-light mb-8 drop-shadow"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Fire protection and electronic security systems for Cincinnati
              homes and businesses.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link href="/contact" passHref>
                <Button className="bg-blue-600 hover:bg-blue-700 px-12 py-4 text-lg font-semibold">
                  Request a Free Quote
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        {/* bg-gradient-to-b from-grey-500 to-white */}
        <section className="max-w-6xl mx-auto px-6 py-20 bg-white">
          <h2 className="text-4xl font-semibold text-center text-blue-900 mb-16">
            Fire & Security Services
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Fire Alarm Systems",
                description:
                  "Design, install, and maintain fire alarm systems for homes and businesses — fully code-compliant and custom tailored.",
                image: "/fire_alarm.jpg",
                href: "/services/fire-alarms",
              },
              {
                title: "Extinguisher Services",
                description:
                  "Annual inspections, refills, and replacements for residential and commercial fire extinguishers.",
                image: "/extinguisher.jpg",
                href: "/services/fire-extinguishers",
              },
              {
                title: "Exit & Emergency Lighting",
                description:
                  "Installation and regular testing of emergency exit lights to meet life safety code requirements.",
                image: "/exit_light.jpg",
                href: "/services/exit-lights",
              },
              {
                title: "Intrusion Detection Systems",
                description:
                  "Secure your home or business with professional-grade alarm and intrusion systems for 24/7 protection.",
                image: "/intrusion.jpg",
                href: "/services/intrusion-detection",
              },
              {
                title: "Camera Systems",
                description:
                  "Install and monitor indoor/outdoor HD surveillance systems for residential and commercial properties.",
                image: "/camera_systems.jpg",
                href: "/services/camera-systems",
              },
              {
                title: "Access Control",
                description:
                  "Keycard and door entry systems to manage and restrict access across your facility or home.",
                image: "/access_control.jpg",
                href: "/services/access-control",
              },
            ].map(({ title, description, image, href }) => (
              <Link key={title} href={href} className="group">
                <article className="flex flex-col h-full rounded-lg overflow-hidden border border-blue-200 bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-blue-900 group-hover:underline">
                      {title}
                    </h3>
                    <p className="text-blue-800 flex-grow">{description}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="bg-blue-900 py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 text-blue-100">
              Trusted Fire & Security Experts
            </h2>
            <p className="text-base text-blue-100 leading-relaxed">
              At Zanmar Protection, we deliver comprehensive life safety and
              security solutions for both residential and commercial properties.
              Our NICET-certified technicians and security professionals serve
              homeowners, businesses, and property managers across Cincinnati
              with fire alarms, camera systems, access control, and intrusion
              detection services.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <ContactForm />
      </main>
    </>
  );
}
