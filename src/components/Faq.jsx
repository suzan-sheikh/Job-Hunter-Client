import { useState } from "react";

function Faq() {
  const [isOpen, setIsOpen] = useState({});

  const toggleAnswer = (index) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section data-aos="flip-left" className="bg-white dark:bg-gray-900 ">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-blue-500 lg:text-3xl dark:text-white text-center">
        FAQ
        </h1>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div>
          <div>
            <button
              className="flex items-center focus:outline-none"
              onClick={() => toggleAnswer(1)}
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 12H4"
                ></path>
              </svg>

              <h1 className="mx-4 text-md md:text-xl text-gray-700 dark:text-white">
                What should I include in my resume?
              </h1>
            </button>

            {isOpen[1] && (
              <div className="flex mt-8 md:mx-10">
                <span className="border border-blue-500"></span>

                <p className="max-w-3xl text-md text-justify px-4 text-gray-500 dark:text-gray-300">
                  Contact info, summary, work history, education, skills, and
                  certifications tailored to match job requirements for maximum
                  impact.
                </p>
              </div>
            )}
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700" />
          <div>
            <button
              className="flex items-center focus:outline-none"
              onClick={() => toggleAnswer(2)}
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 12H4"
                ></path>
              </svg>

              <h1 className="mx-4 text-md md:text-xl text-gray-700 dark:text-white">
                How do I make my job application stand out?
              </h1>
            </button>

            {isOpen[2] && (
              <div className="flex mt-8 md:mx-10">
                <span className="border border-blue-500"></span>

                <p className="max-w-3xl text-md text-justify px-4 text-gray-500 dark:text-gray-300">
                  Customize your resume, highlight relevant skills, follow
                  instructions, and submit documents promptly to increase
                  visibility and appeal.
                </p>
              </div>
            )}
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700" />
          <div>
            <button
              className="flex items-center focus:outline-none"
              onClick={() => toggleAnswer(3)}
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 12H4"
                ></path>
              </svg>

              <h1 className="mx-4 text-md md:text-xl text-gray-700 dark:text-white">
                How can I catch employers attention with my resume?
              </h1>
            </button>

            {isOpen[3] && (
              <div className="flex mt-8 md:mx-10">
                <span className="border border-blue-500"></span>

                <p className="max-w-3xl text-md text-justify px-4 text-gray-500 dark:text-gray-300">
                  Highlight key achievements, quantify accomplishments, and
                  tailor content to match job requirements to grab employers
                  attention effectively.
                </p>
              </div>
            )}
          </div>
          <hr className="my-8 border-gray-200 dark:border-gray-700" />
        </div>
      </div>
    </section>
  );
}

export default Faq;
