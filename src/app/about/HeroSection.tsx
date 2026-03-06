"use client";

import Image from "next/image";
import React from "react";

export default function HeroSection() {
	return (
		<section className="w-full">
			<div className="relative">
				<div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2  bg-[#1b489b]  border-b-8 border-blue-900">
					<div className="absolute inset-0">
					<Image
						src="/images/dan.jpeg"
						alt="hero background"
						fill
						className="object-cover object-center opacity-30"
						priority
					/>
					<div className="absolute inset-0 bg-blue-800/80" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center text-white">
						<div className="relative inline-block">
							<span className="inline-block text-lg tracking-widest uppercase text-white">
								ABOUT US
							</span>
							<span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-white" />
						</div>
					<h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl !text-white font-semibold">
						AI-Driven Dental Revenue, Human-Supported Execution!
					</h1>
					<p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/90">
						Dental Billing Aid is a modern dental revenue cycle company combining artificial intelligence with experienced dental billing professionals.
					</p>
				</div>
			</div>

			{/* White content block below banner (matches PDF layout) */}
			<div className="bg-white ">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex flex-col md:flex-row items-center gap-8">
						<div className="w-full md:w-1/2 flex justify-center">
							
						</div>

					</div>
				</div>
			</div>
      </div>
		</section>
	);
}
