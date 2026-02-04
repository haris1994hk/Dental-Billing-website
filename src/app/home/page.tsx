import Hero from './Hero';
import ValueStatement from './ValueStatement';
import KeyBenefits from './KeyBenefits';
import HowItWorks from './HowItWorks';
import PaymentPostingJourney from './PaymentPostingJourney';
import EOBPaymentPostingAI from './EOBPaymentPostingAI';
import Services from './Services';
import WhoWeServe from './WhoWeServe';
import SecurityCompliance from './SecurityCompliance';
import Testimonial from './Testimonial';
import FinalCTA from './FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueStatement />
      <KeyBenefits />
      <HowItWorks />
      <PaymentPostingJourney />
      <EOBPaymentPostingAI />
      <Services />
      <WhoWeServe />
      <SecurityCompliance />
      <Testimonial />
      <FinalCTA />
    </>
  );
}
