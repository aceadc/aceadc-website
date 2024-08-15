import SectionWithHeading from "./SectionWithHeading";
import React, { useEffect, useState } from "react";

export default function BlogCarrousel() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40AceAdc"
    )
      .then((response) => response.json())
      .then((data) => {
        const latestBlogs = data.items.slice(0, 3).map((item, index) => ({
          title: item.title,
          description: cleanHtmlAndTruncate(item.description, 101),
          link: item.link,
          thumbnail: item.thumbnail
            ? item.thumbnail
            : index % 2 === 0
            ? "/blog/dental_prostho.jpg"
            : "/blog/dental_practice.jpg",
        }));
        setBlogs(latestBlogs);
      });
  }, []);

  const cleanHtmlAndTruncate = (html, maxLength) => {
    const plainText = html.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
    if (plainText.length > maxLength) {
      return plainText.substring(0, maxLength) + "...";
    }
    return plainText;
  };

  const truncateTitle = (title) => {
    return title.length > 50 ? title.slice(0, 50) + "..." : title;
  };

  return (
    <SectionWithHeading heading="Updates">
      <div>
        <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
          Take a Deep Dive into the latest at Ace ADC
        </p>
        <div className="grid grid-cols-2 gap-6 md:gap-12 mt-8">
          {blogs.map((blog, index) => (
            <div className="col-span-1" key={index}>
              <div className="flex justify-center">
                <img
                  className="rounded-lg w-5/5"
                  src={blog.thumbnail}
                  alt={blog.title}
                />
              </div>
              <p className="text-white pt-2 font-semibold md:text-xl">
                {truncateTitle(blog.title)}
              </p>
              <p className="text-gray-400 pt-0.5 md:text-lg">
                {blog.description}
              </p>
              <div className="flex justify-center mt-3">
                <a
                  id="apply-button-footer-cta"
                  href={blog.link}
                  className="inline-flex space-x-3 p-3 lg:px-6 lg:py-3.5 bg-primary-500 text-indigo-600 rounded-md text-base lg:text-lg text-center font-semibold shadow-lg hover:bg-primary-400 hover:text-indigo-700 hover:shadow-2xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-16 w-full flex-wrap pb-1 mt-5">
          <a
            className="flex mt-5 md:w-5/6 justify-center items-center space-x-3 border border-indigo-400 text-indigo-300 bg-gray-800 rounded-md text-base font-medium underline px-3 py-2 hover:bg-gray-900 hover:text-indigo-300 transition"
            href="https://medium.com/@aceadc"
            target="_blank"
          >
            <span>See all</span>
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
          </a>
        </div>
      </div>
    </SectionWithHeading>
  );
}
