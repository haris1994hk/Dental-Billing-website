'use client';

import { useState } from 'react';

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Dental Billing Aid dramatically reduced the time we spend posting insurance payments and helped us catch underpayments we were missing before.",
      author: "Dental Billing Manager, U.S. Practice"
    },
    {
      quote: "The AI-powered EOB parsing has been a game-changer for our practice. We've reduced billing errors by over 40% and improved our cash flow significantly.",
      author: "Practice Owner, Midwest Dental Group"
    },
    {
      quote: "Implementing Dental Billing Aid saved us countless hours every week. Our team can now focus on patient care instead of manual billing tasks.",
      author: "Office Manager, Pacific Coast Dental"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 px-4 mx-auto max-w-4xl">
      <div className="relative">
        {/* Testimonial Card */}
        <div className="bg-blue-50 p-12 rounded-lg border-l-4 border-blue-700">
          <p className="text-lg text-slate-700 italic mb-4">
            "{testimonials[currentSlide].quote}"
          </p>
          <p className="font-semibold text-slate-800">— {testimonials[currentSlide].author}</p>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition"
          >
            ←
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentSlide ? 'bg-blue-700' : 'bg-blue-200'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
