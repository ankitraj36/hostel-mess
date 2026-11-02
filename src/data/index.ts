import { HostelInfo, HostelType, DailyMenu } from './menuTypes';
import { boysHostelInfo } from './boysMenu';
import { girlsHostelInfo } from './girlsMenu';

export * from './menuTypes';
export * from './boysMenu';
export * from './girlsMenu';

export const hostels: Record<HostelType, HostelInfo> = {
  boys: boysHostelInfo,
  girls: girlsHostelInfo,
};

export function getHostelInfo(type: HostelType): HostelInfo {
  return hostels[type] || boysHostelInfo;
}

export function getTodayMenu(hostelType: HostelType, date: Date = new Date()): DailyMenu | undefined {
  const hostel = getHostelInfo(hostelType);
  const currentDayIndex = date.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  return hostel.weeklyMenu.find((m) => m.dayIndex === currentDayIndex) || hostel.weeklyMenu[0];
}

export function getDayMenu(hostelType: HostelType, dayName: string): DailyMenu | undefined {
  const hostel = getHostelInfo(hostelType);
  return hostel.weeklyMenu.find((m) => m.day.toLowerCase() === dayName.toLowerCase());
}
