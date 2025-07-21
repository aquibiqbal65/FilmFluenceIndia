import Background from "../assets/Backgrounds/whoweare.svg";

const WhoWeAre = () => {
  return (
    <section className="relative w-full pt-32 pb-44 bg-[#f3f3f3] overflow-hidden"
    style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-8xl pb-10 font-bold text-black mb-12">
          WHO WE ARE
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mission Section */}
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
              <div className="text-[76px] leading-none font-light text-black">+</div>
              <div>
                <h3 className="text-4xl font-light tracking-widest text-black">OUR</h3>
                <h3 className="text-6xl font-light tracking-widest text-black">MISSION</h3>
              </div>
              
            </div>
            <div className="rounded-2xl border h-3/4 border-black p-8 flex flex-col md:flex-row items-center gap-8 bg-transparent shadow-lg">
              <div className="flex-1">
                <p className="text-gray-700 text-lg md:text-xl">
                  TO EMPOWER NANO AND MICRO CREATORS WITH REAL OPPORTUNITIES, WHILE HELPING BRANDS CRAFT HIGH-IMPACT DIGITAL CAMPAIGNS THROUGH A CURATED TEAM OF CREATORS, WRITERS, EDITORS, AND CAMPAIGN SUPERVISORS.
                </p>
                <div className="mt-4 w-5 h-5 bg-black rounded"></div>
              </div>
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                alt="Mission"
                className="w-full md:w-52 h-52 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Vision Section */}
          <div className="flex-1 space-y-8">
            <div className="flex items-center justify-end gap-4">
              <div className="text-right">
                <h3 className="text-4xl font-light tracking-widest text-black">OUR</h3>
                <h3 className="text-6xl font-light tracking-widest text-black">VISION</h3>
              </div>
              <div className="text-[70px] leading-none font-light text-black">+</div>
            </div>
            <div className="rounded-2xl h-3/4 border border-black p-8 flex flex-col md:flex-row items-center gap-8 bg-transparent shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Vision"
                className="w-full md:w-52 h-52 object-cover rounded-xl"
              />
              <div className="flex-1">
                <p className="text-gray-700 text-lg md:text-xl">
                  TO BECOME INDIA'S MOST TRUSTED BRIDGE BETWEEN EMERGING CREATORS AND GROWING BRANDS, DELIVERING CAMPAIGNS THAT BLEND CREATIVITY WITH CONVERSION.
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
