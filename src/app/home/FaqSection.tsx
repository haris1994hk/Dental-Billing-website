"use client";
import React, { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "What type of Billing Services do you offer?",
    a: "We provide end-to-end dental billing services including EOB/EOP processing, denial management, claim resubmissions, payment posting, and reporting. Our AI assists with data extraction and validation to speed up workflows.",
  },
  {
    q: "How many Billings your AI tool can handle a day?",
    a: "Our platform is scalable — depending on your subscription and setup it can process hundreds to thousands of EOBs per day. We can size a plan based on your clinic volume.",
  },
  {
    q: "What's the pricing for a clinic with minimum 100 billings a week?",
    a: "Pricing depends on the exact feature set and level of human review you require. Contact us for a tailored quote — we offer plans designed for small and medium practices.",
  },
  {
    q: "Can we get a free on-hand demo of this AI Tool?",
    a: "Yes — schedule a free demo and consultation. We’ll walk through your workflow, show the AI in action, and discuss integration and pricing.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl !text-black font-extrabold">GOT QUESTIONS?</h3>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b489b] mt-2">WE'VE GOT ANSWERS</h2>
        <p className="text-sm text-gray-600 mt-4 mx-auto max-w-2xl">Everything you need to know about our AI Tool, pricing or integration and services.</p>

        <div className="mt-10 space-y-6">
          {FAQ_ITEMS.map((item, idx) => {
            const open = openIndex === idx;
            return (
              <div key={idx} className="px-4">
                {/* Outer rounded border to match design */}
                <div className="rounded-xl border border-transparent shadow-sm overflow-hidden">
                  {/* inner light-blue panel with dark-blue left stripe underneath */}
                  <div className="relative bg-[#dff0ff] rounded-lg p-0">
                    <div className="absolute left-3 top-3 bottom-3 w-3 bg-[#1b489b] rounded-r-xl z-0" />

                    <button
                      onClick={() => setOpenIndex(open ? null : idx)}
                      className="w-full flex items-center justify-between p-4 sm:p-6 pr-6 sm:pr-8 text-left relative z-10"
                      aria-expanded={open}
                    >
                      <div className="pl-5 sm:pl-6">
                        <div className="font-semibold text-[#0f2b57] text-sm sm:text-base">{item.q}</div>
                        {open && <div className="mt-3 text-sm text-[#23324a] max-w-3xl">{item.a}</div>}
                      </div>

                      <div className={`w-9 h-9 rounded-full flex items-center justify-center bg-white shadow ml-4 transform transition-transform ${open ? "rotate-180" : ""}`}>
                        <svg className="w-4 h-4 text-[#1b489b]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 9l6 6 6-6" stroke="#1b489b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
