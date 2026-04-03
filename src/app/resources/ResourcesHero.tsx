'use client';

export default function ResourcesHero() {
  return (
    <section className="w-full">
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-b from-[#1b489b] to-[#0f2d5f] border-b-8 border-[#0f2d5f] py-16 sm:py-20 text-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl !text-white sm:text-5xl font-extrabold mb-4">
            Dental Billing Resources
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Everything you need to run a tighter billing operation. Free guides, checklists, glossaries, and tools to help dental practices collect more and stress less.
          </p>
        </div>
      </div>
    </section>
  );
}
