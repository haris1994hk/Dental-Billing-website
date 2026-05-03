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
    <div className={`${primary ? "bg-[#01162E] text-white" : "bg-[#01162E] text-white"} rounded-[18px] p-6 shadow-lg h-full flex flex-col`}>
      {image ? (
        <div className="mb-4 flex items-center justify-start">
          <Image src={image} alt={title} width={56} height={56} className="w-14 h-14 object-contain" />
        </div>
      ) : null}

      <h4 className={`${primary ? "!text-white" : "!text-white"} text-xl font-bold mb-2`}>{title}</h4>
      <p className={`${primary ? "text-white/90" : "text-gray-400"} text-sm mb-4 leading-relaxed flex-1`}>{description}</p>
      <div className="mt-4">
        <button className={`bg-white text-[#01162E] text-xs font-semibold px-3 py-1 rounded-[18px] flex items-center gap-2`}> 
          <span>Read More</span>
          <span className="bg-white text-[#01162E] w-6 h-6 rounded-full flex items-center justify-center"> 
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



