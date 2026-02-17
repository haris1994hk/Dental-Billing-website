export default function Footer() {
  return (
    <footer className="w-full mt-12">
      <div className="bg-[#14479b] text-white rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
              <img src="/images/logo.webp" alt="logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-white text-lg font-bold">Dental Billing Aid</div>
              <p className="text-white/90 mt-3 text-sm max-w-md leading-relaxed pl-4 border-l-2 border-white/90">
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
              <span>+1 (555) 123-4567</span>
            </div>

            <div className="flex items-center gap-3 text-white/90 text-sm mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6" />
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" />
              </svg>
              <span>info@dentalbilling.com</span>
            </div>

            <div className="flex items-start gap-3 text-white/90 text-sm mt-4 max-w-xs">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white/90 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 21s8-4.5 8-10a8 8 0 1 0-16 0c0 5.5 8 10 8 10z" />
                <circle cx="12" cy="11" r="2" strokeWidth="1.5" />
              </svg>
              <span>123 Dental Ave, Suite 100, California, USA</span>
            </div>

            <div className="mt-6 flex items-center gap-3 justify-start">
              <span className="text-white/90 font-semibold mr-2">FOLLOW US:</span>
              <a href="#" aria-label="Facebook" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#1b489b]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.39-3.61 3.52-3.61. 99 0 1.84.07 2.09.11v2.42h-1.44c-1.13 0-1.35.54-1.35 1.33v1.75h2.7l-.43 2.9h-2.27v7.03C18.34 21.19 22 17.06 22 12.07z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#1b489b]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.18A3.82 3.82 0 1 0 15.82 12 3.82 3.82 0 0 0 12 8.18zm4.5-.88a1.12 1.12 0 1 0 1.12 1.12A1.12 1.12 0 0 0 16.5 7.3zM12 9.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5z" />
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#1b489b]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.48A11.9 11.9 0 0 0 12.07.5C6.17.5 1.5 5.18 1.5 11.08c0 1.95.5 3.78 1.45 5.41L.5 22.5l5.75-1.51A10.6 10.6 0 0 0 12.07 22c5.9 0 10.57-4.67 10.57-10.57 0-2.82-1.1-5.46-3.54-7.95zM12.07 20.5c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.41.9.9-3.31-.2-.33A8.2 8.2 0 0 1 3.87 11.1c0-4.55 3.71-8.26 8.2-8.26 4.55 0 8.26 3.71 8.26 8.26 0 4.55-3.71 8.26-8.26 8.26z" />
                  <path d="M17.1 14.2c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.1.2-.2.3.1.6.3.3.7.8 1.3 1.3.6.5 1 1 1.7 1.3.6.3 1 .2 1.4.1.4-.1 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1-.2-.1-.8-.3-1.1-.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

       
      </div>
    </footer>
  );
}
