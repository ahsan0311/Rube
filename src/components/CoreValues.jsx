import React from "react";
import {
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaUserGraduate,
} from "react-icons/fa";

const coreValues = [
  {
    icon: (
      <FaUserGraduate className="text-green-500 text-5xl mx-auto mb-4 transform transition-transform duration-300 hover:scale-110" />
    ),
    title: "Skills for Success",
    items: [
      "Our priority is to provide top-notch education and practical skills that empower individuals to achieve their goals and excel in their careers.",
    ],
    borderColor: "border-green-400",
    borderWidth: "border",
  },
  {
    icon: (
      <FaHandshake className="text-yellow-500 text-5xl mx-auto mb-4 transform transition-transform duration-300 hover:scale-110" />
    ),
    title: "Trust & Honesty",
    items: [
      "We uphold honesty and transparency in all our actions, ensuring trust and reliability for everyone we serve.",
    ],
    borderColor: "border-yellow-400",
    borderWidth: "border-2",
  },
  {
    icon: (
      <FaLightbulb className="text-blue-500 text-5xl mx-auto mb-4 transform transition-transform duration-300 hover:scale-110" />
    ),
    title: "Innovation",
    items: [
      "We believe in driving progress through creativity, adapting to new trends, and finding modern solutions to challenges.",
    ],
    borderColor: "border-blue-400",
    borderWidth: "border",
  },
  {
    icon: (
      <FaChartLine className="text-purple-600 text-5xl mx-auto mb-4 transform transition-transform duration-300 hover:scale-110" />
    ),
    title: "Empowerment",
    items: [
      "We empower individuals by equipping them with the skills and confidence needed to achieve their goals and create a better future.",
    ],
    borderColor: "border-purple-600",
    borderWidth: "border",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="relative bg-white pt-16 pb-24 px-6 text-center overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-orange-400 skew-y-[-6deg] origin-bottom-left z-0"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-blue-500">
          CORE <span className="text-blue-500">VALUES</span>
        </h2>

        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-20 h-[2px] bg-blue-400"></div>
          <span className="text-gray-400 text-lg">★</span>
          <div className="w-20 h-[2px] bg-blue-400"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {coreValues.map(
            ({ icon, title, items, borderColor, borderWidth }, i) => (
              <div
                key={i}
                className={`${borderColor} ${borderWidth} rounded-xl p-8 shadow-lg  transition-all duration-300 transform hover:scale-105 bg-white`}
              >
                {icon}

                <h3
                  className="
                    text-xl font-semibold text-center mb-4 
                    text-[#ff9704] 
                  "
                >
                  {title}
                </h3>

                <ul className="text-left text-sm text-black space-y-2 max-w-xs mx-auto">
                  {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
