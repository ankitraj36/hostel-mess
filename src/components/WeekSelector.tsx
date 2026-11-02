import React, { useState } from 'react';
import { CalendarRange, ChevronDown } from 'lucide-react';
import { HostelType } from '../data/menuTypes';

interface WeekSelectorProps {
  selectedWeek: number;
  onSelectWeek: (week: number) => void;
  currentCalendarWeek?: number;
  hostelType: HostelType;
  totalWeeks?: number;
  activeWeek?: number;
}

export const WeekSelector: React.FC<WeekSelectorProps> = ({
  selectedWeek,
  onSelectWeek,
  hostelType,
  totalWeeks = 4,
  activeWeek = 2, // Girls Hostel active running week is Week 2
}) => {
  const isBoys = hostelType === 'boys';
  const [showAllWeeks, setShowAllWeeks] = useState(false);

  // Boys hostel only has 1 weekly menu that repeats every week
  if (isBoys || totalWeeks <= 1) {
    return (
      <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-blue-50/70 border border-blue-100 text-blue-900 text-xs font-medium mb-4">
        <CalendarRange className="w-3.5 h-3.5 text-blue-600 shrink-0" />
        <span>Weekly Repeating Schedule · Same menu repeats every week</span>
      </div>
    );
  }

  return (
    <div className="w-full mb-4 bg-white rounded-2xl p-3 sm:p-3.5 border border-[#FCE7F3] shadow-2xs">
      
      {/* Top Header: Schedule Label + Active Week Indicator */}
      <div className="flex items-center justify-between gap-2 mb-2.5 px-0.5">
        <div className="flex items-center gap-1.5">
          <CalendarRange className="w-4 h-4 text-[#DB2777]" />
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#831843] font-heading">
            Schedule Selector
          </span>
        </div>
        
        {/* Responsive Badge: Week 2 — Active Menu */}
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#FDF2F8] text-[#DB2777] border border-[#FCE7F3] shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777] animate-pulse shrink-0" />
          <span className="truncate">Week {activeWeek} — Active Menu</span>
        </span>
      </div>

      {/* Sleek Segmented Toggle: Week 1 | Week 2 */}
      <div
        role="tablist"
        aria-label="Girls Hostel Week Selector"
        className="grid grid-cols-2 gap-2 bg-[#FDF2F8] p-1.5 rounded-xl border border-[#FCE7F3]"
      >
        {/* Week 1 Button */}
        <button
          type="button"
          role="tab"
          aria-selected={selectedWeek === 1}
          onClick={() => onSelectWeek(1)}
          className={`min-h-[44px] py-2 px-3 rounded-lg text-center transition-all duration-200 cursor-pointer select-none border focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#DB2777] flex flex-col items-center justify-center ${
            selectedWeek === 1
              ? 'bg-[#DB2777] text-white border-[#DB2777] shadow-sm font-bold'
              : 'bg-white/80 text-[#831843] border-transparent hover:bg-white hover:border-[#FCE7F3] font-semibold active:scale-98'
          }`}
        >
          <span className="text-xs tracking-tight leading-tight">Week 1</span>
          <span
            className={`text-[10px] leading-tight block mt-0.5 font-medium ${
              selectedWeek === 1 ? 'text-white/85' : 'text-gray-500'
            }`}
          >
            Preview Schedule
          </span>
        </button>

        {/* Week 2 Button (Active Running Week) */}
        <button
          type="button"
          role="tab"
          aria-selected={selectedWeek === 2}
          onClick={() => onSelectWeek(2)}
          className={`min-h-[44px] py-2 px-3 rounded-lg text-center transition-all duration-200 cursor-pointer select-none border focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#DB2777] flex flex-col items-center justify-center relative ${
            selectedWeek === 2
              ? 'bg-[#DB2777] text-white border-[#DB2777] shadow-sm font-bold'
              : 'bg-white/80 text-[#831843] border-transparent hover:bg-white hover:border-[#FCE7F3] font-semibold active:scale-98'
          }`}
        >
          <div className="flex items-center gap-1.5 leading-tight">
            <span className="text-xs tracking-tight">Week 2</span>
            <span
              className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold uppercase tracking-wider ${
                selectedWeek === 2
                  ? 'bg-white/20 text-white'
                  : 'bg-[#DB2777] text-white'
              }`}
            >
              Active
            </span>
          </div>
          <span
            className={`text-[10px] leading-tight block mt-0.5 font-medium ${
              selectedWeek === 2 ? 'text-white/85' : 'text-[#DB2777] font-semibold'
            }`}
          >
            Running Menu
          </span>
        </button>
      </div>

      {/* Optional: Weeks 3 & 4 Expander for Full Month Coverage */}
      {totalWeeks > 2 && (
        <div className="mt-2 pt-2 border-t border-[#FCE7F3]/60">
          {!showAllWeeks ? (
            <button
              type="button"
              onClick={() => setShowAllWeeks(true)}
              className="w-full text-center py-1 text-[11px] font-semibold text-[#831843] hover:text-[#DB2777] transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>View More Weeks (Week 3 & 4)</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          ) : (
            <div className="space-y-1.5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between text-[11px] text-[#831843] font-semibold px-1">
                <span>Extended Monthly Schedules:</span>
                <button
                  type="button"
                  onClick={() => setShowAllWeeks(false)}
                  className="text-[10px] text-gray-500 hover:text-gray-800 underline cursor-pointer"
                >
                  Hide
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[3, 4].map((wNum) => {
                  const isSelected = selectedWeek === wNum;
                  return (
                    <button
                      key={wNum}
                      type="button"
                      onClick={() => onSelectWeek(wNum)}
                      className={`min-h-[40px] py-1.5 px-3 rounded-lg text-center text-xs transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#DB2777] text-white border-[#DB2777] font-bold shadow-2xs'
                          : 'bg-[#FDF2F8]/70 text-[#831843] border-[#FCE7F3] hover:bg-[#FDF2F8] font-medium'
                      }`}
                    >
                      <span>Week {wNum} Schedule</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
