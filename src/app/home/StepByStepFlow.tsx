"use client";

export default function StepByStepFlow() {
  const steps = [
    {
      number: "1",
      title: "Upload",
      description: "Drag & drop or select your ERA/EOB files"
    },
    {
      number: "2",
      title: "Extract & Parse",
      description: "AI instantly extracts all payment data"
    },
    {
      number: "3",
      title: "Smart Analysis",
      description: "Validates calculations and flags issues"
    },
    {
      number: "4",
      title: "Denial Manager",
      description: "Generate recovery action plans"
    }
  ];

  return (
    <section className="w-screen  py-16 relative overflow-hidden -mx-[calc((100vw-100%)/2)]">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            PostEasy AI: From Confusing<br />
            EOB to Clear Action Plan
          </h2>
        </div>

        {/* Steps Flow */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center w-full lg:w-auto">
              {/* Step Card */}
              <div className="flex-1 lg:flex-none">
                <div className="bg-gradient-to-b from-blue-500/20 to-blue-600/10 backdrop-blur border-2 border-blue-300/50 rounded-2xl p-6 hover:border-blue-300 transition text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-300 text-[#1b489b] rounded-full mb-4 mx-auto font-black text-2xl">
                    {step.number}
                  </div>
                  
                  {/* Step Title */}
                  <h3 className="text-blue-300 text-lg font-bold mb-2">
                    Step {step.number}:
                  </h3>
                  <p className="text-[#1B489B] font-bold mb-2">{step.title}</p>
                  
                  {/* Step Description */}
                  <p className="text-[#1B489B] text-sm">{step.description}</p>
                </div>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center mx-4 lg:mx-6">
                  <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              {/* Mobile Arrow */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex items-center justify-center my-4 w-full">
                  <svg className="w-6 h-6 text-blue-300 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="https://posteasy.dentalbillingaid.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-300 text-[#1b489b] font-bold py-3 px-8 rounded-full hover:bg-blue-200 transition-all transform hover:scale-105"
          >
            Start Using PostEasy AI Today
          </a>
        </div>
      </div>
    </section>
  );
}
