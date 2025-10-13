import React from "react";

const TextContent = ({ heading, subheading, description }) => {
 return (
 <div className="text-center max-w-7xl mb-6 mt-4 rounded-xl mx-auto text-blue-500 px-6 sm:px-8">
  <h1 className="text-3xl md:text-4xl font-bold mb-5">
    {heading}
  </h1>

  <p className="text-sm max-w-3xl max-[847px]:max-w-2xl md:text-base mx-auto">
    {description}
  </p>

  <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-5">
    {subheading}
  </h1>
</div>


  );
};

export default TextContent;
