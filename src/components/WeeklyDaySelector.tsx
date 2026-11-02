import React, { useRef, useEffect } from 'react';
import { HostelType } from '../data/menuTypes';

interface WeeklyDaySelectorProps {
  selectedDay: string;
  onSelectDay: (day: string) => void;
  hostelType: HostelType;
  currentDayName: string;
}

const DAYS = [
  { full: 'Monday', short: 'Mon' },
  { full: 'Tuesday', short: 'Tue' },
  { full: 'Wednesday', short: 'Wed' },
  { full: 'Thursday', short: 'Thu' },
  { full: 'Friday', short: 'Fri' },
  { full: 'Saturday', short: 'Sat' },
  { full: 'Sunday', short: 'Sun' },
];

export const WeeklyDaySelector: React.FC<WeeklyDaySelectorProps> = ({
  selectedDay,
  onSelectDay,
  hostelType,
  currentDayName,
}) => {
  const isBoys = hostelType === 'boys';
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll active day into view on mobile
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeBtn = scrollContainerRef.current.querySelector('[data-active="true"]');
      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
  }, [selectedDay]);

  return (
    <div className="w-full mb-6">
      <div className="flex items-center justify-between mb-2 px-1">
        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
          Select Day
        </label>
        <span className="text-xs text-gray-400">
          Scroll horizontally for full week
        </span>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-1 -mx-1"
        role="tablist"
        aria-label="Weekly menu days"
      >
        {DAYS.map((day) => {
          const isSelected = selectedDay.toLowerCase() === day.full.toLowerCase();
          const isToday = currentDayName.toLowerCase() === day.full.toLowerCase();

          return (
            <button
              key={day.full}
              role="tab"
              aria-selected={isSelected}
              data-active={isSelected}
              onClick={() => onSelectDay(day.full)}
              className={`min-w-[72px] sm:min-w-[84px] min-h-[52px] sm:min-h-[58px] rounded-xl px-3 py-2 flex flex-col items-center justify-center transition-all duration-200 cursor-pointer select-none shrink-0 border focus-visible:outline-none focus-visible:ring-2 ${
                isSelected
                  ? isBoys
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20 ring-2 ring-blue-300'
                    : 'bg-pink-600 text-white border-pink-600 shadow-md shadow-pink-500/20 ring-2 ring-pink-300'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50 active:scale-95'
              }`}
            >
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold tracking-tight">
                  {day.short}
                </span>
                {isToday && (
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSelected ? 'bg-amber-300' : 'bg-emerald-500'
                    }`}
                    title="Today"
                  />
                )}
              </div>
              <span
                className={`text-[10px] mt-0.5 tracking-wide ${
                  isSelected
                    ? 'text-white/90 font-medium'
                    : isToday
                    ? 'text-emerald-600 font-semibold'
                    : 'text-gray-400'
                }`}
              >
                {isToday ? 'Today' : day.full.slice(0, 3)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

