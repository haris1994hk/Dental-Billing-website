"use client";

import Image from "next/image";
import React from "react";
import { FiCheck } from "react-icons/fi";

export default function ServicesSection() {
  return (
    <section className="w-full py-20 relative overflow-hidden">
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes rotate30 { from { transform: rotate(0deg); } to { transform: rotate(30deg); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-rotate-360 { animation: rotate30 3s ease-in-out infinite alternate; }
      `}</style>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start animate-fade-in-up">
            <div className="relative w-full max-w-[460px]">
              {/* Rotating Badge Background */}
              <div className="absolute inset-0 animate-rotate-360 pointer-events-none">
                <div className="absolute -top-12 -right-12 w-[280px] h-[120px] bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl opacity-40 blur-xl"></div>
              </div>

              {/* Gradient Background Shape */}
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl z-0 opacity-80 transform hover:scale-105 transition-transform duration-300"></div>

              {/* Image */}
              <div className="relative w-[280px] md:w-[360px] lg:w-[460px] h-[280px] md:h-[360px] lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-blue-200 z-10 transform hover:scale-102 transition-transform duration-300">
                <Image
                  src="/images/nurse.jpeg"
                  alt="AI Revenue Automation"
                  width={900}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Floating Rotating Badge */}
              <div className="absolute -top-6 md:-top-12 -right-8 md:-right-16 lg:-right-20 w-[140px] md:w-[180px] lg:w-[220px] h-[70px] md:h-[90px] lg:h-[100px] bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl md:rounded-3xl flex items-center justify-center text-white px-3 md:px-4 z-20 shadow-xl animate-rotate-360">
                <div className="text-center">
                  <div className="text-[10px] md:text-xs lg:text-sm font-bold">AI SPECIALLY</div>
                  <div className="text-[10px] md:text-xs lg:text-sm font-bold">DESIGNED</div>
                  <div className="text-[10px] md:text-xs lg:text-sm font-bold mt-0.5">FOR FAST BILLING</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#01162E] mb-4 md:mb-6 leading-tight">
              AI Revenue<br className="hidden sm:block" /> Automation
            </h2>

            {/* Subheading */}
            <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
              Streamline your billing process with intelligent automation
            </p>

            {/* List */}
            <ul className="space-y-3 md:space-y-4">
              {[
                "EOB & EOP extraction and parsing",
                "Pre-treatment estimate interpretation",
                "Automated payment posting",
                "PMS writeback",
                "Denial detection & appeal guidance",
                "Revenue performance analytics",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <span className="flex-shrink-0 w-5 md:w-6 h-5 md:h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                    <FiCheck size={14} strokeWidth={3} className="text-white" />
                  </span>
                  <span className="text-gray-700 font-medium text-sm md:text-base group-hover:text-[#01162E] transition-colors">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="mt-8 md:mt-10 px-6 md:px-8 py-3 md:py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 text-sm md:text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}




