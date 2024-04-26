import Head from "next/head";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

let illustrations = [
  {
    id: "ps1",
    src: "/professional-skills/artist.svg",
  },
  {
    id: "ps2",
    src: "/professional-skills/doctor.png",
  },
];

const P = [
  {
    id: "ps1",
    imgSrc: "/professional-skills/artist.svg",
    title: "ADC Written - Self Study (Basic - 8 months)",
    heading: "Basic",
    description: (
      <div>
        <div className="mb-3">
          <strong className="text-primary-500">Study Plan:</strong> Access to a
          structured study plan to help you organize and optimize your study
          time effectively.
        </div>
        <div className="mb-3">
          <strong className="text-primary-500">Study Material:</strong>{" "}
          Comprehensive study resources including over 50 books, important Odell
          cases, 1000 solved MCQs, over 30 ADC guidelines, and over 100 useful
          articles.
        </div>
        <div className="mb-3">
          <strong className="text-primary-500">LMS Access (8 Months):</strong>{" "}
          Enjoy access to the Learning Management System (LMS) for a duration of
          8 months - more than enough for your prep for the upcoming ADC exam.
        </div>
        <div className="mb-3">
          <strong className="text-primary-500">Quizzes</strong> Self-paced
          quizzes covering individual topics, as well as complete exam mocks
          ensuring comprehensive preparation, until the last week of your exam.
        </div>
        <div className="mb-3">
          <strong className="text-primary-500">Community:</strong> Engage with a
          community of peers and mentors for support, collaboration, and sharing
          of insights and experiences. This is your first network when you crack
          your exam and move towards securing your first job.
        </div>
        <p className="italic text-sm text-gray-300">
          Upgrade to Extended after 8 months for $150*. Please refer to our full
          Terms of Service for details.
        </p>
        <br />
      </div>
    ),
  },
  {
    id: "ps2",
    imgSrc: "/professional-skills/doctor.png",
    title: "ADC Written - Self Study (Extended - 2 years)",
    heading: "Extended",
    description: (
      <div>
        <div className="mb-3">
          <strong className="text-primary-500">Everything in Basic:</strong> The
          Ace Extended plan offers everything in Basic, extended LMS access and
          more resources to give you the absolutle best tools required to crack
          the ADC Written Exam.
        </div>
        <div className="mb-3">
          <strong className="text-primary-500">LMS Access (24 Months):</strong>{" "}
          Over 75% of ADC Written Exam candidates require a second attempt at
          the ADC Written Exam. We focus on sustainable learning to prevent
          burnout. Our Extended plan provides 2 years access to all our study
          resources.
        </div>
        <div className="mb-3">
          <strong className="text-primary-500">Exam Shortcuts:</strong>{" "}
          Mastering MCQs isn't just about selecting the correct answer — it's
          about time efficiency and managing nerves. Learn the tips and tricks
          for quick, confident decision-making. This also includes conceptual
          shortcuts that will help you beyond the ADC exam.
        </div>
        <div className="mb-3">
          <strong className="text-primary-500">The Ace ADC Toolkit:</strong> Our
          secret sauce goes beyond study material. Gain access to all previous
          exams, including the question bank from March 2024 exam.
        </div>
        <br />
      </div>
    ),
  },
];

const ProfessionalSkill = ({ title, heading, description, id, imgSrc }) => {
  return (
    <div className="flex flex-col items-center min-h-screen md:block">
      <div className="block md:hidden mt-20">
        <img src={imgSrc} alt={title + "" + heading} />
      </div>
      <div className="text-white pt-8 md:pt-4" id={id}>
        <h3 className="text-4xl lg:text-5xl text-indigo-500 lg:-ml-7">
          {" "}
          {heading}
        </h3>
        <p className="text-gray-400 font-semibold">{title}</p>
        <div className="font-mono tracking-tight lg:text-lg pt-4 lg:pt-8 lg:pr-12">
          {description}
        </div>
      </div>
    </div>
  );
};

const ProfessionalSkillIllustration = ({ id, src, activeIllustration }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          className={`absolute top-20 left-0 ${
            id === activeIllustration ? "opacity-100" : "opacity-0"
          } transition-opacity ease-in duration-300`}
          src={src}
          alt="Artist"
        />
      </div>
    </div>
  );
};

export default function ProfessionalSkills(props) {
  const [activeIllustration, setActiveIllustration] = useState(
    illustrations[0].id
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIllustration(entry.target.id);
          }
        });
      },
      { rootMargin: "-8px 0px -60% 0px" }
    );
    illustrations.forEach((illustration) => {
      observer.observe(document.getElementById(illustration.id));
    });
  }, []);

  return (
    <div className="bg-gray-900">
      <Head>
        <title>
          Ace ADC: Your Pathway to Success in the ADC Exam | ADC Part 1 Written
          Exam Preparation | Pricing
        </title>
        <meta
          name="description"
          content="Ace ADC offers comprehensive preparation for the ADC exam's written part 1. Prepare with expert guidance and resources tailored for success. Start your ADC prep journey today with Ace ADC"
        />
        <meta
          name="keywords"
          content="Ace ADC, ADC, ADC Prep, ADC Exam, Written Exam 1, Dental Exam Prep, Australian Dentistry, Dental Practice Australia, Australian Dental Association, Australian Dental Council, Australia, ADC Written Exam Preparation"
        />
        <meta name="author" content="Ace ADC" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
        <meta
          property="og:title"
          content="Ace ADC: Your Pathway to Success in the ADC Written Exam | ADC Written Exam Preparation"
        />
        <meta
          property="og:description"
          content="Ace ADC offers comprehensive preparation for the ADC exam's written part 1. Prepare with expert guidance and resources tailored for success. Start your ADC prep journey today with Ace ADC."
        />
        <meta name="theme-color" content="#111827" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://aceadc.com/" />
        <meta name="twitter:card" content="/logo.png" />
        <meta property="og:site_name" content="Ace ADC" />
      </Head>

      <section className="hero__bg-pattern bg-gray-900 pb-10">
        <header className="max-w-6xl 2xl:max-w-7xl mx-auto py-4 lg:py-8 px-4 xl:px-0">
          <div className="flex justify-between items-center">
            <a className="flex items-center" href="/">
              <img
                className="block w-50 md:w-20"
                src="logos/ace-logo-1.png"
                alt="Logo of Ace ADC"
              />
              <h1 className="ml-2 text-6xl md:text-6xl pb-2 text-white">
                Ace ADC
              </h1>
            </a>
          </div>
        </header>
      </section>
      <section className="bg-gray-900 border-t border-gray-600 relative">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
          <div className="border-l border-gray-600 mx-4 xl:mx-0 pt-6 lg:pt-12">
            <nav
              className="flex bg-gray-900 sticky top-0 max-w-5xl mx-auto px-4 lg:px-0 py-2 z-10"
              aria-label="Breadcrumb"
            >
              <ol role="list" class="flex items-center space-x-4">
                <li>
                  <div>
                    <a
                      href="/"
                      class="flex pr-2 py-2 items-center font-medium text-base space-x-2 text-gray-300 hover:text-primary-500 hover:underline"
                    >
                      <svg
                        className="flex-shrink-0 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      <span>Ace ADC</span>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="flex items-center">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                    <a
                      href="/apply"
                      className="ml-4 px-2 py-2 font-medium text-white hover:text-primary-500 hover:underline"
                    >
                      Pricing Plans
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="border-l border-gray-700 mx-4 xl:mx-0 py-10 lg:py-16">
            <div className="heading-with-leftborder">
              <h2 className="max-w-6xl 2xl:max-w-7xl mx-auto lg:ml-8 xl:ml-12 px-4 2xl:ml-32 2xl:pl-0 font-bold text-2xl text-primary-500 lg:text-6xl leading-tight ml-4 lg:mx-auto">
                Pricing Plans
              </h2>
            </div>
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto lg:ml-8 xl:ml-12 2xl:ml-32 pl-4 2xl:pl-0">
              <div className="max-w-3xl space-y-6 text-white ">
                <p className="mt-4 font-mono tracking-tight lg:text-lg">
                  All the courses are designed to empower you with all the tools
                  required to crack the ADC Written Part 1 Exam.
                </p>
              </div>
              <div className="lg:grid grid-cols-12 gap-x-10 gap-y-32 2xl:gap-y-64 pt-8 lg:pt-32 relative">
                <div className="col-span-6 md:pb-96">
                  {P.map((skill) => {
                    return (
                      <ProfessionalSkill
                        key={skill.id}
                        title={skill.title}
                        heading={skill.heading}
                        description={skill.description}
                        id={skill.id}
                        imgSrc={skill.imgSrc}
                      />
                    );
                  })}
                </div>
                <div className="col-span-6 pt-12 lg:pt-0 text-white hidden md:block">
                  <div className="sticky top-[15%]">
                    <div className="relative">
                      {illustrations.map((illustration) => {
                        return (
                          <ProfessionalSkillIllustration
                            key={illustration.id}
                            id={illustration.id}
                            src={illustration.src}
                            activeIllustration={activeIllustration}
                          />
                        );
                      })}
                      <div className="text-center mt-4">
                        {" "}
                        {/* Adjust margin top as needed */}
                        <a
                          id="apply-button-footer-cta"
                          href="/apply"
                          className="inline-flex space-x-3 p-3 lg:px-6 lg:py-3.5 bg-indigo-500 text-white rounded-md text-base lg:text-lg text-center font-semibold shadow-lg hover:bg-primary-400 hover:text-indigo-700 hover:shadow-2xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
                        >
                          Click here to Apply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
