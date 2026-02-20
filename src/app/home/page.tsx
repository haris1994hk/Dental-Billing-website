'use client';

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import HowItWorks from './HowItWorks';
import ContactForm from '../components/ContactForm';


export default function HomePage() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorks />
                <ContactForm />

    
    </div>
  );
}
