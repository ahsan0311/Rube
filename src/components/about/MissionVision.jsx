import React from "react";

const MissionVision = () => {
  return (
    <div>
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center md:items-start ">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end -mt-12">
          <img
            src="https://diggitglobal.com/assets/images/about_img.png"
            alt="Target"
            className="max-w-[600px] w-full h-auto object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-16 text-end  mt-18 md:mt-20 pr-5">
          {/* Mission */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To merge human expertise with machine intelligence, creating
              smarter systems for better business. We help companies automate
              what’s repeatable and grow without the usual tech hurdles.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become the go-to digital transformation company in Dubai for
              businesses and redefine what modern business tools should look
              like: intelligent, lean, and built around people, not platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
