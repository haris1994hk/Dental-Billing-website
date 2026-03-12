'use client';

export default function AppointmentSchedulingSection() {
  const features = [
    {
      title: 'New Patient Scheduling',
      description: 'Automated scheduling for new patient onboarding',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Treatment Follow-up Scheduling',
      description: 'Smart scheduling for follow-up and continuation care',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12M8 11h12m-12 4h12m-18-4a2 2 0 100-4 2 2 0 000 4zm0 4a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Recall Activation',
      description: 'Automated recall reminders and scheduling',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Missed Appointment Recovery',
      description: 'Intelligent recovery attempts for no-shows',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-red-500 to-pink-500',
    },
    {
      title: 'Confirmation Calls & SMS',
      description: 'Multi-channel confirmation and coordination',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 7.489a1 1 0 00.502.756l2.048 1.029a11.042 11.042 0 005.516 5.516l1.029 2.048a1 1 0 00.756.502l7.489 1.498a1 1 0 00.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="w-full  px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-gray-500 bg-clip-text text-sm font-bold mb-4 px-4 border border-purple-200 rounded-full">
            PATIENT ENGAGEMENT
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Appointment Scheduling Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Streamline your scheduling operations and reduce no-shows with our intelligent appointment management system
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${feature.gradient} p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-pattern"></div>
              </div>

              {/* Icon Container */}
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:bg-white/30 transition-all transform group-hover:scale-110">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="relative !text-white z-10 text-lg font-bold leading-tight group-hover:translate-x-1 transition-transform">
                {feature.title}
              </h3>
              <p className="relative z-10 text-sm text-white/90 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-3xl transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform"></div>
            </div>
          ))}
        </div>

        {/* Key Statistics */}
       
      </div>
    </section>
  );
}
