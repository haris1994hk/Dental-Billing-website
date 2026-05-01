"use client";
import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  date: string;
  time: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    date: "",
    time: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(""); // Clear error when user starts typing
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      setError("First name is required");
      return false;
    }
    if (!formData.lastName.trim()) {
      setError("Last name is required");
      return false;
    }
    if (!formData.phoneNumber.trim()) {
      setError("Phone number is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email");
      return false;
    }
    if (!formData.date) {
      setError("Date is required");
      return false;
    }
    if (!formData.time) {
      setError("Time is required");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Message is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          date: "",
          time: "",
          email: "",
          message: "",
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        const data = await response.json();
        setError(data.error || "Failed to submit form. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-20 px-4">
      <div className="bg-[#14479b] text-white rounded-3xl p-8 lg:p-12 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-3xl text-start !text-white sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight uppercase">
              REDUCE ERRORS,<br />INCREASE<br />COLLECTIONS!
            </h3>
            <p className="mt-6 text-[30px] lg:text-[27px] text-start text-white/90 max-w-lg">Meet with our billing specialists and see how our AI can reduce errors, increase collections, and save your team hours every week.</p>
          </div>

          <form className="space-y-4 bg-transparent p-2 lg:p-0 text-white" onSubmit={handleSubmit}>
            {submitted && (
              <div className="bg-green-500/20 border-2 border-green-400 text-green-100 px-5 py-4 rounded-lg mb-4 backdrop-blur-sm">
                <div className="font-semibold text-base mb-1">✓ Message Sent Successfully!</div>
                <div className="text-sm text-green-100/90">We've received your request. A confirmation email has been sent to <span className="font-semibold">{formData.email}</span>, and our team will contact you shortly at <span className="font-semibold">{formData.phoneNumber}</span>.</div>
              </div>
            )}

            {error && (
              <div className="bg-red-500/20 border-2 border-red-400 text-red-100 px-5 py-4 rounded-lg mb-4 backdrop-blur-sm">
                <div className="font-semibold text-base mb-1">⚠ Error</div>
                <div className="text-sm">{error}</div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col items-start w-full">
                <label className="block text-xs text-white/90 text-left">First Name*</label>
                <input 
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 w-full sm:max-w-[240px] rounded px-3 py-2 bg-white text-black placeholder:text-zinc-400" 
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col items-start w-full">
                <label className="block text-xs text-white/90 text-left">Last Name*</label>
                <input 
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 w-full sm:max-w-[240px] rounded px-3 py-2 bg-white text-black placeholder:text-zinc-400"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-white/90 text-left">Phone Number*</label>
              <input 
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 w-full rounded px-3 py-2 bg-white text-black placeholder:text-zinc-400"
                placeholder="(123) 456-7890"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
              <div className="flex flex-col items-start w-full">
                <label className="block text-xs text-white/90 text-left">Date*</label>
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1 rounded px-3 py-2 bg-white text-black placeholder:text-zinc-400 w-full sm:w-40" 
                />
              </div>
              <div className="flex flex-col items-start w-full">
                <label className="block text-xs text-white/90 text-left">Time*</label>
                <input 
                  type="time" 
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="mt-1 rounded px-3 py-2 bg-white text-black placeholder:text-zinc-400 w-full sm:w-36" 
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-white/90 text-left">Email*</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full rounded px-3 py-2 bg-white text-black placeholder:text-zinc-400"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-xs text-white/90 text-left">Message*</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full rounded px-3 py-3 bg-white text-black h-28"
                placeholder="Tell us about your practice..."
              />
            </div>

            <div className="flex justify-start pt-2">
              <button 
                type="submit" 
                disabled={loading || submitted}
                className="bg-white text-[#1b489b] px-8 py-3 rounded-lg font-bold shadow-lg inline-flex items-center gap-3 hover:bg-gray-100 transition disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
              >
                <span className="text-base">
                  {loading ? "Sending..." : submitted ? "Sent!" : "Send Message"}
                </span>
                {!loading && <span className="text-xl">→</span>}
                {loading && <span className="inline-block animate-spin">⟳</span>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
