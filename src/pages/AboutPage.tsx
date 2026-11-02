import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ShieldCheck, Sparkles, ChefHat } from 'lucide-react';
import { Header } from '../components/Header';
import { BottomNavigation } from '../components/BottomNavigation';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10 pb-24 md:pb-12">
        {/* Back Link */}
        <div className="mb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors"
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

          <p className="text-base text-gray-600 font-medium">
            Your campus food companion. Good Food. Every Day.
          </p>
        </section>

        {/* Purpose Card */}
        <section className="bg-gray-50/80 rounded-2xl p-5 sm:p-6 border border-gray-200/80 mb-8">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            <span className="font-bold text-gray-900">HOSTEL MESS</span> was built specifically for students of <strong>ITER, Siksha 'O' Anusandhan (Deemed to be University), Bhubaneswar</strong> to eliminate the daily guesswork of mess food. Designed with a mobile-first philosophy, students can open the web app, select their residence, and view what's being served within seconds.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            With separate, tailored dining portals for <strong>ITER Boys' Hostel (Blue Theme · Weekly Rotation)</strong> and <strong>ITER Ladies' Hostel (Pink Theme · 4-Week Monthly Rotation)</strong>, the platform ensures every student stays informed regarding meal times, live dining statuses, veg & non-veg options, and dessert specials.
          </p>
        </section>

        {/* Key Features List */}
        <section className="mb-8">
          <h2 className="font-heading text-lg font-bold text-gray-900 mb-4">
            What You Can Do
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">View Daily Meal Schedules</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Check exact timings for Breakfast, Lunch, Evening Snacks, and Dinner.
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
              <h3 className="text-sm font-bold text-gray-900">Live Status & "Up Next"</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Dynamic indicators display the active meal or countdown to the next scheduled mess service.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-2.5">
                <ChefHat className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">Veg & Non-Veg Offerings</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Daily common staples (Usuna & Arua rice), choice of fish, chicken, egg, paneer, and sweets.
              </p>
            </div>
          </div>
        </section>

        {/* Standard Mess Schedule Reference */}
        <section className="bg-white rounded-2xl p-5 border border-gray-200 shadow-2xs mb-8">
          <h2 className="font-heading text-base font-bold text-gray-900 mb-3">
            Standard Campus Dining Schedule
          </h2>
          <div className="divide-y divide-gray-100 text-xs sm:text-sm">
            <div className="py-2 flex justify-between items-center">
              <span className="font-medium text-gray-700">Breakfast</span>
              <span className="text-gray-500 font-semibold">7:30 AM – 9:00 AM</span>
            </div>
            <div className="py-2 flex justify-between items-center">
              <span className="font-medium text-gray-700">Lunch</span>
              <span className="text-gray-500 font-semibold">12:30 PM – 2:00 PM</span>
            </div>
            <div className="py-2 flex justify-between items-center">
              <span className="font-medium text-gray-700">Evening Snacks</span>
              <span className="text-gray-500 font-semibold">4:30 PM – 5:30 PM</span>
            </div>
            <div className="py-2 flex justify-between items-center">
              <span className="font-medium text-gray-700">Dinner</span>
              <span className="text-gray-500 font-semibold">7:30 PM – 9:00 PM</span>
            </div>
          </div>
        </section>

        {/* Return Button */}
        <div className="text-center pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 font-semibold text-sm transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Hostel Selection</span>
          </Link>
        </div>
      </main>

      <footer className="w-full border-t border-gray-100 py-6 text-center text-xs text-gray-400 bg-white">
        <p className="font-medium text-gray-500">HOSTEL MESS · Good Food. Every Day.</p>
      </footer>

      <BottomNavigation />
    </div>
  );
};
