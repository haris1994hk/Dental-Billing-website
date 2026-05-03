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
            <h2 className="text-4xl mt-10 font-semibold !text-white mb-4">ABOUT US</h2>
            <h3 className="text-3xl font-bold !text-[#1b489b] mb-6">Dental Billing Aid</h3>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
Dental Billing Aid was built by dental billing professionals who were tired of manual EOB processing slowing practices down. We combined that expertise with AI to create a smarter, faster way to post payments  one that reduces errors, catches underpayments, and gives your team time back.            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-white">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold !text-white">Auto Extraction</h4>
                  <p className="text-gray-400">Instantly pulls payment data from EOBs and EOPs</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-white">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold !text-white">Smart Validation</h4>
                  <p className="text-gray-400">Reduces errors and prevents revenue loss.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-white">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold !text-white">Fast Posting</h4>
                  <p className="text-gray-400">Cuts manual work and speeds up payments.</p>
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




