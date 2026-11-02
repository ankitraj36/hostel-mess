import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, SlidersHorizontal, ExternalLink, Utensils } from 'lucide-react';
import { CookiePreferencesModal } from './CookiePreferencesModal';

interface FooterProps {
  className?: string;
  hostelType?: 'boys' | 'girls';
}

const ADMIN_PORTFOLIO_URL = 'https://portfolio-ankit-i4xai4zid-ankitraj36s-projects.vercel.app/';

export const Footer: React.FC<FooterProps> = ({ className = '', hostelType }) => {
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);

  const isBoys = hostelType === 'boys';
  const isGirls = hostelType === 'girls';

  // Theming colors based on hostel section
  const themeStyles = {
    badgeBg: isBoys ? 'bg-blue-50 border-blue-200 text-blue-700' : isGirls ? 'bg-pink-50 border-pink-200 text-pink-700' : 'bg-gray-100 border-gray-200 text-gray-700',
    iconBg: isBoys ? 'bg-blue-600 text-white' : isGirls ? 'bg-pink-600 text-white' : 'bg-blue-600 text-white',
    linkHover: isBoys ? 'hover:text-blue-600' : isGirls ? 'hover:text-pink-600' : 'hover:text-blue-600',
    contactButton: isBoys
      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20'
      : isGirls
      ? 'bg-pink-600 hover:bg-pink-700 text-white shadow-pink-500/20'
      : 'bg-gray-900 hover:bg-black text-white shadow-gray-500/20',
    adminCardBg: isBoys
      ? 'bg-gradient-to-br from-blue-50/80 to-blue-100/40 border-blue-200/80'
      : isGirls
      ? 'bg-gradient-to-br from-pink-50/80 to-pink-100/40 border-pink-200/80'
      : 'bg-gradient-to-br from-gray-50 to-blue-50/40 border-gray-200/80',
    borderTop: isBoys ? 'border-blue-100' : isGirls ? 'border-pink-100' : 'border-gray-200/80',
  };

  return (
    <>
      <footer
        className={`w-full border-t ${themeStyles.borderTop} bg-white/95 backdrop-blur-xs text-gray-600 transition-colors pb-28 sm:pb-12 md:pb-8 ${className}`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 sm:py-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Brand, Tagline & Creator Identity */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-xl ${themeStyles.iconBg} flex items-center justify-center font-bold shadow-xs`}>
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-heading font-extrabold text-lg tracking-tight text-gray-900 leading-none">
                    HOSTEL MESS
                  </span>
                  <span className="block text-[11px] font-semibold text-gray-500 italic mt-0.5">
                    "Good Food. Every Day."
                  </span>
                </div>
                <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${themeStyles.badgeBg} ml-1`}>
                  ITER Campus-1
                </span>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
                Official dining schedule & daily menu portal for residents of Siksha 'O' Anusandhan (Deemed to be University), Bhubaneswar.
              </p>

              {/* Creator Card with Contact Admin Link */}
              <div className={`p-4 rounded-2xl border ${themeStyles.adminCardBg} shadow-2xs space-y-2.5 max-w-sm`}>
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs">
                    <p className="text-gray-500 text-[11px] font-medium">Platform Creator & Lead Developer</p>
                    <p className="font-bold text-gray-900 text-sm mt-0.5">
                      Designed & Maintained by <span className="text-gray-900 underline decoration-blue-500/40 decoration-2">Ankit Raj</span>
                    </p>
                  </div>
                </div>

                <a
                  href={ADMIN_PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact Admin via Ankit Raj's portfolio (opens in a new tab)"
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 group ${themeStyles.contactButton}`}
                >
                  <span>Contact Admin</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <div className="inline-flex items-center gap-1.5 text-[11px] text-gray-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Compliant with India DPDP Act, 2023</span>
              </div>
            </div>

            {/* Dining Portals Navigation */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase font-heading">
                Dining Portals
              </h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li>
                  <Link to="/" className={`${themeStyles.linkHover} transition-colors flex items-center gap-1.5`}>
                    <span>Home Selection</span>
                  </Link>
                </li>
                <li>
                  <Link to="/boys" className={`${themeStyles.linkHover} transition-colors flex items-center gap-1.5`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span>Boys Hostel (Weekly)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/girls" className={`${themeStyles.linkHover} transition-colors flex items-center gap-1.5`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                    <span>Ladies Hostel (4-Week Cycle)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={`${themeStyles.linkHover} transition-colors flex items-center gap-1.5`}>
                    <span>About Mess & Meal Timings</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal, Privacy & Contact Links */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase font-heading">
                Legal & Governance
              </h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li>
                  <Link to="/privacy" className={`${themeStyles.linkHover} transition-colors`}>
                    Privacy Policy (DPDP Act 2023)
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className={`${themeStyles.linkHover} transition-colors`}>
                    Terms & Conditions & Rebates
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className={`${themeStyles.linkHover} transition-colors`}>
                    Cookie & Storage Policy
                  </Link>
                </li>
                <li>
                  <Link to="/grievance" className={`${themeStyles.linkHover} transition-colors flex items-center gap-1`}>
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

          {/* Bottom Attribution & Copyright Line */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
            <p className="flex items-center gap-1">
              <span>© {new Date().getFullYear()} HOSTEL MESS. All rights reserved.</span>
            </p>
            <p className="flex items-center gap-1 text-gray-500">
              <span>Designed & Maintained by <strong className="text-gray-800">Ankit Raj</strong></span>
              <span className="mx-1 text-gray-300">·</span>
              <a
                href={ADMIN_PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold inline-flex items-center gap-1 ${isBoys ? 'text-blue-600 hover:text-blue-700' : isGirls ? 'text-pink-600 hover:text-pink-700' : 'text-blue-600 hover:text-blue-700'} underline`}
              >
                <span>Contact Admin</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
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
