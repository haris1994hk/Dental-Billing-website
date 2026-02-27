"use client";
import React from "react";

export default function DemoVideo() {
  return (
    <section className="w-full mt-12 bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold !text-black">
          WATCH A QUICK DEMO OF OUR
          <span className="block text-3xl sm:text-4xl font-extrabold text-[#1b489b]">DENTAL BILLING AI TOOL!</span>
        </h2>

        <div className="mt-8 flex justify-center px-4">
          <div className="relative w-full max-w-[880px]">
            {/* decorative blue corner shapes (behind the video) */}
            <div className="absolute -top-6 -left-6 w-16 h-10 bg-[#1b489b] rounded-xl hidden md:block z-0" />
            <div className="absolute -bottom-6 -right-6 w-16 h-10 bg-[#1b489b] rounded-xl hidden md:block z-0" />

            <div className="relative z-10 rounded-[28px] overflow-hidden shadow-lg bg-[#eef3fb]">
              <video
                className="w-full h-[200px] sm:h-[320px] md:h-[420px] lg:h-[460px] object-cover block rounded-[20px]"
                controls
                poster="/images/video-poster.png"
              >
                <source src="/videos/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* play button overlay (for aesthetics when poster present) */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-20">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  <svg className="w-8 h-8 text-[#1b489b]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5v14l11-7-11-7z" fill="#1b489b" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
