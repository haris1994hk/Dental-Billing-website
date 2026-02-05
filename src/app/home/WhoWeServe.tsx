export default function WhoWeServe() {
  return (
    <section className="py-16 px-4 mx-auto max-w-6xl bg-slate-50 rounded-lg my-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - TEXT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Who We Serve</h2>
          <div className="flex flex-col gap-3 mb-8">
            <p className="flex items-center gap-2 text-slate-700 text-lg">
              <span className="text-blue-700 font-bold">●</span>
              <span>General dental practices</span>
            </p>
            <p className="flex items-center gap-2 text-slate-700 text-lg">
              <span className="text-blue-700 font-bold">●</span>
              <span>Multi-location dental groups</span>
            </p>
            <p className="flex items-center gap-2 text-slate-700 text-lg">
              <span className="text-blue-700 font-bold">●</span>
              <span>DSOs (Dental Service Organizations)</span>
            </p>
            <p className="flex items-center gap-2 text-slate-700 text-lg">
              <span className="text-blue-700 font-bold">●</span>
              <span>Dental billing companies</span>
            </p>
            <p className="flex items-center gap-2 text-slate-700 text-lg">
              <span className="text-blue-700 font-bold">●</span>
              <span>Dental consultants</span>
            </p>
          </div>
          <p className="text-slate-700 text-lg">Dental Billing Aid is built for U.S. dental insurance workflows and supports practices nationwide.</p>
        </div>

        {/* RIGHT SIDE - ILLUSTRATION */}
        <div className="flex items-center justify-center">
          <img src="/images/who-we-serve.png" alt="Who We Serve" className="w-full max-w-sm" />
        </div>
      </div>
    </section>
  );
}
