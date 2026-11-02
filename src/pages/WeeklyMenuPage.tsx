import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronLeft, Sparkles, Leaf, Drumstick } from 'lucide-react';
import { HostelType } from '../data/menuTypes';
import { getHostelInfo, getDayMenu } from '../data';
import { useCurrentDate } from '../hooks/useCurrentDate';
import { WeekSelector } from '../components/WeekSelector';
import { WeeklyDaySelector } from '../components/WeeklyDaySelector';
import { MealCard } from '../components/MealCard';
import { EmptyMenuState } from '../components/EmptyMenuState';

interface WeeklyMenuPageProps {
  hostelType: HostelType;
}

type MealFilter = 'all' | 'veg' | 'non-veg';

export const WeeklyMenuPage: React.FC<WeeklyMenuPageProps> = ({ hostelType }) => {
  const hostel = getHostelInfo(hostelType);
  const { dayName: currentDayName, weekOfMonth } = useCurrentDate();
  const isBoys = hostelType === 'boys';

  // State for active week (Ladies has 4 weeks, Boys has 1)
  const [selectedWeek, setSelectedWeek] = useState<number>(weekOfMonth);

  // State for selected day (defaults to today's day of week)
  const [selectedDay, setSelectedDay] = useState<string>(currentDayName);
  const [filter, setFilter] = useState<MealFilter>('all');

  const selectedDayMenu = getDayMenu(hostelType, selectedDay, selectedWeek);

  // Filter meals if student selects Veg or Non-Veg focus
  const filteredMeals = selectedDayMenu?.meals.filter((m) => {
    if (filter === 'veg') return m.vegetarian || (m.vegOptions && m.vegOptions.length > 0);
    if (filter === 'non-veg') return m.hasNonVegOption;
    return true;
  });

  return (
    <div className="space-y-4 sm:space-y-5">
      
      {/* Compact Page Header with In-Page Return Link */}
      <section className="bg-white rounded-2xl p-3.5 sm:p-5 border border-gray-100 shadow-2xs">
        <div className="flex items-center gap-2 mb-1.5">
          <Link
            to={`/${hostelType}`}
            className={`inline-flex items-center gap-1 text-xs font-bold transition-colors ${
              isBoys ? 'text-blue-700 hover:text-blue-900' : 'text-pink-700 hover:text-pink-900'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Today's Menu</span>
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-xs font-semibold text-gray-500">
            {hostel.residenceLabel}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h1 className="font-heading text-xl sm:text-2.5xl font-extrabold text-gray-950 tracking-tight">
            Weekly Food Menu
          </h1>
          <p className="text-xs text-gray-500 font-medium">
            {hostel.name} · ITER Campus-1
          </p>
        </div>
      </section>

      {/* Week Selector for Ladies Hostel (Month has 4 rotating weeks) */}
      {!isBoys && (
        <WeekSelector
          selectedWeek={selectedWeek}
          onSelectWeek={setSelectedWeek}
          currentCalendarWeek={weekOfMonth}
          hostelType={hostelType}
          totalWeeks={hostel.totalWeeks}
        />
      )}

      {/* 7-Day Responsive Selector: Horizontal scroll on mobile (< md), 7-column grid on desktop (>= md) */}
      <WeeklyDaySelector
        selectedDay={selectedDay}
        onSelectDay={setSelectedDay}
        hostelType={hostelType}
        currentDayName={currentDayName}
      />

      {/* Selected Day Header & Dietary Filter Bar */}
      <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h2 className="font-heading text-lg font-bold text-gray-900 tracking-tight">
            {selectedDay}'s Menu
          </h2>
          {!isBoys && (
            <span className="text-[10px] font-bold text-pink-700 bg-pink-50 px-2 py-0.5 rounded-md border border-pink-100">
              Week {selectedWeek}
            </span>
          )}
          {selectedDay.toLowerCase() === currentDayName.toLowerCase() && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
              Today
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {selectedDayMenu?.specialTheme && (
            <div
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                isBoys ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-pink-50 text-pink-700 border border-pink-200'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>{selectedDayMenu.specialTheme}</span>
            </div>
          )}

          {/* Filter Toggle */}
          <div className="inline-flex bg-gray-100 p-0.5 rounded-lg border border-gray-200 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-2 py-0.5 rounded-md transition-all ${
                filter === 'all'
                  ? 'bg-white text-gray-900 shadow-2xs font-bold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setFilter('veg')}
              className={`px-2 py-0.5 rounded-md flex items-center gap-1 transition-all ${
                filter === 'veg'
                  ? 'bg-white text-emerald-700 shadow-2xs font-bold'
                  : 'text-gray-600 hover:text-emerald-700'
              }`}
            >
              <Leaf className="w-2.5 h-2.5 text-emerald-600" />
              <span>Veg</span>
            </button>
            <button
              type="button"
              onClick={() => setFilter('non-veg')}
              className={`px-2 py-0.5 rounded-md flex items-center gap-1 transition-all ${
                filter === 'non-veg'
                  ? 'bg-white text-rose-700 shadow-2xs font-bold'
                  : 'text-gray-600 hover:text-rose-700'
              }`}
            >
              <Drumstick className="w-2.5 h-2.5 text-rose-600" />
              <span>Non-Veg</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Meal Cards Grid: 1 col on mobile, 2 cols on tablet/desktop */}
      {filteredMeals && filteredMeals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4.5">
          {filteredMeals.map((meal) => (
            <MealCard
              key={meal.id}
              meal={meal}
              hostelType={hostelType}
            />
          ))}
        </div>
      ) : (
        <EmptyMenuState
          hostelType={hostelType}
          title={`No meals found`}
          description="Try switching the filter to view all scheduled meals."
        />
      )}

      {/* Quick Navigation Footer */}
      <div className="flex items-center justify-center pt-3 pb-2">
        <Link
          to={`/${hostelType}`}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs min-h-[44px] ${
            isBoys
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20'
              : 'bg-pink-600 hover:bg-pink-700 text-white shadow-pink-500/20'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>View Today's Live Dashboard</span>
        </Link>
      </div>

    </div>
  );
};
