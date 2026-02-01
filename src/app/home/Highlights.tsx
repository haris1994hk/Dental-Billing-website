export default function Highlights() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto mb-6 text-left">
        <span className="bg-blue-700 text-white font-bold px-3 py-1 rounded-full mb-4 inline-block">What Makes Us Different</span>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mt-4">Here's What Makes Dental Billing Aid the No.1 Choice for Dentists</h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start highlights-grid">
        <article className="highlights-card bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 p-6">
          <img src="/images/d1.svg" alt="Dedicated" className="w-60 h-40 mx-auto mb-4 object-contain" />
          <p className="text-xs uppercase text-slate-400 text-center mb-2">Dedicated Professionals</p>
          <h3 className="text-xl font-semibold text-slate-900 text-center mb-3">Consistently High</h3>
          <div className="h-px bg-gray-100 my-3" />
          <p className="text-gray-600 text-center">Each dental clinic or practitioner we onboard are allocated a dedicated team of dental billing professionals.</p>
        </article>

        <article className="highlights-card bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 p-6">
          <img src="/images/d2.jpg" alt="Privacy" className="w-60 h-40 mx-auto mb-4 object-cover rounded" />
          <p className="text-xs uppercase text-slate-400 text-center mb-2">Guaranteed Data Privacy</p>
          <h3 className="text-xl font-semibold text-slate-900 text-center mb-3">Steadily Expanding</h3>
          <div className="h-px bg-gray-100 my-3" />
          <p className="text-gray-600 text-center">We provide 100% privacy of your data and patients' records via 256-bit SSL/TLS encryption, meeting HIPAA standards.</p>
        </article>

        <article className="highlights-card bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 p-6">
          <img src="/images/d3.png" alt="Pricing" className="w-60 h-40 mx-auto mb-4 object-contain" />
          <p className="text-xs uppercase text-slate-400 text-center mb-2">Flexible Pricing</p>
          <h3 className="text-xl font-semibold text-slate-900 text-center mb-3">Reliable Timelines</h3>
          <div className="h-px bg-gray-100 my-3" />
          <p className="text-gray-600 text-center">We offer a range of pricing plans that are affordable and customizable based on your specified needs.</p>
        </article>
      </div>
    </section>
  );
}
