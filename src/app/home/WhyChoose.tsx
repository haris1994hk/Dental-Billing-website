export default function WhyChoose() {
  return (
    <section className="py-12 bg-blue-700 text-white why-choose mx-[calc(50%_-_50vw)] w-screen">
        
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
        <div className="flex justify-center md:justify-start">
            
          <div className="why-image relative w-72 h-72 rounded-full overflow-hidden shadow-lg">
            <img src="/images/hero.jpg" alt="Why choose" className="w-full h-full object-cover" />
          </div>
        </div>

        <div>
          <h2 className="text-3xl text-white md:text-4xl font-extrabold mb-4">Why Choose DentalBillingAid and Not Some XYZ Company?</h2>
          <p className="muted text-white/90 mb-6">DentalBillingAid is a premier billing company created by and for practicing dentists. We make back-end operations simple so you can focus on providing high-quality patient care.</p>

          <div className="space-y-6 why-list">
            <div className="flex items-start gap-4">
              <div className="why-icon flex-shrink-0 text-blue-700">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5l-9-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="text-white">
                <h4 className="font-semibold text-white">Reliability</h4>
                <p className="text-white">We ensure reliable outcomes that are backed with the esteemed efforts of dental professionals.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="why-icon flex-shrink-0 text-blue-700">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3 7h7l-5.6 4.1L18 22l-6-3.9L6 22l1.6-8.9L2 9h7l3-7z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h4 className="font-semibold text-white">Quality</h4>
                <p className="text-white">We understand the dental industry closely, so we ensure quality outcomes in alignment with insurance laws.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="why-icon flex-shrink-0 text-blue-700">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 10l1.5 9.5L12 21l7.5-1.5L21 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 3v18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h4 className="font-semibold text-white">Result</h4>
                <p className="text-white">We have established proven methods and strategies to bring your guaranteed results within no time.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="why-icon flex-shrink-0 text-blue-700">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.2"/><path d="M7 11h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
              </div>
              <div>
                <h4 className="font-semibold text-white">Privacy</h4>
                <p className="text-white">We are HIPAA Certified; meaning client and patient data is kept extremely secure and private.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
