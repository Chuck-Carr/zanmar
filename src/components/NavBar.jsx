"use client";

import Link from "next/link";
import { useState } from "react";
// import Image from "next/image";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    { href: "/services/fire-alarms", label: "Fire Alarm Systems" },
    { href: "/services/fire-extinguishers", label: "Fire Extinguishers" },
    { href: "/services/exit-lights", label: "Exit & Emergency Lights" },
    { href: "/services/intrusion-detection", label: "Intrusion Detection" },
    { href: "/services/access-control", label: "Access Control" },
    { href: "/services/camera-systems", label: "Cameras" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700 shadow-xl backdrop-blur-xl bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and business name always visible */}
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="/Logo_white.png" 
            alt="Zanmar Logo" 
            width={80} 
            height={80} 
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-2xl font-bold text-white tracking-tight">
            Zanmar Protection
          </span>
        </Link>

        {/* Desktop nav links + CTA */}
        <nav className="hidden md:flex space-x-8 text-slate-200 font-medium items-center">
          {/* <Link href="/" className="hover:text-white transition">
            Home
          </Link> */}

          <div className="relative group">
            <span className="cursor-pointer hover:text-white transition-all duration-300 hover:scale-105">
              Services
            </span>
            <ul className="absolute left-0 mt-2 bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl text-sm w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              {services.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block px-5 py-3 hover:bg-red-500/20 hover:text-white transition-all duration-200 rounded-md mx-2 my-1 border border-transparent hover:border-red-500/30"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/about" className="hover:text-white transition-all duration-300 hover:scale-105">
            About
          </Link>
          <Link href="/blog" className="hover:text-white transition-all duration-300 hover:scale-105">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-white transition-all duration-300 hover:scale-105">
            Contact
          </Link>

          {/* Desktop CTA Button */}
          <a
            href="tel:+15132162700"
            className="ml-6 inline-flex items-center rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 text-white font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Call Us: (513) 216-2700
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center space-y-1 py-3 px-2"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block h-0.5 w-6 bg-blue-200" />
          <span className="block h-0.5 w-6 bg-blue-200" />
          <span className="block h-0.5 w-6 bg-blue-200" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-slate-900/95 backdrop-blur-xl shadow-2xl border-t border-white/10">
          <ul className="flex flex-col space-y-2 px-6 py-4 text-slate-200 font-medium">
            <li>
              {/* <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white"
              >
                Home
              </Link> */}
            </li>
            <li className="pt-2">
              <span className="font-semibold">Services</span>
              <ul className="pl-4 pt-2 space-y-1">
                {services.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="block hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white"
              >
                Contact
              </Link>
            </li>

            {/* Removed business name here */}

            {/* CTA button in mobile menu */}
            <li>
              <a
                href="tel:+15132162700"
                onClick={() => setMenuOpen(false)}
                className="mt-4 block rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-4 py-3 text-center text-white font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg"
              >
                Call Us: (513) 216-2700
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
