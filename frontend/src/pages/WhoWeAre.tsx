import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Film, Users, Award, Target } from 'lucide-react';

const WhoWeAre = () => {
  const teamMembers = [
    {
      name: "Alex Rivera",
      role: "Founder & Creative Director",
      bio: "Former film producer with 10+ years in Hollywood. Brings cinematic storytelling to influencer marketing.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Maya Chen",
      role: "Head of Strategy",
      bio: "Data-driven marketing expert with expertise in social media analytics and campaign optimization.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612f932?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Jordan Smith",
      role: "Creator Relations Manager",
      bio: "Influencer and content creator turned relationship manager, bridging brands and creators seamlessly.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: Film,
      title: "Cinematic Excellence",
      description: "Every campaign is crafted with the attention to detail and visual storytelling standards of professional filmmaking."
    },
    {
      icon: Users,
      title: "Authentic Partnerships",
      description: "We believe in genuine connections between brands and creators that result in authentic, engaging content."
    },
    {
      icon: Award,
      title: "Results-Driven",
      description: "Our success is measured by your success. We focus on delivering measurable ROI and meaningful engagement."
    },
    {
      icon: Target,
      title: "Strategic Thinking",
      description: "Every decision is backed by data, market research, and strategic planning to maximize campaign effectiveness."
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
                <span className="text-foreground">Who We Are</span>
                <br />
                <span className="text-gradient">Creative Storytellers</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                FilmFluence was born from the intersection of cinema and digital marketing. 
                We're not just another influencer agency—we're visual storytellers who transform 
                brands into compelling narratives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020 by a team of film industry veterans and digital marketing experts, 
                  FilmFluence emerged from a simple observation: the most powerful marketing campaigns 
                  tell stories that move people to action.
                </p>
                <p>
                  We saw an opportunity to bring the production values, storytelling techniques, 
                  and creative excellence of the film industry to influencer marketing. The result? 
                  Campaigns that don't just reach audiences—they captivate them.
                </p>
                <p>
                  Today, we work with brands across industries, from tech startups to global 
                  corporations, helping them create authentic connections with their audiences 
                  through the power of cinematic storytelling.
                </p>
              </div>
            </div>
            
            <div className="animate-slide-left">
              <div className="card-gradient p-8 card-hover">
                <h3 className="text-2xl font-bold text-foreground mb-6">By The Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Campaigns Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">2500+</div>
                    <div className="text-sm text-muted-foreground">Creator Network</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Client Retention</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">5M+</div>
                    <div className="text-sm text-muted-foreground">Total Reach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at FilmFluence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="card-gradient p-8 card-hover animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The creative minds behind FilmFluence's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="card-gradient p-8 text-center card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/20"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <div className="text-primary font-medium mb-4">{member.role}</div>
                <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAre;