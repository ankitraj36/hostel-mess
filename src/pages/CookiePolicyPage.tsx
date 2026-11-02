import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, ArrowLeft, Cookie, HardDrive, Lock } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BottomNavigation } from '../components/BottomNavigation';
import { CookiePreferencesModal } from '../components/CookiePreferencesModal';

export const CookiePolicyPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-gray-900">
      <Header />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 pb-28 sm:pb-20">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
        </div>

        {/* Page Hero Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-2xs mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200 mb-3">
            <Cookie className="w-3.5 h-3.5" />
            Browser Storage & Consent Architecture
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Cookie & Storage Policy
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
            Effective Date: November 3, 2026 · Aligned with Indian DPDP Act, 2023
          </p>
          <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
            This Cookie Policy explains how <strong>HOSTEL MESS</strong> utilizes client-side storage technologies—primarily <strong>HTML5 LocalStorage</strong>—to store your preferences, ensure snappy performance, and respect your statutory consent choices.
          </p>
        </div>

        {/* Action Callout: Manage Preferences */}
        <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-5 sm:p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-sm font-bold text-blue-900 flex items-center gap-1.5">
              <SlidersHorizontal className="w-4 h-4 text-blue-700" />
              Manage Your Preferences Anytime
            </h2>
            <p className="text-xs text-blue-800/80 leading-relaxed max-w-xl">
              You can view, customize, or revoke your consent preferences at any time. Non-essential storage categories remain disabled until you affirmatively enable them.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors flex items-center gap-2 shrink-0 cursor-pointer shadow-2xs"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Open Cookie Settings
          </button>
        </div>

        {/* Policy Content Card */}
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-10 border border-gray-200/80 shadow-2xs">

          {/* 1. What are Cookies & Local Storage */}
          <section className="space-y-2 border-b border-gray-100 pb-6">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center">1</span>
              Cookies vs. HTML5 Local Storage
            </h2>
            <p>
              Traditional cookies are small text snippets sent back and forth between a web browser and a web server on every HTTP request.
            </p>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/70 text-xs space-y-2 text-gray-600">
              <div className="flex items-start gap-2">
                <HardDrive className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Why we prefer HTML5 LocalStorage:</strong> Unlike tracking cookies, <code>localStorage</code> stays strictly inside your device's browser. It is <em>never</em> automatically transmitted over the network with page requests, which eliminates network overhead and protects your privacy.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Inventory of Keys */}
          <section className="space-y-3 border-b border-gray-100 pb-6">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center">2</span>
              Detailed Storage Inventory
            </h2>
            <p className="text-xs text-gray-600">
              Below is the comprehensive list of storage keys used by the HOSTEL MESS platform:
            </p>

            <div className="border border-gray-200 rounded-xl overflow-x-auto text-xs">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-700 font-semibold">
                  <tr>
                    <th className="p-3">Key Identifier</th>
                    <th className="p-3">Type</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Lifespan</th>
                    <th className="p-3">Purpose & Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                  <tr>
                    <td className="p-3 font-mono font-medium text-gray-900">hostel_mess_preferred</td>
                    <td className="p-3">localStorage</td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <Lock className="w-2.5 h-2.5" /> Essential
                      </span>
                    </td>
                    <td className="p-3">Persistent</td>
                    <td className="p-3">Remembers your preferred hostel ("boys" or "girls") so your dashboard opens immediately without re-selection.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-medium text-gray-900">hostel_mess_consent</td>
                    <td className="p-3">localStorage</td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <Lock className="w-2.5 h-2.5" /> Essential
                      </span>
                    </td>
                    <td className="p-3">180 Days</td>
                    <td className="p-3">Records your consent choices, policy schema version, and timestamp under DPDP Act requirements.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-medium text-gray-900">hostel_mess_diet_filter</td>
                    <td className="p-3">localStorage</td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                        Preferences
                      </span>
                    </td>
                    <td className="p-3">Persistent</td>
                    <td className="p-3">Remembers active dietary view preference (e.g. Vegetarian only vs. All meals).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Category Classifications */}
          <section className="space-y-3 border-b border-gray-100 pb-6">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center">3</span>
              Storage Classification & Consent Rules
            </h2>
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50/50">
                <h3 className="font-bold text-gray-900">1. Strictly Necessary (Essential)</h3>
                <p className="text-gray-600 mt-1">
                  Required for core platform functionality, ensuring that your hostel choice is remembered and your statutory consent decisions are preserved. These keys cannot be turned off.
                </p>
              </div>
              <div className="p-3.5 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900">2. Performance & Analytics (Non-Essential)</h3>
                <p className="text-gray-600 mt-1">
                  Used for measuring campus menu page performance, identifying server load bottlenecks, and optimizing bandwidth. Never loaded prior to your explicit consent.
                </p>
              </div>
              <div className="p-3.5 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900">3. Dietary Preferences (Non-Essential)</h3>
                <p className="text-gray-600 mt-1">
                  Caches dietary filters across sessions so you don't have to reapply your vegetarian or non-vegetarian view every day.
                </p>
              </div>
            </div>
          </section>

          {/* 4. How to Manage in Browser */}
          <section className="space-y-2 border-b border-gray-100 pb-6">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center">4</span>
              Managing Browser Storage Directly
            </h2>
            <p className="text-xs text-gray-600">
              In addition to our on-site <strong>Cookie Settings</strong> modal, you can delete or block storage directly via your browser settings:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
              <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Site settings → Cookies and site data.</li>
              <li><strong>Apple Safari:</strong> Settings → Safari → Advanced → Website Data.</li>
              <li><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data.</li>
              <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies and site data.</li>
            </ul>
          </section>

          {/* 5. Contact & Updates */}
          <section className="space-y-2">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center">5</span>
              Questions and Contact
            </h2>
            <p className="text-xs text-gray-600">
              If you have any questions about our use of storage or want to report a technical issue, contact the hostel IT management team at <a href="mailto:privacy@iter.ac.in" className="text-blue-600 font-semibold hover:underline">privacy@iter.ac.in</a>.
            </p>
          </section>

        </div>

      </main>

      <Footer />
      <BottomNavigation />

      {/* Preferences Modal */}
      <CookiePreferencesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
