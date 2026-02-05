export default function Services() {
  return (
    <section className="py-16 px-4 mx-auto max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Prefer Done-For-You Billing Support?</h2>
      <p className="text-lg text-slate-700 mb-12">Dental Billing Aid also offers expert dental billing services supported by our AI platform.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-white mb-4">Dental Billing & Claim Submission</h3>
          <p className="text-gray-600">End-to-end insurance billing, claim follow-ups, and AR support.</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-white mb-4">Insurance Verification</h3>
          <p className="text-gray-600">Accurate eligibility, benefits, limitations, and frequency checks.</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-white mb-4">Appointment Scheduling & Front Office Support</h3>
          <p className="text-gray-600">Patient calls, confirmations, recalls, and scheduling assistance.</p>
        </div>
      </div>

      <a href="/services" className="inline-block rounded-full text-[#0c52e0] font-semibold px-8 py-3 border-2 border-[#0c52e0] hover:bg-[#0c52e0] hover:text-white transition">View Services</a>
    </section>
  );
}
