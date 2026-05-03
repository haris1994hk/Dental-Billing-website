'use client';

import HeroSection from './HeroSection';
import DentalBillingAidFeature from './DentalBillingAidFeature';
import OurServicesSection from './OurServicesSection';
import HowItWorks from './HowItWorks';
import ContactForm from '../components/ContactForm';
import DemoVideo from './DemoVideo';
import StepByStepFlow from './StepByStepFlow';
import WhoWeServe from './WhoWeServe';
import TestimonialsSection from './TestimonialsSection';
import SubscribeSection from './SubscribeSection';
import FaqSection from './FaqSection';
import { ScrollAnimatedSection } from '../components/ScrollAnimatedSection';


export default function HomePage() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <DentalBillingAidFeature />
      <OurServicesSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      
        <ScrollAnimatedSection animation="fadeInUp">
          <HowItWorks />
        </ScrollAnimatedSection>
        <ScrollAnimatedSection animation="fadeInUp">
          <DemoVideo />
        </ScrollAnimatedSection>
        <ScrollAnimatedSection animation="fadeInUp">
          <StepByStepFlow />
        </ScrollAnimatedSection>
        <ScrollAnimatedSection animation="fadeInUp">
          <div className="bg-white rounded-3xl p-8 border border-blue-100 my-20">
            <ContactForm />
          </div>
        </ScrollAnimatedSection>
        <ScrollAnimatedSection animation="fadeInUp">
          <WhoWeServe />
        </ScrollAnimatedSection>
        <ScrollAnimatedSection animation="fadeInUp">
          <TestimonialsSection />
        </ScrollAnimatedSection>
        <ScrollAnimatedSection animation="fadeInUp">
          <FaqSection />
        </ScrollAnimatedSection>
        <ScrollAnimatedSection animation="fadeInUp">
          <SubscribeSection />
        </ScrollAnimatedSection>
      </div>
    </div>
  );
}




