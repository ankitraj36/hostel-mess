import { HostelInfo, HostelType, DailyMenu, WeekMenu } from './menuTypes';
import { boysHostelInfo, girlsHostelInfo } from './menuParser';

export * from './menuTypes';
export { boysHostelInfo, girlsHostelInfo } from './menuParser';

export const hostels: Record<HostelType, HostelInfo> = {
  boys: boysHostelInfo,
  girls: girlsHostelInfo,
};

export function getHostelInfo(type: HostelType): HostelInfo {
  return hostels[type] || boysHostelInfo;
}

/**
 * Calculates current week of the month (1, 2, 3, or 4)
 * Day 1-7: Week 1, 8-14: Week 2, 15-21: Week 3, 22-end: Week 4
 */
export function getCurrentWeekNumber(date: Date = new Date()): number {
  const dayOfMonth = date.getDate();
  const week = Math.ceil(dayOfMonth / 7);
  return Math.min(4, Math.max(1, week));
}

/**
 * Get a specific week's menu for a hostel.
 * Boys hostel only has 1 week (always returns week 1).
 * Girls hostel has 4 distinct weeks.
 */
export function getHostelWeek(hostelType: HostelType, weekNum: number = 1): WeekMenu {
  const hostel = getHostelInfo(hostelType);
  if (hostel.rotationType === 'weekly' || hostel.weeks.length === 1) {
    return hostel.weeks[0];
  }
  const found = hostel.weeks.find((w) => w.weekNumber === weekNum);
  return found || hostel.weeks[0];
}

/**
 * Get Today's menu for a hostel.
 * Automatically looks up the current week if weekNumber is omitted.
 */
export function getTodayMenu(
  hostelType: HostelType,
  date: Date = new Date(),
  weekNumber?: number
): DailyMenu | undefined {
  const effectiveWeek = weekNumber ?? getCurrentWeekNumber(date);
  const weekMenu = getHostelWeek(hostelType, effectiveWeek);
  const currentDayIndex = date.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  return weekMenu.days.find((m) => m.dayIndex === currentDayIndex) || weekMenu.days[0];
}

/**
 * Get a specific day's menu for a hostel and week.
 */
export function getDayMenu(
  hostelType: HostelType,
  dayName: string,
  weekNumber?: number
): DailyMenu | undefined {
  const effectiveWeek = weekNumber ?? 1;
  const weekMenu = getHostelWeek(hostelType, effectiveWeek);
  return weekMenu.days.find((m) => m.day.toLowerCase() === dayName.toLowerCase());
}
