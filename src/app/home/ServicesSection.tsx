"use client";

import ServiceCard from "./ServiceCard";
import { ScrollAnimatedItem } from "../components/ScrollAnimatedSection";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Done-For-You Billing Support",
      description: "Dental Billing Aid also offers expert dental billing services supported by our AI platform.",
      variant: "primary",
      image: "/images/one.png",
    },
    {
      id: 2,
      title: "Dental Billing & Claim Submission",
      description: "End-to-end insurance billing, claim follow-ups, and AR support.",
      variant: "white",
      image: "/images/two.png",
    },
    {
      id: 3,
      title: "Insurance Verification",
      description: "Accurate eligibility, benefits, limitations, and frequency checks.",
      variant: "white",
      image: "/images/thr.png",
    },
    {
      id: 4,
      title: "Appointment Scheduling & Front Office Support",
      description: "Patient calls, confirmations, recalls, and scheduling assistance.",
      variant: "white",
      image: "/images/four.png",
    },
  ];

  return (
    <section className="w-full bg-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-[30px] font-semibold tracking-widest">
            <span className="!text-black">—</span>
            <span className="mx-2 text-[#1b489b] ">OUR SERVICES</span>
            <span className="!text-black">—</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {services.map((s, i) => (
            <ScrollAnimatedItem key={s.id} index={i} animation="fadeInUp">
              <div className={`${i === 0 ? "order-1" : i === 1 ? "order-2" : i === 2 ? "order-3" : "order-4"}`}>
                <ServiceCard
                  title={s.title}
                  description={s.description}
                  variant={s.variant as "primary" | "white"}
                  image={s.image}
                />
              </div>
            </ScrollAnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
}
