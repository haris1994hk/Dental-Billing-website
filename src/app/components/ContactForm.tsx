"use client";
import React from "react";

export default function ContactForm() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="bg-[#14479b] text-white rounded-3xl p-8 lg:p-12 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-3xl text-start !text-white sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight uppercase">
              SCHEDULE<br />YOUR FREE<br />CONSULTATION!
            </h3>
            <p className="mt-6 text-[30px] lg:text-[27px] text-start text-white/90 max-w-lg">Meet with our billing specialists and see how our AI can reduce errors, increase collections, and save your team hours every week.</p>
          </div>

          <form className="space-y-4 bg-transparent p-2 lg:p-0 text-white">
            <div className="grid grid-cols-2 gap-4 justify-end">
              <div className="flex flex-col items-start">
                <label className="block text-xs text-white/90 text-left">First Name*</label>
                <input className="mt-1 w-full max-w-[180px] rounded px-3 py-2 bg-white text-black placeholder:text-zinc-400" />
              </div>
              <div className="flex flex-col items-start">
                <label className="block text-xs text-white/90 text-left">Last Name*</label>
                <input className="mt-1 w-full max-w-[180px] rounded px-3 py-2 bg-white text-black placeholder:text-zinc-400"  />
              </div>
            </div>

            <div>
              <label className="block text-xs text-white/90 text-left">Phone Number*</label>
              <input className="mt-1 w-full rounded px-3 py-2 bg-white text-black placeholder:text-zinc-400" />
            </div>

            <div className="grid grid-cols-2 gap-4 justify-end items-end">
              <div className="flex flex-col items-start">
                <label className="block text-xs text-white/90 text-left">Date*</label>
                <input type="date" className="mt-1 rounded px-3 py-2 bg-white text-black placeholder:text-zinc-400 w-40" />
              </div>
              <div className="flex flex-col items-start">
                <label className="block text-xs text-white/90 text-left">Time*</label>
                <input type="time" className="mt-1 rounded px-3 py-2 bg-white text-black placeholder:text-zinc-400 w-28" />
              </div>
            </div>

            <div>
              <label className="block text-xs text-white/90 text-left">Email*</label>
              <input className="mt-1 w-full rounded px-3 py-2 bg-white text-black placeholder:text-zinc-400"  />
            </div>

            <div>
              <label className="block text-xs text-white/90 text-left">Message*</label>
              <textarea className="mt-1 w-full rounded px-3 py-3 bg-white text-black h-28" />
            </div>

            <div className="flex justify-start">
              <button type="button" className="bg-white text-[#1b489b] px-6 py-1 rounded-full font-semibold shadow inline-flex items-center gap-3">
                <span className="text-[20px]">Send</span>
                <span className="w-7 h-7 bg-[#e6eefb] text-[#1b489b] rounded-full flex items-center justify-center">›</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
