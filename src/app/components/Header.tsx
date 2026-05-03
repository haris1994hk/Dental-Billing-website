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
    <header className="w-full bg-[#01162E] sticky top-0 z-50 shadow-lg">
      {/* Top Info Bar */}
      <div className="w-full bg-gradient-to-r from-[#01162E] to-[#0a2351] text-white py-2 sm:py-2.5">
        <div className="max-w-full px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm">
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-6 md:gap-24 lg:gap-46">
           
            <a href="mailto:haris@dentalbillingaid.com" className="flex items-center gap-1.5 sm:gap-2.5 hover:text-blue-300 transition">
              <FiMail className="text-blue-400 text-sm sm:text-lg font-bold flex-shrink-0" />
              <span className="hidden sm:inline text-white/90">haris@dentalbillingaid.com</span>
              <span className="sm:hidden text-xs text-white/90">Email</span>
            </a>
            <span className="flex items-center gap-1.5 sm:gap-2.5 hidden md:flex">
              <FiMapPin className="text-blue-400 text-sm sm:text-lg font-bold flex-shrink-0" />
              <span className="text-xs sm:text-sm text-white/80">4498 Main St Suite 4 #1107, Buffalo, NY 14226, United States</span>
            </span>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <a href="https://www.linkedin.com/company/dental-billing-aid/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 bg-white/20 rounded-full w-5 h-5 sm:w-6 sm:h-6 text-white flex items-center justify-center transition font-semibold"><FaLinkedinIn className="text-xs sm:text-sm" /></a>
            <a href="https://www.instagram.com/dentalbillingaid/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 bg-white/20 rounded-full w-5 h-5 sm:w-6 sm:h-6 text-white flex items-center justify-center transition font-semibold"><FaInstagram className="text-xs sm:text-sm" /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full bg-gradient-to-r from-[#01162E] via-[#0a2351] to-[#01162E] shadow-lg">
        <div className="max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img src="/images/logo.webp" alt="Dental Billing Logo" className="w-20 sm:w-24 md:w-30 h-9 sm:h-11 md:h-13" />
            </Link>

            {/* Desktop Nav Items */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link href="/" className="text-white font-semibold hover:text-blue-300 text-sm xl:text-base transition">
                Home
              </Link>
              <Link href="/about" className="text-white font-semibold hover:text-blue-300 text-sm xl:text-base transition">
                About
              </Link>
              <Link href="/services" className="text-white font-semibold hover:text-blue-300 text-sm xl:text-base transition">
                Services
              </Link>
              <Link href="/resources" className="text-white font-semibold hover:text-blue-300 text-sm xl:text-base transition">
                Resources
              </Link>
              <Link href="/pricing" className="text-white font-semibold hover:text-blue-300 text-sm xl:text-base transition">
                Pricing
              </Link>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center p-2 text-white hover:text-blue-300 transition"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Desktop CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3 sm:gap-4">
              <a
                href="https://posteasy.dentalbillingaid.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white/30 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold hover:border-blue-400 hover:text-blue-300 transition-colors flex-shrink-0"
              >
                Sign In
              </a>
              <button
                onClick={() => setContactModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold hover:shadow-lg hover:from-blue-500 hover:to-purple-500 transition-all shadow-md flex-shrink-0"
              >
                Contact Us
              </button>
            </div>
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
              <div className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-[#01162E] to-[#0a2351] shadow-2xl z-50 ${
                isOpen ? 'animate-slideInMenu' : '-translate-x-full'
              } lg:hidden overflow-y-auto`}>
                {/* Close Button Inside Sidebar - Animated */}
                <div className="sticky top-0 flex justify-between items-center p-4 bg-gradient-to-r from-[#01162E] to-[#0a2351] border-b border-white/20 menu-item-1">
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
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:scale-110 hover:bg-white/30 transition"
                      >
                        <FaLinkedinIn className="text-white" />
                      </a>
                      <a 
                        href="https://www.instagram.com/dentalbillingaid/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:scale-110 hover:bg-white/30 transition"
                      >
                        <FaInstagram className="text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Contact and Sign In Buttons */}
                  <a
                    href="https://posteasy.dentalbillingaid.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white/20 text-white px-4 py-3 rounded-full text-base font-semibold hover:bg-white/30 transition-colors shadow-lg text-center mb-3"
                  >
                    Sign In
                  </a>
                  <button
                    onClick={() => {
                      setContactModalOpen(true);
                      setIsOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-full text-base font-semibold hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg"
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



