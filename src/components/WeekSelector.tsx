import React from 'react';
import { CalendarRange } from 'lucide-react';
import { HostelType } from '../data/menuTypes';

interface WeekSelectorProps {
  selectedWeek: number;
  onSelectWeek: (week: number) => void;
  currentCalendarWeek: number;
  hostelType: HostelType;
  totalWeeks?: number;
}

export const WeekSelector: React.FC<WeekSelectorProps> = ({
  selectedWeek,
  onSelectWeek,
  currentCalendarWeek,
  hostelType,
  totalWeeks = 4,
}) => {
  const isBoys = hostelType === 'boys';

  // Boys hostel only has 1 weekly menu that repeats every week
  if (isBoys || totalWeeks <= 1) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-50/70 border border-blue-100 text-blue-900 text-xs font-medium mb-4">
        <CalendarRange className="w-3.5 h-3.5 text-blue-600 shrink-0" />
        <span>Weekly Rotating Schedule · Same menu repeats every week</span>
      </div>
    );
  }

  const weeks = [1, 2, 3, 4];

  return (
    <div className="w-full mb-5 bg-white rounded-2xl p-3 border border-pink-100 shadow-2xs">
      <div className="flex items-center justify-between mb-2 px-1">
        <div className="flex items-center gap-1.5">
          <CalendarRange className="w-4 h-4 text-pink-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
            Monthly Rotation Schedule
          </span>
        </div>
        <span className="text-[11px] font-semibold text-pink-700 bg-pink-50 px-2 py-0.5 rounded-md border border-pink-100">
          Week {currentCalendarWeek} is Current
        </span>
      </div>

      <div className="grid grid-cols-4 gap-1.5" role="tablist" aria-label="Month weeks">
        {weeks.map((weekNum) => {
          const isSelected = selectedWeek === weekNum;
          const isCurrent = currentCalendarWeek === weekNum;

          return (
            <button
              key={weekNum}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => onSelectWeek(weekNum)}
              className={`min-h-[44px] py-2 px-2 rounded-xl text-center transition-all duration-200 cursor-pointer select-none border focus-visible:outline-none focus-visible:ring-2 ${
                isSelected
                  ? 'bg-pink-600 text-white border-pink-600 shadow-md shadow-pink-500/20 font-bold'
                  : 'bg-gray-50/80 text-gray-700 border-gray-100 hover:bg-pink-50/50 hover:border-pink-200 font-medium active:scale-95'
              }`}
            >
              <div className="text-xs tracking-tight flex items-center justify-center gap-1">
                <span>Week {weekNum}</span>
                {isCurrent && (
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSelected ? 'bg-amber-300' : 'bg-pink-600'
                    }`}
                    title="Active Calendar Week"
                  />
                )}
              </div>
              <span
                className={`text-[9px] block mt-0.5 uppercase tracking-wider ${
                  isSelected ? 'text-white/85' : isCurrent ? 'text-pink-600 font-bold' : 'text-gray-400'
                }`}
              >
                {isCurrent ? 'Now' : `Menu ${weekNum}`}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
