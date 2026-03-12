'use client';

import { MdCheck } from 'react-icons/md';

export default function AIPricingSection() {
  const aiPlans = [
    {
      name: 'Starter Plan',
      price: '$599',
      period: '/month',
      claims: '1–100 Claims Per Month',
      description: 'Best for single-location practices with moderate claim volume.',
      features: [
        'AI EOB, EOP & Pre-Treatment Extraction',
        'Claim Summarization & Parsing',
        'Payment Posting Automation',
        'PMS Writeback',
        'Denial Management Detection',
        'Appeal Support',
        'Monthly Performance Dashboard',
      ],
      highlighted: false,
    },
    {
      name: 'Growth Plan',
      price: '$999',
      period: '/month',
      claims: '100–500 Claims Per Month',
      description: 'Ideal for high-volume practices and small DSOs.',
      features: [
        'Everything in Starter',
        'Higher claim processing capacity',
        'Priority processing',
        'Advanced analytics reporting',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise Plan',
      price: 'Custom',
      period: 'pricing',
      claims: '500+ Claims',
      description: 'Multi-location & DSO solutions available.',
      features: [
        'Custom solutions tailored to your needs',
        'Unlimited claim processing',
        'Dedicated account manager',
        'Custom integrations & API access',
        'Priority 24/7 support',
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1b489b] mb-4">
            AI Payment Posting Tool
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Automate your payment posting with AI-powered extraction and claim management
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {aiPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'md:scale-105 ring-2 ring-[#0b5cff] shadow-2xl'
                  : 'shadow-lg hover:shadow-xl'
              } ${plan.highlighted ? 'bg-gradient-to-br from-blue-50 to-white' : 'bg-white'}`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-[#0b5cff] text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                  POPULAR
                </div>
              )}

              <div className="p-8">
                {/* Plan Name & Price */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-[#0b5cff]">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>

                {/* Claims Range */}
                <p className="text-sm text-gray-600 font-semibold mb-4 pb-4 border-b border-gray-200">
                  {plan.claims}
                </p>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-6">{plan.description}</p>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold mb-8 transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-[#0b5cff] text-white hover:bg-[#053eaa]'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <MdCheck className="w-5 h-5 text-[#0b8554] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
