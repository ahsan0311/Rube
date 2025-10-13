import React from "react";

const AboutDetails = ({ title, description}) => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className=" bg-gray-200 p-6 border-l-8 border-orange-500">
        <h1 className="text-3xl font-bold text-sky-500">{title}</h1>
      </div>

      <div className="text-gray-800 py-3">
        <p className="leading-relaxed mb-4">{description}</p>

      </div>
    </div>
  );
};

export default AboutDetails;
