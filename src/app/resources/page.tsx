'use client';

import ResourcesHero from './ResourcesHero';
import KeyPerformanceInsights from './KeyPerformanceInsights';
import GuidesAndEducation from './GuidesAndEducation';
import Checklists from './Checklists';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions';
import BillingGlossary from './BillingGlossary';
import SubscribeSection from '../home/SubscribeSection';

export default function Resources() {
  return (
    <div className="w-full bg-white">
      <ResourcesHero />
      <KeyPerformanceInsights />
      <GuidesAndEducation />
      <Checklists />
      <FrequentlyAskedQuestions />
      <BillingGlossary />
      <SubscribeSection />
    </div>
  );
}
