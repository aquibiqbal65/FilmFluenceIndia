import { Film, Target, Sparkles, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WhoWeAreSection = () => {
  const features = [
    {
      icon: Film,
      title: "Cinematic Storytelling",
      description: "We don't just create content—we craft cinematic narratives that resonate with audiences and drive authentic engagement."
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Our data-driven approach ensures your brand reaches the right audience with the perfect message at the optimal moment."
    },
    {
      icon: Sparkles,
      title: "Creative Excellence",
      description: "Every campaign is a masterpiece, blending artistic vision with strategic marketing to create unforgettable brand experiences."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "With hundreds of successful campaigns, we've mastered the art of turning influence into measurable business growth."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Who We Are</span>
              <br />
              <span className="text-gradient">Creative Storytellers</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              FilmFluence is where cinema meets influence marketing. We're not just another agency—we're 
              visual storytellers who understand that every brand has a unique narrative waiting to be told 
              through the lens of authentic creators.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded by industry veterans with backgrounds in film production and digital marketing, 
              we bring a cinematic approach to influencer partnerships, creating campaigns that don't 
              just reach audiences—they move them.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/who-we-are">
                <Button className="btn-hero">Learn Our Story</Button>
              </Link>
              <Link to="/contact">
                <Button className="btn-influencer">Join Our Network</Button>
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-left">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="card-gradient p-6 card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center animate-slide-up">
          <div className="card-gradient p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "To revolutionize influencer marketing by creating authentic, cinematic content that 
              transforms how brands connect with their audiences. We believe every campaign should 
              tell a story worth sharing, remember, and acting upon."
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;