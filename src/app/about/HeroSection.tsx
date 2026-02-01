export default function HeroSection() {
  return (
    <section className="w-full  animate-hero-pop animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900">Support for Your Dental Practice to Simplify Billing and Save Time!</h1>
            <p className="mt-4 text-zinc-700 max-w-3xl">Support for Your Dental Practice to Simplify Billing and Save Time! Our service helps dental practices streamline billing and administrative tasks, so you can focus on patient care. With easy-to-use solutions, we reduce back-office hassles, improve efficiency, and save you valuable time, making day-to-day operations smoother and stress-free.</p>
            <button className="mt-6 border border-blue-600 text-blue-600 px-6 py-2 rounded">GET STARTED TODAY!</button>
          </div>

          <div className="flex justify-center md:justify-end">
            <img src="/images/about.png" alt="About" className="w-full max-w-md rounded-lg h-100  object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
