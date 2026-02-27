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


export default function HomePage() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorks />
      <DemoVideo />
      <ContactForm />
      <WhoWeServe />
      <TestimonialsSection />
      <FaqSection />
      <SubscribeSection />

    </div>
  );
}
