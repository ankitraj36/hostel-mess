import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, Info } from 'lucide-react';
import { HostelType } from '../data/menuTypes';
import { getHostelInfo, getTodayMenu } from '../data';
import { useCurrentDate } from '../hooks/useCurrentDate';
import { MealCard } from '../components/MealCard';
import { NextMealCard } from '../components/NextMealCard';
import { EmptyMenuState } from '../components/EmptyMenuState';

interface HostelDashboardProps {
  hostelType: HostelType;
}

export const HostelDashboard: React.FC<HostelDashboardProps> = ({ hostelType }) => {
  const hostel = getHostelInfo(hostelType);
  const { greeting, formattedDate, date } = useCurrentDate();
  const todayMenu = getTodayMenu(hostelType, date);
  const isBoys = hostelType === 'boys';

  return (
    <div className="space-y-6">
      
      {/* Welcome & Live Date Header */}
      <section className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider ${
                  isBoys ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800'
                }`}
              >
                {hostel.residenceLabel}
              </span>
              <span className="text-xs text-gray-500 font-medium">
                {hostel.diningHall}
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              {greeting}!
            </h1>

            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              Here's what's cooking in {hostel.name} today.
            </p>
          </div>

          {/* Dynamic Date Badge */}
          <div
            className={`self-start sm:self-auto px-3.5 py-2 rounded-xl text-left sm:text-right border ${
              isBoys
                ? 'bg-blue-50/70 border-blue-100 text-blue-900'
                : 'bg-pink-50/70 border-pink-100 text-pink-900'
            }`}
          >
            <div className="flex items-center sm:justify-end gap-1.5 text-xs font-bold">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formattedDate}</span>
            </div>
            <p className="text-[11px] opacity-75 mt-0.5 font-medium">
              Daily Mess Schedule
            </p>
          </div>
        </div>
      </section>

      {/* Up Next / Live Status Feature */}
      <NextMealCard hostelType={hostelType} />

      {/* Today's Meals Section */}
      <section aria-labelledby="todays-menu-heading">
        <div className="flex items-center justify-between mb-4 px-1">
          <div>
            <h2 id="todays-menu-heading" className="font-heading text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
              Today's Menu
            </h2>
            <p className="text-xs text-gray-500">
              4 fresh daily meals prepared on campus
            </p>
          </div>

          <Link
            to={`/${hostelType}/weekly`}
            className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
              isBoys
                ? 'text-blue-700 bg-blue-50 hover:bg-blue-100'
                : 'text-pink-700 bg-pink-50 hover:bg-pink-100'
            }`}
          >
            <span>Weekly Schedule</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Meal Cards Display */}
        {todayMenu && todayMenu.meals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {todayMenu.meals.map((meal) => (
              <MealCard
                key={meal.id}
                meal={meal}
                hostelType={hostelType}
              />
            ))}
          </div>
        ) : (
          <EmptyMenuState hostelType={hostelType} />
        )}
      </section>

      {/* Dining Hall Notice Box */}
      <section
        className={`p-4 rounded-xl border text-xs sm:text-sm flex items-start gap-3 ${
          isBoys
            ? 'bg-blue-50/50 border-blue-100 text-blue-900'
            : 'bg-pink-50/50 border-pink-100 text-pink-900'
        }`}
      >
        <Info className="w-4 h-4 shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="font-semibold">{hostel.timingNotice}</p>
          <p className="text-[11px] opacity-80 mt-0.5">
            Meals are strictly served during specified windows. Contact mess warden for special dietary accommodations.
          </p>
        </div>
      </section>

    </div>
  );
};

export const BoysDashboard: React.FC = () => <HostelDashboard hostelType="boys" />;
export const GirlsDashboard: React.FC = () => <HostelDashboard hostelType="girls" />;
