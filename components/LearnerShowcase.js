import SectionWithHeading from "./SectionWithHeading";
const learners = [
  {
    name: "Rithvik Nishad",
    batch: "GDC Intern",
    url: "https://contributors.coronasafe.network/contributors/rithviknishad",
    imgSrc: "https://github.com/rithviknishad.png",
  },
  {
    name: "Shivank Kacker",
    batch: "GDC Intern",
    url: "https://contributors.coronasafe.network/contributors/skks1212",
    imgSrc: "https://github.com/skks1212.png",
  },
  {
    name: "Gokulram A",
    batch: "GDC Intern",
    url: "https://contributors.coronasafe.network/contributors/GokulramGHV",
    imgSrc: "https://github.com/GokulramGHV.png",
  },
  {
    name: "Aryan Patel",
    batch: "GDC Intern",
    url: "https://contributors.coronasafe.network/contributors/patelaryan7751",
    imgSrc: "https://github.com/patelaryan7751.png",
  },
  {
    name: "Ritesh Aggarwal",
    batch: "GDC Intern",
    url: "https://contributors.coronasafe.network/contributors/Ritesh-Aggarwal",
    imgSrc: "https://github.com/Ritesh-Aggarwal.png",
  },
  {
    name: "Abhiuday Gupta",
    batch: "GDC Intern",
    url: "https://contributors.coronasafe.network/contributors/cp-Coder",
    imgSrc: "https://github.com/cp-Coder.png",
  },
];

const Learner = ({ name, batch, url, imgSrc }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="flex gap-4 bg-gray-900 p-4 rounded-lg text-white border border-gray-700 hover:bg-opacity-50 hover:shadow-md transition"
    >
      <div className="w-14 h-14 object-contain overflow-hidden rounded-full">
        <img src={imgSrc} alt={"Photo of" + name} />
      </div>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-300">{batch}</p>
      </div>
    </a>
  );
};

export default function LearnerShowcase() {
  return (
    <SectionWithHeading heading="Student Internship Showcase">
      <div>
        <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
          Click on any student below to see their work done and contributions to
          the CARE project as a part of their internship.
        </p>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8">
          {learners.map((learner, index) => (
            <Learner
              key={index}
              name={learner.name}
              batch={learner.batch}
              url={learner.url}
              imgSrc={learner.imgSrc}
            />
          ))}
        </div>
        <div className="flex text-white items-center gap-2 mt-4 ">
          <p>
            <a
              className="flex space-x-2 items-center underline px-2 py-1 rounded-md hover:bg-gray-900 hover:text-indigo-200"
              href="https://contributors.coronasafe.network/"
              target="_blank"
            >
              <span>See All Students</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16L16 12L12 8M8 12H16"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </SectionWithHeading>
  );
}
