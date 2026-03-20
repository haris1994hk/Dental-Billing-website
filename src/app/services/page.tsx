'use client';

import ServicesHero from './ServicesHero';
import InsuranceVerificationService from './InsuranceVerificationService';
import ClaimSubmissionService from './ClaimSubmissionService';
import PaymentPostingService from './PaymentPostingService';
import ArManagementService from './ArManagementService';
import DenialManagementService from './DenialManagementService';
import RevenueReportingService from './RevenueReportingService';
import SubscribeSection from '../home/SubscribeSection';

export default function Services() {
  return (
    <div className="w-full bg-white">
      <ServicesHero />
      <InsuranceVerificationService />
      <ClaimSubmissionService />
      <PaymentPostingService />
      <ArManagementService />
      <DenialManagementService />
      <RevenueReportingService />
      <SubscribeSection />
    </div>
  );
}
