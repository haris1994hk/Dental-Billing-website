'use client';

export default function HumanServicesPricingSection() {
  const humanServices = [
    {
      number: '1',
      title: 'Dental Billing Service',
      description: 'Complete dental billing support with tiered pricing based on monthly collections.',
      tiers: [
        { range: 'Under $50K monthly collections', price: '$1,200/month' },
        { range: '$50K–$100K', price: '$1,800/month' },
        { range: '$100K+', price: '$2,200/month' },
      ],
    },
    {
      number: '2',
      title: 'Insurance Verification',
      description: 'Accurate eligibility and benefits verification at competitive market rates.',
      tiers: [
        { range: '100 verifications', price: '$450' },
        { range: '250 verifications', price: '$1,000' },
        { range: '500 verifications', price: '$1,900' },
      ],
    },
    {
      number: '3',
      title: 'Appointment Scheduling Support',
      description: 'Professional scheduling and front-office support options.',
      tiers: [
        { range: 'Starter Scheduling Support (Part-time)', price: '$899/month' },
        { range: 'Full Scheduling Support (Dedicated)', price: '$1,400/month' },
        { range: 'Hourly Model', price: '$6–$8/hour' },
      ],
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1b489b] mb-4">
            Human Service Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Competitive market rates for done-for-you services with flexible pricing models
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {humanServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Service Header */}
              <div className="bg-gradient-to-r from-[#0b5cff] to-[#053eaa] px-8 py-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#0b5cff]">
                      {service.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold !text-white">{service.title}</h3>
              </div>

              {/* Service Content */}
              <div className="p-8">
                <p className="text-gray-600 text-sm mb-8">{service.description}</p>

                {/* Pricing Tiers */}
                <div className="space-y-4">
                  {service.tiers.map((tier, tierIndex) => (
                    <div
                      key={tierIndex}
                      className="pb-4 border-b border-gray-200 last:border-b-0"
                    >
                      <p className="text-sm font-semibold text-gray-700 mb-2">
                        {tier.range}
                      </p>
                      <p className="text-2xl font-bold text-[#0b5cff]">{tier.price}</p>
                    </div>
                  ))}
                </div>

                {/* Request Quote Button */}
                <button className="w-full mt-8 py-3 px-4 rounded-lg font-semibold bg-[#0b5cff] text-white hover:bg-[#053eaa] transition-all duration-300">
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
