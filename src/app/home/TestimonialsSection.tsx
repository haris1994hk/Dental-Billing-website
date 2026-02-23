"use client";

import React, { useRef, useState, useEffect } from "react";

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [progress, setProgress] = useState(0);

  const CARD_WIDTH = 260; // px
  const GAP = 24; // tailwind gap-6 = 1.5rem = 24px
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
    <section className="w-full bg-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* IMPORTANT: items-center so both columns align */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left: Quote and heading */}
          <div className="relative flex flex-col items-start">

            {/* Quote (absolute, does NOT affect layout) */}
            <div className="absolute -top-40 -left-3 text-gray-300 text-[380px] leading-none font-extrabold select-none">
              “
            </div>

            {/* Heading */}
            <h3 className="text-4xl mt-25 md:text-5xl font-semibold !text-black leading-tight">
              What our<br />customers are<br />saying...!
            </h3>

            {/* Line + arrows */}
            <div className="mt-6 w-[300px] flex items-center gap-4">
              <button className="text-3xl text-black">←</button>
              <div className="flex-1 border-t border-black mt-2" />
              <button className="text-3xl text-black">→</button>
            </div>
          </div>

          {/* Right: Testimonial cards (slider) */}
          <div className="flex justify-end">
            <div className="relative">
              <div className="relative">
                <div
                  ref={containerRef}
                  className="flex gap-6 items-start overflow-x-auto pr-2 snap-x snap-mandatory scroll-smooth scrollbar-hide"
                  style={{ scrollBehavior: "smooth", width: 'min(820px,100%)' }}
                >
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <div key={idx} className="flex-none bg-[#14479b] text-white rounded-xl p-4 shadow-md w-[260px] snap-start">
                    <div className="text-yellow-300 mb-2 text-sm">★★★★★</div>
                    <p className="text-[11px] leading-snug uppercase">
                      Dental Billing Aid dramatically reduced the time we spend posting insurance payments and helped us catch underpayments we were missing before.
                    </p>
                    <div className="mt-3 text-[10px] opacity-90 font-semibold">
                      HARIS KHAN<br />
                      <span className="text-[9px] opacity-80 font-normal">DENTAL BILLING MANAGER, US</span>
                    </div>
                  </div>
                ))}
                </div>

                {/* custom progress track */}
                <div className="mt-4">
                  <div className="testimonial-track">
                    <div className="testimonial-thumb" style={{ width: `${progress}%` }} />
                  </div>
                </div>

                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20">
                  <button onClick={prev} disabled={!canPrev} className={`slider-arrow ${canPrev ? 'primary' : ''}`} aria-label="Previous testimonials">
                    ‹
                  </button>
                </div>

                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20">
                  <button onClick={next} disabled={!canNext} className={`slider-arrow ${canNext ? 'primary' : ''}`} aria-label="Next testimonials">
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}