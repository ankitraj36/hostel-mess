export type MealType = 'breakfast' | 'lunch' | 'snacks' | 'dinner';

export type HostelType = 'boys' | 'girls';

export interface Meal {
  id: string;
  type: MealType;
  name: string;
  startTime: string;
  endTime: string;
  startMinutes: number; // minutes from midnight (e.g. 7:30 AM = 7 * 60 + 30 = 450)
  endMinutes: number;   // minutes from midnight (e.g. 9:00 AM = 9 * 60 = 540)
  items: string[];
  image: string;
  vegetarian?: boolean;
  specialNote?: string;
  nutritionTag?: string;
}

export interface DailyMenu {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  dayShort: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
  dayIndex: number; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  isSpecialDay?: boolean;
  specialTheme?: string;
  meals: Meal[];
}

export interface HostelInfo {
  id: HostelType;
  name: string;
  residenceLabel: string;
  tagline: string;
  description: string;
  themeClass: string;
  primaryColor: string;
  accentBg: string;
  diningHall: string;
  capacity: string;
  timingNotice: string;
  weeklyMenu: DailyMenu[];
}
