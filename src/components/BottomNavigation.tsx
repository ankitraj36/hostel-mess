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

  // Try to retrieve remembered hostel from localStorage or URL
  const storedHostel = (localStorage.getItem('hostel_mess_preferred') as HostelType) || currentHostel || 'boys';
  const effectiveHostel = currentHostel || (['boys', 'girls'].includes(storedHostel) ? storedHostel : undefined);

  const isBoys = effectiveHostel === 'boys';
  const activeColor = isBoys ? 'text-blue-600' : 'text-pink-600';
  const activeIndicator = isBoys ? 'bg-blue-600' : 'bg-pink-600';

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
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200/80 safe-pb shadow-lg shadow-black/5"
    >
      <div className="grid grid-cols-4 h-16 items-center max-w-md mx-auto px-2">
        
        {/* 1. Home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex flex-col items-center justify-center h-full min-h-[48px] py-1 transition-colors select-none ${
              isActive ? `${activeColor} font-bold` : 'text-gray-500 hover:text-gray-900 font-medium'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className="relative">
                <Home className="w-5 h-5" />
                {isActive && (
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${activeIndicator}`} />
                )}
              </div>
              <span className="text-[11px] mt-1 tracking-tight">Home</span>
            </>
          )}
        </NavLink>

        {/* 2. Today's Menu */}
        <button
          onClick={() => handleHostelNav('')}
          className={`flex flex-col items-center justify-center h-full min-h-[48px] py-1 transition-colors select-none cursor-pointer ${
            isTodayActive ? `${activeColor} font-bold` : 'text-gray-500 hover:text-gray-900 font-medium'
          }`}
        >
          <div className="relative">
            <Utensils className="w-5 h-5" />
            {isTodayActive && (
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${activeIndicator}`} />
            )}
          </div>
          <span className="text-[11px] mt-1 tracking-tight">Today</span>
        </button>

        {/* 3. Weekly Menu */}
        <button
          onClick={() => handleHostelNav('/weekly')}
          className={`flex flex-col items-center justify-center h-full min-h-[48px] py-1 transition-colors select-none cursor-pointer ${
            isWeeklyActive ? `${activeColor} font-bold` : 'text-gray-500 hover:text-gray-900 font-medium'
          }`}
        >
          <div className="relative">
            <Calendar className="w-5 h-5" />
            {isWeeklyActive && (
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${activeIndicator}`} />
            )}
          </div>
          <span className="text-[11px] mt-1 tracking-tight">Weekly</span>
        </button>

        {/* 4. About */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center h-full min-h-[48px] py-1 transition-colors select-none ${
              isActive ? `${activeColor} font-bold` : 'text-gray-500 hover:text-gray-900 font-medium'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className="relative">
                <Info className="w-5 h-5" />
                {isActive && (
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${activeIndicator}`} />
                )}
              </div>
              <span className="text-[11px] mt-1 tracking-tight">About</span>
            </>
          )}
        </NavLink>

      </div>
    </nav>
  );
};
