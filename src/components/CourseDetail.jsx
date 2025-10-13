import React from "react";

const CourseDetail = ({ title, description, features }) => {
  return (
    <div className="max-w-7xl mx-auto ">
      {/* Header */}
      <div className=" bg-gray-200 p-6 border-l-8 border-orange-500">
        <h1 className="text-3xl font-bold text-sky-500">{title}</h1>
      </div>

      {/* Body */}
      <div className="p-6 text-gray-800">
        {/* Description */}
        <p className="leading-relaxed mb-4">{description}</p>

        {/* Features Section */}
        {features && features.length > 0 && (
          <>
            <p className="font-semibold text-lg mb-3">
              The major features of this program are as under:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
