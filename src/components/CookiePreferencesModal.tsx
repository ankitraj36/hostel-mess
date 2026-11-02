import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Check, Info, Lock } from 'lucide-react';
import {
  getStoredConsent,
  saveConsent,
  acceptAllConsent,
  rejectNonEssentialConsent,
} from '../utils/consentManager';

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookiePreferencesModal: React.FC<CookiePreferencesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [analytics, setAnalytics] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'settings' | 'table'>('settings');

  // Load existing preferences when modal opens
  useEffect(() => {
    if (isOpen) {
      const stored = getStoredConsent();
      if (stored) {
        setAnalytics(stored.analytics);
        setPreferences(stored.preferences);
      } else {
        setAnalytics(false);
        setPreferences(false);
      }
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSave = () => {
    saveConsent({ analytics, preferences });
    onClose();
  };

  const handleAcceptAll = () => {
    acceptAllConsent();
    onClose();
  };

  const handleRejectNonEssential = () => {
    rejectNonEssentialConsent();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-preferences-title"
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2
                id="cookie-preferences-title"
                className="font-heading text-lg sm:text-xl font-bold text-gray-900 leading-tight"
              >
                Cookie & Storage Preferences
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                DPDP Act, 2023 Compliant Consent Control
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close preferences modal"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-100 px-6 bg-white text-xs font-semibold">
          <button
            onClick={() => setActiveTab('settings')}
            className={`py-3 border-b-2 mr-6 transition-colors ${
              activeTab === 'settings'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Consent Categories
          </button>
          <button
            onClick={() => setActiveTab('table')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'table'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Storage Inventory
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-sm text-gray-600">
          {activeTab === 'settings' ? (
            <>
              <p className="text-xs text-gray-500 leading-relaxed bg-blue-50/60 p-3 rounded-xl border border-blue-100/60 flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  Under the <strong>Digital Personal Data Protection Act, 2023 (India)</strong>, you have the statutory right to specify your consent preferences. Non-essential storage is never enabled without your affirmative choice.
                </span>
              </p>

              {/* 1. Strictly Necessary / Essential */}
              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/60">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-900 text-sm">
                        1. Strictly Necessary Storage
                      </h3>
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <Lock className="w-2.5 h-2.5" />
                        Always Active
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                      Essential client-side keys (<code className="text-gray-700 bg-gray-200/70 px-1 py-0.2 rounded font-mono text-[11px]">hostel_mess_preferred</code> and <code className="text-gray-700 bg-gray-200/70 px-1 py-0.2 rounded font-mono text-[11px]">hostel_mess_consent</code>) required to remember your active hostel portal (Boys/Girls) and retain your statutory consent choices. No cross-site or personal profiling occurs.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Analytics & Performance */}
              <div className="p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-900 text-sm">
                        2. Performance & Diagnostics
                      </h3>
                      <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                        Optional
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                      Anonymous aggregate metrics (e.g. measuring page render duration and peak dining schedule views) to improve speed and server stability across campus networks.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-hidden peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

              {/* 3. Personalization & Dietary Preferences */}
              <div className="p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-900 text-sm">
                        3. Dietary Filter Memory
                      </h3>
                      <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                        Optional
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                      Remembers your active dietary filter toggle (e.g., pure vegetarian vs. all dishes) so you don't need to reapply it on subsequent meal viewings.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={preferences}
                      onChange={(e) => setPreferences(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-hidden peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </>
          ) : (
            <div className="border border-gray-200 rounded-xl overflow-hidden text-xs">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-700 font-semibold">
                  <tr>
                    <th className="p-2.5">Key Name</th>
                    <th className="p-2.5">Storage</th>
                    <th className="p-2.5">Category</th>
                    <th className="p-2.5">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                  <tr>
                    <td className="p-2.5 font-mono text-[11px] text-gray-900 font-medium">hostel_mess_preferred</td>
                    <td className="p-2.5">localStorage</td>
                    <td className="p-2.5 text-emerald-700 font-medium">Essential</td>
                    <td className="p-2.5">Persistent (until cleared)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-mono text-[11px] text-gray-900 font-medium">hostel_mess_consent</td>
                    <td className="p-2.5">localStorage</td>
                    <td className="p-2.5 text-emerald-700 font-medium">Essential</td>
                    <td className="p-2.5">180 Days</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-mono text-[11px] text-gray-900 font-medium">hostel_mess_diet_filter</td>
                    <td className="p-2.5">localStorage</td>
                    <td className="p-2.5 text-blue-700 font-medium">Preferences</td>
                    <td className="p-2.5">Persistent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-gray-100 bg-gray-50/70 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <button
            type="button"
            onClick={handleRejectNonEssential}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-200/80 rounded-xl transition-colors border border-gray-200"
          >
            Reject Non-Essential
          </button>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleSave}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-white bg-gray-900 hover:bg-black rounded-xl transition-colors shadow-2xs"
            >
              Save Preferences
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-2xs flex items-center justify-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" />
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

