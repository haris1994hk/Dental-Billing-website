'use client';

export default function SecurityCompliance() {
  return (
    <section className="py-16 px-4 mx-auto max-w-7xl">
      <div className="bg-white border border-slate-200 rounded-lg p-12 shadow-lg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - ILLUSTRATION */}
          <div className="flex items-center justify-center">
            <img src="/images/security-compliance.png" alt="Security & Compliance" className="w-full max-w-sm rounded-lg" />
          </div>

          {/* RIGHT SIDE - TEXT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Security & Compliance</h2>
            <div className="flex flex-col gap-4 mb-8">
              <p className="flex items-center gap-2 text-slate-700 text-lg">
                <span className="text-[#0c52e0] font-bold">●</span>
                <span>HIPAA-ready architecture</span>
              </p>
              <p className="flex items-center gap-2 text-slate-700 text-lg">
                <span className="text-[#0c52e0] font-bold">●</span>
                <span>Secure document handling</span>
              </p>
              <p className="flex items-center gap-2 text-slate-700 text-lg">
                <span className="text-[#0c52e0] font-bold">●</span>
                <span>Access-controlled workflows</span>
              </p>
              <p className="flex items-center gap-2 text-slate-700 text-lg">
                <span className="text-[#0c52e0] font-bold">●</span>
                <span>Audit-friendly outputs</span>
              </p>
            </div>
            <p className="text-slate-700 text-lg">We understand the sensitivity of dental insurance and patient financial data.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
