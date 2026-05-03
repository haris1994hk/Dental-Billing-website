'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is a healthy net collection rate for a dental practice?',
      answer: 'A healthy net collection rate for dental practices typically ranges from 95-98%. This means you are collecting 95-98% of the amount you actually bill after contractual adjustments. Anything below 90% may indicate billing issues that need investigation.',
    },
    {
      question: 'In-house billing vs outsourcing — which is right for my practice?',
      answer: 'In-house billing gives you control but requires staff training and carries higher overhead costs. Outsourcing reduces administrative burden and improves recovery rates, but requires trusting a third party with sensitive data. Consider your practice size, budget, and complexity.',
    },
    {
      question: 'How long should insurance reimbursement take and when should you follow up?',
      answer: 'Most insurers respond within 30-45 days. If you haven\'t received payment by day 45, send a follow-up. Track claims at 15, 30, 45, and 60+ days. Claims older than 90 days should be escalated or appealed. Implement automated reminders for aging claims.',
    },
    {
      question: 'What are the most common dental claim denial reasons in 2025?',
      answer: 'The top denial reasons include: incorrect patient eligibility, missing or invalid authorization codes, services deemed not medically necessary, frequency limitations exceeded, coordination of benefits issues, and coding or documentation errors. Prevention is always more cost-effective than appeals.',
    },
  ];

  return (
    <section className="w-full">
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-[#f8f9fa] border-b-4 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 text-center">
            Frequently Asked <span className="text-[#1b489b]">Questions</span>
          </h2>
          <p className="text-gray-400 text-center text-lg mb-12 max-w-2xl mx-auto">
            Get answers to common billing questions
          </p>

          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#1b489b] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#eef3fb] transition"
                >
                  <span className="font-semibold text-white text-left">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1b489b] flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 border-t-2 border-[#1b489b] bg-[#f8f9fa]">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




