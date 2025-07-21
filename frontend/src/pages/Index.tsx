import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import WhoWeAreSection from "../components/WhoWeAreSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import SocialIcons from "@/components/ui/socialicons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Fixed Social Icons - stays in place while scrolling */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <SocialIcons />
      </div>
      
      <HeroSection />
      <WhoWeAreSection />
      {/* <StatsSection />       */}
      <HowItWorksSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
