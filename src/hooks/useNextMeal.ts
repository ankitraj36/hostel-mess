import { useState, useEffect } from 'react';
import { Meal, HostelType } from '../data/menuTypes';
import { getTodayMenu, getHostelWeek, ACTIVE_GIRLS_WEEK } from '../data';

export interface NextMealState {
  meal: Meal | null;
  statusLabel: 'NOW SERVING' | 'UP NEXT' | 'TOMORROW MORNING';
  isCurrentlyServing: boolean;
  isTomorrow: boolean;
  targetDayName: string;
  timeNote: string;
}

export function useNextMeal(hostelType: HostelType, weekNumber?: number): NextMealState {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  const effectiveWeek = weekNumber ?? (hostelType === 'girls' ? ACTIVE_GIRLS_WEEK : 1);
  const todayMenu = getTodayMenu(hostelType, now, effectiveWeek);
  const currentWeekMenu = getHostelWeek(hostelType, effectiveWeek);

  if (!todayMenu || todayMenu.meals.length === 0) {
    return {
      meal: null,
      statusLabel: 'UP NEXT',
      isCurrentlyServing: false,
      isTomorrow: false,
      targetDayName: 'Today',
      timeNote: 'Menu not available',
    };
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  // Find meals for today
  const breakfast = todayMenu.meals.find((m) => m.type === 'breakfast') || todayMenu.meals[0];
  const lunch = todayMenu.meals.find((m) => m.type === 'lunch') || todayMenu.meals[1];
  const snacks = todayMenu.meals.find((m) => m.type === 'snacks') || todayMenu.meals[2];
  const dinner = todayMenu.meals.find((m) => m.type === 'dinner') || todayMenu.meals[3];

  // Schedule thresholds (in minutes)
  // Breakfast: 450 (7:30 AM) to 540 (9:00 AM)
  // Lunch: 750 (12:30 PM) to 840 (2:00 PM)
  // Snacks: 990 (4:30 PM) to 1050 (5:30 PM)
  // Dinner: 1170 (7:30 PM) to 1260 (9:00 PM)

  // 1. Before Breakfast (00:00 - 07:29)
  if (currentMinutes < breakfast.startMinutes) {
    const diff = breakfast.startMinutes - currentMinutes;
    const hours = Math.floor(diff / 60);
    const mins = diff % 60;
    const timeNote = hours > 0 ? `Starts in ${hours}h ${mins}m` : `Starts in ${mins}m`;
    return {
      meal: breakfast,
      statusLabel: 'UP NEXT',
      isCurrentlyServing: false,
      isTomorrow: false,
      targetDayName: todayMenu.day,
      timeNote,
    };
  }

  // 2. During Breakfast (07:30 - 09:00)
  if (currentMinutes >= breakfast.startMinutes && currentMinutes <= breakfast.endMinutes) {
    const remaining = breakfast.endMinutes - currentMinutes;
    return {
      meal: breakfast,
      statusLabel: 'NOW SERVING',
      isCurrentlyServing: true,
      isTomorrow: false,
      targetDayName: todayMenu.day,
      timeNote: `Serving now · Closes in ${remaining}m`,
    };
  }

  // 3. After Breakfast & Before Lunch (09:01 - 12:29)
  if (currentMinutes > breakfast.endMinutes && currentMinutes < lunch.startMinutes) {
    const diff = lunch.startMinutes - currentMinutes;
    const hours = Math.floor(diff / 60);
    const mins = diff % 60;
    const timeNote = hours > 0 ? `Starts in ${hours}h ${mins}m` : `Starts in ${mins}m`;
    return {
      meal: lunch,
      statusLabel: 'UP NEXT',
      isCurrentlyServing: false,
      isTomorrow: false,
      targetDayName: todayMenu.day,
      timeNote,
    };
  }

  // 4. During Lunch (12:30 - 14:00)
  if (currentMinutes >= lunch.startMinutes && currentMinutes <= lunch.endMinutes) {
    const remaining = lunch.endMinutes - currentMinutes;
    return {
      meal: lunch,
      statusLabel: 'NOW SERVING',
      isCurrentlyServing: true,
      isTomorrow: false,
      targetDayName: todayMenu.day,
      timeNote: `Serving now · Closes in ${remaining}m`,
    };
  }

  // 5. After Lunch & Before Snacks (14:01 - 16:29)
  if (currentMinutes > lunch.endMinutes && currentMinutes < snacks.startMinutes) {
    const diff = snacks.startMinutes - currentMinutes;
    const hours = Math.floor(diff / 60);
    const mins = diff % 60;
    const timeNote = hours > 0 ? `Starts in ${hours}h ${mins}m` : `Starts in ${mins}m`;
    return {
      meal: snacks,
      statusLabel: 'UP NEXT',
      isCurrentlyServing: false,
      isTomorrow: false,
      targetDayName: todayMenu.day,
      timeNote,
    };
  }

  // 6. During Snacks (16:30 - 17:30)
  if (currentMinutes >= snacks.startMinutes && currentMinutes <= snacks.endMinutes) {
    const remaining = snacks.endMinutes - currentMinutes;
    return {
      meal: snacks,
      statusLabel: 'NOW SERVING',
      isCurrentlyServing: true,
      isTomorrow: false,
      targetDayName: todayMenu.day,
      timeNote: `Serving now · Closes in ${remaining}m`,
    };
  }

  // 7. After Snacks & Before Dinner (17:31 - 19:29)
  if (currentMinutes > snacks.endMinutes && currentMinutes < dinner.startMinutes) {
    const diff = dinner.startMinutes - currentMinutes;
    const hours = Math.floor(diff / 60);
    const mins = diff % 60;
    const timeNote = hours > 0 ? `Starts in ${hours}h ${mins}m` : `Starts in ${mins}m`;
    return {
      meal: dinner,
      statusLabel: 'UP NEXT',
      isCurrentlyServing: false,
      isTomorrow: false,
      targetDayName: todayMenu.day,
      timeNote,
    };
  }

  // 8. During Dinner (19:30 - 21:00)
  if (currentMinutes >= dinner.startMinutes && currentMinutes <= dinner.endMinutes) {
    const remaining = dinner.endMinutes - currentMinutes;
    return {
      meal: dinner,
      statusLabel: 'NOW SERVING',
      isCurrentlyServing: true,
      isTomorrow: false,
      targetDayName: todayMenu.day,
      timeNote: `Serving now · Closes in ${remaining}m`,
    };
  }

  // 9. After Dinner (21:01 - 23:59): Next day's Breakfast!
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowDayIndex = tomorrow.getDay();
  const tomorrowDayMenu = currentWeekMenu.days.find((m) => m.dayIndex === tomorrowDayIndex) || currentWeekMenu.days[0];
  const tomorrowBreakfast = tomorrowDayMenu.meals.find((m) => m.type === 'breakfast') || tomorrowDayMenu.meals[0];

  return {
    meal: tomorrowBreakfast,
    statusLabel: 'TOMORROW MORNING',
    isCurrentlyServing: false,
    isTomorrow: true,
    targetDayName: tomorrowDayMenu.day,
    timeNote: `Mess opens at ${tomorrowBreakfast.startTime} tomorrow`,
  };
}
