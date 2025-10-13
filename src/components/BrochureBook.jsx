import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BrochureBook = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrev = () => {
    setCurrentPage((prev) =>
      prev === 0 ? Math.max(images.length - 2, 0) : prev - 2
    );
  };

  const handleNext = () => {
    setCurrentPage((prev) =>
      prev + 2 >= images.length ? 0 : prev + 2
    );
  };

  return (
    <div className="max-w-7xl  mx-auto flex flex-col items-center justify-center py-10 px-4 relative">
      <div
        className="
          relative 
          w-full 
          max-w-7xl
          flex 
          overflow-hidden 
          rounded-lg 
          bg-white
        "
      >
        <div className="w-1/2 h-full flex items-center justify-center p-2">
          {images[currentPage] ? (
            <img
              src={images[currentPage]}
              alt={`Page ${currentPage + 1}`}
              className="w-full h-full object-contain max-h-[550px]"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>

        <div className="w-1/2 h-full flex items-center justify-center p-2">
          {images[currentPage + 1] ? (
            <img
              src={images[currentPage + 1]}
              alt={`Page ${currentPage + 2}`}
              className="w-full h-full object-contain max-h-[550px]"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      <div className="mt-3 text-gray-700 font-medium text-center leading-tight">
        Showing Page {currentPage + 1}
        {images[currentPage + 1] ? ` & ${currentPage + 2}` : ""} of {images.length}
      </div>
    </div>
  );
};

export default BrochureBook;
