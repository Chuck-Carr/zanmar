"use client";

import ServiceLayout from "@/components/ServiceLayout";
import { Lock } from "lucide-react";

export default function AccessControlPage() {
  const features = [
    "Keycard and fob access system installation",
    "Biometric and keypad entry solutions",
    "Integration with existing security and alarm systems",
    "Ongoing maintenance and troubleshooting",
    "Multi-level access control management",
    "Audit trails and access reporting"
  ];

  return (
    <ServiceLayout
      title="Access Control System Service"
      description="Professional service and maintenance for existing access control systems. We support keycard, fob, biometric, and electronic entry systems for commercial and residential properties throughout Cincinnati."
      image="/card_reader.jpeg"
      imageAlt="Access control keycard entry system"
      features={features}
      ctaText="Request Service Quote"
      icon={Lock}
    />
  );
}
