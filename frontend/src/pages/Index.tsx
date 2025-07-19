import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import WhoWeAreSection from '../components/WhoWeAreSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <WhoWeAreSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;