import React from 'react';
import { Clock, Leaf, Sparkles, ChefHat } from 'lucide-react';
import { Meal, HostelType } from '../data/menuTypes';
import { FoodImage } from './FoodImage';

interface MealCardProps {
  meal: Meal;
  hostelType: HostelType;
  isNext?: boolean;
  isServingNow?: boolean;
}

export const MealCard: React.FC<MealCardProps> = ({
  meal,
  hostelType,
  isNext = false,
  isServingNow = false,
}) => {
  const isBoys = hostelType === 'boys';

  return (
    <article
      className={`relative group bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
        isServingNow
          ? isBoys
            ? 'ring-2 ring-blue-500 border-blue-200 shadow-md shadow-blue-500/10'
            : 'ring-2 ring-pink-500 border-pink-200 shadow-md shadow-pink-500/10'
          : isNext
          ? isBoys
            ? 'border-blue-300 shadow-sm'
            : 'border-pink-300 shadow-sm'
          : 'border-gray-200/80 hover:border-gray-300 shadow-2xs hover:shadow-sm'
      }`}
    >
      {/* Active / Serving Now Indicator Top Banner */}
      {isServingNow && (
        <div
          className={`w-full py-1 px-3 text-[11px] font-bold uppercase tracking-wider flex items-center justify-between text-white ${
            isBoys ? 'bg-blue-600' : 'bg-pink-600'
          }`}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>Serving Now</span>
          </span>
          <span className="text-[10px] font-medium opacity-90">Until {meal.endTime}</span>
        </div>
      )}

      {/* Main Card Body — Mobile horizontal layout */}
      <div className="p-3.5 sm:p-5 flex flex-row items-start gap-3.5 sm:gap-5">
        
        {/* Food Image (Left side on mobile) */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 relative">
          <FoodImage
            src={meal.image}
            alt={meal.name}
            mealType={meal.type}
            className="w-full h-full shadow-2xs"
          />
          {meal.vegetarian && (
            <div
              className="absolute top-1.5 left-1.5 bg-white/90 backdrop-blur-xs p-1 rounded-md shadow-2xs"
              title="100% Pure Vegetarian"
              aria-label="Vegetarian food"
            >
              <div className="w-3.5 h-3.5 border border-emerald-600 flex items-center justify-center p-[2px]">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              </div>
            </div>
          )}
        </div>

        {/* Meal Details (Right side on mobile) */}
        <div className="flex-1 min-w-0 flex flex-col justify-between self-stretch">
          <div>
            {/* Header: Name + Timing */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
              <div className="flex items-center gap-2">
                <h3 className="font-heading text-base sm:text-lg font-bold text-gray-900 tracking-tight capitalize">
                  {meal.name}
                </h3>
                {isNext && !isServingNow && (
                  <span
                    className={`inline-flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      isBoys ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-pink-50 text-pink-700 border border-pink-200'
                    }`}
                  >
                    <Sparkles className="w-3 h-3" />
                    Up Next
                  </span>
                )}
              </div>

              {/* Meal Time */}
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span>{meal.startTime} – {meal.endTime}</span>
              </div>
            </div>

            {/* Special Note / Highlight */}
            {meal.specialNote && (
              <p
                className={`text-[11px] font-semibold mb-2 inline-flex items-center gap-1 ${
                  isBoys ? 'text-blue-700' : 'text-pink-700'
                }`}
              >
                <ChefHat className="w-3 h-3" />
                <span>{meal.specialNote}</span>
              </p>
            )}

            {/* Food Items List */}
            <div className="mt-1">
              <ul className="flex flex-wrap gap-1.5">
                {meal.items.map((item, index) => (
                  <li
                    key={index}
                    className="inline-flex items-center text-xs font-medium text-gray-700 bg-gray-50 border border-gray-100 rounded-md px-2 py-0.5 hover:bg-gray-100 transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
            <span className="flex items-center gap-1 text-emerald-700 font-medium">
              <Leaf className="w-3 h-3 text-emerald-600" />
              <span>Pure Vegetarian</span>
            </span>
            {meal.nutritionTag && (
              <span className="hidden sm:inline text-gray-400 font-normal">
                {meal.nutritionTag}
              </span>
            )}
          </div>
        </div>

      </div>
    </article>
  );
};
