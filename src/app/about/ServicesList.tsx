'use client';

export default function ServicesList() {
  const services = [
    { number: '01', title: 'INSURANCE CLAIM\nSUBMISSION' },
    { number: '02', title: 'AR FOLLOW-UPS' },
    { number: '03', title: 'DENTAL MANAGEMENT' },
    { number: '04', title: 'PAYMENT RECONCILIATION' },
    { number: '05', title: 'PATIENT BALANCE REVIEW' },
  ];

  return (
    <section className="w-screen -ml-[50vw] left-[50%] relative bg-[#1b489b] mt-20 py-16 md:py-24">
      {/* Content */}
      <div className="relative z-10 max-w-full px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold !text-white mb-4 tracking-wide">
            DENTAL BILLING SERVICES
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Row 1 */}
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-4">
                <span className="text-6xl md:text-7xl font-bold !text-white mr-6">
                  {service.number}
                </span>
                <div className="flex-1 border-t-2 border-dotted border-white"></div>
              </div>
              <h3 className="text-lg md:text-xl font-bold !text-white whitespace-pre-line">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto mt-12 md:mt-16">
          {services.slice(3).map((service, index) => (
            <div key={index + 3} className="text-center">
              <div className="flex items-center justify-center mb-4">
                <span className="text-6xl md:text-7xl font-bold !text-white mr-6">
                  {service.number}
                </span>
                <div className="flex-1 border-t-2 border-dotted border-white"></div>
              </div>
              <h3 className="text-lg md:text-xl font-bold !text-white whitespace-pre-line">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
