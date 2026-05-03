"use client";
import React, { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "How does PostEasy AI actually work?",
    a: "PostEasy AI reads your EOB and EOP documents — whether scanned, PDF, or digital remittance files — extracts the payment data using AI, validates the calculations, and organizes everything into a posting-ready format. It flags denials, adjustments, write-offs, and patient responsibility automatically. No manual entry required.",
  },
  {
    q: "Does it work with my practice management software?",
    a: "PostEasy AI is designed to work alongside Open Dental, Dentrix, and most major dental PMS workflows. You export the structured data and post it directly — no complex integration or IT setup required.",
  },
  {
    q: "Is my patient data safe and HIPAA compliant?",
    a: "Yes. PostEasy AI is built with HIPAA-ready architecture, secure document handling, and access-controlled workflows. Patient and insurance data is never stored beyond your session unless you choose otherwise. All outputs are audit-friendly.",
  },
  {
    q: "Can I try it before committing?",
    a: "Absolutely. We offer a free live demo where we walk you through the tool using real EOB samples. No credit card, no commitment. Book your demo above and see PostEasy AI handle a real posting workflow in under 10 minutes.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-20 relative overflow-hidden">
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideDown { from { opacity: 0; max-height: 0; } to { opacity: 1; max-height: 500px; } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-slide-down { animation: slideDown 0.4s ease-out; }
      `}</style>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -mr-48 -mt-48 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl -ml-40 -mb-40 animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Got Questions?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to know about our AI tool, pricing, integration, and services.</p>
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const open = openIndex === idx;
            return (
              <div 
                key={idx}
                className="animate-fade-in-up"
                style={{animationDelay: `${0.1 + idx * 0.08}s`}}
              >
                <div className="rounded-xl border border-gray-200 overflow-hidden hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
                  <button
                    onClick={() => setOpenIndex(open ? null : idx)}
                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-blue-50/50 transition-colors duration-300 text-left group"
                    aria-expanded={open}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm flex-shrink-0 group-hover:bg-blue-700 transition-colors">
                        {idx + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.q}
                      </h3>
                    </div>
                    <svg 
                      className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 flex-shrink-0 ml-4 ${open ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                  
                  {open && (
                    <div className="animate-slide-down px-6 pb-6 bg-gradient-to-br from-blue-50/50 to-transparent border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
          >
            <span>Get in Touch</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}




