'use client';

import { CheckCircle2 } from 'lucide-react';

export default function Checklists() {
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
  ];

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {checklists.map((checklist, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#eef3fb] to-white border-2 border-[#1b489b] rounded-lg p-6"
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
                <button className="w-full mt-6 bg-[#1b489b] text-white py-2 rounded-lg font-semibold hover:bg-[#0f2d5f] transition">
                  Download Checklist
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
