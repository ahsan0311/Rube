import React, { useState, useRef, useEffect } from "react";

const tabsData = [
  {
    title: "AI & Machine Learning Solutions",
    img: "/assets/icon_1.png",
    content:
      "Our AI in business management tools use machine learning models to automate workflows, enhance decision-making, and deliver predictive insights, all customized for your operations. A core part of our agile software solutions approach.",
  },
  {
    title: "Cloud Computing",
    img: "/assets/icon_2.png",
    content:
      "Our cloud solutions help you scale with confidence. From AWS and Azure deployments to serverless architectures and cloud-native development, we design, migrate, and maintain your cloud infrastructure for optimal performance.",
  },
  {
    title: "Custom Dashboard",
    img: "/assets/icon_3.png",
    content:
      "Gain visual clarity and operational insight with custom dashboards. From real-time performance tracking to interactive BI dashboards, we tailor visualizations for better decision-making and cross-functional monitoring.",
  },
  {
    title: "ERP & CRM Integrations",
    img: "/assets/icon_4.png",
    content:
      "Seamlessly connect your systems with powerful ERP & CRM integrations. Automate workflows, unify data, and improve customer engagement using platforms like Salesforce, Zoho, Hubspot, and custom API integrations.",
  },
  {
    title: "UI/UX Design",
    img: "/assets/icon_5.png",
    content:
      "Design experiences that delight users. We create intuitive interfaces, perform UX audits, and build interactive prototypes that blend functionality with visual appeal to enhance usability and engagement.",
  },
  {
    title: "Website Development",
    img: "/assets/icon_5.png",
    content:
      "Build fast, SEO-optimized websites that convert. Our responsive web development services include everything from landing pages to complex web apps, built using modern frameworks like React, Next.js, and more.",
  },
];

const SolutionsTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const underlineRef = useRef(null);

  useEffect(() => {
    const currentTab = tabRefs.current[activeIndex];
    const underline = underlineRef.current;

    if (currentTab && underline) {
      const { offsetLeft, offsetWidth } = currentTab;
      underline.style.left = `${offsetLeft}px`;
      underline.style.width = `${offsetWidth}px`;
    }
  }, [activeIndex]);

  return (
    <div className="bg-[#0A0A0A] rounded-4xl m-5">

      <div className="max-w-[1400px] mx-auto text-white p-8 rounded-3xl">

        <div className="relative overflow-x-auto scrollbar-hide">
          <div className="inline-flex min-w-full border-b border-gray-700 relative">
            <div className="flex justify-between w-full">
              {tabsData.map((tab, index) => {
                const [firstWord, ...restWords] = tab.title.split(" ");
                const restTitle = restWords.join(" ");
                return (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    ref={(el) => (tabRefs.current[index] = el)}
                    className={`flex-shrink-0 flex flex-col items-center justify-center cursor-pointer mb-5 px-2 py-4 transition-all duration-300 ${
                      activeIndex === index ? "text-white" : "text-gray-400"
                    }`}
                    style={{ minWidth: "160px" }}
                  >
                    <img
                      src={tab.img}
                      alt={tab.title}
                      className="w-16 h-16 mb-2 object-contain"
                    />
                    <div className="text-center text-base md:text-lg font-semibold w-full whitespace-normal">
                      <span>{firstWord}</span>
                      <br />
                      <span>{restTitle}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Underline animation */}
            <div
              ref={underlineRef}
              className="absolute bottom-0 h-0.5 bg-[#00317B] rounded-full transition-all duration-300"
              style={{ left: 0, width: 0 }}
            />
          </div>
        </div>

        {/* Tab content */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 md:gap-10 items-start px-4 sm:px-10">
          <div className="p-4 md:p-8 rounded-2xl h-full text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              {tabsData[activeIndex].title}
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="p-4 md:p-8 rounded-2xl flex flex-col justify-between h-full max-w-3xl w-full">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 text-left">
                {tabsData[activeIndex].content}
              </p>

              <div className="text-center md:text-right">
                <button className="bg-[#00317B] text-white px-[60px] py-3 rounded-full hover:bg-blue-700 text-[20px]">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SolutionsTabs;
