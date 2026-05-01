'use client';

export default function ServicesCTA() {
  return (
    <section className="w-full">
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-r from-[#1b489b] to-[#0f2d5f] border-b-4 border-[#0f2d5f] py-16 sm:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Streamline Your Revenue Cycle?
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            Let Dental Billing Aid handle your billing complexities so you can focus on patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/haris-1994-hk/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1b489b] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get Started Today
            </a>
            <a 
              href="https://calendly.com/haris-1994-hk/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1b489b] transition"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

