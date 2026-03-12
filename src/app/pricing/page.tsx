'use client';

import PricingHero from './PricingHero';
import AIPricingSection from './AIPricingSection';
import HumanServicesPricingSection from './HumanServicesPricingSection';
import PricingCTA from './PricingCTA';

export default function Pricing() {
  return (
    <div className="w-full bg-white">
      <PricingHero />
      <AIPricingSection />
      <HumanServicesPricingSection />
      <PricingCTA />
    </div>
  );
}
