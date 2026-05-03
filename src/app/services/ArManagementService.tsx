'use client';

import { CheckCircle } from 'lucide-react';
import { ScrollAnimatedItem, ScrollAnimatedSection } from "../components/ScrollAnimatedSection";

export default function ArManagementService() {
  const features = [
    'Monitoring claims aged 30+ days',
    'Insurance follow-ups',
    'Denial investigation',
    'Claim resubmissions',
    'Payment status tracking',
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <ScrollAnimatedSection animation="fadeInLeft">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white h-96 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 order-2 lg:order-1">
              <div className="text-center">
                <div className="text-6xl font-bold mb-4">📊</div>
                <p className="text-2xl font-bold">Reduced AR Days</p>
                <p className="text-white/90 mt-4 text-sm leading-relaxed">
                  Proactive monitoring and follow-ups ensure faster cash flow
                </p>
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* Right Side */}
          <ScrollAnimatedSection animation="fadeInRight">
            <div className="order-1 lg:order-2 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#01162E] mb-4">
                Accounts Receivable <span className="text-blue-600">(AR) Management</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Keep track of aging claims and maintain healthy cash flow.
              </p>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <ScrollAnimatedItem key={index} index={index} animation="fadeInUp">
                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700 text-base group-hover:text-[#01162E] transition-colors">{feature}</span>
                    </div>
                  </ScrollAnimatedItem>
                ))}
              </div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </div>

      {/* Full Width Result Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-semibold text-white/90 mb-2">✓ Result:</p>
          <p className="text-white text-lg font-medium">
            Reduced AR days and faster cash flow.
          </p>
        </div>
      </div>
    </section>
  );
}



