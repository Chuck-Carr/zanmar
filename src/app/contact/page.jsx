"use client";

import Layout from "@/components/Layout";
import { MapPin, Phone, Mail } from "lucide-react"; // adjust import paths as needed
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export default function Contact() {
  return (
    <Layout>
      <main className="max-w-6xl mx-auto px-6 py-20">
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
      </main>
    </Layout>
  );
}
