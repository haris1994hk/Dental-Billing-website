'use client';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import ServicesList from './ServicesList';
import SubscribeSection from '../home/SubscribeSection';

export default function AboutPage() {
  return (
    <div className="w-full">
      <HeroSection />
      <ServicesSection />
      <ServicesList />
      <SubscribeSection />
    </div>
  );
}