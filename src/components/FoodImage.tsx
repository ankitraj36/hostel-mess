import React, { useState } from 'react';
import { Utensils, Coffee, Soup, Sparkles } from 'lucide-react';
import { MealType } from '../data/menuTypes';

interface FoodImageProps {
  src?: string;
  alt: string;
  mealType?: MealType;
  className?: string;
}

export const FoodImage: React.FC<FoodImageProps> = ({
  src,
  alt,
  mealType = 'lunch',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Meal-specific fallback styling and icons
  const getFallbackIcon = () => {
    switch (mealType) {
      case 'breakfast':
        return <Coffee className="w-8 h-8 opacity-70" />;
      case 'lunch':
        return <Utensils className="w-8 h-8 opacity-70" />;
      case 'snacks':
        return <Sparkles className="w-8 h-8 opacity-70" />;
      case 'dinner':
        return <Soup className="w-8 h-8 opacity-70" />;
      default:
        return <Utensils className="w-8 h-8 opacity-70" />;
    }
  };

  const getFallbackGradient = () => {
    switch (mealType) {
      case 'breakfast':
        return 'from-amber-100 to-orange-50 text-amber-800';
      case 'lunch':
        return 'from-emerald-100 to-teal-50 text-emerald-800';
      case 'snacks':
        return 'from-purple-100 to-pink-50 text-purple-800';
      case 'dinner':
        return 'from-blue-100 to-indigo-50 text-blue-800';
      default:
        return 'from-gray-100 to-gray-200 text-gray-700';
    }
  };

  if (!src || hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br ${getFallbackGradient()} rounded-xl relative overflow-hidden select-none ${className}`}
        aria-label={alt}
      >
        <div className="p-3 bg-white/70 backdrop-blur-xs rounded-full shadow-xs mb-1">
          {getFallbackIcon()}
        </div>
        <span className="text-[11px] font-medium uppercase tracking-wider opacity-80 px-2 text-center line-clamp-1">
          {mealType}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-xl bg-gray-100 ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
          isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'
        }`}
      />
    </div>
  );
};
