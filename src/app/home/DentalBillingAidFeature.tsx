"use client";

export default function DentalBillingAidFeature() {
  const features = [
    {
      icon: "☁️",
      title: "Instantly pulls payment data from EOBs and EOPs",
      description: "No manual entry, just accurate, real-time data extraction."
    },
    {
      icon: "🛡️",
      title: "Reduces errors and prevents revenue loss",
      description: "AI validation ensures accuracy and catches issues early."
    },
    {
      icon: "⚡",
      title: "Cuts manual work and speeds up payments",
      description: "Automate busywork and get paid faster."
    }
  ];

  return (
    <section className="w-full py-20 relative overflow-hidden">
      <style>{`
        @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse-soft { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        
        .animate-fade-in-left { animation: fadeInLeft 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fadeInRight 0.8s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-soft { animation: pulse-soft 3s ease-in-out infinite; }
        
        .dashboard-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,245,255,0.95) 100%);
          border: 1px solid rgba(59, 130, 246, 0.1);
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.1);
        }
      `}</style>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -mr-48 animate-pulse-soft"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl -ml-48 -mb-48 animate-pulse-soft" style={{animationDelay: '1.5s'}}></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: 3D Dashboard Illustration */}
          <div className="animate-fade-in-left">
            <div className="relative h-96 lg:h-full min-h-80">
              {/* Main Dashboard Card */}
              <div className="dashboard-card rounded-2xl p-8 absolute top-0 left-0 w-80 h-64 transform -rotate-6 animate-float">
                <div className="text-xs font-bold text-gray-600 mb-4">DASHBOARD</div>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg"></div>
                    <div className="flex-1 space-y-1">
                      <div className="h-2 bg-blue-300 rounded w-24"></div>
                      <div className="h-2 bg-blue-200 rounded w-16"></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 h-16 bg-gradient-to-b from-green-300 to-green-500 rounded"></div>
                    <div className="flex-1 h-16 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded"></div>
                    <div className="flex-1 h-16 bg-gradient-to-b from-red-300 to-red-500 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Mobile Phone */}
              <div className="dashboard-card rounded-3xl p-4 absolute bottom-0 right-0 w-48 h-72 border-8 border-gray-900 animate-float" style={{animationDelay: '0.5s'}}>
                <div className="h-full bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl p-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="h-3 bg-blue-300 rounded w-3/4"></div>
                    <div className="h-2 bg-blue-200 rounded w-1/2"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-green-400 rounded"></div>
                    <div className="h-2 bg-green-400 rounded w-4/5"></div>
                  </div>
                  <div className="text-center text-2xl font-bold text-blue-600">$12.5K</div>
                </div>
              </div>

              {/* Floating AI Icon */}
              <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-3xl shadow-lg animate-float" style={{animationDelay: '1s'}}>
                🤖
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="animate-fade-in-right">
            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              <span className="text-blue-600">Dental Billing</span> Aid
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-6"></div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-lg">
              Dental Billing Aid was built by dental billing professionals who were tired of manual EOB processing slowing practices down. We combined that expertise with AI to create a smarter, faster way to post payments—reducing errors, catching underpayments, and giving your team time back.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-5 rounded-xl bg-white/50 hover:bg-white transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:shadow-md transform hover:-translate-y-1 cursor-pointer"
                  style={{animationDelay: `${0.2 + index * 0.1}s`}}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-3xl flex-shrink-0 shadow-sm">
                    {feature.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-xl">
              <a
                href="#contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                <span>Get Started Today</span>
                <span>→</span>
              </a>
              <button className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-white text-blue-600 font-semibold py-3 px-8 rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300">
                <span>Learn More</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
