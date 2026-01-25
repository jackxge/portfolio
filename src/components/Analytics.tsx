import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MEASUREMENT_ID = "G-HCHP39XDXN";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const Analytics = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }

    const pagePath = `${pathname}${search}${hash}`;

    window.gtag("config", MEASUREMENT_ID, {
      page_path: pagePath,
      page_location: window.location.href,
    });
  }, [pathname, search, hash]);

  return null;
};

export default Analytics;
