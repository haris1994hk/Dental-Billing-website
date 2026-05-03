'use client';

export default function ServicesList() {
  const services = [
    { number: '01', title: 'INSURANCE CLAIM\nSUBMISSION' },
    { number: '02', title: 'AR FOLLOW-UPS' },
    { number: '03', title: 'DENTAL MANAGEMENT' },
    { number: '04', title: 'PAYMENT RECONCILIATION' },
    { number: '05', title: 'PATIENT BALANCE REVIEW' },
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-[#01162E] mb-6 tracking-wide">
            DENTAL BILLING SERVICES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Row 1 */}
          {services.slice(0, 3).map((service, index) => (
            <div 
              key={index} 
              className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              <div className="flex items-center justify-center mb-6">
                <span className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mr-4">
                  {service.number}
                </span>
                <div className="flex-1 border-t-2 border-dotted border-gray-300"></div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#01162E] whitespace-pre-line leading-tight">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto mt-8">
          {services.slice(3).map((service, index) => (
            <div 
              key={index + 3} 
              className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + (index + 3) * 0.08}s` }}
            >
              <div className="flex items-center justify-center mb-6">
                <span className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mr-4">
                  {service.number}
                </span>
                <div className="flex-1 border-t-2 border-dotted border-gray-300"></div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#01162E] whitespace-pre-line leading-tight">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




