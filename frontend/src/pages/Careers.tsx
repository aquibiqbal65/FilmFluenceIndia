import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, Star, Zap, Crown, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Careers = () => {
  const packages = [
    {
      name: "Starter",
      icon: Star,
      price: "2,999",
      period: "per campaign",
      description: "Perfect for small businesses and startups looking to dip their toes into influencer marketing",
      features: [
        "1-3 micro-influencers (1K-10K followers)",
        "2-4 content pieces per creator",
        "Basic content strategy",
        "Platform: Instagram only",
        "Campaign duration: 2 weeks",
        "Basic analytics report",
        "Email support"
      ],
      popular: false,
      cta: "Start Small"
    },
    {
      name: "Professional",
      icon: Zap,
      price: "7,999",
      period: "per campaign",
      description: "Our most popular package for growing brands ready to scale their influence marketing",
      features: [
        "3-5 mid-tier influencers (10K-100K followers)",
        "4-6 content pieces per creator",
        "Comprehensive content strategy",
        "Multi-platform: Instagram + TikTok",
        "Campaign duration: 4 weeks",
        "Detailed analytics & insights",
        "Priority support + strategy calls",
        "Content performance optimization"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      name: "Premium",
      icon: Crown,
      price: "19,999",
      period: "per campaign",
      description: "Enterprise-level campaigns with top-tier creators and comprehensive strategic support",
      features: [
        "2-3 macro-influencers (100K-1M followers)",
        "6-10 premium content pieces per creator",
        "Cinematic content production",
        "Multi-platform: Instagram + TikTok + YouTube",
        "Campaign duration: 6 weeks",
        "Real-time dashboard & reporting",
        "Dedicated account manager",
        "A/B testing & optimization",
        "Bonus PR & media outreach"
      ],
      popular: false,
      cta: "Go Premium"
    },
    {
      name: "Celebrity",
      icon: Rocket,
      price: "Custom",
      period: "pricing",
      description: "Exclusive campaigns with A-list celebrities and mega-influencers for maximum impact",
      features: [
        "1-2 celebrity/mega-influencers (1M+ followers)",
        "Custom content production",
        "Full creative direction & production",
        "Omnichannel distribution",
        "Extended campaign timeline",
        "White-glove service",
        "C-suite strategy sessions",
        "Global media coordination",
        "Comprehensive PR integration",
        "Custom performance metrics"
      ],
      popular: false,
      cta: "Let's Talk"
    }
  ];

  const addOns = [
    {
      name: "Content Amplification",
      price: "1,500",
      description: "Boost your organic content with paid social media promotion"
    },
    {
      name: "User-Generated Content",
      price: "2,000", 
      description: "Turn customer content into powerful marketing assets"
    },
    {
      name: "Influencer Events",
      price: "5,000",
      description: "Host exclusive events to strengthen creator relationships"
    },
    {
      name: "Performance Marketing",
      price: "3,000",
      description: "Add conversion tracking and ROI optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-animated">
        <div className="bg-floating-particles">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-foreground">Choose Your </span>
                <span className="text-gradient">Package</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From startups to enterprises, we have the perfect influencer marketing package 
                to amplify your brand story and drive meaningful results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <div
                  key={index}
                  className={`card-gradient p-8 card-hover relative animate-scale-in ${
                    pkg.popular ? 'ring-2 ring-primary shadow-glow' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-to-r from-primary to-primary-glow text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                    
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gradient">${pkg.price}</span>
                      <span className="text-muted-foreground ml-2">{pkg.period}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="block">
                    <Button className={pkg.popular ? "btn-hero w-full" : "btn-ghost w-full"}>
                      {pkg.cta}
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Enhance Your Campaign</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Add these powerful extras to supercharge your influencer marketing results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="card-gradient p-6 card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-4">
                  <div className="text-xl font-bold text-primary mb-2">+${addon.price}</div>
                  <h3 className="text-lg font-semibold text-foreground">{addon.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Why Choose FilmFluence?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What sets our packages apart from traditional influencer marketing agencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Cinematic Quality</h3>
              <p className="text-muted-foreground">
                Every piece of content meets film industry standards for visual storytelling and production quality.
              </p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Data-Driven Strategy</h3>
              <p className="text-muted-foreground">
                Advanced analytics and AI-powered creator matching ensure optimal performance and ROI.
              </p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">End-to-End Service</h3>
              <p className="text-muted-foreground">
                From strategy to execution to optimization, we handle every aspect of your influencer campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-animated">
        <div className="bg-floating-particles">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
              Ready to Amplify Your Brand?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss which package is perfect for your brand's goals and budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-hero">Get Custom Quote</Button>
              </Link>
              <Button className="btn-influencer">
                I'm An Influencer
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              Questions? We offer free 30-minute strategy consultations.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;