import Head from "next/head";
import React, { useState } from "react";
import SectionWithHeading from "../components/SectionWithHeading";
import Image from "next/image";
import Footer from "../components/Footer";
import ProvenPathwaySection from "../components/ProvenPathwaySection";

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
      const response = await fetch(
        "https://api.payware.com.au/api/v1/website/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

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

        <section className="bg-gray-900 border-t border-gray-600 relative min-h-screen">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
            <div className="border-l border-gray-600 mx-4 xl:mx-0 pt-6 lg:pt-12">
              <nav
                class="flex bg-gray-900 top-0 max-w-5xl mx-auto px-4 lg:px-0 py-2 z-10"
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
                        <span>Ace ADC</span>
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
                        href="/pathway"
                        class="ml-4 px-2 py-2 font-medium text-white hover:text-primary-500 hover:underline"
                      >
                        Pathway
                      </a>
                    </div>
                  </li>
                </ol>
              </nav>

              <div className="pt-4">
                <ProvenPathwaySection />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
