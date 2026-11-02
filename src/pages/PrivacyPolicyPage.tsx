import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, Trash2, CheckCircle2, UserCheck } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BottomNavigation } from '../components/BottomNavigation';
import { clearAllLocalData } from '../utils/consentManager';

export const PrivacyPolicyPage: React.FC = () => {
  const [dataCleared, setDataCleared] = useState(false);

  const handleClearData = () => {
    clearAllLocalData();
    setDataCleared(true);
    setTimeout(() => setDataCleared(false), 4000);
  };

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
            <ShieldCheck className="w-3.5 h-3.5" />
            Digital Personal Data Protection Act, 2023 Compliant
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
            Effective Date: November 3, 2026 · Applicable Jurisdiction: India
          </p>
          <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
            This Privacy Policy explains how <strong>HOSTEL MESS</strong> ("Platform", "we", "us", or "our"), designed for students and residents of <strong>ITER, Siksha 'O' Anusandhan (Deemed to be University), Bhubaneswar, Odisha</strong>, respects your personal privacy and aligns with the provisions of the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> of India.
          </p>
        </div>

        {/* Instant Data Erasure Utility Card (Statutory Right) */}
        <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-5 sm:p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-sm font-bold text-blue-900 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-blue-700" />
              Exercise Your Right to Erasure (DPDP Act, Section 12)
            </h2>
            <p className="text-xs text-blue-800/80 leading-relaxed max-w-xl">
              You can instantly purge all local device data (hostel preference, consent records, and cache) stored in your browser with one click.
            </p>
          </div>
          <button
            type="button"
            onClick={handleClearData}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-2xs ${
              dataCleared
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-rose-600 border border-rose-200 hover:bg-rose-50'
            }`}
          >
            {dataCleared ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                Local Data Purged!
              </>
            ) : (
              <>
                <Trash2 className="w-4 h-4" />
                Clear My Local Data
              </>
            )}
          </button>
        </div>

        {/* Privacy Policy Articles */}
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-10 border border-gray-200/80 shadow-2xs">

          {/* 1. Identification of Data Fiduciary */}
          <section className="space-y-2 border-b border-gray-100 pb-6">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center">1</span>
              Identification of Data Fiduciary
            </h2>
            <p>
              Under the Digital Personal Data Protection Act, 2023, the entity determining the purpose and means of data processing is:
            </p>
            <div className="bg-gray-50 p-3.5 rounded-xl text-xs space-y-1 text-gray-700 font-mono">
              <p><strong>Entity:</strong> HOSTEL MESS Committee / Hostel Management Administration</p>
              <p><strong>Institution:</strong> Institute of Technical Education and Research (ITER), Siksha 'O' Anusandhan</p>
              <p><strong>Campus Address:</strong> ITER Campus-1, Jagamohan Nagar, Khandagiri, Bhubaneswar, Odisha - 751030</p>
              <p><strong>Official Email:</strong> privacy@iter.ac.in</p>
            </div>
          </section>

          {/* 2. Personal Data We Process (Data Minimization) */}
          <section className="space-y-2 border-b border-gray-100 pb-6">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center">2</span>
              What Personal Data We Process
            </h2>
            <p>
              We adhere strictly to the principle of <strong>Data Minimization</strong> (Section 6, DPDP Act 2023). Our platform is designed as an open-access utility that operates without requiring user accounts or registrations:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-600">
              <li>
                <strong>No Mandatory Identifiers:</strong> We do NOT collect or store your name, phone number, university registration number, biometric attendance data, email address, or dining card details during normal menu browsing.
              </li>
              <li>
                <strong>Client-Side Local Storage:</strong> To prevent you from having to choose your hostel every time you open the site, your browser stores a key (<code className="bg-gray-100 px-1 py-0.5 rounded text-gray-800">hostel_mess_preferred</code>) with the value <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-800">"boys"</code> or <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-800">"girls"</code>, and a consent record (<code className="bg-gray-100 px-1 py-0.5 rounded text-gray-800">hostel_mess_consent</code>).
              </li>
              <li>
                <strong>Hosting Technical Logs:</strong> As with any website accessed over the Internet, hosting infrastructure (e.g. GitHub Pages / Vercel) processes standard automated network requests containing IP addresses and user-agent strings for network security and denial-of-service defense.
              </li>
            </ul>
          </section>

          {/* 3. Purpose Limitation */}
          <section className="space-y-2 border-b border-gray-100 pb-6">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center">3</span>
              Purpose of Data Processing
            </h2>
            <p>
              In accordance with Section 4 and 5 of the DPDP Act 2023, data is processed solely for specified lawful purposes:
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-xs text-gray-600">
              <li>Displaying daily meal schedules and dynamic "Serving Now / Up Next" alerts in accordance with local device time.</li>
              <li>Preserving your selected hostel portal view across visits.</li>
              <li>Ensuring network security, preventing abuse, and honoring your statutory consent preferences.</li>
            </ol>
            <p className="text-xs text-gray-500 italic mt-1">
              Your preferences are never sold, rented, monetized, or shared with commercial advertising brokers.
            </p>
          </section>

          {/* 4. Grounds for Processing and Consent */}
          <section className="space-y-2 border-b border-gray-100 pb-6">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center">4</span>
              Lawful Grounds & Consent Architecture
            </h2>
            <p>
              Under Section 6 of the DPDP Act 2023, consent must be <em>free, specific, informed, unconditional, and unambiguous with a clear affirmative action</em>:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-600">
              <li>We never use pre-checked consent boxes or deceptive dark patterns.</li>
              <li>Essential functionality remains accessible regardless of non-essential consent choices.</li>
              <li>You may modify or withdraw your consent at any time using the <strong>Cookie Settings</strong> control in the footer.</li>
            </ul>
          </section>

          {/* 5. Rights of the Data Principal */}
          <section className="space-y-3 border-b border-gray-100 pb-6">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center">5</span>
              Statutory Rights of Data Principals (DPDP Act, Chapter III)
            </h2>
            <p className="text-xs">
              As a resident, student, or visitor in India, you are entitled to the following rights under the Act:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200/80">
                <h3 className="font-bold text-gray-900 mb-1">Right to Access Information (Sec 11)</h3>
                <p className="text-gray-600">The right to obtain a summary of personal data being processed and identities of processors.</p>
              </div>
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200/80">
                <h3 className="font-bold text-gray-900 mb-1">Right to Correction & Erasure (Sec 12)</h3>
                <p className="text-gray-600">The right to correct inaccurate data and request erasure of personal data no longer required.</p>
              </div>
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200/80">
                <h3 className="font-bold text-gray-900 mb-1">Right of Grievance Redressal (Sec 13)</h3>
                <p className="text-gray-600">The right to submit grievances to the designated Grievance Officer and obtain redress within statutory timelines.</p>
              </div>
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200/80">
                <h3 className="font-bold text-gray-900 mb-1">Right to Nominate (Sec 14)</h3>
                <p className="text-gray-600">The right to nominate an individual to exercise rights on your behalf in the event of death or incapacity.</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 pt-1">
              To exercise these rights, you may use our <Link to="/grievance" className="text-blue-600 font-semibold hover:underline">Grievance Redressal Portal</Link> or email our Grievance Officer.
            </p>
          </section>

          {/* 6. Third-Party Processors & Infrastructure */}
          <section className="space-y-2 border-b border-gray-100 pb-6">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center">6</span>
              Third-Party Data Processors & Infrastructure
            </h2>
            <p className="text-xs">
              Our website is hosted on secure global cloud infrastructure. Our service providers act as Data Processors bound by confidentiality:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
              <li><strong>GitHub Pages / Vercel:</strong> Static hosting infrastructure and DDoS protection.</li>
              <li><strong>Google Fonts:</strong> Web typography stylesheets loaded securely over HTTPS.</li>
              <li><strong>Unsplash:</strong> Content Delivery Network for royalty-free culinary reference imagery.</li>
            </ul>
          </section>

          {/* 7. Security Safeguards */}
          <section className="space-y-2 border-b border-gray-100 pb-6">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center">7</span>
              Technical and Organizational Security Safeguards
            </h2>
            <p className="text-xs">
              In compliance with Section 8(5) of the DPDP Act 2023, we enforce technical security safeguards:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
              <li>Full Transport Layer Security (TLS 1.3 / HTTPS) encryption for all client-server communications.</li>
              <li>Zero storage of sensitive personal data or passwords in plain-text client storage.</li>
              <li>Static bundle generation with strict Content-Security and integrity verification.</li>
            </ul>
          </section>

          {/* 8. Data Protection & Grievance Redressal Officer */}
          <section className="space-y-2">
            <h2 className="font-heading text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-700 text-xs font-bold flex items-center justify-center">8</span>
              Grievance Redressal Officer (Section 13, DPDP Act)
            </h2>
            <p className="text-xs">
              If you have any questions, concerns, or grievances regarding the processing of your data, you may contact our designated Grievance Officer:
            </p>
            <div className="bg-gray-50 border border-gray-200/80 p-4 rounded-xl space-y-1.5 text-xs text-gray-700">
              <p><strong>Officer:</strong> Data Protection & Mess Grievance Officer</p>
              <p><strong>Office:</strong> Chief Warden Office / Hostel Management Committee</p>
              <p><strong>Institution:</strong> ITER, Siksha 'O' Anusandhan (Deemed to be University)</p>
              <p><strong>Physical Address:</strong> Jagamohan Nagar, Khandagiri, Bhubaneswar, Odisha, 751030</p>
              <p><strong>Email:</strong> <a href="mailto:grievance-mess@iter.ac.in" className="text-blue-600 font-semibold hover:underline">grievance-mess@iter.ac.in</a> / <a href="mailto:privacy@iter.ac.in" className="text-blue-600 font-semibold hover:underline">privacy@iter.ac.in</a></p>
              <p className="text-[11px] text-gray-500 pt-1">
                Grievances received will be acknowledged within 48 hours and investigated within statutory timelines prescribed under notified DPDP Rules.
              </p>
            </div>
          </section>

        </div>

      </main>

      <Footer />
      <BottomNavigation />
    </div>
  );
};
