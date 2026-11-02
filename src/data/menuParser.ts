import { Meal, MealType, DailyMenu, WeekMenu, HostelInfo } from './menuTypes';
import boysRawJson from './raw/iter_boys_hostel_winter_menu_2026.json';
import ladiesRawJson from './raw/iter_ladies_hostel_winter_menu_2026.json';

const DAY_MAP: Record<string, { short: DailyMenu['dayShort']; index: number }> = {
  Sunday: { short: 'Sun', index: 0 },
  Monday: { short: 'Mon', index: 1 },
  Tuesday: { short: 'Tue', index: 2 },
  Wednesday: { short: 'Wed', index: 3 },
  Thursday: { short: 'Thu', index: 4 },
  Friday: { short: 'Fri', index: 5 },
  Saturday: { short: 'Sat', index: 6 },
};

function getMealImage(type: MealType, items: string[]): string {
  const text = items.join(' ').toLowerCase();

  if (text.includes('biryani') || text.includes('biriyani')) {
    return 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80';
  }
  if (text.includes('dahi bada') || text.includes('bara') || text.includes('aloo dum') || text.includes('chaat') || text.includes('chat') || text.includes('papdi')) {
    return 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80';
  }
  if (text.includes('idli') || text.includes('dosa') || text.includes('uttapam') || text.includes('chakuli')) {
    return 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80';
  }
  if (text.includes('bread') || text.includes('boiled egg') || text.includes('banana')) {
    return 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80';
  }
  if (text.includes('upma') || text.includes('puri') || text.includes('paratha')) {
    return 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=600&q=80';
  }
  if (text.includes('samosa') || text.includes('patties') || text.includes('kachodi') || text.includes('cutlet') || text.includes('pakoda') || text.includes('kakera')) {
    return 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80';
  }
  if (text.includes('pasta') || text.includes('sandwich') || text.includes('cake') || text.includes('maggi') || text.includes('bun')) {
    return 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80';
  }
  if (text.includes('fish') || text.includes('chicken') || text.includes('egg curry') || text.includes('egg masala')) {
    return 'https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?auto=format&fit=crop&w=600&q=80';
  }
  if (text.includes('paneer') || text.includes('chhole') || text.includes('mushroom') || text.includes('dalma') || text.includes('besara')) {
    return 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80';
  }

  switch (type) {
    case 'breakfast':
      return 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80';
    case 'lunch':
      return 'https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?auto=format&fit=crop&w=600&q=80';
    case 'snacks':
      return 'https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=600&q=80';
    case 'dinner':
      return 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80';
  }
}

interface RawMealObject {
  common?: string[];
  veg?: string[];
  nonVeg?: string[];
  sideItems?: string[];
  dessert?: string[];
}

function parseDayMeals(
  hostelId: 'boys' | 'girls',
  weekNum: number,
  dayObj: any
): Meal[] {
  const dayName = dayObj.day as string;
  const prefix = `${hostelId}-w${weekNum}-${dayName.toLowerCase().slice(0, 3)}`;

  // 1. Breakfast (7:30 AM – 9:00 AM)
  const bfItems: string[] = Array.isArray(dayObj.breakfast) ? dayObj.breakfast : [];
  const breakfast: Meal = {
    id: `${prefix}-bf`,
    type: 'breakfast',
    name: 'Breakfast',
    startTime: '7:30 AM',
    endTime: '9:00 AM',
    startMinutes: 450,
    endMinutes: 540,
    items: bfItems,
    image: getMealImage('breakfast', bfItems),
    vegetarian: !bfItems.some((i) => i.toLowerCase().includes('egg')),
    hasNonVegOption: bfItems.some((i) => i.toLowerCase().includes('egg')),
  };

  // 2. Lunch (12:30 PM – 2:00 PM)
  const lunchRaw: RawMealObject = dayObj.lunch || {};
  const lunchCommon = lunchRaw.common || [];
  const lunchVeg = lunchRaw.veg || [];
  const lunchNonVeg = lunchRaw.nonVeg || [];
  const lunchSides = lunchRaw.sideItems || [];
  const lunchDessert = lunchRaw.dessert || [];
  const lunchAllItems = [
    ...lunchCommon,
    ...lunchVeg.map((v) => `${v} (Veg)`),
    ...lunchNonVeg.map((nv) => `${nv} (Non-Veg)`),
    ...lunchSides,
    ...lunchDessert,
  ];

  const lunch: Meal = {
    id: `${prefix}-lu`,
    type: 'lunch',
    name: 'Lunch',
    startTime: '12:30 PM',
    endTime: '2:00 PM',
    startMinutes: 750,
    endMinutes: 840,
    items: lunchAllItems,
    commonItems: lunchCommon,
    vegOptions: lunchVeg,
    nonVegOptions: lunchNonVeg,
    sideItems: lunchSides,
    desserts: lunchDessert,
    image: getMealImage('lunch', lunchAllItems),
    vegetarian: lunchNonVeg.length === 0,
    hasNonVegOption: lunchNonVeg.length > 0,
    specialNote: lunchNonVeg.length > 0 ? `Non-Veg Choice: ${lunchNonVeg.join(', ')}` : undefined,
  };

  // 3. Snacks (4:30 PM – 5:30 PM)
  const snItems: string[] = Array.isArray(dayObj.snacks) ? dayObj.snacks : [];
  const snacks: Meal = {
    id: `${prefix}-sn`,
    type: 'snacks',
    name: 'Evening Snacks',
    startTime: '4:30 PM',
    endTime: '5:30 PM',
    startMinutes: 990,
    endMinutes: 1050,
    items: snItems,
    image: getMealImage('snacks', snItems),
    vegetarian: true,
  };

  // 4. Dinner (7:30 PM – 9:00 PM)
  const dinnerRaw: RawMealObject = dayObj.dinner || {};
  const dinnerCommon = dinnerRaw.common || [];
  const dinnerVeg = dinnerRaw.veg || [];
  const dinnerNonVeg = dinnerRaw.nonVeg || [];
  const dinnerSides = dinnerRaw.sideItems || [];
  const dinnerDessert = dinnerRaw.dessert || [];
  const dinnerAllItems = [
    ...dinnerCommon,
    ...dinnerVeg.map((v) => `${v} (Veg)`),
    ...dinnerNonVeg.map((nv) => `${nv} (Non-Veg)`),
    ...dinnerSides,
    ...dinnerDessert,
  ];

  const dinner: Meal = {
    id: `${prefix}-di`,
    type: 'dinner',
    name: 'Dinner',
    startTime: '7:30 PM',
    endTime: '9:00 PM',
    startMinutes: 1170,
    endMinutes: 1260,
    items: dinnerAllItems,
    commonItems: dinnerCommon,
    vegOptions: dinnerVeg,
    nonVegOptions: dinnerNonVeg,
    sideItems: dinnerSides,
    desserts: dinnerDessert,
    image: getMealImage('dinner', dinnerAllItems),
    vegetarian: dinnerNonVeg.length === 0,
    hasNonVegOption: dinnerNonVeg.length > 0,
    specialNote: dinnerDessert.length > 0 ? `Dessert: ${dinnerDessert.join(', ')}` : undefined,
  };

  return [breakfast, lunch, snacks, dinner];
}

// -------------------------------------------------------------
// BOYS HOSTEL (1 Week Menu - Repeats Weekly)
// -------------------------------------------------------------
const boysWeeksData: WeekMenu[] = boysRawJson.weeks.map((w: any) => ({
  weekNumber: 1,
  weekLabel: 'Weekly Schedule',
  days: w.days.map((d: any) => {
    const dayName = d.day as DailyMenu['day'];
    const meta = DAY_MAP[dayName] || { short: 'Mon', index: 1 };
    return {
      day: dayName,
      dayShort: meta.short,
      dayIndex: meta.index,
      isSpecialDay: dayName === 'Sunday' || dayName === 'Wednesday',
      specialTheme:
        dayName === 'Wednesday'
          ? 'Special Biryani Night'
          : dayName === 'Sunday'
          ? 'Sunday Special'
          : undefined,
      meals: parseDayMeals('boys', 1, d),
    };
  }),
}));

export const boysHostelInfo: HostelInfo = {
  id: 'boys',
  name: "ITER Boys' Hostel",
  residenceLabel: 'BOYS RESIDENCE',
  tagline: 'Authentic campus meals for everyday energy',
  description: "Official ITER Boys' Hostel Winter Mess Menu. Repeats weekly with both Usuna & Arua rice options, daily sides, veg, and non-veg options.",
  themeClass: 'boys-theme',
  primaryColor: '#2563EB',
  accentBg: '#EFF6FF',
  diningHall: 'ITER Campus-1 Dining Commons',
  capacity: '850+ Residents',
  timingNotice: 'Hot meals served on schedule. Carrying hostel identity card is mandatory during meal services.',
  institution: "Siksha 'O' Anusandhan (Deemed to be University), Bhubaneswar, Odisha",
  campus: 'ITER Campus-1',
  rotationType: 'weekly',
  totalWeeks: 1,
  notices: boysRawJson.notices || [
    'Usuna and Arua rice both will be served in lunch and dinner.',
    'Lunch & dinner branded sweet pickle is mandatory.',
    'Only homemade Sriram papad and Lujat papad should be used.',
  ],
  brandsAndPortions: boysRawJson.brandsAndPortions as any,
  weeks: boysWeeksData,
  weeklyMenu: boysWeeksData[0]?.days || [],
};

// -------------------------------------------------------------
// LADIES HOSTEL (4 Weeks Menu in a Month)
// -------------------------------------------------------------
const ladiesWeeksData: WeekMenu[] = ladiesRawJson.weeks.map((w: any) => ({
  weekNumber: w.week,
  weekLabel: `Week ${w.week}`,
  days: w.days.map((d: any) => {
    const dayName = d.day as DailyMenu['day'];
    const meta = DAY_MAP[dayName] || { short: 'Mon', index: 1 };
    return {
      day: dayName,
      dayShort: meta.short,
      dayIndex: meta.index,
      isSpecialDay: dayName === 'Sunday' || dayName === 'Wednesday',
      specialTheme:
        dayName === 'Wednesday'
          ? 'Biryani & Special Dinner'
          : dayName === 'Sunday'
          ? 'Sunday Feast'
          : undefined,
      meals: parseDayMeals('girls', w.week, d),
    };
  }),
}));

export const girlsHostelInfo: HostelInfo = {
  id: 'girls',
  name: "ITER Ladies' Hostel",
  residenceLabel: 'LADIES RESIDENCE',
  tagline: 'Balanced, nutritious dining crafted for student wellbeing',
  description: "Official ITER Ladies' Hostels Winter Mess Menu featuring 4 distinct rotating weekly menus across the month.",
  themeClass: 'girls-theme',
  primaryColor: '#DB2777',
  accentBg: '#FDF2F8',
  diningHall: 'ITER Ladies Hostel Central Dining Hall',
  capacity: '1200+ Residents',
  timingNotice: 'Hot meals served on schedule. 4 rotating weekly menus refreshed every month.',
  institution: "Siksha 'O' Anusandhan (Deemed to be University), Bhubaneswar, Odisha",
  campus: 'ITER Campus-1',
  rotationType: 'monthly_4_weeks',
  totalWeeks: 4,
  weeks: ladiesWeeksData,
  weeklyMenu: ladiesWeeksData[1]?.days || ladiesWeeksData[0]?.days || [],
};

