import { CheckCircle, Search, VideoIcon, TrendingUp } from "lucide-react";
import Background from "../assets/Backgrounds/howitworks.svg";

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
    },
  ];

  return (
    <section 
    style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
      <div
        className="max-w-screen-2xl mx-auto py-32">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 uppercase animate-slide-up">
            <h2 className="text-4xl md:text-8xl font-bold mb-6">
              <span className="text-foreground">How </span>
              <span className="text-gradient">FilmFluence</span>
              <span className="text-foreground"> Works</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Our proven 3-step process transforms your brand vision into
              compelling influencer campaigns that drive real results and
              authentic engagement.
            </p>
          </div>

          {/* Steps - content only, no visual, large steps full width, different alignment per step */}
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const alignment =
                index === 1
                  ? "lg:text-right lg:justify-end flex flex-col items-end"
                  : "lg:text-left flex flex-col items-start";
              return (
                <div
                  key={index}
                  className={`w-full ${alignment} animate-slide-up`}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-accent  flex items-center justify-center text-black font-bold text-xl">
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
                    {step.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-center space-x-2"
                      >
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
