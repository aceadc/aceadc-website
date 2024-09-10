import SectionWithHeading from "./SectionWithHeading";
import React from "react";
import { FaCheck } from "react-icons/fa";

export default function Pricing() {
  const pricingData = [
    {
      title: "Study Material",
      price: "AU$ 749",
      anchoredPrice: "A$ 1400",
      features: [
        "30 Week Access to Study Materials via LMS",
        "All Study Books",
        "Self-Paced Topic Specific Quizzes & Mock Exams",
        "Updated Topic-specific Material from Recent Exam",
        "Access to Ace ADC Peer & Mentor Community",
      ],
      buttonLink: "https://buy.stripe.com/fZe7wa5cq3Qtg3m005",
      buttonText: "Apply Now",
      buttonEnabled: true,
    },
    {
      title: "Full ADC Exam Prep",
      price: "AU$ 1349",
      anchoredPrice: "A$ 2400",
      label: "Early Bird Pricing",
      features: [
        "Full LMS access, video lectures, and tools",
        "Extensive preparation time with full 30 Week LMS access",
        "Topic-Specific Video Tutorials",
        "Ace ADC Quizzes & SBCs",
        "Exam Performance Shortcuts",
        "Personalized Instructor Support",
        "Access to Ace ADC Peer & Mentor Community",
      ],
      buttonLink: "https://buy.stripe.com/5kAdUyawK86Jg3m5kq",
      buttonText: "Apply Now",
      buttonEnabled: true,
    },
    {
      title: "Mock Test",
      price: "AU$ 49",
      anchoredPrice: "A$ 130",
      features: [
        "Complete Exam Simulation",
        "5 Updated Mock Tests from Latest Exam",
        "Current Exam Guidelines",
        "Advanced Performance Insights and Review",
        "Instructor Remarks & Assessment",
      ],
      buttonLink: "",
      buttonText: "Available in 2025",
      buttonEnabled: false,
    },
  ];
  return (
    <SectionWithHeading heading="Affordable Excellence" darkBackground="true">
      <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
        Ace ADC aims to provide the most comprehensive and affordable method for
        you to crack your ADC Written Exam.
      </p>

      <section className="flex justify-center gap-16 w-full flex-wrap pb-1 mt-10">
        {pricingData.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-lg relative flex flex-col mt-4 mb-6 items-center bg-white border ${
              plan.title === "Extended" ? "border-apple-blue" : "border-grey"
            } w-full md:w-[300px] p-7 rounded-xl shadow-md ${
              plan.title === "Extended" ? "shadow-lg transform scale-105" : ""
            } transition-all`}
          >
            {plan.label && (
              <div className="py-1 px-4 mb-4 bg-indigo-500 text-white text-xs font-bold absolute -top-4 left-1/2 transform -translate-x-1/2 rounded-lg">
                {plan.label}
              </div>
            )}
            <div className="text-4xl font-black text-[#2d4053] mb-1 rounded-lg">
              {plan.price}
              <p className="text-center italic text-sm text-gray-300">
                {/* + GST (10%) */}
              </p>
            </div>
            <p className="text-center text-xl italic text-gray-600 mb-3">
              <s>{plan.anchoredPrice}</s>
            </p>
            <div className="text-2xl font-semibold text-[#383d49] mb-6">
              {plan.title}
            </div>
            <ul className="text-[#383d49] text-m space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <b>{"-"}</b>
                  <span className="text-left">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="text-center mt-4 pt-4">
              {/* Adjust margin top as needed */}
              {plan.buttonEnabled ? (
                <a
                  id="apply-button-footer-cta"
                  href={plan.buttonLink}
                  className="inline-flex space-x-3 p-3 lg:px-6 lg:py-3.5 bg-indigo-500 text-white rounded-md text-base lg:text-lg text-center font-semibold shadow-lg hover:bg-indigo-900 hover:text-white hover:shadow-2xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
                >
                  {plan.buttonText}
                </a>
              ) : (
                <a
                  id="apply-button-footer-cta"
                  href={plan.buttonLink}
                  className="inline-flex space-x-3 p-3 lg:px-6 lg:py-3.5 bg-gray-300 text-gray-500 cursor-not-allowed rounded-md text-base lg:text-lg text-center font-semibold shadow-lg"
                >
                  {plan.buttonText}
                </a>
              )}
            </div>
          </div>
        ))}
        <a
          className="flex md:w-5/6 justify-center items-center space-x-3 border border-indigo-400 text-indigo-300 bg-gray-800 rounded-md text-base font-medium underline px-3 py-2 hover:bg-gray-900 hover:text-indigo-300 transition"
          href="/pricing"
        >
          <span>See plan details here</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="w-7 h-7"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </span>
        </a>
      </section>
    </SectionWithHeading>
  );
}
