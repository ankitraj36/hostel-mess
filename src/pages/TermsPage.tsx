import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft, AlertCircle } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BottomNavigation } from '../components/BottomNavigation';

export const TermsPage: React.FC = () => {
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
            <FileText className="w-3.5 h-3.5" />
            Hostel Dining Regulations & Platform Terms
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
            Effective Date: November 3, 2026 · Governing Law: India (Bhubaneswar, Odisha)
          </p>
          <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
            These Terms & Conditions govern your access and use of the <strong>HOSTEL MESS</strong> digital food menu platform. By accessing or browsing this website, you agree to comply with and be bound by these terms.
          </p>
        </div>

        {/* Important Mess Disclaimer Callout */}
        <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 sm:p-6 mb-8 flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900 space-y-1">
            <h2 className="font-bold text-amber-900">
              Informational Notice & Daily Discrepancies
            </h2>
            <p className="text-amber-800/90 leading-relaxed">
              This portal reflects the official mess menu notified by the Hostel Management Committee of ITER, Siksha 'O' Anusandhan. Actual items served may occasionally vary without prior digital notice due to seasonal produce availability, market logistics, festive occasions, or unforeseen kitchen emergencies.
            </p>
          </div>
        </div>

        {/* Terms Content Card */}
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-10 border border-gray-200/80 shadow-2xs">

          {/* 1. Purpose & Eligibility */}
          <section className="space-y-2 border-b border-gray-100 pb-6">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center">1</span>
              Platform Purpose and Scope
            </h2>
            <p>
              HOSTEL MESS is provided as an open campus utility to assist college hostel students, faculty, and authorized dining hall visitors in checking daily breakfast, lunch, snacks, and dinner offerings.
            </p>
            <p className="text-xs text-gray-600">
              The service covers two distinct dining experiences:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
              <li><strong>Boys' Hostel:</strong> Single weekly cycle with standard dining hall portions, staple rice varieties (Usuna & Arua), dalma, besara, and rotating non-veg options.</li>
              <li><strong>Ladies' Hostel:</strong> Monthly 4-week rotating schedule with interactive week selectors.</li>
            </ul>
          </section>

          {/* 2. Dining Hall Code of Conduct */}
          <section className="space-y-2 border-b border-gray-100 pb-6">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center">2</span>
              Dining Hall Code of Conduct & Portion Guidelines
            </h2>
            <p className="text-xs">
              Viewing the online menu does not supersede physical dining hall rules established by the Chief Warden and Mess Committee:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-600">
              <li>
                <strong>Mess Timings:</strong> Meals are served strictly during designated hours (Breakfast: 7:30–9:00 AM; Lunch: 12:30–2:00 PM; Snacks: 4:30–5:30 PM; Dinner: 7:30–9:00 PM). Counters close promptly.
              </li>
              <li>
                <strong>Identity Verification:</strong> Residents must present valid university hostel identity cards / biometric check-in at the entrance.
              </li>
              <li>
                <strong>Portion Standards:</strong> Unlimited staples (rice, roti, dal, sabji) are provided for dine-in consumption only. Non-veg specials and sweet desserts are subject to standard portion allocations per resident.
              </li>
              <li>
                <strong>Zero Food Waste:</strong> Residents are strongly urged to take only what they consume to uphold campus food conservation standards.
              </li>
            </ul>
          </section>

          {/* 3. Dining Fees & Refund / Cancellation Disclaimer */}
          <section className="space-y-2 border-b border-gray-100 pb-6">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center">3</span>
              Mess Fees, Rebates, & Refund Policies
            </h2>
            <div className="bg-gray-50 border border-gray-200/80 p-4 rounded-xl text-xs space-y-2 text-gray-700">
              <p className="font-semibold text-gray-900">
                Notice Regarding Financial Transactions:
              </p>
              <p>
                <strong>No Online Transactions:</strong> This digital platform is strictly informational and does NOT process payments, subscriptions, dining fees, or security deposits.
              </p>
              <p>
                <strong>Hostel Mess Fee Refunds & Rebates:</strong> Any entitlement to mess rebates (e.g. for approved leaves, academic internships, or semester breaks) is governed exclusively by physical university ordinances and requires prior written application submitted to the <strong>Chief Warden's Office, ITER Campus-1</strong>. No online cancellations or instant refund requests can be processed through this site.
              </p>
            </div>
          </section>

          {/* 4. Acceptable Use Policy */}
          <section className="space-y-2 border-b border-gray-100 pb-6">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center">4</span>
              Acceptable Use & User Conduct
            </h2>
            <p className="text-xs">
              When using this website, you agree that you will not:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
              <li>Deploy automated crawlers, scrapers, or bots in a manner that degrades service performance for campus peers.</li>
              <li>Attempt to compromise, probe, or attack the underlying hosting infrastructure or Content Delivery Network.</li>
              <li>Misrepresent official university announcements or publish distorted dining information.</li>
            </ul>
          </section>

          {/* 5. Intellectual Property Rights */}
          <section className="space-y-2 border-b border-gray-100 pb-6">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center">5</span>
              Intellectual Property Rights
            </h2>
            <p className="text-xs">
              The interface design, layouts, theme styling, software source code, and logo marks of HOSTEL MESS are protected by applicable intellectual property laws. Institutional trademarks, emblems, and university names remain the exclusive property of Siksha 'O' Anusandhan (Deemed to be University).
            </p>
          </section>

          {/* 6. Limitation of Liability */}
          <section className="space-y-2 border-b border-gray-100 pb-6">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center">6</span>
              Limitation of Liability
            </h2>
            <p className="text-xs text-gray-600">
              To the maximum extent permitted under applicable law, the developers, contributors, and the university administration shall not be liable for any indirect, incidental, or consequential damages arising from reliance on the online schedule, minor recipe variations, allergen presence, or service interruptions. Students with specific food allergies or medical dietary requirements must exercise personal discretion and consult mess supervisors directly.
            </p>
          </section>

          {/* 7. Dispute Resolution & Governing Law */}
          <section className="space-y-2">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center">7</span>
              Governing Law and Dispute Resolution
            </h2>
            <p className="text-xs text-gray-600">
              These Terms & Conditions are governed by and construed in accordance with the laws of the <strong>Republic of India</strong>. Any disputes arising out of or in connection with the use of this website shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Bhubaneswar, Odisha</strong>.
            </p>
            <div className="pt-2 text-xs text-gray-500">
              For any legal or regulatory queries, please contact <a href="mailto:privacy@iter.ac.in" className="text-blue-600 font-semibold hover:underline">privacy@iter.ac.in</a>.
            </div>
          </section>

        </div>

      </main>

      <Footer />
      <BottomNavigation />
    </div>
  );
};
