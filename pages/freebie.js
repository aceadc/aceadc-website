import React, { useState } from "react";
import Image from "next/image";
import SectionWithHeading from "../components/SectionWithHeading";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Script from "next/script";

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

let itemList = [
  {
    title: "📚 Access 10 essential dental books",
    text: "all in one place.",
  },
  {
    title: "🔑 Free LMS access",
    text: "study anytime, anywhere, on any device.",
  },
  {
    title: "🦷 Covers key ADC exam topics",
    text: "Endodontics, Oral Surgery, Radiology & more",
  },
  {
    title: "🚀 Boost your prep",
    text: "with important study material from Odell, Abbott and Profitt.",
  },
  {
    title: "🎯 Exclusive to Ace ADC",
    text: "start your journey to passing the ADC exam today!",
  },
];

export default function HomePage() {
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

  const LiItem = ({ title, text }) => {
    return (
      <div className="grid md:grid-cols-4 text-gray-800">
        <p className="col-span-3 p-4 pt-0 pl-0 md:pl-8 md:pt-4">
          <span>•</span> <b>{title}</b> : {text}
        </p>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-gray-200 to-silver min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="bg-gradient-to-b from-gray-200 to-silver py-4 lg:py-8">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 xl:px-0 flex justify-between items-center">
          <a className="flex items-center" href="/">
            <img
              className="block w-50 md:w-20"
              src="logos/ace-logo-1.png"
              alt="Logo of Ace ADC"
            />
            <h1 className="ml-2 text-6xl md:text-6xl pb-2 text-gray-800">
              Ace ADC
            </h1>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative mt-20 mb-20 flex-1 flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="hero/hero-bg.png"
            alt="Background"
            layout="fill"
            objectfit="cover"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Centered H1 Heading */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-800">
            Get Access to our Free Study Material
          </h1>
        </div>

        {/* Content: Left and Right Side */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto p-6 space-y-8 md:space-y-0 mt-10">
          {/* Left Side: Text Content */}
          <div className="mr-20 w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-center">
            {/* Centered Image */}
            <div className="flex justify-center pl-1 my-3">
              <img
                src="/books/FreeBookBundle.png"
                alt="Free Book Bundle"
                className="w-full md:w-full lg:w-5/6 xl:w-4/5"
              />
            </div>

            <div className="md:14 pl-10 md:px-0">
              <div className="hidden md:block"></div>
              {itemList.map((timelineItem, index) => (
                <LiItem
                  key={index}
                  title={timelineItem.title}
                  text={timelineItem.text}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-1/2">
            {/* Sender Script */}
            <Script
              id="sender-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
            (function (s, e, n, d, er) {
              s['Sender'] = er;
              s[er] = s[er] || function () {
                (s[er].q = s[er].q || []).push(arguments)
              }, s[er].l = 1 * new Date();
              var a = e.createElement(n),
                  m = e.getElementsByTagName(n)[0];
              a.async = 1;
              a.src = d;
              m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js', 'sender');
            sender('aceb5a7aef2115');
          `,
              }}
            />
            {/* The div for the form */}
            <div className="flex flex-col items-center justify-center">
              <div
                style={{ textAlign: "left" }}
                className="sender-form-field"
                data-sender-form-id="m0xh3735bmzrv96zd3h"
              ></div>
              <p className="text-lg text-gray-700 mt-10 text-center md:text-left">
                <a
                  className="underline font-bold text-primary-600 hover:text-indigo-600"
                  href="/#pricing"
                >
                  Kickstart your ADC exam prep
                </a>{" "}
                with these valuable resources. Perfect for both recent graduates
                and experienced practitioners aiming to practice in Australia.
                <br />
                <br />
                These books cover crucial topics to help you strengthen your
                knowledge and boost exam confidence. Whether you're brushing up
                on key concepts or diving into new material, these resources are
                designed to support your success.
                <br />
                <br />
                Fill the form above to get access to your free copies and start studying smarter.
              </p>
            </div>
          </div>
        </div>
      </main>

      <div>
        <section className="bg-gray-100 border-t border-gray-300 relative">
          <div className="absolute inset-0 z-0">
            <img
              src="hero/hero-bg.png" // Replace with your image path
              alt="Background"
              layout="fill"
              objectfit="cover"
              className="opacity-70"
            />
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto ">
            <div className="mx-4  xl:mx-0 border-l border-gray-700">
              <div className="py-10 lg:py-16">
                <div className="heading-with-leftborder">
                  <h2 className="font-bold text-2xl lg:text-5xl text-indigo-800 leading-tight ml-2 md:ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
                    Success Stories
                  </h2>
                </div>
                <div className="max-w-6xl ml-2 md:ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
                  <div className="flex flex-col items-center mt-12">
                    <div className="mb-7 relative w-full md:h-6/6 md:w-5/6 flex items-center justify-center ">
                      {/* Arrow buttons */}
                      {testimonialList.length > 2 && (
                        <>
                          <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-3/4 transform -translate-y-1/2 text-indigo-400 hover:text-indigo-500"
                          >
                            <FaArrowLeft size={37} />
                          </button>
                          <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-3/4 transform -translate-y-1/2 text-indigo-400 hover:text-indigo-500"
                          >
                            <FaArrowRight size={37} />
                          </button>
                        </>
                      )}
                    </div>
                    <div className="relative w-full md:w-5/6 flex items-center justify-center">
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
                            currentIndex === index
                              ? "bg-indigo-500"
                              : "bg-gray-500"
                          }`}
                        ></button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-200 to-silver text-white py-8">
        <div className="flex flex-col md:flex-row w-full justify-between md:px-[10vw] mt-8 md:mt-12 mb-8 md:mb-12">
          <div
            className={`flex flex-col gap-4 text-gray-800 md:text-left text-center mt-10 md:mt-0`}
          >
            <p className="text-gray-800 font-bold">About</p>
            <a href="/pricing">
              <p>Pricing</p>
            </a>
            <a href="/testimonials">
              <p>Success Stories</p>
            </a>
          </div>
          <div
            className={`flex flex-col gap-4 text-gray-800 text-center md:text-left mt-10 md:mt-0`}
          >
            <p className="text-gray-800 font-bold">Legal</p>
            <a href="/privacy">
              <p>Privacy Policy</p>
            </a>
            <a href="/terms">
              <p>Terms</p>
            </a>
            <a href="/coc">
              <p>Code of Conduct</p>
            </a>
          </div>
          <div
            className={`flex flex-col gap-4 text-gray-800 text-center md:text-left mt-10 md:mt-0`}
          >
            <p className="text-gray-800 font-bold">Socials</p>
            <a href="https://www.facebook.com/profile.php?id=61558405256259">
              <p>Facebook</p>
            </a>
            <a href="https://www.linkedin.com/company/aceadc/">
              <p>LinkedIn</p>
            </a>
            <a href="https://www.youtube.com/@Ace_ADC">
              <p>Youtube</p>
            </a>
            <a href="https://medium.com/@AceADC">
              <p>Blog</p>
            </a>
          </div>
          <div
            className={`flex flex-col gap-4 text-gray-800 text-center md:text-left mt-10 md:mt-0`}
          >
            <p className="text-gray-800 font-bold">Support</p>
            <a href="mailto:support@aceadc.com">
              <p>Send us an Email</p>
            </a>
            <a href="/apply">
              <p>Contact Us</p>
            </a>
            <a href="/faq">
              <p>FAQs</p>
            </a>
          </div>
        </div>
        <div className="text-center py-10 md:px-[10vw]">
          <hr className="border-gray-300" />
          {/* <p className="text-gray-800">© Ace ADC ABN A/F. All rights reserved.</p> */}
        </div>
      </footer>
    </div>
  );
}

function Testimonial({ name, batch, country, testimony, imageSrc }) {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row gap-3 bg-gray-900 p-6 rounded-lg w-full md:w-6/6">
      <img
        className="ml-0 md:-ml-16 w-32 h-32 rounded-full object-contain border-8 border-gray-800 bg-gray-700"
        src={imageSrc}
        alt={"Photo of" + name}
      />

      <div className="flex gap-4 items-start">
        <svg
          width="54"
          height="44"
          viewBox="0 0 54 44"
          fill="none"
          className="w-8 h-8 flex-shrink-0 opacity-50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.84275 6.77875C8.58408 2.72275 14.2454 0.666748 21.6667 0.666748H24.3334V8.18408L22.1894 8.61342C18.5361 9.34408 15.9948 10.7814 14.6348 12.8907C13.9251 14.0271 13.5227 15.3282 13.4668 16.6667H21.6667C22.374 16.6667 23.0523 16.9477 23.5524 17.4478C24.0525 17.9479 24.3334 18.6262 24.3334 19.3334V38.0001C24.3334 40.9414 21.9414 43.3334 19.0001 43.3334H3.00008C2.29284 43.3334 1.61456 43.0525 1.11447 42.5524C0.614369 42.0523 0.333418 41.374 0.333418 40.6667V27.3334L0.341418 19.5494C0.317418 19.2534 -0.189249 12.2401 4.84275 6.77875ZM48.3334 43.3334H32.3334C31.6262 43.3334 30.9479 43.0525 30.4478 42.5524C29.9477 42.0523 29.6667 41.374 29.6667 40.6667V27.3334L29.6747 19.5494C29.6507 19.2534 29.1441 12.2401 34.1761 6.77875C37.9174 2.72275 43.5788 0.666748 51.0001 0.666748H53.6667V8.18408L51.5227 8.61342C47.8694 9.34408 45.3281 10.7814 43.9681 12.8907C43.2585 14.0271 42.856 15.3282 42.8001 16.6667H51.0001C51.7073 16.6667 52.3856 16.9477 52.8857 17.4478C53.3858 17.9479 53.6667 18.6262 53.6667 19.3334V38.0001C53.6667 40.9414 51.2748 43.3334 48.3334 43.3334Z"
            fill="#A1A1AA"
          />
        </svg>

        <div className="text-white">
          <p className="text-lg md:text-xl text-gray-300">{testimony}</p>
          <p className="font-semibold mt-4 text-gray-200">{name}</p>
          <p className="text-sm text-gray-400">{batch},</p>
          <p className="text-sm text-gray-400">{country}</p>
        </div>
      </div>
    </div>
  );
}
