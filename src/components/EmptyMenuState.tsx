import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, ArrowLeft, RefreshCw } from 'lucide-react';
import { HostelType } from '../data/menuTypes';

interface EmptyMenuStateProps {
  hostelType?: HostelType;
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export const EmptyMenuState: React.FC<EmptyMenuStateProps> = ({
  hostelType = 'boys',
  title = 'Menu Not Updated Yet',
  description = "The food menu for this day hasn't been published.",
  onRetry,
}) => {
  const isBoys = hostelType === 'boys';

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 sm:p-12 my-6 bg-white rounded-2xl border border-gray-200/80 shadow-xs max-w-lg mx-auto">
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
          isBoys ? 'bg-blue-50 text-blue-600' : 'bg-pink-50 text-pink-600'
        }`}
      >
        <ChefHat className="w-8 h-8" />
      </div>

      <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed max-w-sm mb-6">
        {description}
      </p>

      <div className="flex items-center gap-3">
        {onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Check Again</span>
          </button>
        )}

        <Link
          to={`/${hostelType}`}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all shadow-xs ${
            isBoys
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-pink-600 hover:bg-pink-700'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Today's Menu</span>
        </Link>
      </div>
    </div>
  );
};

export const MenuSkeletonList: React.FC = () => {
  return (
    <div className="space-y-4 animate-pulse">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 flex items-start gap-4"
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gray-200 rounded-xl shrink-0" />
          <div className="flex-1 space-y-3 py-1">
            <div className="h-4 bg-gray-200 rounded w-1/3" />
            <div className="h-3 bg-gray-100 rounded w-1/4" />
            <div className="flex gap-2">
              <div className="h-5 bg-gray-100 rounded w-16" />
              <div className="h-5 bg-gray-100 rounded w-20" />
              <div className="h-5 bg-gray-100 rounded w-14" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
