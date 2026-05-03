"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Upload, Database, ShieldCheck, FileText, CloudUpload, Check } from "lucide-react";

export default function DemoVideo() {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 3) + 1);
    }, 4000); // Change step every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Upload",
      description: "Securely drop your ERA files or EOB data.",
      icon: <Upload className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Extracted Data",
      description: "Our AI instantly analyzes and structures the data.",
      icon: <Database className="w-6 h-6" />,
      color: "bg-indigo-500",
    },
    {
      id: 3,
      title: "Denial Guidance",
      description: "Actionable recovery steps are generated for you.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "bg-cyan-500",
    },
  ];

  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-24 bg-[#010b1a] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Centered Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.15)_0%,transparent_70%)]"></div>
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl !text-white md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-400"
          >
            From Upload to Action in Seconds
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="!text-white max-w-2xl mx-auto text-lg md:text-xl font-medium"
          >
            PostEasy AI turns confusing insurance denials into clear, step-by-step recovery plans. 
            Stop guessing, start collecting.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onClick={() => setActiveStep(step.id)}
                className={`flex gap-6 group cursor-pointer transition-all duration-300 ${activeStep === step.id ? "opacity-100" : "opacity-40 hover:opacity-60"}`}
              >
                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    {step.icon}
                  </div>
                  {index !== 2 && (
                    <div className="absolute top-14 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-blue-100/60 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group p-[2px] rounded-[2.5rem] overflow-hidden"
          >
            {/* Animated Gradient Border - Always visible and rotating */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_25%,#3b82f6_50%,transparent_75%,transparent_100%)] opacity-100"
            />

            <div className="bg-[#020817]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-[500px] flex items-center justify-center z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-cyan-500/10 opacity-100"></div>
              
              <div className="relative z-10 w-full">
                <AnimatePresence mode="wait">
                  {activeStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="w-full flex flex-col items-center"
                    >
                      <div className="w-24 h-24 mb-8 relative">
                        <div className="absolute inset-0 bg-blue-600/20 blur-2xl rounded-full animate-pulse"></div>
                        <div className="relative bg-gradient-to-b from-blue-400 to-blue-500 rounded-3xl p-6 shadow-xl shadow-blue-500/20">
                          <CloudUpload className="w-full h-full text-white" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4">Upload ERA/EOB Files</h3>
                      <p className="text-blue-100/40 text-sm mb-10">Drag & drop files here or click to select</p>

                      <div className="w-full aspect-[16/9] rounded-2xl border-2 border-dashed border-white/10 bg-slate-900/5 flex flex-col items-center justify-center p-8 transition-all hover:bg-slate-900/10 hover:border-blue-500/50 group/drop">
                        <FileText className="w-12 h-12 text-blue-400/30 mb-4 group-hover/drop:scale-110 group-hover/drop:text-blue-400 transition-all" />
                        <p className="text-blue-100/30 text-center text-sm">
                          Drag & drop or <span className="text-blue-400 font-semibold">click to browse</span>
                        </p>
                      </div>

                      <div className="mt-8 flex items-center gap-2 text-xs text-blue-100/30 uppercase tracking-widest font-bold">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        Supports PDF, TXT, and CSV
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="w-full"
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                          <Database className="w-6 h-6 text-indigo-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">AI Data Extraction</h3>
                          <p className="text-blue-100/40 text-sm">Processing 835 ERA File...</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="bg-slate-900/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                            <div className="h-4 w-1/3 bg-slate-900/10 rounded"></div>
                            <div className="h-4 w-1/4 bg-blue-600/20 rounded"></div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="w-full text-center"
                    >
                      <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShieldCheck className="w-10 h-10 text-cyan-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Denial Guidance Ready</h3>
                      <p className="text-blue-100/60 mb-8">Recovery plans generated for 12 claims</p>
                      
                      <div className="space-y-3 mb-8">
                        {["Review claim for accuracy", "Check secondary coverage", "Resubmit with corrections"].map((text, i) => (
                          <div key={i} className="bg-slate-900/5 border border-white/10 p-3 rounded-lg flex items-center gap-3 text-left">
                            <Check className="w-4 h-4 text-cyan-400" />
                            <span className="text-white/80 text-sm">{text}</span>
                          </div>
                        ))}
                      </div>

                      <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] w-full">
                        View Recovery Steps
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-tight">
                Step {activeStep}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

