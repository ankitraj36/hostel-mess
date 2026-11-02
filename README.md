# HOSTEL MESS — Premium Mobile-First Hostel Food Menu Website

> **Good Food. Every Day.**

A complete, responsive, mobile-first web application designed for college hostel students to quickly access their daily meal menus, live serving statuses, and weekly dining schedules.

---

## ✨ Features

- **Distinct Hostel Portals**:
  - **Boys Hostel**: Royal Blue theme (`#2563EB`) with Block A & B Hall 1 menus.
  - **Girls Hostel**: Rose Pink theme (`#DB2777`) with Block C & D Hall 2 menus.
  - **Neutral Homepage**: Clean, distraction-free residence selection.
- **Dynamic Live Next Meal Engine**:
  - Automatically calculates active or upcoming meals based on current local time:
    - **Breakfast**: 7:30 AM – 9:00 AM
    - **Lunch**: 12:30 PM – 2:00 PM
    - **Evening Snacks**: 4:30 PM – 5:30 PM
    - **Dinner**: 7:30 PM – 9:00 PM
  - Features real-time badges: `SERVING NOW` (with live pulse indicator), `UP NEXT` (with countdown), and `TOMORROW MORNING` (after dinner window).
- **Interactive 7-Day Weekly Food Schedule**:
  - Touch-friendly horizontal day selector (Monday through Sunday).
  - Defaults to current day with immediate day-switching and zero page reloads.
- **Mobile-First UX Architecture**:
  - Horizontal meal cards on mobile (dish imagery on left, menu items & timing on right).
  - Balanced 2-column grid expansion on tablets & desktop screens.
  - Fixed bottom navigation bar with 48px minimum touch targets and iOS safe-area support.
  - Desktop header navigation with automatic bottom-bar hiding.
  - Smart image loader with graceful pure CSS/SVG fallbacks for zero broken image states.
- **100% Pure Vegetarian Certified Campus Diet**:
  - Balanced nutrition tags, authentic Indian menu compositions, and chef specials.

---

## 🛠️ Technology Stack

- **React 19**
- **TypeScript 5.8+**
- **Vite 6+**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **React Router DOM 7**
- **Lucide React Icons**

---

## 🗺️ Application Routes

| Route | Page / Function |
|---|---|
| `/` | Homepage — Hostel Residence Selection |
| `/boys` | Boys Hostel Today's Menu Dashboard (Blue Theme) |
| `/boys/weekly` | Boys Hostel 7-Day Weekly Schedule (Blue Theme) |
| `/girls` | Girls Hostel Today's Menu Dashboard (Pink Theme) |
| `/girls/weekly` | Girls Hostel 7-Day Weekly Schedule (Pink Theme) |
| `/about` | About Hostel Mess & Dining Information |
| `*` | 404 Fallback Page |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd MENU

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be live at `http://localhost:5173/`.

### Production Build
```bash
npm run build
npm run preview
```

---

## 📂 Project Architecture

```text
src/
├── components/
│   ├── BottomNavigation.tsx      # Fixed mobile bottom bar (Home, Today, Weekly, About)
│   ├── EmptyMenuState.tsx        # Menu unpublished & skeleton loading states
│   ├── FoodImage.tsx             # Responsive image with error fallback & pulse skeleton
│   ├── Header.tsx                # Compact university header with hostel pill
│   ├── HostelSelectionCard.tsx   # Interactive selection cards for homepage
│   ├── MealCard.tsx              # Mobile horizontal meal card with dietary badges
│   ├── NextMealCard.tsx          # Dynamic live "Up Next" / "Serving Now" engine
│   └── WeeklyDaySelector.tsx     # 7-day horizontal scroll selector
├── data/
│   ├── boysMenu.ts               # Structured 7-day schedule for Boys Hostel
│   ├── girlsMenu.ts              # Structured 7-day schedule for Girls Hostel
│   ├── index.ts                  # Central menu repository and lookup utilities
│   └── menuTypes.ts              # TypeScript interfaces (Meal, DailyMenu, HostelInfo)
├── hooks/
│   ├── useCurrentDate.ts         # Real-time dynamic date, greeting, and formatted strings
│   └── useNextMeal.ts            # Local-time based schedule calculator
├── layouts/
│   └── HostelLayout.tsx          # Theme injector (.boys-theme / .girls-theme) and wrapper
├── pages/
│   ├── AboutPage.tsx             # Campus mess platform info & dining timings
│   ├── HomePage.tsx              # Neutral white hostel selection entry
│   ├── HostelDashboard.tsx       # Today's menu dashboard (Boys / Girls)
│   ├── NotFoundPage.tsx          # 404 fallback
│   └── WeeklyMenuPage.tsx        # 7-day weekly schedule with interactive day tab
├── styles/
│   └── themes.css                # CSS variables, design tokens, safe-area utilities
├── App.tsx                       # React Router configuration
├── main.tsx                      # App entry point
└── vite-env.d.ts                 # Vite type declarations
```

---

## 🎨 Design Tokens

```css
:root {
  --background: #FFFFFF;
  --foreground: #111827;
  --muted: #6B7280;
  --border: #E5E7EB;
  --surface: #F8FAFC;
}

.boys-theme {
  --primary: #2563EB;
  --primary-hover: #1D4ED8;
  --accent: #DBEAFE;
  --background: #F8FAFC;
  --card: #FFFFFF;
  --foreground: #1E293B;
  --muted: #64748B;
  --border: #DBEAFE;
}

.girls-theme {
  --primary: #DB2777;
  --primary-hover: #BE185D;
  --accent: #FCE7F3;
  --background: #FFF7FA;
  --card: #FFFFFF;
  --foreground: #831843;
  --muted: #9D174D;
  --border: #FBCFE8;
}
```
