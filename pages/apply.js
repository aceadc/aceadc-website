import Head from "next/head";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    plan: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://example.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      console.log("Form submitted successfully");

      // Reset form data after successful submission
      setFormData({
        name: "",
        email: "",
        country: "",
        plan: "",
      });

      // Show success message or perform any other actions
    } catch (error) {
      console.error("Error submitting form:", error.message);
      // Handle error (e.g., display error message to the user)
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const pricingData = [
    {
      title: "Basic",
      monthlyPrice: "$29.99",
      annualPrice: "$299.99",
      discountedAnnualPrice: "$25.99",
      discountedMonthlyPrice: "$29.99",
      features: [
        "3 Team Member",
        "AI Chat",
        "3 Active Workflows",
        "10,000 Tokens",
        "Account Support",
        "All Prebuilt Integrations",
      ],
    },
    {
      title: "Premium",
      monthlyPrice: "$49.99",
      annualPrice: "$499.99",
      discountedAnnualPrice: "$45.99",
      discountedMonthlyPrice: "$49.99",
      label: "Most Popular",
      features: [
        "Everything in Basic",
        "20 Team Members",
        "1,000,000 Tokens",
        "Unlimited Workflows",
        "Request New Workflows",
        "Priority Support",
      ],
    },
    {
      title: "Enterprise",
      monthlyPrice: "Contact",
      annualPrice: "",
      discountedAnnualPrice: "",
      discountedMonthlyPrice: "",
      features: [
        "Everything in Premium",
        "Unlimited Users",
        "On Premise Solutions",
        "Priority Support",
        "Fine Grained Access Control",
        "Single Sign-On",
      ],
    },
  ];
  const [isAnnual, setIsAnnual] = useState(true);
  return (
    <div className={""}>
      <Head>
        <title>
          Ace ADC: Your Pathway to Success in the ADC Exam | ADC Part 1 Written
          Exam Preparation | Testimonials
        </title>
        <meta
          name="description"
          content="Ace ADC offers comprehensive preparation for the ADC exam's written part 1. Prepare with expert guidance and resources tailored for success. Start your ADC prep journey today with Ace ADC"
        ></meta>
        <meta
          name="keywords"
          content="Ace ADC, ADC, ADC Prep, ADC Exam, Written Exam 1, Dental Exam Prep, Australian Dentistry, Dental Practice Australia, Australian Dental Association, Australian Dental Council, Australia, ADC Written Exam Preparation"
        ></meta>
        <meta name="author" content="aceadc.com"></meta>
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
      </Head>
      <main className="bg-gray-800 mx-auto">
        <section className="hero__bg-pattern bg-gray-900 pb-10">
          <header className="max-w-6xl 2xl:max-w-7xl mx-auto py-4 lg:py-8 px-4 xl:px-0">
            <div className="flex justify-between items-center">
              <a className="flex items-center" href="/">
                <img
                  className="block w-50 md:w-12"
                  src="logos/ace-logo-1.png"
                  alt="Logo of Ace ADC"
                />
                <h1 className="ml-2 md:text-xl pb-2 text-white">Ace ADC</h1>
              </a>
            </div>
          </header>
        </section>
        <section className="bg-gray-900 border-t border-gray-600 relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
            <div className="border-l border-gray-600 mx-4 xl:mx-0 pt-6 lg:pt-12">
              <nav
                class="flex bg-gray-900 sticky top-0 max-w-5xl mx-auto px-4 lg:px-0 py-2 z-10"
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
                          class="flex-shrink-0 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <span>Apply for Ace ADC</span>
                      </a>
                    </div>
                  </li>

                  <li>
                    <div class="flex items-center">
                      <svg
                        class="flex-shrink-0 h-5 w-5 text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                      <a
                        href="/apply"
                        class="ml-4 px-2 py-2 font-medium text-white hover:text-primary-500 hover:underline"
                      >
                        Apply
                      </a>
                    </div>
                  </li>
                </ol>
              </nav>

              <div className="pt-4">
                <div className="heading-with-leftborder mb-10">
                  <h2 className="max-w-5xl font-bold text-2xl lg:text-5xl text-white leading-tight ml-4 lg:mx-auto">
                    Apply
                  </h2>
                </div>
              </div>
              <section className="flex justify-center gap-16 w-full flex-wrap pb-10">
                {pricingData.map((plan, idx) => (
                  <div
                    key={idx}
                    className={`rounded-lg relative flex flex-col mt-4 mb-6 items-center bg-white border ${
                      plan.title === "Premium"
                        ? "border-apple-blue"
                        : "border-grey"
                    } w-full md:w-[300px] p-8 rounded-xl shadow-md ${
                      plan.title === "Premium"
                        ? "shadow-lg transform scale-105"
                        : ""
                    } transition-all`}
                  >
                    {plan.label && (
                      <div className="py-1 px-4 mb-4 bg-black text-white text-xs font-bold absolute -top-4 left-1/2 transform -translate-x-1/2 rounded-lg">
                        {plan.label}
                      </div>
                    )}
                    <div className="text-4xl font-black text-[#2d4053] mb-4 rounded-lg">
                      {isAnnual
                        ? `${plan.discountedAnnualPrice}`
                        : `${plan.discountedMonthlyPrice}`}
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

              <div className="max-w-5xl mx-auto mt-10 mb-10 pb-20 grid divide-y divide-gray-700">
                <form onSubmit={handleSubmit} className="max-w-md mx-auto m-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="text-white">
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="plan"
                        value="9 Months"
                        checked={formData.plan === "9 Months"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      9 Months
                    </label>
                    <label className="mr-4 p-5">
                      <input
                        type="radio"
                        name="plan"
                        value="2 Years"
                        checked={formData.plan === "2 Years"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      2 Years
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="plan"
                        value="Personal"
                        checked={formData.plan === "Personal"}
                        onChange={handleInputChange}
                        className="mr-2 mb-5"
                      />
                      Personal
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
