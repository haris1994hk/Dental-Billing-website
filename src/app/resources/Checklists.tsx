'use client';

import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Checklists() {
  const [emailPopupOpen, setEmailPopupOpen] = useState(false);
  const [selectedChecklist, setSelectedChecklist] = useState('');
  const [email, setEmail] = useState('');

  const checklists = [
    {
      title: 'Daily Billing Checklist',
      items: [
        'Post payments',
        'Review rejected claims',
        'Check EOBs/ERAs',
        'Work 30+ day claims',
        'Confirm insurance',
      ],
    },
    {
      title: 'New Patient Insurance Verification',
      items: [
        'Confirm eligibility',
        'Document annual maximum',
        'Check deductible',
        'Waiting periods',
        'Frequency limits',
      ],
    },
    {
      title: 'Month-End Revenue Audit',
      items: [
        'Reconcile payments',
        'Run aging reports',
        'Identify top unpaid claims',
        'Review denial rate',
        'Audit patient statements',
      ],
    },
    {
      title: 'EOB Payment Posting Checklist',
      items: [
        'Confirm EOB received from payer',
        'Verify patient and procedure match',
        'Check allowed amount vs billed amount',
        'Record adjustments and write-offs',
        'Flag any denials for follow-up',
        'Post to patient ledger',
        'Reconcile with bank deposit',
      ],
    },
  ];

  const handleDownloadClick = (checklistTitle: string) => {
    setSelectedChecklist(checklistTitle);
    setEmailPopupOpen(true);
  };

  const handleEmailSubmit = () => {
    // Handle email capture
    setEmailPopupOpen(false);
    setEmail('');
    setSelectedChecklist('');
  };

  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 py-20 overflow-hidden isolate">
      <div className="absolute inset-0 bg-gradient-to-br from-[#01162E] via-[#0a2351] to-[#01162E]"></div>
      <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/3 -translate-y-1/3 bg-blue-500/15 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-72 h-72 translate-x-1/3 -translate-y-1/3 bg-purple-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 -translate-x-1/3 translate-y-1/3 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 translate-x-1/3 translate-y-1/3 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_35%)]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready-to-Use <span className="text-blue-300">Checklists</span>
          </h2>
          <p className="text-white/80 text-center text-lg max-w-2xl mx-auto">
            Streamline your workflow with these proven templates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {checklists.map((checklist, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-blue-400/50 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {checklist.title}
                </h3>
                <div className="space-y-3">
                  {checklist.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span className="text-white/75 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handleDownloadClick(checklist.title)}
                  className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all shadow-md"
                >
                  Download Checklist
                </button>
              </div>
            ))}
          </div>
      </div>

      {/* Email Capture Popup - Professional Design */}
      {emailPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-blue-100">
            {/* Header with close button */}
            <div className="bg-gradient-to-r from-[#01162E] to-[#0a2351] px-8 py-8 relative">
              <button
                onClick={() => setEmailPopupOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="mb-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-bold !text-white mb-2">Download Your Checklist</h3>
              <p className="text-white/90 text-sm">Get instant access to your checklist</p>
            </div>

            {/* Form Content */}
            <div className="px-8 py-8">
              <div className="mb-6">
                <p className="text-gray-600 text-center text-sm mb-4">
                  Enter your email to download the full <span className="font-semibold text-[#01162E]">{selectedChecklist}</span>
                </p>
              </div>

              <div className="space-y-4">
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 text-[#01162E] placeholder-gray-400 transition"
                  />
                  <p className="text-xs text-gray-500 mt-1">We'll never spam you. Unsubscribe anytime.</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-6">
                  <button
                    onClick={() => setEmailPopupOpen(false)}
                    className="flex-1 px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleEmailSubmit}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition duration-200 shadow-md hover:shadow-lg"
                  >
                    Download Now
                  </button>
                </div>
              </div>

              {/* Footer Trust Element */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-xs text-gray-600 text-center">
                  ✓ Instant download <span className="text-gray-400">•</span> HIPAA compliant <span className="text-gray-400">•</span> Secure
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}




