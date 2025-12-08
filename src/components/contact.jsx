"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        e.target.reset();
      } else {
        setStatus(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">Free Quote</span>
        </h2>
        <p className="text-xl text-slate-600">We're here to help protect what matters most</p>
      </div>
      
      <div className="grid md:grid-cols-5 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Contact Form */}
        <div className="md:col-span-3 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Input
                name="name"
                placeholder="Full Name"
                required
                className="w-full border-2 border-slate-200 rounded-lg px-4 py-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-900 placeholder:text-slate-400"
              />
            </div>
            
            <div className="relative">
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full border-2 border-slate-200 rounded-lg px-4 py-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-900 placeholder:text-slate-400"
              />
            </div>
            
            <div className="relative">
              <Input
                name="phone"
                placeholder="Phone Number (10 digits)"
                pattern="[0-9]{10}"
                title="Phone number should be 10 digits"
                required
                className="w-full border-2 border-slate-200 rounded-lg px-4 py-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-900 placeholder:text-slate-400"
              />
            </div>
            
            <div className="relative">
              <textarea
                name="message"
                placeholder="Tell us about your fire or security needs..."
                className="w-full p-4 border-2 border-slate-200 rounded-lg resize-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-900 placeholder:text-slate-400"
                rows={5}
                required
              />
            </div>
            
            <Button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 w-full py-4 font-semibold rounded-lg text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              )}
            </Button>
            
            {status && (
              <div className={`p-4 rounded-lg text-center font-medium ${
                status.includes('success') 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {status}
              </div>
            )}
          </form>
        </div>
        
        {/* Contact Info Sidebar */}
        <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 text-white">
          <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/30 transition-colors duration-300">
                <Phone className="text-red-400" size={24} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Call Us</p>
                <a href="tel:+15135974332" className="text-lg font-semibold hover:text-red-400 transition-colors">
                  (513) 597-4332
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Serving</p>
                <p className="text-lg font-semibold">Greater Cincinnati Area</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Available</p>
                <p className="text-lg font-semibold">24/7 Emergency Service</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-slate-300 text-sm leading-relaxed">
              Get a free quote today and discover why Cincinnati trusts Zanmar Protection for their fire and security needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
