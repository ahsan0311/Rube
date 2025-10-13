import React, { useState, useEffect } from "react";

const CustomCarousel = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => setCurrent(index);
  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative w-full overflow-hidden mt-20">
      {/* Slides wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full flex-shrink-0">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-[300px] sm:h-[450px] md:h-[600px] object-contain bg-black"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 text-gray-800 hover:bg-white shadow-md p-2 rounded-full transition duration-300 z-10"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 text-gray-800 hover:bg-white shadow-md p-2 rounded-full transition duration-300 z-10"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-blue-600 scale-110" : "bg-white/70"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;



// import React, { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";

// const CustomCarousel = ({ 
//   images = [], 
//   autoPlay = true,
//   showControls = true,
//   showIndicators = true,
//   interval = 4000 
// }) => {
//   const [current, setCurrent] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(autoPlay);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   useEffect(() => {
//     let intervalId;
//     if (isPlaying && images.length > 1) {
//       intervalId = setInterval(() => {
//         handleNext();
//       }, interval);
//     }
//     return () => clearInterval(intervalId);
//   }, [isPlaying, images.length, interval]);

//   const handleNext = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//     setTimeout(() => setIsTransitioning(false), 700);
//   };

//   const handlePrev = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//     setTimeout(() => setIsTransitioning(false), 700);
//   };

//   const goToSlide = (index) => {
//     if (isTransitioning || index === current) return;
//     setIsTransitioning(true);
//     setCurrent(index);
//     setTimeout(() => setIsTransitioning(false), 700);
//   };

//   const togglePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   if (images.length === 0) {
//     return (
//       <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
//         <p className="text-gray-500">No images to display</p>
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full overflow-hidden bg-gray-900 mt-20">
//       {/* Slides Container - Full Width */}
//       <div className="relative w-full">
//         <div
//           className="flex transition-transform duration-700 ease-in-out"
//           style={{ transform: `translateX(-${current * 100}%)` }}
//         >
//           {images.map((src, index) => (
//             <div key={index} className="min-w-full flex-shrink-0 flex justify-center items-center">
//               <img
//                 src={src}
//                 alt={`Slide ${index + 1}`}
//                 className="w-auto max-w-full h-auto max-h-[80vh] object-scale-down"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       {showControls && images.length > 1 && (
//         <>
//           <button
//             onClick={handlePrev}
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 shadow-2xl p-4 rounded-full transition-all duration-300 z-10 transform hover:scale-110 active:scale-95 group"
//             aria-label="Previous slide"
//           >
//             <FaChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
//           </button>
          
//           <button
//             onClick={handleNext}
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 shadow-2xl p-4 rounded-full transition-all duration-300 z-10 transform hover:scale-110 active:scale-95 group"
//             aria-label="Next slide"
//           >
//             <FaChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
//           </button>
//         </>
//       )}

//       {/* Play/Pause Button */}
//       {autoPlay && images.length > 1 && (
//         <button
//           onClick={togglePlayPause}
//           className="absolute top-6 right-6 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10 backdrop-blur-sm"
//           aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
//         >
//           {isPlaying ? <FaPause className="w-5 h-5" /> : <FaPlay className="w-5 h-5" />}
//         </button>
//       )}

//       {/* Indicators */}
//       {showIndicators && images.length > 1 && (
//         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-4 h-4 rounded-full transition-all duration-500 transform ${
//                 current === index 
//                   ? "bg-white scale-125 shadow-lg" 
//                   : "bg-white/50 hover:bg-white/70 scale-100"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             ></button>
//           ))}
//         </div>
//       )}

//       {/* Slide Counter */}
//       <div className="absolute top-6 left-6 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm z-10">
//         {current + 1} / {images.length}
//       </div>

//       {/* Loading State */}
//       {isTransitioning && (
//         <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-0">
//           <div className="w-10 h-10 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomCarousel;