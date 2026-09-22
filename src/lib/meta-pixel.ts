declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export const FB_PIXEL_ID =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_META_PIXEL_ID) ||
  (typeof process !== "undefined" && process.env?.VITE_META_PIXEL_ID) ||
  "YOUR_PIXEL_ID";

/**
 * Triggers Meta Pixel PageView event.
 */
export const pageview = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
};

/**
 * Triggers Meta Pixel custom or standard event.
 */
export const event = (name: string, options: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", name, options);
  }
};

/**
 * Helper to track InitiateCheckout event when user clicks purchase buttons.
 */
export const trackInitiateCheckout = (value: number = 299, currency: string = "INR") => {
  event("InitiateCheckout", {
    content_name: "Interior Design Toolkit",
    value,
    currency,
  });
};
