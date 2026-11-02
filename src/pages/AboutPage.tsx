import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ShieldCheck, Sparkles, ChefHat, Building2 } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BottomNavigation } from '../components/BottomNavigation';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 pb-32 sm:pb-28 md:pb-14">
        {/* Back Link */}
        <div className="mb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded-md"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-blue-50 text-blue-700 mb-3 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAMPUS DIGITAL PLATFORM</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight mb-2">
            About Hostel Mess
          </h1>

          <p className="text-sm sm:text-base text-gray-600 font-medium">
            Your campus food companion. Good Food. Every Day.
          </p>
        </section>

        {/* Purpose Card */}
        <section className="bg-gray-50/80 rounded-2xl p-5 sm:p-6 border border-gray-200/80 mb-8">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span>ITER · Siksha 'O' Anusandhan (Deemed to be University)</span>
          </div>
          <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-4">
            <span className="font-bold text-gray-950">HOSTEL MESS</span> was built specifically for students of <strong>ITER Campus-1, Bhubaneswar</strong> to eliminate the daily guesswork of mess food. Designed with a mobile-first philosophy, students can open the web app, select their residence, and view what's cooking within seconds.
          </p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            With dedicated portals for <strong>ITER Boys' Hostel (Blue Theme · Weekly Rotation)</strong> and <strong>ITER Ladies' Hostel (Pink Theme · 4-Week Monthly Cycle)</strong>, the platform ensures every resident stays informed about meal timings, live serving statuses, veg & non-veg options, and dessert specials.
          </p>
        </section>

        {/* Key Features List */}
        <section className="mb-8">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-gray-900 mb-4">
            Platform Capabilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">Live Timing & Status Sync</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Dynamic countdowns to upcoming meals and real-time "Serving Now" alerts for all 4 daily slots.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center mb-2.5">
                <Calendar className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">Monthly 4-Week & Weekly Cycles</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Seamlessly browse across Week 1, 2, 3, and 4 for Ladies Hostel, and weekly schedules for Boys Hostel.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">Veg & Non-Veg Categorization</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Instantly view common staples, pure veg options, non-veg choices (Fish, Chicken, Egg), and desserts.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-2.5">
                <ChefHat className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">Campus Mess Quality Standards</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Strict compliance with branded sweet pickle, homemade papad, and certified dairy (Pragati / Omfed).
              </p>
            </div>
          </div>
        </section>

        {/* Standard Mess Schedule Reference */}
        <section className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-2xs mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900">
              Daily Campus Dining Hours
            </h2>
            <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
              ITER Campus-1
            </span>
          </div>

          <div className="divide-y divide-gray-100 text-xs sm:text-sm">
            <div className="py-2.5 flex justify-between items-center">
              <span className="font-semibold text-gray-800">Breakfast</span>
              <span className="text-gray-600 font-bold bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                7:30 AM – 9:00 AM
              </span>
            </div>
            <div className="py-2.5 flex justify-between items-center">
              <span className="font-semibold text-gray-800">Lunch</span>
              <span className="text-gray-600 font-bold bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                12:30 PM – 2:00 PM
              </span>
            </div>
            <div className="py-2.5 flex justify-between items-center">
              <span className="font-semibold text-gray-800">Evening Snacks</span>
              <span className="text-gray-600 font-bold bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                4:30 PM – 5:30 PM
              </span>
            </div>
            <div className="py-2.5 flex justify-between items-center">
              <span className="font-semibold text-gray-800">Dinner</span>
              <span className="text-gray-600 font-bold bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                7:30 PM – 9:00 PM
              </span>
            </div>
          </div>
        </section>

        {/* Mess Fee & Rebate Policy Section */}
        <section className="mb-8">
          <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-5 sm:p-6 text-xs text-gray-700 space-y-2">
            <h3 className="font-heading font-bold text-sm text-blue-950 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              Mess Dining Fee, Rebate & Refund Guidelines
            </h3>
            <p className="text-blue-900/90 leading-relaxed">
              <strong>Informational Platform:</strong> HOSTEL MESS is a completely free student service and does not collect payments, dining card recharges, or subscription fees online.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Mess Rebates:</strong> Any hostel mess rebates (for authorized leaves, internships, semester breaks, or medical absences exceeding the university threshold) must be claimed physically through written application endorsed by the Hostel Warden and submitted to the <strong>Office of the Chief Warden, ITER Campus-1</strong>.
            </p>
          </div>
        </section>

        {/* Return Button */}
        <div className="text-center pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 font-bold text-sm transition-all shadow-xs active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Hostel Selection</span>
          </Link>
        </div>
      </main>

      <Footer />

      <BottomNavigation />
    </div>
  );
};
