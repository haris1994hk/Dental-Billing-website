'use client';

export default function ServicesHero() {
  return (
    <section className="w-full">
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-b from-[#1b489b] to-[#0f2d5f] border-b-8 border-[#0f2d5f] py-16 sm:py-20 text-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl !text-white sm:text-5xl font-extrabold mb-4">
            Complete Revenue Cycle Support
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Dental Billing Aid helps dental practices recover lost revenue, reduce AR days, and eliminate billing
            stress. Our services streamline billing workflows, reduce claim denials, and ensure faster insurance
            payments.
          </p>
        </div>
      </div>
    </section>
  );
}
