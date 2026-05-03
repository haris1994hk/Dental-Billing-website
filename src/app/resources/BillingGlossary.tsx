'use client';

import { BookMarked } from 'lucide-react';

export default function BillingGlossary() {
  const terms = [
    {
      term: 'AI Payment Posting',
      fullForm: 'Automated EOB Processing',
      definition: 'Technology that reads EOB and ERA documents, extracts payment data, and delivers posting-ready output without manual data entry. Tools like PostEasy AI process EOBs in minutes and flag denials automatically.',
    },
    {
      term: 'EOB Automation',
      fullForm: 'Remittance Automation',
      definition: 'The process of using software to automatically parse, validate, and post Explanation of Benefits documents — eliminating manual entry and reducing posting errors.',
    },
    {
      term: 'RCM',
      fullForm: 'Revenue Cycle Management',
      definition: 'The full financial process of a dental practice — from insurance verification before an appointment to final payment collection. Efficient RCM directly determines a practice\'s profitability.',
    },
  ];

  return (
    <section className="w-full">
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-white border-b-4 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 text-center">
            Billing <span className="text-[#1b489b]">Glossary</span>
          </h2>
          <p className="text-gray-400 text-center text-lg mb-12 max-w-2xl mx-auto">
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
                    <h3 className="font-semibold text-white mb-1">
                      {item.term}
                    </h3>
                    <p className="text-sm text-[#1b489b] font-medium mb-2">
                      {item.fullForm}
                    </p>
                    <p className="text-gray-300 text-sm">
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




