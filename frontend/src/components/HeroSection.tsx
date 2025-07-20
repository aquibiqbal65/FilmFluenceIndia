import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react";
import { FaYoutube, FaInstagram, FaHeart, FaComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hero1 from "../assets/hero-1.png";
import hero2 from "../assets/hero-2.png";
import hero3 from "../assets/hero-3.png";
import scrollVideo from "../assets/ScrollVideo.mp4";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: hero1,
      title: "Transform Your Brand with",
      highlight: "Cinematic Influence",
      subtitle:
        "Connect with top creators who bring your story to life through authentic, engaging content that converts.",
    },
    {
      image: hero2,
      title: "Amplify Your Reach with",
      highlight: "Strategic Partnerships",
      subtitle:
        "Our network of verified influencers delivers measurable results across multiple platforms and demographics.",
    },
    {
      image: hero3,
      title: "Create Impact with",
      highlight: "Premium Content",
      subtitle:
        "Professional-grade campaigns that blend creativity with data-driven strategies for maximum engagement.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // comments and likes counter

  const { ref: commentsRef, inView: commentsInView } = useInView({
    triggerOnce: false,
    threshold: 0.6,
  });

  const { ref: likesRef, inView: likesInView } = useInView({
    triggerOnce: false,
    threshold: 0.6,
  });

  return (
    <section className="relative min-h-screen pt-40 sm:pt-24 pb-8 flex flex-col justify-center overflow-hidden bg-animated">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Hero slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
      ))}

      {/* Floating Particles */}
      <div className="absolute inset-0 bg-floating-particles" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            {/* Text Section */}
            <div className="w-full lg:w-2/3 xl:w-3/4">
              <div className="animate-slide-up">
                <h1 className="text-4xl font-bold uppercase sm:text-5xl lg:text-6xl xl:text-8xl mb-6">
                  <span className="text-foreground">
                    {slides[currentSlide].title}
                  </span>
                  <br />
                  <span className="text-gradient">
                    {slides[currentSlide].highlight}
                  </span>
                </h1>

                <p
                  className=" text-white text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl animate-slide-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  {slides[currentSlide].subtitle}
                </p>

                <div
                  className="flex flex-col sm:flex-row gap-4 pt-12 animate-slide-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Link to="/contact">
                    <Button className="btn-hero group">
                      <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                      Start Your Campaign
                    </Button>
                  </Link>
                  <Link to="/packages">
                    <Button className="btn-ghost">View Packages</Button>
                  </Link>
                </div>

                {/* Stats */}
                <div
                  className="mt-8 lg:mt-12 flex flex-wrap items-center gap-4 lg:gap-8 animate-fade-in"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-accent fill-current" />
                    <span className="text-white text-sm text-muted-foreground">
                      5.0 Rating
                    </span>
                  </div>
                  <div className="text-white text-sm text-muted-foreground">
                    500+ Successful Campaigns
                  </div>
                  <div className="text-white text-sm text-muted-foreground">
                    1M+ Reach Generated
                  </div>
                </div>
              </div>
            </div>

            {/* iPhone Mockup with Icons */}
            <div className="w-full lg:w-1/3 xl:w-1/4 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Social Media Icons (left side) */}
                <div className="absolute -left-10 top-10 flex flex-col items-center space-y-4 z-20">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <FaInstagram className="text-pink-600 w-10 h-10" />
                  </div>
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <FaYoutube className="text-black w-10 h-10" />
                  </div>
                </div>

                {/* Social Counts (right side) */}
                {/* Comments */}
                <div
                  ref={commentsRef}
                  className="absolute -right-12 top-16 z-20"
                >
                  <div className="bg-yellow-100 rounded-full px-3 py-1 text-black font-semibold text-sm flex items-center gap-1 shadow">
                    <FaComment className="w-4 h-4" />
                    {commentsInView && (
                      <CountUp end={1009} duration={2} separator="," />
                    )}
                  </div>
                </div>

                {/* Likes */}
                <div
                  ref={likesRef}
                  className="absolute -right-12 bottom-16 z-20"
                >
                  <div className="bg-indigo-500 rounded-full px-3 py-1 text-white font-semibold text-sm flex items-center gap-1 shadow">
                    <FaHeart className="w-4 h-4" />
                    {likesInView && (
                      <CountUp end={4578} duration={2.5} separator="," />
                    )}
                  </div>
                </div>

                <div className="absolute -right-12 bottom-0 z-20">
                  <div className="bg-white rounded-full p-1 shadow-md">
                    <FcLike className="text-black w-10 h-10" />
                  </div>
                </div>

                {/* iPhone Mockup */}
                <div className="relative w-[250px] h-[500px] lg:w-[280px] lg:h-[560px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  {/* Screen */}
                  <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10">
                      <p className="absolute right-6 top-2.5 h-1 w-1 rounded-full bg-yellow-600"></p>
                    </div>

                    {/* Video Content */}
                    <div className="w-full h-full flex items-center justify-center">
                      <video
                        className="w-full h-full object-cover rounded-[2.5rem]"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={hero1}
                      >
                        <source src={scrollVideo} type="video/mp4" />
                        <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                          <div className="text-white text-center">
                            <Play className="w-12 h-12 mx-auto mb-2" />
                            <p className="text-sm">Reel Preview</p>
                          </div>
                        </div>
                      </video>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:top-1/2 top-1/3 -translate-y-1/2 z-20 p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-smooth"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:top-1/2 top-1/3 -translate-y-1/2 z-20 p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-smooth"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-smooth ${
              index === currentSlide
                ? "bg-primary shadow-glow"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
