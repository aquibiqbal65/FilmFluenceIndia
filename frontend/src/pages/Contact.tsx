import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  User,
  Building,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FormfacadeEmbed from "@formfacade/embed-react";

const Contact: React.FC = () => {
  const [userType, setUserType] = useState<"brand" | "influencer">("brand");

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl uppercase md:text-6xl font-bold mb-6">
              <span className="text-foreground">Let's Create </span>
              <span className="text-gradient">Together</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your brand story? Get in touch with our team of
              creative storytellers and let's bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-right">
              <Card className="card-gradient border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl text-gradient">
                    Get Started
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* User Type Selection */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block">
                      I am a:
                    </label>
                    <div className="flex space-x-4 mb-6">
                      {/* Brand Button */}
                      <button
                        type="button"
                        onClick={() => setUserType("brand")}
                        className={`flex-1 p-4 rounded-lg border font-semibold text-sm transition-all duration-200 ${
                          userType === "brand"
                            ? "bg-yellow-500/10 border-yellow-500 text-yellow-700 shadow-md"
                            : "border-border hover:border-yellow-500 text-muted-foreground"
                        }`}
                      >
                        <Building
                          className={`w-5 h-5 mx-auto mb-1 ${
                            userType === "brand"
                              ? "text-yellow-700"
                              : "text-muted-foreground"
                          }`}
                        />
                        <span>Brand/Company</span>
                      </button>

                      {/* Influencer Button */}
                      <button
                        type="button"
                        onClick={() => setUserType("influencer")}
                        className={`flex-1 p-4 rounded-lg border font-semibold text-sm transition-all duration-200 ${
                          userType === "influencer"
                            ? "bg-yellow-500/10 border-yellow-500 text-yellow-700 shadow-md"
                            : "border-border hover:border-yellow-500 text-muted-foreground"
                        }`}
                      >
                        <User
                          className={`w-5 h-5 mx-auto mb-1 ${
                            userType === "influencer"
                              ? "text-yellow-700"
                              : "text-muted-foreground"
                          }`}
                        />
                        <span>Influencer/Creator</span>
                      </button>
                    </div>
                  </div>

                  {/* Form Embed */}
                  {userType === "brand" ? (
                    <FormfacadeEmbed
                      formFacadeURL="https://formfacade.com/include/116907795229199129662/form/1FAIpQLSfWlFOhv7qMsZU6ExBCzQ7AQObAWN5lhcsXLLqqOq-HABfkSQ/classic.js/?div=ff-compose"
                      onSubmitForm={() => console.log("Brand form submitted")}
                    />
                  ) : (
                    <FormfacadeEmbed
                      formFacadeURL="https://formfacade.com/include/116907795229199129662/form/1FAIpQLSeqW0KaWIa-new9h74QygK3H0pzz7_j2W9AP9KSzcQgcZCTWw/classic.js/?div=ff-compose"
                      onSubmitForm={() => console.log("Influencer form submitted")}
                    />
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Section */}
            <div className="animate-slide-left">
              <div className="space-y-8">
                {/* Contact Info */}
                <Card className="card-gradient border-0 shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-xl text-gradient">
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground">
                          hello@filmfluence.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <p className="text-muted-foreground">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Location</h3>
                        <p className="text-muted-foreground">
                          Los Angeles, CA
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                        <Instagram className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Social</h3>
                        <a
                          href="https://instagram.com/filmfluence"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          @filmfluence
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <Card className="card-gradient border-0 shadow-elegant">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-3">
                      Response Time
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We typically respond to all inquiries within 24 hours during business days. For urgent matters, feel free to give us a call directly.
                    </p>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="card-gradient border-0 shadow-elegant">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-gradient mb-3">
                      Are you an influencer?
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Join our network of creative storytellers and get access to exclusive brand partnerships.
                    </p>
                    <Button className="btn-influencer w-full">
                      Join Our Creator Network
                    </Button>
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
