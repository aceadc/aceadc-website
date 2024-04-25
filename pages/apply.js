import Head from "next/head";
import React, { useState } from "react";
import posthog from "posthog-js";
import Footer from "../components/Footer";
import SectionWithHeading from "../components/SectionWithHeading";
import Image from "next/image";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    plan: "",
    phoneNumber: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await fetch(
      //   "https://api.payware.com.au/api/v1/website/contact",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formData),
      //   }
      // );

      posthog.capture("ace-apply-form", {
        name: formData.name,
        email: formData.email,
        country: formData.country,
        plan: formData.plan,
        phoneNumber: formData.phoneNumber,
        message: formData.message,
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      console.log("Form submitted successfully");

      // Show success message
      setSuccessMessage(
        "We have received your request and will be touch about the next steps shortly."
      );

      // Reset form data after successful submission
      setFormData({
        name: "",
        email: "",
        country: "",
        plan: "",
        phoneNumber: "",
        message: "",
      });

      // Clear error message
      setErrorMessage("");
    } catch (error) {
      console.error("Error submitting form:", error.message);
      // Show error message
      setErrorMessage(
        "There was an error submitting this information. Please try after some time or contact support@aceadc.com"
      );
      // Clear success message
      setSuccessMessage("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={"bg-gray-800"}>
      <Head>
        <title>
          Ace ADC: Your Pathway to Success in the ADC Exam | ADC Part 1 Written
          Exam Preparation | Apply
        </title>
        <meta
          name="description"
          content="Ace ADC offers comprehensive preparation for the ADC exam's written part 1. Prepare with expert guidance and resources tailored for success. Start your ADC prep journey today with Ace ADC"
        />
        <meta
          name="keywords"
          content="Ace ADC, ADC, ADC Prep, ADC Exam, Written Exam 1, Dental Exam Prep, Australian Dentistry, Dental Practice Australia, Australian Dental Association, Australian Dental Council, Australia, ADC Written Exam Preparation"
        />
        <meta name="author" content="aceadc.com" />
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
      <main className="bg-gray-800 mx-auto">
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

        <section className="bg-gray-900 border-t border-gray-600 relative min-h-screen pb-2">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
            <div className="border-l border-gray-600 mx-4 xl:mx-0 pt-6 lg:pt-12">
              <nav
                className="flex bg-gray-900 sticky top-0 max-w-5xl mx-auto px-4 lg:px-0 py-2 z-10"
                aria-label="Breadcrumb"
              >
                <ol role="list" className="flex items-center space-x-4">
                  <li>
                    <div>
                      <a
                        href="/"
                        className="flex pr-2 py-2 items-center font-medium text-base space-x-2 text-gray-300 hover:text-primary-500 hover:underline"
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
              <div className="max-w-5xl mx-auto mt-10 mb-10 pb-20 grid divide-y divide-gray-700">
                <div className="max-w-4xl text-white tracking-tight pt-1 lg:text-lg mb-5">
                  <h3 className="text-primary-500 mb-10">
                    Do you require financial assistance?
                  </h3>
                  <p>
                    We believe in making education accessible to everyone,
                    regardless of circumstances. If you're facing financial
                    challenges but are eager to learn and excel, share your
                    story with us. Let us know why you should be considered for
                    a concession on the course fee. Your input will help us
                    better understand your situation and find ways to support
                    your educational journey. We're here to help you succeed.
                    <br />
                    <br />
                    Alternatively, if you just want to get started on your
                    journey, just fill the form below and we'll be in touch
                    shortly after with the next steps.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto m-10">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="country"
                    required
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    name="message"
                    placeholder="If you require a concession, explain your situation here"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                  />
                  <div className="text-white">
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="plan"
                        value="basic"
                        checked={formData.plan === "basic"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Basic
                    </label>
                    <label className="mr-4 p-5">
                      <input
                        type="radio"
                        name="plan"
                        value="extended"
                        checked={formData.plan === "extended"}
                        onChange={handleInputChange}
                        className="mr-2 mb-5"
                      />
                      Extended
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-500 text-white font-bold py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                  {/* Success message */}
                  {successMessage && (
                    <div className="text-green-600 mt-2">{successMessage}</div>
                  )}
                  {/* Error message */}
                  {errorMessage && (
                    <div className="text-red-600 mt-2">{errorMessage}</div>
                  )}
                </form>
              </div>
              <div className="justify-center text-center max-w-md mx-auto pb-5 mb-10">
                <p className="text-white mb-5">
                  You can find us on our socials
                </p>
                <div className="flex justify-center text-center max-w-md mx-auto pb-5 mb-10">
                  {/* Facebook Icon */}
                  <a
                    href="https://www.facebook.com/profile.php?id=61558405256259"
                    className="mr-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="currentColor"
                      style={{ color: "#1877f2" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  {/* LinkedIn Icon */}
                  <a
                    href="https://www.linkedin.com/company/ace-adc/"
                    className="mr-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="currentColor"
                      style={{ color: "#0077b5" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  {/* Youtube Icon */}
                  <a href="https://www.youtube.com/@Ace_ADC" className="mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="currentColor"
                      style={{ color: "#ff0000" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                  {/* Mail Icon */}
                  <a href="mailto:support@aceadc.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="currentColor"
                      style={{ color: "#ffffff" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.288 21H1.712c-.945.0-1.712-.767-1.712-1.712V5.712c0-.945.767-1.712 1.712-1.712h20.576C23.233 4 24 4.767 24 5.712v13.576c0 .945-.767 1.712-1.712 1.712zM12 14.914 2.658 8.431 2.638 20h18.684V8.431L12 14.914zM20.869 5H3.08L12 11.229S18.252 6.823 20.869 5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
