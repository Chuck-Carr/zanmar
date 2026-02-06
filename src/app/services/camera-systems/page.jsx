"use client";

import ServiceLayout from "@/components/ServiceLayout";
import { Camera } from "lucide-react";

export default function CameraSystemsPage() {
  const features = [
    "HD indoor and outdoor cameras installation",
    "Remote monitoring and recording solutions",
    "Smartphone app integration for easy access",
    "Maintenance and system upgrades",
    "Night vision and weather-resistant cameras",
    "Cloud and local storage options"
  ];

  return (
    <ServiceLayout
      title="Security Camera System Service"
      description="Professional service and maintenance for existing surveillance camera systems. We provide technical support, troubleshooting, and repairs for commercial and residential properties throughout Cincinnati."
      image="/camera.jpg"
      imageAlt="Security surveillance camera system"
      features={features}
      ctaText="Request Service Quote"
      icon={Camera}
    />
  );
}
