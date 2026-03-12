'use client';

export default function MissionSection() {
  const coreFocus = [
    {
      title: 'Increase Net Collections',
      description: 'Maximize revenue capture and minimize write-offs',
      number: '01',
      color: 'from-blue-600 to-cyan-600',
      icon: '💰',
    },
    {
      title: 'Reduce AR Days',
      description: 'Speed up cash flow and improve financial health',
      number: '02',
      color: 'from-purple-600 to-pink-600',
      icon: '📊',
    },
    {
      title: 'Improve Posting Accuracy',
      description: 'Eliminate manual errors and compliance issues',
      number: '03',
      color: 'from-green-600 to-emerald-600',
      icon: '✓',
    },
    {
      title: 'Eliminate Manual EOB Work',
      description: 'Free your team from repetitive administrative tasks',
      number: '04',
      color: 'from-orange-600 to-red-600',
      icon: '⚙️',
    },
    {
      title: 'Support Front Office Teams',
      description: 'Empower staff with tools that reduce stress and burnout',
      number: '05',
      color: 'from-indigo-600 to-purple-600',
      icon: '👥',
    },
  ];

  return (
    <section className="w-full px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Mission Statement */}
        <div className="text-center  max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Vision</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900">
            Our Mission
          </h2>
          
          <p className="text-2xl text-gray-700 leading-relaxed font-medium">
            To help dental practices 
            <span className="block text-[#14479b] font-bold mt-2">increase collections, reduce administrative burden, and operate with predictable revenue</span>
            <span className="block text-gray-700 font-medium mt-2">using intelligent automation.</span>
          </p>
          
          <div className="flex gap-2 justify-center mt-12">
            <div className="w-12 h-1 bg-gradient-to-r from-[#14479b] to-blue-600 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full"></div>
          </div>
        </div>

        {/* Core Focus Areas */}
        <div className="mt-20">
          <h3 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Core Focus</h3>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Five core pillars that drive everything we do for your practice
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFocus.map((focus, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#14479b] hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${focus.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${focus.color}`}></div>

                {/* Icon and Number */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <span className="text-5xl">{focus.icon}</span>
                  <span className={`text-sm font-bold px-3 py-1 rounded-full text-white bg-gradient-to-r ${focus.color}`}>
                    {focus.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#14479b] transition-colors">
                    {focus.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {focus.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-gray-200 group-hover:border-[#14479b] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact & Commitment */}
      
      </div>
    </section>
  );
}
