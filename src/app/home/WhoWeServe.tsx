"use client";

export default function WhoWeServe() {
  return (
    <section className="w-full bg-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left card */}
          <div className="bg-[#e9f3ff] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-md">
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#1B489B] tracking-wide mb-4 sm:mb-6">WHO WE SERVE?</h3>
            <ul className="list-disc pl-6 space-y-3 sm:space-y-4 text-[#0f1724] font-semibold text-sm sm:text-base">
              <li>GENERAL DENTAL PRACTICES</li>
              <li>MULTI-LOCATION DENTAL GROUPS</li>
              <li>DSOS (DENTAL SERVICE ORGANIZATIONS)</li>
              <li>DENTAL BILLING COMPANIES</li>
              <li>DENTAL CONSULTANTS</li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute right-0 lg:right-20 -top-8 lg:-top-12 transform lg:translate-x-12 hidden md:block">
              <svg width="360" height="150" viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="-rotate-6">
                <path d="M24 74 C44 24, 316 14, 336 74 C316 134, 44 144, 24 74 Z" fill="none" stroke="#1b489b" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M36 76 C56 36, 304 26, 324 76" fill="none" stroke="#1b489b" strokeWidth="6" opacity="0.85" strokeLinecap="round" strokeLinejoin="round" />
                <text x="180" y="70" textAnchor="middle" fontSize="18" fontStyle="italic" fill="#1b489b" fontFamily="Pacifico, 'Brush Script MT', cursive" dominantBaseline="middle">Reduce the Payment Processing</text>
                <text x="180" y="92" textAnchor="middle" fontSize="18" fontStyle="italic" fill="#1b489b" fontFamily="Pacifico, 'Brush Script MT', cursive" dominantBaseline="middle">Time with Us!</text>
              </svg>
            </div>

            {/* Security card moved down to match design */}
            <div className="bg-[#e9f3ff] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-md mt-12 sm:mt-20 lg:mt-24">
              <h3 className="text-[34px] font-extrabold text-[#1b489b] tracking-wide mb-6">SECURITY &amp; COMPLIANCE</h3>
              <ul className="space-y-4 text-[#0f1724] font-semibold">
                <li>HIPAA-READY ARCHITECTURE</li>
                <li>SECURE DOCUMENT HANDLING</li>
                <li>ACCESS-CONTROLLED WORKFLOWS</li>
                <li>AUDIT-FRIENDLY OUTPUTS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
