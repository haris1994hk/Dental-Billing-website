'use client';

import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin, FiMenu, FiX } from 'react-icons/fi';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import ContactModal from './ContactModal';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="w-full bg-[#1b489b] text-white py-2 sm:py-2.5">
        <div className="max-w-full px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm">
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-6 md:gap-24 lg:gap-46">
           
            <a href="mailto:info@dentalbillingaid.com" className="flex items-center gap-1.5 sm:gap-2.5 hover:text-blue-100 transition">
              <FiMail className="text-white text-sm sm:text-lg font-bold flex-shrink-0" />
              <span className="hidden sm:inline">info@dentalbillingaid.com</span>
              <span className="sm:hidden text-xs">Email</span>
            </a>
            <span className="flex items-center gap-1.5 sm:gap-2.5 hidden md:flex">
              <FiMapPin className="text-white text-sm sm:text-lg font-bold flex-shrink-0" />
              <span className="text-xs sm:text-sm">4498 Main St Suite 4 #1107, Buffalo, NY 14226, United States</span>
            </span>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <a href="https://www.linkedin.com/company/dental-billing-aid/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-100 bg-white rounded-full w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex items-center justify-center transition font-semibold"><FaLinkedinIn className="text-xs sm:text-sm" /></a>
            <a href="https://www.instagram.com/dentalbillingaid/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-100 bg-white rounded-full w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex items-center justify-center transition font-semibold"><FaInstagram className="text-xs sm:text-sm" /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full bg-white shadow-sm">
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
              <Link href="/services" className="text-black font-semibold hover:text-blue-600 text-sm xl:text-base transition">
                Services
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
            <button
              onClick={() => setContactModalOpen(true)}
              className="hidden sm:block bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg flex-shrink-0"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile/Tablet Menu with Slide Animation */}
          {isOpen && (
            <>
              {/* Backdrop Overlay with Animation */}
              <div 
                className="fixed inset-0 bg-black/50 lg:hidden z-40 animate-fadeIn"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Slide-in Sidebar with Smooth Animation */}
              <div className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-[#1b489b] to-[#0f2d5f] shadow-2xl z-50 ${
                isOpen ? 'animate-slideInMenu' : '-translate-x-full'
              } lg:hidden overflow-y-auto`}>
                {/* Close Button Inside Sidebar - Animated */}
                <div className="sticky top-0 flex justify-between items-center p-4 bg-gradient-to-r from-[#1b489b] to-[#0f2d5f] border-b border-white/20 menu-item-1">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 rounded-lg p-2 transition transform hover:scale-110 active:scale-95"
                  >
                    <FiX size={28} />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="px-4 pt-6 space-y-2 pb-8">
                  <Link 
                    href="/" 
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg text-base font-semibold text-white hover:bg-white/20 transition transform hover:translate-x-1 menu-item-1"
                  >
                    Home
                  </Link>
                  <Link 
                    href="/about" 
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg text-base font-semibold text-white hover:bg-white/20 transition transform hover:translate-x-1 menu-item-2"
                  >
                    About
                  </Link>
                  <Link 
                    href="/services" 
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg text-base font-semibold text-white hover:bg-white/20 transition transform hover:translate-x-1 menu-item-3"
                  >
                    Services
                  </Link>
                  <Link 
                    href="/resources" 
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg text-base font-semibold text-white hover:bg-white/20 transition transform hover:translate-x-1 menu-item-4"
                  >
                    Resources
                  </Link>
                  <Link 
                    href="/pricing" 
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg text-base font-semibold text-white hover:bg-white/20 transition transform hover:translate-x-1 menu-item-5"
                  >
                    Pricing
                  </Link>

                  {/* Social Links */}
                  <div className="pt-6 mt-6 border-t border-white/30 menu-social">
                    <p className="text-white/90 text-sm font-semibold px-4 mb-4">Follow Us</p>
                    <div className="flex gap-3 px-4">
                      <a 
                        href="https://www.linkedin.com/company/dental-billing-aid/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition"
                      >
                        <FaLinkedinIn className="text-[#1b489b]" />
                      </a>
                      <a 
                        href="https://www.instagram.com/dentalbillingaid/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition"
                      >
                        <FaInstagram className="text-[#1b489b]" />
                      </a>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <button
                    onClick={() => {
                      setContactModalOpen(true);
                      setIsOpen(false);
                    }}
                    className="w-full mt-8 bg-white text-[#1b489b] px-4 py-3 rounded-full text-base font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </header>
  );
}
