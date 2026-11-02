import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, Users, Sparkles } from 'lucide-react';
import { HostelInfo } from '../data/menuTypes';

interface HostelSelectionCardProps {
  hostel: HostelInfo;
  imageSrc: string;
}

export const HostelSelectionCard: React.FC<HostelSelectionCardProps> = ({
  hostel,
  imageSrc,
}) => {
  const isBoys = hostel.id === 'boys';

  const handleSelectHostel = () => {
    localStorage.setItem('hostel_mess_preferred', hostel.id);
  };

  return (
    <Link
      to={`/${hostel.id}`}
      onClick={handleSelectHostel}
      className={`group relative flex flex-col justify-between rounded-2xl p-4 sm:p-5 sm:pb-6 transition-all duration-200 border text-left overflow-hidden active:scale-[0.985] focus-visible:outline-none focus-visible:ring-4 ${
        isBoys
          ? 'bg-[#EFF6FF] border-blue-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 focus-visible:ring-blue-300'
          : 'bg-[#FDF2F8] border-pink-200/90 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-500/10 focus-visible:ring-pink-300'
      }`}
    >
      {/* Top Header Label & Rotation Badge */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span
          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
            isBoys ? 'bg-blue-600 text-white' : 'bg-pink-600 text-white'
          }`}
        >
          <Sparkles className="w-3 h-3" />
          <span>{hostel.residenceLabel}</span>
        </span>
        <span
          className={`inline-flex items-center gap-1 text-[11px] font-semibold ${
            isBoys ? 'text-blue-900/80' : 'text-pink-900/80'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>{hostel.capacity}</span>
        </span>
      </div>

      {/* Image Showcase - Compact height on mobile to ensure above-the-fold visibility */}
      <div className="relative w-full h-36 sm:h-44 md:h-48 rounded-xl overflow-hidden mb-3.5 bg-white/70 shadow-2xs">
        <img
          src={imageSrc}
          alt={`${hostel.name} campus dining`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        
        {/* Dining Hall Location Pin Badge */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5 text-white text-xs font-semibold bg-black/45 backdrop-blur-md px-2.5 py-1 rounded-lg">
          <MapPin className="w-3.5 h-3.5 shrink-0 text-white" />
          <span className="truncate">{hostel.diningHall}</span>
        </div>
      </div>

      {/* Card Content & Heading */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3
            className={`font-heading text-xl sm:text-2xl font-bold tracking-tight mb-1.5 group-hover:translate-x-0.5 transition-transform ${
              isBoys ? 'text-blue-950' : 'text-pink-950'
            }`}
          >
            {hostel.name}
          </h3>
          <p
            className={`text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2 ${
              isBoys ? 'text-blue-900/80' : 'text-pink-900/80'
            }`}
          >
            {hostel.description}
          </p>
        </div>

        {/* Timings & Rotation Highlights */}
        <div
          className={`flex items-center justify-between text-xs font-semibold px-2.5 py-1.5 rounded-lg mb-4 ${
            isBoys ? 'bg-blue-100/70 text-blue-900' : 'bg-pink-100/70 text-pink-900'
          }`}
        >
          <div className="flex items-center gap-1.5 truncate">
            <Clock className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Breakfast, Lunch, Snacks & Dinner</span>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider shrink-0 ml-1.5 px-1.5 py-0.5 rounded bg-white/80 shadow-2xs">
            {isBoys ? 'Weekly' : '4-Week'}
          </span>
        </div>

        {/* Strong CTA Button */}
        <div
          className={`w-full py-2.5 sm:py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 text-white transition-all duration-200 shadow-sm min-h-[44px] ${
            isBoys
              ? 'bg-[#2563EB] group-hover:bg-[#1D4ED8] group-hover:shadow-md group-hover:shadow-blue-500/25'
              : 'bg-[#DB2777] group-hover:bg-[#BE185D] group-hover:shadow-md group-hover:shadow-pink-500/25'
          }`}
        >
          <span>Explore {isBoys ? 'Boys' : 'Girls'} Menu</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};
