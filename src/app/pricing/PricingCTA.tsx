'use client';

import { useState } from 'react';
import ContactModal from '../components/ContactModal';

export default function PricingCTA() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-[#1b489b] mb-4">
          Not sure which plan is right for you?
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Our team can help you find the perfect combination of AI automation and human services for your practice.
        </p>
        <button
          onClick={() => setContactModalOpen(true)}
          className="bg-[#0b5cff] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#053eaa] transition-all duration-300"
        >
          Schedule a Free Consultation
        </button>

        <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      </div>
    </section>
  );
}




