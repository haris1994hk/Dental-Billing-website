"use client";

import React, { useRef, useState, useEffect } from "react";

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [progress, setProgress] = useState(0);

  const CARD_WIDTH = 380;
  const GAP = 24; 
  const SCROLL_AMOUNT = CARD_WIDTH + GAP;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      setCanPrev(el.scrollLeft > 10);
      setCanNext(el.scrollLeft + el.clientWidth + 10 < el.scrollWidth);
      const max = el.scrollWidth - el.clientWidth;
      const p = max > 0 ? Math.round((el.scrollLeft / max) * 100) : 0;
      setProgress(p);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const prev = () => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  };

  const next = () => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  };

  return (
    <section className="w-full py-20 relative overflow-hidden">
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#01162E] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of dental practices that have transformed their billing process
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollBehavior: "smooth" }}
          >
            {[
              {
                text: "Dental Billing Aid freed up over 20 hours a month and stopped my team from wasting time entering checks and reconciling accounts. My team really loves it.",
                doctor: "DR. CISTERNINO",
                clinic: "SPRING LAKE DENTAL, NJ",
                initials: "C"
              },
              {
                text: "Dental Billing Aid saved my team over 70 hours in manual data entry last month. It's reduced my outstanding AR by 85%.",
                doctor: "DR. BAMRAH",
                clinic: "H & F DENTAL CARE, OH",
                initials: "B"
              },
              {
                text: "The automation features have transformed how we handle billing. Our staff is now focused on patient care instead of paperwork.",
                doctor: "DR. JOHNSON",
                clinic: "PREMIER DENTAL GROUP, CA",
                initials: "J"
              },
              {
                text: "Outstanding software! We've seen a 60% reduction in billing errors and our insurance claims are processed faster than ever.",
                doctor: "DR. WILLIAMS",
                clinic: "SMILE DENTAL STUDIO, TX",
                initials: "W"
              }
            ].map((testimonial, idx) => (
              <div 
                key={idx}
                className="flex-none bg-white rounded-2xl p-8 shadow-lg border border-gray-100 w-[380px] snap-start hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${0.1 + idx * 0.1}s both`
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-base leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Divider */}
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>

                {/* Doctor Info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-[#01162E] text-sm">
                      {testimonial.doctor}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonial.clinic}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            disabled={!canPrev}
            className={`absolute -left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 text-2xl font-bold ${
              canPrev
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
            aria-label="Previous testimonials"
          >
            ‹
          </button>

          <button
            onClick={next}
            disabled={!canNext}
            className={`absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 text-2xl font-bold ${
              canNext
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
            aria-label="Next testimonials"
          >
            ›
          </button>

          {/* Progress Bar */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-24 h-1 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm text-gray-600">{progress}%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
