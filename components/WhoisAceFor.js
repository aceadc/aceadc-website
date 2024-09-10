import React from "react";

let itemList = [
  {
    title: "Dental Professionals",
    text: "Tailored for those preparing for the Australian Dental Council (ADC) written exam.",
  },
  {
    title: "Self-Learners",
    text: "Ideal for those who prefer self-paced study with access to top-notch resources and an advanced LMS.",
  },
  {
    title: "Cost-Conscious Students",
    text: "Perfect for individuals seeking affordable, high-quality exam preparation.",
  },
  {
    title: "Recent Graduates",
    text: "Designed for graduates aiming to practice dentistry in Australia.",
  },
  {
    title: "International Practitioners",
    text: "Supports experienced international dentists seeking Australian licensure.",
  },
  {
    title: "All Career Stages",
    text: "Suited for individuals at any stage of their dental career, offering comprehensive guidance and support.",
  },
];

const LiItem = ({ title, text }) => {
  return (
    <div className="grid md:grid-cols-4 text-white">
      <p className="col-span-3 p-4 pt-0 pl-0 md:pl-8 md:pt-4">
        <span>•</span> <b>{title}</b> : {text}
      </p>
    </div>
  );
};

export default function Timeline() {
  return (
    <div className="py-8 md:12">
      <div className="hidden md:block"></div>
      {itemList.map((timelineItem, index) => (
        <LiItem
          key={index}
          title={timelineItem.title}
          text={timelineItem.text}
        />
      ))}
    </div>
  );
}
