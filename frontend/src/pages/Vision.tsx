import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Eye, Globe, Sparkles, Target, Zap, Heart } from 'lucide-react';

const Vision = () => {
  const visionPoints = [
    {
      icon: Eye,
      title: "Visual Storytelling Revolution",
      description: "Transform how brands communicate by elevating every campaign to cinematic standards, making each story unforgettable and impactful."
    },
    {
      icon: Globe,
      title: "Global Creative Network",
      description: "Build the world's most diverse and talented network of creators, connecting authentic voices with brands across all cultures and communities."
    },
    {
      icon: Sparkles,
      title: "Innovation Leadership",
      description: "Pioneer new technologies and creative formats that push the boundaries of what's possible in influencer marketing and brand storytelling."
    },
    {
      icon: Target,
      title: "Authentic Connections",
      description: "Create genuine relationships between brands and audiences that transcend traditional marketing, fostering real community and loyalty."
    },
    {
      icon: Zap,
      title: "Data-Driven Creativity",
      description: "Merge artistic vision with advanced analytics to create campaigns that are both emotionally resonant and measurably effective."
    },
    {
      icon: Heart,
      title: "Purposeful Impact",
      description: "Ensure every campaign contributes to positive change, supporting creators and brands that make a meaningful difference in the world."
    }
  ];

  const futureGoals = [
    "Expand to 50+ countries by 2025",
    "Launch AI-powered creator matching platform",
    "Establish FilmFluence Academy for creator education",
    "Reach 10,000+ creators in our network",
    "Generate $1B+ in campaign reach annually",
    "Pioneer new AR/VR campaign formats"
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
                <span className="text-gradient">Vision</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To revolutionize the intersection of cinema and influence marketing, creating a world where 
                every brand story is told with the power and artistry of film, connecting hearts and minds 
                across the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="card-gradient p-12 lg:p-16 max-w-5xl mx-auto animate-scale-in">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
                <Eye className="w-10 h-10 text-white" />
              </div>
              
              <blockquote className="text-2xl md:text-3xl lg:text-4xl text-foreground font-bold leading-relaxed mb-8">
                "We envision a future where every brand has a story worth telling, 
                and every story is told with the power to move, inspire, and transform."
              </blockquote>
              
              <div className="text-lg text-muted-foreground">
                — The FilmFluence Vision
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Our Vision Pillars</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The foundational elements that drive our vision for the future of influencer marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visionPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="card-gradient p-8 text-center card-hover animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {point.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                Looking Ahead
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our roadmap for transforming the influencer marketing landscape over the next five years.
              </p>
              
              <div className="space-y-4">
                {futureGoals.map((goal, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 animate-slide-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary-glow rounded-full"></div>
                    <span className="text-foreground font-medium">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-slide-left">
              <div className="card-gradient p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Join Our Vision
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you're a brand looking to tell your story or a creator wanting to be part 
                  of something bigger, we invite you to join us in revolutionizing how stories are told.
                </p>
                
                <div className="space-y-4">
                  <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-lg border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-1">2025+</div>
                    <div className="text-sm text-muted-foreground">The Future Starts Now</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-background/50 rounded-lg">
                      <div className="text-lg font-bold text-secondary mb-1">∞</div>
                      <div className="text-xs text-muted-foreground">Possibilities</div>
                    </div>
                    <div className="text-center p-3 bg-background/50 rounded-lg">
                      <div className="text-lg font-bold text-accent mb-1">1</div>
                      <div className="text-xs text-muted-foreground">Vision</div>
                    </div>
                  </div>
                </div>
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
              Be Part of the Story
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our vision becomes reality when creators and brands come together to create something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-hero inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-smooth">
                Start Your Journey
              </a>
              <a href="/packages" className="btn-ghost inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-smooth">
                Explore Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vision;