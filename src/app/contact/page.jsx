"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import { MapPin, Phone, Mail } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("Server error. Please try again later.");
    }
  };

  return (
    <Layout>
      <main className="max-w-6xl mx-auto px-6 py-20">
        <section className="max-w-4xl mx-auto px-6 py-20 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-center mb-12 text-blue-900">
            Request Service
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <Input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                name="message"
                placeholder="How can we help you?"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border border-blue-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows={5}
              />
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 w-full py-3 font-semibold rounded-md text-white transition"
              >
                Send Message
              </Button>
              {status && (
                <p className="text-sm text-blue-700 text-center mt-2">
                  {status}
                </p>
              )}
            </form>

            <div className="flex flex-col justify-center space-y-8 text-blue-800 text-base">
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
