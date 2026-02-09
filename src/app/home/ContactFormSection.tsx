'use client';

import { useState } from 'react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="py-16 px-4 mx-auto max-w-7xl">
      <div className="bg-gradient-to-br from-[#2c5aa0] to-[#1e3d6f] rounded-2xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
              CONTACT US
            </h2>
            <p className="text-lg md:text-xl font-semibold text-white leading-relaxed">
              GET A COMPLIMENTARY FINANCIAL HEALTH AUDIT FOR YOUR PRACTICE!
            </p>
          </div>

          {/* RIGHT FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name*"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 bg-white text-slate-800 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name*"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 bg-white text-slate-800 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number*"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 bg-white text-slate-800 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 bg-white text-slate-800 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              required
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-bold py-3 rounded-lg transition duration-300 transform hover:scale-105 active:scale-95"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
