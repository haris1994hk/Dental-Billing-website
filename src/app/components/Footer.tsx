import Link from 'next/link';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full mt-12">
      <div className="bg-[#14479b] text-white rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <Link href="/" className="flex-shrink-0">
              <img src="/images/logo.webp" alt="logo" className="w-20 sm:w-24 md:w-28 h-9 sm:h-11 md:h-12" />
            </Link>
            <div>
              <p className="text-white/90 mt-3 text-sm max-w-md leading-relaxed">
                Dental Billing Aid provides AI-powered dental billing software and services, specializing in EOB payment posting, insurance verification, and revenue cycle support for dental practices across the United States.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <ul className="space-y-6 text-white/90 text-sm">
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Resources</li>
                  <li>Pricing</li>
                </ul>
              </div>
           
            </div>
          </div>

          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-3 text-white/90 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13z" />
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M7 8.5h10M7 12h10M7 15.5h6" />
              </svg>
              <span>+1 (647) 888-8409</span>
            </div>

            <div className="flex items-center gap-3 text-white/90 text-sm mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6" />
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" />
              </svg>
 <a href='mailto:haris@dentalbillingaid.com' className=' underline'>haris@dentalbillingaid.com</a>            </div>

            <div className="flex items-start gap-3 text-white/90 text-sm mt-4 max-w-xs">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white/90 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 21s8-4.5 8-10a8 8 0 1 0-16 0c0 5.5 8 10 8 10z" />
                <circle cx="12" cy="11" r="2" strokeWidth="1.5" />
              </svg>
              <span>4498 Main St Suite 4 #1107 Buffalo, NY 14226 United States</span>
            </div>

            <div className="mt-6 flex items-center gap-3 justify-start">
              <span className="text-white/90 font-semibold mr-2">FOLLOW US:</span>
              <a href="https://www.linkedin.com/company/dental-billing-aid/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-100 bg-white rounded-full w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex items-center justify-center transition font-semibold">
                <FaLinkedinIn className="text-xs sm:text-sm" />
              </a>
              <a href="https://www.instagram.com/dentalbillingaid/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-100 bg-white rounded-full w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex items-center justify-center transition font-semibold">
                <FaInstagram className="text-xs sm:text-sm" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 py-2">
          <p className="text-center text-white/80 text-sm">
            © 2025 Dental Billing Aid. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
