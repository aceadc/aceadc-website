import React from "react";
import SectionWithHeading from "./SectionWithHeading";
import Testimonial from "./Testimonial";

let testimonialList = [
  {
    name: "Sai Mallik Rameshwaram",
    batch: "'24 Cohort",
    university: "Dental Assistant",
    testimony:
      "As someone with a busy schedule, I needed a flexible and accessible learning platform to prepare for the ADC exam. Ace ADC exceeded my expectations with its user-friendly interface and comprehensive study materials. Thanks to Ace ADC, I'm now well on my way to pursuing my dental career in Australia!",
    imageSrc: "/avatars/avatar-omar-darboe.png",
  },
  {
    name: "Emily R.",
    batch: "'23 Cohort",
    university: "BDS Graduate",
    testimony:
      "Ace ADC's community forum was a game-changer for me. Being able to connect with fellow dental professionals navigating the same journey made all the difference. It's like having a supportive family cheering you on!",
    imageSrc: "/avatars/avatar-jane-rotanson.png",
  },
];

export default function Testimonials() {
  return (
    <div>
      <SectionWithHeading heading="Testimonials" darkBackground={true}>
        <div className="flex flex-col gap-6 items-end mt-12">
          {testimonialList.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              batch={testimonial.batch}
              university={testimonial.university}
              testimony={testimonial.testimony}
              imageSrc={testimonial.imageSrc}
            />
          ))}
          <a
            className="flex md:w-5/6 justify-center items-center space-x-3 border border-indigo-400 text-indigo-300 bg-gray-800 rounded-md text-base font-medium underline px-3 py-2 hover:bg-gray-900 hover:text-indigo-300 transition"
            href="/testimonials"
          >
            <span>See more testimonials</span>
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
        </div>
      </SectionWithHeading>
    </div>
  );
}
