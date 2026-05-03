"use client";

export default function OurServicesSection() {
  const services = [
    {
      number: "01",
      icon: "📋",
      title: "Done-For-You Billing Support",
      description: "Dental Billing Aid also offers expert dental billing services supported by our AI platform."
    },
    {
      number: "02",
      icon: "🧾",
      title: "Dental Billing & Claim Submission",
      description: "End-to-end insurance billing, claim follow-ups, and AR support."
    },
    {
      number: "03",
      icon: "🛡️",
      title: "Insurance Verification",
      description: "Accurate eligibility, benefits, limitations, and frequency checks."
    },
    {
      number: "04",
      icon: "📅",
      title: "Appointment Scheduling & Front Office Support",
      description: "Patient calls, confirmations, recalls, and scheduling assistance."
    }
  ];

  return (
    <section className="w-full py-20 relative overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .card-1 { animation-delay: 0.1s; }
        .card-2 { animation-delay: 0.2s; }
        .card-3 { animation-delay: 0.3s; }
        .card-4 { animation-delay: 0.4s; }
      `}</style>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -mr-48 -mt-48 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl -ml-48 -mb-48 animate-pulse" style={{animationDelay: '1s'}}></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">WHAT WE OFFER</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            OUR <span className="text-blue-600">SERVICES</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to streamline your dental billing and front office operations.
          </p>
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`animate-fade-in-up card-${index + 1}`}
            >
              <div className="relative h-full group">
                {/* Faint Background Number */}
                <div className="absolute -top-8 -right-8 text-8xl font-black text-blue-100/30 select-none">
                  {service.number}
                </div>

                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 h-full flex flex-col">
                  
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-3xl mb-6 shadow-md group-hover:shadow-lg transition-all duration-300">
                    {service.icon}
                  </div>

                  {/* Underline */}
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-4"></div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Read More Button */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors duration-300 group/btn"
                  >
                    <span>Read More</span>
                    <span className="text-lg transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
