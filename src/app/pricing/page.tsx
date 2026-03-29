'use client';

import PricingHero from './PricingHero';
import AIPricingSection from './AIPricingSection';
import HumanServicesPricingSection from './HumanServicesPricingSection';
import PricingCTA from './PricingCTA';
import { ScrollAnimatedSection } from '../components/ScrollAnimatedSection';

export default function Pricing() {
  return (
    <div className="w-full bg-white">
      <PricingHero />
      <ScrollAnimatedSection animation="fadeInUp">
        <AIPricingSection />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <HumanServicesPricingSection />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <PricingCTA />
      </ScrollAnimatedSection>
    </div>
  );
}
