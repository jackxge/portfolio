declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type EventParams = {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
};

export const trackEvent = (action: string, params: EventParams = {}) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", action, params);
};
