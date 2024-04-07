import React from "react";

let timelineList = [
  {
    date: "10 April 2024",
    event: "Ace ADC Applications Open - September '24 Cohort",
  },
  {
    date: "10 May 2024",
    event: "Online Course Platform access is enabled",
  },
  {
    date: "5 - 18 June 2024",
    event: "Application Period for ADC Written Exam",
  },
  {
    date: "20 September 2024",
    event: "ADC Written Exam",
  },
];

const TimelineItem = ({ date, event }) => {
  return (
    <div className="grid md:grid-cols-4 text-white">
      <p className="col-span-1 py-2 md:py-4 pr-4 text-gray-400">{date}</p>
      <p className="col-span-3 p-4 pt-0 pl-0 md:pl-8 md:pt-4 border-b md:border-l md:border-b-0 border-gray-700">
        <span>•</span> {event}
      </p>
    </div>
  );
};

export default function Timeline() {
  return (
    <div className="py-8 md:12">
      <div className="hidden md:block">
        <div className="grid md:grid-cols-4 text-gray-400 border-b border-gray-700">
          <p className="col-span-1 py-4 pr-4 uppercase">Timeline</p>
          <p className="col-span-3 p-4 pl-0 md:pl-8 border-b md:border-l md:border-b-0 border-gray-700 uppercase">
            Events
          </p>
        </div>
      </div>
      {timelineList.map((timelineItem, index) => (
        <TimelineItem
          key={index}
          date={timelineItem.date}
          event={timelineItem.event}
        />
      ))}
    </div>
  );
}
