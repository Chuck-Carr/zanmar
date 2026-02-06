"use client";

import ServiceLayout from "@/components/ServiceLayout";
import { Lightbulb } from "lucide-react";

export default function ExitLightsPage() {
  const features = [
    "Annual testing and compliance documentation",
    "Battery replacement and system repair",
    "New installations and fixture upgrades",
    "Emergency lighting audits for code compliance",
    "LED upgrade installations for energy efficiency",
    "24/7 emergency service available"
  ];

  return (
    <ServiceLayout
      title="Exit & Emergency Lighting"
      description="We ensure your emergency lighting systems are tested, functional, and code-compliant for every inspection. Protecting lives with reliable exit illumination."
      image="/exit-light.jpg"
      imageAlt="Exit and emergency lighting"
      features={features}
      ctaText="Schedule Lighting Inspection"
      icon={Lightbulb}
    />
  );
}
