import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UtensilsCrossed, Calendar, ChevronLeft, Info } from 'lucide-react';
import { HostelType } from '../data/menuTypes';

interface HeaderProps {
  hostelType?: HostelType;
}

export const Header: React.FC<HeaderProps> = ({ hostelType }) => {
  const location = useLocation();
  const isBoys = hostelType === 'boys';
  const isGirls = hostelType === 'girls';
  const isWeekly = location.pathname.includes('/weekly');
  const isAbout = location.pathname === '/about';
  const isHome = location.pathname === '/';

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        
        {/* Brand & Left Navigation */}
        <div className="flex items-center gap-2.5">
          {hostelType && (
            <Link
              to="/"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors active:scale-95"
              title="Return to Hostel Selection"
              aria-label="Back to hostel selection"
            >
              <ChevronLeft className="w-5 h-5" />
            </Link>
          )}

          <Link to="/" className="flex items-center gap-2 group">
            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs ${
              isBoys
                ? 'bg-blue-600 text-white'
                : isGirls
                ? 'bg-pink-600 text-white'
                : 'bg-gray-900 text-white'
            }`}>
              <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold tracking-tight text-sm sm:text-base text-gray-900 uppercase">
                  HOSTEL MESS
                </span>
                {isBoys && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700">
                    Boys
                  </span>
                )}
                {isGirls && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-pink-100 text-pink-700">
                    Girls
                  </span>
                )}
              </div>
              <p className="text-[10px] text-gray-500 font-medium hidden sm:block tracking-wide">
                Good Food. Every Day.
              </p>
            </div>
          </Link>
        </div>

        {/* Right Action / Desktop Navigation */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Hostel Switcher pill if in a hostel view */}
          {hostelType ? (
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Link
                to={`/${hostelType}`}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  !isWeekly
                    ? isBoys
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-pink-600 text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Today
              </Link>
              <Link
                to={`/${hostelType}/weekly`}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  isWeekly
                    ? isBoys
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-pink-600 text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Weekly</span>
              </Link>

              {/* Desktop About Link */}
              <Link
                to="/about"
                className="hidden md:inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 ml-2 px-2 py-1 rounded-md hover:bg-gray-50"
              >
                <Info className="w-3.5 h-3.5" />
                <span>About</span>
              </Link>
            </div>
          ) : (
            /* Navigation on Homepage or About */
            <nav className="flex items-center gap-1 sm:gap-2">
              {!isHome && (
                <Link
                  to="/"
                  className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  Hostels
                </Link>
              )}
              <Link
                to="/about"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  isAbout
                    ? 'bg-gray-100 text-gray-900 font-semibold'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Info className="w-3.5 h-3.5" />
                <span>About Mess</span>
              </Link>
            </nav>
          )}
        </div>

      </div>
    </header>
  );
};
