'use client';

import ServicesHero from './ServicesHero';
import InsuranceVerificationService from './InsuranceVerificationService';
import ClaimSubmissionService from './ClaimSubmissionService';
import PaymentPostingService from './PaymentPostingService';
import ArManagementService from './ArManagementService';
import DenialManagementService from './DenialManagementService';
import RevenueReportingService from './RevenueReportingService';
import SubscribeSection from '../home/SubscribeSection';
import { ScrollAnimatedSection } from '../components/ScrollAnimatedSection';

export default function Services() {
  return (
    <div className="w-full bg-white">
      <ServicesHero />
      <ScrollAnimatedSection animation="fadeInUp">
        <InsuranceVerificationService />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <ClaimSubmissionService />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <PaymentPostingService />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <ArManagementService />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <DenialManagementService />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <RevenueReportingService />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection animation="fadeInUp">
        <SubscribeSection />
      </ScrollAnimatedSection>
    </div>
  );
}



