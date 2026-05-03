'use client';

import { ScrollAnimatedSection } from '../components/ScrollAnimatedSection';

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
      <ScrollAnimatedSection animation="fadeInUp">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-green-800 dark:text-green-400 text-center sm:text-left">Contact Us</h1>
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInLeft" delay={200}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10">
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-5 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-green-700 text-center sm:text-left">Get in Touch</h2>
            <p className="text-zinc-700 dark:text-zinc-200 mb-2 text-sm sm:text-base text-center sm:text-left">Have questions or want a demo? Fill out the form or email us at <a href='mailto:haris@dentalbillingaid.com' className='text-green-700 underline break-all'>haris@dentalbillingaid.com</a>.</p>
            <form className="flex flex-col gap-4 mt-4">
              <input type="text" placeholder="Your Name" className="rounded border px-3 py-3 text-sm sm:text-base w-full" />
              <input type="email" placeholder="Your Email" className="rounded border px-3 py-3 text-sm sm:text-base w-full" />
              <textarea placeholder="Your Message" className="rounded border px-3 py-3 min-h-[120px] text-sm sm:text-base w-full" />
              <button className="px-6 py-3 rounded-full bg-green-700 text-white font-semibold hover:bg-green-800 transition w-full sm:w-auto sm:self-start">Send Message</button>
            </form>
          </div>
          <div className="bg-green-50 dark:bg-zinc-900 rounded-xl shadow p-5 sm:p-6 flex flex-col items-start sm:items-center justify-center text-left sm:text-center">
            <div className="text-4xl sm:text-5xl mb-2">📞</div>
            <div className="font-bold text-green-800 mb-1">Call Us</div>
            <div className="text-zinc-700 dark:text-zinc-200 mb-4 text-sm sm:text-base">(555) 123-4567</div>
            <div className="text-4xl sm:text-5xl mb-2">🏢</div>
            <div className="font-bold text-green-800 mb-1">Visit</div>
            <div className="text-zinc-700 dark:text-zinc-200 text-sm sm:text-base">123 Dental Ave, Suite 100<br />Dental City, USA</div>
          </div>
        </div>
      </ScrollAnimatedSection>
    </div>
  );
}



