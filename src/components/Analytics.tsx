import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MEASUREMENT_ID = "G-HCHP39XDXN";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const Analytics = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      // Fallback: queue a page_view in dataLayer if gtag is not ready yet.
      const pageViewEvent = {
        event: "page_view",
        page_path: `${pathname}${search}${hash}`,
        page_location: typeof window !== "undefined" ? window.location.href : "",
        page_title: typeof document !== "undefined" ? document.title : "",
      };
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push(pageViewEvent);
      }
      return;
    }

    const pagePath = `${pathname}${search}${hash}`;

    const params = {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    };

    // Update config for SPA navigation.
    window.gtag("config", MEASUREMENT_ID, params);
    // Explicit page_view event to ensure GA4 counts route changes.
    window.gtag("event", "page_view", params);
  }, [pathname, search, hash]);

  return null;
};

export default Analytics;
