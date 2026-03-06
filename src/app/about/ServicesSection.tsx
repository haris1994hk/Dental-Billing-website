"use client";

import Image from "next/image";
import React from "react";
import { FiCheck } from "react-icons/fi";

export default function ServicesSection() {
  return (
    <section className="w-full">
      <div className="relative w-full bg-white ">

        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/heroo.webp"
            alt="background"
            fill
            className="object-cover object-center opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-white/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">

                {/* BLUE BACKGROUND SHAPE */}
                <div className="absolute -bottom-8 -right-8 w-full h-full bg-[#163a9a] rounded-3xl z-0"></div>

                {/* IMAGE */}
                <div className="relative w-[340px] md:w-[460px] rounded-2xl overflow-hidden shadow-xl ring-4 ring-blue-200 z-10">
                  <Image
                    src="/images/nurse.jpeg"
                    alt="AI Revenue Automation"
                    width={900}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />

                  {/* SMALL BADGE */}
               
                </div>

                {/* TOP BADGE */}
                <div className="hidden md:flex absolute -top-6 -right-56 w-[240px] h-[90px] bg-[#163a9a] rounded-2xl items-center justify-center text-white px-4 z-20 shadow-lg">
                  <div className="text-center">
                    <div className="text-sm font-semibold">
                      AI SPECIALLY DESIGNED
                    </div>
                    <div className="text-sm font-semibold mt-1">
                      FOR FAST BILLING
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Text Section */}
            <div className="w-full  md:w-1/2">

              {/* Tags */}
          

              {/* Heading */}
              <h2 className="text-3xl !mt-60 md:text-4xl font-semibold text-[#1b489b] mb-6">
                AI Revenue Automation
              </h2>

              {/* List */}
              <ul className="space-y-3 font-bold">
                {[
                  "EOB & EOP extraction and parsing",
                  "Pre-treatment estimate interpretation",
                  "Automated payment posting",
                  "PMS writeback",
                  "Denial detection & appeal guidance",
                  "Revenue performance analytics",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-white bg-[#1b489b] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiCheck size={16} strokeWidth={3} />
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}