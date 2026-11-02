import React from 'react';
import { Sparkles, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Header } from '../components/Header';
import { BottomNavigation } from '../components/BottomNavigation';
import { HostelSelectionCard } from '../components/HostelSelectionCard';
import { boysHostelInfo } from '../data/boysMenu';
import { girlsHostelInfo } from '../data/girlsMenu';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Neutral Clean Header */}
      <Header />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 pb-24 md:pb-14">
        
        {/* Compact Hero Section */}
        <section className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-gray-100 text-gray-700 mb-3 sm:mb-4 border border-gray-200/60 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>YOUR CAMPUS FOOD COMPANION</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-950 mb-3 sm:mb-4 leading-[1.15]">
            Good Food. Every Day.
          </h1>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mx-auto">
            Discover what's cooking in your hostel mess. Explore today's meals and weekly food schedule in seconds.
          </p>
        </section>

        {/* Hostel Selection Section */}
        <section className="mb-12" aria-labelledby="choose-hostel-heading">
          <div className="text-center mb-6">
            <h2 id="choose-hostel-heading" className="font-heading text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Choose Your Hostel
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Select your residence to explore today's food menu.
            </p>
          </div>

          {/* Cards: Stacks on mobile, 2 columns on tablet/desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
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

        {/* Value Highlights for College Students */}
        <section className="pt-6 sm:pt-8 border-t border-gray-100 max-w-3xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            
            <div className="p-3.5 rounded-xl bg-gray-50/70 border border-gray-100">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 mx-auto flex items-center justify-center mb-2">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-gray-900">Live Timing Sync</h4>
              <p className="text-[11px] text-gray-500 mt-0.5">Accurate serving slots for 4 daily meals</p>
            </div>

            <div className="p-3.5 rounded-xl bg-gray-50/70 border border-gray-100">
              <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-700 mx-auto flex items-center justify-center mb-2">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-gray-900">Weekly Schedule</h4>
              <p className="text-[11px] text-gray-500 mt-0.5">Full 7-day breakfast to dinner menus</p>
            </div>

            <div className="p-3.5 rounded-xl bg-gray-50/70 border border-gray-100 col-span-2 sm:col-span-1">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-2">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-gray-900">Pure Vegetarian</h4>
              <p className="text-[11px] text-gray-500 mt-0.5">Hygienic campus mess certified diet</p>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-100 py-6 text-center text-xs text-gray-400 bg-white">
        <p className="font-medium text-gray-500">HOSTEL MESS · Campus Food Companion</p>
        <p className="text-[11px] text-gray-400 mt-1">Dedicated mess menus for Boys & Girls Hostels</p>
      </footer>

      {/* Mobile Navigation */}
      <BottomNavigation />
    </div>
  );
};
