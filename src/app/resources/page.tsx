'use client';

import ResourcesHero from './ResourcesHero';
import KeyPerformanceInsights from './KeyPerformanceInsights';
import GuidesAndEducation from './GuidesAndEducation';
import Checklists from './Checklists';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions';
import BillingGlossary from './BillingGlossary';
import SubscribeSection from '../home/SubscribeSection';
import { ScrollAnimatedSection } from '../components/ScrollAnimatedSection';

export default function Resources() {
  return (
    <div className="w-full bg-white">
      <ResourcesHero />
      <ScrollAnimatedSection animation="fadeInUp">
        <KeyPerformanceInsights />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <GuidesAndEducation />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <Checklists />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <FrequentlyAskedQuestions />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <BillingGlossary />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <SubscribeSection />
      </ScrollAnimatedSection>
    </div>
  );
}
