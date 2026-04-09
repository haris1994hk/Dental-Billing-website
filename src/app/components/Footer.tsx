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
              <span>+1 (647) 888-8409</span>
            </div>

            <div className="flex items-center gap-3 text-white/90 text-sm mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6" />
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" />
              </svg>
 <a href='mailto:info@dentalbillingaid.com' className=' underline'>info@dentalbillingaid.com</a>            </div>

            <div className="flex items-start gap-3 text-white/90 text-sm mt-4 max-w-xs">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white/90 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 21s8-4.5 8-10a8 8 0 1 0-16 0c0 5.5 8 10 8 10z" />
                <circle cx="12" cy="11" r="2" strokeWidth="1.5" />
              </svg>
              <span>4498 Main St Suite 4 #1107 Buffalo, NY 14226 United States</span>
            </div>

            <div className="mt-6 flex items-center gap-3 justify-start">
              <span className="text-white/90 font-semibold mr-2">FOLLOW US:</span>
              <a href="https://www.linkedin.com/company/dental-billing-aid/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#1b489b]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.436-.103.25-.129.599-.129.948v5.421h-3.554s.05-8.5 0-9.378h3.554v1.328c.43-.645 1.196-1.565 2.902-1.565 2.12 0 3.71 1.387 3.71 4.369v5.246zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.956.77-1.715 1.958-1.715 1.187 0 1.914.759 1.938 1.715 0 .953-.751 1.715-1.981 1.715zm1.946 11.597H3.392V9.074h3.891v11.378zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/dentalbillingaid/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#1b489b]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.18A3.82 3.82 0 1 0 15.82 12 3.82 3.82 0 0 0 12 8.18zm4.5-.88a1.12 1.12 0 1 0 1.12 1.12A1.12 1.12 0 0 0 16.5 7.3zM12 9.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5z" />
                </svg>
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
