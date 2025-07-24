import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { useEffect } from "react";

const Careers = () => {
  useEffect(() => {
  AOS.init({ duration: 500 });
}, []);
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div
        className="pt-20"
        style={{
          backgroundImage: `url(/contactus.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade">
            <h1 className="text-4xl uppercase md:text-6xl font-bold mb-6">
              <span className="text-foreground">Want to be part of the creative engine behind viral campaigns? </span>
              <span className="text-gradient"></span>
            </h1>
            <p
              className="text-xl text-white max-w-3xl mx-auto"
              data-aos="fade-up"
            >
              Join the FilmFluence team and help shape the future of influencer marketing.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="sm:w-2/4 w-full">
              {/* Contact Form */}
              <div className="" data-aos="fade-right">
                <Card className="bg-[#f8ff00] border-[#f8ff00] border-2">
                  <CardContent className="w-full">
                    {/* Form Embed */}
                    <div className="w-full">
                      <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSckBS2QeCVz6OD3CqKAReXXU8fzw8IaDRiUR2ARDKPp71Z9GQ/viewform?embedded=true"
                        className="w-full h-[1480px] border-none"
                        title="Google Form"
                      >
                        Loading…
                      </iframe>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
