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
    <div className="space-y-6">
      
      {/* Page Header */}
      <section className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-2xs">
        <div className="flex items-center gap-2 mb-2">
          <Link
            to={`/${hostelType}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Today's Menu</span>
          </Link>
          <span className="text-gray-300">/</span>
          <span
            className={`text-xs font-bold uppercase tracking-wider ${
              isBoys ? 'text-blue-700' : 'text-pink-700'
            }`}
          >
            Weekly Schedule
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Weekly Food Menu
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Explore scheduled meals for {hostel.name} · ITER Campus-1
            </p>
          </div>

          <div
            className={`self-start sm:self-auto px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider ${
              isBoys ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800'
            }`}
          >
            {hostel.residenceLabel}
          </div>
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

      {/* 7-Day Interactive Selector */}
      <WeeklyDaySelector
        selectedDay={selectedDay}
        onSelectDay={setSelectedDay}
        hostelType={hostelType}
        currentDayName={currentDayName}
      />

      {/* Selected Day Header & Dietary Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 px-1">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-heading text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
              {selectedDay}'s Menu
            </h2>
            {!isBoys && (
              <span className="text-[11px] font-bold text-pink-700 bg-pink-50 px-2 py-0.5 rounded-md border border-pink-100">
                Week {selectedWeek}
              </span>
            )}
            {selectedDay.toLowerCase() === currentDayName.toLowerCase() && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                Today
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500">
            {selectedDayMenu?.meals.length || 0} scheduled meals (Breakfast, Lunch, Snacks, Dinner)
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {selectedDayMenu?.specialTheme && (
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                isBoys ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-pink-50 text-pink-700 border border-pink-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{selectedDayMenu.specialTheme}</span>
            </div>
          )}

          {/* Filter Toggle */}
          <div className="inline-flex bg-gray-100 p-0.5 rounded-lg border border-gray-200 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-2.5 py-1 rounded-md transition-all ${
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
              className={`px-2.5 py-1 rounded-md flex items-center gap-1 transition-all ${
                filter === 'veg'
                  ? 'bg-white text-emerald-700 shadow-2xs font-bold'
                  : 'text-gray-600 hover:text-emerald-700'
              }`}
            >
              <Leaf className="w-3 h-3 text-emerald-600" />
              <span>Veg</span>
            </button>
            <button
              type="button"
              onClick={() => setFilter('non-veg')}
              className={`px-2.5 py-1 rounded-md flex items-center gap-1 transition-all ${
                filter === 'non-veg'
                  ? 'bg-white text-rose-700 shadow-2xs font-bold'
                  : 'text-gray-600 hover:text-rose-700'
              }`}
            >
              <Drumstick className="w-3 h-3 text-rose-600" />
              <span>Non-Veg</span>
            </button>
          </div>
        </div>
      </div>

      {/* Display Meals for the Selected Day */}
      {filteredMeals && filteredMeals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
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
      <div className="flex items-center justify-center pt-4">
        <Link
          to={`/${hostelType}`}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs ${
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
