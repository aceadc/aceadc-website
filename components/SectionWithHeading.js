export default function SectionWithHeading({
  children,
  heading,
  darkBackground = false,
}) {
  return (
    <section
      className={`${
        darkBackground ? "bg-gray-900" : "bg-gray-800"
      } border-t border-gray-700 relative`}
    >
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto ">
        <div className="mx-4  xl:mx-0 border-l border-gray-700">
          <div className="py-10 lg:py-16">
            <div className="heading-with-leftborder">
              <h2 className="font-bold text-2xl lg:text-6xl text-primary-500 leading-tight ml-2 md:ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
                {heading}
              </h2>
            </div>
            <div className="max-w-6xl ml-2 md:ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
