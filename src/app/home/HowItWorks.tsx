"use client";
import Image from "next/image";
import { ReactNode } from "react";

export default function HowItWorks() {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 mt-20 bg-[#eef3fb]  pt-16">
      <div className="max-w-8xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold !text-black">
          How Our <span className="text-[#1b489b]">AI Dental Billing Agent</span> Works!
        </h2>
        <p className="text-black mt-2 text-sm sm:text-base mx-auto max-w-2xl">
          Our flagship AI tool is designed specifically for dental insurance workflows
        </p>

        <div className="mt-12 grid grid-cols-1  lg:grid-cols-3 gap-10 items-center">

          {/* LEFT */}
          <div className="space-y-10 flex flex-col items-center">
            <Step
              number="1"
              title="Upload EOBs & EOPs"
              content="Upload scanned EOBs, PDFs, or digital remittance files from dental insurance payers."
            />

            <Step
              number="3"
              title="Posting-Ready Output"
              content={
                <ul className="text-xs list-disc list-inside space-y-1 text-left">
                  <li>Insurance paid amount</li>
                  <li>Adjustments & write-offs</li>
                  <li>Patient responsibility</li>
                  <li>Denial and remark codes</li>
                </ul>
              }
            />
          </div>
          <div className="flex  justify-center">
            <div className="block lg:hidden    ">
              <Image
                src="/images/Doc.png"
                alt="How it works"
                width={320}
                height={320}
                className="rounded-xl"
              />
            </div>
            <div className="hidden lg:block" style={{height: 420}} aria-hidden />
          </div>

          {/* RIGHT */}
          <div className="space-y-10 flex flex-col items-center">
            <Step
              number="2"
              title="AI Extraction & Validation"
              content="Our AI reads and structures insurance payment data, validates calculations, and flags inconsistencies."
            />

            <Step
              number="4"
              title="Export or PMS Workflow"
              content="Export data or follow your existing payment posting workflow with confidence."
            />
          </div>

        </div>

        {/* absolutely positioned center image on large screens, attached to section bottom */}
        <div className="hidden lg:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-0 z-20">
          <Image
            src="/images/Doc.png"
            alt="How it works"
            width={420}
            height={420}
            className="rounded-xl w-[550px] h-[550px]"
          />
        </div>
        
      </div>
    </section>
  );
}

/* STEP COMPONENT */
interface StepProps {
  number: string;
  title: string;
  content: ReactNode;
}



function Step({ number, title, content }: StepProps) {
  return (
    <div>
      <div className="inline-flex items-center gap-2 bg-transparent border-2 border-blue-800 px-6 py-1 rounded-full text-xs font-semibold relative">
        <span className="w-8 h-8 flex items-center justify-center bg-[#1b489b] text-white -ml-10 rounded-full text-lg font-bold">
          {number}
        </span>
        <h2 className="text-[#1b489b] text-[15px]">{title}</h2>
      </div>

      <div className="bg-[#1b489b] text-white rounded-xl p-5 mt-3 shadow-md w-56">
        {typeof content === "string" ? <p className="text-xs text-left">{content}</p> : content}
      </div>
    </div>
  );
}
