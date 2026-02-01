export default function Features() {
  return (
    <section className="mb-16 section">
      <div className="max-w-7xl mx-auto container">
        <span className="bg-blue-700 text-white font-bold px-3 py-1 rounded-full mb-4 inline-block">Key Features</span>
        <p className="section-sub">Core capabilities built to reduce denials, accelerate collections and simplify operations.</p>

        <div className="features-grid grid md:grid-cols-3 gap-8">
          <div className="card card-gradient-1 p-8 text-center animate-fade-in-up">
            <div className="feature-icon ">
              <img src="/images/icon1.webp" alt="Automated Verification" className="w-12 h-12 object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Automated Insurance Verification</h3>
            <p className="text-blue-700">Quickly verify patient eligibility and coverage with real-time checks, reducing front-desk time and no-shows.</p>
          </div>

          <div className="card card-gradient-2 p-8 text-center animate-fade-in-up">
            <div className="feature-icon">
              <img src="/images/icon2.webp" alt="EOB Posting" className="w-12 h-12 object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">EOB Payment Posting</h3>
            <p className="text-blue-700">Automated posting and reconciliation of EOBs to keep patient accounts accurate and up to date.</p>
          </div>

          <div className="card card-gradient-3 p-8 text-center animate-fade-in-up">
            <div className="feature-icon">
              <img src="/images/icon3.webp" alt="Secure & Compliant" className="w-12 h-12 object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Secure & HIPAA Compliant</h3>
            <p className="text-blue-700">We protect patient data with industry-standard security and strict compliance processes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
