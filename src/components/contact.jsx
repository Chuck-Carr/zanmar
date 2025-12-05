"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center mb-12 text-blue-900">
        Request Service
      </h2>
      <div className="grid md:grid-cols-2 gap-16">
        <form
          action="https://formsubmit.co/info@zanmarprotection.com" // Replace with your email
          method="POST"
          className="space-y-6"
          onSubmit={() => setStatus("Sending...")}
        >
          <Input
            name="name"
            placeholder="Full Name"
            required
            className="border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <Input
            name="phone"
            placeholder="Phone Number (10 digits)"
            pattern="[0-9]{10}"
            title="Phone number should be 10 digits"
            className="border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            name="message"
            placeholder="How can we help you?"
            className="w-full p-4 border border-blue-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows={5}
            required
          />
          {/* Optional redirect after success */}
          {/* <input
            type="hidden"
            name="_next"
            value="https://yourdomain.com/thank-you" // Replace or remove
          /> */}
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 w-full py-3 font-semibold rounded-md text-white transition"
          >
            Send Message
          </Button>
        </form>
        <div className="flex flex-col justify-start space-y-8 text-blue-800 text-base">
          <div className="flex items-center gap-3">
            <Phone className="text-blue-600" size={24} />
            <span>(513) 637-8580</span>
          </div>
          {/* <div className="flex items-center gap-3">
            <Mail className="text-blue-600" size={24} />
            <span>contact@zanmarprotection.com</span>
          </div> */}
        </div>
      </div>
      {status && (
        <p className="text-center text-sm text-gray-700 mt-4">{status}</p>
      )}
    </section>
  );
}
