import React from "react";

export default function TutorialSection() {
  return (
    <section
      className="relative py-16 px-6 text-center overflow-hidden"
      style={{
        backgroundImage: "url('/bg-pattern.png')", // 👈 apni bg image yahan lagao
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay light color for readability */}
      <div className="absolute inset-0 bg-[#d9edff]/80"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          OUR LATEST{" "}
          <span className="text-blue-600 border-b-4 border-blue-500">
            TUTORIALS
          </span>
        </h2>

        {/* Decorative line with star */}
        <div className="flex items-center justify-center gap-3 my-4">
          <div className="w-20 h-[2px] bg-blue-400"></div>
          <span className="text-blue-600 text-lg">★</span>
          <div className="w-20 h-[2px] bg-blue-400"></div>
        </div>

        {/* YouTube Video Frame */}
        <div className="relative mt-10 flex justify-center">
          <div className="w-full md:w-[800px] h-[450px] bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID" 
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Decorative shapes like in screenshot */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
      <div className="absolute bottom-16 left-1/4 w-24 h-24 bg-[#cde8ff] rotate-12 rounded-lg opacity-40"></div>
    </section>
  );
}
