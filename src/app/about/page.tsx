'use client';

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Dental Billing Aid</h1>
            <p className="text-xl text-gray-600">
              We're transforming dental billing through artificial intelligence and expert support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To revolutionize dental practice management by automating payment posting and eliminating manual billing errors.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                Every dental practice should focus on patient care, not paperwork. We make that possible.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Innovation, accuracy, reliability, and patient-centered care guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
