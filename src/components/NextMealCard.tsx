import React from 'react';
import { Sparkles, Clock } from 'lucide-react';
import { HostelType } from '../data/menuTypes';
import { useNextMeal } from '../hooks/useNextMeal';
import { FoodImage } from './FoodImage';

interface NextMealCardProps {
  hostelType: HostelType;
  weekNumber?: number;
}

export const NextMealCard: React.FC<NextMealCardProps> = ({ hostelType, weekNumber }) => {
  const { meal, isCurrentlyServing, isTomorrow, timeNote, targetDayName } = useNextMeal(hostelType, weekNumber);
  const isBoys = hostelType === 'boys';

  if (!meal) {
    return null;
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border transition-all duration-300 p-4 sm:p-5 mb-6 ${
        isBoys
          ? 'bg-gradient-to-br from-blue-50/90 via-white to-blue-50/40 border-blue-200/90 shadow-sm'
          : 'bg-gradient-to-br from-pink-50/90 via-white to-pink-50/40 border-pink-200/90 shadow-sm'
      }`}
    >
      {/* Top Banner Row */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
              isCurrentlyServing
                ? 'bg-emerald-600 text-white shadow-xs'
                : isBoys
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-pink-600 text-white shadow-xs'
            }`}
          >
            {isCurrentlyServing ? (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>Serving Now</span>
              </>
            ) : isTomorrow ? (
              <>
                <Clock className="w-3 h-3" />
                <span>Tomorrow Morning</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3 h-3" />
                <span>Up Next</span>
              </>
            )}
          </span>

          <span
            className={`text-xs font-semibold ${
              isBoys ? 'text-blue-900/70' : 'text-pink-900/70'
            }`}
          >
            {targetDayName}
          </span>
        </div>

        {/* Dynamic Countdown / Time Note */}
        <div
          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full ${
            isCurrentlyServing
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              : isBoys
              ? 'bg-blue-100/60 text-blue-800'
              : 'bg-pink-100/60 text-pink-800'
          }`}
        >
          <Clock className="w-3.5 h-3.5" />
          <span>{timeNote}</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex items-center gap-3.5 sm:gap-4">
        {/* Compact Food Thumbnail */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl overflow-hidden shadow-xs relative">
          <FoodImage
            src={meal.image}
            alt={meal.name}
            mealType={meal.type}
            className="w-full h-full"
          />
        </div>

        {/* Text Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 mb-1 flex-wrap">
            <h4 className="font-heading text-lg sm:text-xl font-bold text-gray-900 capitalize">
              {meal.name}
            </h4>
            <span className="text-xs text-gray-500 font-medium">
              ({meal.startTime} – {meal.endTime})
            </span>
          </div>

          {/* Quick Item Summary */}
          {meal.vegOptions && meal.vegOptions.length > 0 ? (
            <div className="text-xs space-y-0.5 text-gray-700">
              <p className="truncate">
                <span className="font-bold text-emerald-700">Veg:</span> {meal.vegOptions.join(', ')}
              </p>
              {meal.nonVegOptions && meal.nonVegOptions.length > 0 && (
                <p className="truncate">
                  <span className="font-bold text-rose-700">Non-Veg:</span> {meal.nonVegOptions.join(', ')}
                </p>
              )}
            </div>
          ) : (
            <p className="text-xs sm:text-sm text-gray-700 line-clamp-2 leading-relaxed">
              <span className="font-medium text-gray-900">Featured items: </span>
              {meal.items.slice(0, 4).join(', ')}
              {meal.items.length > 4 ? ` and +${meal.items.length - 4} more` : ''}
            </p>
          )}

          {meal.specialNote && (
            <p
              className={`text-[11px] font-semibold mt-1.5 truncate ${
                isBoys ? 'text-blue-700' : 'text-pink-700'
              }`}
            >
              ★ {meal.specialNote}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
