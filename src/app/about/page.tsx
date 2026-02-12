'use client';

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">About Dental Billing Aid</h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-2 sm:px-0">
              We're transforming dental billing through artificial intelligence and expert support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
            <div className="p-4 sm:p-8 bg-gray-50 rounded-lg">
              <div className="text-3xl sm:text-4xl mb-4">🎯</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base text-gray-600">
                To revolutionize dental practice management by automating payment posting and eliminating manual billing errors.
              </p>
            </div>

            <div className="p-4 sm:p-8 bg-gray-50 rounded-lg">
              <div className="text-3xl sm:text-4xl mb-4">💡</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Every dental practice should focus on patient care, not paperwork. We make that possible.
              </p>
            </div>

            <div className="p-4 sm:p-8 bg-gray-50 rounded-lg">
              <div className="text-3xl sm:text-4xl mb-4">🏆</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Our Values</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Innovation, accuracy, reliability, and patient-centered care guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
