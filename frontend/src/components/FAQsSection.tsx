import React, { useState } from "react";

const faqs = [
  {
    question: "How do you ensure brand consistency across posts?",
    answer:
      "We follow your brand guidelines and feedback closely to match tone, style, and visuals with your branding.",
  },
  {
    question: "What formats do you deliver the posts in?",
    answer:
      "We offer posts in preferred formats such as JPG, PNG, PDF, or editable design files based on your requirements.",
  },
  {
    question: "Do you offer industry-specific content?",
    answer:
      "Yes, our content is tailored to your industry. Our team adapts to your market and audience.",
  },
  {
    question: "What's the communication process once I purchase a bundle?",
    answer:
      "You’ll be updated at each phase—ideation, drafts, reviews, and delivery—via your preferred communication channels.",
  },
  {
    question: "What if I'm not happy with my bundle?",
    answer:
      "We care about your satisfaction. Revisions are included, and we’ll work closely to meet your expectations.",
  },
  {
    question: "How fast will I get my posts?",
    answer:
      "Turnaround time depends on bundle size, but we typically deliver within 3-7 business days.",
  },
  {
    question: "Can I get editable templates?",
    answer:
      "Absolutely. We can provide editable files on request for your future self-service needs.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) =>
    setActiveIndex(idx === activeIndex ? null : idx);

  return (
    <section className="bg-[#5c0099] py-16">
      {" "}
      {/* py-16 for spacing – adjust as you need */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side */}
          <div className="mr-16 flex flex-col items-start md:w-1/2">
            <span className="text-white text-7xl font-bold leading-tight uppercase">
              Have more
              <br />
              questions?
              <br />
              We’ve got
              <br />
              you!
            </span>
            <span className="mt-4 text-4xl" role="img" aria-label="smiley face">
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
          <div className="ml-20 md:w-1/2 flex flex-col gap-0.5">
            {faqs.map((faq, i) => (
              <div key={faq.question}>
                <button
                  className="flex items-center justify-between w-full py-3 px-3 md:px-6 bg-[#5c0099] text-white text-base font-medium border-b border-white/10 focus:outline-none"
                  onClick={() => toggleAccordion(i)}
                  aria-expanded={activeIndex === i}
                  aria-controls={`faq-content-${i}`}
                  id={`faq-header-${i}`}
                  type="button"
                >
                  <span className="flex items-center">
                    <span
                      className={`text-[#f8ff00] mr-4 text-4xl font-bold select-none transition-transform duration-200 ${
                        activeIndex === i ? "-rotate-180" : "rotate-0"
                      }`}
                    >
                      &#8595;
                    </span>
                    {faq.question}
                  </span>
                </button>
                {activeIndex === i && (
                  <div
                    id={`faq-content-${i}`}
                    role="region"
                    aria-labelledby={`faq-header-${i}`}
                    className="py-4 px-6 text-white bg-[#5c0099] border-b border-white/10"
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
