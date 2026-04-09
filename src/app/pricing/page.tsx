'use client';

import { useState } from 'react';
import AIPricingSection from './AIPricingSection';
import { ScrollAnimatedSection } from '../components/ScrollAnimatedSection';
import ContactModal from '../components/ContactModal';
import { MdCheck } from 'react-icons/md';

export default function Pricing() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const additionalServices = [
    {
      name: 'Dental Billing Service',
      description: 'Complete dental billing support with tiered flat-fee pricing based on monthly collections.',
      tiers: [
        {
          label: 'Under $80K',
          price: '$1,200',
          period: '/month',
          details: 'Monthly collections',
        },
        {
          label: '$80K–$100K',
          price: '$1,800',
          period: '/month',
          details: 'Monthly collections',
        },
        {
          label: '$100K+',
          price: '$2,200',
          period: '/month',
          details: 'Monthly collections',
        },
      ],
    },
    {
      name: 'Insurance Verification',
      description: 'Accurate eligibility and benefits verification with volume-based pricing that lowers your cost per check as you scale.',
      tiers: [
        {
          label: 'Starter',
          price: '$450',
          period: '/month',
          details: '1–100 verifications',
        },
        {
          label: 'Core',
          price: '$1,000',
          period: '/month',
          details: '1–250 verifications',
        },
        {
          label: 'Full',
          price: '$1,900',
          period: '/month',
          details: '1–500 verifications',
        },
      ],
    },
    {
      name: 'Appointment Scheduling Support',
      description: 'Professional scheduling and front-office support for dental practices that want to offload phone calls and appointment entry.',
      tiers: [
        {
          label: 'Starter (Part-time)',
          price: '$599',
          period: '/month',
          details: 'Part-time support',
        },
        {
          label: 'Full (Dedicated)',
          price: '$1,400',
          period: '/month',
          details: 'Dedicated support',
        },
        {
          label: 'Hourly Model',
          price: '$6–$8',
          period: '/hour',
          details: 'Pay as you use',
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-white">
      <ScrollAnimatedSection animation="fadeInUp">
        <AIPricingSection onContactClick={() => setContactModalOpen(true)} />
      </ScrollAnimatedSection>

      {/* Additional Services Pricing */}
      <section className="w-full py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Add-On Professional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complement your AI automation with our expert staffing and support services.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
                {/* Service Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-8 pb-8 border-b border-gray-200">
                  {service.description}
                </p>

                {/* Pricing Tiers */}
                <div className="space-y-6">
                  {service.tiers.map((tier, tierIndex) => (
                    <div key={tierIndex} className="border-l-4 border-[#1b489b] pl-4">
                      <p className="text-gray-700 font-semibold text-sm mb-1">{tier.label}</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-[#1b489b]">{tier.price}</span>
                        <span className="text-gray-600 text-sm">{tier.period}</span>
                      </div>
                      <p className="text-gray-500 text-xs mt-2">{tier.details}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => setContactModalOpen(true)}
                  className="w-full mt-8 py-2 px-4 bg-[#1b489b] text-white rounded-lg font-semibold hover:bg-[#0f2d5f] transition-all">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="max-w-3xl mx-auto mt-16 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Want a custom plan?</span> Contact our sales team to create a tailored package that fits your practice's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
}
