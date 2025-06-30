"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          Zanmar Protection
        </Link>

        <nav>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-blue-700 font-medium">
            <li>
              <Link href="/" className="hover:text-blue-900 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/fire-alarm" className="hover:text-blue-900 transition">
                Fire Alarm Systems
              </Link>
            </li>
            <li>
              <Link href="/fire-extinguishers" className="hover:text-blue-900 transition">
                Fire Extinguishers
              </Link>
            </li>
            <li>
              <Link href="/exit-lights" className="hover:text-blue-900 transition">
                Exit & Emergency Lights
              </Link>
            </li>
            <li>
              <Link href="/intrusion" className="hover:text-blue-900 transition">
                Intrusion Detection
              </Link>
            </li>
            <li>
              <Link href="/access-control" className="hover:text-blue-900 transition">
                Access Control
              </Link>
            </li>
            <li>
              <Link href="/cameras" className="hover:text-blue-900 transition">
                Cameras
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col space-y-1"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block h-0.5 w-6 bg-blue-700 transition-transform ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-blue-700 transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-blue-700 transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-2 px-6 py-4 text-blue-700 font-medium">
            {[
              { href: "/", label: "Home" },
              { href: "/fire-alarm", label: "Fire Alarm Systems" },
              { href: "/fire-extinguishers", label: "Fire Extinguishers" },
              { href: "/exit-lights", label: "Exit & Emergency Lights" },
              { href: "/intrusion", label: "Intrusion Detection" },
              { href: "/access-control", label: "Access Control" },
              { href: "/cameras", label: "Cameras" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block hover:text-blue-900 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
