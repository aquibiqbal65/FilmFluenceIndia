import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Background from "../assets/Backgrounds/contactus.svg";
import { Mail, Phone, Instagram, User, Building } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact: React.FC = () => {
  const [userType, setUserType] = useState<"brand" | "influencer">("brand");

  useEffect(() => {
    Aos.init({ duration: 500, easing: "ease-in-out" });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div
        className="pt-20"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover", // fixed invalid 'fit'
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade">
            <h1 className="text-4xl uppercase md:text-6xl font-bold mb-6">
              <span className="text-foreground">Let's Create </span>
              <span className="text-gradient">Together</span>
            </h1>
            <p
              className="text-xl text-white max-w-3xl mx-auto"
              data-aos="fade-up"
            >
              Ready to transform your brand story? Get in touch with our team of
              creative storytellers and let's bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="" data-aos="fade-right">
              <Card className="bg-[#f8ff00] border-0">
                <CardHeader>
                  <CardTitle className="text-black uppercase text-4xl">
                    Get Started
                  </CardTitle>
                  <CardDescription className="text-black  text-2xl">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* User Type Selection */}
                  <div>
                    <label className="text-xl underline underline-offset-2 font-bold text-black mb-3 block">
                      I am a:
                    </label>
                    <div className="flex space-x-4 mb-6 border-black">
                      {/* Brand Button */}
                      <button
                        type="button"
                        onClick={() => setUserType("brand")}
                        className={`flex-1 p-4 rounded-md border-2 font-semibold text-sm transition-transform duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] ${
                          userType === "brand"
                            ? "bg-yellow-500/30 border-yellow-600 shadow-md"
                            : "border-black hover:border-yellow-500"
                        }`}
                      >
                        <Building className="w-5 h-5 mx-auto mb-1 text-black" />
                        <span className="sm:text-xl text-md text-black uppercase">
                          Brand/Company
                        </span>
                      </button>

                      {/* Influencer Button */}
                      <button
                        type="button"
                        onClick={() => setUserType("influencer")}
                        className={`flex-1 p-4 rounded-md border-2 font-semibold text-sm transition-transform duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] ${
                          userType === "influencer"
                            ? "bg-yellow-500/30 border-yellow-600 shadow-md"
                            : "border-black hover:border-yellow-500"
                        }`}
                      >
                        <User className="w-5 h-5 mx-auto mb-1 text-black" />
                        <span className="sm:text-xl text-md text-black uppercase">
                          Influencer/Creator
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Form Embed */}
                  {userType === "brand" ? (
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdm2EV3DOBt3zHndl_SFAiw0hlSX-PuGjK8QH010nw6jVpeMw/viewform?embedded=true"
                      width="100%"
                      height="1334"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      className="w-full h-[1480px] border-none"
                      title="Google Form"
                    >
                      Loading…
                    </iframe>
                  ) : (
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdyv-eQR0G70Df8G-FdmB2mzmR6jsZJ75SBAP9RiuVdwXEMpQ/viewform?embedded=true"
                      width="100%"
                      height="1334"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      className="w-full max-w-3xl h-[1380px] border-none"
                      title="Google Form"
                    >
                      Loading…
                    </iframe>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Section */}
            <div className="" data-aos="fade-left">
              <div className="space-y-8">
                {/* Contact Info */}
                <Card className="bg-[#f8ff00] border-0">
                  <CardHeader>
                    <CardTitle className="text-4xl uppercase text-black">
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center text-xl space-x-4">
                      <div className="w-12 h-12 bg-none rounded-lg flex items-center justify-center">
                        <Mail className="w-8 h-8 text-black" />
                      </div>
                      <div className="text-black">
                        <h3 className="font-semibold">Email</h3>
                        <a href="mailto:shoaib@filmfluenceindia.in" className="">
                          shoaib@filmfluenceindia.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center  text-xl space-x-4">
                      <div className="w-12 h-12 bg-none rounded-lg flex items-center justify-center">
                        <Phone className="w-8 h-8 text-black" />
                      </div>
                      <div className="text-black">
                        <h3 className="font-semibold">Phone</h3>
                        <a href="tel:+916200755320" className="">
                          +91 6200755320
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center text-xl  space-x-4">
                      <div className="w-12 h-12 bg-none rounded-lg flex items-center justify-center">
                        <Instagram className="w-8 h-8 text-black" />
                      </div>
                      <div className="text-black">
                        <h3 className="font-semibold">Social</h3>
                        <a
                          href="https://instagram.com/filmfluenceindia"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-smooth"
                        >
                          @filmfluenceindia
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <Card className="border-0 bg-[#f8ff00]" data-aos="fade-left">
                  <CardContent className="pt-6 text-black">
                    <h3 className="uppercase font-semibold mb-3 text-4xl">
                      Response Time
                    </h3>
                    <p className="text-2xl leading-relaxed">
                      We typically respond to all inquiries within 24 hours
                      during business days. For urgent matters, feel free to
                      give us a call directly.
                    </p>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card
                  className="bg-[#f8ff00] border-0 shadow-elegant"
                  data-aos="fade-left"
                >
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-black text-4xl uppercase mb-3">
                      Want to be part of the creative engine behind viral
                      campaigns?
                    </h3>
                    <p className="text-black text-2xl leading-relaxed mb-6">
                      Join the FilmFluence team and help shape the future of
                      influencer marketing.
                    </p>
                    <Link
                      to="/careers"
                      className="inline-block bg-black text-[#f8ff00] text-lg font-semibold uppercase px-6 py-3 rounded-md shadow-lg hover:bg-[#222] transition duration-300 ease-in-out text-center"
                    >
                      Apply to Join the Team
                    </Link>
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

export default Contact;
