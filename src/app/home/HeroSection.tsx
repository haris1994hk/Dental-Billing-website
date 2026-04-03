'use client';

import Image from 'next/image';
import { useState } from 'react';
import ContactModal from '../components/ContactModal';

export default function HeroSection() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  return (
    <>
      <section className="w-screen relative bg-[#1b489b] overflow-visible -ml-[calc(50vw-50%)] pb-15 ">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute  sm:top-10 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-48 sm:w-96 h-48 sm:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start sm:py-12">
            {/* Left Content */}
            <div className="text-white pt-0 sm:pt-6">
              <div className="inline-block mb-3 mt-7 sm:mt-7 lg:mt-0 sm:mb-6 bg-white !text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30">
                <span className="text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2">
                  <span>⚙️</span>
                  Post Dental Insurance Payments Smarter
                </span>
              </div>

              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 leading-tight !text-white">
AI-Powered · HIPAA-Ready · Built for Dental Practices
              </h1>

              <p className="text-sm xs:text-base sm:text-lg lg:text-lg text-white mb-4 sm:mb-8 leading-relaxed">
Stop manually posting EOBs. Our AI reads, validates, and structures insurance payment data in minutes so your team can focus on patient care, not paperwork.              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="bg-white text-blue-600 font-bold py-2 xs:py-2.5 sm:py-3 px-4 xs:px-6 sm:px-8 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-xs xs:text-sm sm:text-base whitespace-nowrap flex-1 sm:flex-none"
                >
                  Get A Demo
                </button>
                <button className="bg-transparent border-2 border-white text-white font-bold py-2 xs:py-2.5 sm:py-3 px-4 xs:px-6 sm:px-8 rounded-lg hover:bg-white/10 transition-all text-xs xs:text-sm sm:text-base flex-1 sm:flex-none">
                  See How The EOB AI Works
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end h-full">
              <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md lg:max-w-lg h-64 xs:h-80 sm:h-96 lg:h-[500px] -mb-12 sm:-mb-16 md:-mb-24 lg:-mb-16 z-20">
                <Image
                  src="/images/girl.png"
                  alt="Professional Dental Assistant"
                  fill
                  className="object-cover "
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Boxes Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20 relative z-10 -mt-3 sm:-mt-2 md:-mt-3 lg:-mt-17">
        <div className="max-w-5xl mx-auto relative">
          <div className="bg-gray-200 rounded-lg sm:rounded-2xl shadow-xl p-4 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div>
              <p className="text-base sm:text-lg lg:text-lg font-bold text-blue-600 mb-2">Works</p>
              <p className="text-black text-sm sm:text-base lg:text-base font-semibold">With Open Dental, Dentrix & Lending FMS Workflows</p>
            </div>
            <div>
              <p className="text-base sm:text-lg lg:text-lg font-bold text-blue-600 mb-2">HIPAA-Ready</p>
              <p className="text-black text-sm sm:text-base lg:text-base font-semibold">Secure & US Dental Insurance Compatible</p>
            </div>
            <div>
              <p className="text-base sm:text-lg lg:text-lg font-bold text-blue-600 mb-2">Designed</p>
              <p className="text-black text-sm sm:text-base lg:text-base font-semibold">For Single Offices, Multi-Location Practices, and DSOs</p>
            </div>
          </div>
        </div>
      </div>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
}
