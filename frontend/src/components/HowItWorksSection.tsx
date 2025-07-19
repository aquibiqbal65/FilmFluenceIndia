import { MessageCircle, Search, VideoIcon, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      step: "01",
      title: "Discovery Call",
      description: "We start with an in-depth consultation to understand your brand, goals, target audience, and vision for the campaign.",
      details: ["Brand analysis", "Goal setting", "Audience research", "Budget planning"]
    },
    {
      icon: Search,
      step: "02", 
      title: "Creator Matching",
      description: "Our AI-powered platform matches your brand with the perfect creators based on audience alignment, engagement rates, and content style.",
      details: ["Creator vetting", "Audience analysis", "Engagement metrics", "Style matching"]
    },
    {
      icon: VideoIcon,
      step: "03",
      title: "Content Creation",
      description: "Creators develop cinematic, authentic content that tells your brand story while maintaining their unique voice and style.",
      details: ["Creative briefing", "Content planning", "Production support", "Quality assurance"]
    },
    {
      icon: TrendingUp,
      step: "04",
      title: "Launch & Optimize",
      description: "We launch your campaign across platforms, monitor performance in real-time, and optimize for maximum engagement and ROI.",
      details: ["Multi-platform launch", "Real-time monitoring", "Performance optimization", "Detailed analytics"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">How </span>
            <span className="text-gradient">FilmFluence</span>
            <span className="text-foreground"> Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 4-step process transforms your brand vision into compelling influencer campaigns 
            that drive real results and authentic engagement.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} animate-slide-${isEven ? 'right' : 'left'}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {index === steps.length - 1 && (
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/contact">
                        <Button className="btn-hero">Start Your Campaign</Button>
                      </Link>
                      <Link to="/packages">
                        <Button className="btn-ghost">View Packages</Button>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Visual */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} animate-slide-${isEven ? 'left' : 'right'}`}>
                  <div className="card-gradient p-8 lg:p-12 text-center card-hover">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    
                    <div className="text-6xl font-bold text-gradient mb-4">
                      {step.step}
                    </div>
                    
                    <div className="text-xl font-semibold text-foreground">
                      {step.title}
                    </div>

                    {/* Progress indicator */}
                    <div className="mt-8 flex justify-center space-x-2">
                      {steps.map((_, stepIndex) => (
                        <div
                          key={stepIndex}
                          className={`w-3 h-3 rounded-full transition-smooth ${
                            stepIndex <= index 
                              ? 'bg-primary' 
                              : 'bg-border'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="card-gradient p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-4">
              Ready to Transform Your Brand Story?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of successful brands that have elevated their marketing with FilmFluence
            </p>
            <Link to="/contact">
              <Button className="btn-hero">Get Started Today</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;