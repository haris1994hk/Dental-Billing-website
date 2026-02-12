'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white">
      {/* Top Info Bar */}
      <div className="w-full bg-[#1b489b] text-white py-2.5">
        <div className="max-w-full px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm">
          <div className="flex flex-wrap justify-center sm:justify-start gap-24 sm:gap-46">
            <a href="tel:+15551234567" className="flex items-center gap-2.5 hover:text-blue-100 transition">
              <span>📞</span>
              <span>+1 (555) 123-4567</span>
            </a>
            <a href="mailto:info@dentalbillingaid.com" className="flex items-center gap-2.5 hover:text-blue-100 transition">
              <span>✉️</span>
              <span>info@dentalbillingaid.com</span>
            </a>
            <span className="flex items-center gap-2.5">
              <span>📍</span>
              <span>123 Dental Ave, Suite 100, California, USA</span>
            </span>
          </div>
          <div className="flex gap-3">
            <a href="#" className="hover:text-blue-100 bg-white rounded-full w-6 h-6 text-blue-600 flex items-center justify-center transition font-semibold">f</a>
            <a href="#" className="hover:text-blue-100 bg-white rounded-full w-6 h-6 text-blue-600 flex items-center justify-center transition font-semibold">in</a>
            <a href="#" className="hover:text-blue-100 bg-white rounded-full w-6 h-6 text-blue-600 flex items-center justify-center transition font-semibold">tw</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" >
              <img src="/images/logo.webp" alt="Dental Billing Logo" className="w-30 h-13 " />
            </Link>

            {/* Nav Items */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">
                About
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Resources
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Pricing
              </Link>
            </div>

            {/* CTA Button */}
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
