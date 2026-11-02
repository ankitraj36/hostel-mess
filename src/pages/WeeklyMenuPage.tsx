import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronLeft, Sparkles } from 'lucide-react';
import { HostelType } from '../data/menuTypes';
import { getHostelInfo, getDayMenu } from '../data';
import { useCurrentDate } from '../hooks/useCurrentDate';
import { WeeklyDaySelector } from '../components/WeeklyDaySelector';
import { MealCard } from '../components/MealCard';
import { EmptyMenuState } from '../components/EmptyMenuState';

interface WeeklyMenuPageProps {
  hostelType: HostelType;
}

export const WeeklyMenuPage: React.FC<WeeklyMenuPageProps> = ({ hostelType }) => {
  const hostel = getHostelInfo(hostelType);
  const { dayName: currentDayName } = useCurrentDate();
  const isBoys = hostelType === 'boys';

  // State for currently selected day in the weekly view (defaults to today's day of week)
  const [selectedDay, setSelectedDay] = useState<string>(currentDayName);

  const selectedDayMenu = getDayMenu(hostelType, selectedDay);

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
              Explore daily meals for the entire week at {hostel.name}.
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

      {/* 7-Day Interactive Selector */}
      <WeeklyDaySelector
        selectedDay={selectedDay}
        onSelectDay={setSelectedDay}
        hostelType={hostelType}
        currentDayName={currentDayName}
      />

      {/* Selected Day Header & Highlights */}
      <div className="flex items-center justify-between px-1">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-heading text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
              {selectedDay}'s Menu
            </h2>
            {selectedDay.toLowerCase() === currentDayName.toLowerCase() && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                Today
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500">
            {selectedDayMenu?.meals.length || 0} scheduled meals
          </p>
        </div>

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
      </div>

      {/* Display Meals for the Selected Day */}
      {selectedDayMenu && selectedDayMenu.meals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selectedDayMenu.meals.map((meal) => (
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
          title={`No Menu for ${selectedDay}`}
          description="The mess schedule for this day is currently being refreshed by the administration."
        />
      )}

      {/* Quick Navigation Footer */}
      <div className="flex items-center justify-center pt-4">
        <Link
          to={`/${hostelType}`}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            isBoys
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs'
              : 'bg-pink-600 hover:bg-pink-700 text-white shadow-xs'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>View Today's Live Dashboard</span>
        </Link>
      </div>

    </div>
  );
};
