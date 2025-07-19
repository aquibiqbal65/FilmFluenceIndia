import { useEffect, useState } from 'react';
import { Users, MapPin, Globe } from 'lucide-react';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

const Counter = ({ end, duration, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: 2500,
      suffix: "+",
      label: "Verified Creators",
      description: "Top-tier influencers across all niches"
    },
    {
      icon: MapPin,
      number: 150,
      suffix: "+",
      label: "Cities Covered",
      description: "Global reach with local impact"
    },
    {
      icon: Globe,
      number: 25,
      suffix: "+",
      label: "Languages Spoken",
      description: "Multilingual content creation"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Our Global Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connecting brands with authentic voices across the world through data-driven influencer partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="card-gradient p-8 text-center card-hover animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full mb-6 animate-pulse-glow">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  <Counter end={stat.number} duration={2000} suffix={stat.suffix} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional metrics row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="text-3xl font-bold text-primary mb-2">5M+</div>
            <div className="text-sm text-muted-foreground">Total Reach</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="text-3xl font-bold text-primary mb-2">72h</div>
            <div className="text-sm text-muted-foreground">Avg. Response Time</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '1.4s' }}>
            <div className="text-3xl font-bold text-primary mb-2">3.2x</div>
            <div className="text-sm text-muted-foreground">Avg. ROI Increase</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;