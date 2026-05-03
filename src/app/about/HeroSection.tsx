"use client";

import Image from "next/image";
import React from "react";

export default function HeroSection() {
	return (
		<section className="w-full">
			<style>{`
				@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
				.animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
			`}</style>
			<div className="relative">
				<div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-br from-[#01162E] via-[#0a2351] to-[#01162E] border-b-8 border-blue-900">
					<div className="absolute inset-0">
						<Image
							src="/images/dan.jpeg"
							alt="hero background"
							fill
							className="object-cover object-center opacity-20"
							priority
						/>
						<div className="absolute inset-0 bg-gradient-to-br from-[#01162E]/90 via-[#0a2351]/90 to-[#01162E]/90" />
					</div>

					{/* Decorative Elements */}
					<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
					<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

					<div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center text-white">
						<div className="relative inline-block animate-fade-in-up">
							<span className="inline-block text-lg tracking-widest uppercase text-blue-400 font-semibold">
								ABOUT US
							</span>
							<span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600" />
						</div>
						<h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl !text-white font-bold animate-fade-in-up" style={{animationDelay: '0.1s'}}>
							AI-Driven Dental Revenue, Human-Supported Execution!
						</h1>
						<p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/90 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
							Dental Billing Aid is a modern dental revenue cycle company combining artificial intelligence with experienced dental billing professionals.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}



