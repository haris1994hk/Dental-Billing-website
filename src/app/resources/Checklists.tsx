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
    <section className="w-full">
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-white border-b-4 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4 text-center">
            Ready-to-Use <span className="text-[#1b489b]">Checklists</span>
          </h2>
          <p className="text-gray-600 text-center text-lg mb-12 max-w-2xl mx-auto">
            Streamline your workflow with these proven templates
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {checklists.map((checklist, index) => (
              <div
                key={index}
                className="border-2 border-[#1b489b] rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-black mb-4">
                  {checklist.title}
                </h3>
                <div className="space-y-3">
                  {checklist.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#1b489b] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handleDownloadClick(checklist.title)}
                  className="w-full mt-6 bg-[#1b489b] text-white py-2 rounded-lg font-semibold hover:bg-[#0f2d5f] transition"
                >
                  Download Checklist
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Email Capture Popup - Professional Design */}
      {emailPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            {/* Header with close button */}
            <div className="bg-gradient-to-r from-[#1b489b] to-[#0f2d5f] px-8 py-8 relative">
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
                  Enter your email to download the full <span className="font-semibold text-[#1b489b]">{selectedChecklist}</span>
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#1b489b] focus:ring-2 focus:ring-[#1b489b]/10 text-gray-900 placeholder-gray-400 transition"
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
                    className="flex-1 px-4 py-3 bg-[#1b489b] text-white rounded-lg font-semibold hover:bg-[#0f2d5f] transition duration-200 shadow-md hover:shadow-lg"
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
