/** @format */

import Head from "next/head";
import React, { useState } from "react";
// import LearnerShowcase from "../components/LearnerShowcase";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import ProvenPathwaySection from "../components/ProvenPathwaySection";
import BlogCarrousel from "../components/BlogCarrousel";
import SectionWithHeading from "../components/SectionWithHeading";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Timeline from "../components/Timeline";
import WhoisAceFor from "../components/WhoisAceFor";
import hiringNetworkData from "./../data/hiring-network.json";
import facultyMembersData from "./../data/faculty-members.json";

export default function Home(props) {
  return (
    <div className={""}>
      <Head>
        <title>
          Ace ADC: Your Pathway to Success in the ADC Exam | ADC Part 1 Written
          Exam Preparation
        </title>
        <meta
          name="description"
          content="Ace ADC offers comprehensive preparation for the ADC exam's written part 1. Prepare with expert guidance and resources tailored for success. Start your ADC prep journey today with Ace ADC"
        ></meta>
        <meta
          name="keywords"
          content="Ace ADC, ADC, ADC Prep, ADC Exam, Written Exam 1, Dental Exam Prep, Australian Dentistry, Dental Practice Australia, Australian Dental Association, Australian Dental Council, Australia, ADC Written Exam Preparation"
        ></meta>
        <meta name="author" content="Ace ADC"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
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
        <meta name="Ace ADC offers comprehensive preparation for the ADC exam's written part 1. Prepare with expert guidance and resources tailored for success. Start your ADC prep journey today with Ace ADC"></meta>
        <meta
          name="facebook-domain-verification"
          content="mvf3m03x6fxqjlzdewipip9uon8f1f"
        />
      </Head>
      <main className="bg-gradient-to-br from-gray-800 to-gray-900 mx-auto overflow-x-hidden">
        <section className="mx-auto relative">
          <div className="bg-gray-800 p-2 border-t border-gray-900 rounded-md">
            <a href="#pricing">
              <div className="w-max mx-auto bg-gradient-to-br from-gray-700 to-gray-900 border border-red-400 rounded-lg shadow-md p-3 md:p-4 text-center">
                <h3 className="text-white text-l md:text-l lg:text-xl font-bold leading-tight md:leading-normal">
                  Apply now for the 2025 Cohort
                </h3>
              </div>
            </a>
          </div>
        </section>

        <section className="hero__bg-pattern bg-gray-900 relative">
          <div className="absolute inset-0 md:inset-x-0 md:top-8 2xl:inset-0 z-0">
            <img
              className="h-full w-full object-cover relative"
              src="hero/hero-bg.webp"
              alt="Student preparing for ADC exam with Ace ADC"
            />
            <div className="absolute inset-0"></div>
          </div>
          <header className="max-w-6xl 2xl:max-w-7xl mx-auto py-4 px-4 xl:px-0 relative z-10">
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
          <div className="pb-1 px-4 xl:px-0 pt-5">
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex gap-8 xl:gap-12 items-center mt-5">
              <div className="z-10 flex-1 flex flex-col items-center text-center md:text-left md:items-start">
                <h2 className="text-primary-500 text-xl md:text-xl lg:text-xl 2xl:text-3xl py-2 font-extrabold lg:leading-tight xl:leading-tight">
                  Your Journey to become an{" "}
                  <span className="text-white">Australian Dentist</span> starts
                  here
                </h2>
                <p className="pr-2 mt-10 text-small text-white leading-relaxed">
                  <i>
                    Our goal is to provide the most affordable and effective
                    self-study plan for you to crack the ADC Written Part 1
                    Exam.
                  </i>
                </p>
                <p className="pr-2 mt-10 text-small text-white leading-relaxed">
                  <i>
                    <a
                      href="/apply"
                      className="text-primary-500 hover:text-indigo-300"
                    >
                      <u>Student concessions and discounts</u>
                    </a>{" "}
                    available on case by case basis.
                  </i>
                </p>
                <div className="flex gap-4 items-start w-full md:w-auto mt-6 md:mt-12">
                  <a
                    href="#pricing"
                    className="flex justify-center w-full md:w-auto space-x-3 p-3 lg:px-6 lg:py-3.5 text-white bg-indigo-500 rounded-md text-base lg:text-lg text-center font-semibold shadow hover:bg-indigo-900 hover:text-indigo-100 hover:shadow-2xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
                  >
                    Begin Your Dental Journey
                  </a>

                  <svg
                    width="56"
                    height="40"
                    viewBox="0 0 56 40"
                    fill="none"
                    className="hidden md:block"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_160_5)">
                      <path
                        d="M54.9404 1.94461C55.1491 1.43327 54.9038 0.849574 54.3924 0.640897C53.8811 0.43222 53.2974 0.677579 53.0887 1.18892L54.9404 1.94461ZM53.0887 1.18892C50.0573 8.61712 45.8369 17.8705 38.0922 24.2444C30.4149 30.5627 19.1337 34.1583 1.71876 29.9693L1.25102 31.9139C19.1769 36.2258 31.1274 32.5666 39.3631 25.7886C47.5314 19.0662 51.9054 9.38168 54.9404 1.94461L53.0887 1.18892Z"
                        fill="white"
                      />
                      <path
                        d="M8.90294 25.1151L2.07899 30.4112C1.6531 30.7418 1.56588 31.3504 1.88179 31.7872L6.71798 38.4746"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_160_5">
                        <rect width="56" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex-1 py-12 lg:pt-0 pb-12 hidden md:block ">
                <img
                  className="absolute object-contain max-w-xl xl:max-w-3xl 2xl:max-w-4xl left-1/2 right-0 top-0 z-0"
                  src="hero/female-doc.png"
                  alt="Illustration of female graduate student."
                />
              </div>
            </div>

            <div className="absolute inset-0">
              <div className="absolute right-0 top-0 bottom-0 bg-gradient-to-r from-transparent to-black bg-opacity-20 w-1/2"></div>
            </div>
          </div>
          <section className="px-4 xl:mx-0 pb-10 md:pb-16 pt-16 relative z-10">
            {/* <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-16 pb-16 pt-10 rounded-lg flex items-center flex-col relative"></div> */}
          </section>
          <svg
            className="hidden md:block absolute right-0 top-1/4 object-center z-1"
            width="120"
            height="400"
            fill="none"
            viewBox="0 0 120 400"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-700"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="120"
              height="400"
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </section>
        <ProvenPathwaySection />
        {/* <SectionWithHeading heading="ADC Written Exam 1 Preparation">
          <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
            The Ace ADC curriculum is offered to students through an advanced
            Learning Management System. These courses will impart skill
            competencies to students to prepare at their own pace for the
            Australian Dental Council (ADC) Part 1 Exam.
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-8">
            <div className="w-full md:flex-1 bg-gradient-to-br from-gray-700 to-gray-900 border border-indigo-400 rounded-lg shadow-md p-3 md:p-4">
              <p className="text-indigo-400 text-xl md:text-xl font-bold">
                Extensive Content
              </p>
              <p className="text-white leading-snug mt-1">
                <span className="font-semibold">Material</span> - Ace ADC
                Toolkit, ADC centric books, Artricles, 1000 MCQs and ADA
                guidelines
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-4 md:w-4 md:h-auto md:transform md:-rotate-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="text-primary-700"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                />
              </svg>
            </div>
            <div className="w-full md:flex-1 bg-gradient-to-br from-gray-700 to-gray-900 border border-green-400 rounded-lg shadow-md p-3 md:p-4">
              <p className="text-green-400 text-xl md:text-xl font-bold">
                Targeted Learning
              </p>
              <p className="text-white leading-snug mt-1">
                <span className="font-semibold">Interactive</span> - Study plan,
                Exam Shortcuts, Tips and tricks for Best choice answers
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-4 md:w-4 md:h-auto md:transform md:-rotate-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="text-indigo-700"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                />
              </svg>
            </div>
            <div className="w-full md:flex-1 bg-gradient-to-br from-gray-700 to-gray-900 border border-red-500 rounded-lg shadow-md p-3 md:p-4">
              <p className="text-red-400 text-xl md:text-xl font-bold">
                Quizzes
              </p>
              <p className="text-white leading-snug mt-1">
                <span className="font-semibold">Exam Simulation</span> -
                Extensive question pool with latest Mar '24 question bank,
                Self-paced quizzes and Mock Tests
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-4 md:w-4 md:h-auto md:transform md:-rotate-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="text-green-700"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                />
              </svg>
            </div>

            <div className="w-full md:flex-1 bg-gradient-to-br from-gray-700 to-gray-900 border border-cyan-400 rounded-lg shadow-md p-3 md:p-4">
              <p className="text-cyan-400 text-xl md:text-xl font-bold">
                Community
              </p>
              <p className="text-white leading-snug mt-1">
                <span className="font-semibold">Forum</span> - Networking for
                collaborative online student interaction and finding study
                partners
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm text-white ">
            The course structure and content is constantly evolving. We strive
            to help as many students achieve their goals and aspirations.
          </p>
          <div className="pt-8 lg:pt-16">
            <img
              className="w-full h-full object-contain mix-blend-color-dodge"
              src="course-path/course-pathway.webp"
              alt="Course pathway"
            />
          </div>
          <a
            className="mt-10 flex justify-center items-center space-x-3 border border-indigo-400 text-indigo-300 bg-gray-800 rounded-md text-base font-medium underline px-3 py-2 hover:bg-gray-900 hover:text-indigo-300 transition"
            href="/pathway"
          >
            <span>See course topics here</span>
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
          </a> */}

        {/* <div className="px-4 lg:px-0 py-1 max-w-6xl 2xl:max-w-7xl mx-auto text-center mt-6 md:mt-12">
            <a
              id="apply-button-below-video"
              href="https://apply.pupilfirst.org/apply/forms/9"
              target="_blank"
              className="inline-flex justify-center space-x-3 p-3 lg:px-6 lg:py-3.5 text-gray-900 bg-yellow-400 rounded-md text-base lg:text-lg text-center font-semibold shadow hover:bg-indigo-600 hover:text-indigo-100 hover:shadow-2xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
            >
              Start your journey of becoming a Full Stack developer
            </a>
          </div> */}

        {/* </SectionWithHeading> */}

        {/* <SectionWithHeading
          heading="Experience the future of Exam Prep"
          darkBackground="true"
        >
          <div className="px-4 lg:px-0 pb-12 max-w-6xl 2xl:max-w-7xl mx-auto relative pt-4">
            <h2 className="text-lg md:text-2xl font-bold text-white py-4">
              <span className="text-primary-500">Watch the video</span>{" "}
              showcasing an innovative learner-centered approach, empowering
              students to learn at their own pace and according to their
              preferences.
            </h2>

            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                className="rounded-xl shadow-2xl border-2 border-gray-900"
                src="https://player.vimeo.com/video/?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id="
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="Ace ADC LMS Overview"
              ></iframe>
            </div>
          </div>
        </SectionWithHeading> */}

        <SectionWithHeading heading="Who is Ace ADC for" darkBackground="true">
          <WhoisAceFor />
        </SectionWithHeading>

        {/* <SectionWithHeading heading="Who is Ace ADC for" darkBackground="true">
          <div>
            <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
              <ul className="list-disc list-inside">
                <li>
                  Tailored for Dental Professionals: Specifically designed for
                  those preparing for the Australian Dental Council (ADC)
                  written exam through self-study.
                </li>
                <li>
                  Focus on Study Resources: Offers the best study materials and
                  a world-class Learning Management System (LMS) for efficient
                  exam preparation.
                </li>
                <li>
                  Self-Paced Learning: Access self-paced quizzes, comprehensive
                  study materials, and expert guidance without lengthy,
                  repetitive video lectures.
                </li>
                <li>
                  Affordable and Accessible: Significantly more affordable and
                  accessible compared to traditional courses.
                </li>
                <li>
                  Ideal for All Stages: Whether you're a recent graduate or an
                  experienced international practitioner, Ace ADC provides the
                  resources and support needed to excel.
                </li>
                <li>
                  Comprehensive Preparation: Offers study materials and guidance
                  tailored to help you achieve success in the ADC exam and your
                  dental career in Australia.
                </li>
              </ul>
              <br />
              <br />
              <a
                href="/pricing"
                className="text-primary-500 hover:text-indigo-300"
              >
                <u>Join the Ace ADC community today</u>
              </a>{" "}
              and take the first step towards your future in Australian
              dentistry!
            </p>
          </div>
        </SectionWithHeading> */}

        {/* <SectionWithHeading heading="🇦🇺 Australia needs Doctors*">
          <div>
            <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
              Join a diverse cohort of students and gain access to carefully
              curated study materials aligned with the latest ADC exam
              standards. Prepare at your own pace with engaging reading
              material, interactive quizzes, and realistic mock tests tailored
              to enhance your skills and maximize your success in the upcoming
              ADC Written Part 1 Exam.
              <br />
              <br />
              Our sustainable, scalable, and inclusive model is led by a
              well-balanced team and supported by seasoned professionals,
              ensuring your journey to exam readiness is efficient and
              effective.
            </p>
            <br />
            <p>
              <a
                className="italic text-sm underline text-gray-300 hover:text-primary-500"
                href="https://www.theguardian.com/australia-news/2023/aug/01/overseas-trained-doctors-could-be-fast-tracked-to-work-as-australias-staff-shortage-projected-to-swell"
                target="_blank no-referrer"
              >
                *Source: The Guardian, 2023
              </a>
            </p>
          </div>
        </SectionWithHeading>
           */}

        {/* <div className="relative">
            <p className="pt-4 md:text-lg text-white">
              <span className="font-semibold md:text-indigo-400">
                Watch video
              </span>{" "}
            </p>
            <div className="hidden md:block h-6 w-6 absolute top-8 transform rotate-12 -left-6 z-10">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 43.1 85.9"
                xmlSpace="preserve"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="st0 draw-arrow__svg-path"
                  d="M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="draw-arrow__svg-path"
                  d="M40.6,78.1C39,71.3,37.2,64.6,35.2,58"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="draw-arrow__svg-path"
                  d="M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9"
                />
              </svg>
            </div>
          </div> */}
        {/* <div className="mt-2 shadow-2xl rounded-xl">
            <div style={{ padding: "42.58% 0 0 0", position: "relative" }}>
              <iframe
                className="rounded-xl"
                src="https://player.vimeo.com/video/760206777?h=0b708633d6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="AICTE Leadership in Teaching Excellence (LITE)  - Transformation of Classrooms to NEP 2020 Learner Centered Pedagogy"
              ></iframe>
            </div>
          </div> */}

        <SectionWithHeading heading="Built by Dentists who cleared ADC">
          <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
            At Ace ADC, our online platform is a vibrant community where
            students worldwide connect, share experiences, and support each
            other.
            <br />
            <br />
            We’re here to help you navigate the ADC exam and beyond, celebrating
            victories and building lasting connections in Australian dentistry.
          </p>
          <div className="md:grid flex flex-col gap-12 md:gap-24 items-center md:grid-cols-12 mt-8 z-10">
            <div className="col-span-6">
              <div className="relative w-full gap-24 text-white px-4 md:px-12 py-8 md:py-20 bg-gray-800 rounded-2xl border-b md:border-b-0 md:border-r border-primary-600 z-10">
                <p className="text-lg md:text-2xl text-primary-500">
                  Our Mission
                </p>
                <p className="text-4xl md:text-3xl font-semibold mt-4">
                  Making superior medical study resources accessible and{" "}
                  <span className="text-primary-500">affordable</span> to
                  aspiring Australian Doctors.
                </p>
                <svg
                  className="absolute right-1/2 md:-right-2 rotate-90 md:rotate-0 -bottom-5 md:bottom-auto md:top-1/2 transform -translate-y-1/2 md:-translate-y-1/2"
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_247_6)">
                    <rect
                      x="-8.48535"
                      y="8.48535"
                      width="12"
                      height="12"
                      rx="3"
                      transform="rotate(-45 -8.48535 8.48535)"
                      fill="#FFD761"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_247_6">
                      <rect width="8" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="col-span-6">
              <div>
                <div className="flex gap-3 items-center">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.25008 0.5L6.75008 0.499999C7.02622 0.499999 7.25008 0.723857 7.25008 0.999999L7.25008 5.5C7.25008 5.77614 7.02622 6 6.75008 6C6.47393 6 6.25008 5.77614 6.25008 5.5L6.25008 2.20711L1.10363 7.35355C0.908367 7.54882 0.591784 7.54882 0.396522 7.35355C0.20126 7.15829 0.20126 6.84171 0.396522 6.64645L5.54297 1.5L2.25008 1.5C1.97393 1.5 1.75008 1.27614 1.75008 1C1.75008 0.723857 1.97393 0.5 2.25008 0.5Z"
                      fill="#FFD761"
                    />
                  </svg>

                  <p className="text-gray-500 text-lg font-semibold">
                    Total Content Length
                  </p>
                </div>
                <p className="text-2xl md:text-4xl text-white font-semibold pl-5">
                  100+ Hours
                </p>
              </div>
              <div>
                <div className="flex gap-3 items-center mt-8">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.25008 0.5L6.75008 0.499999C7.02622 0.499999 7.25008 0.723857 7.25008 0.999999L7.25008 5.5C7.25008 5.77614 7.02622 6 6.75008 6C6.47393 6 6.25008 5.77614 6.25008 5.5L6.25008 2.20711L1.10363 7.35355C0.908367 7.54882 0.591784 7.54882 0.396522 7.35355C0.20126 7.15829 0.20126 6.84171 0.396522 6.64645L5.54297 1.5L2.25008 1.5C1.97393 1.5 1.75008 1.27614 1.75008 1C1.75008 0.723857 1.97393 0.5 2.25008 0.5Z"
                      fill="#FFD761"
                    />
                  </svg>

                  <p className="text-gray-500 text-lg font-semibold">
                    Pass Rate
                  </p>
                </div>
                <p className="text-2xl md:text-4xl text-white font-semibold pl-5">
                  98% Exam Pass Rate
                </p>
              </div>

              <div>
                <div className="flex gap-3 items-center mt-8">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.25008 0.5L6.75008 0.499999C7.02622 0.499999 7.25008 0.723857 7.25008 0.999999L7.25008 5.5C7.25008 5.77614 7.02622 6 6.75008 6C6.47393 6 6.25008 5.77614 6.25008 5.5L6.25008 2.20711L1.10363 7.35355C0.908367 7.54882 0.591784 7.54882 0.396522 7.35355C0.20126 7.15829 0.20126 6.84171 0.396522 6.64645L5.54297 1.5L2.25008 1.5C1.97393 1.5 1.75008 1.27614 1.75008 1C1.75008 0.723857 1.97393 0.5 2.25008 0.5Z"
                      fill="#FFD761"
                    />
                  </svg>

                  <p className="text-gray-500 text-lg font-semibold">
                    Success Stories
                  </p>
                </div>
                <p className="text-2xl md:text-4xl text-white font-semibold pl-5">
                  100+ and counting
                </p>
              </div>
            </div>
          </div>
          <svg
            className="hidden md:block absolute right-0 top-1/4 object-center z-1"
            width="120"
            height="400"
            fill="none"
            viewBox="0 0 120 400"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-700"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="120"
              height="400"
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
          <div className="text-center mt-5 pt-4">
            <a
              href="#pricing"
              className="inline-block space-x-3 p-3 lg:px-6 lg:py-3.5 text-white bg-indigo-500 rounded-md text-base lg:text-lg text-center font-semibold shadow hover:bg-indigo-900 hover:text-indigo-100 hover:shadow-2xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
            >
              Join the Ace ADC community today
            </a>
          </div>
        </SectionWithHeading>

        {/* <LearnerShowcase darkBackground="true" /> */}

        <SectionWithHeading heading="Key Timelines" darkBackground="true">
          <Timeline />
        </SectionWithHeading>
        <div id="pricing">
          <Pricing />
        </div>

        <div className="border border-gray-700 py-10">
          <div className="max-w-7xl mx-auto px-3">
            <div className="p-12 rounded-lg bg-indigo-500 flex flex-col items-center text-center gap-6">
              <h4 className="text-white text-xl md:text-3xl font-semibold mt-3 w-full md:w-4/5">
                Your first step to Ace your ADC exam starts here
                <br />
              </h4>
              <a
                id="apply-button-footer-cta"
                href="#pricing"
                className="inline-flex space-x-3 p-3 lg:px-6 lg:py-3.5 bg-primary-500 text-indigo-600 rounded-md text-base lg:text-lg text-center font-semibold shadow-lg hover:bg-indigo-900 hover:text-white hover:shadow-2xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
              >
                Start Your Journey Now
              </a>
            </div>
          </div>
        </div>

        <Testimonials />
        <div>
          <Faq />
        </div>

        {/* <BlogCarrousel /> */}

        <div className="border-t border-gray-700 py-20">
          <div className="max-w-7xl mx-auto px-3">
            <div className="text-white p-6 rounded-lg bg-gray-700">
              <h4>Important</h4>
              <ul className="list-disc ml-4">
                <li className="mt-4">
                  ADC Written Exam had a 19% pass percentage in 2023
                  <br />
                  <a
                    className="italic text-sm underline text-gray-300 hover:text-primary-500"
                    href="https://annualreport23.adc.org.au"
                    target="_blank no-referrer"
                  >
                    *Source: ADC Annual Report 2023
                  </a>
                </li>
                <li className="mt-4">
                  Applicants can apply and get onboarded to the next cohort till
                  Feb or August. We recommend that you submit your application
                  earlier in order to give yourself more time to prepare for the
                  March or September exam.
                </li>
                <li className="mt-4">
                  Alongside subject specific material, applicants get access to
                  subject specific quizzes. Students who requested concessions
                  may be required to adhere to strict timelines to complete
                  course work and quizzes.
                </li>
                <li className="mt-4">
                  Access to the Learning Management System (LMS) and Video
                  Lectures is restricted to a single exam sitting, unless
                  advised otherwise. Extensions to the access is available for
                  additional cost.
                </li>
                <li className="mt-4">
                  If you're reading this, we want you to know that many Winspert
                  (Jigyasa Sharma) students, as well as those from Dr. Raza,
                  have made the switch to Ace ADC and found greater success. Our
                  founders are after success stories, not repeat customers. If
                  that sounds like you, let’s talk about alternative pricing
                  that works. Drop us an email at{" "}
                  <b className="text-indigo-400 hover:text-indigo-500">
                    support@aceadc.com
                  </b>
                </li>
              </ul>
            </div>

            <div className="text-white mt-12">
              <h4>ADC Written Exam</h4>
              <p>
                Aspirants can visit{" "}
                <a
                  className="text-indigo-400 underline hover:text-indigo-500"
                  target="_blank"
                  href="https://adc.org.au/"
                >
                  the ADC Website
                </a>{" "}
                to learn more about the Exam. Registration details can be found
                on{" "}
                <a
                  className="text-indigo-400 underline hover:text-indigo-500"
                  target="_blank"
                  href="https://adc.org.au/assessments/hygienists-and-therapists/written-examination/#2-1-apply-for-a-written-examination-place"
                >
                  the ADC registration page
                </a>
                . Consider reading the{" "}
                <a
                  className="text-indigo-400 underline hover:text-indigo-500"
                  target="_blank"
                  href="https://adc.org.au/files/assessment/handbooks/ADC_Written_Exam_Handbook_DHDT.pdf"
                >
                  ADC Written Examination Handbook
                </a>{" "}
                for an overview of the written examination format and
                requirements. Registration to Ace ADC, does not include
                registration for the ADC Examination.
              </p>
              <h4 className="mt-6">Code of Conduct</h4>
              <p>
                Students shall adhere to the{" "}
                <a
                  className="text-indigo-400 underline hover:text-indigo-500"
                  href="/coc"
                >
                  Code of Conduct
                </a>{" "}
                and provide only truthful information. Any discrepancies shall
                lead to withdrawal of scholarship and being dropped from the
                course.
              </p>
              <h4 className="mt-6">Questions?</h4>
              <p>
                Please refer to the{" "}
                <a
                  className="text-indigo-400 underline hover:text-indigo-500"
                  href="/faq"
                >
                  Frequently Asked Questions (FAQ),
                </a>{" "}
                as you will find the answers to the questions most commonly
                asked. If you still need help, please get in touch with{" "}
                <span className="text-white leading-relaxed font-semibold">
                  <u>support@aceadc.com</u>
                </span>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
