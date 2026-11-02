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
  const isGirls = effectiveHostel === 'girls';

  // Apply theme-specific bottom bar styling to reinforce hostel theme
  const getNavContainerStyle = () => {
    if (isBoys) {
      return 'bg-[#EFF6FF]/95 border-blue-200/90 shadow-blue-500/5 text-blue-950';
    }
    if (isGirls) {
      return 'bg-[#FDF2F8]/95 border-pink-200/90 shadow-pink-500/5 text-pink-950';
    }
    return 'bg-white/95 border-gray-200/90 shadow-black/5 text-gray-900';
  };

  const getActiveItemStyle = () => {
    if (isBoys) return 'bg-blue-600 text-white shadow-xs font-bold';
    if (isGirls) return 'bg-pink-600 text-white shadow-xs font-bold';
    return 'bg-gray-900 text-white shadow-xs font-bold';
  };

  const getInactiveItemStyle = () => {
    if (isBoys) return 'text-blue-900/70 hover:text-blue-900 hover:bg-blue-100/50 font-medium';
    if (isGirls) return 'text-pink-900/70 hover:text-pink-900 hover:bg-pink-100/50 font-medium';
    return 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/70 font-medium';
  };

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
      aria-label="Thumb-friendly Mobile Bottom Navigation"
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-lg border-t safe-pb shadow-lg transition-colors duration-200 ${getNavContainerStyle()}`}
    >
      <div className="grid grid-cols-4 h-16 items-center max-w-md mx-auto px-2 gap-1">
        
        {/* 1. Home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-xl transition-all duration-150 select-none ${
              isActive ? getActiveItemStyle() : getInactiveItemStyle()
            }`
          }
        >
          <Home className="w-5 h-5 shrink-0" />
          <span className="text-[11px] mt-0.5 tracking-tight font-medium">Home</span>
        </NavLink>

        {/* 2. Today's Menu */}
        <button
          type="button"
          onClick={() => handleHostelNav('')}
          className={`flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-xl transition-all duration-150 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current ${
            isTodayActive ? getActiveItemStyle() : getInactiveItemStyle()
          }`}
        >
          <Utensils className="w-5 h-5 shrink-0" />
          <span className="text-[11px] mt-0.5 tracking-tight font-medium">Today</span>
        </button>

        {/* 3. Weekly Menu */}
        <button
          type="button"
          onClick={() => handleHostelNav('/weekly')}
          className={`flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-xl transition-all duration-150 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current ${
            isWeeklyActive ? getActiveItemStyle() : getInactiveItemStyle()
          }`}
        >
          <Calendar className="w-5 h-5 shrink-0" />
          <span className="text-[11px] mt-0.5 tracking-tight font-medium">Weekly</span>
        </button>

        {/* 4. About */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-xl transition-all duration-150 select-none ${
              isActive ? getActiveItemStyle() : getInactiveItemStyle()
            }`
          }
        >
          <Info className="w-5 h-5 shrink-0" />
          <span className="text-[11px] mt-0.5 tracking-tight font-medium">About</span>
        </NavLink>

      </div>
    </nav>
  );
};
