'use client';

import { BookOpen, ArrowRight } from 'lucide-react';

export default function GuidesAndEducation() {
  const guides = [
    {
      title: 'How to Reduce AR Days Below 30: A Step-by-Step Framework',
      description: 'Understand what\'s driving your AR aging and workflow improvements.',
    },
    {
      title: 'EOB vs EOP: What Every Front Office Should Know',
      description: 'Difference between Explanation of Benefits and Electronic Remittance Advice.',
    },
    {
      title: 'Insurance Verification Done Right',
      description: 'Complete walkthrough of what to verify before appointments.',
    },
    {
      title: 'Writing Denial Appeals That Actually Win',
      description: 'Common denial reasons and language to overturn claims.',
    },
    {
      title: 'How PostEasy AI Works: A Plain English Guide',
      description: 'Complete explanation of automated EOB extraction and how PostEasy AI saves your team hours on payment posting.',
    },
    {
      title: 'Top 5 Reasons Dental Claims Get Denied — And How to Fix Them',
      description: 'The most common denial codes, what they mean, and how to prevent them before submission.',
    },
  ];

  return (
    <section className="w-full">
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-[#f8f9fa] border-b-4 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 text-center">
            Guides & <span className="text-[#1b489b]">Education</span>
          </h2>
          <p className="text-gray-400 text-center text-lg mb-12 max-w-2xl mx-auto">
            Expert resources to improve your billing operations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <div
                key={index}
                className="bg-white border-l-4 border-[#1b489b] p-6 rounded-lg hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-[#1b489b] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {guide.description}
                    </p>
                    <button className="inline-flex items-center gap-2 text-[#1b489b] font-semibold hover:text-[#0f2d5f] transition">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </button>
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




