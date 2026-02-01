export default function FeaturesAlt() {
  return (
    <section className="py-12 section">
      <div className="max-w-7xl mx-auto container">
        <span className="bg-blue-700 text-white font-bold px-3 py-1 rounded-full mb-4 inline-block">Completely Flexible</span>
        <p className="section-sub">Customize workflows and automate posting so your practice runs smoothly.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 items-start">
          <div className="col-span-1 card p-8 rounded-2xl">
            <h4 className="font-semibold text-blue-700 mb-4">Completely Flexible</h4>
            <p className="muted">Customize Lassie to match your workflows — from adjustments to allocations. Granular posting rules make sure each cent lands exactly where it belongs.</p>
          </div>

          <div className="col-span-1 md:col-span-1">
            <div className="space-y-4">
              <div className="card p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <img src="/images/icon4.webp" alt="flag" className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Flag me for a review</p>
                  <p className="muted">If fluoride is denied for age limit, we flag for review.</p>
                </div>
              </div>

              <div className="card p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <img src="/images/icon5.webp" alt="writeoff" className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Auto write-off</p>
                  <p className="muted">Auto write-off bitewings if bundled into PMS.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 flex justify-center md:justify-end">
            <div className="w-full md:w-80 card overflow-hidden rounded-2xl shadow-lg">
              <img src="/images/erp.webp" alt="ERP" className="w-full h-56 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
