import React from "react";

export default function Footer() {
  return (
    <>
      <section className="flex flex-col w-full">
        <footer className="bg-gray-800 text-white py-8">
          <div className="flex flex-col md:flex-row w-full justify-between md:px-[10vw] mt-8 md:mt-12 mb-8 md:mb-12">
            <div
              className={`flex flex-col gap-4 text-white md:text-left text-center mt-10 md:mt-0`}
            >
              <p className="text-white font-bold">About</p>
              <a href="/pricing">
                <p>Pricing</p>
              </a>
              <a href="/testimonials">
                <p>Success Stories</p>
              </a>
              {/* <a href="https://lms.aceadc.com">
                <p>LMS</p>
              </a> */}
            </div>
            <div
              className={`flex flex-col gap-4 text-white text-center md:text-left mt-10 md:mt-0`}
            >
              <p className="text-white font-bold">Legal</p>
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
              className={`flex flex-col gap-4 text-white text-center md:text-left mt-10 md:mt-0`}
            >
              <p className="text-white font-bold">Socials</p>
              <a href="https://www.facebook.com/profile.php?id=61558405256259">
                <p>Facebook</p>
              </a>
              {/* <a href="https://www.linkedin.com/company/aceadc/">
                <p>LinkedIn</p>
              </a> */}
              <a href="https://www.youtube.com/@Ace_ADC">
                <p>Youtube</p>
              </a>
              <a href="https://medium.com/@AceADC">
                <p>Blog</p>
              </a>
            </div>
            <div
              className={`flex flex-col gap-4 text-white text-center md:text-left mt-10 md:mt-0`}
            >
              <p className="text-white font-bold">Support</p>
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
            <hr />
            {/* <p>© Ace ADC ABN A/F. All rights reserved.</p> */}
          </div>
        </footer>
      </section>
    </>
  );
}
