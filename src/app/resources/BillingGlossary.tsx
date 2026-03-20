'use client';

import { BookMarked } from 'lucide-react';

export default function BillingGlossary() {
  const terms = [
    {
      term: 'EOB',
      fullForm: 'Explanation of Benefits',
      definition:
        'Document from the insurer showing billed, allowed, and paid amounts.',
    },
    {
      term: 'EOP / ERA',
      fullForm: 'Electronic Remittance Advice',
      definition:
        'Electronic version of the EOB for automated payment posting.',
    },
    {
      term: 'AR',
      fullForm: 'Accounts Receivable',
      definition: 'Money owed to the practice from insurers and patients.',
    },
    {
      term: 'PMS',
      fullForm: 'Practice Management Software',
      definition:
        'Systems like Dentrix, Eaglesoft, Open Dental for scheduling and billing.',
    },
    {
      term: 'Pre-treatment Estimate',
      fullForm: 'Predetermination',
      definition: 'Request to insurer before treatment to estimate coverage.',
    },
    {
      term: 'COB',
      fullForm: 'Coordination of Benefits',
      definition: 'Determines which insurer pays first when patient has dual coverage.',
    },
    {
      term: 'Writeoff / Adjustment',
      fullForm: 'Contractual Adjustment',
      definition: 'Difference between billed amount and contracted rate.',
    },
    {
      term: 'Downtime Coverage',
      fullForm: 'Backup Verification',
      definition: 'Backup verification methods when payer portals fail.',
    },
    {
      term: 'Frequency Limitation',
      fullForm: 'Schedule Limit',
      definition: 'Restrictions on how often procedures can be claimed.',
    },
    {
      term: 'Waiting Period',
      fullForm: 'Eligibility Period',
      definition: 'Delay before certain procedures become covered.',
    },
  ];

  return (
    <section className="w-full">
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-white border-b-4 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4 text-center">
            Billing <span className="text-[#1b489b]">Glossary</span>
          </h2>
          <p className="text-gray-600 text-center text-lg mb-12 max-w-2xl mx-auto">
            Essential dental billing terminology explained
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {terms.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#eef3fb] to-white border-l-4 border-[#1b489b] p-6 rounded-lg hover:shadow-lg transition"
              >
                <div className="flex items-start gap-3">
                  <BookMarked className="w-6 h-6 text-[#1b489b] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-black mb-1">
                      {item.term}
                    </h3>
                    <p className="text-sm text-[#1b489b] font-medium mb-2">
                      {item.fullForm}
                    </p>
                    <p className="text-gray-700 text-sm">
                      {item.definition}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
