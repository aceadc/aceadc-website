import Head from "next/head";
import Footer from "../components/Footer";

const CodeOfConductPage = () => {
  return (
    <div className="py-8 lg:pb-20 divide-y divide-gray-700 space-y-12 lg:space-y-24">
      <div className="lg:grid lg:grid-cols-12 gap-16 text-white font-medium px-4 ml-4">
        <div className="col-span-8 relative lg:text-xl lg:leading-relaxed space-y-8 pt-8 lg:pt-16 mx-auto">
          <div className="prose">
            <p>
              At Ace ADC, we are committed to fostering a supportive and
              inclusive learning environment for all our users. To ensure a
              positive experience for everyone, we have established the
              following code of conduct:
            </p>
            <ol className="mt-5">
              <li className="mt-2">
                <strong>Respect and Courtesy:</strong> Treat all members of the
                Ace ADC community with respect and courtesy. Avoid
                discriminatory language or behavior based on factors such as
                race, gender, religion, nationality, or sexual orientation.
              </li>
              <li className="mt-2">
                <strong>Professionalism:</strong> Maintain a professional
                demeanor in all interactions within the Ace ADC platform.
                Refrain from engaging in disruptive or offensive behavior that
                may detract from the learning experience of others.
              </li>
              <li className="mt-2">
                <strong>Intellectual Integrity:</strong> Uphold principles of
                academic honesty and integrity. Refrain from plagiarism or any
                form of academic dishonesty when submitting coursework or
                participating in discussions.
              </li>
              <li className="mt-2">
                <strong>Constructive Communication:</strong> Engage in
                constructive communication and collaboration with fellow
                learners and instructors. Share ideas, ask questions, and
                provide feedback in a respectful and constructive manner.
              </li>
              <li className="mt-2">
                <strong>Privacy and Confidentiality:</strong> Respect the
                privacy and confidentiality of other users. Refrain from sharing
                personal information or confidential content without permission.
              </li>
              <li className="mt-2">
                <strong>Compliance with Policies:</strong> Adhere to all Ace ADC
                policies, including those related to copyright, data protection,
                and acceptable use of technology. Report any violations or
                concerns to the Ace ADC support team promptly.
              </li>
            </ol>
            <p>
              By adhering to this code of conduct, we can create a supportive
              and inclusive learning environment where all members of the Ace
              ADC community can thrive. Thank you for your commitment to
              upholding these principles.
            </p>
            <p className="mt-2">
              If you have any questions or concerns about the code of conduct,
              please contact us at{" "}
              <a
                className="text-primary-500 underline"
                href="mailto:support@aceadc.com"
              >
                support@aceadc.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>
          Ace ADC: Your Pathway to Success in the ADC Exam | ADC Part 1 Written
          Exam Preparation | Code of Conduct
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
      </Head>
      <main className="bg-gray-800 mx-auto">
        <section className="hero__bg-pattern bg-gray-900 pb-10">
          <header className="max-w-6xl 2xl:max-w-7xl mx-auto py-4 lg:py-8 px-4 xl:px-0">
            <div className="flex justify-between items-center">
              <a className="flex items-center" href="/">
                <img
                  className="block w-50 md:w-20"
                  src="logos/ace-logo-1.png"
                  alt="Ace ADC Logo"
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
            <div className="border-l border-gray-600 mx-4 xl:mx-0 pt-6 lg:pt-12 ">
              <nav
                className="flex bg-gray-900 top-0 max-w-5xl mx-auto px-4 lg:px-0 py-2 z-10"
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
                        <span>Home</span>
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
                        href="/coc"
                        className="ml-4 px-2 py-2 font-medium text-white hover:text-primary-500 hover:underline"
                      >
                        Code of Conduct
                      </a>
                    </div>
                  </li>
                </ol>
              </nav>

              <div className="pt-4">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-5xl font-bold text-2xl lg:text-5xl text-white leading-tight ml-4 lg:mx-auto">
                    Code of Conduct
                  </h2>
                </div>
              </div>

              <CodeOfConductPage />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
