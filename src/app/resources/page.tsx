'use client';

import ResourcesHero from './ResourcesHero';
import KeyPerformanceInsights from './KeyPerformanceInsights';
import GuidesAndEducation from './GuidesAndEducation';
import Checklists from './Checklists';
import PostEasyAIInAction from './PostEasyAIInAction';
import BillingGlossary from './BillingGlossary';
import SubscribeSection from '../home/SubscribeSection';
import FaqSection from '../home/FaqSection';
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
        <PostEasyAIInAction />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <FaqSection />
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



