/**
 * Consent Manager for HOSTEL MESS
 * Aligned with the Digital Personal Data Protection Act, 2023 (DPDP Act, India)
 */

export interface ConsentPreferences {
  version: string;
  timestamp: string;
  essential: boolean; // Always true (hostel preference, consent record)
  analytics: boolean; // Site usage metrics
  preferences: boolean; // Dietary display preferences
}

export const CONSENT_STORAGE_KEY = 'hostel_mess_consent';
export const CURRENT_CONSENT_VERSION = '1.0';
export const CONSENT_CHANGE_EVENT = 'hostel_mess_consent_changed';

// Expiry period: 180 days (6 months) in milliseconds
const CONSENT_MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000;

/**
 * Retrieve current stored consent preferences, verifying expiry and version
 */
export function getStoredConsent(): ConsentPreferences | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed: ConsentPreferences = JSON.parse(raw);

    // Verify schema version
    if (parsed.version !== CURRENT_CONSENT_VERSION) {
      return null;
    }

    // Verify timestamp validity
    const consentDate = new Date(parsed.timestamp).getTime();
    if (isNaN(consentDate) || Date.now() - consentDate > CONSENT_MAX_AGE_MS) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

/**
 * Check if the user has already provided valid, non-expired consent
 */
export function hasUserConsented(): boolean {
  return getStoredConsent() !== null;
}

/**
 * Save updated consent preferences
 */
export function saveConsent(preferences: {
  analytics: boolean;
  preferences: boolean;
}): ConsentPreferences {
  const fullConsent: ConsentPreferences = {
    version: CURRENT_CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    essential: true, // Always true
    analytics: Boolean(preferences.analytics),
    preferences: Boolean(preferences.preferences),
  };

  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(fullConsent));
  } catch (err) {
    console.error('Failed to save consent to localStorage', err);
  }

  // Dispatch global event for responsive UI updates
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent(CONSENT_CHANGE_EVENT, { detail: fullConsent })
    );
  }

  return fullConsent;
}

/**
 * Quick helper: Accept all categories
 */
export function acceptAllConsent(): ConsentPreferences {
  return saveConsent({ analytics: true, preferences: true });
}

/**
 * Quick helper: Reject non-essential categories (strictly essential only)
 */
export function rejectNonEssentialConsent(): ConsentPreferences {
  return saveConsent({ analytics: false, preferences: false });
}

/**
 * Reset consent preferences (triggers banner again)
 */
export function resetConsent(): void {
  try {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch (err) {
    console.error('Failed to remove consent from localStorage', err);
  }

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: null }));
  }
}

/**
 * Statutory Data Principal right under DPDP Act: Clear all local data
 * Removes hostel preference, consent records, and any cached UI states
 */
export function clearAllLocalData(): void {
  try {
    localStorage.removeItem('hostel_mess_preferred');
    localStorage.removeItem(CONSENT_STORAGE_KEY);
    sessionStorage.clear();
  } catch (err) {
    console.error('Failed to clear local data', err);
  }

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: null }));
  }
}

