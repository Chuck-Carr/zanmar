"use client";

import ServiceLayout from "@/components/ServiceLayout";
import { Flame } from "lucide-react";

export default function FireExtinguishersPage() {
  const features = [
    "Annual inspections and recharging",
    "On-site replacement and disposal",
    "Code-compliant labeling and documentation",
    "Services for ABC, CO2, and K-type extinguishers",
    "Emergency extinguisher repairs",
    "Compliance reporting for inspections"
  ];
  return (
    <ServiceLayout
        title="Fire Extinguisher Service"
        description="We inspect, refill, and replace fire extinguishers to keep your property code-compliant and protected. Professional service for all types of fire suppression equipment."
        image="/extinguisher-maintenance.jpg"
        imageAlt="Fire extinguisher inspection"
        features={features}
        ctaText="Request Extinguisher Service"
        icon={Flame}
      />
  );
}
