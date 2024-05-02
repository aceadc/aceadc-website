import SectionWithHeading from "./SectionWithHeading";
import React from "react";
import { FaCheck } from "react-icons/fa";

export default function Pricing() {
  const pricingData = [
    {
      title: "Basic",
      price: "AU$ 349",
      features: [
        "8 Month Access to LMS",
        "Study Material",
        "Quizzes",
        "Access to Community",
      ],
    },
    {
      title: "Extended",
      price: "AU$ 449",
      label: "Most Popular",
      features: [
        "All in Basic",
        "Ace ADC Toolkit",
        "2 Year Access to LMS",
        "Exam Shortcuts"
      ],
    },
    // {
    //   title: "Personal",
    //   price: "AU$ 1999",
    //   features: [
    //     "All in Extended",
    //     "Peronalised Assessment",
    //     "Topic specific Webinars",
    //     "Online Chat with Instructors",
    //   ],
    // },
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
