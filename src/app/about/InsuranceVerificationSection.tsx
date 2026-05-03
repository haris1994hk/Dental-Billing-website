'use client';

export default function InsuranceVerificationSection() {
  const features = [
    {
      icon: '✓',
      title: 'Eligibility Breakdowns',
      description: 'Detailed coverage analysis for your patients',
    },
    {
      icon: '✓',
      title: 'Frequency Tracking',
      description: 'Monitor treatment frequency limits and usage',
    },
    {
      icon: '✓',
      title: 'Waiting Period Analysis',
      description: 'Track waiting periods before coverage begins',
    },
    {
      icon: '✓',
      title: 'Annual Maximum Tracking',
      description: 'Keep tabs on remaining benefits per patient',
    },
    {
      icon: '✓',
      title: 'Downtime Coverage Checks',
      description: 'Verify coverage during transition periods',
    },
  ];

  return (
    <section className="w-full py-20 relative overflow-hidden">
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
      `}</style>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Insurance Management
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#01162E] mb-6">
            Insurance Verification
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive verification services to ensure accurate coverage information and maximize patient benefits
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              {/* Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-2xl font-bold text-white">{feature.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#01162E] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Corner */}
              <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




