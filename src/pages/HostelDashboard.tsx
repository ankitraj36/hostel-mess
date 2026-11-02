import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, Clock, Leaf, Drumstick } from 'lucide-react';
import { HostelType } from '../data/menuTypes';
import { getHostelInfo, getTodayMenu } from '../data';
import { useCurrentDate } from '../hooks/useCurrentDate';
import { useNextMeal } from '../hooks/useNextMeal';
import { MealCard } from '../components/MealCard';
import { WeekSelector } from '../components/WeekSelector';
import { EmptyMenuState } from '../components/EmptyMenuState';

interface HostelDashboardProps {
  hostelType: HostelType;
}

type MealFilter = 'all' | 'veg' | 'non-veg';

export const HostelDashboard: React.FC<HostelDashboardProps> = ({ hostelType }) => {
  const hostel = getHostelInfo(hostelType);
  const { greeting, formattedDate, date } = useCurrentDate();
  const isBoys = hostelType === 'boys';

  // For Ladies Hostel, Week 2 is the active running schedule by default
  const defaultWeek = isBoys ? 1 : 2;
  const [selectedWeek, setSelectedWeek] = useState<number>(defaultWeek);
  const [filter, setFilter] = useState<MealFilter>('all');

  // Today's menu for the selected week
  const todayMenu = getTodayMenu(hostelType, date, selectedWeek);
  const nextMealInfo = useNextMeal(hostelType, selectedWeek);

  // Filter meals if student selects Veg or Non-Veg focus
  const filteredMeals = todayMenu?.meals.filter((m) => {
    if (filter === 'veg') return m.vegetarian || (m.vegOptions && m.vegOptions.length > 0);
    if (filter === 'non-veg') return m.hasNonVegOption;
    return true;
  });

  return (
    <div className="space-y-4 sm:space-y-5">
      
      {/* Compact Top Header: Name + Live Date + Quick Weekly Link */}
      <section className="bg-white rounded-2xl p-3.5 sm:p-5 border border-gray-100 shadow-2xs">
        <div className="flex items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-1.5 mb-1 flex-wrap">
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold uppercase tracking-wider ${
                  isBoys ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800'
                }`}
              >
                {hostel.residenceLabel}
              </span>
              {!isBoys && (
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#FDF2F8] text-[#DB2777] border border-[#FCE7F3] shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777] animate-pulse shrink-0" />
                  <span>Week 2 — Active Menu</span>
                </span>
              )}
              <span className="text-[11px] text-gray-500 font-medium hidden xs:inline">
                ITER Campus-1
              </span>
            </div>

            <h1 className="font-heading text-xl sm:text-2.5xl font-extrabold text-gray-950 tracking-tight">
              {greeting}!
            </h1>
          </div>

          {/* Dynamic Date & Schedule Link */}
          <div className="text-right flex flex-col items-end gap-1">
            <div
              className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg border ${
                isBoys
                  ? 'bg-blue-50/80 border-blue-100 text-blue-900'
                  : 'bg-pink-50/80 border-pink-100 text-pink-900'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{formattedDate}</span>
            </div>

            <Link
              to={`/${hostelType}/weekly`}
              className={`inline-flex items-center gap-0.5 text-[11px] font-bold transition-colors ${
                isBoys ? 'text-blue-700 hover:text-blue-900' : 'text-pink-700 hover:text-pink-900'
              }`}
            >
              <span>Weekly Schedule</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Live Meal Status Beacon (Compact single-line banner) */}
        {nextMealInfo.meal && (
          <div
            className={`mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs font-semibold ${
              nextMealInfo.isCurrentlyServing
                ? 'text-emerald-800'
                : isBoys
                ? 'text-blue-800'
                : 'text-pink-800'
            }`}
          >
            <div className="flex items-center gap-1.5 truncate">
              {nextMealInfo.isCurrentlyServing ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shrink-0" />
                  <span className="truncate">Serving Now: <strong>{nextMealInfo.meal.name}</strong></span>
                </>
              ) : (
                <>
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">Up Next: <strong>{nextMealInfo.meal.name}</strong> ({nextMealInfo.meal.startTime})</span>
                </>
              )}
            </div>
            <span className="text-[11px] font-bold shrink-0 ml-2 opacity-90">
              {nextMealInfo.timeNote}
            </span>
          </div>
        )}
      </section>

      {/* Week Selector for Ladies Hostel */}
      {!isBoys && (
        <WeekSelector
          selectedWeek={selectedWeek}
          onSelectWeek={setSelectedWeek}
          hostelType={hostelType}
          totalWeeks={hostel.totalWeeks}
          activeWeek={2}
        />
      )}

      {/* Meals Action Bar: Section Title + Dietary Filter */}
      <div className="flex items-center justify-between gap-2 px-1">
        <h2 className="font-heading text-lg font-bold text-gray-900 tracking-tight">
          Today's Meals
        </h2>

        {/* Dietary Filter Segmented Pill */}
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

      {/* Four Meal Cards: Breakfast, Lunch, Snacks, Dinner — Content-first mobile layout */}
      {filteredMeals && filteredMeals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4.5">
          {filteredMeals.map((meal) => (
            <MealCard
              key={meal.id}
              meal={meal}
              hostelType={hostelType}
              isNext={nextMealInfo.meal?.id === meal.id && !nextMealInfo.isCurrentlyServing}
              isServingNow={nextMealInfo.meal?.id === meal.id && nextMealInfo.isCurrentlyServing}
            />
          ))}
        </div>
      ) : (
        <EmptyMenuState
          hostelType={hostelType}
          title={filter !== 'all' ? `No ${filter} meals scheduled` : undefined}
          description={filter !== 'all' ? `Try switching back to "All" to view the full meal plan.` : undefined}
        />
      )}

    </div>
  );
};

export const BoysDashboard: React.FC = () => <HostelDashboard hostelType="boys" />;
export const GirlsDashboard: React.FC = () => <HostelDashboard hostelType="girls" />;
