'use client';

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16 xl:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Illustration */}
            <div className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1">
              <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md">
                <img
                  src="/images/aboutus.png"
                  alt="Dental Billing Illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-sm xs:text-base sm:text-base lg:text-base font-semibold !text-[#1b489b] mb-2 sm:mb-3 lg:mb-4 uppercase tracking-wide">ABOUT US</h2>
              <h3 className="text-3xl xs:text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold !text-black mb-4 sm:mb-6 lg:mb-8 leading-tight">Dental Billing Aid</h3>

              <p className="text-gray-700 text-sm xs:text-base sm:text-base lg:text-lg xl:text-lg mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
                Is a dental revenue automation platform that helps Dental Practices accurately post insurance payments using Artificial Intelligence.
              </p>

              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                <div className="flex gap-3 sm:gap-4 lg:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 xs:h-6 xs:w-6 sm:h-6 sm:w-6 lg:h-7 lg:w-7 rounded-full bg-[#1b489b]">
                      <span className="text-white text-xs xs:text-xs sm:text-sm font-bold">✓</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base xs:text-base sm:text-base lg:text-lg font-bold !text-black mb-1">Auto Extraction</h4>
                    <p className="text-gray-600 text-xs xs:text-sm sm:text-sm lg:text-base">Instantly pulls payment data from EOBs and EOPs</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 lg:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 xs:h-6 xs:w-6 sm:h-6 sm:w-6 lg:h-7 lg:w-7 rounded-full bg-[#1b489b]">
                      <span className="text-white text-xs xs:text-xs sm:text-sm font-bold">✓</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base xs:text-base sm:text-base lg:text-lg font-bold !text-black mb-1">Smart Validation</h4>
                    <p className="text-gray-600 text-xs xs:text-sm sm:text-sm lg:text-base">Reduces errors and prevents revenue loss.</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 lg:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 xs:h-6 xs:w-6 sm:h-6 sm:w-6 lg:h-7 lg:w-7 rounded-full bg-[#1b489b]">
                      <span className="text-white text-xs xs:text-xs sm:text-sm font-bold">✓</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base xs:text-base sm:text-base lg:text-lg font-bold !text-black mb-1">Fast Posting</h4>
                    <p className="text-gray-600 text-xs xs:text-sm sm:text-sm lg:text-base">Cuts manual work and speeds up payments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
