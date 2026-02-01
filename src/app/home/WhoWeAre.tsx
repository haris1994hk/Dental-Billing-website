export default function WhoWeAre() {
  return (
    <section className="mb-16 animate-fade-in section">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center container">
        <div>
          <span className="bg-blue-700 text-white font-bold px-3 py-1 rounded-full mb-4 inline-block">Who We Are</span>
          <p className="text-lg muted mb-6 lead">We are a dedicated team of dental clinicians, revenue-cycle experts, and engineers who build pragmatic billing solutions for busy practices. Our focus is simple: reduce claim denials, accelerate collections, and give your team back time to care for patients.</p>
          <ul className="text-gray-700 space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm">✓</span>
              <span className="muted">Real-world dental billing expertise — not generic consultancies.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm">✓</span>
              <span className="muted">Secure, HIPAA-compliant processes and transparent reporting.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm">✓</span>
              <span className="muted">Automation where it helps most, human expertise where it matters.</span>
            </li>
          </ul>
          <div>
            <a href="/about" className="btn-primary inline-block rounded-full text-white px-6 py-3 font-bold shadow">Learn More</a>
          </div>
        </div>

        <div>
          <img src="/images/who.webp" alt="Who we are" className="w-full h-[280px] rounded-lg mb-6 object-cover shadow-lg" />
        </div>
      </div>
    </section>
  );
}
