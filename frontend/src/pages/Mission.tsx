import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Users, Lightbulb, Award, Shield, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Mission = () => {
  const missionValues = [
    {
      icon: Target,
      title: "Precision & Purpose",
      description: "Every campaign is strategically crafted with clear objectives, measurable outcomes, and authentic storytelling that resonates with target audiences."
    },
    {
      icon: Users,
      title: "Community First",
      description: "We prioritize building genuine relationships between creators and brands, fostering a community where authentic voices can thrive and grow."
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "We constantly push creative boundaries, experimenting with new formats, technologies, and storytelling techniques to stay ahead of trends."
    },
    {
      icon: Award,
      title: "Excellence Standard",
      description: "We maintain the highest standards of quality in every aspect of our work, from creator partnerships to campaign execution and client service."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We operate with complete transparency, providing clear communication, honest feedback, and reliable partnership throughout every collaboration."
    },
    {
      icon: Rocket,
      title: "Growth & Impact",
      description: "We're committed to helping our partners—both creators and brands—achieve sustainable growth and meaningful impact in their respective markets."
    }
  ];

  const commitments = [
    {
      title: "To Creators",
      points: [
        "Fair compensation and transparent contracts",
        "Creative freedom with strategic guidance",
        "Professional development opportunities",
        "Long-term partnership approach",
        "Access to premium brand collaborations"
      ]
    },
    {
      title: "To Brands", 
      points: [
        "Authentic influencer partnerships",
        "Data-driven campaign strategies",
        "Measurable ROI and clear reporting",
        "Brand safety and reputation protection",
        "Innovative content that stands out"
      ]
    },
    {
      title: "To Our Industry",
      points: [
        "Raise standards for campaign quality",
        "Promote ethical marketing practices",
        "Support diversity and inclusion",
        "Share knowledge and best practices",
        "Pioneer new technologies and formats"
      ]
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
                <span className="text-foreground">Our </span>
                <span className="text-gradient">Mission</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To bridge the gap between authentic storytelling and strategic marketing, 
                creating campaigns that don't just reach audiences—they inspire, engage, 
                and drive meaningful action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="card-gradient p-12 lg:p-16 max-w-5xl mx-auto animate-scale-in">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
                <Target className="w-10 h-10 text-white" />
              </div>
              
              <blockquote className="text-2xl md:text-3xl lg:text-4xl text-foreground font-bold leading-relaxed mb-8">
                "To empower creators and brands to tell stories that matter, 
                building authentic connections that drive real business results 
                and positive social impact."
              </blockquote>
              
              <div className="text-lg text-muted-foreground">
                — Our Core Mission
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Execute */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">How We Execute Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our mission comes to life through these core principles that guide every decision and action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="card-gradient p-8 card-hover animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Our Commitments</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specific promises we make to every stakeholder in the FilmFluence ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className="card-gradient p-8 card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold text-gradient mb-6 text-center">
                  {commitment.title}
                </h3>
                
                <ul className="space-y-4">
                  {commitment.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary-glow rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Mission in Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable impact of our mission-driven approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="card-gradient p-6 card-hover">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Successful Campaigns</div>
                <div className="text-xs text-muted-foreground mt-1">Authentic stories told</div>
              </div>
            </div>
            
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="card-gradient p-6 card-hover">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                <div className="text-xs text-muted-foreground mt-1">Mission alignment</div>
              </div>
            </div>
            
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="card-gradient p-6 card-hover">
                <div className="text-4xl font-bold text-primary mb-2">2500+</div>
                <div className="text-sm text-muted-foreground">Creator Partners</div>
                <div className="text-xs text-muted-foreground mt-1">Empowered storytellers</div>
              </div>
            </div>
            
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="card-gradient p-6 card-hover">
                <div className="text-4xl font-bold text-primary mb-2">3.2x</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
                <div className="text-xs text-muted-foreground mt-1">Meaningful impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-animated">
        <div className="bg-floating-particles">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Whether you're a brand with a story to tell or a creator with a voice to share, 
              we invite you to be part of our mission to transform how authentic stories are told.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-hero">Start Your Story</Button>
              </Link>
              <Link to="/packages">
                <Button className="btn-ghost">Explore Packages</Button>
              </Link>
            </div>
            
            <div className="mt-12 text-sm text-muted-foreground">
              Ready to create campaigns that matter? Let's make an impact together.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mission;