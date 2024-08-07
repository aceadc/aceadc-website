import SectionWithHeading from "./SectionWithHeading";
import React from "react";
import { FaCheck } from "react-icons/fa";

export default function Pricing() {
  const pricingData = [
    {
      title: "Study Material",
      price: "AU$ 499",
      features: [
        "30 Week LMS Access",
        "All Study Books",
        "Access to Community",
      ],
      buttonLink: "https://buy.stripe.com/9AQ03IeN0aeR8AU28c",
      buttonText: "Apply Now",
      buttonEnabled: true,
    },
    {
      title: "Full ADC Exam Prep",
      price: "AU$ 1349",
      label: "Most Popular",
      features: [
        "30 Week LMS Access",
        "75+ Video Training Hours",
        "Ace ADC Quizzes + SBCs",
        "Exam Shortcuts",
        "Chat Support for doubts",
      ],
      buttonLink: "https://buy.stripe.com/4gw7wafR4ev74kE147",
      buttonText: "Apply Now",
      buttonEnabled: true,
    },
    {
      title: "Mock Test",
      price: "AU$ 49",
      features: [
        "Complete Exam Simulation",
        "Recent exam SBQs",
        "Upto 5 different mocks",
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
            } w-full md:w-[300px] p-8 rounded-xl shadow-md ${
              plan.title === "Extended" ? "shadow-lg transform scale-105" : ""
            } transition-all`}
          >
            {plan.label && (
              <div className="py-1 px-4 mb-4 bg-indigo-500 text-white text-xs font-bold absolute -top-4 left-1/2 transform -translate-x-1/2 rounded-lg">
                {plan.label}
              </div>
            )}
            <div className="text-4xl font-black text-[#2d4053] mb-4 rounded-lg">
              {plan.price}
              <p className="text-center italic text-sm text-gray-300">
                + GST (10%)
              </p>
            </div>
            <div className="text-2xl font-semibold text-[#383d49] mb-6">
              {plan.title}
            </div>
            <ul className="text-[#383d49] text-m space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <FaCheck className="text-deep-navy" size="1.2em" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="text-center mt-4 pt-4">
              {/* Adjust margin top as needed */}
              {plan.buttonEnabled ? (
                <a
                  id="apply-button-footer-cta"
                  href={plan.buttonLink}
                  className="inline-flex space-x-3 p-3 lg:px-6 lg:py-3.5 bg-indigo-500 text-white rounded-md text-base lg:text-lg text-center font-semibold shadow-lg hover:bg-primary-400 hover:text-indigo-700 hover:shadow-2xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
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
