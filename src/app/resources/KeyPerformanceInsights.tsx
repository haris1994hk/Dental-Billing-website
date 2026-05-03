'use client';

import { TrendingUp } from 'lucide-react';

export default function KeyPerformanceInsights() {
  const insights = [
    { stat: '23%', description: 'Average AR reduction in 90 days' },
    { stat: '$18K', description: 'Average monthly revenue recovered per practice' },
    { stat: '97%', description: 'Posting accuracy with AI automation' },
    { stat: '3 days', description: 'Average time to detect unworked denials' },
  ];

  return (
    <section className="w-full">
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-white border-b-4 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 text-center">
            Key Performance <span className="text-[#1b489b]">Insights</span>
          </h2>
          <p className="text-gray-400 text-center text-lg mb-12 max-w-2xl mx-auto">
            Real results from dental practices using our platform
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#eef3fb] to-white border-2 border-[#1b489b] rounded-lg p-6 text-center hover:shadow-lg transition"
              >
                <TrendingUp className="w-8 h-8 text-[#1b489b] mx-auto mb-3" />
                <p className="text-3xl sm:text-4xl font-extrabold text-[#1b489b] mb-2">
                  {insight.stat}
                </p>
                <p className="text-gray-300 text-sm">
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




