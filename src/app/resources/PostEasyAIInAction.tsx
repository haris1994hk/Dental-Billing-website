'use client';

import { useState } from 'react';
import ContactModal from '../components/ContactModal';

export default function PostEasyAIInAction() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const testimonials = [
    {
      quote: 'PostEasy AI freed up over 20 hours a month and stopped my team from wasting time entering checks.',
      author: 'Dr. Cisternino',
      practice: 'Spring Lake Dental, NJ',
      rating: 5,
    },
    {
      quote: 'Saved my team over 70 hours in manual data entry last month. Reduced outstanding AR by 85%.',
      author: 'Dr. Bamrah',
      practice: 'H & F Dental Care, OH',
      rating: 5,
    },
  ];

  return (
    <section className="w-full">
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2  border-b-4 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4 text-center">
            PostEasy AI <span className="text-[#1b489b]">in Action</span>
          </h2>
          <p className="text-gray-600 text-center text-lg mb-12 max-w-2xl mx-auto">
            See how dental practices are saving time and reducing AR with PostEasy AI
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#1b489b]"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 text-lg font-medium mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-black">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.practice}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={() => setContactModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#1b489b] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0f2d5f] transition text-lg"
            >
              Book a Free Demo
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </section>
  );
}
