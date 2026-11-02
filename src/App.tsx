import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BoysDashboard, GirlsDashboard } from './pages/HostelDashboard';
import { WeeklyMenuPage } from './pages/WeeklyMenuPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { HostelLayout } from './layouts/HostelLayout';

export const App: React.FC = () => {
  return (
    <Routes>
      {/* 1. Neutral Homepage / Hostel Selection */}
      <Route path="/" element={<HomePage />} />

      {/* 2. Boys Hostel (Blue Theme) */}
      <Route
        path="/boys"
        element={<HostelLayout hostelType="boys"><BoysDashboard /></HostelLayout>}
      />
      <Route
        path="/boys/weekly"
        element={<HostelLayout hostelType="boys"><WeeklyMenuPage hostelType="boys" /></HostelLayout>}
      />

      {/* 3. Girls Hostel (Pink Theme) */}
      <Route
        path="/girls"
        element={<HostelLayout hostelType="girls"><GirlsDashboard /></HostelLayout>}
      />
      <Route
        path="/girls/weekly"
        element={<HostelLayout hostelType="girls"><WeeklyMenuPage hostelType="girls" /></HostelLayout>}
      />

      {/* 4. About Page */}
      <Route path="/about" element={<AboutPage />} />

      {/* 5. 404 Fallback */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
