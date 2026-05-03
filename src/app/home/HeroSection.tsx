'use client';

import Image from 'next/image';
import { useState } from 'react';
import ContactModal from '../components/ContactModal';

export default function HeroSection() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  return (
    <>
      <section className="w-screen relative bg-[#010b1a] overflow-hidden -ml-[calc(50vw-50%)]">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Neon Glows */}
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0055ff] opacity-20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00a2ff] opacity-10 blur-[100px] rounded-full"></div>
          
          {/* Tech Particles/Grid Floor Effect (Using CSS) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center sm:py-16">
            {/* Left Content */}
            <div className="lg:col-span-5 text-white z-10">
              <div className="inline-block 4bg-[#010b1a]0/10 backdrop-blur-md border border-blue-500/20 px-4 py-2 rounded-full">
                <span className="text-sm font-semibold flex items-center gap-2 text-blue-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#010b1a]0"></span>
                  </span>
                  HIPAA Ready • AI Powered Billing
                </span>
              </div>

              <h1 className="text-3xl !text-white sm:text-3xl lg:text-6xl font-bold mb-6 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-400">
                PostEasy AI: The Machine that <span>Deletes</span>  Billing Busy-Work.
              </h1>

              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed max-w-xl">
                Identify billing leaks in seconds. Our futuristic AI engine processes EOBs with precision, cutting manual work by 90% for high-volume US clinics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/haris-1994-hk/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#010b1a]0 text-white font-bold py-4 px-8 rounded-xl hover:bg-[#010b1a]0 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)] text-center"
                >
                  Get A Demo
                </a>
                <a
                  href="https://calendly.com/haris-1994-hk/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#010b1a]/5 border border-white/10 backdrop-blur-md text-white font-bold py-4 px-8 rounded-xl hover:bg-[#010b1a]/10 transition-all text-center"
                >
                  See AI In Action
                </a>
              </div>
            </div>

            {/* Right Image Container - Making it MUCH bigger */}
            <div className="lg:col-span-7 relative flex justify-center items-center h-full min-h-[500px] lg:min-h-[700px]">
              {/* Floating Glow Backdrop for the Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#010b1a]0/20 blur-[100px] rounded-full animate-pulse"></div>
              
              <div className="relative w-full h-full flex items-center justify-center transform lg:scale-110 xl:scale-125 transition-transform duration-700">
                <Image
                  src="/images/rem.png"
                  alt="PostEasy AI Futuristic Dashboard"
                  width={1800}
                  height={1200}
                  className="object-contain drop-shadow-[0_0_50px_rgba(0,162,255,0.3)] animate-float"
                  priority
                />
                
                {/* Decorative floating UI elements (Simulated with CSS/Divs if they aren't in the image) */}
                <div className="absolute top-[20%] right-[10%] hidden xl:block animate-bounce-slow">
                  <div className="bg-[#010b1a]/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#010b1a]0/20 flex items-center justify-center text-blue-400">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2" /></svg>
                      </div>
                      <div>
                        <p className="text-xs text-blue-300 font-medium">Processing EOB</p>
                        <p className="text-sm text-white font-bold">98% Complete</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styled Feature Boxes */}
      <div className="w-full relative z-10 px-4">
        <div className="max-w-6xl mx-auto -mt-12">
          <div className="bg-[#0a1f42]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-blue-400 font-bold text-sm tracking-widest uppercase">Integration</span>
              <p className="text-white text-lg font-semibold">Dentrix, Open Dental & EagleSoft Sync</p>
            </div>
            <div className="flex flex-col gap-2 border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0 md:px-8">
              <span className="text-blue-400 font-bold text-sm tracking-widest uppercase">Security</span>
              <p className="text-white text-lg font-semibold">Military-Grade HIPAA Compliance</p>
            </div>
            <div className="flex flex-col gap-2 md:pl-8">
              <span className="text-blue-400 font-bold text-sm tracking-widest uppercase">Scale</span>
              <p className="text-white text-lg font-semibold">Optimized for Multi-Location DSOs</p>
            </div>
          </div>
        </div>
      </div>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
}



