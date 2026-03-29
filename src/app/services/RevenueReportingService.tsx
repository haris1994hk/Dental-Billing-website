'use client';

import { CheckCircle } from 'lucide-react';
import { ScrollAnimatedItem, ScrollAnimatedSection } from '../components/ScrollAnimatedSection';

export default function RevenueReportingService() {
  const features = [
    'AR aging reports',
    'Net collection rate analysis',
    'Monthly revenue summaries',
    'Denial rate tracking',
    'Insurance payment trends',
  ];

  return (
    <section className="w-full">
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-[#f8f9fa] border-b-4 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <ScrollAnimatedSection animation="fadeInLeft">
              <div className="bg-gradient-to-br from-[#1b489b] to-[#0f2d5f] rounded-xl p-8 text-white h-96 flex items-center justify-center order-2 lg:order-1">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-4">📋</div>
                  <p className="text-xl">Full Visibility</p>
                  <p className="text-gray-300 mt-4 text-sm">
                    Comprehensive reporting gives you complete visibility into your practice revenue
                  </p>
                </div>
              </div>
            </ScrollAnimatedSection>

            {/* Right Side */}
            <ScrollAnimatedSection animation="fadeInRight">
              <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4">
                Revenue Cycle <span className="text-[#1b489b]">Reporting</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Data-driven insights to optimize your practice's financial performance.
              </p>

                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <ScrollAnimatedItem key={index} index={index} animation="fadeInUp">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#1b489b] flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-base">{feature}</span>
                      </div>
                    </ScrollAnimatedItem>
                  ))}
                </div>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </div>

      {/* Full Width Result Section */}
      <ScrollAnimatedSection animation="fadeInUp">
        <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-r from-[#1b489b] to-[#0f2d5f] border-b-4 border-[#0f2d5f] py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-semibold text-white mb-2">✓ Result:</p>
            <p className="text-white text-lg">
              Full visibility into practice revenue.
            </p>
          </div>
        </div>
      </ScrollAnimatedSection>
    </section>
  );
}
