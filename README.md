# HOSTEL MESS — Premium Mobile-First Hostel Food Menu Website

> **Good Food. Every Day.**  
> Official Mess Menu System for **ITER, Siksha 'O' Anusandhan (Deemed to be University), Bhubaneswar, Odisha**.

A responsive, mobile-first web application designed for college hostel students to quickly access their daily meal menus, live serving statuses, and weekly dining schedules.

---

## ✨ Features & Menu Rotations

- **Distinct Hostel Portals & Rotations**:
  - **Boys Hostel (Blue Theme · `#2563EB`)**:
    - **Single Repeating Weekly Schedule**: Follows official ITER notice board schedule (repeats weekly).
    - Features Usuna & Arua rice options, daily Dal, Dalma, Besara, Fish Kalia, Chicken Aloo Kasa, Egg Masala, snacks, and sweet desserts (Gaja, Rasgulla, Gulab Jamun).
    - Campus-1 Dining Hall guidelines and portion size standards.
  - **Ladies Hostel (Pink Theme · `#DB2777`)**:
    - **4-Week Monthly Cycle**: Has 4 distinct rotating weekly menus across each month (Week 1, Week 2, Week 3, Week 4).
    - Interactive **Week Selector** allowing residents to switch between all 4 weeks, with automatic detection and highlighting of the current calendar week.
  - **Neutral Homepage**: Clean, distraction-free residence selection.
- **Categorized Meal Presentations**:
  - Separates **Common Staples** (Rice Arua & Usuna, Roti, Dal), **Veg Options**, **Non-Veg Options** (Egg, Fish, Chicken), **Sides**, and **Desserts** with clear dietary badges.
- **Dynamic Live Next Meal Engine**:
  - Automatically calculates active or upcoming meals based on current local time:
    - **Breakfast**: 7:30 AM – 9:00 AM
    - **Lunch**: 12:30 PM – 2:00 PM
    - **Evening Snacks**: 4:30 PM – 5:30 PM
    - **Dinner**: 7:30 PM – 9:00 PM
  - Features real-time badges: `SERVING NOW` (with pulsing beacon), `UP NEXT` (with countdown), and `TOMORROW MORNING` (after dinner window).
- **Interactive 7-Day Weekly Food Schedule**:
  - Touch-friendly horizontal day selector (Monday through Sunday).
  - Defaults to current day with immediate day-switching and zero page reloads.
- **Mobile-First UX Architecture**:
  - Horizontal meal cards on mobile (dish imagery on left, menu items & timing on right).
  - Balanced 2-column grid expansion on tablets & desktop screens.
  - Fixed bottom navigation bar with 48px minimum touch targets and iOS safe-area support.
  - Smart image loader with graceful pure CSS/SVG fallbacks for zero broken image states.

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

| Route | Page / Function | Rotation Model |
|---|---|---|
| `/` | Homepage — Hostel Residence Selection | Neutral |
| `/boys` | Boys Hostel Today's Menu Dashboard (Blue Theme) | 1-Week Rotating |
| `/boys/weekly` | Boys Hostel 7-Day Weekly Schedule (Blue Theme) | 1-Week Rotating |
| `/girls` | Ladies Hostel Today's Menu Dashboard (Pink Theme) | 4-Week Monthly Cycle |
| `/girls/weekly` | Ladies Hostel 7-Day Weekly Schedule (Pink Theme) | 4-Week Monthly Cycle |
| `/about` | About Hostel Mess & Dining Information | Neutral |
| `*` | 404 Fallback Page | Neutral |

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

The application is live at `http://localhost:5173/`.

### Production Build
```bash
npm run build
npm run preview
```
