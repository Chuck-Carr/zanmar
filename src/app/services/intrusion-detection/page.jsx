"use client";

import ServiceLayout from "@/components/ServiceLayout";
import { Shield } from "lucide-react";

export default function IntrusionDetectionPage() {
  const features = [
    "Custom alarm system design and installation",
    "24/7 monitoring and alert services",
    "Wireless and wired system options",
    "Integration with smart home and security devices",
    "Motion detectors and glass break sensors",
    "Professional installation and ongoing support"
  ];

  return (
    <ServiceLayout
      title="Burglar Alarm System Service"
      description="Professional service and maintenance for existing burglar alarm systems. We provide expert support, troubleshooting, and repair services for commercial and residential security systems throughout Cincinnati."
      image="/keypad.jpg"
      imageAlt="Burglar alarm system control panel"
      features={features}
      ctaText="Request Service Quote"
      icon={Shield}
    />
  );
}
