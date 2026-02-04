export default function HowItWorks() {
  return (
    <section className="py-16 px-4 mx-auto max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Upload EOBs & EOPs</h3>
          <p className="text-slate-700 text-sm">Upload scanned EOBs, PDFs, or digital remittance files from dental insurance payers.</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">AI Extraction & Validation</h3>
          <p className="text-slate-700 text-sm">Our AI reads and structures insurance payment data, validates calculations, and flags inconsistencies.</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Posting-Ready Output</h3>
          <p className="text-slate-700 text-sm">Receive a clean breakdown including insurance paid amount, adjustments, patient responsibility, and denial codes.</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Export or PMS Workflow</h3>
          <p className="text-slate-700 text-sm">Export data or follow your existing payment posting workflow with confidence.</p>
        </div>
      </div>
    </section>
  );
}
