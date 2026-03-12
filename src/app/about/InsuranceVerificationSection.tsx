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
    <section className="w-full  lg:py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-[#14479b] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Insurance Management
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Insurance Verification
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive verification services to ensure accurate coverage information and maximize patient benefits
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#14479b] to-blue-600 mx-auto mt-8"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#14479b] hover:shadow-lg transition-all duration-300"
            >
              {/* Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#14479b] to-blue-600 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#14479b] to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">{feature.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#14479b] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Corner */}
              <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-[#14479b] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

           
      </div>
    </section>
  );
}
