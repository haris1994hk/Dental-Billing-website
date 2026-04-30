'use client';

import { ScrollAnimatedSection } from '../components/ScrollAnimatedSection';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <ScrollAnimatedSection animation="fadeInUp">
        <h1 className="text-4xl font-bold mb-6 text-green-800 dark:text-green-400">Contact Us</h1>
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInLeft" delay={200}>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2 text-green-700">Get in Touch</h2>
            <p className="text-zinc-700 dark:text-zinc-200 mb-2">Have questions or want a demo? Fill out the form or email us at <a href='mailto:haris@dentalbillingaid.com' className='text-green-700 underline'>haris@dentalbillingaid.com</a>.</p>
            <form className="flex flex-col gap-4 mt-4">
              <input type="text" placeholder="Your Name" className="rounded border px-3 py-2" />
              <input type="email" placeholder="Your Email" className="rounded border px-3 py-2" />
              <textarea placeholder="Your Message" className="rounded border px-3 py-2 min-h-[80px]" />
              <button className="px-6 py-2 rounded-full bg-green-700 text-white font-semibold hover:bg-green-800 transition">Send Message</button>
            </form>
          </div>
          <div className="bg-green-50 dark:bg-zinc-900 rounded-xl shadow p-6 flex flex-col items-center justify-center">
            <div className="text-5xl mb-2">📞</div>
            <div className="font-bold text-green-800 mb-1">Call Us</div>
            <div className="text-zinc-700 dark:text-zinc-200 mb-4">(555) 123-4567</div>
            <div className="text-5xl mb-2">🏢</div>
            <div className="font-bold text-green-800 mb-1">Visit</div>
            <div className="text-zinc-700 dark:text-zinc-200">123 Dental Ave, Suite 100<br />Dental City, USA</div>
          </div>
        </div>
      </ScrollAnimatedSection>
    </div>
  );
}
