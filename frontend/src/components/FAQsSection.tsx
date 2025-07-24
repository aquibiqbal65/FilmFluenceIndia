import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const faqs = [
  {
    question: "I’m an Influencer—how can I collaborate with your agency?",
    answer:
      "Fill out our Creator Registration Form present on Contact US page and our team will reach out if there’s a suitable campaign match.",
  },
  {
    question: "I’m a brand—how can I collaborate with creators through your agency?",
    answer:
      "Simply head over to our Brand Inquiry Form, share your requirements, and we’ll get in touch with a tailored influencer strategy.",
  },
  {
    question: " What platforms do you work with?",
    answer:
      "We currently focus exclusively on Instagram, helping brands connect with the right creators through reels, stories, and posts to drive real engagement and brand awareness",
  },
  {
    question: "What’s the minimum follower count required to collaborate with you?",
    answer:
      "We require influencers to have at least 1,500 genuine Instagram followers to be eligible for collaboration.",
  },
  {
    question: "How do you select influencers for my brand?",
    answer:
      "We match influencers based on your target audience, campaign goals, engagement rates, niche relevance, and past performance metrics.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We specialize in fashion, beauty, food, fitness, lifestyle, tech, and travel, but are open to working with all sectors.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) =>
    setActiveIndex(idx === activeIndex ? null : idx);
  useEffect(() => {
    Aos.init({ duration: 500, easing: "ease-in-out" });
  }, []);

  return (
    <section className="bg-[#f72585] py-16">
      {" "}
      {/* py-16 for spacing – adjust as you need */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side */}
          <div className="mr-16 flex flex-col items-start md:w-1/2">
            <span className="text-white sm:text-7xl text-5xl font-bold leading-tight uppercase">
              Have more
              <br />
              questions?
              <br />
              We’ve got
              <br />
              you!
            </span>
            <span className="mt-4 text-4xl" role="img" aria-label="smiley face" data-aos="fade-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100px"
                height="100px"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 6C2 2.68629 4.68629 0 8 0C11.3137 0 14 2.68629 14 6V16H12L10 14L8 16L6 14L4 16H2V6ZM7 6C7 6.55228 6.55228 7 6 7C5.44772 7 5 6.55228 5 6C5 5.44772 5.44772 5 6 5C6.55228 5 7 5.44772 7 6ZM10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7Z"
                  fill="#F8FF00"
                />
              </svg>
            </span>
          </div>
          {/* Right Side (Accordion) */}
          <div className="sm:ml-20 m-0 md:w-1/2 flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <div key={faq.question} data-aos="fade-up">
                <button
                  className="flex items-center justify-between w-full py-3 px-3 md:px-6 bg-[#f8ff00] rounded-md text-black text-base font-medium border-b border-white/10 focus:outline-none"
                  onClick={() => toggleAccordion(i)}
                  aria-expanded={activeIndex === i}
                  aria-controls={`faq-content-${i}`}
                  id={`faq-header-${i}`}
                  type="button"
                >
                  <span className="flex items-center">
                    <span className="mr-4 flex items-center">
                      {activeIndex === i ? (
                        <FaCaretUp
                          size={25}
                          className="text-black align-middle"
                        />
                      ) : (
                        <FaCaretDown
                          size={25}
                          className="text-black align-middle"
                        />
                      )}
                    </span>
                    {faq.question}
                  </span>
                </button>
                {activeIndex === i && (
                  <div
                    id={`faq-content-${i}`}
                    role="region"
                    aria-labelledby={`faq-header-${i}`}
                    className="py-4 px-6 text-white bg-[#f72585] border-b border-white/10"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
