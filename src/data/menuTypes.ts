export type MealType = 'breakfast' | 'lunch' | 'snacks' | 'dinner';

export type HostelType = 'boys' | 'girls';

export interface Meal {
  id: string;
  type: MealType;
  name: string;
  startTime: string;
  endTime: string;
  startMinutes: number; // minutes from midnight (e.g. 7:30 AM = 450)
  endMinutes: number;   // minutes from midnight (e.g. 9:00 AM = 540)
  items: string[];      // flattened list of all items for summary / search
  commonItems?: string[];
  vegOptions?: string[];
  nonVegOptions?: string[];
  sideItems?: string[];
  desserts?: string[];
  image: string;
  vegetarian?: boolean;
  hasNonVegOption?: boolean;
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

export interface WeekMenu {
  weekNumber: number; // 1, 2, 3, 4
  weekLabel: string;  // "Week 1", "Week 2", "Week 3", "Week 4"
  days: DailyMenu[];
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
  institution: string;
  campus: string;
  rotationType: 'weekly' | 'monthly_4_weeks';
  totalWeeks: number; // 1 for boys, 4 for girls
  notices?: string[];
  brandsAndPortions?: Record<string, string | null>;
  weeks: WeekMenu[];
  weeklyMenu: DailyMenu[];
}
