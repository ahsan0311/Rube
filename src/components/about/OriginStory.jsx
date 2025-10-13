import React from "react";

const OriginStory = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center md:items-center gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
            Our Origin Story
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Most businesses don’t need more software. They need fewer tools that do more of the right work.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We started Diggit because we were tired of watching teams jump between tabs, patch together platforms, and call that “digital transformation.” Whether it’s building a smart eCommerce store, launching a mobile app, scaling SEO, or designing a clean, unified brand, our goal is always the same:{" "}
            <strong className="text-black font-semibold">
              create things that actually contribute to business success.
            </strong>
          </p>

          <div className="mt-8">
            <button className="bg-[#002D74] hover:bg-[#003D99] text-white font-medium text-lg px-6 py-3 rounded-full transition duration-300">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://diggitglobal.com/assets/images/story_img.png"
            alt="Developer working"
            className="w-full max-w-[600px] h-auto object-cover rounded-[2rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default OriginStory;
