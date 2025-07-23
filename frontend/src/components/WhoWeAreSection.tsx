import { useEffect } from "react";
import Background from "../assets/Backgrounds/whoweare.svg";
import OurMission from "../assets/OurMission.jpg";
import OurVision from "../assets/OurVision.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const WhoWeAre = () => {
  useEffect(() => {
    Aos.init({ duration: 500, easing: "ease-in-out" });
  }, []);
  return (
    <section
      className="relative w-full pt-32 pb-44 bg-[#f3f3f3] overflow-x-hidden"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl md:text-8xl pb-10 font-bold text-black mb-12"
          data-aos="fade-up"
        >
          WHO WE ARE
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mission Section */}
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4" data-aos="fade-right">
              <div className="text-[76px] leading-none font-light text-black">
                +
              </div>
              <div>
                <h3 className="text-4xl font-light tracking-widest text-black">
                  OUR
                </h3>
                <h3 className="text-6xl font-light tracking-widest text-black">
                  MISSION
                </h3>
              </div>
            </div>
            <div
              className="rounded-2xl border h-3/4 border-black p-8 flex flex-col md:flex-row items-center gap-8 bg-transparent shadow-lg"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="flex-1">
                <p className="text-gray-700 text-lg md:text-xl">
                  TO EMPOWER NANO AND MICRO CREATORS WITH REAL OPPORTUNITIES,
                  WHILE HELPING BRANDS CRAFT HIGH-IMPACT DIGITAL CAMPAIGNS
                  THROUGH A CURATED TEAM OF CREATORS, WRITERS, EDITORS, AND
                  CAMPAIGN SUPERVISORS.
                </p>
                <div className="mt-4 w-5 h-5 bg-black rounded"></div>
              </div>
              <img
                loading="lazy"
                src={OurMission}
                alt="Mission"
                className="w-full md:w-52 h-52 object-cover rounded-xl"
                data-aos="fade"
              data-aos-duration="1200"
              />
            </div>
          </div>

          {/* Vision Section */}
          <div className="flex-1 space-y-8">
            <div
              className="flex items-center justify-end gap-4"
              data-aos="fade-left"
            >
              <div className="text-right">
                <h3 className="text-4xl font-light tracking-widest text-black">
                  OUR
                </h3>
                <h3 className="text-6xl font-light tracking-widest text-black">
                  VISION
                </h3>
              </div>
              <div className="text-[70px] leading-none font-light text-black">
                +
              </div>
            </div>
            <div
              className="rounded-2xl h-3/4 border border-black p-8 flex flex-col md:flex-row items-center gap-8 bg-transparent shadow-lg"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <img
              loading="lazy"
                src={OurVision}
                alt="Vision"
                className="w-full md:w-52 h-52 object-cover rounded-xl"
                 data-aos="fade"
              data-aos-duration="1200"
              />
              <div className="flex-1">
                <p className="text-gray-700 text-lg md:text-xl">
                  TO BECOME INDIA'S MOST TRUSTED BRIDGE BETWEEN EMERGING
                  CREATORS AND GROWING BRANDS, DELIVERING CAMPAIGNS THAT BLEND
                  CREATIVITY WITH CONVERSION.
                </p>
                <div className="mt-4 w-5 h-5 border-2 border-black rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
