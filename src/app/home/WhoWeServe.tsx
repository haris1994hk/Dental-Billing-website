export default function WhoWeServe() {
  return (
    <section className="py-16 px-4 mx-auto max-w-7xl my-12">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-rotate {
          animation: rotate 8s linear infinite;
        }
        .animate-pulse-scale {
          animation: pulse-scale 3s ease-in-out infinite;
        }
        @media (max-width: 768px) {
          .animate-bg-shape {
            width: 200px !important;
            height: 200px !important;
          }
          .animate-circle-lg {
            width: 120px !important;
            height: 120px !important;
          }
          .animate-circle-md {
            width: 100px !important;
            height: 100px !important;
          }
          .animate-icon-lg {
            font-size: 2rem !important;
          }
          .animate-icon-md {
            font-size: 1.75rem !important;
          }
          .animate-icon-sm {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - TEXT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Who We Serve</h2>
          <div className="flex flex-col gap-3 mb-8">
            <p className="flex items-center gap-2 text-slate-700 text-lg">
              <span className="text-blue-700 font-bold">●</span>
              <span>General dental practices</span>
            </p>
            <p className="flex items-center gap-2 text-slate-700 text-lg">
              <span className="text-blue-700 font-bold">●</span>
              <span>Multi-location dental groups</span>
            </p>
            <p className="flex items-center gap-2 text-slate-700 text-lg">
              <span className="text-blue-700 font-bold">●</span>
              <span>DSOs (Dental Service Organizations)</span>
            </p>
            <p className="flex items-center gap-2 text-slate-700 text-lg">
              <span className="text-blue-700 font-bold">●</span>
              <span>Dental billing companies</span>
            </p>
            <p className="flex items-center gap-2 text-slate-700 text-lg">
              <span className="text-blue-700 font-bold">●</span>
              <span>Dental consultants</span>
            </p>
          </div>
          <p className="text-slate-700 text-lg">Dental Billing Aid is built for U.S. dental insurance workflows and supports practices nationwide.</p>
        </div>

        {/* RIGHT SIDE - ILLUSTRATION WITH ANIMATIONS */}
        <div className="flex items-center justify-center relative w-full md:w-auto">
          {/* Animated background shapes */}
          <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-20 blur-3xl animate-pulse-scale animate-bg-shape"></div>
          
          {/* Floating decorative circle */}
          <div className="absolute w-40 h-40 border-2 border-blue-300 rounded-full opacity-30 animate-rotate animate-circle-lg" style={{top: '-20px', right: '-20px'}}></div>
          
          {/* Floating decorative circle */}
          <div className="absolute w-32 h-32 border-2 border-cyan-300 rounded-full opacity-25 animate-rotate animate-circle-md" style={{bottom: '-10px', left: '-30px', animationDirection: 'reverse'}}></div>
          
          {/* Floating icon shapes */}
          <div className="absolute text-blue-400 opacity-40 text-5xl animate-float animate-icon-lg" style={{top: '10px', left: '10px', animationDelay: '0s'}}>✦</div>
          <div className="absolute text-cyan-400 opacity-35 text-4xl animate-float animate-icon-md" style={{bottom: '20px', right: '20px', animationDelay: '1s'}}>✧</div>
          <div className="absolute text-blue-300 opacity-30 text-3xl animate-float animate-icon-sm" style={{top: '30%', right: '5%', animationDelay: '0.5s'}}>★</div>
          
          {/* Main image with enhanced styling */}
          <div className="relative z-10 w-full md:w-auto">
            <img 
              src="/images/serve.jpeg" 
              alt="Who We Serve" 
              className="w-full md:max-w-md rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
