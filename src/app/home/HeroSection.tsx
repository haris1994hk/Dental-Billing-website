'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
      <section className="w-screen relative bg-[#1b489b] overflow-hidden -ml-[calc(50vw-50%)]  pb-18">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center py-12">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-block mb-6 bg-white !text-black px-4 py-2 rounded-full border border-white/30">
                <span className="text-sm font-semibold flex items-center gap-2">
                  <span className=''>⚙️</span>
                  Post Dental Insurance Payments Smarter
                </span>
              </div>

              <h1 className="text-5xl lg:text-5xl font-bold mb-6 leading-tight !text-white">
                AI-Powered EOB Payment Posting for Dental Practices
              </h1>

              <p className="text-lg text-white mb-8 leading-relaxed">
                Automate EOB and EOP payment posting, reduce posting errors, and protect every dollar your practice earns — with AI software and optional expert billing support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                  Get A Demo
                </button>
                <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all">
                  See How The EOB AI Works
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-end -mb-[60px]">
              <div className="relative w-full max-w-md h-[530px] ">
                <Image
                  src="/images/girl.png"
                  alt="Professional Dental Assistant"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Boxes Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-5xl mx-auto relative -mt-16 z-10">
          <div className="bg-gray-200 rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-lg font-bold text-blue-600 mb-2">Works</p>
              <p className="text-black font-semibold">With Open Dental, Dentrix & Lending FMS Workflows</p>
            </div>
            <div>
              <p className="text-lg font-bold text-blue-600 mb-2">HIPAA-Ready</p>
              <p className="text-black font-semibold    ">Secure & US Dental Insurance Compatible</p>
            </div>
            <div>
              <p className="text-lg font-bold text-blue-600 mb-2">Designed</p>
              <p className="text-black font-semibold">For Single Offices, Multi-Location Practices, and DSOs</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
