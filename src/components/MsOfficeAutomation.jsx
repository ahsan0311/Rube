// import React from "react";
// import { FaRegFileAlt } from "react-icons/fa";

// const MsOfficeAutomation = ({
//   heading = "INQUIRY FORM",
//   buttonText = "SEND MESSAGE",
//   imageSrc = "https://computercollegiate.com.pk/wp-content/uploads/2025/05/page-2-03.png",
//   automationTopics = [
//     "Introduction to Windows 11",
//     "Microsoft Word",
//     "Microsoft Excel",
//     "Microsoft PowerPoint",
//     "Internet",
//   ],
//   iconImages = [
//     "https://rubycommercialcentre.com/images/windows.png",
//     "https://rubycommercialcentre.com/images/word.png",
//     "https://rubycommercialcentre.com/images/excel.png",
//     "https://rubycommercialcentre.com/images/powerpoint.png",
//   ],
// }) => {
//   return (
//     <section className="mt-12 px-4 sm:px-8 md:px-8 lg:px-14 mb-20">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start">

//         {/* LEFT SIDE */}
//         <div className="w-[45%] ">
//           <div className="flex flex-col md:flex-row items-start gap-6">

//             <div className="flex md:flex-col gap-4 md:gap-6 items-start md:items-center">
//               {iconImages.map((src, index) => (
//                 <img
//                   key={index}
//                   src={src}
//                   alt={`Icon ${index + 1}`}
//                   className="w-16 h-16 md:w-16 md:h-16"
//                 />
//               ))}
//             </div>
//             {/* Content */}
//             <div className="text-left w-full">
//               <img
//                 src={imageSrc}
//                 alt="Office Logo"
//                 className="mb-4 w-40 md:w-52"
//               />

//               <h2 className="text-2xl md:text-3xl font-bold text-blue-600 bg-gray-100 px-4 py-1 inline-block rounded">
//                 AUTOMATION
//               </h2>

//               <ul className="list-disc pl-5 mt-5 text-gray-700 space-y-1 text-sm md:text-base">
//                 {automationTopics.map((topic, index) => (
//                   <li key={index}>{topic}</li>
//                 ))}
//               </ul>

//               <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-md flex items-center gap-2">
//                 <FaRegFileAlt className="text-lg" />
//                 View Course Outline
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE - FORM */}
//         <div className="flex-1 w-full">
//           <div className="border border-orange-400 rounded-lg p-6 shadow-lg w-full">
//             <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
//               {heading.split(" ")[0]}{" "}
//               <span className="text-blue-600">{heading.split(" ")[1]}</span>
//             </h2>

//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full p-3 bg-gray-100 rounded-md focus:outline-blue-500"
//               />
//               <input
//                 type="text"
//                 placeholder="Contact Number"
//                 className="w-full p-3 bg-gray-100 rounded-md focus:outline-blue-500"
//               />
//               <input
//                 type="email"
//                 placeholder="Your E-mail"
//                 className="w-full p-3 bg-gray-100 rounded-md focus:outline-blue-500"
//               />
//               <input
//                 type="text"
//                 placeholder="Course"
//                 className="w-full p-3 bg-gray-100 rounded-md focus:outline-blue-500"
//               />
//               <textarea
//                 rows="4"
//                 placeholder="Message"
//                 className="w-full p-3 bg-gray-100 rounded-md focus:outline-blue-500 resize-none"
//               ></textarea>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md"
//               >
//                 {buttonText}
//               </button>
//             </form>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default MsOfficeAutomation;

import React, { useState, useEffect, useRef } from "react";
import { FaRegFileAlt, FaPlay, FaCheckCircle } from "react-icons/fa";

const MsOfficeAutomation = ({
  heading = "INQUIRY FORM",
  buttonText = "SEND MESSAGE",

  showMainLogo = true,
  imageSrc = "https://computercollegiate.com.pk/wp-content/uploads/2025/05/page-2-03.png",

  automationTopics = [
    "Introduction to Windows 11",
    "Microsoft Word",
    "Microsoft Excel",
    "Microsoft PowerPoint",
    "Internet",
  ],

  showIcons = true,
  iconImages = [
    "https://rubycommercialcentre.com/images/windows.png",
    "https://rubycommercialcentre.com/images/word.png",
    "https://rubycommercialcentre.com/images/excel.png",
    "https://rubycommercialcentre.com/images/powerpoint.png",
  ],

  courseTitle = "MS OFFICE",
  mainHeading = "Master MS Office",
  subHeading = "Transform your productivity with our comprehensive MS Office course.",
  showVideoSection = true,
  showBenefitsTable = true,
  videoUrl = "https://rubycommercialcentre.com/images/msoffice.mp4",
  courseDetails = [
    { label: "Duration", value: "3 Months" },
    { label: "Project/Assignment", value: "Yes" },
    { label: "Days", value: "Monday to Friday" },
    { label: "Certificate", value: "Yes (Paid)" },
  ],
  benefitsData = [
    {
      title: "Beginner Friendly",
      description:
        "No prior experience required. Start from scratch and master MS Office.",
    },
    {
      title: "Industry-Relevant Skills",
      description:
        "Learn practical skills that employers are looking for in today's job market.",
    },
    {
      title: "Expert Instructors",
      description:
        "Learn from certified professionals with years of industry experience.",
    },
    {
      title: "Career Advancement",
      description:
        "Boost your resume and open doors to better job opportunities.",
    },
  ],
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
            {mainHeading}
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subHeading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className=" rounded-2xl  p-6 flex flex-col md:flex-row items-start gap-6">
              {(showMainLogo || (showIcons && iconImages.length > 0)) && (
                <div className="flex flex-col items-center justify-center">
                  {showMainLogo && (
                    <img
                      src={imageSrc}
                      alt="Course Logo"
                      className="w-40 mb-4 object-contain"
                    />
                  )}

                  {showIcons && iconImages.length > 0 && (
                    <div
                      className={`grid grid-cols-2 gap-4 justify-items-center items-center ${
                        showMainLogo ? "mt-2" : ""
                      }`}
                    >
                      {iconImages.map((src, index) => (
                        <div
                          key={index}
                          className="flex justify-center items-center w-14 h-14 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
                        >
                          <img
                            src={src}
                            alt={`Icon ${index + 1}`}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div
                className={`${showMainLogo || showIcons ? "flex-1" : "w-full"}`}
              >
                <h2 className="text-2xl font-bold text-blue-600  px-4 py-2 inline-block rounded-lg ">
                  {courseTitle}
                </h2>

                <ul className="space-y-3 mt-5">
                  {automationTopics.map((topic, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                  <FaRegFileAlt className="text-lg" />
                  View Course Outline
                </button>
              </div>
            </div>

            {showBenefitsTable && (
              <div
                className={` rounded-2xl  p-6 transition-all duration-700 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Why Choose Our Course?
                </h3>

                <div className="space-y-4">
                  {benefitsData.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100 transition-all duration-300 hover:shadow-md"
                    >
                      <h4 className="font-bold text-blue-700 text-lg">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            {showVideoSection && (
              <div
                className={` rounded-2xl  overflow-hidden transition-all duration-700 delay-400 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <div className="relative  p-6 text-blue-500">
                  <h3 className="text-2xl font-bold">Course Preview</h3>
                  <p className="mt-2 mb-4 opacity-90">
                    See what you'll learn in our MS Office Automation course
                  </p>
                  <div className="relative rounded-lg overflow-hidden aspect-video">
                    <iframe
                      src={videoUrl}
                      title="Course Preview"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {courseDetails.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h4 className="text-blue-700 font-semibold text-lg mb-1">
                    {item.label}
                  </h4>
                  <p className="text-gray-700 font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MsOfficeAutomation;

{
  /* <div className={` rounded-2xl  p-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-bold text-center mb-2 text-gray-800">
                {heading.split(" ")[0]}{" "}
                <span className="text-blue-600">{heading.split(" ")[1]}</span>
              </h3>
              <p className="text-center text-gray-600 mb-6">Get started today with our MS Office Automation course</p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Your E-mail"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <input
                  type="text"
                  placeholder="Course"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  value="MS Office Automation"
                  readOnly
                />
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                >
                  {buttonText}
                </button>
              </form>
            </div> */
}
