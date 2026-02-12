'use client';

import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin, FiMenu, FiX } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      {/* Top Info Bar */}
      <div className="w-full bg-[#1b489b] text-white py-2 sm:py-2.5">
        <div className="max-w-full px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm">
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-6 md:gap-24 lg:gap-46">
            <a href="tel:+15551234567" className="flex items-center gap-1.5 sm:gap-2.5 hover:text-blue-100 transition">
              <FiPhone className="text-white text-sm sm:text-lg font-bold flex-shrink-0" />
              <span className="hidden sm:inline">+1 (555) 123-4567</span>
              <span className="sm:hidden text-xs">Call</span>
            </a>
            <a href="mailto:info@dentalbillingaid.com" className="flex items-center gap-1.5 sm:gap-2.5 hover:text-blue-100 transition">
              <FiMail className="text-white text-sm sm:text-lg font-bold flex-shrink-0" />
              <span className="hidden sm:inline">info@dentalbillingaid.com</span>
              <span className="sm:hidden text-xs">Email</span>
            </a>
            <span className="flex items-center gap-1.5 sm:gap-2.5 hidden md:flex">
              <FiMapPin className="text-white text-sm sm:text-lg font-bold flex-shrink-0" />
              <span className="text-xs sm:text-sm">123 Dental Ave, Suite 100, California, USA</span>
            </span>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <a href="#" className="hover:text-blue-100 bg-white rounded-full w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex items-center justify-center transition font-semibold"><FaFacebook className="text-xs sm:text-sm" /></a>
            <a href="#" className="hover:text-blue-100 bg-white rounded-full w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex items-center justify-center transition font-semibold"><FaInstagram className="text-xs sm:text-sm" /></a>
            <a href="#" className="hover:text-blue-100 bg-white rounded-full w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex items-center justify-center transition font-semibold"><FaWhatsapp className="text-xs sm:text-sm" /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img src="/images/logo.webp" alt="Dental Billing Logo" className="w-20 sm:w-24 md:w-30 h-9 sm:h-11 md:h-13" />
            </Link>

            {/* Desktop Nav Items */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link href="/" className="text-black font-semibold hover:text-blue-600 text-sm xl:text-base transition">
                Home
              </Link>
              <Link href="/about" className="text-black font-semibold hover:text-blue-600 text-sm xl:text-base transition">
                About
              </Link>
              <Link href="/resources" className="text-black font-semibold hover:text-blue-600 text-sm xl:text-base transition">
                Resources
              </Link>
              <Link href="/pricing" className="text-black font-semibold hover:text-blue-600 text-sm xl:text-base transition">
                Pricing
              </Link>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center p-2 text-blue-600 hover:text-blue-700 transition"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Desktop CTA Button */}
            <button className="hidden sm:block bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg flex-shrink-0">
              Contact Us
            </button>
          </div>

          {/* Mobile/Tablet Menu */}
          {isOpen && (
            <div className="lg:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/" className="block px-3 py-2 rounded-md text-base font-semibold text-black hover:text-blue-600 hover:bg-gray-50 transition">
                  Home
                </Link>
                <Link href="/about" className="block px-3 py-2 rounded-md text-base font-semibold text-black hover:text-blue-600 hover:bg-gray-50 transition">
                  About
                </Link>
                <Link href="/resources" className="block px-3 py-2 rounded-md text-base font-semibold text-black hover:text-blue-600 hover:bg-gray-50 transition">
                  Resources
                </Link>
                <Link href="/pricing" className="block px-3 py-2 rounded-md text-base font-semibold text-black hover:text-blue-600 hover:bg-gray-50 transition">
                  Pricing
                </Link>
                <button className="w-full mt-2 bg-blue-600 text-white px-3 py-2 rounded-full text-base font-semibold hover:bg-blue-700 transition-colors shadow-md">
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
