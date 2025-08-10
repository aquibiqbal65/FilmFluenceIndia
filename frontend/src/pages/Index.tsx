import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
// import StatsSection from "../components/StatsSection";
import WhoWeAreSection from "../components/WhoWeAreSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import SocialIcons from "@/components/ui/socialicons";
import FAQSection from "../components/FAQsSection";
import Maintenance from "./Maintenance";

const Index = () => {
  const isMaintenance = false; // ⬅️ Set to false to disable maintenance mode

  if (isMaintenance) {
    return <Maintenance />;
  }

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />

      {/* Fixed Social Icons - stays in place while scrolling */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <SocialIcons />
      </div>

      <HeroSection />

      <div id="who-we-are">
        <WhoWeAreSection />
      </div>

      {/* <StatsSection /> */}

      <div id="how-it-works">
        <HowItWorksSection />
      </div>

      <div id="faqs">
        <FAQSection />
      </div>

      <div id="careers">
        <TestimonialsSection />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
