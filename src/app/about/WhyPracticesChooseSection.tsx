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
    <section className="w-full py-16 lg:py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Practices Choose
            <br />
            <span className="bg-gradient-to-r from-[#14479b] to-blue-600 bg-clip-text text-transparent">
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
          <div className="relative">
            <div className="absolute -top-8 left-0 text-sm font-bold uppercase tracking-wider text-gray-500">
              Problems You Face
            </div>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-xl bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{problem.icon}</span>
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                      {problem.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Solutions */}
          <div className="relative">
            <div className="absolute -top-8 left-0 text-sm font-bold uppercase tracking-wider text-gray-500">
              Our Solution
            </div>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl mt-1">{solution.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
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
