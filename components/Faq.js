import React, { useState } from "react";
import SectionWithHeading from "./SectionWithHeading";

const faqList = [
  {
    question: "What is Ace ADC?",
    answer:
      "Ace ADC offers a comprehensive suite of preparation resources for the Australian Dental Council (ADC) exams. Students can either purchase study materials for self-study or enroll in our full program, which includes lectures, mock tests, and everything needed to maximize your chances of passing the ADC written exam",
  },
  {
    question: "What happens if I don’t pass the ADC exam?",
    answer:
      "While Ace ADC provides a detailed and strategic study plan designed to help you succeed, we understand that sometimes things don’t go as planned. If you don’t pass, you can re-enroll in the next cohort for 50% off the original fee.",
  },
  {
    question: "Are the courses self-paced?",
    answer:
      "Yes, all our courses are self-paced. Recorded lectures and quizzes are available throughout the term, allowing you to study at your own convenience and pace.",
  },
  {
    question: "What is the cost of the courses?",
    answer:
      "Our full course is available for $1,349 if you subscribe during our early bird period, while our study materials can be purchased for $499. These prices are intentionally kept low to provide top-tier preparation at an affordable rate.",
  },
  {
    question: "What additional support does Ace ADC offer?",
    answer:
      "Ace ADC provides ongoing support, including personalized feedback and one-to-one chat to clarify doubts. We also offer access to a student community where you can discuss challenges and share insights with peers.",
  },
  {
    question: "How often is the course material updated?",
    answer:
      "Our course material is updated twice a year, immediately after each ADC exam. This ensures that all content is current, relevant, and aligned with the latest exam standards and practices.",
  },
  {
    question: "Why should I choose Ace ADC over other providers?",
    answer:
      "Ace ADC was founded by practicing Australian dentists who successfully passed the ADC exams themselves. They recognized that existing preparation resources were overpriced and often ineffective. Pooling their knowledge and resources, they created Ace ADC to offer a more affordable and effective solution for international dentists aiming to build a career in Australia.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <SectionWithHeading heading="FAQs" darkBackground={true}>
      <div className="w-full mt-5 md:w-5/6 mx-auto">
        {faqList.map((faq, index) => (
          <div key={index} className="border-b border-gray-600 py-4">
            <button
              className="w-full text-left text-white font-medium focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <span>{faq.question}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </div>
            </button>
            <div
              className={`mt-2 text-gray-300 transition-max-height duration-300 ease-in-out ${
                openIndex === index ? "max-h-screen" : "max-h-0 overflow-hidden"
              }`}
            >
              {openIndex === index && <p className="pt-2">{faq.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </SectionWithHeading>
  );
}
