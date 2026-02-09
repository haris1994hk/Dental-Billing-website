export default function PaymentPostingJourney() {
  return (
    <section className="py-16 px-4 mx-auto max-w-7xl bg-slate-50 rounded-lg my-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">The Complete Payment Posting Journey</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-blue-700 mb-6">Before Payment Posting</h3>
          <p className="text-sm font-semibold text-slate-600 mb-4">Start with clean, complete insurance data</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-700 font-bold mt-1">●</span>
              <span>EOB and EOP ingestion</span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-700 font-bold mt-1">●</span>
              <span>Claim and payer matching</span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-700 font-bold mt-1">●</span>
              <span>Bulk check identification</span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-700 font-bold mt-1">●</span>
              <span>Missing data detection</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-700 mb-6">During Payment Posting</h3>
          <p className="text-sm font-semibold text-slate-600 mb-4">Post accurately — not manually</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-700 font-bold mt-1">●</span>
              <span>Line-item validation</span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-700 font-bold mt-1">●</span>
              <span>Deductible and co-insurance logic</span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-700 font-bold mt-1">●</span>
              <span>LEAT and downcoding recognition</span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-700 font-bold mt-1">●</span>
              <span>Patient balance calculations</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-700 mb-6">After Payment Posting</h3>
          <p className="text-sm font-semibold text-slate-600 mb-4">Nothing falls through the cracks</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-700 font-bold mt-1">●</span>
              <span>Denial reason summaries</span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-700 font-bold mt-1">●</span>
              <span>Underpayment flags</span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-700 font-bold mt-1">●</span>
              <span>Adjustment audit trail</span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-700 font-bold mt-1">●</span>
              <span>Posting verification support</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
