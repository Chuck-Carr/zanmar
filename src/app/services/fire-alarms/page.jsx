"use client";

import ServiceLayout from "@/components/ServiceLayout";
import { Bell } from "lucide-react";

export default function FireAlarmsPage() {
  const features = [
    "Comprehensive fire alarm system inspection and testing services",
    "24/7 fire alarm monitoring with rapid emergency response",
    "Code compliance inspections and violation corrections",
    "Annual and semi-annual testing with complete documentation",
    "Fire alarm system installation for commercial and residential properties",
    "NICET-certified technicians with extensive fire alarm expertise",
    "Service and maintenance for all major fire alarm brands",
    "Emergency repair services to restore system functionality"
  ];

  return (
    <ServiceLayout
        title="Fire Alarm Inspection & Service"
        description="Specialized fire alarm inspection, testing, monitoring, and code compliance services for commercial and residential properties. Our NICET-certified technicians provide expert fire alarm system service, annual testing, code violation corrections, and professional installation throughout Greater Cincinnati."
        image="/pull_station.webp"
        imageAlt="NICET-certified fire alarm technician performing system inspection"
        features={features}
        ctaText="Schedule Fire Alarm Inspection"
        icon={Bell}
      />
  );
}
