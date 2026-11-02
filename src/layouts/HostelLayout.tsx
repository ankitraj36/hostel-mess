import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { HostelType } from '../data/menuTypes';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BottomNavigation } from '../components/BottomNavigation';

interface HostelLayoutProps {
  hostelType?: HostelType;
  children?: React.ReactNode;
}

export const HostelLayout: React.FC<HostelLayoutProps> = ({ hostelType, children }) => {
  useEffect(() => {
    if (hostelType) {
      localStorage.setItem('hostel_mess_preferred', hostelType);
      document.documentElement.classList.remove('boys-theme', 'girls-theme');
      document.documentElement.classList.add(`${hostelType}-theme`);
    } else {
      document.documentElement.classList.remove('boys-theme', 'girls-theme');
    }
  }, [hostelType]);

  const isBoys = hostelType === 'boys';
  const isGirls = hostelType === 'girls';

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-200 ${
        isBoys
          ? 'boys-theme bg-[#F8FAFC]'
          : isGirls
          ? 'girls-theme bg-[#FFF7FA]'
          : 'bg-white'
      }`}
    >
      {/* Universal Sticky Header */}
      <Header hostelType={hostelType} />

      {/* Main Content Area - Generous bottom padding to ensure zero bottom-bar overlap */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-5 md:py-6 pb-28 sm:pb-24 md:pb-12">
        {children || <Outlet />}
      </main>

      {/* Campus Footer with Legal & Cookie Links */}
      <Footer hostelType={hostelType} className={isBoys ? 'bg-blue-50/40' : isGirls ? 'bg-pink-50/40' : ''} />

      {/* Fixed Mobile Bottom Navigation */}
      <BottomNavigation currentHostel={hostelType} />
    </div>
  );
};
