# HOSTEL MESS — Premium Mobile-First Hostel Food Menu Website

> **Good Food. Every Day.**  
> Official Campus Dining Menu Platform for **ITER, Siksha 'O' Anusandhan (Deemed to be University), Bhubaneswar, Odisha**.

A responsive, mobile-first web application designed for college hostel students to quickly access their daily meal menus, live serving statuses, dietary categories, and weekly dining schedules.

---

## 🌟 Main Features

- **Distinct Hostel Portals**:
  - **Boys Hostel (Blue Theme · `#2563EB`)**: Follows official ITER single-week repeating schedule with Usuna & Arua rice options, daily dalma, besara, fish/chicken specials, and sweet desserts.
  - **Ladies Hostel (Pink Theme · `#DB2777`)**: Features a **4-week rotating monthly cycle** with an interactive **Week Selector** (Weeks 1, 2, 3, 4) and automatic detection of the current calendar week.
  - **Neutral Homepage**: Distraction-free residence selection.
- **Mobile-First Content Prioritization**:
  - Compact above-the-fold layout on smartphones; students see their meals within seconds without long scrolling.
  - Single-column cards on mobile (< 600px), multi-column balanced grids on tablets and desktops (≥ 768px).
- **Thumb-Zone Navigation**:
  - Fixed mobile bottom navigation with **48px minimum touch targets** and iOS safe-area support.
  - Theme-tinted bottom bars (Blue for Boys, Pink for Ladies) to reinforce residence identity.
  - Top header automatically hidden on mobile phones to maximize vertical screen space, and shown on desktop screens.
- **Categorized Meals & Dietary Badges**:
  - Clearly separated sections for **Common Staples** (Rice Arua/Usuna, Roti, Dal), **Veg Options** (🌱), **Non-Veg Options** (🍗/🐟), **Sides**, and **Desserts** (🍮).
  - One-tap dietary filter toggle: `All`, `Veg`, `Non-Veg`.
- **Live Serving Status Engine**:
  - Real-time detection of active or upcoming meals based on current local time:
    - **Breakfast**: 7:30 AM – 9:00 AM
    - **Lunch**: 12:30 PM – 2:00 PM
    - **Evening Snacks**: 4:30 PM – 5:30 PM
    - **Dinner**: 7:30 PM – 9:00 PM
  - Dynamic badges: `Serving Now` with pulsing beacon, `Up Next` with countdown, and `Tomorrow Morning` after dinner.
- **Responsive 7-Day Weekly Schedule**:
  - Touch-friendly horizontal day selector on mobile with auto-scroll to the active day.
  - Clean 7-column grid on desktop screens without horizontal scrolling.

---

## 🛠️ Technologies Used

- **React 19** — Core component-based UI library
- **TypeScript 5.8+** — Strict type safety and maintainable models
- **Vite 6+** — Fast bundler and development server
- **Tailwind CSS v4** (`@tailwindcss/vite`) — Utility-first styling with native CSS variables
- **React Router DOM 7** — Client-side SPA routing with base path support
- **Lucide React** — Lightweight, accessible icons
- **GitHub Actions** — Automated CI/CD pipeline for GitHub Pages

---

## 📷 Application Pages & Routes

| Route | Page | Theme | Purpose |
|---|---|---|---|
| `/` | **Homepage** | Neutral White | Residence selection between Boys & Ladies Hostels |
| `/boys` | **Boys Hostel Dashboard** | Blue Theme | Today's 4 meals with Usuna & Arua rice and ITER standards |
| `/boys/weekly` | **Boys Weekly Schedule** | Blue Theme | 7-day schedule (Mon–Sun) with repeating weekly cycle |
| `/girls` | **Ladies Hostel Dashboard** | Pink Theme | Today's 4 meals with 4-week monthly rotation switcher |
| `/girls/weekly` | **Ladies Weekly Schedule** | Pink Theme | 4-week monthly calendar with day selector (Mon–Sun) |
| `/about` | **About Platform** | Neutral White | Dining timings reference and campus food guidelines |
| `*` | **404 Fallback** | Neutral White | Page not found fallback with return button |

---

## 💻 Installation & Setup

### Prerequisites
- Node.js (version 18.0.0 or higher)
- npm (comes with Node.js)

### Clone the Repository
```bash
git clone https://github.com/ankitraj36/hostel-mess.git
cd hostel-mess
```

### Install Dependencies
```bash
npm install
```

---

## 🚀 Local Development

To run the local development server:

```bash
npm run dev
```

The application will start at `http://localhost:5173/` (or `http://localhost:5174/`).

---

## 📦 Production Build

To run the TypeScript type check and generate optimized production files:

```bash
npm run build
```

To preview the built production bundle locally:

```bash
npm run preview
```

The compiled files will be output to the `dist/` directory.

---

## 🌐 Deployment Instructions (GitHub Pages)

This project is configured for automated zero-configuration deployment to **GitHub Pages** using GitHub Actions.

### Automated Deployment Workflow
1. Push your code to the `main` branch:
   ```bash
   git push origin main
   ```
2. The `.github/workflows/deploy.yml` workflow triggers automatically.
3. In your GitHub repository settings:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Once the action finishes, your site will be live at:
   ```text
   https://ankitraj36.github.io/hostel-mess/
   ```

### SPA Routing on GitHub Pages
The build process automatically duplicates `index.html` as `404.html` in the `dist/` folder, ensuring that direct URL navigation and page refreshes on `/boys`, `/girls`, `/about`, etc. load the client-side router without HTTP 404 errors.

---

## 📁 Project Folder Structure

```text
hostel-mess/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated CI/CD GitHub Pages workflow
├── MENU DATA/
│   ├── iter_boys_hostel_winter_menu_2026.json    # Official Boys hostel data
│   └── iter_ladies_hostel_winter_menu_2026.json  # Official Ladies 4-week data
├── src/
│   ├── components/
│   │   ├── BottomNavigation.tsx  # Mobile thumb-zone navigation bar
│   │   ├── EmptyMenuState.tsx    # "Menu Not Updated Yet" & skeletons
│   │   ├── FoodImage.tsx         # Image loader with fallback & skeleton
│   │   ├── Header.tsx            # Desktop top navigation header
│   │   ├── HostelSelectionCard.tsx # Above-the-fold selection cards
│   │   ├── MealCard.tsx          # Categorized meal card (Veg/Non-Veg/Sides)
│   │   ├── NextMealCard.tsx      # Dynamic Up Next / Serving Now card
│   │   ├── WeeklyDaySelector.tsx # 7-day responsive day selector
│   │   └── WeekSelector.tsx      # 4-week switcher for Ladies hostel
│   ├── data/
│   │   ├── menuParser.ts         # JSON data loader and type mapper
│   │   ├── menuTypes.ts          # Core TypeScript data contracts
│   │   ├── index.ts              # Data repository and lookup helpers
│   │   └── raw/                  # Bundled source JSON files
│   ├── hooks/
│   │   ├── useCurrentDate.ts     # Real-time date, greeting, and calendar week
│   │   └── useNextMeal.ts        # Dynamic meal schedule calculator
│   ├── layouts/
│   │   └── HostelLayout.tsx      # Dynamic theme injector and layout container
│   ├── pages/
│   │   ├── HomePage.tsx          # Streamlined mobile-first entry
│   │   ├── HostelDashboard.tsx   # Today's menu dashboard
│   │   ├── WeeklyMenuPage.tsx    # 7-day weekly schedule page
│   │   ├── AboutPage.tsx         # Campus mess information & dining hours
│   │   └── NotFoundPage.tsx      # 404 fallback page
│   ├── styles/
│   │   └── themes.css            # Design tokens, variables & safe-area classes
│   ├── App.tsx                   # Route configuration
│   ├── main.tsx                  # App entry with basename support
│   └── vite-env.d.ts             # Vite client types
├── .gitignore                    # Git exclusions
├── index.html                    # HTML entry point with viewport configuration
├── package.json                  # Dependencies, scripts and engines
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite config with base path support
```

---

## 🔮 Future Improvements

- **Push Notifications**: Optional browser notification reminders before meal timings (e.g., 15 minutes before Lunch or Dinner starts).
- **Daily Mess Feedback / Rating**: Simple feedback stars for meal quality to help hostel mess management.
- **Admin Portal / CMS Integration**: Secure interface for mess wardens to update special holiday menus dynamically.
- **Offline PWA Support**: Service worker caching so students can view the menu even with low campus connectivity.
- **Dark Mode**: High-contrast dark theme option for late-night menu checking.
