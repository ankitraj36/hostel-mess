import React, { useState, useEffect } from 'react';
import { ShieldCheck, Settings } from 'lucide-react';
import {
  hasUserConsented,
  acceptAllConsent,
  rejectNonEssentialConsent,
  CONSENT_CHANGE_EVENT,
} from '../utils/consentManager';
import { CookiePreferencesModal } from './CookiePreferencesModal';

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check initial consent status
    const consented = hasUserConsented();
    setIsVisible(!consented);

    // Listen to changes in consent
    const handleConsentChange = () => {
      setIsVisible(!hasUserConsented());
    };

    window.addEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
  }, []);

  const handleAcceptAll = () => {
    acceptAllConsent();
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    rejectNonEssentialConsent();
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <aside
          role="region"
          aria-label="Privacy and Cookie Consent"
          className="fixed bottom-16 sm:bottom-4 left-3 right-3 sm:left-6 sm:right-auto sm:max-w-md z-40 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-gray-200/90 text-gray-900 transition-all duration-300 animate-in slide-in-from-bottom-4"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-sm font-bold text-gray-900 flex items-center gap-2">
                <span>Privacy & Storage Notice</span>
                <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                  DPDP Act, 2023
                </span>
              </h3>
              <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                We store your hostel preference (Boys/Girls) locally on your device to ensure fast meal discovery. No personal tracking or cross-site profiling is conducted.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-3.5 pt-3 border-t border-gray-100 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="flex-1 min-w-[100px] px-3.5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-colors shadow-2xs text-center"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={handleRejectNonEssential}
              className="flex-1 min-w-[100px] px-3 py-2 text-xs font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-xl border border-gray-200 transition-colors text-center"
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              aria-label="Customize cookie settings"
              className="px-2.5 py-2 text-xs font-semibold text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Settings className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Customize</span>
            </button>
          </div>
        </aside>
      )}

      {/* Preferences Modal */}
      <CookiePreferencesModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setIsVisible(!hasUserConsented());
        }}
      />
    </>
  );
};
