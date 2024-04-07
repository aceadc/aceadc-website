import React, { useState } from "react";
import SectionWithHeading from "./SectionWithHeading";

let facultyMember = (index, name, imgSrc, designation, institute) => {
  return (
    <div key={index} className="flex flex-col items-center text-center">
      <div className="w-32 h-32 rounded-full object-cover overflow-hidden">
        <img
          className="w-32 h-32 rounded-full object-cover overflow-hidden"
          src={imgSrc}
          alt={"Photo of" + name}
        />
      </div>
      <p className="mt-4 font-semibold text-white">{name} </p>
      <p className="text-gray-200 pt-1.5">{designation}</p>
      <p className="text-gray-400 text-xs">{institute}</p>
    </div>
  );
};

export default function PersonalizedLearningExperiece({ members }) {
  const [showFacultyLess, setShowFacultyLess] = useState(false);
  const facultyMembers = showFacultyLess ? members : members.slice(0, 15);

  return (
    <SectionWithHeading heading="Get Personalised Guidance">
      <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
        As a beginner, we expect you to make many mistakes and learn from your
        mistakes. Get personalised guidance from LITE faculty members, industry
        experts and teaching assistants to find answers and confidently move
        ahead.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-10 pt-16 pb-10">
        {facultyMembers.map((faculty, index) =>
          facultyMember(
            index,
            faculty.name,
            faculty.imgSrc,
            faculty.designation,
            faculty.institute
          )
        )}
      </div>
      {/* <button
        className="block mx-auto my-4 text-sm font-semibold text-gray-400 px-3 py-2 bg-gray-700 rounded-md"
        onClick={() => setShowFacultyLess((prev) => !prev)}
      >
        {showFacultyLess ? "Show Less" : "Show more"}
      </button> */}
    </SectionWithHeading>
  );
}
