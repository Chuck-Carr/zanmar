"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    { href: "/fire-alarm", label: "Fire Alarm Systems" },
    { href: "/fire-extinguishers", label: "Fire Extinguishers" },
    { href: "/exit-lights", label: "Exit & Emergency Lights" },
    { href: "/intrusion", label: "Intrusion Detection" },
    { href: "/access-control", label: "Access Control" },
    { href: "/cameras", label: "Cameras" },
  ];

  return (
    <header className="bg-blue-900 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and business name always visible */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Logo_white.png"
            alt="Zanmar Logo"
            width={80}
            height={80}
          />
          <span className="text-2xl font-bold text-blue-200">
            Zanmar Protection
          </span>
        </Link>

        {/* Desktop nav links + CTA */}
        <nav className="hidden md:flex space-x-8 text-blue-200 font-medium items-center">
          {/* <Link href="/" className="hover:text-white transition">
            Home
          </Link> */}

          <div className="relative group">
            <span className="cursor-pointer hover:text-white transition">
              Services
            </span>
            <ul className="absolute left-0 mt-2 bg-blue-900 border border-blue-700 rounded shadow-md text-sm w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 z-50">
              {services.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block px-4 py-2 hover:bg-blue-700 hover:text-white transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/blog" className="hover:text-white transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>

          {/* Desktop CTA Button */}
          <a
            href="tel:+1234567890"
            className="ml-6 inline-flex items-center rounded bg-yellow-500 px-5 py-3 text-white font-semibold hover:bg-yellow-600 transition"
          >
            Call Us: (513) 637-8580
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
        <nav className="md:hidden bg-blue-900 shadow-md">
          <ul className="flex flex-col space-y-2 px-6 py-4 text-blue-200 font-medium">
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
                href="tel:+1234567890"
                onClick={() => setMenuOpen(false)}
                className="mt-4 block rounded bg-yellow-500 px-4 py-3 text-center text-white font-semibold hover:bg-yellow-600 transition"
              >
                Call Us: (513) 637-8580
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
