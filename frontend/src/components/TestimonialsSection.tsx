import Image from "../assets/Testimonials.png";
import ImageMobile from "../assets/TestimonialsMobile.png";

function TestimonialsSection() {
  return (
    <section
      className="relative w-full py-20 bg-[#fff] overflow-x-hidden"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="uppercase text-4xl md:text-6xl pb-10 font-bold text-black mb-12"
          data-aos="fade-up"
        >
          We don’t gossip but some people have been saying some things...
        </h2>
        <div>
          {/* Desktop view */}
          <img
            src={Image}
            alt="testimonials/gossips"
            className="hidden md:block w-full"
          />
          {/* Mobile view */}
          <img
            src={ImageMobile}
            alt="testimonials/gossips"
            className="block md:hidden w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
