import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, SlidersHorizontal, ExternalLink, Utensils } from 'lucide-react';
import { CookiePreferencesModal } from './CookiePreferencesModal';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);

  return (
    <>
      <footer className={`w-full border-t border-gray-200/80 bg-white/80 backdrop-blur-xs text-gray-600 transition-colors ${className}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Brand & Purpose */}
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                  <Utensils className="w-4 h-4" />
                </div>
                <span className="font-heading font-extrabold text-base tracking-tight text-gray-900">
                  HOSTEL MESS
                </span>
                <span className="text-[10px] uppercase font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                  ITER Campus-1
                </span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
                Good Food. Every Day. Providing students of Siksha 'O' Anusandhan with instant, reliable access to daily mess schedules, live meal countdowns, and dietary choices.
              </p>
              <div className="inline-flex items-center gap-1.5 text-[11px] text-gray-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Compliant with India DPDP Act, 2023</span>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="md:col-span-3 space-y-2.5">
              <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase font-heading">
                Dining Portals
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li>
                  <Link to="/" className="hover:text-blue-600 transition-colors">
                    Home Selection
                  </Link>
                </li>
                <li>
                  <Link to="/boys" className="hover:text-blue-600 transition-colors">
                    Boys Hostel (Weekly)
                  </Link>
                </li>
                <li>
                  <Link to="/girls" className="hover:text-pink-600 transition-colors">
                    Ladies Hostel (4-Week Cycle)
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gray-900 transition-colors">
                    About Mess & Dining Standards
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal, Privacy & DPDP Compliance */}
            <div className="md:col-span-4 space-y-2.5">
              <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase font-heading">
                Privacy & Legal Compliance
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li>
                  <Link to="/privacy" className="hover:text-blue-600 transition-colors">
                    Privacy Policy (DPDP Act 2023)
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-blue-600 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="hover:text-blue-600 transition-colors">
                    Cookie & Storage Policy
                  </Link>
                </li>
                <li>
                  <Link to="/grievance" className="hover:text-blue-600 transition-colors flex items-center gap-1">
                    <span>Grievance Redressal & Rights</span>
                    <ExternalLink className="w-2.5 h-2.5 text-gray-400" />
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setIsCookieModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium cursor-pointer transition-colors pt-1"
                  >
                    <SlidersHorizontal className="w-3 h-3" />
                    <span>Cookie Settings</span>
                  </button>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Attribution & Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-400">
            <p>
              © {new Date().getFullYear()} HOSTEL MESS. Built for ITER, Siksha 'O' Anusandhan (Deemed to be University), Bhubaneswar.
            </p>
            <p className="text-gray-400">
              Free educational & campus dining informational platform.
            </p>
          </div>

        </div>
      </footer>

      {/* Persistent Cookie Preferences Modal */}
      <CookiePreferencesModal
        isOpen={isCookieModalOpen}
        onClose={() => setIsCookieModalOpen(false)}
      />
    </>
  );
};
