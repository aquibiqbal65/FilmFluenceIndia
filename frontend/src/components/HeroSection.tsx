import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaYoutube, FaInstagram, FaHeart, FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import "aos/dist/aos.css";
import hero3 from "../assets/hero-3.png";
import scrollVideo from "../assets/ScrollVid.mp4";
import FloatingHearts from "./ui/FloatingHearts";

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const { ref: commentsRef, inView: commentsInView } = useInView({
    triggerOnce: false,
    threshold: 0.6,
  });

  const { ref: likesRef, inView: likesInView } = useInView({
    triggerOnce: false,
    threshold: 0.6,
  });

  const title = "Transform Your Brand with";
  const subtitle =
    "Connect with top creators who bring your story to life through authentic, engaging content that converts.";

  useEffect(() => {
    Aos.init({ duration: 500, easing: "ease-in-out" });
  }, []);

  return (
    <section className="relative min-h-screen pt-40 sm:pt-24 pb-8 flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={hero3} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-12">
            {/* Text Section */}
            <div className="w-full lg:w-2/3 xl:w-3/4">
              <h1 className="mb-6" data-aos="fade-right">
                <span className="text-foreground text-4xl font-bold uppercase sm:text-5xl lg:text-4xl xl:text-8xl">
                  {title}
                </span>
                <br />
                <TypeAnimation
                  sequence={[
                    "Partnerships",
                    3000,
                    "Engagements",
                    3000,
                    "Authenticity",
                    3000,
                    "& more...",
                    3000,
                  ]}
                  className="text-black bg-foreground p-4 text-4xl font-bold uppercase sm:text-5xl lg:text-4xl xl:text-8xl"
                  wrapper="span"
                  speed={50}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </h1>

              <p
                className="text-white text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                {subtitle}
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-12 items-start sm:items-center"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <Link to="/contact">
                  <button className="learn-more space-x-4">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text tracking-widest">
                      Start Campaign
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            {/* iPhone Mockup */}
            <div className="w-full lg:w-1/3 xl:w-1/4 flex justify-center sm:pt-0 pt-8 lg:justify-end">
              <div className="relative">
                {/* Social Icons */}
                <div className="absolute -left-10 top-10 flex flex-col items-center space-y-4 z-20">
                  <div
                    className="bg-white rounded-full p-2 shadow-md"
                    data-aos="fade-left"
                  >
                    <a
                      href="https://instagram.com/filmfluenceindia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-pink-600 w-10 h-10" />
                    </a>
                  </div>
                  <div
                    className="bg-white rounded-full p-2 shadow-md"
                    data-aos="fade-left"
                  >
                    <FaYoutube className="text-red-500 w-10 h-10" />
                  </div>
                </div>

                {/* Social Counts */}
                <div
                  ref={commentsRef}
                  className="absolute -right-12 top-16 z-20"
                  data-aos="fade-right"
                >
                  <div className="bg-yellow-100 rounded-full px-3 py-1 text-black font-medium text-sm flex items-center gap-1 shadow">
                    <FaComment className="w-4 h-4" />
                    {commentsInView && (
                      <CountUp end={1009} duration={2} separator="," />
                    )}
                  </div>
                </div>
                <div
                  ref={likesRef}
                  className="absolute -right-12 bottom-16 z-20"
                  data-aos="fade-right"
                >
                  <div className="bg-indigo-500 rounded-full px-3 py-1 text-white font-medium text-sm flex items-center gap-1 shadow">
                    <FaHeart className="w-4 h-4" />
                    {likesInView && (
                      <CountUp end={4578} duration={2.5} separator="," />
                    )}
                  </div>
                </div>

                {/* Phone Mockup */}
                <div className="relative w-[250px] h-[500px] lg:w-[280px] lg:h-[560px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10">
                      <p className="absolute right-6 top-2.5 h-1 w-1 rounded-full bg-yellow-600"></p>
                    </div>

                    {/* 👇 Loader Spinner While Video Loads */}
                    {!videoLoaded && (
                      <div className="absolute inset-0 z-40 flex items-center justify-center bg-black bg-opacity-70">
                        <div className="w-10 h-10 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                      </div>
                    )}

                    {/* 👇 Video + Floating Hearts */}
                    <div className="w-full h-full flex items-center justify-center relative">
                      <video
                        className="w-full h-full object-cover rounded-[2.5rem]"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={hero3}
                        onLoadedData={() => setVideoLoaded(true)}
                      >
                        <source src={scrollVideo} type="video/mp4" />
                      </video>
                    </div>
                  </div>

                  {/* Floating Hearts */}
                  <div className="absolute left-4 inset-0 z-50">
                    <FloatingHearts />
                  </div>

                  {/* Home Bar */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
