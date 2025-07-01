"use client";

import { useEffect } from "react";

export default function AnalyticsScript() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-R5QG7VBTHN");
    }
  }, []);

  return null;
}
