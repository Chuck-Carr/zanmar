import Link from 'next/link';
import { Shield, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/Logo_white.png" alt="Zanmar Logo" width={60} height={60} />
              <span className="text-xl font-bold text-white">Zanmar Protection</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Comprehensive fire protection and security solutions for Cincinnati homes and businesses.
            </p>
            <div className="flex items-center gap-2 text-red-400">
              <Shield className="w-5 h-5" strokeWidth={2.5} />
              <span className="text-sm font-semibold">NICET Certified</span>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/fire-alarms" className="hover:text-red-400 transition-colors duration-300">
                  Fire Alarm Systems
                </Link>
              </li>
              <li>
                <Link href="/services/fire-extinguishers" className="hover:text-red-400 transition-colors duration-300">
                  Fire Extinguishers
                </Link>
              </li>
              <li>
                <Link href="/services/exit-lights" className="hover:text-red-400 transition-colors duration-300">
                  Exit & Emergency Lighting
                </Link>
              </li>
              <li>
                <Link href="/services/intrusion-detection" className="hover:text-red-400 transition-colors duration-300">
                  Intrusion Detection
                </Link>
              </li>
              <li>
                <Link href="/services/camera-systems" className="hover:text-red-400 transition-colors duration-300">
                  Camera Systems
                </Link>
              </li>
              <li>
                <Link href="/services/access-control" className="hover:text-red-400 transition-colors duration-300">
                  Access Control
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-red-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-red-400 transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+15135974332" className="flex items-center gap-3 hover:text-red-400 transition-colors duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center group-hover:bg-red-500/30 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-red-400" strokeWidth={2.5} />
                  </div>
                  <span>(513) 597-4332</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Greater Cincinnati</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Zanmar Protection. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs px-3 py-1 rounded-full bg-slate-700/50 border border-slate-600">Licensed</span>
              <span className="text-xs px-3 py-1 rounded-full bg-slate-700/50 border border-slate-600">Insured</span>
              <span className="text-xs px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400">NICET Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
