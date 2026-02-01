"use client";
import { useState } from 'react';

type Item = { title: string; content: string };

const ITEMS: Item[] = [
  {
    title: 'General Dentistry',
    content:
      'We support general dentistry practices with full billing, claims management, patient ledgers, and routine coding to keep revenue flowing and records accurate.',
  },
  {
    title: 'Pediatric Dentistry',
    content:
      'Our pediatric dentistry support includes specialized coding, age-based claim handling, and collections procedures tailored for children’s services and family plans.',
  },
  {
    title: 'Oral Surgery',
    content:
      'For oral surgery clinics we handle complex procedure coding, pre-authorizations, and payment posting to simplify high-dollar case workflows.',
  },
];

export default function ServeSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
                        <span className="inline-block mb-4 rounded-full bg-blue-700 text-white px-4 py-1 text-sm font-semibold text-blue-700">
               Our Serve
            </span>

            <h3 className="text-3xl font-extrabold text-zinc-900 mb-4">Whom Do We Serve?</h3>
            <p className="text-zinc-600 mb-6">
              If dentistry is your core specialty – efficient billing, collections, accounting, scheduling, and marketing are ours for sure! Whether you deal with general dentistry, treat some specialized dental problems, or have multiple specialties – we can serve you no matter what.
            </p>

            <div className="space-y-4">
              {ITEMS.map((it, i) => {
                const isOpen = open === i;
                return (
                  <div key={it.title} className="bg-white rounded-lg shadow-sm border border-zinc-200 overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50 focus:outline-none"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-full ${isOpen ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                          {isOpen ? (
                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                              <path d="M5 10h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                              <path d="M10 5v10M5 10h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                        <span className="font-medium text-zinc-800">{it.title}</span>
                      </div>

                      <svg className={`w-5 h-5 text-zinc-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    <div
                      className={`px-5 bg-white transition-[max-height,padding] duration-300 ${isOpen ? 'max-h-64 py-4' : 'max-h-0 py-0'}`}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="text-zinc-600">{it.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img src="/images/side.webp" alt="Practice illustration" className="w-full max-w-md rounded-lg h-115 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
