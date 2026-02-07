'use client';

import AnimatedImageCard from '@/app/components/AnimatedImageCard';

export default function Hero() {
  return (
    <div className="py-12 px-4 mx-auto">
      {/* Hero Section */}
      <section className="animate-hero-pop animate-fade-in">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center space-y-6 md:text-left">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#0c52e0]">Post Dental Insurance Payments Smarter™</h1>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-800">AI-Powered EOB Payment Posting for Dental Practices</h2>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto md:mx-0">Automate EOB and EOP payment posting, reduce posting errors, and protect every dollar your practice earns — with AI software and optional expert billing support.</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="/contact" className="btn-primary inline-block rounded-full text-white font-semibold text-lg px-8 py-3 bg-[#0c52e0] hover:bg-[#0a3fa8] transition">Get a Demo</a>
              <a href="#eob-ai" className="inline-block rounded-full text-[#0c52e0] font-semibold text-lg px-8 py-3 border-2 border-[#0c52e0] hover:bg-blue-50 transition">See How the EOB AI Works</a>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3 pt-4 text-sm md:text-base text-slate-700">
              <p className="flex items-start justify-center md:justify-start gap-2">
                <span className="text-[#0c52e0] font-bold">●</span>
                <span>Works with Open Dental, Dentrix & leading PMS workflows</span>
              </p>
              <p className="flex items-start justify-center md:justify-start gap-2">
                <span className="text-[#0c52e0] font-bold">●</span>
                <span>HIPAA-ready • Secure • US dental insurance compatible</span>
              </p>
              <p className="flex items-start justify-center md:justify-start gap-2">
                <span className="text-[#0c52e0] font-bold">●</span>
                <span>Designed for single offices, multi-location practices, and DSOs</span>
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <AnimatedImageCard src="/images/main.png" alt="Dental Billing Hero" />
          </div>
        </div>
      </section>
    </div>
  );
}
