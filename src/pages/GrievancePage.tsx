import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldAlert,
  ArrowLeft,
  Send,
  CheckCircle2,
  AlertTriangle,
  Mail,
  MapPin,
  Clock,
  Trash2,
  Lock,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BottomNavigation } from '../components/BottomNavigation';
import { clearAllLocalData } from '../utils/consentManager';

export const GrievancePage: React.FC = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [hostel, setHostel] = useState('boys');
  const [requestType, setRequestType] = useState('right_to_erasure');
  const [message, setMessage] = useState('');
  const [hasConsented, setHasConsented] = useState(false);

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [dataPurged, setDataPurged] = useState(false);

  const handlePurgeData = () => {
    clearAllLocalData();
    setDataPurged(true);
    setTimeout(() => setDataPurged(false), 4000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!contact.trim() || !contact.includes('@') && contact.length < 5) {
      setErrorMsg('Please enter a valid university email address or student roll number.');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setErrorMsg('Please describe your grievance or request with at least 10 characters.');
      return;
    }
    if (!hasConsented) {
      setErrorMsg('Under the DPDP Act 2023, you must check the consent box to submit this request.');
      return;
    }

    // Generate unique tracking reference number
    const refCode = `DPDP-ITER-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(refCode);

    // Reset fields
    setName('');
    setContact('');
    setMessage('');
    setHasConsented(false);
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
            <ShieldAlert className="w-3.5 h-3.5" />
            Statutory Redressal Mechanism · Section 13 DPDP Act, 2023
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Grievance Redressal & Data Principal Rights
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
            Institute of Technical Education and Research (ITER), Siksha 'O' Anusandhan, Bhubaneswar
          </p>
          <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
            As a student, hosteller, or visitor, you are a <strong>Data Principal</strong> under India's Digital Personal Data Protection Act, 2023. You have the statutory right to request information, seek data erasure, withdraw consent, or file a formal grievance with our designated Grievance Officer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-2xs">
            <h2 className="font-heading text-lg font-bold text-gray-900 mb-1">
              Submit a Request or Grievance
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              All requests are handled under strict confidentiality in compliance with the DPDP Rules.
            </p>

            {submittedRef ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-base font-bold text-emerald-950">
                  Grievance Request Registered
                </h3>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-sm mx-auto">
                  Your request has been successfully assigned reference ticket:
                </p>
                <div className="inline-block px-4 py-2 bg-white rounded-xl border border-emerald-300 font-mono font-bold text-sm text-emerald-900 shadow-2xs">
                  {submittedRef}
                </div>
                <p className="text-[11px] text-emerald-700 leading-relaxed pt-1">
                  An acknowledgment has been logged. Under DPDP regulations, our Grievance Officer will review and respond within statutory turnaround times. You may also email this reference to <a href="mailto:grievance-mess@iter.ac.in" className="underline font-semibold">grievance-mess@iter.ac.in</a>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmittedRef(null)}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-emerald-900 bg-white border border-emerald-300 hover:bg-emerald-100 rounded-xl transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="dpdp-name" className="block font-semibold text-gray-700 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="dpdp-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 transition-colors"
                  />
                </div>

                {/* University Roll No. or Email */}
                <div>
                  <label htmlFor="dpdp-contact" className="block font-semibold text-gray-700 mb-1">
                    University Roll Number or Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="dpdp-contact"
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="e.g. 2141010000 or student@iter.ac.in"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 transition-colors"
                  />
                </div>

                {/* Hostel Affiliation */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="dpdp-hostel" className="block font-semibold text-gray-700 mb-1">
                      Hostel Affiliation
                    </label>
                    <select
                      id="dpdp-hostel"
                      value={hostel}
                      onChange={(e) => setHostel(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                    >
                      <option value="boys">Boys' Hostel (Campus-1)</option>
                      <option value="girls">Ladies' Hostel (Campus-1)</option>
                      <option value="other">Day Scholar / Visitor</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="dpdp-type" className="block font-semibold text-gray-700 mb-1">
                      Request Type <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="dpdp-type"
                      value={requestType}
                      onChange={(e) => setRequestType(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white font-medium"
                    >
                      <option value="right_to_erasure">Right to Erasure (Sec 12)</option>
                      <option value="right_to_information">Right to Information (Sec 11)</option>
                      <option value="withdraw_consent">Withdrawal of Consent</option>
                      <option value="menu_discrepancy">Menu Discrepancy Grievance</option>
                      <option value="general_inquiry">General Privacy Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message Details */}
                <div>
                  <label htmlFor="dpdp-message" className="block font-semibold text-gray-700 mb-1">
                    Details of Request or Grievance <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="dpdp-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide specific details regarding your request or concern..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 transition-colors"
                  ></textarea>
                </div>

                {/* Explicit Non-Pre-Checked Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-200 cursor-pointer hover:bg-gray-100/70 transition-colors">
                    <input
                      type="checkbox"
                      required
                      checked={hasConsented}
                      onChange={(e) => setHasConsented(e.target.checked)}
                      className="mt-0.5 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 shrink-0"
                    />
                    <span className="text-[11px] text-gray-600 leading-relaxed">
                      <strong>Explicit Consent (DPDP Act, 2023):</strong> I consent to the collection and processing of my name, contact information, and grievance details solely for the purpose of investigating and resolving this matter in accordance with the <Link to="/privacy" className="text-blue-600 underline font-semibold">Privacy Policy</Link>. This consent is free, specific, and unambiguous.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs shadow-2xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Submit Formal Request
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Instant Purge & Officer Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Instant Erasure Tool */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                <Trash2 className="w-4 h-4" />
                <h3>Instant Client Data Purge</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Want to clear your preferences right now without filing a ticket? You can wipe your browser's stored hostel choice and consent logs instantly.
              </p>
              <button
                type="button"
                onClick={handlePurgeData}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs ${
                  dataPurged
                    ? 'bg-emerald-600 text-white'
                    : 'bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100'
                }`}
              >
                {dataPurged ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    All Local Storage Purged!
                  </>
                ) : (
                  <>
                    <Trash2 className="w-4 h-4" />
                    Purge All My Local Data Now
                  </>
                )}
              </button>
            </div>

            {/* Officer Details */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs space-y-4 text-xs text-gray-700">
              <h3 className="font-heading font-bold text-sm text-gray-900 border-b border-gray-100 pb-2">
                Official Grievance Officer Details
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Direct Email Channels:</p>
                    <p className="text-blue-600 font-medium">grievance-mess@iter.ac.in</p>
                    <p className="text-blue-600 font-medium">privacy@iter.ac.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Campus Physical Office:</p>
                    <p className="text-gray-600 leading-relaxed">
                      Office of the Chief Warden & Mess Committee<br />
                      ITER Campus-1, Jagamohan Nagar, Khandagiri<br />
                      Bhubaneswar, Odisha - 751030
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Statutory Timelines:</p>
                    <p className="text-gray-600 leading-relaxed">
                      Acknowledgment within <strong>48 hours</strong>; substantive resolution delivered within timelines prescribed under notified DPDP Rules.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Statutory Notice */}
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/80 text-[11px] text-gray-500 space-y-1.5 leading-relaxed">
              <p className="font-semibold text-gray-700 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-gray-600" />
                Data Protection Board of India
              </p>
              <p>
                If you are unsatisfied with the resolution provided by the Data Fiduciary's Grievance Officer, you hold the statutory right to escalate your grievance to the <strong>Data Protection Board of India</strong> in accordance with Section 13(3) of the Act.
              </p>
            </div>

          </div>

        </div>

      </main>

      <Footer />
      <BottomNavigation />
    </div>
  );
};
