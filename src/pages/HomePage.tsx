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

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 pb-32 sm:pb-28 md:pb-14">
        
        {/* Compact, Modern Hero Section */}
        <section className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 pt-2 sm:pt-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-gray-100 text-gray-700 mb-3 sm:mb-4 border border-gray-200/80 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>CAMPUS DINING COMPANION</span>
          </div>

          <h1 className="font-heading text-3.5xl sm:text-5xl font-extrabold tracking-tight text-gray-950 mb-3 sm:mb-4 leading-[1.12]">
            Good Food. Every Day.
          </h1>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg mx-auto font-medium">
            Your hostel’s daily food menu, just one tap away.
          </p>
        </section>

        {/* Hostel Selection Section */}
        <section className="mb-12" aria-labelledby="choose-hostel-heading">
          <div className="text-center mb-6 sm:mb-8">
            <h2 id="choose-hostel-heading" className="font-heading text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Choose Your Hostel
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Select your residence to view today's live menu and weekly food schedule.
            </p>
          </div>

          {/* Cards: Stacks on mobile, 2 balanced columns on tablet & desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
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

        {/* Campus Dining Highlights for Students */}
        <section className="pt-6 sm:pt-8 border-t border-gray-100 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 text-center">
            
            <div className="p-4 rounded-xl bg-gray-50/80 border border-gray-100 flex flex-col items-center">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-2.5 shadow-2xs">
                <Clock className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-xs font-bold text-gray-900">Live Timing Sync</h3>
              <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                Breakfast, lunch, snacks, and dinner with dynamic "Serving Now" status.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50/80 border border-gray-100 flex flex-col items-center">
              <div className="w-9 h-9 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center mb-2.5 shadow-2xs">
                <CheckCircle2 className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-xs font-bold text-gray-900">Weekly & 4-Week Cycles</h3>
              <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                Boys weekly schedule & Ladies 4-week rotating monthly calendar.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50/80 border border-gray-100 flex flex-col items-center">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2.5 shadow-2xs">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-xs font-bold text-gray-900">Veg & Non-Veg Options</h3>
              <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                Staples (Arua/Usuna), paneer, fish, chicken, egg & sweet desserts.
              </p>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-100 py-6 text-center text-xs text-gray-400 bg-white">
        <p className="font-medium text-gray-500">HOSTEL MESS · Good Food. Every Day.</p>
        <p className="text-[11px] text-gray-400 mt-1">ITER Campus-1 · Siksha 'O' Anusandhan (Deemed to be University), Bhubaneswar</p>
      </footer>

      {/* Mobile Navigation */}
      <BottomNavigation />
    </div>
  );
};
