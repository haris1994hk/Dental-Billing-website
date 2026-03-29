'use client';

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import HowItWorks from './HowItWorks';
import ContactForm from '../components/ContactForm';
import DemoVideo from './DemoVideo';
import WhoWeServe from './WhoWeServe';
import TestimonialsSection from './TestimonialsSection';
import SubscribeSection from './SubscribeSection';
import FaqSection from './FaqSection';
import { ScrollAnimatedSection } from '../components/ScrollAnimatedSection';


export default function HomePage() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <ScrollAnimatedSection animation="fadeInUp">
        <AboutSection />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <ServicesSection />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <HowItWorks />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <DemoVideo />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <ContactForm />
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
  );
}
