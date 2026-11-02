import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Home, Utensils, Calendar, Info } from 'lucide-react';
import { HostelType } from '../data/menuTypes';

interface BottomNavigationProps {
  currentHostel?: HostelType;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ currentHostel }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve remembered hostel from localStorage or URL
  const storedHostel = (localStorage.getItem('hostel_mess_preferred') as HostelType) || currentHostel || 'boys';
  const effectiveHostel = currentHostel || (['boys', 'girls'].includes(storedHostel) ? storedHostel : undefined);

  const isBoys = effectiveHostel === 'boys';
  const activePill = isBoys ? 'bg-blue-50 text-blue-700' : 'bg-pink-50 text-pink-700';
  const activeDot = isBoys ? 'bg-blue-600' : 'bg-pink-600';

  const handleHostelNav = (targetPath: string) => {
    if (effectiveHostel) {
      navigate(`/${effectiveHostel}${targetPath}`);
    } else {
      navigate('/');
    }
  };

  const isTodayActive = effectiveHostel
    ? location.pathname === `/${effectiveHostel}`
    : false;

  const isWeeklyActive = effectiveHostel
    ? location.pathname === `/${effectiveHostel}/weekly`
    : false;

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200/80 safe-pb shadow-lg shadow-black/5"
    >
      <div className="grid grid-cols-4 h-16 items-center max-w-md mx-auto px-2">
        
        {/* 1. Home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex flex-col items-center justify-center min-h-[44px] py-1 px-1.5 rounded-xl transition-all duration-200 select-none ${
              isActive ? `${activePill} font-bold` : 'text-gray-500 hover:text-gray-900 font-medium'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className="relative flex items-center justify-center">
                <Home className="w-5 h-5" />
                {isActive && (
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${activeDot}`} />
                )}
              </div>
              <span className="text-[11px] mt-0.5 tracking-tight">Home</span>
            </>
          )}
        </NavLink>

        {/* 2. Today's Menu */}
        <button
          type="button"
          onClick={() => handleHostelNav('')}
          className={`flex flex-col items-center justify-center min-h-[44px] py-1 px-1.5 rounded-xl transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
            isTodayActive ? `${activePill} font-bold` : 'text-gray-500 hover:text-gray-900 font-medium'
          }`}
        >
          <div className="relative flex items-center justify-center">
            <Utensils className="w-5 h-5" />
            {isTodayActive && (
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${activeDot}`} />
            )}
          </div>
          <span className="text-[11px] mt-0.5 tracking-tight">Today</span>
        </button>

        {/* 3. Weekly Menu */}
        <button
          type="button"
          onClick={() => handleHostelNav('/weekly')}
          className={`flex flex-col items-center justify-center min-h-[44px] py-1 px-1.5 rounded-xl transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
            isWeeklyActive ? `${activePill} font-bold` : 'text-gray-500 hover:text-gray-900 font-medium'
          }`}
        >
          <div className="relative flex items-center justify-center">
            <Calendar className="w-5 h-5" />
            {isWeeklyActive && (
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${activeDot}`} />
            )}
          </div>
          <span className="text-[11px] mt-0.5 tracking-tight">Weekly</span>
        </button>

        {/* 4. About */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center min-h-[44px] py-1 px-1.5 rounded-xl transition-all duration-200 select-none ${
              isActive ? `${activePill} font-bold` : 'text-gray-500 hover:text-gray-900 font-medium'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className="relative flex items-center justify-center">
                <Info className="w-5 h-5" />
                {isActive && (
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${activeDot}`} />
                )}
              </div>
              <span className="text-[11px] mt-0.5 tracking-tight">About</span>
            </>
          )}
        </NavLink>

      </div>
    </nav>
  );
};
