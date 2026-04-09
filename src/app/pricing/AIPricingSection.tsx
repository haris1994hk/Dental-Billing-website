'use client';

import { MdCheck } from 'react-icons/md';

export default function AIPricingSection({ onContactClick }: { onContactClick?: () => void }) {
  const fullFeatures = [
    'AI EOB & EOP Extraction',
    'Claim Summarization & Parsing',
    'Payment Posting Automation',
    'Denial Detection & Flagging',
    'PMS Writeback Support',
    'Appeal Support',
    'Advanced Analytics & Reporting',
    'Monthly Performance Dashboard',
    'Dedicated Onboarding',
  ];

  const aiPlans = [
    {
      name: 'STARTER',
      price: '$249',
      period: '/month',
      volume: 'Up to 150 EOBs/month',
      description: 'Best for hybrid practices managing partial in-house posting',
      features: fullFeatures,
      highlighted: false,
      cta: 'Get Started',
    },
    {
      name: 'GROWTH',
      price: '$399',
      period: '/month',
      volume: '150–350 EOBs/month',
      description: 'Ideal for small 1–2 dentist clinics',
      features: ['All features included', 'Higher EOB Processing Volume'],
      highlighted: true,
      badge: 'MOST POPULAR',
      cta: 'Get Started',
    },
    {
      name: 'PLUS',
      price: '$599',
      period: '/month',
      volume: '350–700 EOBs/month',
      description: 'Ideal for medium 2–4 dentist clinics',
      features: ['All features included', 'Higher EOB Processing Volume'],
      highlighted: false,
      cta: 'Get Started',
    },
    {
      name: 'UNLIMITED',
      price: '$999',
      period: '/month',
      volume: 'Unlimited EOBs',
      description: 'Ideal for large clinics, multi-location groups & DSOs',
      features: ['All features included', 'Unlimited EOB Processing', 'Priority 24/7 Support'],
      highlighted: false,
      cta: 'Contact Us',
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            PostEasy AI — Payment Posting Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Automate your EOB and EOP payment posting. All plans include every feature — pay only for the volume you need.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {aiPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'lg:scale-105 ring-2 ring-[#1b489b] shadow-2xl'
                  : 'shadow-lg hover:shadow-xl'
              } ${plan.highlighted ? 'bg-gradient-to-br from-blue-50 to-white' : 'bg-white'}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-[#1b489b] text-white px-4 py-1 rounded-bl-lg text-xs font-semibold">
                  {plan.badge}
                </div>
              )}

              <div className="p-8">
                {/* Plan Name & Price */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#1b489b]">{plan.price}</span>
                  <span className="text-gray-600 ml-2 text-sm">{plan.period}</span>
                </div>

                {/* Volume */}
                <p className="text-sm font-semibold text-gray-700 mb-2">{plan.volume}</p>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 pb-6 border-b border-gray-200">{plan.description}</p>

                {/* CTA Button */}
                <button
                  onClick={onContactClick}
                  className={`w-full py-2 px-4 rounded-lg font-semibold mb-8 transition-all duration-300 text-sm ${
                    plan.highlighted
                      ? 'bg-[#1b489b] text-white hover:bg-[#0f2d5f]'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features List */}
                <div className="space-y-3">
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

        {/* Overage Notice */}
        <div className="max-w-3xl mx-auto bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-gray-700 text-sm">
            <span className="font-semibold">Exceed your monthly limit?</span> We'll notify you — no automatic charges or surprise fees. Upgrade anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
