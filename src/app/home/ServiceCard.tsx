"use client";

import Image from "next/image";

type Props = {
  title: string;
  description: string;
  variant?: "primary" | "white";
  image?: string;
};

export default function ServiceCard({ title, description, variant = "white", image }: Props) {
  const primary = variant === "primary";

  return (
    <div className={`${primary ? "bg-[#1b489b] text-white" : "bg-white text-black"} rounded-[18px] p-6 shadow-lg h-full flex flex-col`}>
      {image ? (
        <div className="mb-4 flex items-center justify-start">
          <Image src={image} alt={title} width={56} height={56} className="w-14 h-14 object-contain" />
        </div>
      ) : null}

      <h4 className={`${primary ? "!text-white" : "!text-black"} text-xl font-bold mb-2`}>{title}</h4>
      <p className={`${primary ? "text-white/90" : "text-gray-600"} text-sm mb-4 leading-relaxed flex-1`}>{description}</p>
      <div className="mt-4">
        <button className={`${primary ? "bg-white text-[#1b489b]" : "bg-[#1b489b] text-white"} text-xs font-semibold px-3 py-1 rounded-[18px] flex items-center gap-2`}> 
          <span>Read More</span>
          <span className={`${primary ? "bg-[#1b489b] text-white" : "bg-white text-[#1b489b]"} w-6 h-6 rounded-full flex items-center justify-center`}> 
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
