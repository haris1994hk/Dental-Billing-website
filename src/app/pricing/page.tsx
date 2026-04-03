'use client';

import AIPricingSection from './AIPricingSection';
import { ScrollAnimatedSection } from '../components/ScrollAnimatedSection';

export default function Pricing() {
  return (
    <div className="w-full bg-white">
      <ScrollAnimatedSection animation="fadeInUp">
        <AIPricingSection />
      </ScrollAnimatedSection>
      
     
    </div>
  );
}
