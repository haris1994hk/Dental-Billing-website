"use client";

export default function StepByStepFlow() {
  const steps = [
    {
      number: "1",
      title: "Upload",
      description: "Drag & drop or select your ERA/EOB files securely.",
      icon: "☁️",
      color: "blue"
    },
    {
      number: "2",
      title: "Extract & Parse",
      description: "AI instantly extracts all payment data and key details.",
      icon: "📄",
      color: "green"
    },
    {
      number: "3",
      title: "Smart Analysis",
      description: "Validates calculations, identifies issues and flags discrepancies.",
      icon: "🧠",
      color: "purple"
    },
    {
      number: "4",
      title: "Denial Manager",
      description: "Generate recovery action plans and track denials with ease.",
      icon: "✓",
      color: "orange"
    }
  ];

  const colorClasses = {
    blue: "border-b-4 border-blue-500",
    green: "border-b-4 border-green-500",
    purple: "border-b-4 border-purple-500",
    orange: "border-b-4 border-orange-500"
  };

  return (
    <section className="w-full py-16 relative overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(37, 99, 235, 0);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite;
        }

        .card-1 { animation-delay: 0.1s; }
        .card-2 { animation-delay: 0.2s; }
        .card-3 { animation-delay: 0.3s; }
        .card-4 { animation-delay: 0.4s; }
      `}</style>

      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
      
      {/* Decorative shapes with animation */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -mr-48 -mt-48 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl -ml-40 -mb-40 animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 animate-fade-in-up">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">OUR SIMPLE 4-STEP PROCESS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            PostEasy AI: From Confusing<br />
            <span className="text-blue-600">EOB to Clear Action Plan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Turn complex EOBs into clear insights and actionable plans in just a few simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative group animate-fade-in-up card-${index + 1}`}
            >
              {/* Card */}
              <div className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-2 ${colorClasses[step.color as keyof typeof colorClasses]}`}>
                {/* Number Badge with animation */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md group-hover:animate-pulse-glow transition-all duration-300">
                  {step.number}
                </div>

                {/* Icon with bounce */}
                <div className="text-5xl mb-6 text-gray-700 group-hover:animate-bounce-subtle transition-all duration-300">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector (hidden on mobile, shown on lg+ between cards) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-6 z-20 transform -translate-y-1/2 animate-slide-in-right" style={{animationDelay: `${0.5 + index * 0.1}s`}}>
                  <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <a
            href="https://posteasy.dentalbillingaid.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 hover:animate-pulse-glow"
          >
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            <span>Start Using PostEasy AI Today</span>
          </a>
        </div>

        {/* Footer text */}
        <div className="text-center mt-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <p className="text-sm text-gray-500">
            Save time. Reduce denials. Get paid faster.
          </p>
        </div>
      </div>
    </section>
  );
}




