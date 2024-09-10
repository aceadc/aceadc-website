import React, { useState } from "react";
import SectionWithHeading from "./SectionWithHeading";
import Testimonial from "./Testimonial";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

let testimonialList = [
  {
    name: "Aryan Kapoor",
    batch: "'24 Cohort",
    country: "🇮🇳 India",
    testimony:
      "As someone with a busy schedule, I needed a flexible and accessible learning platform to prepare for the ADC exam. Ace ADC exceeded my expectations with its user-friendly interface and comprehensive study materials. Thanks to Ace ADC, I'm now well on my way to pursuing my dental career in Australia!",
    imageSrc: "/avatars/sai-headshot.png",
  },
  {
    name: "Aiman Ali",
    batch: "'23 Cohort",
    country: "🇵🇰 Pakistan",
    testimony:
      "Ace ADC's community forum was a game-changer for me. Being able to connect with fellow dental professionals navigating the same journey made all the difference. It's like having a supportive family cheering you on!",
    imageSrc: "/avatars/aiman-headshot.png",
  },
  {
    name: "Maria S",
    batch: "'24 Cohort",
    country: "🇨🇴 Colombia",
    testimony:
      "Ace ADC made my dream of practicing dentistry in Australia a reality! The courses, expert support, and community forum provided me with the knowledge, confidence, and connections I needed to succeed. Highly recommended!",
    imageSrc: "/avatars/maria-headshot.png",
  },
  {
    name: "Situmorang K.",
    batch: "'23 Cohort",
    country: "🇮🇩 Indonesia",
    testimony:
      "I can't thank Ace ADC enough for their top-notch exam preparation resources. The exam simulation quizzes and master quizzes were invaluable in helping me ace the ADC exam. If you're serious about pursuing a career in Australian dentistry, look no further!",
    imageSrc: "/avatars/situ-headshot.png",
  },
  {
    name: "Meville Javasundaram",
    batch: "'23 Cohort",
    country: "🇱🇰 Sri Lanka",
    testimony:
      "Ace ADC's commitment to affordability and accessibility is truly commendable. I never thought I could afford such high-quality exam preparation resources, but Ace ADC made it possible. Thanks to their dedication to democratizing education, I'm now one step closer to fulfilling my dream of practicing dentistry in Australia",
    imageSrc: "/avatars//meville-headshot.png",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <SectionWithHeading heading="Testimonials">
        <div className="flex flex-col items-center mt-12">
          <div className="relative w-full md:w-5/6 flex items-center justify-center">
            <div className="">
              {/* Arrow buttons */}
              {testimonialList.length > 2 && (
                <>
                  <button
                    onClick={prevTestimonial}
                    className="absolute left-0 top-3/4 transform -translate-y-1/2 text-indigo-400 hover:text-indigo-500"
                  >
                    <FaArrowLeft size={24} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="absolute right-0 top-3/4 transform -translate-y-1/2 text-indigo-400 hover:text-indigo-500"
                  >
                    <FaArrowRight size={24} />
                  </button>
                </>
              )}
            </div>
            <div className="w-full">
              <Testimonial
                name={testimonialList[currentIndex].name}
                batch={testimonialList[currentIndex].batch}
                country={testimonialList[currentIndex].country}
                testimony={testimonialList[currentIndex].testimony}
                imageSrc={testimonialList[currentIndex].imageSrc}
              />
            </div>
          </div>

          {/* Slider dots */}
          <div className="flex space-x-2 mt-4">
            {testimonialList.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-indigo-500" : "bg-gray-500"
                }`}
              ></button>
            ))}
          </div>

          <a
            className="flex md:w-5/6 justify-center items-center space-x-3 border border-indigo-400 text-indigo-300 bg-gray-800 rounded-md text-base font-medium underline px-3 py-2 mt-6 hover:bg-gray-900 hover:text-indigo-300 transition"
            href="/testimonials"
          >
            <span>See all testimonials</span>
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
