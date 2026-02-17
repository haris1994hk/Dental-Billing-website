'use client';

export default function AboutSection() {
  return (
    <section className="w-full  bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2  justify-between  gap-12 ">
          {/* Left Illustration */}
          <div className="relative">
            <div className="">
           <img
              src="/images/aboutus.png"
              alt="Dental Billing Illustration"
              className=""
            />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-semibold !text-black mb-4">ABOUT US</h2>
            <h3 className="text-3xl font-bold !text-[#1b489b] mb-6">Dental Billing Aid</h3>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Is a dental revenue automation platform that helps Dental Practices accurately post insurance payments using Artificial Intelligence.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#1b489b]">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold !text-black">Auto Extraction</h4>
                  <p className="text-gray-600">Instantly pulls payment data from EOBs and EOPs</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#1b489b]">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold !text-black">Smart Validation</h4>
                  <p className="text-gray-600">Reduces errors and prevents revenue loss.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#1b489b]">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold !text-black">Fast Posting</h4>
                  <p className="text-gray-600">Cuts manual work and speeds up payments.</p>
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
