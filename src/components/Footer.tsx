import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Home, CalendarDays, Info, ExternalLink, MapPin } from 'lucide-react';
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

  // Subtle theme-aware styles matching the existing design system
  const themeStyles = {
    iconBg: isBoys ? 'bg-blue-600 text-white shadow-blue-500/20' : isGirls ? 'bg-pink-600 text-white shadow-pink-500/20' : 'bg-gray-900 text-white shadow-gray-900/15',
    linkHover: isBoys ? 'hover:text-blue-600' : isGirls ? 'hover:text-pink-600' : 'hover:text-gray-950',
    portfolioButton: isBoys
      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs hover:shadow-blue-500/25'
      : isGirls
      ? 'bg-pink-600 hover:bg-pink-700 text-white shadow-xs hover:shadow-pink-500/25'
      : 'bg-gray-900 hover:bg-black text-white shadow-xs hover:shadow-gray-900/20',
    borderTop: isBoys ? 'border-blue-100' : isGirls ? 'border-pink-100' : 'border-gray-200/80',
    bgFooter: isBoys ? 'bg-white' : isGirls ? 'bg-white' : 'bg-white',
  };

  return (
    <>
      <footer
        className={`w-full border-t ${themeStyles.borderTop} ${themeStyles.bgFooter} text-gray-600 transition-colors pb-28 sm:pb-12 md:pb-8 ${className}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-6">
          
          {/* Main 3-Column Balanced Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-start">
            
            {/* Column 1 — Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-lg ${themeStyles.iconBg} flex items-center justify-center font-bold shadow-xs shrink-0`}>
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-heading font-extrabold text-lg tracking-tight text-gray-950 leading-none block">
                    HOSTEL MESS
                  </span>
                  <span className="text-xs font-semibold text-gray-500 italic mt-0.5 block">
                    "Good Food. Every Day."
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm">
                Your hostel dining schedule and weekly meal menu, all in one place.
              </p>

              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                <span>ITER Campus, Bhubaneswar</span>
              </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div className="space-y-3">
              <h3 className="font-heading text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                <li>
                  <Link
                    to="/"
                    className={`inline-flex items-center gap-2 transition-colors ${themeStyles.linkHover}`}
                  >
                    <Home className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/boys/weekly"
                    className={`inline-flex items-center gap-2 transition-colors ${themeStyles.linkHover}`}
                  >
                    <CalendarDays className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>Boys Hostel — Weekly Menu</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/girls/weekly"
                    className={`inline-flex items-center gap-2 transition-colors ${themeStyles.linkHover}`}
                  >
                    <CalendarDays className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                    <span>Ladies Hostel — Weekly Menu</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`inline-flex items-center gap-2 transition-colors ${themeStyles.linkHover}`}
                  >
                    <Info className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>About Mess</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 — Admin Contact */}
            <div className="space-y-3">
              <h3 className="font-heading text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider">
                Website Creator
              </h3>
              <div className="space-y-0.5">
                <p className="font-bold text-base text-gray-950">
                  Ankit Raj
                </p>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  Platform Creator & Lead Developer
                </p>
              </div>

              <div className="pt-1.5">
                <a
                  href={ADMIN_PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-98 group min-h-[44px] ${themeStyles.portfolioButton}`}
                >
                  <span>Visit Portfolio</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className="mt-8 sm:mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} HOSTEL MESS. All rights reserved.
            </p>
            <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-end text-[11px] sm:text-xs">
              <Link to="/privacy" className="hover:text-gray-900 transition-colors">Privacy</Link>
              <span className="text-gray-300">·</span>
              <Link to="/terms" className="hover:text-gray-900 transition-colors">Terms</Link>
              <span className="text-gray-300">·</span>
              <button
                type="button"
                onClick={() => setIsCookieModalOpen(true)}
                className="hover:text-gray-900 transition-colors cursor-pointer"
              >
                Cookies
              </button>
              <span className="text-gray-300">·</span>
              <span className="text-gray-500">
                Designed & Maintained by <strong className="text-gray-800 font-semibold">Ankit Raj</strong>
              </span>
            </div>
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
