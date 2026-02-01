export default function Hero() {
  return (
    <div className="py-7 px-4 mx-auto">
      {/* Hero Section */}
      <section className="animate-hero-pop animate-fade-in">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-extrabold text-blue-700 mb-4">100 FREE INSURANCE VERIFICATION FOR ALL NEW CUSTOMERS! ($600 value)</h1>
            <p className="text-lg md:text-xl font-semibold text-slate-700 mb-8 max-w-2xl mx-auto md:mx-0 lead">Boost Your Clinic's Efficiency: Free Guide to In-House vs. Outsourced Dental Billing — Download Below!</p>
            <a href="/contact" className="btn-primary inline-block rounded-full text-white font-semibold text-lg">Get Started</a>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <img src="/images/hero.jpg" alt="Dental Billing Hero" className="w-full max-w-md rounded-xl shadow-lg object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
