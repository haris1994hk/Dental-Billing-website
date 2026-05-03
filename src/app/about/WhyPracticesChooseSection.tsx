'use client';

export default function WhyPracticesChooseSection() {
  const problems = [
    {
      title: 'Manual Posting Errors',
      icon: '❌',
    },
    {
      title: 'Unfollowed Denials',
      icon: '📋',
    },
    {
      title: 'Incorrect Insurance Breakdowns',
      icon: '🔢',
    },
    {
      title: 'Staff Burnout',
      icon: '😰',
    },
    {
      title: 'Uncollected AR',
      icon: '💰',
    },
  ];

  const solutions = [
    {
      title: 'AI for Speed',
      description: 'Intelligent automation processes claims and EOBs instantly',
      icon: '⚡',
    },
    {
      title: 'Humans for Oversight',
      description: 'Expert team reviews and ensures accuracy at every step',
      icon: '👥',
    },
    {
      title: 'Systems for Consistency',
      description: 'Reliable processes that scale with your practice',
      icon: '🔧',
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
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#01162E] mb-6">
            Why Practices Choose
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dental Billing Aid
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we solve the challenges that drain your revenue and team
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left - Problems */}
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="absolute -top-8 left-0 text-sm font-bold uppercase tracking-wider text-gray-500">
              Problems You Face
            </div>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-xl bg-white border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all transform hover:-translate-y-1"
                  style={{animationDelay: `${0.05 + index * 0.05}s`}}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{problem.icon}</span>
                    <h3 className="text-lg font-bold text-[#01162E] group-hover:text-red-600 transition-colors">
                      {problem.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Solutions */}
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.15s'}}>
            <div className="absolute -top-8 left-0 text-sm font-bold uppercase tracking-wider text-gray-500">
              Our Solution
            </div>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all transform hover:-translate-y-1"
                  style={{animationDelay: `${0.05 + index * 0.05}s`}}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl mt-1">{solution.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-emerald-700 mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



