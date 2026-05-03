'use client';

export default function ServicesHero() {
  return (
    <section className="w-full">
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
      `}</style>
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-br from-[#01162E] via-[#0a2351] to-[#01162E] border-b-8 border-blue-900 py-16 sm:py-20 text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl !text-white sm:text-5xl font-bold mb-4 animate-fade-in-up">
            Complete Revenue Cycle Support
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Dental Billing Aid helps dental practices recover lost revenue, reduce AR days, and eliminate billing
            stress. Our services streamline billing workflows, reduce claim denials, and ensure faster insurance
            payments.
          </p>
        </div>
      </div>
    </section>
  );
}


