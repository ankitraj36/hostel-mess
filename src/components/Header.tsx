import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UtensilsCrossed, Calendar, ChevronLeft, Info, Home } from 'lucide-react';
import { HostelType } from '../data/menuTypes';

interface HeaderProps {
  hostelType?: HostelType;
}

export const Header: React.FC<HeaderProps> = ({ hostelType }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const isBoys = hostelType === 'boys';
  const isGirls = hostelType === 'girls';

  const isHome = pathname === '/';
  const isBoysToday = pathname === '/boys';
  const isBoysWeekly = pathname === '/boys/weekly';
  const isGirlsToday = pathname === '/girls';
  const isGirlsWeekly = pathname === '/girls/weekly';
  const isAbout = pathname === '/about';
  const isWeekly = pathname.includes('/weekly');

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100/90 transition-colors shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-15 sm:h-16 flex items-center justify-between gap-3">
        
        {/* Brand & Left Navigation */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Back button on mobile when inside a hostel view */}
          {hostelType && (
            <Link
              to="/"
              className="inline-flex items-center justify-center w-9 h-9 -ml-1 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              title="Return to Hostel Selection"
              aria-label="Back to hostel selection"
            >
              <ChevronLeft className="w-5 h-5" />
            </Link>
          )}

          <Link
            to="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded-lg py-1 px-0.5"
            aria-label="HOSTEL MESS homepage"
          >
            <div
              className={`w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-xs ${
                isBoys
                  ? 'bg-blue-600 text-white shadow-blue-500/20'
                  : isGirls
                  ? 'bg-pink-600 text-white shadow-pink-500/20'
                  : 'bg-gray-900 text-white shadow-gray-900/15'
              }`}
            >
              <UtensilsCrossed className="w-4.5 h-4.5" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold tracking-tight text-base sm:text-lg text-gray-950 uppercase leading-none">
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
              <p className="text-[10px] sm:text-[11px] text-gray-500 font-medium hidden sm:block tracking-wide mt-0.5">
                Good Food. Every Day.
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Bar (Full Desktop View >= md) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Desktop Navigation">
          <Link
            to="/"
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isHome
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Home
          </Link>

          <span className="w-px h-4 bg-gray-200 mx-1" />

          {/* Boys Links */}
          <Link
            to="/boys"
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isBoysToday
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
            }`}
          >
            Boys Today
          </Link>
          <Link
            to="/boys/weekly"
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isBoysWeekly
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
            }`}
          >
            Boys Weekly
          </Link>

          <span className="w-px h-4 bg-gray-200 mx-1" />

          {/* Girls Links */}
          <Link
            to="/girls"
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isGirlsToday
                ? 'bg-pink-600 text-white shadow-xs'
                : 'text-gray-600 hover:text-pink-700 hover:bg-pink-50'
            }`}
          >
            Girls Today
          </Link>
          <Link
            to="/girls/weekly"
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isGirlsWeekly
                ? 'bg-pink-600 text-white shadow-xs'
                : 'text-gray-600 hover:text-pink-700 hover:bg-pink-50'
            }`}
          >
            Girls Weekly
          </Link>

          <span className="w-px h-4 bg-gray-200 mx-1" />

          {/* About Link */}
          <Link
            to="/about"
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isAbout
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            About
          </Link>
        </nav>

        {/* Mobile Top Navigation / Quick Action (< md) */}
        <div className="flex md:hidden items-center gap-1.5">
          {hostelType ? (
            /* Compact Today / Weekly Switcher when on hostel dashboard */
            <div className="flex items-center bg-gray-100/90 p-0.5 rounded-xl border border-gray-200/60 shadow-2xs">
              <Link
                to={`/${hostelType}`}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all min-h-[36px] flex items-center ${
                  !isWeekly
                    ? isBoys
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-pink-600 text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Today
              </Link>
              <Link
                to={`/${hostelType}/weekly`}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all min-h-[36px] ${
                  isWeekly
                    ? isBoys
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-pink-600 text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Weekly</span>
              </Link>
            </div>
          ) : (
            /* On Home / About Mobile view */
            <Link
              to={isAbout ? '/' : '/about'}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200/70 transition-colors min-h-[38px]"
            >
              {isAbout ? (
                <>
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </>
              ) : (
                <>
                  <Info className="w-3.5 h-3.5" />
                  <span>About</span>
                </>
              )}
            </Link>
          )}
        </div>

      </div>
    </header>
  );
};
