import Hero from './Hero';
import WhoWeAre from './WhoWeAre';
import Features from './Features';
import Highlights from './Highlights';
import HighlightsAlt from './HighlightsAlt';
import FeaturesAlt from './FeaturesAlt';
import WhyChoose from './WhyChoose';
import Consultation from './Consultation';
import Slider from '../components/Slider';

export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="slider-spacer">
        <Slider />
      </div>

      <div className="py-0 px-4 max-w-7xl mx-auto">
        <WhoWeAre />
        <Features />
        <Highlights />
        <HighlightsAlt />
        <WhyChoose />
        <FeaturesAlt />
        <Consultation />
      </div>
    </>
  );
}
