import SectionWithHeading from "./SectionWithHeading";
import React from "react";
import { FaCheck } from "react-icons/fa";

export default function Pricing() {
  const pricingData = [
    {
      title: "Basic",
      price: "AU$ 449",
      features: [
        "8 Month Access to LMS",
        "Study Material",
        "Quizzes",
        "Access to Community",
      ],
    },
    {
      title: "Extended",
      price: "AU$ 599",
      label: "Most Popular",
      features: [
        "All in Basic",
        "2 Year Access to LMS",
        "Session Recordings",
        "Master Quizzes",
      ],
    },
    {
      title: "Personal",
      price: "AU$ 1999",
      features: [
        "All in Extended",
        "Peronalised Assessment",
        "Topic specific Webinars",
        "Online Chat with Instructors",
      ],
    },
  ];
  return (
    <SectionWithHeading heading="Your career starts here">
      <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
        Ace ADC aims to provide the most comprehensive and affordable method for
        you to crack your ADC Written Exam.
      </p>

      <section className="flex justify-center gap-16 w-full flex-wrap pb-10 mt-10">
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
      </section>
    </SectionWithHeading>
  );
}
