import { useState, useEffect } from 'react';

export interface CurrentDateInfo {
  date: Date;
  dayName: string;
  dayShort: string;
  dayIndex: number;
  formattedDate: string;
  timeString: string;
  greeting: string;
}

export function useCurrentDate(): CurrentDateInfo {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    // Update every 30 seconds to keep date/time accurate
    const timer = setInterval(() => {
      setNow(new Date());
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  const dayIndex = now.getDay();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayShortNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayName = dayNames[dayIndex];
  const dayShort = dayShortNames[dayIndex];

  // Example: "Monday, November 2"
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
    greeting = 'Good Evening'; // or Late Evening/Night
  }

  return {
    date: now,
    dayName,
    dayShort,
    dayIndex,
    formattedDate,
    timeString,
    greeting,
  };
}
