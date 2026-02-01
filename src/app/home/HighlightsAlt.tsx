export default function HighlightsAlt() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <span className="bg-blue-700 text-white font-bold px-3 py-1 rounded-full">Explore More</span>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-4">Additional Benefits & Practice Improvements</h3>
          <p className="text-gray-600 mt-2">How we support operations, revenue, and patient satisfaction across your practice.</p>
        </div>

        <div className="grid gap-6 md:gap-8 highlights-alt-list">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="md:w-1/3">
              <img src="/images/d1.webp" alt="Dedicated" className="w-full h-48 object-cover highlights-alt-img" />
            </div>
            <div className="md:w-2/3 p-6">
              <h4 className="text-lg font-semibold text-blue-700">Dedicated Professionals</h4>
              <p className="text-gray-600 mt-2">A named team handles your accounts, improving continuity and accuracy across billing workflows.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="md:w-1/3">
              <img src="/images/d2.jpg" alt="Privacy" className="w-full h-48 object-cover highlights-alt-img" />
            </div>
            <div className="md:w-2/3 p-6">
              <h4 className="text-lg font-semibold text-blue-700">Guaranteed Data Privacy</h4>
              <p className="text-gray-600 mt-2">We maintain strict security controls and encrypted storage to keep patient and practice data safe.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="md:w-1/3">
              <img src="/images/d3.png" alt="Pricing" className="w-full h-48 object-cover highlights-alt-img" />
            </div>
            <div className="md:w-2/3 p-6">
              <h4 className="text-lg font-semibold text-blue-700">Flexible Pricing</h4>
              <p className="text-gray-600 mt-2">Choose the plan that fits your case volume and reporting requirements — scale up or down as needed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
