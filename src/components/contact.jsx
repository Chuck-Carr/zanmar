"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  // console.log("reCAPTCHA site key:", siteKey);

  useEffect(() => {
    const loadRecaptcha = () => {
      const existingScript = document.querySelector(
        'script[src^="https://www.google.com/recaptcha/api.js"]'
      );
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
        script.async = true;
        script.onload = () => {
          // console.log("✅ reCAPTCHA script loaded");
          setRecaptchaReady(true);
        };
        document.body.appendChild(script);
      } else {
        setRecaptchaReady(true);
      }
    };

    if (typeof window !== "undefined") {
      loadRecaptcha();
    }
  }, [siteKey]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (!recaptchaReady || !window.grecaptcha) {
      setStatus("reCAPTCHA not ready. Please try again.");
      return;
    }

    try {
      // console.log("🚀 Running grecaptcha.execute");
      const token = await window.grecaptcha.execute(siteKey, {
        action: "submit",
      });
      console.log("📨 Captcha token:", token);

      if (!token) {
        setStatus("Captcha token was not generated.");
        return;
      }

      const data = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value,
        captchaToken: token,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success) {
        setStatus("Your message has been sent!");
        form.reset();
      } else {
        setStatus(result.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("Error submitting form.");
      // console.error("❌ Submission error:", error);
    }
  };

  return (
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
            placeholder="Phone Number"
            className="border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            name="message"
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
          {status && (
            <p className="text-center text-sm text-gray-700 mt-2">{status}</p>
          )}
        </form>
        <div className="flex flex-col justify-start space-y-8 text-blue-800 text-base">
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
  );
}
