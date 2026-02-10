/**
 * Analytics configuration and helpers for OnliGrow website
 * Supports GA4, PostHog, Meta Pixel, and Microsoft Clarity
 */

/**
 * Check if we're in a browser environment
 */
const isBrowser = typeof window !== 'undefined';

/**
 * Check if we're in production
 */
const isProduction = process.env.NODE_ENV === 'production';

// ============================================
// GOOGLE ANALYTICS 4
// ============================================

/**
 * GA4 Measurement ID from environment
 */
export const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

/**
 * Track a page view in GA4
 */
export function trackPageView(url: string): void {
  if (!isBrowser || !isProduction || !GA4_MEASUREMENT_ID) return;

  // @ts-expect-error gtag is loaded externally
  window.gtag?.('config', GA4_MEASUREMENT_ID, {
    page_path: url,
  });
}

/**
 * Track a custom event in GA4
 */
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
): void {
  if (!isBrowser || !isProduction || !GA4_MEASUREMENT_ID) return;

  // @ts-expect-error gtag is loaded externally
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

// ============================================
// POSTHOG
// ============================================

/**
 * PostHog configuration from environment
 */
export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
export const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

/**
 * Track an event in PostHog
 */
export function trackPostHogEvent(
  eventName: string,
  properties?: Record<string, unknown>
): void {
  if (!isBrowser || !isProduction || !POSTHOG_KEY) return;

  // @ts-expect-error posthog is loaded externally
  window.posthog?.capture(eventName, properties);
}

/**
 * Identify a user in PostHog
 */
export function identifyUser(
  userId: string,
  properties?: Record<string, unknown>
): void {
  if (!isBrowser || !isProduction || !POSTHOG_KEY) return;

  // @ts-expect-error posthog is loaded externally
  window.posthog?.identify(userId, properties);
}

// ============================================
// META PIXEL
// ============================================

/**
 * Meta Pixel ID from environment
 */
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

/**
 * Track a standard event in Meta Pixel
 */
export function trackMetaEvent(
  eventName: string,
  parameters?: Record<string, unknown>
): void {
  if (!isBrowser || !isProduction || !META_PIXEL_ID) return;

  // @ts-expect-error fbq is loaded externally
  window.fbq?.('track', eventName, parameters);
}

/**
 * Track a custom event in Meta Pixel
 */
export function trackMetaCustomEvent(
  eventName: string,
  parameters?: Record<string, unknown>
): void {
  if (!isBrowser || !isProduction || !META_PIXEL_ID) return;

  // @ts-expect-error fbq is loaded externally
  window.fbq?.('trackCustom', eventName, parameters);
}

// ============================================
// MICROSOFT CLARITY
// ============================================

/**
 * Clarity Project ID from environment
 */
export const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

// ============================================
// COMBINED TRACKING HELPERS
// ============================================

/**
 * Track form submission across all platforms
 */
export function trackFormSubmission(
  formName: string,
  formData?: Record<string, unknown>
): void {
  // GA4
  trackEvent('form_submit', 'engagement', formName);

  // PostHog
  trackPostHogEvent('form_submitted', { form_name: formName, ...formData });

  // Meta Pixel
  trackMetaEvent('Lead', { content_name: formName });
}

/**
 * Track CTA button click across all platforms
 */
export function trackCTAClick(ctaName: string, destination?: string): void {
  // GA4
  trackEvent('cta_click', 'engagement', ctaName);

  // PostHog
  trackPostHogEvent('cta_clicked', { cta_name: ctaName, destination });

  // Meta Pixel
  trackMetaCustomEvent('CTAClick', { cta_name: ctaName });
}

/**
 * Track demo booking initiation
 */
export function trackDemoBookingStart(): void {
  // GA4
  trackEvent('demo_booking_start', 'conversion');

  // PostHog
  trackPostHogEvent('demo_booking_started');

  // Meta Pixel
  trackMetaEvent('InitiateCheckout');
}

/**
 * Track successful demo booking
 */
export function trackDemoBookingComplete(schoolName?: string): void {
  // GA4
  trackEvent('demo_booking_complete', 'conversion', schoolName);

  // PostHog
  trackPostHogEvent('demo_booking_completed', { school_name: schoolName });

  // Meta Pixel
  trackMetaEvent('Lead', { content_name: 'Demo Booking' });
}
