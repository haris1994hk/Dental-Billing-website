'use client';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import ServicesList from './ServicesList';
import InsuranceVerificationSection from './InsuranceVerificationSection';
import AppointmentSchedulingSection from './AppointmentSchedulingSection';
import WhyPracticesChooseSection from './WhyPracticesChooseSection';
import MissionSection from './MissionSection';
import SubscribeSection from '../home/SubscribeSection';
import { ScrollAnimatedSection } from '../components/ScrollAnimatedSection';

export default function AboutPage() {
  return (
    <div className="w-full">
      <HeroSection />
      <ScrollAnimatedSection animation="fadeInUp">
        <ServicesSection />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <ServicesList />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <InsuranceVerificationSection />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <AppointmentSchedulingSection />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <WhyPracticesChooseSection />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <MissionSection />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <SubscribeSection />
      </ScrollAnimatedSection>
    </div>
  );
}