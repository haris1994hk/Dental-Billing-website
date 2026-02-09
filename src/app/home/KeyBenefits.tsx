export default function KeyBenefits() {
  return (
    <section className="py-16 px-4 mx-auto max-w-7xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">Key Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-blue-50 p-8 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold text-blue-700 mb-4">Save Hundreds of Hours Every Month</h3>
          <p className="text-slate-700">Eliminate manual EOB data entry and repetitive payment posting work.</p>
        </div>
        <div className="bg-blue-50 p-8 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold text-blue-700 mb-4">Reduce Payment Posting Errors</h3>
          <p className="text-slate-700">Automatically validate line-item math, deductibles, write-offs, and patient responsibility.</p>
        </div>
        <div className="bg-blue-50 p-8 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold text-blue-700 mb-4">Improve Insurance Collections</h3>
          <p className="text-slate-700">Identify denials, underpayments, and missing adjustments before revenue is lost.</p>
        </div>
      </div>
    </section>
  );
}
