import React from 'react';
import { Clock, Leaf, Sparkles, Drumstick, UtensilsCrossed, Cake, Coffee, Sun, Moon } from 'lucide-react';
import { Meal, HostelType, MealType } from '../data/menuTypes';
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
  const hasCategories =
    (meal.vegOptions && meal.vegOptions.length > 0) ||
    (meal.nonVegOptions && meal.nonVegOptions.length > 0) ||
    (meal.commonItems && meal.commonItems.length > 0);

  const getMealTypeIcon = (type: MealType) => {
    switch (type) {
      case 'breakfast':
        return <Coffee className="w-3.5 h-3.5 text-amber-600" />;
      case 'lunch':
        return <Sun className="w-3.5 h-3.5 text-orange-500" />;
      case 'snacks':
        return <Sparkles className="w-3.5 h-3.5 text-purple-600" />;
      case 'dinner':
        return <Moon className="w-3.5 h-3.5 text-indigo-600" />;
    }
  };

  return (
    <article
      className={`relative group bg-white rounded-2xl border transition-all duration-200 overflow-hidden flex flex-col justify-between ${
        isServingNow
          ? isBoys
            ? 'ring-2 ring-blue-500 border-blue-300 shadow-md shadow-blue-500/10'
            : 'ring-2 ring-pink-500 border-pink-300 shadow-md shadow-pink-500/10'
          : isNext
          ? isBoys
            ? 'border-blue-300/80 shadow-xs'
            : 'border-pink-300/80 shadow-xs'
          : 'border-gray-200/80 hover:border-gray-300 shadow-2xs hover:shadow-sm'
      }`}
    >
      {/* Active / Serving Now Indicator Top Banner */}
      {isServingNow && (
        <div
          className={`w-full py-1.5 px-3.5 text-[11px] font-bold uppercase tracking-wider flex items-center justify-between text-white ${
            isBoys ? 'bg-blue-600' : 'bg-pink-600'
          }`}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>Serving Now</span>
          </span>
          <span className="text-[10px] font-medium opacity-90">Closes at {meal.endTime}</span>
        </div>
      )}

      {/* Main Card Content */}
      <div className="p-3.5 sm:p-4.5 flex flex-row items-start gap-3 sm:gap-4.5">
        
        {/* Food Image with Veg/Non-Veg Indicator */}
        <div className="w-22 h-22 sm:w-28 sm:h-28 shrink-0 relative rounded-xl overflow-hidden shadow-2xs">
          <FoodImage
            src={meal.image}
            alt={meal.name}
            mealType={meal.type}
            className="w-full h-full"
          />
          {/* Pure Veg or Non-Veg Available Indicator Dot */}
          <div
            className="absolute top-1.5 left-1.5 bg-white/95 backdrop-blur-xs p-1 rounded-md shadow-2xs border border-gray-100"
            title={meal.hasNonVegOption ? 'Veg & Non-Veg Available' : 'Pure Vegetarian'}
          >
            {meal.hasNonVegOption ? (
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 border border-emerald-600 flex items-center justify-center p-[1px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                </div>
                <div className="w-3 h-3 border border-rose-600 flex items-center justify-center p-[1px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-600" />
                </div>
              </div>
            ) : (
              <div className="w-3 h-3 border border-emerald-600 flex items-center justify-center p-[1px]">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              </div>
            )}
          </div>
        </div>

        {/* Meal Details */}
        <div className="flex-1 min-w-0">
          {/* Header Row: Name + Meal Type Icon + Timings */}
          <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1 mb-2">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="p-1 rounded-md bg-gray-50 border border-gray-100 shrink-0">
                {getMealTypeIcon(meal.type)}
              </span>
              <h3 className="font-heading text-base sm:text-lg font-bold text-gray-900 tracking-tight capitalize">
                {meal.name}
              </h3>
              {isNext && !isServingNow && (
                <span
                  className={`inline-flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    isBoys
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'bg-pink-50 text-pink-700 border border-pink-200'
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  Up Next
                </span>
              )}
            </div>

            {/* Meal Time Tag */}
            <div className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-gray-500 shrink-0 bg-gray-50 px-2 py-0.5 rounded-md border border-gray-100">
              <Clock className="w-3 h-3 text-gray-400" />
              <span>{meal.startTime} – {meal.endTime}</span>
            </div>
          </div>

          {/* Structured Items for Lunch & Dinner */}
          {hasCategories ? (
            <div className="space-y-1.5 text-xs">
              {/* Veg Option */}
              {(meal.vegOptions?.length || 0) > 0 && (
                <div className="flex items-start gap-1.5 leading-snug">
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px] shrink-0 border border-emerald-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    Veg
                  </span>
                  <span className="text-gray-800 font-medium pt-0.5">
                    {meal.vegOptions?.join(', ')}
                  </span>
                </div>
              )}

              {/* Non-Veg Option */}
              {(meal.nonVegOptions?.length || 0) > 0 && (
                <div className="flex items-start gap-1.5 leading-snug">
                  <span className="inline-flex items-center gap-1 font-bold text-rose-800 bg-rose-50 px-1.5 py-0.5 rounded text-[10px] shrink-0 border border-rose-200/60">
                    <Drumstick className="w-2.5 h-2.5 text-rose-600" />
                    Non-Veg
                  </span>
                  <span className="text-gray-800 font-medium pt-0.5">
                    {meal.nonVegOptions?.join(', ')}
                  </span>
                </div>
              )}

              {/* Common Staples & Sides */}
              {((meal.commonItems?.length || 0) > 0 || (meal.sideItems?.length || 0) > 0) && (
                <div className="text-[11px] text-gray-600 leading-snug pt-0.5">
                  <span className="font-semibold text-gray-500 mr-1">Sides & Staples:</span>
                  <span className="text-gray-700">
                    {[...(meal.commonItems || []), ...(meal.sideItems || [])].join(' · ')}
                  </span>
                </div>
              )}

              {/* Dessert */}
              {(meal.desserts?.length || 0) > 0 && (
                <div className="inline-flex items-center gap-1.5 text-[11px] text-amber-900 bg-amber-50/80 px-2 py-0.5 rounded-md border border-amber-200/60 mt-0.5">
                  <Cake className="w-3 h-3 text-amber-600 shrink-0" />
                  <span className="font-bold">Dessert:</span>
                  <span>{meal.desserts?.join(', ')}</span>
                </div>
              )}
            </div>
          ) : (
            /* Flat items list for Breakfast and Snacks */
            <div className="mt-1">
              <ul className="flex flex-wrap gap-1.5">
                {meal.items.map((item, index) => (
                  <li
                    key={index}
                    className="inline-flex items-center text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200/70 rounded-md px-2 py-0.5 hover:bg-gray-100 transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>

      {/* Card Footer Dietary Metadata */}
      <div className="px-3.5 sm:px-4.5 py-2 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between text-[11px] text-gray-500 rounded-b-2xl">
        {meal.hasNonVegOption ? (
          <span className="flex items-center gap-1 text-gray-600 font-medium">
            <UtensilsCrossed className="w-3 h-3 text-gray-400" />
            <span>Veg & Non-Veg Options</span>
          </span>
        ) : (
          <span className="flex items-center gap-1 text-emerald-700 font-medium">
            <Leaf className="w-3 h-3 text-emerald-600" />
            <span>Pure Vegetarian</span>
          </span>
        )}

        {meal.specialNote && (
          <span className="text-[11px] text-gray-500 font-medium truncate max-w-[190px]">
            {meal.specialNote}
          </span>
        )}
      </div>

    </article>
  );
};
