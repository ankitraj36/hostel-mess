import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, ArrowLeft } from 'lucide-react';
import { Header } from '../components/Header';
import { BottomNavigation } from '../components/BottomNavigation';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-700 mb-4">
          <UtensilsCrossed className="w-8 h-8" />
        </div>

        <h1 className="font-heading text-4xl font-extrabold text-gray-950 mb-2">
          404
        </h1>

        <h2 className="font-heading text-lg font-bold text-gray-800 mb-2">
          Page Not Found
        </h2>

        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          The mess menu or page you are looking for does not exist or has been relocated.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white hover:bg-gray-800 text-sm font-semibold transition-all shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </main>

      <BottomNavigation />
    </div>
  );
};

