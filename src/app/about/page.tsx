'use client';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import ServicesList from './ServicesList';
import InsuranceVerificationSection from './InsuranceVerificationSection';
import AppointmentSchedulingSection from './AppointmentSchedulingSection';
import WhyPracticesChooseSection from './WhyPracticesChooseSection';
import MissionSection from './MissionSection';
import SubscribeSection from '../home/SubscribeSection';

export default function AboutPage() {
  return (
    <div className="w-full">
      <HeroSection />
      <ServicesSection />
      <ServicesList />
      <InsuranceVerificationSection />
      <AppointmentSchedulingSection />
      <WhyPracticesChooseSection />
      <MissionSection />
      <SubscribeSection />
    </div>
  );
}