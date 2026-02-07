'use client';

export default function AnimatedImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex items-center justify-center relative w-full">
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-15px) translateX(15px); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(-15px); }
          50% { transform: translateY(-20px) translateX(10px); }
          75% { transform: translateY(-10px) translateX(-20px); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-18px) translateX(12px); }
          50% { transform: translateY(-12px) translateX(-8px); }
          75% { transform: translateY(-20px) translateX(8px); }
        }
        
        .splash-container {
          position: relative;
          width: 100%;
          max-width: 400px;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .splash-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
          clip-path: polygon(
            30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%
          );
          border-radius: 45% 55% 52% 48% / 48% 45% 55% 52%;
        }
        
        .splash-image {
          position: relative;
          z-index: 10;
          width: 90%;
          height: 90%;
          object-fit: cover;
          border-radius: 45% 55% 52% 48% / 48% 45% 55% 52%;
          box-shadow: 0 10px 40px rgba(12, 82, 224, 0.15);
        }
        
        .floating-icon {
          position: absolute;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(12, 82, 224, 0.2);
          z-index: 20;
          overflow: hidden;
        }

        .floating-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 8px;
        }
        
        .icon-1 {
          top: -10px;
          right: 10%;
          animation: float1 6s ease-in-out infinite;
        }
        
        .icon-2 {
          bottom: 10%;
          left: -15px;
          animation: float2 7s ease-in-out infinite;
        }
        
        .icon-3 {
          top: 15%;
          left: -20px;
          animation: float3 5.5s ease-in-out infinite;
        }
      `}</style>
      
      <div className="splash-container">
        <div className="splash-bg"></div>
        <img src={src} alt={alt} className="splash-image" />
        
        {/* Floating Icon Images */}
        <div className="floating-icon icon-1">
          <img src="/images/icon1.png" alt="Icon 1" />
        </div>
        <div className="floating-icon icon-2">
          <img src="/images/icon2.png" alt="Icon 2" />
        </div>
        <div className="floating-icon icon-3">
          <img src="/images/icon3.png" alt="Icon 3" />
        </div>
      </div>
    </div>
  );
}
