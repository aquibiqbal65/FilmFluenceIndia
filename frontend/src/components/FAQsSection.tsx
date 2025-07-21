import React, { useState } from "react";

const faqs = [
  {
    question: "How do you ensure brand consistency across posts?",
    answer: "We follow your brand guidelines and feedback closely to match tone, style, and visuals with your branding.",
  },
  {
    question: "What formats do you deliver the posts in?",
    answer: "We offer posts in preferred formats such as JPG, PNG, PDF, or editable design files based on your requirements.",
  },
  {
    question: "Do you offer industry-specific content?",
    answer: "Yes, our content is tailored to your industry. Our team adapts to your market and audience.",
  },
  {
    question: "What's the communication process once I purchase a bundle?",
    answer: "You’ll be updated at each phase—ideation, drafts, reviews, and delivery—via your preferred communication channels.",
  },
  {
    question: "What if I'm not happy with my bundle?",
    answer: "We care about your satisfaction. Revisions are included, and we’ll work closely to meet your expectations.",
  },
  {
    question: "How fast will I get my posts?",
    answer: "Turnaround time depends on bundle size, but we typically deliver within 3-7 business days.",
  },
  {
    question: "Can I get editable templates?",
    answer: "Absolutely. We can provide editable files on request for your future self-service needs.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) =>
    setActiveIndex(idx === activeIndex ? null : idx);

  return (
    <section className="bg-black py-16"> {/* py-16 for spacing – adjust as you need */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side */}
          <div className="mr-16 flex flex-col items-start md:w-1/2">
            <span className="text-white text-7xl font-bold leading-tight">
              Have more<br />questions?<br />We’ve got<br />you!
            </span>
            <span className="mt-4 text-4xl" role="img" aria-label="smiley face">
              <svg width="40" height="40" viewBox="0 0 40 40" className="inline" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="12" fill="#9D82FF"/>
                <rect x="11" y="11" width="18" height="18" rx="4" fill="white" fillOpacity="0.15"/>
                <circle cx="16" cy="20" r="2" fill="white"/>
                <circle cx="24" cy="20" r="2" fill="white"/>
                <rect x="17" y="26" width="6" height="2" rx="1" fill="white"/>
              </svg>
            </span>
          </div>
          {/* Right Side (Accordion) */}
          <div className="ml-20 md:w-1/2 flex flex-col gap-0.5">
            {faqs.map((faq, i) => (
              <div key={faq.question}>
                <button
                  className="flex items-center justify-between w-full py-3 px-3 md:px-6 bg-black text-white text-base font-medium border-b border-white/10 focus:outline-none"
                  onClick={() => toggleAccordion(i)}
                  aria-expanded={activeIndex === i}
                  aria-controls={`faq-content-${i}`}
                  id={`faq-header-${i}`}
                  type="button"
                >
                  <span className="flex items-center">
                    <span
                      className={`text-[#f8ff00] mr-4 text-4xl font-bold select-none transition-transform duration-200 ${
                        activeIndex === i ? '-rotate-180' : 'rotate-0'
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
                    className="py-4 px-6 text-white bg-black border-b border-white/10"
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
