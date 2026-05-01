"use client";
import React, { useState } from "react";
import { Upload, FileText, ShieldCheck, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Upload",
    description: "Securely drop your ERA files or EOB data.",
    icon: Upload,
    content: {
      title: "Upload ERA/EOB Files",
      description: "Drag & drop or click to select files",
      details: "Supports multiple file formats including PDF, TXT, and CSV.",
    },
  },
  {
    id: 2,
    title: "Extracted Data",
    description: "Our AI instantly analyzes and structures the data.",
    icon: FileText,
    content: {
      title: "ERA 835 Summary",
      description: "Data extracted and analyzed",
      details: [
        { label: "Paper", value: "1st Plan LCM" },
        { label: "Patient", value: "235 RCT" },
        { label: "Report", value: "1.2M" },
      ],
    },
  },
  {
    id: 3,
    title: "Denial Guidance",
    description: "Actionable recovery steps are generated for you.",
    icon: ShieldCheck,
    content: {
      title: "Denial Guidance: OA-262",
      description: "Recommended recovery actions",
      details: [
        "Review claim details for accuracy",
        "Appeal to secondary coverage provider",
        "Resubmit claim with necessary corrections",
      ],
    },
  },
];

export default function DemoVideo() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="w-screen bg-[#1b489b] mt-16 py-24 relative overflow-hidden -mx-[calc((100vw-100%)/2)]">
      <div className="absolute inset-0 bg-grid-blue-300/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold !text-white mb-4 leading-tight">
            From Upload to Action in Seconds
          </h2>
          <p className="text-lg text-white/70 font-medium max-w-3xl mx-auto">
            PostEasy AI turns confusing insurance denials into clear, step-by-step recovery plans. Stop guessing, start collecting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left Side - Clickable Steps */}
          <div className="relative lg:col-span-1">
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-blue-300/20"></div>
            <div className="space-y-8">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className="flex items-center gap-5 text-left w-full"
                >
                  <div
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center text-[#1b489b] font-bold text-xl flex-shrink-0 transition-all duration-300 ${
                      activeStep === step.id
                        ? "bg-blue-300 scale-110 shadow-lg shadow-blue-300/30"
                        : "bg-blue-300/20 text-blue-200"
                    }`}
                  >
                    {activeStep === step.id ? <Check /> : step.id}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full h-full rounded-full transition-all duration-300 ${
                        activeStep === step.id ? "bg-blue-300/30 animate-ping" : ""
                      }`}
                    ></div>
                  </div>
                  <div>
                    <p
                      className={`font-bold text-lg transition-colors ${
                        activeStep === step.id ? "text-white" : "text-white/60"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p
                      className={`transition-colors text-sm ${
                        activeStep === step.id ? "text-blue-200" : "text-white/40"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Heavy UI Card */}
          <div className="lg:col-span-2 h-[450px]">
            <div className="relative bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-blue-300/20 h-full shadow-2xl shadow-black/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  {activeStep === 1 && (
                    <div className="flex flex-col items-center justify-center text-center h-full">
                      <div className="w-20 h-20 rounded-2xl bg-blue-300/10 flex items-center justify-center border border-blue-300/20 mb-6">
                        <Upload className="w-10 h-10 text-blue-300" />
                      </div>
                      <h3 className="text-2xl font-bold !text-white mb-2">{steps[0].content.title}</h3>
                      <p className="text-blue-200 mb-6">{steps[0].content.description}</p>
                      <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white/60">
                        {steps[0].content.details as string}
                      </div>
                    </div>
                  )}
                  {activeStep === 2 && (
                    <div>
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 rounded-xl bg-blue-300/10 flex items-center justify-center border border-blue-300/20">
                          <FileText className="w-8 h-8 text-blue-300" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold !text-white">{steps[1].content.title}</h3>
                          <p className="text-blue-200">{steps[1].content.description}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-6 text-center bg-white/5 p-6 rounded-lg border border-white/10">
                        {(steps[1].content.details as {label: string, value: string}[]).map(item => (
                          <div key={item.label}>
                            <p className="text-sm text-white/60">{item.label}</p>
                            <p className="text-2xl font-bold text-white">{item.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {activeStep === 3 && (
                     <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-xl bg-blue-300/10 flex items-center justify-center border border-blue-300/20">
                          <ShieldCheck className="w-8 h-8 text-blue-300" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold !text-white">{steps[2].content.title}</h3>
                          <p className="text-blue-200">{steps[2].content.description}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {(steps[2].content.details as string[]).map((item, index) => (
                          <div key={index} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                            <div className="w-6 h-6 bg-blue-300 rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="w-4 h-4 text-[#1b489b]" />
                            </div>
                            <p className="text-white font-medium">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
              <div className="absolute top-4 right-6 text-sm text-white/30 font-bold tracking-widest">
                STEP {activeStep}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
