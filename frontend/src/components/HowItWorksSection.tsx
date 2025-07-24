import { CheckCircle, Search, VideoIcon, TrendingUp } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      step: "01",
      title: "Brand/Creator Matching",
      description:
        "Our platform matches your brand with the perfect creators based on audience alignment, engagement rates, and content style.",
      details: [
        "Creator vetting",
        "Audience analysis",
        "Engagement metrics",
        "Style matching",
      ],
      aos: "fade-left",
    },
    {
      icon: VideoIcon,
      step: "02",
      title: "Content Creation",
      description:
        "Creators develop cinematic, authentic content that tells your brand story while maintaining their unique voice and style.",
      details: [
        "Creative briefing",
        "Content planning",
        "Production support",
        "Quality assurance",
      ],
      aos: "fade-right",
    },
    {
      icon: TrendingUp,
      step: "03",
      title: "Launch & Optimize",
      description:
        "We launch your campaign across platforms, monitor performance in real-time, and optimize for maximum engagement and ROI.",
      details: [
        "Multi-platform launch",
        "Real-time monitoring",
        "Performance optimization",
        "Detailed analytics",
      ],
      aos: "fade-left",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 500, easing: "ease-in-out" });
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(/howitworks.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-screen-2xl mx-auto py-32 overflow-x-hidden">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 uppercase">
            <h2 className="text-4xl md:text-8xl font-bold mb-6" data-aos="fade-up">
              <span className="text-foreground">How </span>
              <span className="text-gradient">FilmFluence</span>
              <span className="text-foreground"> Works</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto" data-aos="fade" data-aos-duration="700">
              Our proven 3-step process transforms your brand vision into
              compelling influencer campaigns that drive real results and
              authentic engagement.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isSecond = index === 1;
              return (
                <div
                  key={index}
                  className={`w-full flex flex-col ${
                    isSecond
                      ? "lg:items-end lg:text-right"
                      : "lg:items-start lg:text-left"
                  }`}
                  data-aos={step.aos}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-accent flex items-center justify-center text-black font-bold text-xl">
                      {step.step}
                    </div>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="sm:text-5xl text-2xl uppercase font-bold text-accent mb-4">
                    {step.title}
                  </h3>
                  <p className="sm:text-3xl text-lg text-[#cecece] mb-6 leading-relaxed max-w-3xl">
                    {step.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8 max-w-lg">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span className="sm:text-xl text-base text-[#cecece]">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
