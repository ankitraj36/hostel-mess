import { useState, useEffect } from 'react';
import { getCurrentWeekNumber } from '../data';

export interface CurrentDateInfo {
  date: Date;
  dayName: string;
  dayShort: string;
  dayIndex: number;
  dayOfMonth: number;
  weekOfMonth: number; // 1, 2, 3, or 4
  monthName: string;
  formattedDate: string;
  timeString: string;
  greeting: string;
}

export function useCurrentDate(): CurrentDateInfo {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  const dayIndex = now.getDay();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayShortNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayName = dayNames[dayIndex];
  const dayShort = dayShortNames[dayIndex];
  const dayOfMonth = now.getDate();
  const weekOfMonth = getCurrentWeekNumber(now);
  const monthName = now.toLocaleDateString('en-US', { month: 'long' });

  const formattedDate = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  const timeString = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  const hour = now.getHours();
  let greeting = 'Good Morning';
  if (hour >= 12 && hour < 16) {
    greeting = 'Good Afternoon';
  } else if (hour >= 16 && hour < 21) {
    greeting = 'Good Evening';
  } else if (hour >= 21 || hour < 5) {
    greeting = 'Good Evening';
  }

  return {
    date: now,
    dayName,
    dayShort,
    dayIndex,
    dayOfMonth,
    weekOfMonth,
    monthName,
    formattedDate,
    timeString,
    greeting,
  };
}
