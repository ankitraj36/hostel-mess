import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, Users } from 'lucide-react';
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
      className={`group relative flex flex-col justify-between rounded-2xl p-5 sm:p-6 sm:pb-7 transition-all duration-300 border text-left overflow-hidden active:scale-[0.985] focus-visible:outline-none focus-visible:ring-4 ${
        isBoys
          ? 'bg-[#EFF6FF] border-blue-200/80 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 focus-visible:ring-blue-300'
          : 'bg-[#FDF2F8] border-pink-200/80 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-500/10 focus-visible:ring-pink-300'
      }`}
    >
      {/* Top Header Label & Capacity Badge */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
            isBoys ? 'bg-blue-600 text-white' : 'bg-pink-600 text-white'
          }`}
        >
          {hostel.residenceLabel}
        </span>
        <span
          className={`inline-flex items-center gap-1 text-[11px] font-medium ${
            isBoys ? 'text-blue-800/80' : 'text-pink-800/80'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>{hostel.capacity}</span>
        </span>
      </div>

      {/* Hero Image Showcase */}
      <div className="relative w-full h-40 sm:h-48 rounded-xl overflow-hidden mb-5 bg-white/60 shadow-xs">
        <img
          src={imageSrc}
          alt={`${hostel.name} dining`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
        
        {/* Dynamic Location Pin Badge overlay */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5 text-white/95 text-xs font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
          <MapPin className="w-3.5 h-3.5 shrink-0 text-white" />
          <span className="truncate">{hostel.diningHall}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3
            className={`font-heading text-2xl font-bold tracking-tight mb-2 group-hover:translate-x-0.5 transition-transform ${
              isBoys ? 'text-blue-950' : 'text-pink-950'
            }`}
          >
            {hostel.name}
          </h3>
          <p
            className={`text-sm leading-relaxed mb-5 ${
              isBoys ? 'text-blue-900/80' : 'text-pink-900/80'
            }`}
          >
            {hostel.description}
          </p>
        </div>

        {/* Timings & Rotation Quick Tag */}
        <div
          className={`flex items-center justify-between text-xs font-semibold px-3 py-2 rounded-lg mb-5 ${
            isBoys ? 'bg-blue-100/70 text-blue-800' : 'bg-pink-100/70 text-pink-800'
          }`}
        >
          <div className="flex items-center gap-1.5 truncate">
            <Clock className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">4 Meals Daily (7:30 AM – 9:00 PM)</span>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider shrink-0 ml-2 px-1.5 py-0.5 rounded bg-white/70">
            {isBoys ? 'Weekly Rotation' : '4-Week Monthly'}
          </span>
        </div>

        {/* CTA Button */}
        <div
          className={`w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 text-white transition-all duration-200 shadow-sm ${
            isBoys
              ? 'bg-[#2563EB] group-hover:bg-[#1D4ED8] group-hover:shadow-md group-hover:shadow-blue-500/25'
              : 'bg-[#DB2777] group-hover:bg-[#BE185D] group-hover:shadow-md group-hover:shadow-pink-500/25'
          }`}
        >
          <span>View {isBoys ? 'Boys' : 'Girls'} Menu</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

