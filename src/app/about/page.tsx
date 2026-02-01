import HeroSection from './HeroSection';
import WhoAreWe from './WhoAreWe';
import Testimonials from './Testimonials';
import ServeSection from './ServeSection';
import Consult from '../home/Consultation';
export default function About() {
  return (
    <div>
      <HeroSection />
      <WhoAreWe />
      <ServeSection />
      <Testimonials />
      <Consult />
    </div>
  );
}
