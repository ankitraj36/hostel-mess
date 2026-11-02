import React from 'react';
import { Sparkles, UtensilsCrossed } from 'lucide-react';
import { Header } from '../components/Header';
import { BottomNavigation } from '../components/BottomNavigation';
import { HostelSelectionCard } from '../components/HostelSelectionCard';
import { boysHostelInfo } from '../data/boysMenu';
import { girlsHostelInfo } from '../data/girlsMenu';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Desktop Top Header (hidden on mobile to prioritize mobile viewport and thumb zone) */}
      <Header />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8 pb-28 md:pb-12 flex flex-col justify-center">
        
        {/* Mobile Brand Wordmark for immediate recognition when desktop header is hidden */}
        <div className="flex md:hidden items-center justify-center gap-2 mb-3 pt-2">
          <div className="w-8 h-8 rounded-xl bg-gray-900 text-white flex items-center justify-center shadow-xs">
            <UtensilsCrossed className="w-4 h-4" />
          </div>
          <span className="font-heading font-extrabold text-base tracking-tight uppercase text-gray-950">
            HOSTEL MESS
          </span>
        </div>

        {/* Concise Hero Section — Content prioritized for mobile */}
        <section className="text-center max-w-2xl mx-auto mb-5 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-widest uppercase bg-gray-100 text-gray-700 mb-2 border border-gray-200/80">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <span>CAMPUS DINING</span>
          </div>

          <h1 className="font-heading text-2.5xl sm:text-4xl lg:text-4.5xl font-extrabold tracking-tight text-gray-950 mb-1.5 sm:mb-2 leading-tight">
            Good Food. Every Day.
          </h1>

          <p className="text-xs sm:text-sm text-gray-600 font-medium max-w-md mx-auto">
            Your hostel’s daily food menu, just one tap away.
          </p>
        </section>

        {/* Hostel Selection Cards — Stack on phones (< 600px), 2 columns on tablet/desktop (>= 768px) */}
        <section className="mb-4 sm:mb-6" aria-label="Hostel Selection">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <HostelSelectionCard
              hostel={boysHostelInfo}
              imageSrc="https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?auto=format&fit=crop&w=800&q=80"
            />
            <HostelSelectionCard
              hostel={girlsHostelInfo}
              imageSrc="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </section>

        {/* Minimal Campus Footer Note */}
        <footer className="text-center text-[11px] text-gray-400 mt-2 sm:mt-4">
          <p className="font-medium text-gray-500">ITER Campus-1 · Siksha 'O' Anusandhan, Bhubaneswar</p>
        </footer>

      </main>

      {/* Thumb-friendly Mobile Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};
