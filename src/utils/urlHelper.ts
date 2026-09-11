/**
 * Utility to obtain public, login-free URLs for QR codes and mobile sharing.
 * 
 * In Google AI Studio, container preview URLs prefixed with 'ais-dev-' are restricted
 * to the authenticated developer and will prompt external devices for Google account login.
 * Replacing 'ais-dev-' with 'ais-pre-' provides the public Shared App URL which is completely
 * free of any Google login or authentication requirements.
 */

const PUBLIC_SHARED_HOST = 'https://ais-pre-fgtbs2zsypxgsdoi7narxh-318460061035.us-east1.run.app';

export function getPublicMobileUrl(lessonIndex?: number): string {
  if (typeof window === 'undefined') {
    return `${PUBLIC_SHARED_HOST}?view=mobile`;
  }

  let origin = window.location.origin;

  // If currently running in the private dev environment, switch to the public shared domain
  if (origin.includes('ais-dev-')) {
    origin = origin.replace('ais-dev-', 'ais-pre-');
  } else if (!origin || origin === 'null' || origin.startsWith('file:')) {
    origin = PUBLIC_SHARED_HOST;
  }

  const pathname = window.location.pathname || '';
  const lessonParam = typeof lessonIndex === 'number' ? `&lesson=${lessonIndex}` : '';
  return `${origin}${pathname}?view=mobile${lessonParam}`;
}

export function getPublicAppUrl(): string {
  if (typeof window === 'undefined') {
    return PUBLIC_SHARED_HOST;
  }

  let origin = window.location.origin;
  if (origin.includes('ais-dev-')) {
    origin = origin.replace('ais-dev-', 'ais-pre-');
  } else if (!origin || origin === 'null' || origin.startsWith('file:')) {
    origin = PUBLIC_SHARED_HOST;
  }

  const pathname = window.location.pathname || '';
  return `${origin}${pathname}`;
}
