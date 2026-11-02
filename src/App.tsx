import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BoysDashboard, GirlsDashboard } from './pages/HostelDashboard';
import { WeeklyMenuPage } from './pages/WeeklyMenuPage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { GrievancePage } from './pages/GrievancePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { HostelLayout } from './layouts/HostelLayout';
import { CookieConsentBanner } from './components/CookieConsentBanner';

export const App: React.FC = () => {
  return (
    <>
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

        {/* 5. Essential Legal & DPDP Compliance Pages */}
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<CookiePolicyPage />} />
        <Route path="/grievance" element={<GrievancePage />} />

        {/* 6. 404 Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Global DPDP-Compliant Cookie & Storage Consent Banner */}
      <CookieConsentBanner />
    </>
  );
};

export default App;
